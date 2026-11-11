import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Phone } from 'lucide-react'
import contactDetails from '../../data/contact'
import JsonLd from '../../components/seo/JsonLd'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.about

const storyParagraphs = [
    'Airline Group Bookings is a group flight booking company USA travelers trust when families, corporate teams, student groups, and event organizers need to fly together. We act as your airline group reservation agency so the details feel clear from the first quote.',
    'Our group travel booking specialists help gather traveler details, compare workable itineraries, and explain fare rules in plain language — a trusted group ticket booking service when you need practical, personal support.',
    'Plans can change at any hour, so our team is available 24/7. Share your route and group size and we will help you start a smooth group flight booking request.',
]

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/about',
})

export default function AboutPage() {
    return (
        <main>
            <JsonLd data={pageSchemas.about} />
            <section className="relative isolate flex min-h-[270px] items-center justify-center overflow-hidden sm:min-h-[320px] lg:min-h-[360px]">
                <Image
                    src="/images/Realistic Airliner Over World Map.png"
                    alt="Airliner flying over a world map"
                    fill
                    priority
                    sizes="100vw"
                    className="-z-20 object-cover"
                />
                {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#19244d]/90 via-[#202d60]/75 to-[#263673]/55" /> */}
                <div className="mx-auto w-full max-w-7xl px-5 py-14 text-center text-white sm:px-8 sm:py-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Trusted Group Flight Booking Company in the <span className="text-[#ffcaca]">USA</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base text-blue-50 sm:text-lg">
                        Meet our group travel booking specialists — a trusted group ticket booking service and airline group reservation agency with clear quotes and 24/7 support.
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

            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
                        <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-3xl bg-blue-100 sm:-bottom-5 sm:-left-5" />
                        <div aria-hidden="true" className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl border-2 border-[#263673]/30 sm:-right-4 sm:-top-4" />
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-100 shadow-xl shadow-slate-900/10">
                            <Image
                                src="/images/about-story.jpg.jpeg"
                                alt="Travelers preparing to take a group flight together"
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
                            Who <span className="text-[#263673]">We Are</span>
                        </h2>
                        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                            {storyParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#263673] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#202d60] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                            >
                                Get a Free Quote <ArrowRight size={17} aria-hidden="true" />
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
        </main>
    )
}
