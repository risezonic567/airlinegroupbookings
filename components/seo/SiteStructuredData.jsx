import { SITE_URL } from '../../lib/seo'
import JsonLd from './JsonLd'

/** Sitewide Organization + WebSite. Update with pageSchemas.js when brand details change. */
const data = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': ['Organization', 'TravelAgency'],
            '@id': `${SITE_URL}/#organization`,
            name: 'Airline Group Bookings',
            alternateName: 'AirlinesGroup Travel',
            url: `${SITE_URL}/`,
            logo: {
                '@type': 'ImageObject',
                '@id': `${SITE_URL}/#logo`,
                url: `${SITE_URL}/images/navbarlogo.png`,
                contentUrl: `${SITE_URL}/images/navbarlogo.png`,
                caption: 'Airline Group Bookings',
            },
            image: { '@id': `${SITE_URL}/#logo` },
            description:
                'Airline group booking for 10+ passengers in the USA. Book group flights online, get a free group airline tickets quote and compare group travel flight deals.',
            telephone: '+1-833-958-0151',
            email: 'heath@airlinegroupbookings.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '16192 Coastal Highway',
                addressLocality: 'Lewes',
                addressRegion: 'DE',
                postalCode: '19958',
                addressCountry: 'US',
            },
            areaServed: [
                { '@type': 'Country', name: 'United States' },
                { '@type': 'Place', name: 'Worldwide' },
            ],
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    telephone: '+1-833-958-0151',
                    contactType: 'customer service',
                    areaServed: 'US',
                    availableLanguage: 'English',
                    hoursAvailable: {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday',
                        ],
                        opens: '00:00',
                        closes: '23:59',
                    },
                },
            ],
            sameAs: [
                'https://www.youtube.com/channel/UCn09_avVWrAYtpvPb5wGtEA',
                'https://www.facebook.com/airlinegroupbookings/',
                'https://www.instagram.com/airlinegroupbookings/',
                'https://www.linkedin.com/company/airline-group-bookings/',
                'https://x.com/airgrpbooking',
                'https://www.pinterest.com/airlinegroupbooking/',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: 'Airline Group Bookings',
            inLanguage: 'en-US',
            publisher: { '@id': `${SITE_URL}/#organization` },
        },
    ],
}

export default function SiteStructuredData() {
    return <JsonLd data={data} />
}
