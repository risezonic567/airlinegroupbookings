import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import destinations from '../../../data/destinations'

export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) { const { slug } = await params; const item = destinations.find((entry) => entry.slug === slug); return item ? createPageMetadata({ title: `${item.name}, ${item.country} Group Travel | AirlinesGroup Travel`, description: item.intro, path: `/destinations/${slug}` }) : { title: 'Destination not found | AirlinesGroup Travel', description: 'Browse group travel destinations with AirlinesGroup Travel.' } }
export default async function DestinationDetail({ params }) { const { slug } = await params; const item = destinations.find((entry) => entry.slug === slug); if (!item) notFound(); return <><PageStructuredData name={`${item.name}, ${item.country} Group Travel`} description={item.intro} path={`/destinations/${slug}`} type="TouristDestination" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: item.name, path: `/destinations/${slug}` }]} /><CollectionDetail item={item} kind="destination" related={destinations.filter((entry) => entry.slug !== slug).slice(0, 4)}/></> }
