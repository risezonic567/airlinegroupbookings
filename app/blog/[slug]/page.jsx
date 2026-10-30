import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageStructuredData from '../../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../../lib/seo'
import blogs from '../../../data/blogs'
import Newsletter from '../../../components/home/Newsletter'

export function generateStaticParams() { return blogs.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) { const { slug } = await params; const post = blogs.find((entry) => entry.slug === slug); return post ? createPageMetadata({ title: `${post.title} | AirlinesGroup Travel`, description: post.excerpt, path: `/blog/${slug}`, type: 'article' }) : { title: 'Article not found | AirlinesGroup Travel', description: 'Read group travel planning guides from AirlinesGroup Travel.' } }

export default async function BlogDetail({ params }) {
    const { slug } = await params
    const post = blogs.find((entry) => entry.slug === slug)
    if (!post) notFound()
    const related = blogs.filter((entry) => entry.slug !== slug)
    return <main><PageStructuredData name={post.title} description={post.excerpt} path={`/blog/${slug}`} type="Article" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${slug}` }]} /><article><header className="bg-slate-50"><div className="mx-auto max-w-5xl px-5 pb-9 pt-8 sm:px-8 sm:pb-12"><nav aria-label="Breadcrumb" className="text-md text-slate-500"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><Link href="/blog" className="hover:text-blue-700">Blog</Link><span className="mx-2">/</span><span aria-current="page" className="text-slate-700">{post.title}</span></nav><p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-blue-700">{post.category}</p><h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{post.title}</h1><p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{post.excerpt}</p><p className="mt-4 text-xs font-medium text-slate-400">{post.publishedAt}</p></div></header><div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-14"><div className="min-w-0"><div className="relative aspect-[16/8] overflow-hidden rounded-2xl"><Image src={post.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 800px" className="object-cover"/></div><div className="mt-8 space-y-6 text-[#555] leading-8">{post.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`}><h2 className={`${index === 0 ? 'mt-8 mb-2' : 'mt-10 mb-3'} font-serif text-2xl text-[#1C1C1C]`}>{section.title}</h2><div className="space-y-6">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div><Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-md font-bold text-blue-700"><ArrowLeft className="h-4 w-4"/> All articles</Link></div><aside className="h-fit rounded-2xl border border-slate-100 bg-slate-50 p-6"><h2 className="text-lg font-bold text-slate-900">More travel guides</h2><ul className="mt-3 divide-y divide-slate-200">{related.map((entry) => <li key={entry.slug}><Link href={`/blog/${entry.slug}`} className="flex items-start justify-between gap-3 py-4 text-md font-medium leading-5 text-slate-700 hover:text-blue-700">{entry.title}<ArrowRight className="mt-0.5 h-4 w-4 shrink-0"/></Link></li>)}</ul><Link href="/destinations" className="mt-4 inline-flex text-md font-bold text-blue-700">Browse destinations</Link></aside></div></article><Newsletter/></main>
}
