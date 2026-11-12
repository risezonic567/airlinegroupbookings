import {
    airlinesSlugToGroupTravel,
    businessClassSlugRedirects,
    groupTravelSlugRedirects,
} from './data/slugRedirects.js'

const withSlash = (path) => (path.endsWith('/') ? path : `${path}/`)

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // Keep live URLs, canonicals, and sitemap aligned (SEO: trailing slash)
    trailingSlash: true,
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
                    destination: withSlash(`/group-travel/${newSlug}`),
                    permanent: true,
                },
            ]
            if (oldSlug !== newSlug) {
                rules.push({
                    source: `/group-travel/${oldSlug}`,
                    destination: withSlash(`/group-travel/${newSlug}`),
                    permanent: true,
                })
            }
            return rules
        })

        const businessClass = Object.entries(businessClassSlugRedirects).flatMap(([oldSlug, newSlug]) => {
            const rules = [
                {
                    source: `/business-class/${oldSlug}`,
                    destination: withSlash(`/business-class-booking/${newSlug}`),
                    permanent: true,
                },
            ]
            if (oldSlug !== newSlug) {
                rules.push({
                    source: `/business-class-booking/${oldSlug}`,
                    destination: withSlash(`/business-class-booking/${newSlug}`),
                    permanent: true,
                })
                rules.push({
                    source: `/business-class/${newSlug}`,
                    destination: withSlash(`/business-class-booking/${newSlug}`),
                    permanent: true,
                })
            }
            return rules
        })

        const removedSpirit = [
            {
                source: '/group-travel/spirit-airlines',
                destination: withSlash('/group-travel'),
                permanent: true,
            },
            {
                source: '/group-travel/spirit-airlines-group-booking',
                destination: withSlash('/group-travel'),
                permanent: true,
            },
            {
                source: '/flights/spirit-airlines-group-booking',
                destination: withSlash('/group-travel'),
                permanent: true,
            },
            {
                source: '/business-class-booking/spirit-airlines',
                destination: withSlash('/business-class'),
                permanent: true,
            },
            {
                source: '/business-class-booking/spirit-airlines-business-class-flights',
                destination: withSlash('/business-class'),
                permanent: true,
            },
            {
                source: '/business-class/spirit-airlines',
                destination: withSlash('/business-class'),
                permanent: true,
            },
            {
                source: '/business-class/spirit-airlines-business-class-flights',
                destination: withSlash('/business-class'),
                permanent: true,
            },
        ]

        const airlinesToGroupTravel = [
            {
                source: '/airlines',
                destination: withSlash('/group-travel'),
                permanent: true,
            },
            ...Object.entries(airlinesSlugToGroupTravel).map(([oldSlug, newSlug]) => ({
                source: `/airlines/${oldSlug}`,
                destination: withSlash(newSlug ? `/group-travel/${newSlug}` : '/group-travel'),
                permanent: true,
            })),
        ]

        return [...groupTravel, ...businessClass, ...removedSpirit, ...airlinesToGroupTravel]
    },
}

export default nextConfig
