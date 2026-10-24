import { notFound } from 'next/navigation'
import AirlinePage from '../../../components/airlines/AirlinePage'
import airlines from '../../../data/airlines'

export function generateStaticParams() {
    return airlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = airlines.find((item) => item.slug === slug)
    if (!airline) return { title: 'Airline not found | AirlinesGroup Travel' }
    return { title: airline.metaTitle, description: airline.metaDescription }
}

export default async function AirlineDetail({ params }) {
    const { slug } = await params
    const airline = airlines.find((item) => item.slug === slug)
    if (!airline) notFound()
    return <AirlinePage airline={airline} />
}
