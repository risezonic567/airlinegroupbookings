'use client'

import { useState } from 'react'
import {
    ArrowRight,
    BadgePercent,
    CalendarDays,
    Check,
    ChevronDown,
    Headphones,
    Plane,
    Star,
    Wallet,
} from 'lucide-react'

const tripTypes = ['Round Trip', 'One Way', 'Multi City']

const benefits = [
    { icon: BadgePercent, title: 'Attractive group deals', text: 'Explore flight discounts made for groups traveling together.' },
    { icon: CalendarDays, title: 'Book now, pay later', text: 'Ask about payment timing and options for your travelers.' },
    { icon: Headphones, title: '24/7 travel assistance', text: 'Get help from a travel specialist whenever your group needs it.' },
    { icon: Wallet, title: 'Flexible payment options', text: 'Choose from payment methods that work for your group.' },
    { icon: Check, title: 'Clear booking support', text: 'Get guidance through your request and booking details.' },
]

const destinations = [
    { name: 'Honolulu, Hawaii', detail: 'Island time starts together', price: 'From $489', image: 'photo-1500375592092-40eb2168fd21' },
    { name: 'Paris, France', detail: 'A little more unforgettable', price: 'From $629', image: 'photo-1502602898657-3e91760cbb34' },
    { name: 'Cancun, Mexico', detail: 'Bring your crew to the coast', price: 'From $379', image: 'photo-1510097467424-192d713fd8b2' },
    { name: 'Dubai, UAE', detail: 'Make a grand entrance', price: 'From $799', image: 'photo-1512453979798-5ea266f8880c' },
]

const popularDeals = [
    { title: 'Group travel deals', text: 'Bring your crew together with flight options that fit your route and travel dates.', image: 'photo-1517486808906-6ca8b3f04846' },
    { title: 'Domestic and international fares', text: 'Compare ways to get your group to memorable places near and far.', image: 'photo-1488646953014-85cb44e25828' },
    { title: 'Business class for groups', text: 'Explore premium cabin options for business trips and special occasions.', image: 'photo-1436491865332-7a61a109cc05' },
]

const blogArticles = [
    { title: 'How to plan flights for a large group', category: 'Group travel guide', image: 'photo-1521737711867-e3b97375f902' },
    { title: 'What to consider when booking group air travel', category: 'Planning tips', image: 'photo-1436491865332-7a61a109cc05' },
    { title: 'Make the most of your next team trip', category: 'Travel inspiration', image: 'photo-1527529482837-4698179dc6ce' },
]

const steps = [
    { number: '01', title: 'Tell us about your trip', text: 'Share your route, dates, and how many people are going.' },
    { number: '02', title: 'Compare group options', text: 'A flight specialist will put together options for your group.' },
    { number: '03', title: 'Choose your flight', text: 'Pick the itinerary that works best and get ready to go.' },
]

const airlineNames = [
    { short: 'AA', name: 'American Airlines' },
    { short: 'DL', name: 'Delta Air Lines' },
    { short: 'UA', name: 'United Airlines' },
    { short: 'BA', name: 'British Airways' },
    { short: 'EK', name: 'Emirates' },
    { short: 'AF', name: 'Air France' },
]

const reviews = [
    { quote: 'Getting options for our whole team in one place made planning so much easier.', name: 'Morgan L.', group: 'Youth sports coordinator' },
    { quote: 'Our specialist helped us compare schedules and find a plan our group could manage.', name: 'Priya S.', group: 'Family reunion organizer' },
    { quote: 'Clear communication made coordinating flights for our event feel straightforward.', name: 'Chris D.', group: 'Conference planner' },
]

const textInputClass = 'mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
const fieldLabelClass = 'text-base font-medium text-slate-600'

function FormField({ label, icon: Icon, children, className = '' }) {
    return (
        <label className={`block min-w-0 ${className}`}>
            <span className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4 text-cyan-600" aria-hidden="true" />}
                <span className={fieldLabelClass}>{label}</span>
            </span>
            {children}
        </label>
    )
}

