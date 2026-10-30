import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Phone } from 'lucide-react'
import contactDetails from '../../data/contact'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

const storyParagraphs = [
    'We help families, corporate teams, student groups and event travelers make the journey together. Group flights come with plenty of details to coordinate, and our team is here to make the process feel straightforward.',
    'From gathering traveler details to finding fares that work for your group, our specialists guide you through the booking process with practical, personal support.',
    'Plans can change at any hour, so our expert agents are available 24/7 to help. Tell us where your group is headed and we’ll help you get started.',
]

export const metadata = createPageMetadata({
    title: 'About Us | AirlinesGroup Travel',
    description: 'Learn how Airline Group Booking helps families, teams, students and event groups plan flights together with expert support.',
    path: '/about',
})

export default function AboutPage() {
    return (
        <main>
            <PageStructuredData name="About Us | AirlinesGroup Travel" description="Learn how Airline Group Booking helps families, teams, students and event groups plan flights together with expert support." path="/about" type="AboutPage" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]} />
            <section className="relative isolate flex min-h-[270px] items-center justify-center overflow-hidden sm:min-h-[320px] lg:min-h-[360px]">
                <Image
                    src="/images/about-banner.svg"
                    alt="Airplane flying above a calm blue horizon"
                    fill
                    priority
                    sizes="100vw"
                    className="-z-20 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102b59]/90 via-[#1e3a8a]/75 to-[#0a7bd0]/55" />
                <div className="mx-auto w-full max-w-7xl px-5 py-14 text-center text-white sm:px-8 sm:py-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        About <span className="text-[#60a5fa]">Us</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base text-blue-50 sm:text-lg">
                        Making group travel simple, affordable and stress-free.
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
                        <div aria-hidden="true" className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl border-2 border-[#0a7bd0]/30 sm:-right-4 sm:-top-4" />
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blue-100 shadow-xl shadow-slate-900/10">
                            <Image
                                src="/images/about-story.svg"
                                alt="Travelers preparing to take a group flight together"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a56f0]">Our Story</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Who <span className="text-[#1a56f0]">We Are</span>
                        </h2>
                        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                            {storyParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/#booking"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1a56f0] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#1748cc] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                            >
                                Get a Free Quote <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                            <a
                                href={contactDetails.phoneHref}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0a7bd0] hover:text-[#0a7bd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
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
