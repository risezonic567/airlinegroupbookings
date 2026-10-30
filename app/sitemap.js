import airlines from '../data/airlines'
import blogs from '../data/blogs'
import businessClassAirlines from '../data/businessClassAirlines'
import deals from '../data/deals'
import destinations from '../data/destinations'
import groupTravelAirlines from '../data/groupTravelAirlines'
import { SITE_URL } from '../lib/seo'

const staticPaths = [
    '/',
    '/about',
    '/airlines',
    '/blog',
    '/business-class',
    '/contact',
    '/deals',
    '/destinations',
    '/disclaimer',
    '/group-travel',
    '/privacy-policy',
    '/refund-policy',
    '/terms-conditions',
]

const detailPaths = [
    ...airlines.map(({ slug }) => `/airlines/${slug}`),
    ...blogs.map(({ slug }) => `/blog/${slug}`),
    ...businessClassAirlines.map(({ slug }) => `/business-class/${slug}`),
    ...deals.map(({ slug }) => `/deals/${slug}`),
    ...destinations.map(({ slug }) => `/destinations/${slug}`),
    ...groupTravelAirlines.map(({ slug }) => `/flights/${slug}`),
]

export default function sitemap() {
    return [...staticPaths, ...detailPaths].map((path) => ({
        url: new URL(path, SITE_URL).toString(),
    }))
}
