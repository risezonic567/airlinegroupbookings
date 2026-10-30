// lib/geo.js
// Utility to look up approximate location from an IP using ipinfo.io.
// Returns a string like "City, Region, Country" or "Unknown" on any error.

export async function lookupLocation(ip) {
  const token = process.env.IPINFO_TOKEN;
  if (!token || ip === "unknown" || ip.startsWith('127.') || ip === '::1') {
    return "Unknown";
  }
  const url = `https://ipinfo.io/${ip}/json?token=${token}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) return "Unknown";
    const data = await res.json();
    const { city = "", region = "", country = "" } = data;
    const parts = [city, region, country].filter(Boolean);
    return parts.length ? parts.join(", ") : "Unknown";
  } catch (e) {
    return "Unknown";
  } finally {
    clearTimeout(timeout);
  }
}

