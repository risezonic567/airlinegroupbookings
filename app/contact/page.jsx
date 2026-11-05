import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../../components/contact/ContactForm'
import contactDetails from '../../data/contact'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Group Flight Booking Phone Number | Airline Group Bookings',
    description: 'Need a group flight booking phone number or group travel booking contact? Request a group flight quote and get group airline booking help 24/7 from our team.',
    path: '/contact',
})

const contactOptions = [
    {
        title: 'Call our travel team',
        detail: contactDetails.phoneDisplay,
        href: contactDetails.phoneHref,
        Icon: Phone,
    },
    {
        title: 'Email us',
        detail: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
        Icon: Mail,
    },
]

const detailCards = [
    ...contactOptions.map((option) => ({ ...option, key: option.title })),
    ...contactDetails.offices.map((office) => ({
        key: office.label,
        title: office.label,
        detail: office.address,
        Icon: MapPin,
    })),
]

const mapOffice = contactDetails.offices[0]
const mapQuery = encodeURIComponent(mapOffice?.address || '')
const mapSrc = contactDetails.mapEmbedUrl || `https://www.google.com/maps?q=${mapQuery}&output=embed`
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

function DetailCard({ title, detail, href, Icon }) {
    const content = (
        <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
                <span className="block text-sm text-slate-500">{title}</span>
                <span className="mt-0.5 block break-words text-sm font-semibold leading-6 text-slate-900 sm:text-base">{detail}</span>
            </span>
        </>
    )

    const className = 'flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition'

    if (href) {
        return (
            <a href={href} className={`${className} hover:border-blue-300 hover:shadow-sm`}>
                {content}
            </a>
        )
    }

    return <div className={className}>{content}</div>
}

export default function ContactPage() {
    return (
        <main>
            <PageStructuredData name="Group Flight Booking Phone Number | Airline Group Bookings" description="Need a group flight booking phone number or group travel booking contact? Request a group flight quote and get group airline booking help 24/7 from our team." path="/contact" type="ContactPage" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]} />

            <section className="bg-gradient-to-br from-[#087cd1] to-[#1e3a8a] px-5 py-14 text-center text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">We’re here to help</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Group Flight Booking <span className="text-blue-200">Phone Number</span></h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50">Use our group travel booking contact to request a group flight quote or get group airline booking help 24/7 — call or send your trip details anytime.</p>
                </div>
            </section>

            {/* Contact details: separate cards */}
            <section className="bg-slate-50 pb-6 pt-14 sm:pt-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Get in touch</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Let’s plan your <span className="text-blue-600">group trip</span></h2>
                        <p className="mt-4 text-base leading-7 text-slate-600">Whether you’re organizing travel for family, students, colleagues, or an event, our team can help you explore flight options.</p>
                    </div>

                    <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                        {detailCards.map(({ key, ...card }) => (
                            <DetailCard key={key} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Form (left) + Map (right) */}
            <section className="bg-slate-50 pb-14 pt-8 sm:pb-16">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
                    <div id="contact-form" className="min-w-0 scroll-mt-8">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">Fill out the form and our travel team will receive your message.</p>
                        </div>
                        <ContactForm />
                        <p className="mt-4 text-sm text-slate-500">Prefer email? <Link href={`mailto:${contactDetails.email}`} className="font-semibold text-blue-700 hover:text-blue-900">Send us a message</Link>.</p>
                    </div>

                    <div className="flex min-w-0 flex-col">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Find us on the map</h2>
                            {mapOffice && (
                                <p className="mt-2 text-sm leading-6 text-slate-600">{mapOffice.label}: {mapOffice.address}</p>
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