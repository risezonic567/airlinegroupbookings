// lib/emailTemplate.js
// Generates the HTML and plain‑text email bodies for a quote request.
// All user‑provided values are escaped to prevent HTML injection.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function generateEmail(data, hostname, location, ip) {
  const {
    tripType,
    origin,
    destination,
    departure,
    returnDate,
    secondOrigin,
    secondDestination,
    secondDeparture,
    passengers,
    cabin,
    email,
    countryCode,
    phone,
  } = data;

  const esc = escapeHtml;

  // Helper that escapes both label and value (default for ordinary rows)
  const rowEsc = (label, value) => `
    <tr>
      <td style="padding: 6px 8px; font-weight: bold; vertical-align: top;">${esc(label)}</td>
      <td style="padding: 6px 8px; vertical-align: top;">${esc(value)}</td>
    </tr>`;

  // Helper for rows where the value is already safe HTML (e.g., <a> tags)
  const rowHtml = (label, htmlValue) => `
    <tr>
      <td style="padding: 6px 8px; font-weight: bold; vertical-align: top;">${esc(label)}</td>
      <td style="padding: 6px 8px; vertical-align: top;">${htmlValue}</td>
    </tr>`;

  // Build details rows.
  let detailsRows = '';
  detailsRows += rowEsc('Trip Type', tripType);
  detailsRows += rowEsc('Flying From', origin);
  detailsRows += rowEsc('Flying To', destination);
  detailsRows += rowEsc('Departure', departure);
  if (tripType === 'Round Trip') {
    detailsRows += rowEsc('Return Date', returnDate);
  }
  if (tripType === 'Multi City') {
    detailsRows += rowEsc('Next Flight From', secondOrigin);
    detailsRows += rowEsc('Next Flight To', secondDestination);
    detailsRows += rowEsc('Next Flight Date', secondDeparture);
  }
  detailsRows += rowEsc('Passengers', passengers);
  detailsRows += rowEsc('Class', cabin);

  // Build safe email and phone links.
  const safeEmail = esc(email);
  const emailLink = `<a href="mailto:${safeEmail}">${safeEmail}</a>`;

  // Keep only digits and leading + for tel: href
  const cleanPhone = `${countryCode}${phone}`.replace(/[^+\d]/g, '');
  const displayPhone = `${countryCode} ${phone}`.trim();
  const phoneLink = `<a href="tel:${cleanPhone}">${esc(displayPhone)}</a>`;

  // Customer details rows (use raw HTML rows for links).
  const custRows = `
    ${rowHtml('Email', emailLink)}
    ${rowHtml('Phone', phoneLink)}
  `;

  // Request info.
  const reqRows = `
    ${rowEsc('Website', hostname)}
    ${rowEsc('Submitted at (UTC)', new Date().toISOString())}
    ${rowEsc('Submitted at (IST)', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))}
    ${rowEsc('IP Address', ip)}
    ${rowEsc('Approx. location', location)}
  `;

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #333;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#1e3a8a; color:#fff;">
        <tr><td style="padding:20px; text-align:center;">
          <h1 style="margin:0; font-size:24px;">New Group Quote Request</h1>
          <div style="font-size:14px; color:#cbd5e1;">${esc(hostname)}</div>
        </td></tr>
      </table>
      <div style="padding:20px; max-width:600px; margin:auto;">
        <div style="margin-bottom:12px;">
          <span style="background:#e5e7eb; color:#111827; padding:4px 8px; border-radius:4px; font-size:12px;">${esc(tripType)}</span>
        </div>
        <h2 style="font-size:20px; margin:0 0 12px;">${esc(origin)} → ${esc(destination)}</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #e5e7eb;">
          ${detailsRows}
        </table>
        <h3 style="margin-top:20px; margin-bottom:8px; font-size:16px;">Customer Details</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #e5e7eb;">
          ${custRows}
        </table>
        <h3 style="margin-top:20px; margin-bottom:8px; font-size:16px;">Request Info</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #e5e7eb;">
          ${reqRows}
        </table>
        <p style="font-size:12px; color:#6b7280; margin-top:20px;">
          This request was submitted from the quote form on ${esc(hostname)}. Reply to this email to contact the customer directly.
        </p>
      </div>
    </div>`;

  // Plain‑text fallback – strip HTML tags.
  const text = `New Group Quote Request\n\nTrip Type: ${tripType}\nFlying From: ${origin}\nFlying To: ${destination}\nDeparture: ${departure}\n${tripType === 'Round Trip' ? `Return Date: ${returnDate}\n` : ''}${tripType === 'Multi City' ? `Next Flight From: ${secondOrigin}\nNext Flight To: ${secondDestination}\nNext Flight Date: ${secondDeparture}\n` : ''}Passengers: ${passengers}\nClass: ${cabin}\n\nCustomer Details:\nEmail: ${email}\nPhone: ${countryCode} ${phone}\n\nRequest Info:\nWebsite: ${hostname}\nSubmitted at (UTC): ${new Date().toISOString()}\nSubmitted at (IST): ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\nIP Address: ${ip}\nApprox. location: ${location}\n\n---\nThis request was submitted from the quote form on ${hostname}. Reply to this email to contact the customer directly.`;

  return { html, text };
}
