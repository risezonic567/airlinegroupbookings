// lib/contactEmailTemplate.js
// Generates HTML and plain‑text email bodies for a Contact Us query.
// All user‑provided values are escaped to prevent HTML injection.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Helper for a normal escaped row.
const rowEsc = (label, value) => `
  <tr>
    <td style="padding: 6px 8px; font-weight: bold; vertical-align: top;">${escapeHtml(label)}</td>
    <td style="padding: 6px 8px; vertical-align: top;">${escapeHtml(value)}</td>
  </tr>`;

// Helper for a row where the value is already safe HTML (e.g., a link).
const rowHtml = (label, html) => `
  <tr>
    <td style="padding: 6px 8px; font-weight: bold; vertical-align: top;">${escapeHtml(label)}</td>
    <td style="padding: 6px 8px; vertical-align: top;">${html}</td>
  </tr>`;

export function generateContactEmail(data, hostname, location, ip) {
  const { name, email, phone, subject, details } = data;
  // Build safe email and phone links.
  const safeEmail = escapeHtml(email);
  const emailLink = `<a href="mailto:${safeEmail}">${safeEmail}</a>`;

  const cleanPhone = phone ? phone.replace(/[^+\d]/g, '') : '';
  const displayPhone = phone ? escapeHtml(phone) : '';
  const phoneLink = cleanPhone
    ? `<a href="tel:${cleanPhone}">${displayPhone}</a>`
    : '';

  // Customer details rows (use rowHtml for pre‑escaped links).
  const custRows = `
    ${rowHtml('Name', escapeHtml(name))}
    ${rowHtml('Email', emailLink)}
    ${phone ? rowHtml('Phone', phoneLink) : ''}
    ${rowEsc('Subject', subject)}
  `;

  // Request info rows.
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
          <h1 style="margin:0; font-size:24px;">New Contact Query</h1>
          <div style="font-size:14px; color:#cbd5e1;">${escapeHtml(hostname)}</div>
        </td></tr>
      </table>
      <div style="padding:20px; max-width:600px; margin:auto;">
        <h2 style="font-size:20px; margin:0 0 12px;">${escapeHtml(subject || 'No subject')}</h2>
        <p style="white-space: pre-wrap;">${escapeHtml(details)}</p>
        <h3 style="margin-top:20px; margin-bottom:8px; font-size:16px;">Customer Details</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #e5e7eb;">
          ${custRows}
        </table>
        <h3 style="margin-top:20px; margin-bottom:8px; font-size:16px;">Request Info</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border:1px solid #e5e7eb;">
          ${reqRows}
        </table>
        <p style="font-size:12px; color:#6b7280; margin-top:20px;">
          This request was submitted via the contact form on ${escapeHtml(hostname)}.
        </p>
      </div>
    </div>`;

  // Plain‑text version – keep line breaks from details.
  const text = `New Contact Query\n\nSubject: ${subject}\n\nMessage:\n${details}\n\nCustomer Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nRequest Info:\nWebsite: ${hostname}\nSubmitted at (UTC): ${new Date().toISOString()}\nSubmitted at (IST): ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\nIP Address: ${ip}\nApprox. location: ${location}\n\n---\nThis request was submitted via the contact form on ${hostname}.`;

  return { html, text };
}

