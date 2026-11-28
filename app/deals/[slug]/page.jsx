import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import DealTemplate from '../../../components/deals/DealTemplate'
import { createPageMetadata } from '../../../lib/seo'
import deals from '../../../data/deals'
import { dealsContent } from '../../../data/dealsContent'

export function generateStaticParams() {
    return deals.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const item = deals.find((entry) => entry.slug === slug)
    if (!item) {
        return {
            title: 'Deal not found | Airline Group Bookings',
            description: 'Explore group flight options from Airline Group Bookings.',
        }
    }
    const customContent = dealsContent[slug]
    if (customContent) {
        return createPageMetadata({
            title: customContent.metaTitle,
            description: customContent.metaDescription,
            path: `/deals/${slug}`,
        })
    }
    return createPageMetadata({
        title: `${item.title} | Airline Group Bookings`,
        description: item.excerpt,
        path: `/deals/${slug}`,
    })
}

export default async function DealDetail({ params }) {
    const { slug } = await params
    const item = deals.find((entry) => entry.slug === slug)
    if (!item) notFound()

    const customContent = dealsContent[slug]
    if (customContent) {
        return <DealTemplate content={customContent} slug={slug} allDeals={deals} />
    }

    return (
        <>
            <PageStructuredData
                name={item.title}
                description={item.excerpt}
                path={`/deals/${slug}`}
                type="Service"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Deals', path: '/deals' },
                    { name: item.title, path: `/deals/${slug}` },
                ]}
            />
            <CollectionDetail
                item={item}
                kind="deal"
                related={deals.filter((entry) => entry.slug !== slug)}
            />
        </>
    )
}


