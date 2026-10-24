import Image from 'next/image'
import Link from 'next/link'
import { Camera, Globe2, Mail, MapPin, Phone, Users } from 'lucide-react'
import contactDetails from '../../data/contact'

const footerLink = 'text-md font-semibold text-slate-600 transition hover:text-blue-700'

const linkGroups = [
    {
        title: 'Company',
        links: [
            { label: 'About us', href: '/about-us' },
            { label: 'Our blogs', href: '/blog' },
            { label: 'Airline group travel', href: '/airlines' },
        ],
    },
    {
        title: 'Explore',
        links: [
            { label: 'Popular deals', href: '/deals' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Group travel', href: '/group-travel' },
            { label: 'Request a quote', href: '/#booking' },
        ],
    },
]

export default function Footer() {
    return <footer className="relative isolate overflow-hidden bg-[#0b3155] px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85')" }} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[#0b3155]/35" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl gap-9 rounded-t-[2rem] bg-white/95 px-6 py-9 shadow-2xl shadow-slate-950/20 backdrop-blur-sm sm:px-9 sm:py-11 lg:grid-cols-[1.35fr_.8fr_.9fr_1.15fr] lg:gap-10 lg:px-12">
            <div>
                <Link href="/" aria-label="AirlinesGroup Travel home" className="inline-flex rounded-xl bg-white p-2 ring-1 ring-slate-100">
                    <Image src="/images/Airline Group Booking 1.png" alt="AirlinesGroup Travel" width={220} height={62} className="h-auto w-[190px]" />
                </Link>
                <p className="mt-4 max-w-xs text-md leading-6 text-slate-600">Making it easier for families, teams, schools, and organizations to plan group flights together.</p>
                <div className="mt-5 flex gap-2.5" aria-label="Social media">
                    {[[Globe2, 'Facebook'], [Camera, 'Instagram'], [Users, 'LinkedIn']].map(([Icon, label]) => <a key={label} href="#" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white"><Icon className="h-4 w-4" aria-hidden="true" /></a>)}
                </div>
            </div>

            {linkGroups.map((group) => <nav key={group.title} aria-label={group.title}>
                <h2 className="text-lg font-bold text-slate-900">{group.title}</h2>
                <ul className="mt-4 space-y-3">{group.links.map((link) => <li key={link.href}><Link className={footerLink} href={link.href}>{link.label}</Link></li>)}</ul>
            </nav>)}

            <div>
                <h2 className="text-lg font-bold text-slate-900">Get in touch</h2>
                <p className="mt-3 text-md font-semibold leading-6 text-slate-600">Our travel team is here to help with your group’s plans.</p>
                <ul className="mt-4 space-y-3 font-semibold text-md text-slate-600">
                    <li><a className="flex items-center gap-2.5 transition hover:text-blue-700" href={contactDetails.phoneHref}><Phone className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>{contactDetails.phoneDisplay}</span></a></li>
                    <li><a className="flex items-center gap-2.5 transition hover:text-blue-700" href={`mailto:${contactDetails.email}`}><Mail className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>{contactDetails.email}</span></a></li>
                    {contactDetails.offices.map((office) => <li key={office.label} className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span><strong className="block text-slate-800">{office.label}</strong>{office.address}</span></li>)}
                </ul>
            </div>
        </div>

        <div className="mx-auto max-w-7xl rounded-b-[2rem] bg-white/95 px-6 pb-6 text-center sm:px-9 lg:px-12">
            <div className="border-t border-slate-200 pt-5 text-sm text-slate-500">© AirlinesGroup Travel. All rights reserved. <span className="mx-1 hidden sm:inline">·</span><span className="mt-1 block sm:mt-0 sm:inline">Plan together. Fly together.</span></div>
        </div>

        <svg className="pointer-events-none absolute bottom-0 left-0 -z-0 h-14 w-full sm:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 48C188 112 318 108 492 62C690 10 812 21 982 67C1158 114 1288 88 1440 42V120H0V48Z" fill="#10b7d5" /></svg>
    </footer>
}
