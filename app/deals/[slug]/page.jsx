import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import deals from '../../../data/deals'

export function generateStaticParams() { return deals.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) { const { slug } = await params; const item = deals.find((entry) => entry.slug === slug); return item ? createPageMetadata({ title: `${item.title} | AirlinesGroup Travel`, description: item.excerpt, path: `/deals/${slug}` }) : { title: 'Deal not found | AirlinesGroup Travel', description: 'Explore group flight options from AirlinesGroup Travel.' } }
export default async function DealDetail({ params }) { const { slug } = await params; const item = deals.find((entry) => entry.slug === slug); if (!item) notFound(); return <><PageStructuredData name={item.title} description={item.excerpt} path={`/deals/${slug}`} type="Service" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Deals', path: '/deals' }, { name: item.title, path: `/deals/${slug}` }]} /><CollectionDetail item={item} kind="deal" related={deals.filter((entry) => entry.slug !== slug)} /></> }
