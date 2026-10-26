import PolicyPage from '../../components/content/PolicyPage'
import contactDetails from '../../data/contact'

export const metadata = {
    title: 'Terms and Conditions | AirlinesGroup Travel',
    description: 'General website and group travel information for AirlinesGroup Travel.',
}

export default function TermsAndConditionsPage() {
    return (
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
    )
}
