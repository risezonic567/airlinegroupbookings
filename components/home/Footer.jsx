import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import contactDetails from '../../data/contact'

const footerLink = 'text-md font-semibold text-slate-600 transition hover:text-blue-700'

const linkGroups = [
    {
        title: 'Company',
        links: [
            { label: 'About us', href: '/about' },
            { label: 'Our blogs', href: '/blog' },
            { label: 'Airline group travel', href: '/airlines' },
            { label: 'Deals', href: '/deals' },
        ],
    },
    {
        title: 'Explore',
        links: [
            { label: 'Destinations', href: '/destinations' },
            { label: 'Group travel', href: '/group-travel' },
            { label: 'Request a quote', href: '/#booking' },
        ],
    },
]

const socialMedia = [
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UCn09_avVWrAYtpvPb5wGtEA',
        icon: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/airlinegroupbookings/',
        icon: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/airlinegroupbookings/',
        icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></>,
    },
    {
        label: 'LinkedIn',
        icon: <><path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" /><circle cx="5" cy="5" r="1" fill="currentColor" /></>,
    },
    {
        label: 'X',
        href: 'https://x.com/airgrpbooking',
        icon: <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-5-6.5L6.2 21H3l7.3-8.4L2.8 3h6.5l4.5 6 5.1-6Zm-1.1 16h1.7L8.3 4.9H6.5L17.8 19Z" />,
    },
    {
        label: 'Pinterest',
        href: 'https://www.pinterest.com/airlinegroupbooking/',
        icon: <path d="M12 3a9 9 0 0 0-3.3 17.4c0-.7 0-1.6.2-2.4l1.2-5.1s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4-4.1-4-2.8 0-4.5 2.1-4.5 4.3 0 .9.4 1.9.9 2.4.1.2.2.3.1.5l-.3 1c0 .2-.2.3-.4.2-1.3-.6-2.1-2.3-2.1-3.8 0-3.1 2.2-6 6.4-6 3.4 0 6 2.4 6 5.6 0 3.4-2.1 6.2-5 6.2-1 0-2-.6-2.3-1.2l-.7 2.5c-.3.9-.8 1.8-1.2 2.4A9 9 0 1 0 12 3Z" />,
    },
]

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
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
                <div className="mt-5 flex gap-2.5" aria-label="Social media icons">
                    {socialMedia.map(({ icon, label, href }) => {
                        const contents = <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
                        const className = 'flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white'

                        return href
                            ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>{contents}</a>
                            : <span key={label} role="img" aria-label={label} className={className}>{contents}</span>
                    })}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3" aria-label="Travel industry memberships">
                    <Image src="/images/certificates/bbb.png" alt="BBB Accredited Business" width={100} height={50} className="h-10 w-[90px] object-contain" />
                    <Image src="/images/certificates/asta.png" alt="ASTA, American Society of Travel Advisors" width={100} height={50} className="h-10 w-[90px] object-contain" />
                    <Image src="/images/certificates/clia.jpg" alt="CLIA, Cruise Lines International Association" width={100} height={50} className="h-10 w-[68px] object-contain" />
                    <Image src="/images/certificates/iatan.jpg" alt="IATAN" width={100} height={50} className="h-10 w-[68px] object-contain" />
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
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-slate-200 pt-5 text-sm">
                {legalLinks.map((link) => <Link key={link.href} href={link.href} className="font-semibold text-slate-600 transition hover:text-blue-700">{link.label}</Link>)}
            </div>
            <div className="pt-4 text-sm text-slate-500">© AirlinesGroup Travel. All rights reserved. <span className="mx-1 hidden sm:inline">·</span><span className="mt-1 block sm:mt-0 sm:inline">Plan together. Fly together.</span></div>
        </div>

        <svg className="pointer-events-none absolute bottom-0 left-0 -z-0 h-14 w-full sm:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 48C188 112 318 108 492 62C690 10 812 21 982 67C1158 114 1288 88 1440 42V120H0V48Z" fill="#10b7d5" /></svg>
    </footer>
}
