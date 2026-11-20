import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import industries from '../../data/industries'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Group Travel by Industry | Airline Group Bookings',
    description:
        'Explore specialist group flight booking for sports teams, corporate groups, schools, medical groups, faith travel, events, and families.',
    path: '/industries',
})

export default function IndustriesPage() {
    return (
        <main>
            <section className="bg-[#101a3d] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">Specialist group travel</p>
                    <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                        Group flight booking by industry
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                        Dedicated planning support for the groups that travel together — teams, companies, schools, and communities.
                    </p>
                </div>
            </section>

            <section className="bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10">
                    {industries.map((industry) => (
                        <article
                            key={industry.slug}
                            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-700">{industry.eyebrow}</p>
                            <h2 className="mt-3 text-xl font-bold text-slate-900">{industry.name}</h2>
                            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{industry.description}</p>
                            <Link
                                href={`/industries/${industry.slug}`}
                                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                            >
                                Learn more
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
