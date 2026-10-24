import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import destinations from '../../../data/destinations'

export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) { const { slug } = await params; const item = destinations.find((entry) => entry.slug === slug); return item ? { title: `${item.name}, ${item.country} Group Travel | AirlinesGroup Travel`, description: item.intro } : { title: 'Destination not found | AirlinesGroup Travel' } }
export default async function DestinationDetail({ params }) { const { slug } = await params; const item = destinations.find((entry) => entry.slug === slug); if (!item) notFound(); return <CollectionDetail item={item} kind="destination" related={destinations.filter((entry) => entry.slug !== slug).slice(0, 4)}/> }
