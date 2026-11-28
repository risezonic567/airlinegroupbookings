import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgePercent, CalendarClock, CheckCircle2, Headphones, WalletCards } from 'lucide-react'
import AirlineLogo from './AirlineLogo'
import destinations from '../../data/destinations'
import deals from '../../data/deals'
import blogs from '../../data/blogs'
import { departureCities } from '../../data/departureCities'

/** Homepage carousel — 7 airlines with Group Travel pages (no United). */
const homeCarouselAirlines = [
    { name: 'American Airlines', href: '/group-travel/american-airlines', alt: 'American Airlines logo' },
    { name: 'Delta Air Lines', href: '/group-travel/delta-airlines', alt: 'Delta Air Lines logo' },
    { name: 'Lufthansa', href: '/group-travel/lufthansa-airlines', alt: 'Lufthansa logo' },
    { name: 'Alaska Airlines', href: '/group-travel/alaska-airlines', alt: 'Alaska Airlines logo' },
    { name: 'JetBlue', href: '/group-travel/jetblue-airlines', alt: 'JetBlue logo' },
    { name: 'Southwest Airlines', href: '/group-travel/southwest-airlines', alt: 'Southwest Airlines logo' },
    { name: 'Qatar Airways', href: '/group-travel/qatar-airways-airlines', alt: 'Qatar Airways logo' },
]

const cardClass =
    'relative isolate flex w-[9.5rem] shrink-0 flex-col items-center gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-white px-3 py-4 text-center shadow-md shadow-blue-950/5 sm:w-[10.5rem]'

const homeDealAlts = {
    'sports-group-travel-deals': 'Sports team and fans in green jerseys at a stadium, Sports Group Travel',
    'black-friday-travel-deals': 'Black gift box with discount percent balloons, Black Friday Group Travel deals',
    'cyber-monday-travel-deals': 'Airplane over a futuristic airport with luggage and passport, Cyber Monday Travel deals',
    'corporate-booking': 'Businessman working on a laptop in an airport lounge, Corporate Booking Group Travel',
}

const homeDealCopy = {
    'sports-group-travel-deals': { title: 'Sports Group Travel', link: 'See sports deals' },
    'black-friday-travel-deals': { title: 'Black Friday Group Travel Deals', link: 'See Black Friday deals' },
    'cyber-monday-travel-deals': { title: 'Cyber Monday Travel Deals', link: 'See Cyber Monday deals' },
    'corporate-booking': { title: 'Corporate Group Travel', link: 'See corporate deals' },
}

const homeDestinationOrder = ['las-vegas', 'miami', 'orlando', 'new-york', 'paris', 'london', 'dubai', 'tokyo']
const homeDestinations = homeDestinationOrder.map((slug) => destinations.find((destination) => destination.slug === slug))

const homeDestinationAlts = {
    paris: 'Group flights to Paris, France – skyline along the Seine river at dusk',
    london: 'Group flights to London, United Kingdom – Big Ben and Westminster Bridge at sunset',
    'las-vegas': 'Group flights to Las Vegas, Nevada – skyline and hotels at dusk',
    orlando: 'Group flights to Orlando, Florida – theme park skyline at dusk',
    'new-york': 'Group flights to New York, New York – city skyline at dusk',
    dubai: 'Group flights to Dubai, United Arab Emirates – Burj Khalifa and skyscrapers at sunset',
    tokyo: 'Group flights to Tokyo, Japan – Tokyo Tower lit up at night',
    miami: 'Group flights to Miami, Florida – skyline across the bay at dusk',
}



function Heading({ eyebrow, first, accent, subtitle }) {
    return <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{first} <span className="text-red-700">{accent}</span></h2>{subtitle && <p className="mt-3 text-md leading-6 text-slate-600 sm:text-md">{subtitle}</p>}</div>
}

function AirlineCardFace({ airline, decorative = false }) {
    return (
        <>
            <span className="relative isolate flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-slate-200">
                <AirlineLogo name={airline.name} alt={decorative ? '' : airline.alt} />
            </span>
            <span className="min-w-0 w-full">
                <span className="block text-sm font-bold leading-snug text-slate-900 sm:text-[15px]">{airline.name}</span>
            </span>
        </>
    )
}

