import { notFound } from 'next/navigation'
import CollectionDetail from '../../../components/content/CollectionDetail'
import deals from '../../../data/deals'

export function generateStaticParams() { return deals.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) { const { slug } = await params; const item = deals.find((entry) => entry.slug === slug); return item ? { title: `${item.title} | AirlinesGroup Travel`, description: item.excerpt } : { title: 'Deal not found | AirlinesGroup Travel' } }
export default async function DealDetail({ params }) { const { slug } = await params; const item = deals.find((entry) => entry.slug === slug); if (!item) notFound(); return <CollectionDetail item={item} kind="deal" related={deals.filter((entry) => entry.slug !== slug)} /> }
