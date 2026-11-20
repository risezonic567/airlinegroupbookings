import blogs from '../data/blogs'
import businessClassAirlines from '../data/businessClassAirlines'
import deals from '../data/deals'
import destinations from '../data/destinations'
import groupTravelAirlines from '../data/groupTravelAirlines'
import industries from '../data/industries'
import { absoluteUrl } from '../lib/seo'

const staticPaths = [
    '/',
    '/about',
    '/blog',
    '/business-class',
    '/contact',
    '/deals',
    '/destinations',
    '/disclaimer',
    '/faq',
    '/group-travel',
    '/how-it-works',
    '/industries',
    '/privacy-policy',
    '/private-jet-charter',
    '/refund-policy',
    '/site-map',
    '/terms-conditions',
]

const detailPaths = [
    ...blogs.map(({ slug }) => `/blog/${slug}`),
    ...businessClassAirlines.map(({ slug }) => `/business-class-booking/${slug}`),
    ...deals.map(({ slug }) => `/deals/${slug}`),
    ...destinations.map(({ slug }) => `/destinations/${slug}`),
    ...groupTravelAirlines.map(({ slug }) => `/group-travel/${slug}`),
    ...industries.map(({ slug }) => `/industries/${slug}`),
]

export default function sitemap() {
    return [...staticPaths, ...detailPaths].map((path) => ({
        url: absoluteUrl(path),
    }))
}
