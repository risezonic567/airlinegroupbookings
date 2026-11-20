import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="bg-slate-50">
            <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">404</p>
                <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    This page is not available
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                    The link may be outdated or mistyped. Use the shortcuts below to continue planning your group trip.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 text-sm font-bold text-white hover:bg-blue-800"
                    >
                        <Home className="h-4 w-4" aria-hidden="true" />
                        Go home
                    </Link>
                    <Link
                        href="/contact#request-quote"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 hover:border-blue-400 hover:text-blue-800"
                    >
                        Request a group quote
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
                <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-blue-700">
                    <li>
                        <Link href="/group-travel" className="hover:text-blue-900">
                            Group travel airlines
                        </Link>
                    </li>
                    <li>
                        <Link href="/industries" className="hover:text-blue-900">
                            Industries
                        </Link>
                    </li>
                    <li>
                        <Link href="/how-it-works" className="hover:text-blue-900">
                            How it works
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" className="hover:text-blue-900">
                            FAQs
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}
