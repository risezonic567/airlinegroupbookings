const defaultImages = ['/images/travel-card.svg', '/images/city-card.svg']

const airlineImages = {
    'delta-airlines-group-booking': '/images/grouptravel/Delta.jpg.jpeg',
    'el-al-group-booking': '/images/grouptravel/EL AL_.jpg.jpeg',
    'klm-group-booking': '/images/grouptravel/KLM.jpg.jpeg',
    'southwest-airlines-group-travel-booking': '/images/grouptravel/Southwest.jpg.jpeg',
    'british-airways-group-travel-booking': '/images/grouptravel/British.jpg.jpeg',
    'finnair-group-travel-flight-booking': '/images/grouptravel/Finnair.jpg.jpeg',
    'alaska-airlines-group-travel': '/images/grouptravel/Alaska.jpg.jpeg',
    'jetblue-group-travel-flight-booking': '/images/grouptravel/JetBlue.jpg.jpeg',
    'qatar-airways-group-travel': '/images/grouptravel/Qatar.jpg.jpeg',
    'avianca-airlines-group-travel': '/images/grouptravel/Avianca.jpg.jpeg',
    'emirates-group-travel-flight-booking': '/images/grouptravel/Emirates.jpg.jpeg',
    'air-france-group-booking': '/images/grouptravel/Air France.jpg.jpeg',
    'american-airlines-group-booking': '/images/grouptravel/American.jpg.jpeg',
    'lufthansa-group-booking': '/images/grouptravel/Lufthansa.jpg.jpeg',
    'swiss-air-group-booking': '/images/grouptravel/Swiss.jpg.jpeg',
    'spirit-airlines-group-booking': '/images/grouptravel/Spirit.jpg.jpeg',
    'aeromexico-group-booking-and-reservations': '/images/grouptravel/Aeromexico.jpg.jpeg',
    'frontier-airlines-group-booking': '/images/grouptravel/Frontier.jpg.jpeg',
    'copa-airlines-group-booking': '/images/grouptravel/Copa.jpg.jpeg',
}

