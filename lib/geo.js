// lib/geo.js
// Utility to look up approximate location from an IP using ipinfo.io.
// Returns a string like "City, Region, Country" or "Unknown" on any error.

async function fetchIpInfo(ip, token) {
  const url = token
    ? `https://ipinfo.io/${encodeURIComponent(ip)}/json?token=${encodeURIComponent(token)}`
    : `https://ipinfo.io/${encodeURIComponent(ip)}/json`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) {
      return { ok: false, status: res.status };
    }
    const data = await res.json();
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error };
  } finally {
    clearTimeout(timeout);
  }
}

function formatLocation(data) {
  if (!data) return 'Unknown';
  const parts = [data.city, data.region, data.country].filter(Boolean);
  return parts.length ? parts.join(', ') : 'Unknown';
}

export async function lookupLocation(ip) {
  if (!ip || ip === 'unknown') {
    return 'Unknown';
  }

  const cleanIp = String(ip).trim().replace(/^::ffff:/i, '');
  if (!cleanIp) return 'Unknown';

  const token = process.env.IPINFO_TOKEN?.trim();

  // Prefer token when present; fall back to free/unauthenticated lookup on failure.
  if (token) {
    const withToken = await fetchIpInfo(cleanIp, token);
    if (withToken.ok) return formatLocation(withToken.data);
    console.warn('ipinfo token lookup failed', withToken.status || withToken.error?.message);
  }

  const withoutToken = await fetchIpInfo(cleanIp, null);
  if (withoutToken.ok) return formatLocation(withoutToken.data);

  console.warn('ipinfo lookup failed', withoutToken.status || withoutToken.error?.message);
  return 'Unknown';
}
