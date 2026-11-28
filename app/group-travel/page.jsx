import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import groupTravelAirlines from '../../data/groupTravelAirlines'
import { withAirlinesName } from '../../data/slugRedirects'
import JsonLd from '../../components/seo/JsonLd'
import FaqSection from '../../components/content/FaqSection'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { groupTravelFaqs } from '../../data/pageFaqs'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.groupTravel

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/group-travel',
})

export default function GroupTravelPage() {
    return (
        <main>
            <JsonLd data={pageSchemas.groupTravel} />
           <section className="relative isolate overflow-hidden px-5 py-14 text-white sm:px-8 sm:py-20">
    <Image src="/images/group-travel-banner.jpg.png" alt="Group travelers preparing for a shared airline journey" fill priority sizes="100vw" className="-z-20 object-cover" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/75 to-[#101a3d]/35" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Every airline has its own group rules, and they don't always line up. See how they differ, then send us your trip.</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Group Travel Airlines: <span className="text-blue-200">Find the Right One for Your Group</span>
        </h1>

        <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="#airlines" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50">
                Browse airlines <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600">
                Get Your Free Group Quote
            </Link>
        </div>
    </div>
</section>

            <section id="airlines" className="scroll-mt-6 bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Find your airline</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore <span className="text-blue-600">Group Flights</span></h2>
                          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-900">
                        Booking a group isn't like booking one seat, and the airline you choose changes almost everything. One of the group travel airlines below might want a deposit up front. Another will let you wait on passenger names until a few weeks before you fly. Some airlines with a group booking discount only offer it on certain routes and dates, and plenty don't offer one at all. So before you commit, compare the group flight booking policy by airline. It takes a little time, but it can save you a headache later. If you've never done this before, start with our guide on{' '}
                        <Link href="/blog/group-booking-lufthansa-how-it-works-for-10-plus-travelers" className="font-bold text-slate-900 underline hover:text-blue-900">
                            how to book group flights with airlines
                        </Link>
                        , then read our{' '}
                        <Link href="/blog/are-group-flight-tickets-cheaper-than-individual-tickets" className="font-bold text-slate-900 underline hover:text-blue-900">
                            group fare vs. individual fare breakdown
                        </Link>{' '}
                        to see which way to go. Short on time?{' '}
                        <Link href="/contact" className="font-bold text-slate-900 underline hover:text-blue-900">
                            Send us your route, dates and headcount
                        </Link>{' '}
                        and we'll take a look.
                    </p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {groupTravelAirlines.map((airline) => (
                            <Link key={airline.slug} href={`/group-travel/${airline.slug}`} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative aspect-[16/9] overflow-hidden bg-blue-50">
                                    <Image src={airline.image} alt={`${airline.name} group travel`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-slate-900">{withAirlinesName(airline.name)} Group Travel</h3>
                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{airline.description}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection
                heading={groupTravelFaqs.heading}
                intro={groupTravelFaqs.intro}
                items={groupTravelFaqs.items}
                path="/group-travel"
                accentWord="FAQs"
            />
        </main>
    )
}
