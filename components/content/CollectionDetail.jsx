import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MapPin, Plane } from 'lucide-react'
import Newsletter from '../home/Newsletter'
import { withAirlinesName } from '../../data/slugRedirects'

export default function CollectionDetail({ item, kind, related }) {
    const isDestination = kind === 'destination'
    const isAirline = kind === 'airline'
    const isBusinessClass = kind === 'businessClass'
    const plural = isDestination ? 'destinations' : isAirline ? 'group-travel' : isBusinessClass ? 'business-class' : 'deals'
    const label = isDestination ? `${item.name}, ${item.country}` : isAirline ? 'Airline group travel' : isBusinessClass ? 'Airline business class' : item.category
    const title = item.h1
        || (isDestination ? `${item.name}, ${item.country}` : isAirline ? `${withAirlinesName(item.name)} Group Travel` : isBusinessClass ? `${item.name} Business Class` : item.title)
    const description = item.intro || item.description
    const points = isDestination ? item.highlights : isAirline || isBusinessClass ? item.highlights : item.details
    const customHtml = item.html || item.content || item.contentHtml
    const collectionTitle = isDestination ? 'Destinations' : isAirline ? 'Group Travel' : isBusinessClass ? 'Business Class' : 'Popular deals'
    const relatedTitle = isDestination ? 'Explore more destinations' : isAirline || isBusinessClass ? 'Explore more airlines' : 'More group flight deals'
    const relatedHref = (entry) => isAirline ? `/group-travel/${entry.slug}` : isBusinessClass ? `/business-class-booking/${entry.slug}` : `/${plural}/${entry.slug}`
    const allHref = isAirline ? '/group-travel' : isBusinessClass ? '/business-class' : `/${plural}`
    const imageSrc = item.image || '/images/travel-card.svg'

    return (
        <main>
            <section className="relative isolate overflow-hidden bg-[#202d60] text-white">
                <Image
                    src={imageSrc}
                    alt={title || 'Travel'}
                    fill
                    priority
                    sizes="100vw"
                    className="-z-20 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-blue-950/60 to-blue-900/25" />
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <nav aria-label="Breadcrumb" className="text-md text-blue-100">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href={allHref} className="hover:text-white">{collectionTitle}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{title}</span>
                    </nav>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-blue-200">{label}</p>
                    <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                        {isDestination ? item.tagline : isAirline || isBusinessClass ? item.tagline : item.excerpt}
                    </p>
                </div>
            </section>

            <section className="bg-white py-12 sm:py-16">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
                    <article className="max-w-3xl">
                        {description && (
                            <p className="text-lg leading-8 text-slate-700">{description}</p>
                        )}

                        {customHtml && (
                            <div
                                className="airline-prose mt-8 space-y-4 text-[15px] leading-7 text-slate-600"
                                dangerouslySetInnerHTML={{ __html: customHtml }}
                            />
                        )}

                        {points && points.length > 0 && (
                            <section className="mt-9">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {isDestination
                                        ? `Things to do in ${item.name}`
                                        : isAirline
                                        ? `Planning ${item.tagline || `${item.name} group booking`}`
                                        : isBusinessClass
                                        ? `Explore ${item.tagline || `${item.name} business class booking`}`
                                        : 'Explore the options'}
                                </h2>
                                <ul className="mt-5 space-y-3">
                                    {points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex gap-3 rounded-xl bg-slate-50 p-4 text-md leading-6 text-slate-700"
                                        >
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {isDestination && item.travelTips && item.travelTips.length > 0 && (
                            <section className="mt-9">
                                <h2 className="text-2xl font-bold text-slate-900">Group planning tips</h2>
                                <ul className="mt-5 space-y-3">
                                    {item.travelTips.map((tip) => (
                                        <li key={tip} className="flex gap-3 text-md leading-6 text-slate-600">
                                            <Plane className="mt-1 h-4 w-4 shrink-0 text-blue-700" />
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <Link
                            href="/contact"
                            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-md font-bold text-white transition hover:bg-blue-800"
                        >
                            {isBusinessClass ? 'Request a travel quote' : 'Request a group quote'}{' '}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>

                    <aside className="h-fit rounded-2xl border border-slate-100 bg-slate-50 p-6">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                            {isDestination ? <MapPin className="h-5 w-5" /> : <Plane className="h-5 w-5" />}
                        </span>
                        <h2 className="mt-4 text-lg font-bold text-slate-900">{relatedTitle}</h2>
                        <ul className="mt-3 divide-y divide-slate-200">
                            {related && related.map((entry) => (
                                <li key={entry.slug}>
                                    <Link
                                        href={relatedHref(entry)}
                                        className="flex items-center justify-between gap-3 py-3 text-md font-medium text-slate-700 hover:text-blue-700"
                                    >
                                        {isDestination || isAirline || isBusinessClass ? entry.name : entry.title}
                                        <ArrowRight className="h-4 w-4 shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href={allHref} className="mt-3 inline-flex text-md font-bold text-blue-700">
                            {isAirline || isBusinessClass ? 'View all airlines' : `View all ${plural}`}
                        </Link>
                    </aside>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}
