export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://airlinegroupbookings.com').replace(/\/+$/, '')

/** Default social share image (1200x630). Served from /public/og-default.jpg */
export const OG_IMAGE = {
    url: '/og-default.jpg',
    width: 1200,
    height: 630,
    alt: 'Airline Group Bookings — group flight booking',
}

export function withTrailingSlash(path = '/') {
    if (!path || path === '/') return '/'
    const normalized = path.startsWith('/') ? path : `/${path}`
    return normalized.endsWith('/') ? normalized : `${normalized}/`
}

export function absoluteUrl(path = '/') {
    return new URL(withTrailingSlash(path), `${SITE_URL}/`).toString()
}

export function createPageMetadata({ title, description, path, type = 'website' }) {
    // Matches next.config trailingSlash: true — one source of truth via absoluteUrl()
    const url = absoluteUrl(path)

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type,
            siteName: 'Airline Group Bookings',
            locale: 'en_US',
            images: [OG_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [OG_IMAGE.url],
        },
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
