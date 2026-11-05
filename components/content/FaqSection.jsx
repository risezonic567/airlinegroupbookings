import JsonLd from '../seo/JsonLd'
import { SITE_URL } from '../../lib/seo'

export default function FaqSection({
    heading = 'Frequently Asked Questions',
    intro,
    items = [],
    path,
    accentWord = 'Questions',
}) {
    if (!items.length) return null

    const titleParts = heading.split(accentWord)
    const schema = path
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
            url: new URL(path, SITE_URL).toString(),
        }
        : null

    return (
        <section className="bg-white py-14 sm:py-16">
            {schema ? <JsonLd data={schema} /> : null}
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">FAQ</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {titleParts.length > 1 ? (
                            <>
                                {titleParts[0]}
                                <span className="text-blue-600">{accentWord}</span>
                                {titleParts.slice(1).join(accentWord)}
                            </>
                        ) : (
                            heading
                        )}
                    </h2>
                    {intro ? <p className="mt-4 text-base leading-7 text-slate-600">{intro}</p> : null}
                </div>

                <div className="mt-8 mx-auto flex max-w-3xl flex-col gap-3">
                    {items.map((faq) => (
                        <details
                            key={faq.question}
                            className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm"
                        >
                            <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                                <span className="flex items-start justify-between gap-3">
                                    <span>{faq.question}</span>
                                    <span className="mt-0.5 text-lg font-bold leading-none text-blue-700" aria-hidden="true">
                                        +
                                    </span>
                                </span>
                            </summary>
                            <p className="mt-3 text-md leading-6 text-slate-600">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
