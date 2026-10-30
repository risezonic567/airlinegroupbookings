// lib/mailer.js
// Creates and caches a Nodemailer transporter based on environment variables.
// The transporter is reused for each email to avoid reconnect overhead.

import nodemailer from 'nodemailer';

let transporter = null;

/**
 * Validate that all required SMTP env vars are present.
 * Throws an error with a clear message if any are missing.
 */
function validateConfig() {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_USER', 'SMTP_PASS'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing SMTP configuration env vars: ${missing.join(', ')}`);
  }
}

export function getTransporter() {
  if (transporter) return transporter;

  // Ensure env vars are set before creating the transporter.
  validateConfig();

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const secure = process.env.SMTP_SECURE === 'true' || process.env.SMTP_SECURE === '1';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

