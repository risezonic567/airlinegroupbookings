import Link from 'next/link'
import { ArrowRight, Plane } from 'lucide-react'
import airlines from '../../data/airlines'
import Newsletter from '../../components/home/Newsletter'

export const metadata = { title: 'Airlines Group Travel | AirlinesGroup Travel', description: 'Explore group flight booking information for popular airlines.' }

export default function AirlinesIndex() {
    return <main><section className="bg-gradient-to-br from-[#087cd1] to-[#1e3a8a] px-5 py-16 text-white sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Plan together</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Airlines <span className="text-blue-200">Group Travel</span></h1><p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">Explore group flight options and planning information by airline.</p></div></section><section className="bg-slate-50 py-12 sm:py-16"><div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">{airlines.map((airline) => <Link key={airline.slug} href={`/airlines/${airline.slug}`} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Plane className="h-5 w-5"/></span><h2 className="mt-4 font-bold text-slate-900">{airline.name} Group Travel</h2><span className="mt-3 inline-flex items-center gap-2 text-md font-semibold text-blue-700">Explore airline <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></Link>)}</div></section><Newsletter/></main>
}
