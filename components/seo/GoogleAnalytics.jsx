'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

/** Fire a GA4 event (safe no-op if gtag missing). */
export function trackEvent(eventName, params = {}) {
    if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
    if (typeof window.gtag !== 'function') return
    window.gtag('event', eventName, params)
}

/**
 * Sitewide GA4 loader — not a public route; not in sitemap.
 * Measurement ID is loaded in-browser by design (same as every major site).
 */
export default function GoogleAnalytics() {
    if (!GA_MEASUREMENT_ID) return null

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
            </Script>
        </>
    )
}
