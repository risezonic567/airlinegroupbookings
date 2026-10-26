import PolicyPage from '../../components/content/PolicyPage'
import contactDetails from '../../data/contact'

export const metadata = {
    title: 'Disclaimer | AirlinesGroup Travel',
    description: 'Important information about website content and travel arrangements.',
}

export default function DisclaimerPage() {
    return (
        <PolicyPage
            title="Disclaimer"
            introduction="Information on this website is provided for general travel-planning purposes and may not reflect the latest availability or conditions for a particular trip."
            sections={[
                {
                    title: 'Availability and accuracy',
                    text: 'Flight schedules, fares, and travel requirements may change. Confirm current details with the airline and review your written quote and travel documents before making plans.',
                },
                {
                    title: 'Airline and provider terms',
                    text: 'Airline and other provider services are subject to their applicable terms and conditions. The specific booking documents and provider rules govern your reservation.',
                },
                {
                    title: 'Contact us',
                    text: `If you have questions about information on this website or a group travel request, contact ${contactDetails.email}.`,
                },
            ]}
        />
    )
}
