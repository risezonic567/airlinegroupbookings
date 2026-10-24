'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import contactDetails from '../../data/contact'

const inputClass = 'mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

export default function ContactForm() {
    const [message, setMessage] = useState({ name: '', email: '', phone: '', subject: '', details: '' })

    function updateField(event) {
        const { name, value } = event.target
        setMessage((current) => ({ ...current, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const body = [
            `Name: ${message.name}`,
            `Email: ${message.email}`,
            `Phone: ${message.phone || 'Not provided'}`,
            '',
            message.details,
        ].join('\n')
        const mailto = `mailto:${contactDetails.email}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailto
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">Your name
                    <input className={inputClass} name="name" value={message.name} onChange={updateField} autoComplete="name" placeholder="Name" required />
                </label>
                <label className="block text-sm font-medium text-slate-700">Email address
                    <input className={inputClass} type="email" name="email" value={message.email} onChange={updateField} autoComplete="email" placeholder="you@example.com" required />
                </label>
                <label className="block text-sm font-medium text-slate-700">Phone number <span className="font-normal text-slate-400">(optional)</span>
                    <input className={inputClass} type="tel" name="phone" value={message.phone} onChange={updateField} autoComplete="tel" placeholder="Your phone number" />
                </label>
                <label className="block text-sm font-medium text-slate-700">Subject
                    <input className={inputClass} name="subject" value={message.subject} onChange={updateField} placeholder="How can we help?" required />
                </label>
                <label className="block text-sm font-medium text-slate-700 sm:col-span-2">Your message
                    <textarea className="mt-2 min-h-36 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" name="details" value={message.details} onChange={updateField} placeholder="Write your message here..." required />
                </label>
            </div>
            <button type="submit" className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                Send message <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
        </form>
    )
}
