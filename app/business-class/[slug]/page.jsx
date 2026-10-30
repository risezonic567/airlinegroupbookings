import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import businessClassAirlines from '../../../data/businessClassAirlines'

export function generateStaticParams() {
    return businessClassAirlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = businessClassAirlines.find((item) => item.slug === slug)
    if (!airline) return { title: 'Airline not found | AirlinesGroup Travel', description: 'Explore business class travel options from AirlinesGroup Travel.' }
    return createPageMetadata({
        title: `${airline.name} Business Class | AirlinesGroup Travel`,
        description: airline.description,
        path: `/business-class/${slug}`,
    })
}

export default async function BusinessClassDetail({ params }) {
    const { slug } = await params
    const airline = businessClassAirlines.find((item) => item.slug === slug)
    if (!airline) notFound()

    const related = businessClassAirlines.filter((item) => item.slug !== slug).slice(0, 4)
    return <>
        <PageStructuredData
            name={`${airline.name} Business Class`}
            description={airline.description}
            path={`/business-class/${slug}`}
            type="Service"
            breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Business Class', path: '/business-class' }, { name: airline.name, path: `/business-class/${slug}` }]}
        />
        <CollectionDetail item={airline} kind="businessClass" related={related} />
    </>
}
