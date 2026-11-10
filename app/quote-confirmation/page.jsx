// app/quote-confirmation/page.jsx
// Confirmation page shown after a successful quote request.

import QuoteConfirmationClient from '@/components/QuoteConfirmationClient';

export const metadata = {
  title: 'Quote Confirmation | Airline Group Bookings',
  description: 'Your group flight quote request has been received.',
  robots: { index: false, follow: false },
};

export default function QuoteConfirmationPage() {
  return <QuoteConfirmationClient />;
}
