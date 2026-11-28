import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import businessClassAirlines from '../../data/businessClassAirlines'
import JsonLd from '../../components/seo/JsonLd'
import FaqSection from '../../components/content/FaqSection'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { businessClassFaqs } from '../../data/pageFaqs'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.businessClass

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/business-class',
})

export default function BusinessClassPage() {
    return (
        <main>
            <JsonLd data={pageSchemas.businessClass} />
            <section className="relative isolate flex min-h-[340px] items-center overflow-hidden px-5 py-16 text-white sm:min-h-[400px] sm:px-8 sm:py-20">
                <Image src="/images/Luxury Global Flight Experience.png" alt="Luxury business class cabin seating for a global flight experience" fill priority sizes="100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/75 to-[#101a3d]/35" aria-hidden="true" />
                <div className="relative mx-auto w-full max-w-7xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Business Class Flight Booking <span className="text-blue-200">for Individuals & Groups</span>
                    </h1>
                    <h2 className="mt-3 text-lg font-semibold text-blue-100 sm:text-xl">
                        Book Business Class Online, Skip the Fare Hunting, and Keep Your Group Seated Together
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50">
                        Booking business class sounds simple until you actually try it. Prices change between one search and the next, the same seat costs different amounts on different sites, and if you're sorting out a group, it gets messy quickly. We do this every day, so we know where the good fares hide. If you want to book business class online, we'll look at what's open on your dates across American, Delta, United, British Airways, Qatar Airways and plenty of other carriers, then send you the options that make sense. Cheap business class flights USA travelers can actually get do exist, but you usually have to ask the right person at the right time. Flying with a team or a big family? Group business class tickets come with seat holds, deposit deadlines and name-change rules that nobody warns you about. We handle all of that, and we look for business class deals for groups so the whole party sits together without anyone overpaying. Choose an airline below and send us your dates. The quote is free.
                    </p>
                    <Link href="#airlines" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50">
                        Browse business class airlines <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>
            <section id="airlines" className="scroll-mt-6 bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Choose an airline</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore <span className="text-blue-600">Business Class</span></h2>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {businessClassAirlines.map((airline) => (
                            <Link key={airline.slug} href={`/business-class-booking/${airline.slug}`} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative aspect-[16/9] overflow-hidden bg-blue-50">
                                    <Image src={airline.image} alt={`${airline.name} business class travel`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-slate-900">{airline.name} Business Class</h3>
                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{airline.description}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection
                heading={businessClassFaqs.heading}
                intro={businessClassFaqs.intro}
                items={businessClassFaqs.items}
                path="/business-class"
                accentWord="Questions"
            />
        </main>
    )
}
