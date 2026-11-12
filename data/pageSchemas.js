/** Exact JSON-LD schemas for main pages.
 *  Shared Organization + WebSite live in SiteStructuredData.jsx
 *  Update THIS file when page schemas change.
 */
import { SITE_URL, absoluteUrl } from '../lib/seo'

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
                name: 'Airline Group Booking USA | Group Flight Deals & Quotes',
                description:
                    'Airline group booking for 10+ passengers in the USA. Book group flights online, get a free group airline tickets quote and compare group travel flight deals.',
                inLanguage: 'en-US',
                isPartOf: { '@id': websiteId },
                about: { '@id': orgId },
                primaryImageOfPage: { '@id': logoId },
            },
            {
                '@type': 'Service',
                '@id': `${SITE_URL}/#service`,
                name: 'Airline Group Booking for 10+ Passengers',
                serviceType: 'Group flight booking',
                description:
                    'Group flight booking for 10 or more passengers. Share your route, dates and traveler count to get a free group airline tickets quote and compare group travel flight deals in the USA.',
                provider: { '@id': orgId },
                areaServed: { '@type': 'Country', name: 'United States' },
                url: `${SITE_URL}/`,
            },
            {
                '@type': 'FAQPage',
                '@id': `${SITE_URL}/#faq`,
                isPartOf: { '@id': `${SITE_URL}/#webpage` },
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'What is airline group booking?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Airline group booking means planning one shared itinerary for several travelers instead of buying seats one by one. At Airline Group Bookings we help families, schools, teams, and companies compare options, understand fare notes, and move to a clear next step without the usual runaround.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'How many travelers do I need for group flight booking for 10 or more passengers?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Most airlines treat group flight booking for 10 or more passengers as a formal group request when everyone flies the same flights. If your party is a little smaller, tell us the count anyway — we will advise whether a group request or individual tickets fits better for your dates.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Can I book group flights online with your team?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes. You can book group flights online by sharing your route, dates, and traveler count through our quote form, then reviewing the outline with a specialist. Prefer a call? We can walk through the same details by phone so your organizers stay aligned.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'What is a group airline tickets quote used for?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'A group airline tickets quote helps your lead traveler compare total cost, timing, and rules before deposits or names are due. It is useful when a committee needs approval, or when you want one document everyone can review together.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Do you offer group travel flight deals USA travelers can use?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'We regularly help USA-based organizers look for group travel flight deals USA routes can support — including domestic hops and long-haul departures. Deals depend on season and inventory, so earlier planning usually opens more choices.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'What details should I prepare before I start?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Have cities, rough dates, flexibility notes, and a headcount ready. If anyone needs extra assistance or sports equipment, mention that early so your airline group booking plan stays realistic from the first conversation.',
                        },
                    },
                ],
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
