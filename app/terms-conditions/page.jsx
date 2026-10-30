import PolicyPage from '../../components/content/PolicyPage'
import contactDetails from '../../data/contact'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Terms and Conditions | AirlinesGroup Travel',
    description: 'General website and group travel information for AirlinesGroup Travel.',
    path: '/terms-conditions',
})

export default function TermsAndConditionsPage() {
    return (
        <>
        <PageStructuredData name="Terms and Conditions | AirlinesGroup Travel" description="General website and group travel information for AirlinesGroup Travel." path="/terms-conditions" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Terms and Conditions', path: '/terms-conditions' }]} />
        <PolicyPage
            title="Terms and Conditions"
            introduction="These notes describe general use of this website and do not replace the written terms for a specific quote, itinerary, or booking."
            sections={[
                {
                    title: 'Website information',
                    text: 'Website content is provided for general information and may change. Sending an inquiry or viewing a quote does not itself confirm a reservation.',
                },
                {
                    title: 'Quotes and reservations',
                    text: 'Availability, pricing, payment schedules, ticketing deadlines, and fare conditions can depend on the airline, itinerary, and travel dates. Review the written quote and booking documents before confirming or paying.',
                },
                {
                    title: 'Questions',
                    text: `For clarification about a quote or booking, contact our team at ${contactDetails.email} before proceeding.`,
                },
            ]}
        />
        </>
    )
}