function SelectControl({ label, icon: Icon, name, value, onChange, children }) {
    return (
        <FormField label={label} icon={Icon}>
            <span className="relative block">
                <select className={`${textInputClass} appearance-none pr-10`} name={name} value={value} onChange={onChange}>
                    {children}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            </span>
        </FormField>
    )
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
    return (
        <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
            <p className="text-xs font-extrabold uppercase tracking-[0.19em] text-cyan-700">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102541] sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">{description}</p>}
        </div>
    )
}

export default function HomePage() {
    const [tripType, setTripType] = useState('Round Trip')
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
        origin: '',
        destination: '',
        departure: '',
        returnDate: '',
        secondOrigin: '',
        secondDestination: '',
        secondDeparture: '',
        passengers: '',
        cabin: 'Economy',
        email: '',
        countryCode: '+1',
        phone: '',
    })

    function updateField(event) {
        const { name, value } = event.target
        setForm((current) => ({ ...current, [name]: value }))
        setSubmitted(false)
    }

    function submitQuote(event) {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <main>
            <section className="relative isolate min-h-[760px] overflow-hidden bg-sky-100 pb-12">
                <div
                    className="absolute inset-0 -z-20 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85')" }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/40 to-white/10" aria-hidden="true" />
                <div className="absolute left-[14%] top-[24%] -z-10 hidden -rotate-12 text-white drop-shadow-lg md:block" aria-hidden="true"><Plane className="h-16 w-16 fill-white/90" /></div>

                <div className="mx-auto max-w-[1440px] px-5 pt-10 sm:px-8 sm:pt-12 lg:px-10">
                    <div className="ml-auto max-w-[760px] text-right text-[#25364a]">
                        <p className="text-lg font-medium sm:text-2xl">Reserve Your Dream Experiences Here</p>
                        <h1 className="mt-2 text-[38px] font-semibold leading-tight tracking-wide sm:text-5xl lg:text-[62px]">
                            FLY TOGETHER, <span className="text-sky-500">SAVE<br className="hidden sm:block" /> TOGETHER</span>
                        </h1>
                    </div>

                    <div id="booking" className="mt-20 scroll-mt-8 sm:mt-28 lg:mt-[150px]">
                        <div className="flex max-w-[690px] overflow-hidden rounded-t-md bg-blue-900 text-white" role="tablist" aria-label="Choose trip type">
                                {tripTypes.map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        role="tab"
                                        aria-selected={tripType === type}
                                        onClick={() => { setTripType(type); setSubmitted(false) }}
                                        className={`flex flex-1 items-center justify-center gap-2 border-r-2 border-white/80 px-2 py-4 text-xs font-bold transition sm:px-5 sm:py-5 sm:text-base ${tripType === type ? 'bg-sky-500' : 'bg-blue-900 hover:bg-blue-800'}`}
                                    >
                                        <Plane className="h-4 w-4 -rotate-12 sm:h-5 sm:w-5" aria-hidden="true" />{type}
                                    </button>
                                ))}
                        </div>

                        <div className="border border-white bg-[#fafafa] px-4 py-5 shadow-xl shadow-slate-900/10 sm:px-6 lg:px-7">
                            <h2 className="sr-only">Get a free group flight quote</h2>
                            <form onSubmit={submitQuote}>
                                <datalist id="airport-suggestions">
                                    <option value="New York (JFK)" /><option value="Los Angeles (LAX)" /><option value="Chicago (ORD)" /><option value="London (LHR)" />
                                </datalist>
                                <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-6">
                                    <FormField label="Flying from:">
                                        <input className={textInputClass} name="origin" value={form.origin} onChange={updateField} list="airport-suggestions" placeholder="Start Searching..." autoComplete="off" required />
                                    </FormField>
                                    <FormField label="To:">
                                        <input className={textInputClass} name="destination" value={form.destination} onChange={updateField} list="airport-suggestions" placeholder="Start Searching..." autoComplete="off" required />
                                    </FormField>
                                    <FormField label="Departure:">
                                        <input className={textInputClass} name="departure" type="date" value={form.departure} onChange={updateField} required />
                                    </FormField>
                                    {tripType === 'Round Trip' && (
                                        <FormField label="Return Date:">
                                            <input className={textInputClass} name="returnDate" type="date" value={form.returnDate} onChange={updateField} min={form.departure || undefined} required />
                                        </FormField>
                                    )}
                                    {tripType === 'Multi City' && <>
                                        <FormField label="Next flight from:">
                                            <input className={textInputClass} name="secondOrigin" value={form.secondOrigin} onChange={updateField} list="airport-suggestions" placeholder="Start Searching..." required />
                                        </FormField>
                                        <FormField label="Next flight to:">
                                            <input className={textInputClass} name="secondDestination" value={form.secondDestination} onChange={updateField} list="airport-suggestions" placeholder="Start Searching..." required />
                                        </FormField>
                                        <FormField label="Next flight date:">
                                            <input className={textInputClass} name="secondDeparture" type="date" value={form.secondDeparture} onChange={updateField} required />
                                        </FormField>
                                    </>}
                                    <FormField label="Passenger:">
                                        <input className={textInputClass} name="passengers" type="number" min="1" max="999" value={form.passengers} onChange={updateField} placeholder="Enter count" required />
                                    </FormField>
                                    <SelectControl label="Class:" name="cabin" value={form.cabin} onChange={updateField}>
                                        <option>Economy</option><option>Premium Economy</option><option>Business</option><option>First Class</option>
                                    </SelectControl>
                                    {tripType === 'One Way' && <div className="hidden lg:block" aria-hidden="true" />}
                                    <FormField label="Email:">
                                        <input className={textInputClass} name="email" type="email" value={form.email} onChange={updateField} placeholder="*****@gmail.com" autoComplete="email" required />
                                    </FormField>
                                    <div className="block min-w-0">
                                        <label htmlFor="phone" className={fieldLabelClass}>Phone No.:</label>
                                        <span className="mt-2 flex h-11 overflow-hidden rounded-md border border-slate-200 bg-white focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">
                                            <select aria-label="Country calling code" name="countryCode" value={form.countryCode} onChange={updateField} className="w-[82px] shrink-0 border-r border-slate-200 bg-transparent px-2 text-sm text-slate-700 outline-none">
                                                <option value="+1">US +1</option><option value="+44">UK +44</option><option value="+91">IN +91</option><option value="+61">AU +61</option><option value="+971">AE +971</option>
                                            </select>
                                            <input id="phone" className="min-w-0 flex-1 bg-transparent px-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="Phone number" autoComplete="tel-national" required />
                                        </span>
                                    </div>
                                    <div className="flex items-end">
                                        <button type="submit" className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-sky-500 px-6 text-base font-bold text-white transition hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200 sm:w-auto">
                                            FREE QUOTE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                                {submitted && <p role="status" className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">Thanks! Your quote request is ready for our flight team.</p>}
                            </form>
                        </div>
                </div>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <SectionHeading eyebrow="Why AirlinesGroup" title="Group travel, made simpler." description="The details matter when everyone is traveling together. Get a dedicated team to help make the journey easier to plan." centered />
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {benefits.map(({ icon: Icon, title, text }) => (
                            <article key={title} className="group rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-xl hover:shadow-slate-900/5">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-500 group-hover:text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                                <h3 className="mt-5 text-base font-bold text-[#102541]">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f8fc] py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <SectionHeading eyebrow="Popular group offers" title="More ways to make the trip yours." description="Explore travel ideas for a team getaway, a long-awaited reunion, or a work trip." />
                        <a href="#booking" className="inline-flex items-center gap-2 pb-1 text-sm font-bold text-cyan-700 transition hover:gap-3">Explore group options <ArrowRight className="h-4 w-4" /></a>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {popularDeals.map((deal) => (
                            <article key={deal.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
                                <div className="h-48 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]" style={{ backgroundImage: `url('https://images.unsplash.com/${deal.image}?auto=format&fit=crop&w=900&q=80')` }} />
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-[#102541]">{deal.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">{deal.text}</p>
                                    <a href="#booking" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-cyan-700">Explore options <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f8fc] py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <SectionHeading eyebrow="Go places together" title="Trips worth sharing." description="Find inspiration for your next group getaway, reunion, celebration, or team trip." />
                        <a href="#booking" className="inline-flex items-center gap-2 pb-1 text-sm font-bold text-cyan-700 transition hover:gap-3">Plan your group trip <ArrowRight className="h-4 w-4" /></a>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {destinations.map((destination) => (
                            <article key={destination.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
                                <div className="relative h-52 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]" style={{ backgroundImage: `url('https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=900&q=80')` }}>
                                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#102541] shadow"><Plane className="h-3 w-3 text-cyan-600" /> Group favorite</span>
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-medium text-slate-500">{destination.detail}</p>
                                    <h3 className="mt-1 text-lg font-bold text-[#102541]">{destination.name}</h3>
                                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                        <span className="text-xs text-slate-500">Group fares</span>
                                        <span className="text-sm font-extrabold text-[#102541]">{destination.price}<span className="font-medium text-slate-400"> / person</span></span>
                                    </div>
                                    <a href="#booking" className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 px-3.5 py-3 text-xs font-bold text-cyan-800 transition hover:bg-cyan-50">Request a quote <ArrowRight className="h-4 w-4" /></a>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 text-[11px] text-slate-400">Displayed fares are examples only and depend on route, travel dates, availability, and group size.</p>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <SectionHeading eyebrow="Easy as one, two, three" title="From your idea to takeoff." description="A clear path to finding flights for the whole group." centered />
                    <div className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
                        <div className="absolute left-[17%] right-[17%] top-7 hidden border-t border-dashed border-cyan-200 md:block" aria-hidden="true" />
                        {steps.map((step) => (
                            <article key={step.number} className="relative text-center">
                                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-white text-sm font-extrabold text-cyan-700 shadow-sm">{step.number}</span>
                                <h3 className="mt-5 text-lg font-bold text-[#102541]">{step.title}</h3>
                                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-slate-100 bg-[#f8fafc] py-12">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="text-center">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">Explore flights across leading airlines</p>
                        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                            {airlineNames.map((airline) => (
                                <div key={airline.name} className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3 py-4 text-left">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#102541] text-[10px] font-black text-white">{airline.short}</span>
                                    <span className="text-[11px] font-bold text-slate-600">{airline.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f8fc] py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <SectionHeading eyebrow="Travel notes" title="Ideas for your next group trip." description="A little inspiration and a few practical tips to help your group get moving." />
                        <a href="#booking" className="inline-flex items-center gap-2 pb-1 text-sm font-bold text-cyan-700 transition hover:gap-3">Plan with a specialist <ArrowRight className="h-4 w-4" /></a>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {blogArticles.map((article) => (
                            <article key={article.title} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
                                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/${article.image}?auto=format&fit=crop&w=900&q=80')` }} />
                                <div className="p-5">
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-cyan-700">{article.category}</p>
                                    <h3 className="mt-2 text-base font-bold leading-6 text-[#102541]">{article.title}</h3>
                                    <a href="#booking" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition group-hover:text-cyan-700">Read more <ArrowRight className="h-3.5 w-3.5" /></a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <SectionHeading eyebrow="Made for the whole group" title="A smoother way to get there." description="Thoughtful support can make all the difference when you are coordinating a lot of travelers." />
                        <div className="flex items-center gap-2 pb-1 text-sm font-bold text-[#102541]"><span className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span><span>Group travel stories</span></div>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {reviews.map((review) => (
                            <article key={review.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
                                <blockquote className="mt-5 text-sm leading-7 text-slate-600">“{review.quote}”</blockquote>
                                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-xs font-extrabold text-cyan-800">{review.name.split(' ').map((part) => part[0]).join('')}</span>
                                    <div><p className="text-sm font-bold text-[#102541]">{review.name}</p><p className="mt-0.5 text-xs text-slate-400">{review.group}</p></div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#102541] px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
                    <div className="max-w-2xl">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">Ready when you are</p>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Let’s get your group going places.</h2>
                        <p className="mt-3 text-sm leading-6 text-white/65">Tell us what you have in mind and start exploring flight options together.</p>
                    </div>
                    <a href="#booking" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 text-sm font-bold text-white transition hover:bg-cyan-400">Get a free quote <ArrowRight className="h-4 w-4" /></a>
                </div>
            </section>
        </main>
    )
}