export function AirlinesSection() {
    return (
        <section className="overflow-hidden bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <Heading
                        eyebrow="Fly together"
                        first="Group Flight Booking With Top"
                        accent="Airlines"
                        subtitle="Group rules differ from one airline to the next. We check them for your route, whether you're flying coast to coast or overseas."
                    />
                </div>

                {/* Single-row marquee: one visible set of logos; clone is aria-hidden for seamless loop only */}
                <div className="airline-marquee mt-9" aria-label="Airlines">
                    <div className="airline-marquee-mask">
                        <div className="airline-marquee-track airline-marquee-left">
                            {homeCarouselAirlines.map((airline) => (
                                <Link
                                    key={`link-${airline.href}`}
                                    href={airline.href}
                                    className={`group ${cardClass} z-0 transition-[border-color,box-shadow] duration-200 hover:z-20 hover:border-blue-300 hover:shadow-xl`}
                                >
                                    <AirlineCardFace airline={airline} />
                                </Link>
                            ))}
                            {homeCarouselAirlines.map((airline) => (
                                <div key={`dup-a-${airline.href}`} aria-hidden="true" className={cardClass}>
                                    <AirlineCardFace airline={airline} decorative />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/group-travel"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                    >
                        <span>View all airlines</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export function DealsSection() {
    return (
        <section className="bg-blue-50/60 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <Heading
                    eyebrow="Find your fare"
                    first="Group Travel Flight Deals for"
                    accent="USA Travelers"
                    subtitle="Looking for cheap group flights? Start with the trip you're planning: a game, a conference, a holiday weekend or a company offsite."
                />
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {deals.filter((deal) => homeDealCopy[deal.slug]).map((deal) => {
                        const copy = homeDealCopy[deal.slug]

                        return (
                            <article key={deal.slug} className="group relative min-h-[18.4rem] overflow-hidden rounded-2xl bg-blue-950 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                                <Link
                                    href={`/deals/${deal.slug}`}
                                    aria-label={`${copy.title}: ${copy.link}`}
                                    className="absolute inset-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                                >
                                    <Image src={deal.image} alt={homeDealAlts[deal.slug] || deal.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-[78%_center] transition duration-500 group-hover:scale-105" />
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                    <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-blue-900 shadow-sm">{deal.category}</span>
                                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                        <h3 className="text-xl font-bold text-white">{copy.title}</h3>
                                        <span className="mt-4 inline-flex items-center gap-2 text-md font-bold text-white">
                                            {copy.link}
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        )
                    })}
                </div>
                <div className="mt-6 flex justify-center">
                    <Link href="/deals" className="inline-flex items-center gap-2 text-md font-bold text-blue-700">View all Deals<ArrowRight className="h-4 w-4" /></Link>
                </div>
            </div>
        </section>
    )
}

export function HowItWorksSection() {
    const steps = [
        {
            title: 'Tell us about the trip',
            text: 'Where from, where to, when, and roughly how many of you. Any US city works, and a rough headcount is enough to start.',
        },
        {
            title: 'Get your options',
            text: 'We look at what the airlines offer groups on your route and send a quote you can pass around.',
        },
        {
            title: 'Lock it in',
            text: 'When you’re ready, we keep an eye on deposits, name lists and deadlines so nothing slips.',
        },
    ]

    return (
        <section className="bg-slate-50 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <Heading eyebrow="Simple process" first="How Group Flight Booking" accent="Works" subtitle="Three steps, no jargon." />
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">{index + 1}</span>
                            <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                            <p className="mt-2 text-md leading-6 text-slate-600">{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function WhoItsForSection() {
    const audiences = [
        {
            title: 'Sports teams and fans',
            text: 'Away games, tournaments, camps. Gear and tight schedules are part of the planning.',
        },
        {
            title: 'School and student trips',
            text: 'Field trips, band tours, study abroad. A long name list and one firm deadline.',
        },
        {
            title: 'Church and community groups',
            text: 'Mission trips, retreats and pilgrimages with a long passenger list.',
        },
        {
            title: 'Family reunions and weddings',
            text: 'Grandparents, cousins and teenagers, all landing on the same weekend.',
        },
        {
            title: 'Company trips and conferences',
            text: 'Offsites and events. Finance wants one quote, so we give you one.',
        },
    ]

    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <Heading eyebrow="Who it’s for" first="Group Travel for Teams, Schools," accent="Churches and Families" subtitle="If you're moving ten or more people, this is for you." />
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {audiences.map((audience) => (
                        <article key={audience.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900">{audience.title}</h3>
                            <p className="mt-2 text-md leading-6 text-slate-600">{audience.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function DepartureCitiesSection() {
    return (
        <section className="bg-blue-50/60 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <Heading
                    eyebrow="Departing from"
                    first="Group Flights From Major US"
                    accent="Cities"
                    subtitle="Your group doesn't have to start from one place. Pick the city closest to most of you and we'll work around the nearest airports."
                />
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {departureCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/group-flights/${city.slug}`}
                            className="group flex flex-col justify-center rounded-2xl border border-blue-100 bg-white px-5 py-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                        >
                            <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                                {city.linkText}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                                {city.description}
                            </p>
                        </Link>
                    ))}
                </div>
                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-600">
                    Don't see your city? Most US airports work. Tell us where you're starting from and we'll take it from there.
                </p>
            </div>
        </section>
    )
}

const features = [
    {
        icon: BadgePercent,
        title: 'Fares built for groups',
        text: 'Group airline tickets are priced differently from regular fares. We look at what\'s open for your group size and dates, and send you a quote you can actually compare.',
    },
    { icon: CalendarClock, title: 'Payment terms up front', text: 'Deposit amounts and due dates vary by airline. You hear them from us before you commit.' },
    { icon: Headphones, title: 'Someone to call', text: 'Our toll-free line, +1-833-958-0151, runs 24/7. A late-night question doesn’t have to wait.' },
    { icon: WalletCards, title: 'One place for the details', text: "Names, dates, changes. No digging through five email threads to find who's on which flight." },
    { icon: CheckCircle2, title: 'Your language', text: "We support travelers in 9 languages, which helps when your group isn't all in one country." },
]

export function WhyChooseSection() {
    return <section className="bg-blue-50 py-16 text-slate-900 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Group travel, made clearer</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Why Book Group Flights With <span className="text-blue-600">Airline Group Bookings</span></h2><p className="mt-3 text-md leading-6 text-slate-600 sm:text-base">More people means more dates, more emails and more ways for things to go wrong. We take some of that off you.</p></div><div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-6">{features.map(({ icon: Icon, title, text }, index) => <article key={title} className={`rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-md leading-5 text-slate-600">{text}</p></article>)}</div></div></section>
}

export function DestinationsSection() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <Heading
                    eyebrow="Where to next?"
                    first="Popular Group Flight"
                    accent="Destinations"
                    subtitle="Vegas weekends, Florida getaways, Europe and Asia. Here's where groups are headed."
                />

                {/* Destination Cards Grid - Compact & Sleek */}
                <div className="mt-10 grid grid-cols-2 gap-4 max-[479px]:grid-cols-1 sm:gap-5 lg:grid-cols-4">
                    {homeDestinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl bg-slate-900 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 sm:p-5"
                        >
                            {/* Full source image: banners are 1920x600; small next/image widths blur under tall object-cover crops */}
                            <Image
                                src={destination.image}
                                alt={homeDestinationAlts[destination.slug] || `${destination.name}, ${destination.country}`}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="z-0 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity duration-300 group-hover:from-slate-950/90" />

                            {/* Top Country Badge */}
                            <span className="absolute left-4 top-4 z-[2] rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-medium text-white transition-colors duration-300 group-hover:bg-black/60">
                                {destination.country}
                            </span>

                            {/* Bottom Content Area */}
                            <div className="relative z-[2] flex w-full items-center justify-between gap-2">
                                <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm sm:text-2xl">
                                    {destination.name}
                                </h3>

                                {/* Animated Arrow Button */}
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-slate-900">
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/destinations"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                    >
                        <span>View all destinations</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    )
}

export function BlogsSection() {
    const featuredBlogs = [...blogs]
        .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
        .slice(0, 3)

    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <Heading
                    eyebrow="Travel notes"
                    first="Group Travel Tips &"
                    accent="Guides"
                    subtitle="Short, practical reads for the questions that come up before you book."
                />
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredBlogs.map((post) => (
                        <article
                            key={post.slug}
                            className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                            >
                                <div className="relative h-56 overflow-hidden bg-blue-900">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                                    <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                                        {post.title}
                                    </h3>
                                    <p className="mt-2 min-h-12 text-md leading-6 text-slate-600 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-2 text-md font-bold text-blue-700">
                                        Know More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-md font-bold text-blue-700 hover:text-blue-900"
                    >
                        View all articles <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
