// app/api/quote/route.js
// Next.js App Router API route for handling quote submissions.

import { NextResponse } from 'next/server';
import { isRateLimited, recordSubmission } from '@/lib/rateLimit';
import { lookupLocation } from '@/lib/geo';
import { getTransporter } from '@/lib/mailer';
import { generateEmail } from '@/lib/emailTemplate';
import { emailDomainOk, isDisposableEmail, validateEmail, validatePhone } from '@/lib/validators';

export const runtime = 'nodejs';

async function validatePayload(payload) {
  const errors = [];
  const trimAndCap = (value) => {
    if (typeof value !== 'string') return '';
    return value.trim().slice(0, 120).replace(/[\r\n]/g, '');
  };
  const sanitized = {};

  const fields = [
    'tripType',
    'origin',
    'destination',
    'departure',
    'returnDate',
    'secondOrigin',
    'secondDestination',
    'secondDeparture',
    'passengers',
    'cabin',
    'countryCode',
    'website',
  ];
  for (const f of fields) {
    sanitized[f] = trimAndCap(payload[f] ?? '');
  }

  const { tripType, passengers } = sanitized;
  const email = typeof payload.email === 'string' ? payload.email : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim().slice(0, 120) : '';
  sanitized.email = email;
  sanitized.phone = phone;

  // Required fields
  const required = ['tripType', 'origin', 'destination', 'departure', 'passengers', 'cabin', 'email', 'phone'];
  for (const r of required) {
    if (!sanitized[r]) errors.push(r);
  }

  if (tripType === 'Round Trip' && !sanitized.returnDate) errors.push('returnDate');
  if (tripType === 'Multi City') {
    if (!sanitized.secondOrigin) errors.push('secondOrigin');
    if (!sanitized.secondDestination) errors.push('secondDestination');
    if (!sanitized.secondDeparture) errors.push('secondDeparture');
  }

  // tripType enumeration
  if (!['Round Trip', 'One Way', 'Multi City'].includes(tripType)) errors.push('tripType');

  // passengers integer range
  const pax = Number(passengers);
  if (!Number.isInteger(pax) || pax < 1 || pax > 999) errors.push('passengers');

  if (!validateEmail(email)) {
    errors.push('email');
  } else if (isDisposableEmail(email)) {
    errors.push('email');
  } else if (!(await emailDomainOk(email))) {
    errors.push('email');
  } else {
    sanitized.email = email.toLowerCase();
  }

  const validatedPhone = validatePhone(sanitized.countryCode, phone);
  if (!validatedPhone.valid) errors.push('phone');
  sanitized.phoneE164 = validatedPhone.e164;

  // honeypot field is allowed to be any string – handled separately

  return { sanitized, errors: [...new Set(errors)] };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { website } = body;
    // Step a – honeypot
    if (website && website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    const { sanitized, errors } = await validatePayload(body);
    if (errors.length) {
      return NextResponse.json({ success: false, error: 'Please check the form and try again.', fields: errors }, { status: 400 });
    }

    // Step c – client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    let ip = 'unknown';
    if (forwarded) ip = forwarded.split(',')[0].trim();
    else if (realIp) ip = realIp.trim();

    // Step d – rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, error: 'We have already received your requests. Our team will contact you shortly.' }, { status: 429 });
    }

    // Step e – detect origin hostname
    const originHeader = request.headers.get('origin') || request.headers.get('host');
    let hostname = '';
    if (originHeader) {
      try {
        const url = new URL(originHeader.startsWith('http') ? originHeader : `https://${originHeader}`);
        hostname = url.hostname;
      } catch {
        hostname = originHeader;
      }
    }
    if (!hostname) hostname = process.env.SITE_DOMAIN || 'unknown';
    const brandName = process.env.SITE_NAME || '';

    // Step f – location lookup (non‑blocking on failure)
    const location = await lookupLocation(ip);

    // Step g – send email
    let transporter;
    try {
      transporter = getTransporter();

      console.log('SMTP debug:', {
        user: process.env.SMTP_USER,
        passLength: process.env.SMTP_PASS?.length,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
      });
    } catch (e) {
      console.error('SMTP configuration error:', e);
      return NextResponse.json({ success: false, error: 'Server configuration error. Please try again later.' }, { status: 500 });
    }
    const { html, text } = generateEmail({ ...sanitized }, hostname, location, ip);
    const mailOptions = {
      from: `"${brandName}" <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL,
      replyTo: sanitized.email,
      subject: `New Group Quote: ${sanitized.origin} → ${sanitized.destination} (${sanitized.tripType}) | ${hostname}`,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);

    // Step i – record submission after success
    recordSubmission(ip);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
    return NextResponse.json({ success: false, error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
