import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import ContactForm from '../../components/contact/ContactForm'
import ContactInfoCards from '../../components/contact/ContactInfoCards'
import contactDetails from '../../data/contact'
import JsonLd from '../../components/seo/JsonLd'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.contact
const quoteSeo = mainPageSeo.requestQuote

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/contact',
})

const mapOffice = contactDetails.offices[0]
const mapQuery = encodeURIComponent(mapOffice?.address || '')
const mapSrc = contactDetails.mapEmbedUrl || `https://www.google.com/maps?q=${mapQuery}&output=embed`
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

export default function ContactPage() {
    return (
        <main>
            <JsonLd data={pageSchemas.contact} />

            <section className="relative isolate flex min-h-[320px] items-center justify-center overflow-hidden px-5 py-14 text-center text-white sm:min-h-[380px] sm:px-8 sm:py-20">
                <Image src="/images/Global Travel Contact Connections.png" alt="Global travel contact connections across destinations" fill priority sizes="100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/75 to-[#101a3d]/35" aria-hidden="true" />
                <div className="relative mx-auto w-full max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Corporate support experience</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Contact Us: Group Flight Booking <span className="text-blue-200">Phone & Support</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        Call our group flight booking phone number or send a message — specialists ready to help with your group itinerary.
                    </p>
                </div>
            </section>

            <section className="bg-slate-50 py-12 sm:py-14">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Get in touch</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                            Clear ways to reach our <span className="text-blue-600">group desk</span>
                        </h2>
                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Phone, email, verified USA office details, and support hours — then use the enquiry form below.
                        </p>
                    </div>
                    <div className="mt-10">
                        <ContactInfoCards />
                    </div>
                </div>
            </section>

            <section id="request-quote" className="scroll-mt-8 bg-white py-12 sm:py-14">
                <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Request a quote</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{quoteSeo.h1}</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
                        Share your route, dates, and group size. Our specialists will follow up with clear options — or call us anytime.
                    </p>
                </div>
            </section>

            <section className="bg-slate-50 pb-14 pt-4 sm:pb-16">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
                    <div id="contact-form" className="min-w-0 scroll-mt-8">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">Clear enquiry form — our travel team receives every message.</p>
                        </div>
                        <ContactForm />
                        <p className="mt-4 text-sm text-slate-500">
                            Prefer email?{' '}
                            <Link href={`mailto:${contactDetails.email}`} className="font-semibold text-blue-700 hover:text-blue-900">
                                {contactDetails.email}
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="flex min-w-0 flex-col">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Find us on the map</h2>
                            {mapOffice && (
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {mapOffice.label}: {mapOffice.address}
                                </p>
                            )}
                        </div>

                        <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                            <iframe
                                title="Office location map"
                                src={mapSrc}
                                className="absolute inset-0 h-full w-full border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <a
                            href={directionsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-700 hover:text-blue-900"
                        >
                            <MapPin className="h-4 w-4" aria-hidden="true" />
                            Get directions
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
