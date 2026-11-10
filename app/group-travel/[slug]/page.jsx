import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import groupTravelAirlines from '../../../data/groupTravelAirlines'
import { fallbackGroupTravelSeo, groupTravelSeo } from '../../../data/pageSeo'

export function generateStaticParams() {
    return groupTravelAirlines.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const airline = groupTravelAirlines.find((item) => item.slug === slug)
    if (!airline) {
        return { title: 'Airline not found | Airline Group Bookings', description: 'Explore group flight booking information from Airline Group Bookings.' }
    }
    const seo = groupTravelSeo[slug] || fallbackGroupTravelSeo(airline.name)
    return createPageMetadata({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path: `/group-travel/${slug}`,
    })
}

export default async function GroupTravelAirlineDetail({ params }) {
    const { slug } = await params
    const airline = groupTravelAirlines.find((item) => item.slug === slug)
    if (!airline) notFound()

    const seo = groupTravelSeo[slug] || fallbackGroupTravelSeo(airline.name)
    const item = {
        ...airline,
        h1: seo.h1,
        tagline: seo.tagline || airline.tagline,
        description: seo.onPageCopy || seo.metaDescription || airline.description,
        highlights: seo.highlights || airline.highlights,
        contentHtml: seo.contentHtml || airline.contentHtml,
        html: seo.contentHtml || airline.html,
    }
    const related = groupTravelAirlines.filter((entry) => entry.slug !== slug).slice(0, 4)

    return <>
        <PageStructuredData
            name={seo.metaTitle}
            description={seo.metaDescription}
            path={`/group-travel/${slug}`}
            type="Service"
            breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Group Travel', path: '/group-travel' }, { name: airline.name, path: `/group-travel/${slug}` }]}
        />
        <CollectionDetail item={item} kind="airline" related={related} />
    </>
}
