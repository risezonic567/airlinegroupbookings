import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import industries, { getIndustryBySlug } from '../../../data/industries'
import { createPageMetadata } from '../../../lib/seo'

export function generateStaticParams() {
    return industries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const industry = getIndustryBySlug(slug)
    if (!industry) return { title: 'Industry not found | Airline Group Bookings' }
    return createPageMetadata({
        title: `${industry.title} | Airline Group Bookings`,
        description: industry.description,
        path: `/industries/${industry.slug}`,
    })
}

export default async function IndustryDetailPage({ params }) {
    const { slug } = await params
    const industry = getIndustryBySlug(slug)
    if (!industry) notFound()

    return (
        <main>
            <section className="bg-[#101a3d] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">{industry.eyebrow}</p>
                    <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{industry.title}</h1>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">{industry.description}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contact#request-quote"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold text-white hover:bg-red-700"
                        >
                            Request a group quote
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/group-travel"
                            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white/15"
                        >
                            Browse airlines
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        How we help {industry.name.toLowerCase()}
                    </h2>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                        {industry.highlights.map((item) => (
                            <li
                                key={item}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                            >
                                <CheckCircle2 className="mb-3 h-5 w-5 text-blue-700" aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10">
                        <Link
                            href="/industries"
                            className="text-sm font-bold text-blue-700 hover:text-blue-900"
                        >
                            ← All industries
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
