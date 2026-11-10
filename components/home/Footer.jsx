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
            { label: 'Airline group bookings', href: '/airlines' },
            { label: 'Deals', href: '/deals' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
    {
        title: 'Explore',
        links: [
            { label: 'Destinations', href: '/destinations' },
            { label: 'Group travel', href: '/group-travel' },
            { label: 'Request a quote', href: '/contact' },
            { label: 'Site Map', href: '/site-map' },
        ],
    },
]

const socialMedia = [
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UCn09_avVWrAYtpvPb5wGtEA',
        icon: <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7L16 12l-6.2 3.5z" />,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/airlinegroupbookings/',
        icon: <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/airlinegroupbookings/',
        icon: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-2.25.1-3.3 1.15-3.4 3.4-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.24 1.15 3.3 3.4 3.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.26-.1 3.3-1.16 3.4-3.4.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.26-1.15-3.3-3.4-3.4-1.24-.06-1.61-.07-4.76-.07zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96zm0 8.22a3.24 3.24 0 1 0 0-6.48 3.24 3.24 0 0 0 0 6.48zm6.35-8.43a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/airline-group-bookings/',
        icon: <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z" />,
    },
    {
        label: 'X',
        href: 'https://x.com/airgrpbooking',
        icon: <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-5-6.5L6.2 21H3l7.3-8.4L2.8 3h6.5l4.5 6 5.1-6Zm-1.1 16h1.7L8.3 4.9H6.5L17.8 19Z" />,
    },
    {
        label: 'Pinterest',
        href: 'https://www.pinterest.com/airlinegroupbooking/',
        icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.15 9.42 7.6 11.17-.1-.95-.2-2.4.04-3.44.22-.94 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 4-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.77-2.25 3.77-5.49 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.41 2.56-5.41 5.2 0 1.03.4 2.14.89 2.74a.36.36 0 0 1 .08.34c-.09.38-.3 1.2-.34 1.37-.05.22-.18.27-.41.16-1.53-.71-2.49-2.95-2.49-4.75 0-3.87 2.81-7.42 8.11-7.42 4.26 0 7.57 3.04 7.57 7.1 0 4.24-2.67 7.65-6.38 7.65-1.25 0-2.42-.65-2.82-1.41l-.77 2.93c-.28 1.07-1.03 2.41-1.54 3.23A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />,
    },
]

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Site Map', href: '/site-map' },
]

export default function Footer() {
    return <footer className="relative isolate overflow-hidden bg-[#101a3d] px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85')" }} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[#101a3d]/35" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl gap-9 rounded-t-[2rem] bg-white/95 px-6 py-9 shadow-2xl shadow-slate-950/20 backdrop-blur-sm sm:px-9 sm:py-11 lg:grid-cols-[1.35fr_.8fr_.9fr_1.15fr] lg:gap-10 lg:px-12">
            <div>
                <Link href="/" aria-label="AirlinesGroup Travel home" className="inline-flex  p-2 ring-1 ring-slate-100">
                    <Image src="/images/navbarlogo.png" alt="Airline Group Bookings" width={220} height={60} className="h-auto w-[190px]" />
                </Link>
                <p className="mt-4 max-w-xs text-md leading-6 text-slate-600">Making it easier for families, teams, schools, and organizations to plan group flights together.</p>
                <div className="mt-5 flex gap-2.5" aria-label="Social media icons">
                    {socialMedia.map(({ icon, label, href }) => {
                        const contents = <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
                        const className = 'flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white'

                        return href
                            ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>{contents}</a>
                            : <span key={label} role="img" aria-label={label} className={className}>{contents}</span>
                    })}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3" aria-label="Travel industry memberships">
                    <Image src="/images/certificates/BBB_Accredited_Business_Badge__1_-removebg-preview.png" alt="BBB Accredited Business" width={100} height={50} className="h-10 w-[90px] object-contain" />
                    <Image src="/images/certificates/ASTA_Blue_Globe_Logo__1_-removebg-preview.png" alt="ASTA, American Society of Travel Advisors" width={100} height={50} className="h-10 w-[90px] object-contain" />
                    <Image src="/images/certificates/CLIA_Blue_Wave_Logo-removebg-preview.png" alt="CLIA, Cruise Lines International Association" width={100} height={50} className="h-10 w-[68px] object-contain" />
                    <Image src="/images/certificates/IATAN_Blue_Aviation_Emblem-removebg-preview.png" alt="IATAN" width={100} height={50} className="h-10 w-[68px] object-contain" />
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
            <div className="pt-4 text-sm text-slate-500">© AirlinesGroup Bookings. All rights reserved. <span className="mx-1 hidden sm:inline">·</span><span className="mt-1 block sm:mt-0 sm:inline">Plan together. Fly together.</span></div>
        </div>

        <svg className="pointer-events-none absolute bottom-0 left-0 -z-0 h-14 w-full sm:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 48C188 112 318 108 492 62C690 10 812 21 982 67C1158 114 1288 88 1440 42V120H0V48Z" fill="#c8102e" /></svg>
    </footer>
}
