'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'
import groupTravelAirlines from '../data/groupTravelAirlines'
import businessClassAirlines from '../data/businessClassAirlines'
import contactDetails from '../data/contact'
import { withAirlinesName } from '../data/slugRedirects'
import SupportLanguagesDropdown from './layout/SupportLanguagesDropdown'
import LocalePreferencesMenu from './layout/LocalePreferencesMenu'

const MEGA_PREVIEW = 10

const menus = [
    {
        title: 'Group Travel',
        href: '/group-travel',
        links: [
            ...groupTravelAirlines.slice(0, MEGA_PREVIEW).map(({ name, slug }) => ({
                label: `${withAirlinesName(name)} Group Travel`,
                href: `/group-travel/${slug}`,
            })),
            { label: 'View all group travel airlines', href: '/group-travel', isViewAll: true },
        ],
    },
    {
        title: 'Business Class Booking',
        href: '/business-class',
        links: [
            ...businessClassAirlines.slice(0, MEGA_PREVIEW).map(({ name, slug }) => ({
                label: `${name} Business Class`,
                href: `/business-class-booking/${slug}`,
            })),
            { label: 'View all business class airlines', href: '/business-class', isViewAll: true },
        ],
    },
]

const pages = [
    { label: 'About Us', href: '/about' },
    { label: 'Deals', href: '/deals' },
    { label: 'Blog', href: '/blog' },
    { label: 'Private Jet Charter', href: '/private-jet-charter' },
    { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
    const desktopLinkClass = (href) => `flex items-center border-b-4 border-transparent px-4 text-[15px] transition hover:border-red-400 hover:bg-blue-600 ${isActive(href) ? 'border-red-400 bg-blue-600 text-white' : ''}`
    const mobileLinkClass = (href) => `block rounded border-l-2 border-transparent px-3 py-2.5 hover:bg-blue-50 ${isActive(href) ? 'border-red-500 bg-blue-50 text-blue-700' : ''}`

    return (
        <header className="relative z-50 bg-white font-sans">
            {/* Mobile: phone full-width top, then logo + locale + menu. Desktop: logo left, phone + locale right. */}
            <div className="agb-topbar mx-auto flex min-h-[76px] max-w-[1440px] flex-wrap items-center justify-between gap-y-2 px-5 py-2 sm:px-8 lg:flex-nowrap lg:px-10">
                <Link href="/" className="notranslate order-2 mr-auto shrink-0 lg:order-1 lg:mr-0" aria-label="Airline Group Bookings home">
                    <Image
                        src="/images/navbarlogo.png"
                        alt="Airline Group Bookings"
                        width={280}
                        height={40}
                        priority
                        className="h-auto w-[160px] sm:w-[190px]"
                    />
                </Link>

                <a
                    href={contactDetails.phoneHref}
                    className="notranslate order-1 mx-auto flex w-full max-w-full basis-full items-center gap-2 rounded-full bg-[#1a2a5a] px-3 py-2 text-white transition hover:bg-[#15234d] sm:gap-2.5 sm:px-4 lg:order-2 lg:mx-0 lg:ml-auto lg:w-auto lg:max-w-none lg:basis-auto lg:px-5 lg:py-2.5"
                >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                        <Phone className="h-3.5 w-3.5 text-[#1a2a5a]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-left leading-tight lg:flex-none">
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-white/90 sm:text-[10px]">
                            Group Booking Support · 24/7
                        </span>
                        <span className="block text-[11px] font-bold sm:text-xs lg:text-sm">
                            {contactDetails.phoneDisplay}
                        </span>
                    </span>
                </a>

                <div className="notranslate order-3 ml-2 flex shrink-0 items-center gap-1.5 sm:gap-2">
                    <LocalePreferencesMenu variant="light" />
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <nav className="hidden bg-[#263673] text-white lg:block" aria-label="Main navigation">
                <div className="agb-desktop-nav mx-auto flex min-h-[68px] max-w-[1440px] items-stretch justify-between px-5 sm:px-8 lg:px-10">
                    <div className="agb-desktop-nav-links flex min-w-0 flex-1 items-stretch gap-1 text-[15px] font-medium xl:gap-3">
                        <Link href="/" className={desktopLinkClass('/')}>Home</Link>
                        {pages.slice(0, 1).map(({ label, href }) => <Link key={label} href={href} className={desktopLinkClass(href)}>{label}</Link>)}
                        {menus.map(({ title, href, links }) => (
                            <div key={title} className="group relative flex items-stretch">
                                <Link href={href} className={`flex items-center gap-2 border-b-4 border-transparent px-4 transition hover:border-red-400 hover:bg-blue-600 focus:outline-none focus-visible:border-red-400 focus-visible:bg-blue-600 ${isActive(href) ? 'border-red-400 bg-blue-600 text-white' : ''}`} aria-haspopup="true">
                                    {title}<ChevronDown className="mt-1 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                                </Link>
                                <div className="invisible absolute left-0 top-full max-h-[280px] w-80 translate-y-2 overflow-y-auto overscroll-contain border-t-2 border-blue-500 bg-white py-2 text-slate-700 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                    {links.map(({ label, href: linkHref, isViewAll }) => (
                                        <Link
                                            key={label}
                                            href={linkHref}
                                            className={`block border-b border-slate-400 px-5 py-3 text-md transition last:border-b-0 hover:bg-red-500 hover:text-white ${isViewAll ? 'font-bold text-blue-700' : ''} ${isActive(linkHref) && !isViewAll ? 'bg-red-500 text-white' : ''}`}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {pages.slice(1).map(({ label, href }) => <Link key={label} href={href} className={desktopLinkClass(href)}>{label}</Link>)}
                    </div>
                    <div className="notranslate flex shrink-0 items-center gap-3 pl-3">
                        <SupportLanguagesDropdown variant="cta" />
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-120px)] overflow-y-auto border-t border-blue-100 bg-white px-5 py-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
                <div className="flex flex-col gap-1 text-md font-semibold text-slate-700">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass('/')}>Home</Link>
                    {pages.slice(0, 1).map(({ label, href }) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(href)}>{label}</Link>)}
                    {menus.map(({ title, href, links }) => (
                        <div key={title} className="border-t border-slate-100 pt-2">
                            <Link href={href} onClick={() => setMobileMenuOpen(false)} className={`block rounded px-3 py-2 text-blue-700 ${isActive(href) ? 'bg-blue-50' : ''}`}>{title}</Link>
                            {links.map(({ label, href: linkHref, isViewAll }) => (
                                <Link
                                    key={label}
                                    href={linkHref}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block border-b border-slate-400 px-5 py-2 text-xs font-medium last:border-b-0 hover:bg-red-500 hover:text-white ${isViewAll ? 'font-bold text-blue-700' : 'text-slate-600'} ${isActive(linkHref) && !isViewAll ? 'bg-red-500 text-white' : ''}`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    ))}
                    <div className="border-t border-slate-100 pt-2">
                        {pages.slice(1).map(({ label, href }) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(href)}>{label}</Link>)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                        <a href={contactDetails.phoneHref} className="rounded border border-slate-200 py-3 text-center text-xs">Call {contactDetails.phoneDisplay}</a>
                        <a href={contactDetails.phoneHref} onClick={() => setMobileMenuOpen(false)} className="rounded bg-blue-800 py-3 text-center text-xs text-white">Get a Callback</a>
                        <div className="col-span-2 flex justify-center pt-1">
                            <SupportLanguagesDropdown variant="light" />
                        </div>
                    </div>
                </div>
            </nav>}
        </header>
    )
}
