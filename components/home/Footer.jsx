import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import contactDetails from '../../data/contact'
import industries from '../../data/industries'

const colTitle = 'text-sm font-bold uppercase tracking-[.14em] text-blue-200'
const colLink = 'text-sm text-blue-100/90 transition hover:text-white'

const exploreLinks = [
    { label: 'Airlines', href: '/group-travel' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Resources', href: '/blog' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact Us', href: '/contact' },
]

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
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
]

export default function Footer() {
    return (
        <footer className="bg-[#101a3d] px-5 pb-24 pt-14 text-white md:pb-14 sm:px-8 sm:pt-16">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-12">
                <div>
                    <p className="text-lg font-bold tracking-wide">AIRLINE GROUP BOOKINGS</p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/85">
                        Specialist group flight booking assistance for teams, businesses, institutions and communities.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5" aria-label="Social media">
                        {socialMedia.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    {icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-3" aria-label="Travel industry memberships">
                        <Image src="/images/certificates/BBB_Accredited_Business_Badge__1_-removebg-preview.png" alt="BBB Accredited Business" width={100} height={50} className="h-9 w-auto object-contain" />
                        <Image src="/images/certificates/ASTA_Blue_Globe_Logo__1_-removebg-preview.png" alt="ASTA, American Society of Travel Advisors" width={100} height={50} className="h-9 w-auto object-contain" />
                        <Image src="/images/certificates/CLIA_Blue_Wave_Logo-removebg-preview.png" alt="CLIA, Cruise Lines International Association" width={100} height={50} className="h-9 w-auto object-contain" />
                        <Image src="/images/certificates/IATAN_Blue_Aviation_Emblem-removebg-preview.png" alt="IATAN" width={100} height={50} className="h-9 w-auto object-contain" />
                    </div>
                </div>

                <nav aria-label="Group Travel">
                    <h2 className={colTitle}>Group Travel</h2>
                    <ul className="mt-4 space-y-2.5">
                        {industries.map((industry) => (
                            <li key={industry.slug}>
                                <Link className={colLink} href={`/industries/${industry.slug}`}>
                                    {industry.navLabel}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Explore">
                    <h2 className={colTitle}>Explore</h2>
                    <ul className="mt-4 space-y-2.5">
                        {exploreLinks.map((link) => (
                            <li key={link.href}>
                                <Link className={colLink} href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className={colTitle}>Contact</h2>
                    <ul className="mt-4 space-y-3 text-sm text-blue-100/90">
                        <li>
                            <a className="inline-flex items-center gap-2.5 transition hover:text-white" href={contactDetails.phoneHref}>
                                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                                {contactDetails.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a className="inline-flex items-center gap-2.5 transition hover:text-white" href={`mailto:${contactDetails.email}`}>
                                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                                {contactDetails.email}
                            </a>
                        </li>
                        <li className="leading-6 text-blue-100/80">{contactDetails.supportHours}</li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6">
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-blue-100/75 sm:justify-between">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {legalLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="transition hover:text-white">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <p>© Airline Group Bookings. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
