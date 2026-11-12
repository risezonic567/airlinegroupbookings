import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import blogs from '../../data/blogs'
import Newsletter from '../../components/home/Newsletter'
import JsonLd from '../../components/seo/JsonLd'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.blog

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/blog',
})

export default function BlogIndex() {
    return (
        <main>
            <JsonLd data={pageSchemas.blog} />
            <section className="relative isolate flex min-h-[320px] items-center overflow-hidden px-5 py-16 text-white sm:min-h-[380px] sm:px-8 sm:py-20">
                <Image src="/images/Modern Travel Blog Aviation Hero Banner.png" alt="Modern travel blog aviation hero banner with airplane imagery" fill priority sizes="100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/75 to-[#101a3d]/35" aria-hidden="true" />
                <div className="relative mx-auto w-full max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Guides and inspiration</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Group Travel Tips <span className="text-blue-200">& Flight Booking Guides</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        Read group travel tips and our group flight booking guide — including how to book flights for large groups, compare fares, and plan your trip with ease.
                    </p>
                </div>
            </section>
            <section className="bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10">
                    {blogs.map((post) => (
                        <article key={post.slug} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl">
                            <Link href={`/blog/${post.slug}`} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">
                                <div className="relative h-56 overflow-hidden bg-blue-900">
                                    <Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                                    <span className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                                    <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">{post.category}</span>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">{post.title}</h2>
                                    <p className="mt-2 min-h-12 text-md leading-6 text-slate-600">{post.excerpt}</p>
                                    <span className="mt-5 inline-flex items-center gap-2 text-md font-bold text-blue-700">
                                        Know More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
            <Newsletter />
        </main>
    )
}
