import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import groupTravelAirlines from '../../../data/groupTravelAirlines'

export function generateStaticParams() {
    return groupTravelAirlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = groupTravelAirlines.find((item) => item.slug === slug)
    if (!airline) return { title: 'Airline not found | AirlinesGroup Travel' }
    return {
        title: `${airline.name} Group Travel | AirlinesGroup Travel`,
        description: airline.description,
    }
}

export default async function GroupTravelAirlineDetail({ params }) {
    const { slug } = await params
    const airline = groupTravelAirlines.find((item) => item.slug === slug)
    if (!airline) notFound()

    const related = groupTravelAirlines.filter((item) => item.slug !== slug).slice(0, 4)
    return <CollectionDetail item={airline} kind="airline" related={related} />
}
