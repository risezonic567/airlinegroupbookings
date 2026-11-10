import {
    businessClassSlugRedirects,
    groupTravelSlugRedirects,
} from './data/slugRedirects.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        qualities: [75, 90],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        const groupTravel = Object.entries(groupTravelSlugRedirects).flatMap(([oldSlug, newSlug]) => {
            const rules = [
                {
                    source: `/flights/${oldSlug}`,
                    destination: `/group-travel/${newSlug}`,
                    permanent: true,
                },
            ]
            if (oldSlug !== newSlug) {
                rules.push({
                    source: `/group-travel/${oldSlug}`,
                    destination: `/group-travel/${newSlug}`,
                    permanent: true,
                })
            }
            return rules
        })

        const businessClass = Object.entries(businessClassSlugRedirects).flatMap(([oldSlug, newSlug]) => {
            const rules = [
                {
                    source: `/business-class/${oldSlug}`,
                    destination: `/business-class-booking/${newSlug}`,
                    permanent: true,
                },
            ]
            if (oldSlug !== newSlug) {
                rules.push({
                    source: `/business-class-booking/${oldSlug}`,
                    destination: `/business-class-booking/${newSlug}`,
                    permanent: true,
                })
                // After path move, old hub path + new short slug is unlikely; keep old long under booking path covered above.
            }
            // Also redirect old hub path with NEW slug if someone used /business-class/delta-airlines after shorten
            if (oldSlug !== newSlug) {
                rules.push({
                    source: `/business-class/${newSlug}`,
                    destination: `/business-class-booking/${newSlug}`,
                    permanent: true,
                })
            }
            return rules
        })

        return [...groupTravel, ...businessClass]
    },
}

export default nextConfig
