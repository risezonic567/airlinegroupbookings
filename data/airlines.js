const airlineNames = [
    ['american-airlines', 'American Airlines'], ['delta-air-lines', 'Delta Air Lines'],
    ['united-airlines', 'United Airlines'], ['lufthansa', 'Lufthansa'],
    ['alaska-airlines', 'Alaska Airlines'], ['jetblue', 'JetBlue'],
    ['southwest-airlines', 'Southwest Airlines'], ['qatar-airways', 'Qatar Airways'],
]

const contentFor = (name) => [
    { id: 'terms', title: `What Are the Group Travel Terms & Conditions on ${name}?`, html: `<p>Group travel arrangements with ${name} depend on your route, travel dates, party size, and current fare availability. A dedicated group specialist can confirm the applicable fare rules, payment schedule, name submission deadlines, ticketing requirements, and change or cancellation terms before you book.</p><ul class="list-disc pl-6"><li>Minimum group size and eligibility are determined by the airline and itinerary.</li><li>Deposit, balance due dates, and passenger name deadlines vary by quote.</li><li>Seat assignments, baggage, and ancillary services depend on the selected fare.</li><li>Review all written fare conditions before confirming your reservation.</li></ul><p>Policies can change. Confirm the current conditions for your specific itinerary with the airline or your booking specialist.</p>` },
    { id: 'how-to-book', title: `How to Book ${name} Group Flights`, html: `<p>Share your group's route, preferred dates, and approximate traveler count to start comparing options. A specialist can help coordinate the request and explain available itineraries for ${name}.</p><ol class="list-decimal pl-6"><li>Send your origin, destination, dates, and group size.</li><li>Review available schedules and the written group fare terms.</li><li>Confirm traveler details and meet any deposit deadlines.</li><li>Complete payment and check the issued booking documents.</li></ol>` },
    { id: 'benefits', title: `Benefits of ${name} Group Reservations`, html: `<p>One coordinated request can make it easier to compare travel options for a larger party. Depending on the itinerary and availability, your group may benefit from a single point of contact, coordinated payment milestones, and support collecting traveler details.</p><p>Specific inclusions and flexibility are quote-dependent. Ask your specialist to outline the services included in your proposal before making a decision.</p>` },
    { id: 'tips', title: `Tips for Planning a ${name} Group Trip`, html: `<p>Start planning early, especially when your group is traveling during a holiday, school break, or major event. Gathering a date range and a reliable estimate of your traveler count helps a specialist search more effectively.</p><ul class="list-disc pl-6"><li>Share flexible dates if your group has room to adjust.</li><li>Choose one organizer to gather traveler names and contact details.</li><li>Ask about baggage, seat selection, accessibility, and special requests.</li><li>Keep payment and name deadlines visible to every traveler.</li></ul>` },
]

const airlines = airlineNames.map(([slug, name], index) => ({
    slug,
    name,
    logo: '/images/travel-card.svg',
    heroImage: '/images/city-card.svg',
    metaTitle: `${name} Group Travel | Group Flight Booking`,
    metaDescription: `Explore group flight options on ${name}. Share your route, dates, and group size to request a personalized group travel quote.`,
    intro: `Planning a trip for a team, family, school, or organization? Explore group flight options with ${name}. Share your preferred route, travel dates, and group size to receive a quote and learn which fare conditions apply to your itinerary.`,
    steps: [
        { title: 'Share your trip', description: 'Tell us where and when your group wants to travel.', icon: 'Send' },
        { title: 'Compare options', description: 'Review schedules and quote details with a specialist.', icon: 'Search' },
        { title: 'Confirm travelers', description: 'Gather passenger details and follow the due dates.', icon: 'Users' },
        { title: 'Get ready to fly', description: 'Complete payment and review your booking documents.', icon: 'Plane' },
    ],
    contentSections: contentFor(name),
    faqs: [
        { question: `How many people qualify for a ${name} group booking?`, answer: 'Group size requirements vary by airline, itinerary, and fare type. Share your estimated traveler count to confirm the options for your trip.' },
        { question: `Can I change passenger names on a ${name} group reservation?`, answer: 'Name correction and substitution rules depend on the fare conditions. Check the written terms and deadlines in your quote before booking.' },
        { question: `Can our group pay in installments?`, answer: 'Some group quotes may include staged payment deadlines. The deposit, due dates, and eligible payment methods will be listed in your specific proposal.' },
        { question: `How do I request a ${name} group flight quote?`, answer: 'Submit your origin, destination, travel dates, group size, and contact information using the quote form. A specialist can follow up with options.' },
    ],
    relatedSlugs: airlineNames.filter((_, i) => i !== index).slice(0, 3).map(([relatedSlug]) => relatedSlug),
}))

export default airlines
