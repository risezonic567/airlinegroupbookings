// app/api/contact/route.js
// Backend for Contact Us form – POST only.

import { NextResponse } from 'next/server';
import { isRateLimited, recordSubmission } from '@/lib/rateLimit';
import { lookupLocation } from '@/lib/geo';
import { getTransporter } from '@/lib/mailer';
import { generateContactEmail } from '@/lib/contactEmailTemplate';

// Helper to trim and cap string values.
function cleanString(value, max) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function validatePayload(payload) {
  const errors = [];
  const sanitized = {
    name: cleanString(payload.name, 100),
    email: cleanString(payload.email, 150),
    phone: cleanString(payload.phone, 20), // keep raw, later digits check.
    subject: cleanString(payload.subject, 150),
    details: cleanString(payload.details, 2000),
    website: typeof payload.website === 'string' ? payload.website.trim() : '',
  };

  // Required fields
  if (!sanitized.name) errors.push('name');
  if (!sanitized.email) errors.push('email');
  if (!sanitized.subject) errors.push('subject');
  if (!sanitized.details) errors.push('details');

  // Email format
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (sanitized.email && !emailRe.test(sanitized.email)) errors.push('email');

  // Phone digits (optional)
  if (sanitized.phone) {
    const digits = sanitized.phone.replace(/\D/g, '');
    if (digits.length < 6 || digits.length > 15) errors.push('phone');
  }

  return { sanitized, errors };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { website } = body;
    // Honeypot – if filled, silently succeed.
    if (typeof website === 'string' && website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    const { sanitized, errors } = validatePayload(body);
    if (errors.length) {
      return NextResponse.json({ success: false, error: 'Please check the form and try again.' }, { status: 400 });
    }

    // Client IP extraction
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    let ip = 'unknown';
    if (forwarded) ip = forwarded.split(',')[0].trim();
    else if (realIp) ip = realIp.trim();

    // Rate limiting – separate namespace
    if (isRateLimited(`contact:${ip}`)) {
      return NextResponse.json({ success: false, error: 'We have already received your request. Our team will contact you shortly.' }, { status: 429 });
    }

    // Detect hostname
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

    // Location lookup – non‑blocking on failure
    const location = await lookupLocation(ip);

    // Prepare transporter
    let transporter;
    try {
      transporter = getTransporter();
    } catch (e) {
      console.error('SMTP configuration error (contact):', e);
      return NextResponse.json({ success: false, error: 'Server configuration error. Please try again later.' }, { status: 500 });
    }

    const { html, text } = generateContactEmail(sanitized, hostname, location, ip);
    const mailOptions = {
      from: `"${brandName}" <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL,
      replyTo: sanitized.email,
      subject: `New Contact Query: ${sanitized.name} - ${sanitized.subject || 'No subject'} | ${hostname}`,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    // Record successful submission
    recordSubmission(`contact:${ip}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ success: false, error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

