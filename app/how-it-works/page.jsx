import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardList, FileText, Plane, Users } from 'lucide-react'
import contactDetails from '../../data/contact'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'How Group Flight Booking Works | Airline Group Bookings',
    description:
        'See how airline group booking works with Airline Group Bookings — share your trip details, review a clear quote, finalize seats, and travel together with 24/7 support.',
    path: '/how-it-works',
})

const steps = [
    {
        title: 'Share your group trip details',
        body: 'Tell us your route, dates, approximate headcount, and any must-have timing. Use the quote form or call our desk — whichever is easier for your organizers.',
        Icon: ClipboardList,
    },
    {
        title: 'Review a clear group outline',
        body: 'We compare workable options and send a written outline with fare notes, timing, and next steps so your committee can approve without guesswork.',
        Icon: FileText,
    },
    {
        title: 'Confirm seats and passenger plan',
        body: 'Once you are ready, we guide deposits, name-list timing, and cabin choices based on the airline’s group rules for your itinerary.',
        Icon: Users,
    },
    {
        title: 'Travel on the same flights',
        body: 'Your group stays aligned on the booked itinerary. If someone joins late or drops out, you have a named process instead of last-minute chaos.',
        Icon: Plane,
    },
]

const tips = [
    'Share flexibility on dates or nearby airports when you can — it often opens better inventory.',
    'Mention sports gear, special assistance, or mixed cabin needs early.',
    'Keep one organizer as the main contact so quotes and deadlines stay clear.',
]

export default function HowItWorksPage() {
    return (
        <main>
            <section className="bg-[#101a3d] px-5 py-14 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">Simple process</p>
                    <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                        How group flight booking works
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
                        A calm path from first enquiry to travel day — built for teams, schools, companies, and families flying 10 or more passengers together.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contact#request-quote"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold text-white hover:bg-red-700"
                        >
                            Request a group quote
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <a
                            href={contactDetails.phoneHref}
                            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white/15"
                        >
                            Call {contactDetails.phoneDisplay}
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <ol className="grid gap-5 md:grid-cols-2">
                        {steps.map(({ title, body, Icon }, index) => (
                            <li
                                key={title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-700">
                                            Step {index + 1}
                                        </p>
                                        <h2 className="mt-2 text-xl font-bold text-slate-900">{title}</h2>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="bg-white py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Tips that keep groups on track</h2>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                        {tips.map((tip) => (
                            <li
                                key={tip}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                            >
                                <CheckCircle2 className="mb-3 h-5 w-5 text-blue-700" aria-hidden="true" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Link
                            href="/faq"
                            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 hover:border-blue-400 hover:text-blue-800"
                        >
                            Read FAQs
                        </Link>
                        <Link
                            href="/industries"
                            className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-700 px-5 text-sm font-bold text-white hover:bg-blue-800"
                        >
                            Browse industries
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
