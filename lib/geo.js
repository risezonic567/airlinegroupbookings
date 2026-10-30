// lib/geo.js
// Utility to look up approximate location from an IP using ipinfo.io.
// Returns a string like "City, Region, Country" or "Unknown" on any error.

export async function lookupLocation(ip) {
  const token = process.env.IPINFO_TOKEN?.trim();
  if (!token || !ip || ip === 'unknown') {
    return 'Unknown';
  }

  const cleanIp = String(ip).trim().replace(/^::ffff:/i, '');
  const url = `https://ipinfo.io/${encodeURIComponent(cleanIp)}/json?token=${token}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) return 'Unknown';
    const data = await res.json();
    const parts = [data.city, data.region, data.country].filter(Boolean);
    return parts.length ? parts.join(', ') : 'Unknown';
  } catch {
    return 'Unknown';
  } finally {
    clearTimeout(timeout);
  }
}
