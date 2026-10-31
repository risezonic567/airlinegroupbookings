'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Plane, ChevronDown, ArrowRight } from 'lucide-react';
import { QUOTE_STORAGE_KEY } from '@/lib/quoteStorage';
import { isDisposableEmail, sanitizePhoneInput, validateEmail, validatePhone } from '@/lib/validationRules';

import AirportInput from './AirportInput'

const tripTypes = ['Round Trip', 'One Way', 'Multi City']
const textInputClass = 'mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-md text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
const fieldLabelClass = 'text-base font-medium text-slate-600'

function FormField({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className={fieldLabelClass}>{label}</span>
      {children}
    </label>
  )
}

function SelectControl({ label, name, value, onChange, children }) {
  return (
    <FormField label={label}>
      <span className="relative block">
        <select className={`${textInputClass} appearance-none pr-10`} name={name} value={value} onChange={onChange}>
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
      </span>
    </FormField>
  )
}

export default function QuoteForm() {
  const router = useRouter()
  const [tripType, setTripType] = useState('Round Trip')
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
    website: '' // honeypot field
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
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
    setForm((current) => ({ ...current, [name]: value }))
    setFieldErrors((current) => {
      if (!current[name] && !(name === 'countryCode' && current.phone)) return current
      const next = { ...current }
      if (name === 'phone') {
        const phoneError = value ? getPhoneError(form.countryCode, value) : 'Enter a valid phone number for the selected country.'
        if (phoneError) next.phone = phoneError
        else delete next.phone
      } else if (name === 'countryCode' && form.phone) {
        const phoneError = getPhoneError(value, form.phone)
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

  async function submitQuote(event) {
    event.preventDefault()
    if (loading) return
    const requiredFields = ['origin', 'destination', 'departure', 'passengers', 'cabin']
    if (tripType === 'Round Trip') requiredFields.push('returnDate')
    if (tripType === 'Multi City') requiredFields.push('secondOrigin', 'secondDestination', 'secondDeparture')
    if (requiredFields.some((field) => !String(form[field]).trim())) {
      setError('Please complete all required trip details.')
      return
    }
    const nextFieldErrors = {
      email: getEmailError(form.email),
      phone: getPhoneError(form.countryCode, form.phone),
    }
    if (nextFieldErrors.email || nextFieldErrors.phone) {
      setFieldErrors(Object.fromEntries(Object.entries(nextFieldErrors).filter(([, message]) => message)))
      setError(null)
      return
    }
    setFieldErrors({})
    setError(null)
    setLoading(true)
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, email: form.email.trim().toLowerCase(), tripType })
      })
      const data = await response.json()
      if (response.ok && data.success) {
                    // On success: store details in sessionStorage and go to confirmation page
            try {
              const details = {
                tripType,
                origin: form.origin,
                destination: form.destination,
                departure: form.departure,
                returnDate: form.returnDate,
                secondOrigin: form.secondOrigin,
                secondDestination: form.secondDestination,
                secondDeparture: form.secondDeparture,
                passengers: form.passengers,
                cabin: form.cabin,
                email: form.email.trim().toLowerCase(),
                countryCode: form.countryCode,
                phone: form.phone,
              };
              sessionStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(details));
            } catch (e) {
              console.error('Failed to save quote details', e);
            }
            router.push('/quote-confirmation');
      } else {
        const fields = Array.isArray(data.fields) ? data.fields : []
        const returnedFieldErrors = {}
        if (fields.includes('email')) returnedFieldErrors.email = 'Enter a valid email address.'
        if (fields.includes('phone')) returnedFieldErrors.phone = 'Enter a valid phone number for the selected country.'
        setFieldErrors(returnedFieldErrors)
        setError(fields.some((field) => field !== 'email' && field !== 'phone') || !fields.length
          ? data.error || 'Something went wrong. Please try again.'
          : null)
      }
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex w-full max-w-[690px] overflow-hidden rounded-t-md bg-blue-900 text-white sm:w-fit" role="tablist" aria-label="Choose trip type">
        {tripTypes.map((type) => (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={tripType === type}
            onClick={() => { setTripType(type) }}
            className={`flex flex-1 items-center justify-center gap-2 border-r-2 border-white/80 px-2 py-4 text-xs font-bold transition sm:px-5 sm:py-5 sm:text-base ${tripType === type ? 'bg-blue-600' : 'bg-blue-900 hover:bg-blue-800'}`}
          >
            <Plane className="h-4 w-4 -rotate-12 sm:h-5 sm:w-5" aria-hidden="true" />{type}
          </button>
        ))}
      </div>
      <div className="border border-white bg-[#fafafa] px-4 py-5 shadow-xl shadow-slate-900/10 sm:px-6 lg:px-7">
        <h2 className="sr-only">Get a free group flight quote</h2>
        <form onSubmit={submitQuote} noValidate>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-5 lg:grid-cols-6">
            <FormField label="Flying from:"><AirportInput name="origin" value={form.origin} onChange={updateField} placeholder="Start Searching..." required /></FormField>
            <FormField label="To:"><AirportInput name="destination" value={form.destination} onChange={updateField} placeholder="Start Searching..." required /></FormField>
            <FormField label="Departure:"><input className={textInputClass} name="departure" type="date" value={form.departure} onChange={updateField} required /></FormField>
            {tripType === 'Round Trip' && (
              <FormField label="Return Date:"><input className={textInputClass} name="returnDate" type="date" value={form.returnDate} onChange={updateField} min={form.departure || undefined} required /></FormField>
            )}
            {tripType === 'Multi City' && (
              <>
                <FormField label="Next flight from:"><AirportInput name="secondOrigin" value={form.secondOrigin} onChange={updateField} placeholder="Start Searching..." required /></FormField>
                <FormField label="Next flight to:"><AirportInput name="secondDestination" value={form.secondDestination} onChange={updateField} placeholder="Start Searching..." required /></FormField>
                <FormField label="Next flight date:"><input className={textInputClass} name="secondDeparture" type="date" value={form.secondDeparture} onChange={updateField} required /></FormField>
              </>
            )}
            <FormField label="Passenger:"><input className={textInputClass} name="passengers" type="number" min="1" max="999" value={form.passengers} onChange={updateField} placeholder="Enter count" required /></FormField>
            <SelectControl label="Class:" name="cabin" value={form.cabin} onChange={updateField}>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </SelectControl>
            {tripType === 'One Way' && <div className="hidden lg:block" aria-hidden="true" />}
            <FormField label="Email:">
              <input className={textInputClass} name="email" type="email" value={form.email} onChange={updateField} onBlur={() => {
                const email = form.email.trim().toLowerCase()
                setForm((current) => ({ ...current, email }))
                const emailError = getEmailError(email)
                setFieldErrors((current) => ({ ...current, ...(emailError ? { email: emailError } : { email: undefined }) }))
              }} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? 'quote-email-error' : undefined} placeholder="*****@gmail.com" autoComplete="email" required />
              {fieldErrors.email && <span id="quote-email-error" role="alert" className="mt-1 block text-xs text-red-600">{fieldErrors.email}</span>}
            </FormField>
            <div className="block min-w-0">
              <label htmlFor="phone" className={fieldLabelClass}>Phone No.:</label>
              <span className="mt-2 flex h-11 overflow-hidden rounded-md border border-slate-200 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                <select aria-label="Country calling code" name="countryCode" value={form.countryCode} onChange={updateField} aria-invalid={Boolean(fieldErrors.phone)} className="w-[82px] shrink-0 border-r border-slate-200 bg-transparent px-2 text-md text-slate-700 outline-none">
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+91">IN +91</option>
                  <option value="+61">AU +61</option>
                  <option value="+971">AE +971</option>
                </select>
                <input id="phone" className="min-w-0 flex-1 bg-transparent px-2.5 text-md text-slate-800 outline-none placeholder:text-slate-400" name="phone" type="tel" value={form.phone} onChange={updateField} onBlur={() => setFieldErrors((current) => ({ ...current, phone: getPhoneError(form.countryCode, form.phone) || undefined }))} aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? 'quote-phone-error' : undefined} placeholder="Phone number" autoComplete="tel-national" required />
              </span>
              {fieldErrors.phone && <span id="quote-phone-error" role="alert" className="mt-1 block text-xs text-red-600">{fieldErrors.phone}</span>}
            </div>
            {/* Honeypot field */}
            <input type="text" name="website" value={form.website} onChange={updateField} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} />
          </div>
          {error && <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>}
          <div className="col-span-2 flex items-end lg:col-span-1">
            <button type="submit" disabled={loading} className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 text-base font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 lg:w-auto">
              {loading ? 'Sending...' : 'FREE QUOTE'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
