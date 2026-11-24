'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plane, ChevronDown, ArrowRight, Users, Minus, Plus } from 'lucide-react'
import { QUOTE_STORAGE_KEY } from '@/lib/quoteStorage'
import { isDisposableEmail, sanitizePhoneInput, validateEmail, validatePhone } from '@/lib/validationRules'

import AirportInput from './AirportInput'
import PhoneInputField from '@/components/PhoneInputField'

const tripTypes = ['Round Trip', 'One Way', 'Multi City']
const textInputClass = 'mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-md text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
const fieldLabelClass = 'text-sm font-semibold text-slate-700'

const defaultPax = { adults: 10, children: 0, infantsInSeat: 0, infantsOnLap: 0 }

function FormField({ label, children, className = '' }) {
  return (
    <label className={`relative block min-w-0 focus-within:z-50 ${className}`}>
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

function totalPax(next) {
  return (
    (Number(next.adults) || 0) +
    (Number(next.children) || 0) +
    (Number(next.infantsInSeat) || 0) +
    (Number(next.infantsOnLap) || 0)
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
    cabin: 'Economy',
    email: '',
    countryCode: '+1',
    phone: '',
    website: '', // honeypot field
  })
  const [pax, setPax] = useState(defaultPax)
  const [draftPax, setDraftPax] = useState(defaultPax)
  const [paxOpen, setPaxOpen] = useState(false)
  const paxWrapRef = useRef(null)
  const paxSnapshotRef = useRef(defaultPax)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  const passengers = totalPax(pax)
  const travelerCount = paxOpen ? totalPax(draftPax) : passengers

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

  function bump(key, delta, min = 0) {
    setDraftPax((prev) => {
      let next = { ...prev, [key]: Math.max(min, (prev[key] || 0) + delta) }
      if (totalPax(next) > 999) return prev
      if (key === 'adults' && next.infantsOnLap > next.adults) {
        next = { ...next, infantsOnLap: next.adults }
      }
      return next
    })
  }

  function openPaxMenu() {
    paxSnapshotRef.current = pax
    setDraftPax(pax)
    setPaxOpen(true)
  }

  function commitPaxAndClose() {
    setPax(draftPax)
    setPaxOpen(false)
  }

  function cancelPaxAndClose() {
    setDraftPax(paxSnapshotRef.current)
    setPax(paxSnapshotRef.current)
    setPaxOpen(false)
  }

  useEffect(() => {
    if (!paxOpen) return undefined
    function onDoc(e) {
      if (paxWrapRef.current && !paxWrapRef.current.contains(e.target)) {
        setPax(draftPax)
        setPaxOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [paxOpen, draftPax])

  async function submitQuote(event) {
    event.preventDefault()
    if (loading) return
    const requiredFields = ['origin', 'destination', 'departure', 'cabin']
    if (tripType === 'Round Trip') requiredFields.push('returnDate')
    if (tripType === 'Multi City') requiredFields.push('secondOrigin', 'secondDestination', 'secondDeparture')
    if (requiredFields.some((field) => !String(form[field]).trim())) {
      setError('Please complete all required trip details.')
      return
    }
    if ((pax.adults || 0) < 1) {
      setError('At least 1 adult is required.')
      return
    }
    if (passengers < 1 || passengers > 999) {
      setError('Enter a valid passenger count between 1 and 999.')
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

    const payload = {
      ...form,
      email: form.email.trim().toLowerCase(),
      tripType,
      passengers: String(passengers),
      adults: String(pax.adults),
      children: String(pax.children),
      infantsInSeat: String(pax.infantsInSeat),
      infantsOnLap: String(pax.infantsOnLap),
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (response.ok && data.success) {
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
            passengers: String(passengers),
            adults: String(pax.adults),
            children: String(pax.children),
            infantsInSeat: String(pax.infantsInSeat),
            infantsOnLap: String(pax.infantsOnLap),
            cabin: form.cabin,
            email: form.email.trim().toLowerCase(),
            countryCode: form.countryCode,
            phone: form.phone,
          }
          sessionStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(details))
        } catch (e) {
          console.error('Failed to save quote details', e)
        }
        router.push('/quote-confirmation')
      } else {
        const fields = Array.isArray(data.fields) ? data.fields : []
        const returnedFieldErrors = {}
        if (fields.includes('email')) returnedFieldErrors.email = 'Enter a valid email address.'
        if (fields.includes('phone')) returnedFieldErrors.phone = 'Enter a valid phone number for the selected country.'
        setFieldErrors(returnedFieldErrors)
        setError(
          fields.some((field) => field !== 'email' && field !== 'phone') || !fields.length
            ? data.error || 'Something went wrong. Please try again.'
            : null,
        )
      }
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-950/20 sm:p-5 lg:p-6">
      <div className="inline-flex w-full max-w-full gap-1 overflow-x-auto rounded-xl bg-blue-50 p-1 sm:w-auto" role="tablist" aria-label="Choose trip type">
        {tripTypes.map((type) => (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={tripType === type}
            onClick={() => {
              setTripType(type)
            }}
            className={`flex h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-2.5 text-xs font-bold transition sm:flex-none sm:px-5 sm:text-sm ${tripType === type ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-700 hover:bg-blue-100'}`}
          >
            <Plane className="h-4 w-4 -rotate-12 sm:h-5 sm:w-5" aria-hidden="true" />
            {type}
          </button>
        ))}
      </div>
      <h2 className="sr-only">Get a free group flight quote</h2>
      <form className="mt-4" onSubmit={submitQuote} noValidate>
        <div className="grid min-w-0 grid-cols-1 gap-x-4 gap-y-3 min-[390px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-5">
          <FormField label="Flying from:" className="min-[390px]:col-span-2 lg:col-span-1">
            <AirportInput name="origin" value={form.origin} onChange={updateField} placeholder="Start Searching..." required />
          </FormField>
          <FormField label="To:" className="min-[390px]:col-span-2 lg:col-span-1">
            <AirportInput name="destination" value={form.destination} onChange={updateField} placeholder="Start Searching..." required />
          </FormField>
          <FormField label="Departure:">
            <input className={textInputClass} name="departure" type="date" value={form.departure} onChange={updateField} required />
          </FormField>
          {tripType === 'Round Trip' && (
            <FormField label="Return Date:">
              <input
                className={textInputClass}
                name="returnDate"
                type="date"
                value={form.returnDate}
                onChange={updateField}
                min={form.departure || undefined}
                required
              />
            </FormField>
          )}
          {tripType === 'Multi City' && (
            <>
              <FormField label="Next flight from:">
                <AirportInput name="secondOrigin" value={form.secondOrigin} onChange={updateField} placeholder="Start Searching..." required />
              </FormField>
              <FormField label="Next flight to:">
                <AirportInput name="secondDestination" value={form.secondDestination} onChange={updateField} placeholder="Start Searching..." required />
              </FormField>
              <FormField label="Next flight date:">
                <input className={textInputClass} name="secondDeparture" type="date" value={form.secondDeparture} onChange={updateField} required />
              </FormField>
            </>
          )}

          <div className="relative min-w-0 focus-within:z-50" ref={paxWrapRef}>
            <span className={fieldLabelClass}>Passengers:</span>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={paxOpen}
              onClick={() => {
                if (paxOpen) commitPaxAndClose()
                else openPaxMenu()
              }}
              className={`${textInputClass} inline-flex items-center justify-between gap-2 text-left ${paxOpen ? 'border-blue-600 ring-2 ring-blue-100' : ''}`}
            >
              <span className="inline-flex items-center gap-2 truncate">
                <Users className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                <span className="font-medium text-slate-800">{travelerCount}</span>
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            </button>
            {paxOpen ? (
              <div className="absolute left-0 z-[60] mt-2 w-[min(300px,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                {[
                  { key: 'adults', label: 'Adults', sub: '', min: 1 },
                  { key: 'children', label: 'Children', sub: 'Aged 2–11', min: 0 },
                  { key: 'infantsInSeat', label: 'Infants', sub: 'In seat', min: 0 },
                  { key: 'infantsOnLap', label: 'Infants', sub: 'On lap', min: 0 },
                ].map((row) => (
                  <div key={row.key} className="flex items-center justify-between gap-3 py-2">
                    <div>
                      <p className="text-sm font-medium text-slate-800">{row.label}</p>
                      {row.sub ? <p className="text-[11px] text-slate-400">{row.sub}</p> : null}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30"
                        disabled={draftPax[row.key] <= row.min}
                        onClick={() => bump(row.key, -1, row.min)}
                        aria-label={`Decrease ${row.label}`}
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold tabular-nums text-slate-800">{draftPax[row.key]}</span>
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
                        onClick={() => bump(row.key, 1, row.min)}
                        aria-label={`Increase ${row.label}`}
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
                <p className="mt-1 text-[11px] text-slate-400">Most airlines treat 10+ as a group request.</p>
                <div className="mt-2 flex justify-end gap-3 border-t border-slate-100 pt-2">
                  <button type="button" className="text-sm font-medium text-slate-500" onClick={cancelPaxAndClose}>
                    Cancel
                  </button>
                  <button type="button" className="text-sm font-bold text-blue-700" onClick={commitPaxAndClose}>
                    Done
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <SelectControl label="Class:" name="cabin" value={form.cabin} onChange={updateField}>
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </SelectControl>
          {tripType === 'One Way' && <div className="hidden lg:block" aria-hidden="true" />}
          {/* Honeypot field */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={updateField}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
          />
        </div>
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
        <div className="mt-3 grid min-w-0 grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-5">
          <FormField label="Email:" className="lg:col-span-2">
            <input
              className={textInputClass}
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              onBlur={() => {
                const email = form.email.trim().toLowerCase()
                setForm((current) => ({ ...current, email }))
                const emailError = getEmailError(email)
                setFieldErrors((current) => ({ ...current, ...(emailError ? { email: emailError } : { email: undefined }) }))
              }}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'quote-email-error' : undefined}
              placeholder="*****@gmail.com"
              autoComplete="email"
              required
            />
            {fieldErrors.email && (
              <span id="quote-email-error" role="alert" className="mt-1 block text-xs text-red-600">
                {fieldErrors.email}
              </span>
            )}
          </FormField>
          <div className="relative min-w-0 focus-within:z-50 lg:col-span-3">
            <label htmlFor="phone" className={fieldLabelClass}>
              Phone No.:
            </label>
            <PhoneInputField
              id="phone"
              countryCode={form.countryCode}
              phone={form.phone}
              required
              invalid={Boolean(fieldErrors.phone)}
              describedBy={fieldErrors.phone ? 'quote-phone-error' : undefined}
              onCountryCodeChange={(countryCode) => {
                setForm((current) => ({ ...current, countryCode }))
                setFieldErrors((current) => {
                  if (!form.phone.trim()) {
                    const next = { ...current }
                    delete next.phone
                    return next
                  }
                  const phoneError = getPhoneError(countryCode, form.phone)
                  const next = { ...current }
                  if (phoneError) next.phone = phoneError
                  else delete next.phone
                  return next
                })
              }}
              onPhoneChange={(phone) => {
                const value = sanitizePhoneInput(phone)
                setForm((current) => ({ ...current, phone: value }))
                setFieldErrors((current) => {
                  if (!current.phone) return current
                  const phoneError = value
                    ? getPhoneError(form.countryCode, value)
                    : 'Enter a valid phone number for the selected country.'
                  const next = { ...current }
                  if (phoneError) next.phone = phoneError
                  else delete next.phone
                  return next
                })
              }}
              onBlur={() =>
                setFieldErrors((current) => {
                  if (!form.phone.trim()) {
                    const next = { ...current }
                    delete next.phone
                    return next
                  }
                  const phoneError = getPhoneError(form.countryCode, form.phone)
                  return { ...current, ...(phoneError ? { phone: phoneError } : { phone: undefined }) }
                })
              }
            />
            {fieldErrors.phone && (
              <span id="quote-phone-error" role="alert" className="mt-1 block text-xs text-red-600">
                {fieldErrors.phone}
              </span>
            )}
          </div>
          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-base font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100"
            >
              {loading ? 'Sending...' : 'FREE QUOTE'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
