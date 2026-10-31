'use client'

import { useState } from 'react'

import { ArrowRight } from 'lucide-react'
import { isDisposableEmail, sanitizePhoneInput, validateEmail, validatePhone } from '@/lib/validationRules'

const inputClass = 'mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
const initialMessage = { name: '', email: '', countryCode: '+1', phone: '', subject: '', details: '' }

export default function ContactForm() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(initialMessage)
    const [fieldErrors, setFieldErrors] = useState({})

    function getEmailError(value) {
        return !validateEmail(value) || isDisposableEmail(value) ? 'Enter a valid email address.' : ''
    }

    function getPhoneError(countryCode, value) {
        return validatePhone(countryCode, value).valid ? '' : 'Enter a valid phone number for the selected country.'
    }

    function updateField(event) {
        const { name } = event.target
        const value = name === 'phone' ? sanitizePhoneInput(event.target.value) : event.target.value
        setMessage((current) => ({ ...current, [name]: value }))
        setFieldErrors((current) => {
            if (!current[name] && !(name === 'countryCode' && current.phone)) return current
            const next = { ...current }
            if (name === 'phone') {
                const phoneError = value ? getPhoneError(message.countryCode, value) : ''
                if (phoneError) next.phone = phoneError
                else delete next.phone
            } else if (name === 'countryCode' && message.phone) {
                const phoneError = getPhoneError(value, message.phone)
                if (phoneError) next.phone = phoneError
                else delete next.phone
            } else if (name === 'email') {
                const emailError = getEmailError(value)
                if (emailError) next.email = emailError
                else delete next.email
            }
            return next
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (!message.name.trim() || !message.subject.trim() || !message.details.trim()) {
            setError('Please fill in all required fields.');
            return;
        }
        const nextFieldErrors = {
            email: getEmailError(message.email),
            phone: message.phone ? getPhoneError(message.countryCode, message.phone) : '',
        }
        if (nextFieldErrors.email || nextFieldErrors.phone) {
            setFieldErrors(Object.fromEntries(Object.entries(nextFieldErrors).filter(([, fieldError]) => fieldError)))
            setError('')
            return
        }
        setFieldErrors({})
        setError('');
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...message, email: message.email.trim().toLowerCase(), website: '' }),
            });
            const result = await response.json();
            if (response.ok && result.success) {
                // Save to sessionStorage for possible confirmation page
                try {
                    const storageKey = 'CONTACT_STORAGE_KEY';
                    sessionStorage.setItem(storageKey, JSON.stringify({ ...message, email: message.email.trim().toLowerCase() }));
                } catch (e) {
                    console.error('SessionStorage error', e);
                }
                // Show success inline (no dedicated page)
                setSuccess('Your message has been sent. We will get back to you shortly.');
                setMessage(initialMessage);
            } else {
                const fields = Array.isArray(result.fields) ? result.fields : []
                const returnedFieldErrors = {}
                if (fields.includes('email')) returnedFieldErrors.email = 'Enter a valid email address.'
                if (fields.includes('phone')) returnedFieldErrors.phone = 'Enter a valid phone number for the selected country.'
                setFieldErrors(returnedFieldErrors)
                setError(fields.some((field) => field !== 'email' && field !== 'phone') || !fields.length
                    ? result.error || 'Something went wrong. Please try again.'
                    : '')
            }
        } catch (e) {
            setError('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
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
          <input className={inputClass} type="email" name="email" value={message.email} onChange={updateField} onBlur={() => {
            const email = message.email.trim().toLowerCase()
            setMessage((current) => ({ ...current, email }))
            const emailError = getEmailError(email)
            setFieldErrors((current) => {
                const next = { ...current }
                if (emailError) next.email = emailError
                else delete next.email
                return next
            })
          }} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined} autoComplete="email" placeholder="you@example.com" required />
          {fieldErrors.email && <span id="contact-email-error" role="alert" className="mt-1 block text-xs text-red-600">{fieldErrors.email}</span>}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone number <span className="font-normal text-slate-400">(optional)</span>
          <span className="mt-2 flex h-12 overflow-hidden rounded-lg border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
            <select aria-label="Country calling code" name="countryCode" value={message.countryCode} onChange={updateField} aria-invalid={Boolean(fieldErrors.phone)} className="w-[82px] shrink-0 border-r border-slate-200 bg-transparent px-2 text-sm text-slate-700 outline-none">
              <option value="+1">US +1</option>
              <option value="+44">UK +44</option>
              <option value="+91">IN +91</option>
              <option value="+61">AU +61</option>
              <option value="+971">AE +971</option>
            </select>
            <input className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-slate-400" type="tel" name="phone" value={message.phone} onChange={updateField} onBlur={() => setFieldErrors((current) => {
                const phoneError = message.phone ? getPhoneError(message.countryCode, message.phone) : ''
                const next = { ...current }
                if (phoneError) next.phone = phoneError
                else delete next.phone
                return next
            })} aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? 'contact-phone-error' : undefined} autoComplete="tel-national" placeholder="Your phone number" />
          </span>
          {fieldErrors.phone && <span id="contact-phone-error" role="alert" className="mt-1 block text-xs text-red-600">{fieldErrors.phone}</span>}
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
   