export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://airlinegroupbookings.com').replace(/\/+$/, '')

export function withTrailingSlash(path = '/') {
    if (!path || path === '/') return '/'
    const normalized = path.startsWith('/') ? path : `/${path}`
    return normalized.endsWith('/') ? normalized : `${normalized}/`
}

export function absoluteUrl(path = '/') {
    return new URL(withTrailingSlash(path), `${SITE_URL}/`).toString()
}

export function createPageMetadata({ title, description, path, type = 'website' }) {
    const canonicalPath = withTrailingSlash(path)
    const url = absoluteUrl(path)

    return {
        title,
        description,
        alternates: { canonical: canonicalPath },
        openGraph: { title, description, url, type, siteName: 'Airline Group Bookings', locale: 'en_US' },
        twitter: { card: 'summary', title, description },
    }
}

export function createPageSchema({ name, description, path, type = 'WebPage', breadcrumbs = [] }) {
    const url = absoluteUrl(path)
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
                item: absoluteUrl(item.path),
            })),
        })
    }

    return { '@context': 'https://schema.org', '@graph': graph }
}
