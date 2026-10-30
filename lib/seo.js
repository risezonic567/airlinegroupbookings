export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://airlinegroupbookings.com').replace(/\/+$/, '')

export function createPageMetadata({ title, description, path, type = 'website' }) {
    const url = new URL(path, SITE_URL).toString()

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: { title, description, url, type, siteName: 'AirlinesGroup Travel', locale: 'en_US' },
        twitter: { card: 'summary', title, description },
    }
}

export function createPageSchema({ name, description, path, type = 'WebPage', breadcrumbs = [] }) {
    const url = new URL(path, SITE_URL).toString()
    const graph = [{
        '@type': type,
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        ...(type === 'Service' ? { provider: { '@id': `${SITE_URL}/#organization` } } : {}),
        ...(type === 'Article' ? { headline: name, publisher: { '@id': `${SITE_URL}/#organization` } } : {}),
    }]

    if (breadcrumbs.length) {
        const breadcrumbId = `${url}#breadcrumb`
        graph[0].breadcrumb = { '@id': breadcrumbId }
        graph.push({
            '@type': 'BreadcrumbList',
            '@id': breadcrumbId,
            itemListElement: breadcrumbs.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: new URL(item.path, SITE_URL).toString(),
            })),
        })
    }

    return { '@context': 'https://schema.org', '@graph': graph }
}
