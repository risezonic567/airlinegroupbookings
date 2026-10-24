const airlineLinks = [
    ['Delta Air Lines', 'delta-airlines-group-booking'],
    ['EL AL', 'el-al-group-booking'],
    ['KLM', 'klm-group-booking'],
    ['Southwest Airlines', 'southwest-airlines-group-travel-booking'],
    ['British Airways', 'british-airways-group-travel-booking'],
    ['Finnair', 'finnair-group-travel-flight-booking'],
    ['Alaska Airlines', 'alaska-airlines-group-travel'],
    ['JetBlue', 'jetblue-group-travel-flight-booking'],
    ['Qatar Airways', 'qatar-airways-group-travel'],
    ['Avianca Airlines', 'avianca-airlines-group-travel'],
    ['Emirates', 'emirates-group-travel-flight-booking'],
    ['Air France', 'air-france-group-booking'],
    ['American Airlines', 'american-airlines-group-booking'],
    ['Lufthansa Airlines', 'lufthansa-group-booking'],
    ['Swiss Air', 'swiss-air-group-booking'],
    ['Spirit Airlines', 'spirit-airlines-group-booking'],
    ['Aeromexico', 'aeromexico-group-booking-and-reservations'],
    ['Frontier Airlines', 'frontier-airlines-group-booking'],
    ['Copa Airlines', 'copa-airlines-group-booking'],
]

const groupTravelAirlines = airlineLinks.map(([name, slug], index) => ({
    name,
    slug,
    image: index % 2 === 0 ? '/images/travel-card.svg' : '/images/city-card.svg',
    description: `Explore group flight options with ${name} for families, teams, school groups, and organizations. Share your route, travel dates, and estimated traveler count to get started.`,
    tagline: `Plan your next group trip with ${name}.`,
    highlights: [
        `Request group flight options for your preferred ${name} route and travel dates.`,
        'Share an estimated traveler count and flexible dates to help compare available itineraries.',
        'Review fare rules, payment deadlines, baggage, and seat options before confirming.',
    ],
}))

export default groupTravelAirlines
