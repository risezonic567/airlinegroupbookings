import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone, UsersRound } from 'lucide-react'
import ContactForm from '../../components/contact/ContactForm'
import contactDetails from '../../data/contact'

export const metadata = {
    title: 'Contact Us | AirlinesGroup Travel',
    description: 'Contact AirlinesGroup Travel for help planning group flights and requesting a travel quote.',
}

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

export default function ContactPage() {
    return (
        <main>
            <section className="bg-gradient-to-br from-[#087cd1] to-[#1e3a8a] px-5 py-14 text-center text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">We’re here to help</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Contact <span className="text-blue-200">Us</span></h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50">Talk with our travel team about your group’s flights, or send us your trip details to get started.</p>
                </div>
            </section>

            <section className="bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12 lg:px-10">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Get in touch</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Let’s plan your <span className="text-blue-600">group trip</span></h2>
                        <p className="mt-4 text-base leading-7 text-slate-600">Whether you’re organizing travel for family, students, colleagues, or an event, our team can help you explore flight options.</p>

                        <div className="mt-7 space-y-3">
                            {contactOptions.map(({ title, detail, href, Icon }) => (
                                <a key={title} href={href} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                                    <span><span className="block text-sm text-slate-500">{title}</span><span className="mt-0.5 block break-all text-base font-semibold text-slate-900">{detail}</span></span>
                                </a>
                            ))}
                        </div>
                        
                        <div className="mt-7 space-y-3">
                            {contactDetails.offices.map((office) => (
                                <div key={office.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                                    <span><span className="block text-sm text-slate-500">{office.label}</span><span className="mt-0.5 block text-sm font-semibold leading-6 text-slate-900">{office.address}</span></span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="contact-form" className="scroll-mt-8">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">Fill out the form and your email app will open with your message ready to send.</p>
                        </div>
                        <ContactForm />
                        <p className="mt-4 text-sm text-slate-500">Prefer email? <Link href={`mailto:${contactDetails.email}`} className="font-semibold text-blue-700 hover:text-blue-900">Send us a message</Link>.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
