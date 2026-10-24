'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
    { quote: 'Having one place to start our flight search made planning the reunion feel much more manageable.', name: 'Morgan L.', role: 'Family reunion organizer' },
    { quote: 'The team helped us compare schedules and keep our group updated as we worked through the options.', name: 'Priya S.', role: 'School trip coordinator' },
    { quote: 'Clear communication helped our team understand the quote details and the next steps.', name: 'Chris D.', role: 'Conference planner' },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)
    const review = reviews[active]
    return <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-4xl px-5 sm:px-8"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Stories from travelers</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Client <span className="text-blue-600">Testimonials</span></h2></div><article className="mt-9 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-8 text-center shadow-sm sm:px-12 sm:py-10" aria-live="polite"><div className="flex justify-center gap-1 text-amber-400" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><blockquote className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">“{review.quote}”</blockquote><div className="mt-6 flex items-center justify-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-md font-bold text-blue-800">{review.name.split(' ').map((part) => part[0]).join('')}</span><span className="text-left"><span className="block text-md font-bold text-slate-900">{review.name}</span><span className="mt-0.5 block text-xs text-slate-500">{review.role}</span></span></div></article><div className="mt-5 flex items-center justify-center gap-4"><button type="button" onClick={() => setActive((active + reviews.length - 1) % reviews.length)} className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" aria-label="Previous testimonial"><ChevronLeft className="h-4 w-4"/></button><div className="flex items-center gap-2" aria-label="Choose testimonial">{reviews.map((item, index) => <button key={item.name} type="button" onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={active === index} className={`h-2.5 rounded-full transition-all ${active === index ? 'w-7 bg-blue-700' : 'w-2.5 bg-slate-300 hover:bg-blue-400'}`} />)}</div><button type="button" onClick={() => setActive((active + 1) % reviews.length)} className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" aria-label="Next testimonial"><ChevronRight className="h-4 w-4"/></button></div></div></section>
}
