import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Home, MessageSquare, Phone, Plane, ShieldCheck, Users } from 'lucide-react'
import contactDetails from '../../data/contact'
import JsonLd from '../../components/seo/JsonLd'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.about

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/about',
})

const handleItems = [
    {
        icon: FileText,
        title: 'Quotes you can share',
        text: 'One clear quote you can forward to a coach, a pastor, a committee or the finance office.',
    },
    {
        icon: ShieldCheck,
        title: 'Deposits and deadlines',
        text: 'We tell you what’s due and when, before you commit to anything.',
    },
    {
        icon: Users,
        title: 'Names and changes',
        text: 'Passenger names and updates live in one place, not scattered across five inboxes.',
    },
    {
        icon: Plane,
        title: 'Business class and beyond',
        text: (
            <>
                Need{' '}
                <Link href="/business-class" className="font-semibold text-blue-700 hover:underline">
                    Business class
                </Link>{' '}
                for part of the group, or a{' '}
                <Link href="/private-jet-charter" className="font-semibold text-blue-700 hover:underline">
                    private jet charter
                </Link>
                ? Just ask.
            </>
        ),
    },
]

const approachItems = [
    {
        icon: CheckCircle2,
        title: 'No guessing',
        text: 'If a rule depends on the airline, we’ll tell you that instead of giving you a vague answer.',
    },
    {
        icon: ShieldCheck,
        title: 'No pressure',
        text: 'A quote is just a quote. Take your time, pass it around your group, then decide.',
    },
    {
        icon: MessageSquare,
        title: 'No dead ends',
        text: 'Call, email or fill out the form. A real person will get back to you.',
    },
]

export default function AboutPage() {
    return (
        <main>
            <JsonLd data={pageSchemas.about} />

            {/* HERO */}
            <section className="relative isolate flex min-h-[270px] items-center justify-center overflow-hidden sm:min-h-[320px] lg:min-h-[360px]">
                <Image
                    src="/images/Realistic Airliner Over World Map.png"
                    alt="Laptop showing the Airline Group Bookings website beside a passport, boarding passes and a world map"
                    fill
                    priority
                    sizes="100vw"
                    className="-z-20 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/75 to-[#101a3d]/35" aria-hidden="true" />
                <div className="relative mx-auto w-full max-w-7xl px-5 py-14 text-center text-white sm:px-8 sm:py-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Group Flight Booking Company in the <span className="text-[#ffcaca]">USA</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-blue-50 sm:text-lg">
                        If you're the one stuck organizing flights for the whole group, you're in the right place. Airline Group Bookings helps teams, schools, churches and families across the USA fly together. Here's who we are and how we work.
                    </p>
                    <nav aria-label="Breadcrumb" className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-100">
                        <Link href="/" className="inline-flex items-center gap-1.5 transition hover:text-white">
                            <Home size={14} aria-hidden="true" /> Home
                        </Link>
                        <span aria-hidden="true" className="text-blue-200/70">/</span>
                        <span aria-current="page" className="text-white">About Us</span>
                    </nav>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
                        <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-3xl bg-blue-100 sm:-bottom-5 sm:-left-5" />
                        <div aria-hidden="true" className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl border-2 border-[#263673]/30 sm:-right-4 sm:-top-4" />
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-100 shadow-xl shadow-slate-900/10">
                            <Image
                                src="/images/about-story.jpg.jpeg"
                                alt="Laptop showing the Airline Group Bookings website beside a passport, boarding passes and a world map"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#263673]">Our Story</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Behind Every <span className="text-[#263673]">Group Booking</span>
                        </h2>
                        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                            <p>
                                Booking a flight for yourself takes ten minutes. Booking for forty people? That’s a long email thread, a spreadsheet nobody fully trusts, and one person who just realized their name is spelled wrong on the ticket. Airline Group Bookings exists to take that job off the organizer’s desk.
                            </p>
                            <p>
                                If you’re the one planning the trip, you probably know the feeling. Maybe it’s a family reunion, a youth soccer tournament, a church mission trip, a school band tour or a company offsite. The groups look different, but the questions are always the same. What’s this going to cost? When is the deposit due? When do you need the names?
                            </p>
                            <p>
                                We try to answer those before you ask. We{' '}
                                <Link href="/group-travel" className="font-semibold text-blue-700 underline hover:text-blue-900">
                                    compare group options for your route
                                </Link>
                                , put the airline rules in plain English, and keep the details in one place so you’re not chasing five people for a passport spelling. Call us at any hour. Our support line runs 24/7, because flights don’t keep office hours.
                            </p>
                            <p>
                                Our team works from Lewes, Delaware, and Gurugram, India, and we speak nine languages between us. That comes in handy when your group isn’t all in one place, or when not everyone is most comfortable in English.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#263673] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#202d60] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                            >
                                Start Your Group Quote <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                            <a
                                href={contactDetails.phoneHref}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#263673] hover:text-[#263673] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                            >
                                <Phone size={17} aria-hidden="true" /> {contactDetails.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE HANDLE */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">What we do</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            What We Handle for <span className="text-blue-700">Your Group</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {handleItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.title}
                                    className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-md shadow-blue-950/5 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                                    <div className="mt-2 text-sm leading-6 text-slate-600">{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="bg-blue-50/60 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Our approach</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Straight Talk You Can <span className="text-red-700">Plan Around</span>
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {approachItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.title}
                                    className="flex flex-col rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CLOSING SECTION */}
            <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-6xl px-5 sm:px-8">
                    <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#101a3d] via-[#162352] to-[#101a3d] px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-20">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.500),transparent)] opacity-20" aria-hidden="true" />
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                            Tell Us Where Your Group Is Headed
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base text-blue-100 sm:text-lg">
                            Send your route, dates and headcount. We'll take it from there.
                        </p>
                        <div className="mt-9 flex justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Get Your Free Group Quote <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
