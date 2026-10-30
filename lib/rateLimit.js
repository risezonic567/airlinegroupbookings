// lib/rateLimit.js
// Simple in‑memory rate limiter: max 2 successful submissions per IP per 60 minutes.
// Used only for the quote API. No persistence across server restarts.

const LIMIT = 2; // submissions
const WINDOW_MS = 60 * 60 * 1000; // 60 minutes

/**
 * Map of IP → array of timestamp numbers (ms) of successful submissions.
 * The array is always kept sorted (oldest first) and cleaned up on each check.
 */
const ipMap = new Map();

function isLocalIp(ip) {
  return ip === "127.0.0.1" || ip === "::1";
}

/**
 * Clean old timestamps for a given IP.
 * @param {string} ip
 */
function clean(ip) {
  const now = Date.now();
  const timestamps = ipMap.get(ip) || [];
  const filtered = timestamps.filter((t) => now - t < WINDOW_MS);
  if (filtered.length) ipMap.set(ip, filtered);
  else ipMap.delete(ip);
}

/**
 * Returns true if the IP is currently rate‑limited (i.e. has reached the limit).
 * @param {string} ip
 */
export function isRateLimited(ip) {
  if (ip === "unknown" || isLocalIp(ip)) return false; // skip for unknown/local
  clean(ip);
  const timestamps = ipMap.get(ip) || [];
  return timestamps.length >= LIMIT;
}

/**
 * Record a successful submission for the given IP. Call only after email is sent.
 * @param {string} ip
 */
export function recordSubmission(ip) {
  if (ip === "unknown" || isLocalIp(ip)) return; // do not record
  const now = Date.now();
  const timestamps = ipMap.get(ip) || [];
  timestamps.push(now);
  ipMap.set(ip, timestamps);
  // cleanup can be done lazily on next check
}

