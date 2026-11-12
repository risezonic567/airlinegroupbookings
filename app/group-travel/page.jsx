import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import groupTravelAirlines from '../../data/groupTravelAirlines'
import { withAirlinesName } from '../../data/slugRedirects'
import JsonLd from '../../components/seo/JsonLd'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
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
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Plan together</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Group Travel Airlines: <span className="text-blue-200">Compare Policies & Discounts</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        Browse group travel airlines and airlines with group booking discount. Review group flight booking policy by airline, learn how to book group flights with airlines, and compare group fare vs individual fare before you request a free group flight quote.
                    </p>
                    <Link href="/airlines" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50">
                        Browse airlines <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>

            <section id="airlines" className="scroll-mt-6 bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Find your airline</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore <span className="text-blue-600">Group Flights</span></h2>
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
        </main>
    )
}
