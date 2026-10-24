'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'
import groupTravelAirlines from '../data/groupTravelAirlines'
import businessClassAirlines from '../data/businessClassAirlines'
import contactDetails from '../data/contact'

const menus = [
    {
        title: 'Group Travel',
        href: '/group-travel',
        links: [
            { label: 'Browse All Airlines', href: '/group-travel#airlines' },
            ...groupTravelAirlines.slice(0, 5).map(({ name, slug }) => ({ label: `${name} Group Travel`, href: `/flights/${slug}` })),
        ],
    },
    {
        title: 'Business Class Booking',
        href: '/business-class',
        links: [
            { label: 'Browse All Business Class', href: '/business-class#airlines' },
            ...businessClassAirlines.slice(0, 5).map(({ name, slug }) => ({ label: `${name} Business Class`, href: `/business-class/${slug}` })),
        ],
    },
]

const pages = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
    const desktopLinkClass = (href) => `flex items-center px-4 transition hover:bg-blue-600 ${isActive(href) ? 'bg-blue-600 text-white' : ''}`
    const mobileLinkClass = (href) => `block rounded px-3 py-2.5 hover:bg-blue-50 ${isActive(href) ? 'bg-blue-50 text-blue-700' : ''}`

    return (
        <header className="relative z-50 bg-white font-sans">
            <div className="mx-auto flex min-h-[92px] max-w-[1440px] flex-wrap items-center justify-between gap-y-3 px-5 py-3 sm:px-8 lg:flex-nowrap lg:px-10">
                <Link href="/" className="order-2 mr-auto flex items-center gap-2.5 lg:order-1 lg:mr-0" aria-label="AirlinesGroup Travel home">
                    <Image
                        src="/images/Airline Group Booking 1.png"
                        alt="AirlinesGroup Travel"
                        width={280}
                        height={78}
                        priority
                        className="h-auto w-[220px] sm:w-[280px]"
                    />
                </Link>

                <a href={contactDetails.phoneHref} className="order-1 mx-auto flex basis-full max-w-full items-center justify-center gap-2 rounded-full border border-blue-400 bg-blue-50/70 px-3 py-2 text-[11px] font-bold text-slate-900 transition hover:bg-blue-100 sm:px-4 sm:text-xs lg:order-2 lg:mx-0 lg:basis-auto lg:justify-start lg:gap-3 lg:px-5 lg:py-3 lg:text-md">
                    <Phone className="h-4 w-4 fill-red-500 text-red-500" />
                    <span className="hidden sm:inline">Book a Group - Call us 24/7</span>
                    <span className="sm:hidden">Call 24/7</span>
                    <strong className="whitespace-nowrap text-red-600">{contactDetails.phoneDisplay}</strong>
                </a>

                <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="order-3 ml-2 rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <nav className="hidden bg-[#087cd1] text-white lg:block" aria-label="Main navigation">
                <div className="mx-auto flex min-h-[68px] max-w-[1440px] items-stretch justify-between px-5 sm:px-8 lg:px-10">
                    <div className="flex items-stretch gap-1 text-[15px] font-medium xl:gap-3">
                        <Link href="/" className={desktopLinkClass('/')}>Home</Link>
                        {pages.slice(0, 1).map(({ label, href }) => <Link key={label} href={href} className={desktopLinkClass(href)}>{label}</Link>)}
                        {menus.map(({ title, href, links }) => (
                            <div key={title} className="group relative flex items-stretch">
                                <Link href={href} className={`flex items-center gap-2 px-4 transition hover:bg-blue-600 focus:outline-none focus-visible:bg-blue-600 ${isActive(href) ? 'bg-blue-600 text-white' : ''}`} aria-haspopup="true">
                                    {title}<ChevronDown className="mt-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                                </Link>
                                <div className="invisible absolute left-0 top-full max-h-[75vh] w-80 translate-y-2 overflow-y-auto border-t-2 border-blue-500 bg-white py-2 text-slate-700 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                    {links.map(({ label, href: linkHref }) => <Link key={label} href={linkHref} className={`block px-5 py-3 text-md transition hover:bg-blue-50 hover:text-blue-700 ${isActive(linkHref) ? 'bg-blue-50 text-blue-700' : ''}`}>{label}</Link>)}
                                </div>
                            </div>
                        ))}
                        {pages.slice(1).map(({ label, href }) => <Link key={label} href={href} className={desktopLinkClass(href)}>{label}</Link>)}
                    </div>
                    <div className="flex shrink-0 items-center gap-3 pl-3">
                        <Link
                            href="/callback"
                            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 px-6 py-3 text-md font-bold text-white shadow-md shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-950 hover:shadow-lg hover:shadow-blue-900/50 active:translate-y-0"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                            </div>
                            <span className="tracking-wide">Get a Callback</span>
                        </Link>
                        {/* <button type="button" className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-md text-slate-800 shadow-sm">United States (EN)</button> */}
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-120px)] overflow-y-auto border-t border-blue-100 bg-white px-5 py-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
                <div className="flex flex-col gap-1 text-md font-semibold text-slate-700">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass('/')}>Home</Link>
                    {pages.slice(0, 1).map(({ label, href }) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(href)}>{label}</Link>)}
                    {menus.map(({ title, href, links }) => <div key={title} className="border-t border-slate-100 pt-2"><Link href={href} onClick={() => setMobileMenuOpen(false)} className={`block rounded px-3 py-2 text-blue-700 ${isActive(href) ? 'bg-blue-50' : ''}`}>{title}</Link>{links.map(({ label, href: linkHref }) => <Link key={label} href={linkHref} onClick={() => setMobileMenuOpen(false)} className={`block rounded px-5 py-2 text-xs font-medium text-slate-600 hover:bg-blue-50 ${isActive(linkHref) ? 'bg-blue-50 text-blue-700' : ''}`}>{label}</Link>)}</div>)}
                    <div className="border-t border-slate-100 pt-2">
                        {pages.slice(1).map(({ label, href }) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(href)}>{label}</Link>)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                        <a href={contactDetails.phoneHref} className="rounded border border-slate-200 py-3 text-center text-xs">Call {contactDetails.phoneDisplay}</a>
                        <Link href="/callback" onClick={() => setMobileMenuOpen(false)} className="rounded bg-blue-800 py-3 text-center text-xs text-white">Get a Callback</Link>
                    </div>
                </div>
            </nav>}
        </header>
    )
}
