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

        const removedSpirit = [
            {
                source: '/group-travel/spirit-airlines',
                destination: '/group-travel',
                permanent: true,
            },
            {
                source: '/group-travel/spirit-airlines-group-booking',
                destination: '/group-travel',
                permanent: true,
            },
            {
                source: '/flights/spirit-airlines-group-booking',
                destination: '/group-travel',
                permanent: true,
            },
            {
                source: '/business-class-booking/spirit-airlines',
                destination: '/business-class',
                permanent: true,
            },
            {
                source: '/business-class-booking/spirit-airlines-business-class-flights',
                destination: '/business-class',
                permanent: true,
            },
            {
                source: '/business-class/spirit-airlines',
                destination: '/business-class',
                permanent: true,
            },
            {
                source: '/business-class/spirit-airlines-business-class-flights',
                destination: '/business-class',
                permanent: true,
            },
        ]

        return [...groupTravel, ...businessClass, ...removedSpirit]
    },
}

export default nextConfig
