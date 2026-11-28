import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Building2, CheckCircle2, Home, Phone } from 'lucide-react'
import { departureCities } from '../../../data/departureCities'
import contactDetails from '../../../data/contact'
import { createPageMetadata } from '../../../lib/seo'
import PageStructuredData from '../../../components/seo/PageStructuredData'

export function generateStaticParams() {
    return departureCities.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const city = departureCities.find((c) => c.slug === slug)
    if (!city) {
        return {
            title: 'Group Flights From US Cities | Airline Group Bookings',
            description: 'Group flight booking from major US airports.',
        }
    }
    return createPageMetadata({
        title: `Group Flights From ${city.name} | Airline Group Bookings`,
        description: city.description,
        path: `/group-flights/${slug}`,
    })
}

export default async function CityGroupFlightsPage({ params }) {
    const { slug } = await params
    const city = departureCities.find((c) => c.slug === slug)
    if (!city) notFound()

    const otherCities = departureCities.filter((c) => c.slug !== slug)

    return (
        <main>
            <PageStructuredData
                name={`Group Flights From ${city.name}`}
                description={city.description}
                path={`/group-flights/${slug}`}
                type="Service"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: `Group Flights from ${city.name}`, path: `/group-flights/${slug}` },
                ]}
            />

            {/* HERO */}
            <section className="bg-slate-950 py-16 text-white sm:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
                        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                            <Home size={14} /> Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Group Flights from {city.name}</span>
                    </nav>

                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-400">Departing from {city.name}</p>
                    <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
                        Group Flights From <span className="text-blue-500">{city.name}</span> for 10+ Travelers
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg text-slate-300">
                        {city.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/#booking"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                            Request a Group Quote <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href={contactDetails.phoneHref}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            <Phone className="h-4 w-4" /> Call {contactDetails.phoneDisplay}
                        </a>
                    </div>
                </div>
            </section>

            {/* DETAILS */}
            <section className="bg-white py-14 sm:py-18">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            How Group Bookings Work From {city.name}
                        </h2>
                        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                            <p>
                                When you are coordinating 10 or more passengers flying out of {city.name}, booking individual seats on airline websites leads to mismatched fares and separate confirmations. With a dedicated group booking, your entire party locks in the same fare with flexible deposit terms.
                            </p>
                            <p>
                                <strong>Served Airports:</strong> {city.airports}. Depending on whether your group prioritizes lowest fares, non-stop schedules, or specific airline alliances, we compare departures across all nearby options to get the most practical itinerary.
                            </p>
                        </div>

                        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                            <h3 className="text-lg font-bold text-slate-900">What you get with your {city.name} group quote:</h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Locked-in fare for all 10+ passengers',
                                    'Flexible deposit structure with balance due later',
                                    'Submit final passenger names closer to departure',
                                    '24/7 support line for changes and coordination',
                                ].map((point) => (
                                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/#booking"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                            >
                                Get Your {city.name} Group Quote <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                            <Building2 className="h-5 w-5" />
                        </span>
                        <h2 className="mt-4 text-lg font-bold text-slate-900">Other Major US Departure Cities</h2>
                        <ul className="mt-3 divide-y divide-slate-200">
                            {otherCities.map((other) => (
                                <li key={other.slug}>
                                    <Link
                                        href={`/group-flights/${other.slug}`}
                                        className="flex items-center justify-between py-3 text-sm font-medium text-slate-700 hover:text-blue-700"
                                    >
                                        <span>Group flights from {other.name}</span>
                                        <ArrowRight className="h-4 w-4 shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>
        </main>
    )
}
