import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FaqSection from '../../components/content/FaqSection'
import { homeFaqs } from '../../data/pageFaqs'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Group Flight Booking FAQs | Airline Group Bookings',
    description:
        'Answers about airline group booking, traveler minimums, online group flight quotes, and how USA organizers work with Airline Group Bookings.',
    path: '/faq',
})

export default function FaqPage() {
    return (
        <main>
            <section className="bg-[#101a3d] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">Help centre</p>
                    <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                        Group flight booking FAQs
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                        Straight answers for organizers planning flights for 10 or more passengers — then request a quote when you are ready.
                    </p>
                </div>
            </section>

            <FaqSection
                heading="Common questions"
                intro={homeFaqs.intro}
                items={homeFaqs.items}
                accentWord="questions"
                path="/faq"
            />

            <section className="bg-slate-50 px-5 pb-16 sm:px-8">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Still planning your group?</h2>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                            Share your route and headcount — we will follow up with clear options, or see how the process works end to end.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/how-it-works"
                            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-bold text-slate-800 hover:border-blue-400 hover:text-blue-800"
                        >
                            How it works
                        </Link>
                        <Link
                            href="/contact#request-quote"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 text-sm font-bold text-white hover:bg-blue-800"
                        >
                            Request a quote
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
