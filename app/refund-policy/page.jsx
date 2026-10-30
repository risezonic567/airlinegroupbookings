import PolicyPage from '../../components/content/PolicyPage'
import contactDetails from '../../data/contact'
import PageStructuredData from '../../components/seo/PageStructuredData'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
    title: 'Refund Policy | AirlinesGroup Travel',
    description: 'General information about refunds for group flight bookings.',
    path: '/refund-policy',
})

export default function RefundPolicyPage() {
    return (
        <>
        <PageStructuredData name="Refund Policy | AirlinesGroup Travel" description="General information about refunds for group flight bookings." path="/refund-policy" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Refund Policy', path: '/refund-policy' }]} />
        <PolicyPage
            title="Refund Policy"
            introduction="Refund eligibility and any applicable charges depend on the airline fare rules and the written terms for your specific booking."
            sections={[
                {
                    title: 'Check your booking terms',
                    text: 'Before confirming a reservation, review its cancellation, refund, and change conditions, including any deadlines or penalties. Some fares or services may be non-refundable or subject to restrictions.',
                },
                {
                    title: 'Requesting assistance',
                    text: 'If you need to cancel or request a refund, contact our team as soon as possible with your booking details. We can help explain the applicable process; any refund remains subject to the terms of the airline and providers involved.',
                },
                {
                    title: 'Contact',
                    text: `For assistance, email ${contactDetails.email} or call ${contactDetails.phoneDisplay}.`,
                },
            ]}
        />
        </>
    )
}
