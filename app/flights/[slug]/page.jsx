import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import groupTravelAirlines from '../../../data/groupTravelAirlines'

export function generateStaticParams() {
    return groupTravelAirlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = groupTravelAirlines.find((item) => item.slug === slug)
    if (!airline) return { title: 'Airline not found | AirlinesGroup Travel', description: 'Explore group flight booking information from AirlinesGroup Travel.' }
    return createPageMetadata({
        title: `${airline.name} Group Travel | AirlinesGroup Travel`,
        description: airline.description,
        path: `/flights/${slug}`,
    })
}

export default async function GroupTravelAirlineDetail({ params }) {
    const { slug } = await params
    const airline = groupTravelAirlines.find((item) => item.slug === slug)
    if (!airline) notFound()

    const related = groupTravelAirlines.filter((item) => item.slug !== slug).slice(0, 4)
    return <>
        <PageStructuredData
            name={`${airline.name} Group Travel`}
            description={airline.description}
            path={`/flights/${slug}`}
            type="Service"
            breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Group Travel', path: '/group-travel' }, { name: airline.name, path: `/flights/${slug}` }]}
        />
        <CollectionDetail item={airline} kind="airline" related={related} />
    </>
}
