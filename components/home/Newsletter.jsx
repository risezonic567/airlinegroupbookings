'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
    const [subscribed, setSubscribed] = useState(false)
    function submit(event) { event.preventDefault(); setSubscribed(true) }
    return <section className="px-5 py-12 sm:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#087cd1] to-[#1a56f0] px-6 py-9 text-white shadow-lg shadow-blue-900/15 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">A little travel inspiration</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">Get group travel ideas in your inbox.</h2><p className="mt-2 text-md leading-6 text-blue-50">Sign up for planning tips and updates from our team.</p></div><form onSubmit={submit} className="mt-6 flex w-full max-w-lg gap-2 lg:mt-0" aria-label="Newsletter signup"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required className="min-w-0 flex-1 rounded-xl border border-white/30 bg-white px-4 py-3 text-md text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/25"/><button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1e3a8a] px-4 py-3 text-md font-bold text-white transition hover:bg-blue-950">{subscribed ? <><Check className="h-4 w-4"/> Subscribed</> : <>Subscribe <ArrowRight className="h-4 w-4"/></>}</button></form></div></section>
}
