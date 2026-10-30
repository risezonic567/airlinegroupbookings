import contactDetails from '../../data/contact'
import { SITE_URL } from '../../lib/seo'
import JsonLd from './JsonLd'

const data = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TravelAgency',
            '@id': `${SITE_URL}/#organization`,
            name: 'AirlinesGroup Travel',
            url: SITE_URL,
            email: contactDetails.email,
            telephone: contactDetails.phoneDisplay,
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: contactDetails.phoneDisplay,
                email: contactDetails.email,
                contactType: 'customer service',
                availableLanguage: ['English'],
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'AirlinesGroup Travel',
            description: 'Find and book group flights with dedicated travel support from AirlinesGroup Travel.',
            publisher: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en',
        },
    ],
}

export default function SiteStructuredData() {
    return <JsonLd data={data} />
}
