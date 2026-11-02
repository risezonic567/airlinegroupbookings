import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgePercent, CalendarClock, CheckCircle2, Headphones, Plane, Star, WalletCards } from 'lucide-react'
import airlines from '../../data/airlines'
import destinations from '../../data/destinations'
import deals from '../../data/deals'
import blogs from '../../data/blogs'




function Heading({ eyebrow, first, accent, subtitle }) {
    return <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{first} <span className="text-blue-600">{accent}</span></h2>{subtitle && <p className="mt-3 text-md leading-6 text-slate-600 sm:text-md">{subtitle}</p>}</div>
}

export function AirlinesSection() {
    return (
        <section className="overflow-hidden bg-gradient-to-b from-blue-50/70 to-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <Heading 
                        eyebrow="Fly together" 
                        first="Airlines" 
                        accent="Group Travel" 
                        subtitle="Explore group flight options with leading airlines." 
                    />
                    <Link 
                        href="/airlines" 
                        className="inline-flex shrink-0 items-center gap-2 self-center text-md font-bold text-blue-700 transition hover:gap-3 sm:self-auto"
                    >
                        View all groups <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {airlines.map((airline, index) => (
                        <Link 
                            key={airline.slug} 
                            href={`/airlines/${airline.slug}`} 
                            style={{ '--airline-card-index': index }} 
                            className="airline-card-enter group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 focus-visible:-translate-y-1.5 focus-visible:border-blue-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                        >
                            {/* SVG Icon Wrapper */}
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800 transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                                {airline.icon ? (
                                    <span className="h-6 w-6 flex items-center justify-center fill-current">
                                        {airline.icon}
                                    </span>
                                ) : (
                                    /* Fallback Plane SVG Icon */
                                    <svg 
                                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        aria-hidden="true"
                                    >
                                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                                    </svg>
                                )}
                            </span>

                            <span className="min-w-0 flex-1">
                                <span className="block text-md font-bold text-slate-900">{airline.name}</span>
                                <span className="mt-1 block text-sm text-slate-500">{airline.name} Group Booking</span>
                            </span>

                            <ArrowRight className="h-4 w-4 shrink-0 text-blue-500 opacity-0 -translate-x-1 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                            <span className="sr-only">Explore airline group booking</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function DealsSection() {
    return <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><Heading eyebrow="Find your fare" first="Popular" accent="Deals" subtitle="Start with a travel idea. We will help you explore the possibilities." /><div className="mt-10 grid gap-5 md:grid-cols-3">{deals.slice(0, 3).map((deal) => <article key={deal.slug} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-950/10"><Link href={`/deals/${deal.slug}`} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"><div className="relative h-52 overflow-hidden bg-blue-900"><Image src={deal.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" /><span className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/5 to-transparent" /><span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-blue-900 shadow-sm">{deal.category}</span><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-800 shadow-md transition duration-300 group-hover:translate-x-1 group-hover:bg-blue-700 group-hover:text-white"><ArrowRight className="h-4 w-4" /></span></div><div className="p-6"><h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">{deal.title}</h3><p className="mt-2 min-h-12 text-md leading-6 text-slate-600">{deal.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-md font-bold text-blue-700">Explore Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></Link></article>)}</div>
        <Link href="/deals" className="mt-6 inline-flex items-center gap-2 text-md font-bold text-blue-700">View all Deals<ArrowRight className="h-4 w-4" /></Link>
    </div></section>
}

const features = [
    { icon: BadgePercent, title: 'Attractive Deals & Discounts', text: 'Compare group flight options for your dates and destination.' },
    { icon: CalendarClock, title: 'Book Now, Pay Later', text: 'Ask about payment schedules available for your quote.' },
    { icon: Headphones, title: '24/7 Travel Assistance', text: 'Reach a travel specialist when your group needs support.' },
    { icon: WalletCards, title: 'Flexible Payment Modes', text: 'Review payment methods and deadlines before booking.' },
    { icon: CheckCircle2, title: 'Booking Confirmation', text: 'Get help keeping passenger details and next steps organized.' },
]

export function WhyChooseSection() {
    return <section className="bg-[#1e3a8a] py-16 text-white sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">Group travel, made clearer</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Why <span className="text-blue-300">Choose Us</span></h2><p className="mt-3 text-md leading-6 text-blue-100 sm:text-base">A dedicated team can make it easier to coordinate flights for everyone.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.07] p-5 transition hover:-translate-y-1 hover:bg-white/10"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/30 text-blue-100"><Icon className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-md leading-5 text-blue-100/80">{text}</p></article>)}</div></div></section>
}

export function DestinationsSection() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <Heading
                        eyebrow="Where to next?"
                        first="Choose Your"
                        accent="Destination"
                        subtitle="Inspire your group with a getaway worth sharing."
                    />
                    <Link
                        href="/destinations"
                        className="group hidden items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800 sm:inline-flex"
                    >
                        <span>View all destinations</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Destination Cards Grid - Compact & Sleek */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-slate-900 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 sm:rounded-3xl sm:p-6"
                        >
                            {/* Background Image - Fixed stacking context */}
                            <Image
                                src={destination.image}
                                alt={`${destination.name}, ${destination.country}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="absolute inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity duration-300 group-hover:from-slate-950/90" />

                            {/* Top Glassmorphism Country Badge */}
                            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-black/40">
                                {destination.country}
                            </span>

                            {/* Bottom Content Area */}
                            <div className="relative z-10 flex w-full items-center justify-between gap-2">
                                <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm sm:text-2xl">
                                    {destination.name}
                                </h3>

                                {/* Animated Arrow Button */}
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-slate-900">
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-8 text-center sm:hidden">
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                    >
                        <span>View all destinations</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}

export function BlogsSection() {
    return <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><Heading eyebrow="Travel notes" first="Our" accent="Blogs" subtitle="Ideas and practical tips for your next group trip." /><div className="mt-10 grid gap-5 md:grid-cols-3">{blogs.map((post) => <article key={post.slug} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-950/10"><Link href={`/blog/${post.slug}`} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"><div className="relative h-48 overflow-hidden bg-blue-900"><Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" /><span className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" /><span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-800">{post.category}</span></div><div className="p-5"><h3 className="text-base font-bold text-slate-900 transition group-hover:text-blue-700">{post.title}</h3><p className="mt-2 text-md leading-6 text-slate-600">{post.excerpt}</p><span className="mt-4 inline-flex items-center gap-2 text-md font-bold text-blue-700">Know More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></Link></article>)}</div><Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-md font-bold text-blue-700">View all articles <ArrowRight className="h-4 w-4" /></Link></div></section>
}
