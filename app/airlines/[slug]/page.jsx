import { notFound } from 'next/navigation'
import AirlinePage from '../../../components/airlines/AirlinePage'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import airlines from '../../../data/airlines'

export function generateStaticParams() {
    return airlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = airlines.find((item) => item.slug === slug)
    if (!airline) return { title: 'Airline not found | AirlinesGroup Travel', description: 'Explore group flight booking information from AirlinesGroup Travel.' }
    return createPageMetadata({
        title: airline.metaTitle,
        description: airline.metaDescription,
        path: `/airlines/${slug}`,
    })
}

export default async function AirlineDetail({ params }) {
    const { slug } = await params
    const airline = airlines.find((item) => item.slug === slug)
    if (!airline) notFound()
    return <>
        <PageStructuredData
            name={`${airline.name} Group Travel`}
            description={airline.metaDescription}
            path={`/airlines/${slug}`}
            type="Service"
            breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Airlines', path: '/airlines' }, { name: airline.name, path: `/airlines/${slug}` }]}
        />
        <AirlinePage airline={airline} />
    </>
}
