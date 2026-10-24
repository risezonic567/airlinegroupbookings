import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import businessClassAirlines from '../../../data/businessClassAirlines'

export function generateStaticParams() {
    return businessClassAirlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = businessClassAirlines.find((item) => item.slug === slug)
    if (!airline) return { title: 'Airline not found | AirlinesGroup Travel' }
    return {
        title: `${airline.name} Business Class | AirlinesGroup Travel`,
        description: airline.description,
    }
}

export default async function BusinessClassDetail({ params }) {
    const { slug } = await params
    const airline = businessClassAirlines.find((item) => item.slug === slug)
    if (!airline) notFound()

    const related = businessClassAirlines.filter((item) => item.slug !== slug).slice(0, 4)
    return <CollectionDetail item={airline} kind="businessClass" related={related} />
}
