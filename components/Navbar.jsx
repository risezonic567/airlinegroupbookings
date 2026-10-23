'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, Menu, X, Plane } from 'lucide-react'

const menus = [
    {
        title: 'Group Travel',
        href: '/group-travel',
        links: [
            { label: 'Corporate Group Travel', href: '/group-travel/corporate' },
            { label: 'School & Student Groups', href: '/group-travel/school-student' },
            { label: 'Wedding Groups', href: '/group-travel/weddings' },
            { label: 'Sports Team Travel', href: '/group-travel/sports-teams' },
        ],
    },
    {
        title: 'Business Class Booking',
        href: '/business-class-booking',
        links: [
            { label: 'International Business Class', href: '/business-class-booking/international' },
            { label: 'Domestic First Class', href: '/business-class-booking/domestic-first-class' },
            { label: 'Corporate Discounts', href: '/business-class-booking/corporate-discounts' },
        ],
    },
]

const pages = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Deals', href: '/deals' },
    { label: 'Blog', href: '/blog' },
    { label: 'Private Jet Charter', href: '/private-jet-charter' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
    const desktopLinkClass = (href) => `flex items-center px-4 transition hover:bg-sky-600 ${isActive(href) ? 'bg-sky-600 text-white' : ''}`
    const mobileLinkClass = (href) => `block rounded px-3 py-2.5 hover:bg-sky-50 ${isActive(href) ? 'bg-sky-50 text-sky-700' : ''}`

    return (
        <header className="relative z-50 bg-white font-sans">
            <div className="mx-auto flex min-h-[92px] max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
                <Link href="/" className="flex items-center gap-2.5" aria-label="AirlinesGroup Travel home">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-sky-400 text-sky-500 sm:h-[66px] sm:w-[66px]">
                        <Plane className="h-8 w-8 -rotate-12 fill-sky-500" />
                        <span className="absolute bottom-1 left-2 h-2 w-2 rounded-full bg-rose-500" />
                    </span>
                    <span className="leading-none">
                        <span className="block text-[20px] font-extrabold tracking-tight text-sky-500 sm:text-[24px]">AirlinesGroup</span>
                        <span className="mt-1 block text-[18px] font-extrabold tracking-tight text-rose-500 sm:text-[21px]">Travel</span>
                    </span>
                </Link>

                <a href="tel:+18339580151" className="flex items-center gap-2 rounded-full border border-emerald-400 bg-emerald-50/70 px-3 py-2 text-[11px] font-bold text-slate-900 transition hover:bg-emerald-100 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
                    <Phone className="h-4 w-4 fill-rose-500 text-rose-500" />
                    <span className="hidden sm:inline">Book a Group – Call us 24/7</span>
                    <span className="sm:hidden">Call 24/7</span>
                    <strong className="whitespace-nowrap text-emerald-700">+1-833-958-0151</strong>
                </a>

                <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2 rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <nav className="hidden bg-[#08a9df] text-white lg:block" aria-label="Main navigation">
                <div className="mx-auto flex min-h-[68px] max-w-[1440px] items-stretch justify-between px-5 sm:px-8 lg:px-10">
                    <div className="flex items-stretch gap-1 text-[15px] font-medium xl:gap-3">
                        <Link href="/" className={desktopLinkClass('/')}>Home</Link>
                        {pages.slice(0, 1).map(({ label, href }) => <Link key={label} href={href} className={desktopLinkClass(href)}>{label}</Link>)}
                        {menus.map(({ title, href, links }) => (
                            <div key={title} className="group relative flex items-stretch">
                                <Link href={href} className={`flex items-center gap-2 px-4 transition hover:bg-sky-600 focus:outline-none focus-visible:bg-sky-600 ${isActive(href) ? 'bg-sky-600 text-white' : ''}`} aria-haspopup="true">
                                    {title}<ChevronDown className="mt-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                                </Link>
                                <div className="invisible absolute left-0 top-full w-64 translate-y-2 border-t-2 border-sky-500 bg-white py-2 text-slate-700 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                    {links.map(({ label, href: linkHref }) => <Link key={label} href={linkHref} className={`block px-5 py-3 text-sm transition hover:bg-sky-50 hover:text-sky-700 ${isActive(linkHref) ? 'bg-sky-50 text-sky-700' : ''}`}>{label}</Link>)}
                                </div>
                            </div>
                        ))}
                        {pages.slice(1).map(({ label, href }) => <Link key={label} href={href} className={desktopLinkClass(href)}>{label}</Link>)}
                    </div>
                    <div className="flex shrink-0 items-center gap-3 pl-3">
                        <Link
                            href="/callback"
                            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-950 hover:shadow-lg hover:shadow-blue-900/50 active:translate-y-0"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                            </div>
                            <span className="tracking-wide">Get a Callback</span>
                        </Link>
                        {/* <button type="button" className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm text-slate-800 shadow-sm">United States (EN)</button> */}
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && <nav className="absolute inset-x-0 top-full border-t border-sky-100 bg-white px-5 py-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
                <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass('/')}>Home</Link>
                    {pages.slice(0, 1).map(({ label, href }) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(href)}>{label}</Link>)}
                    {menus.map(({ title, href, links }) => <div key={title} className="border-t border-slate-100 pt-2"><Link href={href} onClick={() => setMobileMenuOpen(false)} className={`block rounded px-3 py-2 text-sky-700 ${isActive(href) ? 'bg-sky-50' : ''}`}>{title}</Link>{links.map(({ label, href: linkHref }) => <Link key={label} href={linkHref} onClick={() => setMobileMenuOpen(false)} className={`block rounded px-5 py-2 text-xs font-medium text-slate-600 hover:bg-sky-50 ${isActive(linkHref) ? 'bg-sky-50 text-sky-700' : ''}`}>{label}</Link>)}</div>)}
                    <div className="border-t border-slate-100 pt-2">
                        {pages.slice(1).map(({ label, href }) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(href)}>{label}</Link>)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                        <a href="tel:+18339580151" className="rounded border border-slate-200 py-3 text-center text-xs">Call +1-833-958-0151</a>
                        <Link href="/callback" onClick={() => setMobileMenuOpen(false)} className="rounded bg-blue-800 py-3 text-center text-xs text-white">Get a Callback</Link>
                    </div>
                </div>
            </nav>}
        </header>
    )
}
