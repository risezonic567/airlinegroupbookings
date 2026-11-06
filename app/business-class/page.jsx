import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Plane } from 'lucide-react'
import businessClassAirlines from '../../data/businessClassAirlines'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Business Class Flight Booking | Airline Group Bookings',
    description: 'Compare business class flight booking options. Find cheap business class flights USA, group business class tickets, business class deals for groups, and book business class online with clear support.',
    path: '/business-class',
})

export default function BusinessClassPage() {
    return (
        <main>
            <PageStructuredData name="Business Class Flight Booking | Airline Group Bookings" description="Compare business class flight booking options. Find cheap business class flights USA, group business class tickets, business class deals for groups, and book business class online with clear support." path="/business-class" type="CollectionPage" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Business Class', path: '/business-class' }]} />
            <section className="bg-gradient-to-br from-[#263673] to-[#202d60] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Travel in comfort</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Business Class Flight <span className="text-blue-200">Booking</span></h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">Browse business class flight booking by airline — cheap business class flights USA, group business class tickets, business class deals for groups, and book business class online when you are ready.</p>
                </div>
            </section>
            <section id="airlines" className="scroll-mt-6 bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mb-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Choose an airline</p><h2 className="mt-2 text-3xl font-bold text-slate-900">Explore <span className="text-blue-600">Business Class</span></h2></div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {businessClassAirlines.map((airline) => <Link key={airline.slug} href={`/business-class/${airline.slug}`} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="relative aspect-[16/9] overflow-hidden bg-blue-50"><Image src={airline.image} alt={`${airline.name} business class travel`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Plane className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-lg font-bold text-slate-900">{airline.name} Business Class</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{airline.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span></div>
                        </Link>)}
                    </div>
                </div>
            </section>
        </main>
    )
}
