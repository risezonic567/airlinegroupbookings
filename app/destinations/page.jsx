import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import destinations from '../../data/destinations'
import Newsletter from '../../components/home/Newsletter'
import JsonLd from '../../components/seo/JsonLd'
import { pageSchemas } from '../../data/pageSchemas'
import { mainPageSeo } from '../../data/mainPageSeo'
import { createPageMetadata } from '../../lib/seo'

const seo = mainPageSeo.destinations

export const metadata = createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: '/destinations',
})

export default function DestinationsIndex() {
    return (
        <main>
            <JsonLd data={pageSchemas.destinations} />
            <section className="bg-gradient-to-br from-[#263673] to-[#202d60] px-5 py-16 text-white sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">Find your next trip</p>
                    <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
                        Group Flights to Europe <span className="text-blue-200">& Popular Destinations</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        Explore group flights to Europe and group travel destinations from USA — including group tour flight packages to help your party plan together.
                    </p>
                </div>
            </section>
            <section className="bg-slate-50 py-12 sm:py-16">
                <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-blue-900">
                                <Image src={destination.image} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-110" />
                                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-xs font-bold text-blue-900">{destination.country}</span>
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <h2 className="text-xl font-bold text-white">{destination.name}</h2>
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white">
                                        Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Newsletter />
        </main>
    )
}
