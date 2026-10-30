'use client'

import { useState } from 'react'

import { ArrowRight } from 'lucide-react'

const inputClass = 'mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

export default function ContactForm() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ name: '', email: '', phone: '', subject: '', details: '' })

    function updateField(event) {
        const { name, value } = event.target
        setMessage((current) => ({ ...current, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (!message.name.trim() || !message.email.trim() || !message.subject.trim() || !message.details.trim()) {
            setError('Please fill in all required fields.');
            return;
        }
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(message.email.trim())) {
            setError('Please enter a valid email address.');
            return;
        }
        if (message.phone) {
            const digits = message.phone.replace(/\D/g, '');
            if (digits.length < 6 || digits.length > 15) {
                setError('Phone number must contain 6‑15 digits.');
                return;
            }
        }
        setError('');
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...message, website: '' }),
            });
            const result = await response.json();
            if (response.ok && result.success) {
                // Save to sessionStorage for possible confirmation page
                try {
                    const storageKey = 'CONTACT_STORAGE_KEY';
                    sessionStorage.setItem(storageKey, JSON.stringify(message));
                } catch (e) {
                    console.error('SessionStorage error', e);
                }
                // Show success inline (no dedicated page)
                setSuccess('Your message has been sent. We will get back to you shortly.');
                setMessage({ name: '', email: '', phone: '', subject: '', details: '' });
            } else {
                setError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (e) {
            setError('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {/* Error / success feedback */}
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {success && <p className="mb-4 text-sm text-green-600">{success}</p>}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Your name
          <input className={inputClass} name="name" value={message.name} onChange={updateField} autoComplete="name" placeholder="Name" required />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email address
          <input className={inputClass} type="email" name="email" value={message.email} onChange={updateField} autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone number <span className="font-normal text-slate-400">(optional)</span>
          <input className={inputClass} type="tel" name="phone" value={message.phone} onChange={updateField} autoComplete="tel" placeholder="Your phone number" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Subject
          <input className={inputClass} name="subject" value={message.subject} onChange={updateField} placeholder="How can we help?" required />
        </label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
          Your message
          <textarea className="mt-2 min-h-36 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" name="details" value={message.details} onChange={updateField} placeholder="Write your message here..." required />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Send message <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
   