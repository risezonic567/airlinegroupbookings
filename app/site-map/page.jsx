import Link from 'next/link'
import airlines from '../../data/airlines'
import blogs from '../../data/blogs'
import businessClassAirlines from '../../data/businessClassAirlines'
import deals from '../../data/deals'
import destinations from '../../data/destinations'
import groupTravelAirlines from '../../data/groupTravelAirlines'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Site Map | Airline Group Bookings',
    description: 'Browse every page on Airline Group Bookings — main pages, group travel airlines, business class, deals, destinations, and more.',
    path: '/site-map',
})

const linkClass = 'text-md font-semibold text-blue-700 transition hover:text-blue-900 hover:underline'

const mainPages = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/group-travel', label: 'Group Travel' },
    { href: '/business-class', label: 'Business Class' },
    { href: '/deals', label: 'Deals' },
    { href: '/blog', label: 'Blog' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/airlines', label: 'Airlines' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/private-jet-charter', label: 'Private Jet Charter' },
    { href: '/#booking', label: 'Request a Quote' },
]

const legalPages = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms and Conditions' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/site-map', label: 'Site Map' },
]

function SitemapSection({ title, links }) {
    return (
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
            <ul className="mt-4 columns-1 gap-x-8 sm:columns-2 lg:columns-3">
                {links.map((link) => (
                    <li key={link.href} className="mb-2 break-inside-avoid">
                        <Link href={link.href} className={linkClass}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default function SiteMapPage() {
    const groupTravelLinks = groupTravelAirlines.map((airline) => ({
        href: `/flights/${airline.slug}`,
        label: `${airline.name} Group Travel`,
    }))

    const businessClassLinks = businessClassAirlines.map((airline) => ({
        href: `/business-class/${airline.slug}`,
        label: `${airline.name} Business Class`,
    }))

    const airlineLinks = airlines.map((airline) => ({
        href: `/airlines/${airline.slug}`,
        label: `${airline.name} Group Travel`,
    }))

    const dealLinks = deals.map((deal) => ({
        href: `/deals/${deal.slug}`,
        label: deal.title,
    }))

    const blogLinks = blogs.map((post) => ({
        href: `/blog/${post.slug}`,
        label: post.title,
    }))

    const destinationLinks = destinations.map((destination) => ({
        href: `/destinations/${destination.slug}`,
        label: `${destination.name}, ${destination.country}`,
    }))

    return (
        <main>
            <PageStructuredData
                name="Site Map | Airline Group Bookings"
                description="Browse every page on Airline Group Bookings — main pages, group travel airlines, business class, deals, destinations, and more."
                path="/site-map"
                breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Site Map', path: '/site-map' }]}
            />

            <section className="bg-gradient-to-br from-[#087cd1] to-[#1e3a8a] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">All pages</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Site <span className="text-blue-200">Map</span></h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        Find every public page on Airline Group Bookings in one place.
                    </p>
                </div>
            </section>

            <section className="bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:px-10">
                    <SitemapSection title="Main Pages" links={mainPages} />
                    <SitemapSection title="Group Travel Airlines" links={groupTravelLinks} />
                    <SitemapSection title="Business Class" links={businessClassLinks} />
                    <SitemapSection title="Airlines" links={airlineLinks} />
                    <SitemapSection title="Deals" links={dealLinks} />
                    <SitemapSection title="Destinations" links={destinationLinks} />
                    <SitemapSection title="Blog" links={blogLinks} />
                    <SitemapSection title="Policies" links={legalPages} />
                </div>
            </section>
        </main>
    )
}
