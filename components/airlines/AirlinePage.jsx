import Image from 'next/image'
import Link from 'next/link'
import { BadgeCheck, Plane, Search, Send, Users, ArrowRight, Phone, Star } from 'lucide-react'
import QuoteForm from '../home/QuoteForm'
import Newsletter from '../home/Newsletter'
import ReviewForm from '../home/ReviewForm'
import airlines from '../../data/airlines'
import contactDetails from '../../data/contact'

const icons = { Send, Search, Users, Plane }

export default function AirlinePage({ airline }) {
    const related = airline.relatedSlugs.map((slug) => airlines.find((item) => item.slug === slug)).filter(Boolean)
    return <main>
        <section className="relative isolate overflow-hidden bg-[#1e3a8a] text-white">
            <Image src={airline.heroImage} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-blue-950/70 to-blue-900/40" />
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10"><nav aria-label="Breadcrumb" className="text-md text-blue-100"><ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-white">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/airlines" className="hover:text-white">Airlines</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-white">{airline.name}</li></ol></nav><div className="mt-8 max-w-2xl"><p className="text-md font-bold uppercase tracking-[.18em] text-blue-200">Group flight booking</p><h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{airline.name} <span className="text-blue-300">Group Travel</span></h1><p className="mt-4 max-w-xl text-base leading-7 text-blue-50">{airline.intro}</p></div></div>
        </section>
        <section id="booking" className="relative z-10 mx-auto -mt-6 max-w-7xl scroll-mt-6 px-5 sm:px-8 lg:px-10"><QuoteForm /></section>

        <section className="bg-white py-14 sm:py-16"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Simple steps</p><h2 className="mt-3 text-3xl font-bold text-slate-900">How to Book <span className="text-blue-600">Group Flights</span></h2></div><div className="relative mt-9 grid gap-5 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-6 before:hidden before:border-t-2 before:border-dotted before:border-blue-300 before:content-[''] sm:grid-cols-2 lg:grid-cols-4 lg:before:block">{airline.steps.map((step, index) => { const Icon = icons[step.icon] || BadgeCheck; return <article key={step.title} className="relative z-10 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" aria-hidden="true"/></span><p className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-700">Step 0{index + 1}</p><h3 className="mt-1 text-base font-bold text-slate-900">{step.title}</h3><p className="mt-2 text-md leading-6 text-slate-600">{step.description}</p></article> })}</div></div></section>

        <div className="bg-slate-50 py-12 sm:py-16"><div className="mx-auto grid max-w-7xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-10">
            <article className="min-w-0 rounded-2xl bg-white p-5 shadow-sm sm:p-8"><p className="text-base leading-7 text-slate-600">{airline.intro}</p>
                <details className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5" open><summary className="cursor-pointer text-base font-bold text-slate-900">On this page</summary><nav aria-label="Table of contents" className="mt-3"><ol className="grid gap-2 sm:grid-cols-2">{airline.contentSections.map((section) => <li key={section.id}><a className="text-md text-blue-700 hover:underline" href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav></details>
                <div className="mt-8 space-y-10">{airline.contentSections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-8"><h2 className="text-2xl font-bold tracking-tight text-slate-900">{section.title}</h2><div className="airline-prose mt-4 space-y-4 text-[15px] leading-7 text-slate-600" dangerouslySetInnerHTML={{ __html: section.html }} /></section>)}</div>
                <section className="mt-12 border-t border-slate-100 pt-9"><h2 className="text-2xl font-bold text-slate-900">Frequently Asked <span className="text-blue-600">Questions</span></h2><div className="mt-5 grid gap-3 lg:grid-cols-2">{airline.faqs.map((faq) => <details key={faq.question} className="rounded-xl border border-slate-200 p-4"><summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary><p className="mt-3 text-md leading-6 text-slate-600">{faq.answer}</p></details>)}</div></section>
            </article>
            <aside className="space-y-5 lg:sticky lg:top-6"><section className="rounded-2xl bg-[#1e3a8a] p-6 text-white shadow-lg"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"><Phone className="h-5 w-5"/></span><h2 className="mt-4 text-xl font-bold">Call for Unpublished &amp; Discounted Group Fare Deals</h2><p className="mt-2 text-md leading-6 text-blue-100">Talk with a specialist about your group's route and travel dates.</p><a href={contactDetails.phoneHref} className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-md font-bold text-blue-900 transition hover:bg-blue-50"><Phone className="h-4 w-4"/> {contactDetails.phoneDisplay}</a></section>
                <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"><h2 className="text-lg font-bold text-slate-900">Other Airlines</h2><ul className="mt-3 divide-y divide-slate-100">{related.map((item) => <li key={item.slug}><Link href={`/airlines/${item.slug}`} className="flex items-center justify-between gap-3 py-3 text-md font-medium text-slate-700 transition hover:text-blue-700">{item.name}<ArrowRight className="h-4 w-4 shrink-0"/></Link></li>)}</ul><Link href="/airlines" className="mt-3 inline-flex items-center gap-2 text-md font-bold text-blue-700">View all airlines <ArrowRight className="h-4 w-4"/></Link></section></aside>
        </div></div>

        <section className="bg-white py-14 sm:py-16"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-8 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Traveler feedback</p><h2 className="mt-3 text-2xl font-bold text-slate-900">Group travel reviews</h2><div className="mt-5 rounded-2xl bg-slate-50 p-6"><div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-current"/>)}</div><blockquote className="mt-4 text-md leading-7 text-slate-600">“Having support while comparing group schedules made the planning process easier for our travelers.”</blockquote><p className="mt-4 text-md font-bold text-slate-900">Group travel organizer</p></div></div><ReviewForm /></div></div></section>
        <Newsletter/>
    </main>
}
