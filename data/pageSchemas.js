/** Exact JSON-LD schemas for main pages.
 *  Shared Organization + WebSite live in SiteStructuredData.jsx
 *  Update THIS file when page schemas change.
 */
import { SITE_URL, absoluteUrl } from '../lib/seo'
import { homeFaqs } from './pageFaqs'
import { mainPageSeo } from './mainPageSeo'

const orgId = `${SITE_URL}/#organization`
const websiteId = `${SITE_URL}/#website`
const logoId = `${SITE_URL}/#logo`
const pageUrl = (path) => absoluteUrl(path)

function breadcrumb(id, items) {
    return {
        '@type': 'BreadcrumbList',
        '@id': id,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.item,
        })),
    }
}

export const pageSchemas = {
    home: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${SITE_URL}/#webpage`,
                url: `${SITE_URL}/`,
                name: mainPageSeo.home.metaTitle,
                description: mainPageSeo.home.metaDescription,
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                about: { '@id': orgId },
                primaryImageOfPage: { '@id': logoId },
            },
            {
                '@type': 'Service',
                '@id': `${SITE_URL}/#service`,
                name: mainPageSeo.home.h1,
                serviceType: 'Group flight booking',
                description: mainPageSeo.home.metaDescription,
                provider: { '@id': orgId },
                areaServed: { '@type': 'Country', name: 'United States' },
                url: `${SITE_URL}/`,
            },
            {
                '@type': 'FAQPage',
                '@id': `${SITE_URL}/#faq`,
                isPartOf: { '@id': `${SITE_URL}/#webpage` },
                mainEntity: homeFaqs.items.map(({ question, answer }) => ({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer,
                    },
                })),
            },
        ],
    },

    about: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'AboutPage',
                '@id': `${pageUrl('/about')}#webpage`,
                url: `${pageUrl('/about')}`,
                name: 'About Us | Airline Group Bookings',
                description:
                    'Learn about Airline Group Bookings and how our team helps families, schools, teams and companies plan group flights together.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/about')}#breadcrumb` },
                about: { '@id': orgId },
            },
            breadcrumb(`${pageUrl('/about')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'About Us', item: `${pageUrl('/about')}` },
            ]),
        ],
    },

    contact: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'ContactPage',
                '@id': `${pageUrl('/contact')}#webpage`,
                url: `${pageUrl('/contact')}`,
                name: 'Contact Us | Airline Group Bookings',
                description: 'Request a free group flight quote or speak to our group travel team 24/7.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/contact')}#breadcrumb` },
                mainEntity: {
                    '@type': 'Organization',
                    '@id': orgId,
                    name: 'Airline Group Bookings',
                    telephone: '+1-833-958-0151',
                    email: 'info@airlinegroupbookings.com',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: '16192 Coastal Highway',
                        addressLocality: 'Lewes',
                        addressRegion: 'DE',
                        postalCode: '19958',
                        addressCountry: 'US',
                    },
                },
            },
            breadcrumb(`${pageUrl('/contact')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Contact Us', item: `${pageUrl('/contact')}` },
            ]),
        ],
    },

    groupTravel: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${pageUrl('/group-travel')}#webpage`,
                url: `${pageUrl('/group-travel')}`,
                name: 'Airline Group Bookings | Group Flight Booking by Airline',
                description: 'Browse group flight booking options with leading airlines for 10+ passengers.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/group-travel')}#breadcrumb` },
            },
            breadcrumb(`${pageUrl('/group-travel')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Group Travel', item: `${pageUrl('/group-travel')}` },
            ]),
        ],
    },

    businessClass: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${pageUrl('/business-class')}#webpage`,
                url: `${pageUrl('/business-class')}`,
                name: 'Business Class Group Booking | Airlines Business Class Travel',
                description: 'Browse business class group flight booking options by airline.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/business-class')}#breadcrumb` },
            },
            breadcrumb(`${pageUrl('/business-class')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Business Class Booking', item: `${pageUrl('/business-class')}` },
            ]),
        ],
    },

    deals: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${pageUrl('/deals')}#webpage`,
                url: `${pageUrl('/deals')}`,
                name: 'Group Travel Deals | Airline Group Bookings',
                description: 'Explore group travel deals including sports, seasonal and corporate travel.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/deals')}#breadcrumb` },
            },
            breadcrumb(`${pageUrl('/deals')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Deals', item: `${pageUrl('/deals')}` },
            ]),
        ],
    },

    destinations: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${pageUrl('/destinations')}#webpage`,
                url: `${pageUrl('/destinations')}`,
                name: 'Group Travel Destinations | Airline Group Bookings',
                description:
                    'Explore popular group travel destinations such as Paris, London, Las Vegas, Dubai, Tokyo and Miami.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/destinations')}#breadcrumb` },
            },
            breadcrumb(`${pageUrl('/destinations')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Destinations', item: `${pageUrl('/destinations')}` },
            ]),
        ],
    },

    blog: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${pageUrl('/blog')}#webpage`,
                url: `${pageUrl('/blog')}`,
                name: 'Group Travel Blog | Tips & Guides',
                description: 'Ideas and practical tips for planning your next group trip.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/blog')}#breadcrumb` },
            },
            breadcrumb(`${pageUrl('/blog')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Blog', item: `${pageUrl('/blog')}` },
            ]),
            {
                '@type': 'Blog',
                '@id': `${pageUrl('/blog')}#blog`,
                url: `${pageUrl('/blog')}`,
                name: 'Airline Group Bookings Blog',
                publisher: { '@id': orgId },
            },
        ],
    },

    privateJet: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${pageUrl('/private-jet-charter')}#webpage`,
                url: `${pageUrl('/private-jet-charter')}`,
                name: 'Private Jet Charter | Airline Group Bookings',
                description: 'Request a private jet charter quote for your group or team.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                breadcrumb: { '@id': `${pageUrl('/private-jet-charter')}#breadcrumb` },
                mainEntity: { '@id': `${pageUrl('/private-jet-charter')}#service` },
            },
            breadcrumb(`${pageUrl('/private-jet-charter')}#breadcrumb`, [
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Private Jet Charter', item: `${pageUrl('/private-jet-charter')}` },
            ]),
            {
                '@type': 'Service',
                '@id': `${pageUrl('/private-jet-charter')}#service`,
                name: 'Private Jet Charter',
                serviceType: 'Private jet charter',
                description: 'Private jet charter for groups, teams and executives.',
                provider: { '@id': orgId },
                areaServed: { '@type': 'Country', name: 'United States' },
                url: `${pageUrl('/private-jet-charter')}`,
            },
        ],
    },
}
