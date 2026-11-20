'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

/** Mobile-only sticky quote bar (manager mobile UX brief). */
export default function StickyQuoteCta() {
    const pathname = usePathname()
    const hide =
        pathname?.startsWith('/quote-confirmation')
        || pathname?.startsWith('/privacy-policy')
        || pathname?.startsWith('/terms-conditions')
        || pathname?.startsWith('/refund-policy')
        || pathname?.startsWith('/disclaimer')

    if (hide) return null

    const href = pathname === '/' ? '/#booking' : '/contact#request-quote'

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
            <div className="pointer-events-auto border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(16,26,61,0.12)] backdrop-blur">
                <Link
                    href={href}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                    Get a Group Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
        </div>
    )
}
