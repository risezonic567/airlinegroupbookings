import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Plane } from 'lucide-react'
import groupTravelAirlines from '../../data/groupTravelAirlines'

export const metadata = {
    title: 'Group Travel by Airline | AirlinesGroup Travel',
    description: 'Explore group flight booking information and airline options for your next group trip.',
}

export default function GroupTravelPage() {
    return (
        <main>
            <section className="bg-gradient-to-br from-[#087cd1] to-[#1e3a8a] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Plan together</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Group Travel <span className="text-blue-200">by Airline</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        Compare group flight options from popular airlines. Choose an airline to learn more and start planning your trip.
                    </p>
                    <a href="#airlines" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50">
                        Browse airlines <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </section>

            <section id="airlines" className="scroll-mt-6 bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Find your airline</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore <span className="text-blue-600">Group Flights</span></h2>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {groupTravelAirlines.map((airline) => (
                            <Link key={airline.slug} href={`/flights/${airline.slug}`} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative aspect-[16/9] overflow-hidden bg-blue-50">
                                    <Image src={airline.image} alt={`${airline.name} group travel`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-5">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Plane className="h-5 w-5" aria-hidden="true" /></span>
                                    <h3 className="mt-4 text-lg font-bold text-slate-900">{airline.name} Group Travel</h3>
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
