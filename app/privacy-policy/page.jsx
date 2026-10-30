import PolicyPage from '../../components/content/PolicyPage'
import contactDetails from '../../data/contact'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Privacy Policy | AirlinesGroup Travel',
    description: 'Privacy information for visitors and customers of AirlinesGroup Travel.',
    path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
    return (
        <>
        <PageStructuredData name="Privacy Policy | AirlinesGroup Travel" description="Privacy information for visitors and customers of AirlinesGroup Travel." path="/privacy-policy" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]} />
        <PolicyPage
            title="Privacy Policy"
            introduction="We respect your privacy. This page provides general information about privacy when you use the AirlinesGroup Travel website or contact our team."
            sections={[
                {
                    title: 'Information you provide',
                    text: 'If you contact us about group travel, you may choose to share contact details and trip information so our team can respond to your inquiry. Please share only information relevant to your request.',
                },
                {
                    title: 'How to contact us',
                    text: `For questions about information you have shared with us, contact ${contactDetails.email}. Ask us about our current privacy practices before submitting information you consider sensitive.`,
                },
                {
                    title: 'Booking-specific information',
                    text: 'Airline and booking providers may have their own privacy practices. Review the applicable provider notices and the information presented during your booking.',
                },
            ]}
        />
        </>
    )
}
