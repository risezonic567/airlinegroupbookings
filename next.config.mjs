import groupTravelAirlines from './data/groupTravelAirlines.js'
import businessClassAirlines from './data/businessClassAirlines.js'

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
        return [
            ...groupTravelAirlines.map(({ slug }) => ({
                source: `/flights/${slug}`,
                destination: `/group-travel/${slug}`,
                permanent: true,
            })),
            ...businessClassAirlines.map(({ slug }) => ({
                source: `/business-class/${slug}`,
                destination: `/business-class-booking/${slug}`,
                permanent: true,
            })),
        ]
    },
}

export default nextConfig
