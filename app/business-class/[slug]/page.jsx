import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import businessClassAirlines from '../../../data/businessClassAirlines'
import { businessClassSeo, fallbackBusinessClassSeo } from '../../../data/pageSeo'

export function generateStaticParams() {
    return businessClassAirlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = businessClassAirlines.find((item) => item.slug === slug)
    if (!airline) {
        return { title: 'Airline not found | Airline Group Bookings', description: 'Explore business class travel options from Airline Group Bookings.' }
    }
    const seo = businessClassSeo[slug] || fallbackBusinessClassSeo(airline.name)
    return createPageMetadata({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path: `/business-class/${slug}`,
    })
}

export default async function BusinessClassDetail({ params }) {
    const { slug } = await params
    const airline = businessClassAirlines.find((item) => item.slug === slug)
    if (!airline) notFound()

    const seo = businessClassSeo[slug] || fallbackBusinessClassSeo(airline.name)
    const item = { ...airline, h1: seo.h1 }
    const related = businessClassAirlines.filter((entry) => entry.slug !== slug).slice(0, 4)

    return <>
        <PageStructuredData
            name={seo.metaTitle}
            description={seo.metaDescription}
            path={`/business-class/${slug}`}
            type="Service"
            breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Business Class', path: '/business-class' }, { name: airline.name, path: `/business-class/${slug}` }]}
        />
        <CollectionDetail item={item} kind="businessClass" related={related} />
    </>
}