const airlines = [
    {
        name: 'Delta Air Lines',
        slug: 'delta-airlines-group-booking',
        description:
            'Planning a trip through Atlanta or across the United States? Share your route and dates and we will help you compare Delta group flight options for teams, families, and organizations.',
        tagline: 'Group trips across the US and beyond with Delta.',
        highlights: [
            'Compare Delta options for domestic routes and connections through Atlanta.',
            'Share your traveler count and flexible dates to find workable itineraries.',
            'Review fare rules, payment deadlines, and baggage details before confirming.',
        ],
    },
    {
        name: 'EL AL',
        slug: 'el-al-group-booking',
        description:
            'Traveling to or from Tel Aviv with a group? Tell us your route and dates and we will help you explore EL AL options for heritage tours, faith groups, schools, and family gatherings.',
        tagline: 'Group flights to and from Tel Aviv with EL AL.',
        highlights: [
            'Request EL AL options for Tel Aviv routes that fit your travel dates.',
            'Plan around holidays and peak travel periods by sharing flexible dates early.',
            'Confirm baggage, meal, and seating details for your whole group.',
        ],
    },
    {
        name: 'KLM',
        slug: 'klm-group-booking',
        description:
            'Flying through Amsterdam Schiphol? Share where your group is headed and we will help you look at KLM group options for school trips, sports teams, and company travel across Europe and beyond.',
        tagline: 'Connect your group through Amsterdam with KLM.',
        highlights: [
            'Explore KLM routes that connect through Amsterdam to Europe and other regions.',
            'Share estimated traveler numbers to compare itineraries and connection times.',
            'Check fare conditions and ticketing deadlines before you commit.',
        ],
    },
    {
        name: 'Southwest Airlines',
        slug: 'southwest-airlines-group-travel-booking',
        description:
            'Organizing a domestic group trip within the US? Send your route, dates, and group size and we will help you look into Southwest options for weddings, reunions, teams, and clubs.',
        tagline: 'Simple domestic group travel with Southwest.',
        highlights: [
            'Compare Southwest options for domestic routes and nearby leisure destinations.',
            'Share your group size and dates early to keep more choices open.',
            'Review baggage and change rules so everyone knows what to expect.',
        ],
    },
    {
        name: 'British Airways',
        slug: 'british-airways-group-travel-booking',
        description:
            'Headed to London or connecting through Heathrow? Share your route and group size and we will help you explore British Airways options for tours, universities, and business groups.',
        tagline: 'Group journeys through London with British Airways.',
        highlights: [
            'Look at British Airways options to and from London Heathrow.',
            'Compare cabin choices and seating for groups of different sizes.',
            'Plan connection times and baggage needs before you book.',
        ],
    },
    {
        name: 'Finnair',
        slug: 'finnair-group-travel-flight-booking',
        description:
            'Looking at a trip between Europe and Asia? Tell us your route and we will help you compare Finnair group options through Helsinki for tours, conferences, and school groups.',
        tagline: 'Europe and Asia group travel via Helsinki with Finnair.',
        highlights: [
            'Explore Finnair routes that connect through Helsinki.',
            'Share flexible dates to compare itineraries on longer journeys.',
            'Review fare rules and payment deadlines before confirming.',
        ],
    },
    {
        name: 'Alaska Airlines',
        slug: 'alaska-airlines-group-travel',
        description:
            'Traveling along the West Coast or through Seattle? Share your dates and group size and we will help you look at Alaska Airlines options for teams, clubs, and family trips.',
        tagline: 'West Coast group travel with Alaska Airlines.',
        highlights: [
            'Compare Alaska Airlines options for West Coast and Seattle routes.',
            'Send your traveler count and dates to narrow down workable flights.',
            'Check baggage and seat options for everyone in your group.',
        ],
    },
    {
        name: 'JetBlue',
        slug: 'jetblue-group-travel-flight-booking',
        description:
            'Flying from New York, Boston, or to the Caribbean? Share your route and we will help you explore JetBlue options for vacations, reunions, and student groups.',
        tagline: 'Group getaways from the Northeast with JetBlue.',
        highlights: [
            'Look at JetBlue routes from New York, Boston, and popular leisure destinations.',
            'Share an estimated group size and flexible dates to compare itineraries.',
            'Review fare rules and payment deadlines before you confirm.',
        ],
    },
    {
        name: 'Qatar Airways',
        slug: 'qatar-airways-group-travel',
        description:
            'Connecting through Doha? Tell us where your group is flying and we will help you look at Qatar Airways options for pilgrimages, tours, and international business travel.',
        tagline: 'Long-haul group travel through Doha with Qatar Airways.',
        highlights: [
            'Explore Qatar Airways routes that connect through Doha.',
            'Share your travel window to compare itineraries on long-haul trips.',
            'Confirm baggage, meal, and seating needs for your whole group.',
        ],
    },
    {
        name: 'Avianca Airlines',
        slug: 'avianca-airlines-group-travel',
        description:
            'Heading to Colombia or elsewhere in Latin America? Share your route and dates and we will help you compare Avianca options for family trips, church groups, and sports teams.',
        tagline: 'Latin America group travel with Avianca.',
        highlights: [
            'Look at Avianca routes to Bogota and other Latin American destinations.',
            'Share traveler numbers and flexible dates to compare connection options.',
            'Review baggage allowances and fare rules before confirming.',
        ],
    },
    {
        name: 'Emirates',
        slug: 'emirates-group-travel-flight-booking',
        description:
            'Planning a trip through Dubai? Share your route and group size and we will help you explore Emirates options for tours, corporate groups, and family gatherings.',
        tagline: 'Group travel through Dubai with Emirates.',
        highlights: [
            'Compare Emirates routes that connect through Dubai.',
            'Share your dates and traveler count to find suitable itineraries.',
            'Check cabin options, baggage, and fare conditions before you book.',
        ],
    },
    {
        name: 'Air France',
        slug: 'air-france-group-booking',
        description:
            'Traveling to Paris or connecting through Charles de Gaulle? Tell us your plans and we will help you look at Air France options for school trips, tours, and cultural groups.',
        tagline: 'Group trips to and through Paris with Air France.',
        highlights: [
            'Explore Air France routes to Paris Charles de Gaulle and onward destinations.',
            'Share flexible dates to compare itineraries in busy travel seasons.',
            'Review ticketing deadlines and baggage details for your group.',
        ],
    },
    {
        name: 'American Airlines',
        slug: 'american-airlines-group-booking',
        description:
            'Need a group trip across the US or abroad? Share your route, dates, and group size and we will help you compare American Airlines options for teams, schools, and organizations.',
        tagline: 'Wide-reaching group travel with American Airlines.',
        highlights: [
            'Look at American Airlines routes across its large US network.',
            'Send an estimated group size and dates to compare available itineraries.',
            'Check fare rules, payment deadlines, and seat options before confirming.',
        ],
    },
    {
        name: 'Lufthansa Airlines',
        slug: 'lufthansa-group-booking',
        description:
            'Connecting through Frankfurt or Munich? Share your route and we will help you explore Lufthansa options for business groups, conferences, and tours across Europe and beyond.',
        tagline: 'European connections for groups with Lufthansa.',
        highlights: [
            'Explore Lufthansa routes through Frankfurt and Munich.',
            'Share your travel window to compare connection options.',
            'Review cabin choices and baggage rules for your group.',
        ],
    },
    {
        name: 'Swiss Air',
        slug: 'swiss-air-group-booking',
        description:
            'Traveling to Zurich or Geneva? Tell us your dates and group size and we will help you look at Swiss options for ski trips, business travel, and tours.',
        tagline: 'Group travel to Switzerland and beyond with Swiss.',
        highlights: [
            'Look at Swiss routes to Zurich, Geneva, and connecting cities.',
            'Plan around ski and holiday seasons by sharing flexible dates early.',
            'Check baggage rules, especially for sports equipment, before you book.',
        ],
    },
    {
        name: 'Spirit Airlines',
        slug: 'spirit-airlines-group-booking',
        description:
            'Watching your group budget? Share your route and dates and we will help you compare Spirit options for domestic trips, the Caribbean, and Latin America.',
        tagline: 'Budget-minded group travel with Spirit.',
        highlights: [
            'Compare Spirit options for domestic and nearby international routes.',
            'Check carefully what is included in the fare, such as bags and seats.',
            'Share your group size and dates early to keep more choices open.',
        ],
    },
    {
        name: 'Aeromexico',
        slug: 'aeromexico-group-booking-and-reservations',
        description:
            'Traveling to Mexico City or across Mexico? Share your route and group size and we will help you explore Aeromexico options for family trips, weddings, and school groups.',
        tagline: 'Group flights to Mexico with Aeromexico.',
        highlights: [
            'Look at Aeromexico routes to Mexico City and other destinations.',
            'Share your dates and traveler count to compare itineraries.',
            'Review baggage, change rules, and payment deadlines before confirming.',
        ],
    },
    {
        name: 'Frontier Airlines',
        slug: 'frontier-airlines-group-booking',
        description:
            'Looking for a lower base fare for your group? Share your route and dates and we will help you compare Frontier options for domestic trips and reunions.',
        tagline: 'Value-focused group travel with Frontier.',
        highlights: [
            'Compare Frontier options for domestic routes.',
            'Check what is included in the fare, including bags and seat selection.',
            'Share your group size and dates early to keep more choices open.',
        ],
    },
    {
        name: 'Copa Airlines',
        slug: 'copa-airlines-group-booking',
        description:
            'Connecting through Panama City? Tell us your route and group size and we will help you look at Copa options for Latin America and Caribbean trips.',
        tagline: 'Latin America group travel through Panama with Copa.',
        highlights: [
            'Explore Copa routes that connect through Panama City.',
            'Share flexible dates to compare connection times and itineraries.',
            'Review baggage and fare rules for your whole group.',
        ],
    },
]

const groupTravelAirlines = airlines.map((airline, index) => ({
    ...airline,
    image: airlineImages[airline.slug] || defaultImages[index % 2],
}))

export default groupTravelAirlines