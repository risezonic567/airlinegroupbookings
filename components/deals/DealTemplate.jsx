'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronDown, CheckCircle2, Shield, Headphones, Award, Globe, ArrowRight } from 'lucide-react'
import PageStructuredData from '../seo/PageStructuredData'
import JsonLd from '../seo/JsonLd'
import Newsletter from '../home/Newsletter'

export default function DealTemplate({ content, slug, allDeals = [] }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    destination: '',
    travelDates: '',
    groupSize: '',
    website: '', // honeypot
  })
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.website) return // Honeypot trap

    if (!formData.name || !formData.emailOrPhone || !formData.destination) {
      setFormStatus({ loading: false, success: false, error: 'Please fill in Name, Email or phone, and Destination.' })
      return
    }

    setFormStatus({ loading: true, success: false, error: '' })

    try {
      const isEmail = formData.emailOrPhone.includes('@')
      const payload = {
        name: formData.name,
        email: isEmail ? formData.emailOrPhone : 'deal-quote@airlinegroupbookings.com',
        phone: isEmail ? '' : formData.emailOrPhone,
        countryCode: '+1',
        subject: `${content.h1} - Quote Request (${formData.destination})`,
        details: `${content.h1} Quote Request:
Name: ${formData.name}
Contact: ${formData.emailOrPhone}
Destination: ${formData.destination}
Travel Dates: ${formData.travelDates || 'Not specified'}
Group Size: ${formData.groupSize || 'Not specified'}`,
        website: '',
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setFormStatus({ loading: false, success: true, error: '' })
        setFormData({
          name: '',
          emailOrPhone: '',
          destination: '',
          travelDates: '',
          groupSize: '',
          website: '',
        })
      } else {
        const errorData = await res.json().catch(() => ({}))
        setFormStatus({
          loading: false,
          success: false,
          error: errorData?.message || 'Something went wrong. Please call us directly at +1-833-958-0151.',
        })
      }
    } catch {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Unable to submit right now. Please call us at +1-833-958-0151.',
      })
    }
  }

  const faqSchema = content.faqs && content.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  // Other deals to display at the bottom (excluding current slug)
  const relatedDeals = allDeals.filter((d) => d.slug !== slug).slice(0, 4)

  return (
    <main className="bg-white">
      {content.schema ? (
        <JsonLd data={content.schema} />
      ) : (
        <>
          <PageStructuredData
            name={content.h1}
            description={content.metaDescription}
            path={`/deals/${slug}`}
            type="Service"
            breadcrumbs={[
              { name: 'Home', path: '/' },
              { name: 'Deals', path: '/deals' },
              { name: content.h1, path: `/deals/${slug}` },
            ]}
          />
          {faqSchema && <JsonLd data={faqSchema} />}
        </>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0c1a3e] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            {content.eyebrow && (
              <span className="inline-block text-xs font-bold uppercase tracking-[.2em] text-[#f97316]">
                {content.eyebrow}
              </span>
            )}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl leading-tight">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {content.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#trip-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#ea580c] px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#c2410c] focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Request a Group Quote
              </a>
              <a
                href="tel:+18339580151"
                className="inline-flex items-center gap-2.5 rounded-xl border border-slate-700 bg-[#162758]/70 px-5 py-3.5 text-base font-medium text-white transition hover:bg-[#1e3475] hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Phone className="h-4 w-4 text-slate-300" />
                <span>Call +1-833-958-0151</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-5">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-[#14234d] shadow-2xl sm:h-84">
              <Image
                src={content.image || '/images/deals/SPORTS GROUP TRAVEL.jpg.jpeg'}
                alt={content.imageCaption || content.h1}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a3e]/80 via-transparent to-transparent" />
              {content.imageCaption && (
                <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-[#0c1a3e]/85 px-3 py-1.5 text-center text-xs font-medium text-slate-300 backdrop-blur-sm">
                  {content.imageCaption}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="border-b border-slate-200 bg-[#f8fafc] py-4 text-xs font-semibold text-slate-600 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-center sm:px-8">
          <span className="flex items-center gap-1.5">
            <Headphones className="h-4 w-4 text-blue-700" /> 24/7 booking support
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-blue-700" /> 9 languages
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-blue-700" /> BBB Accredited
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <Award className="h-4 w-4 text-blue-700" /> ASTA member
          </span>
          <span className="text-slate-300">|</span>
          <span className="font-medium text-slate-700">ARC# Verified</span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5 text-slate-700">
            ★ Trustpilot reviews
          </span>
        </div>
      </section>

      {/* Intro Narrative Section */}
      {content.introHeading && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {content.introHeading}
              </h2>
              {content.introParagraphs && content.introParagraphs.map((para) => (
                <p key={para} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Who We Help Cards */}
            {content.whoWeHelp && content.whoWeHelp.length > 0 && (
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {content.whoWeHelp.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-orange-200"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100/80 text-lg font-bold text-orange-600">
                      {group.letter}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{group.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {content.howItWorks && content.howItWorks.length > 0 && (
        <section className="bg-[#f8fafc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {content.howItWorksHeading || 'How group flight booking works'}
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {content.howItWorks.map((step) => (
                <div key={step.num} className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c1a3e] text-sm font-bold text-white shadow">
                    {step.num}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>

            {content.howItWorksNote && (
              <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
                {content.howItWorksNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Callout Box Section */}
      {content.calloutBox && (
        <section className="py-10">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-6">
            {(Array.isArray(content.calloutBox) ? content.calloutBox : [content.calloutBox]).map((box) => (
              <div key={box.title} className="rounded-2xl border border-orange-200/80 bg-[#fff7ed] p-7 sm:p-10 shadow-sm">
                {box.eyebrow && (
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">
                    {box.eyebrow}
                  </span>
                )}
                <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                  {box.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tips Before You Book */}
      {content.tips && content.tips.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {content.tipsHeading || 'Tips before you book'}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.tips.map((tip) => (
                <div
                  key={tip.title}
                  className="border-l-2 border-orange-500 pl-4 py-1"
                >
                  <h3 className="text-base font-bold text-slate-900">{tip.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Capture Form: Tell us about your trip */}
      <section id="trip-form" className="scroll-mt-12 py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl bg-[#0c1a3e] p-8 text-white shadow-2xl sm:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {content.formHeading || 'Tell us about your trip'}
              </h2>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                {content.formSubtitle || 'No final headcount needed. Share the basics and we’ll start from there.'}
              </p>
            </div>

            {formStatus.success ? (
              <div className="mt-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                <h3 className="mt-3 text-lg font-bold text-white">Thank you! Request received.</h3>
                <p className="mt-1 text-sm text-emerald-200">
                  Our group travel desk is reviewing your route and will contact you shortly with group flight options.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="deal-name" className="sr-only">Name</label>
                    <input
                      id="deal-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-slate-700 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="deal-contact" className="sr-only">Email or phone</label>
                    <input
                      id="deal-contact"
                      type="text"
                      name="emailOrPhone"
                      required
                      placeholder="Email or phone"
                      value={formData.emailOrPhone}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-slate-700 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="deal-dest" className="sr-only">Destination</label>
                    <input
                      id="deal-dest"
                      type="text"
                      name="destination"
                      required
                      placeholder="Destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-slate-700 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="deal-dates" className="sr-only">Travel dates</label>
                    <input
                      id="deal-dates"
                      type="text"
                      name="travelDates"
                      placeholder="Travel dates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-slate-700 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="deal-size" className="sr-only">Group size</label>
                    <input
                      id="deal-size"
                      type="text"
                      name="groupSize"
                      placeholder="Group size"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-slate-700 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.loading}
                      className="h-12 w-full rounded-xl bg-[#ea580c] px-4 font-semibold text-white shadow transition hover:bg-[#c2410c] focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-70"
                    >
                      {formStatus.loading ? 'Sending...' : 'Request a Group Quote'}
                    </button>
                  </div>
                </div>

                {formStatus.error && (
                  <p className="text-center text-xs text-rose-300">{formStatus.error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {content.faqHeading || 'Common questions'}
            </h2>

            <div className="mt-6 divide-y divide-slate-200">
              {content.faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={faq.question} className="py-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <span className="text-base font-semibold text-slate-900 sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-orange-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* More Group Flight Deals */}
      {relatedDeals.length > 0 && (
        <section className="border-t border-slate-100 bg-[#f8fafc] py-14">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-900">More group flight deals</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedDeals.map((deal) => (
                <Link
                  key={deal.slug}
                  href={`/deals/${deal.slug}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-orange-300 hover:text-orange-600 hover:shadow"
                >
                  <span>{deal.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-600" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </main>
  )
}
