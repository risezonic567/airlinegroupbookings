const BRAND = 'Airline Group Bookings'

/** @param {string} primary @param {string} description @param {string} [h1] */
function seo(primary, description, h1) {
    return {
        metaTitle: `${primary} | ${BRAND}`,
        metaDescription: description,
        h1: h1 || primary.replace(/\b\w/g, (c) => c.toUpperCase()),
    }
}

/** Group travel airline pages — /flights/[slug] */
export const groupTravelSeo = {
    'delta-airlines-group-booking': seo(
        'Delta Airlines Group Booking',
        'Arrange Delta airlines group booking with help on the Delta group travel desk, minimum passengers, fare policy, and group flight discount options for USA trips.',
        'Delta Airlines Group Booking for Teams & Events'
    ),
    'el-al-group-booking': seo(
        'EL AL Group Booking',
        'Plan EL AL group booking for heritage tours and family trips. Compare EL AL group travel discounts, group flight tickets, and fare policy before you request a quote.',
        'EL AL Group Booking — Flights for Your Whole Group'
    ),
    'klm-group-booking': seo(
        'KLM Group Booking',
        'Request KLM group booking support for school, sports, and company travel. Review KLM group travel policy, reservations, and group tickets for 10 or more travelers.',
        'KLM Group Booking & Reservation Help'
    ),
    'southwest-airlines-group-travel-booking': seo(
        'Southwest Airlines Group Travel',
        'Plan Southwest Airlines group travel for weddings, reunions, and teams across the USA. Get a group flight quote and clear notes on reservation policy and discounts.',
        'Southwest Airlines Group Travel Made Straightforward'
    ),
    'british-airways-group-travel-booking': seo(
        'British Airways Group Booking',
        'Book British Airways group booking for tours and business groups. Compare BA group fares, desk support, and discounts for 10 or more passengers on key routes.',
        'British Airways Group Booking for 10+ Travelers'
    ),
    'finnair-group-travel-flight-booking': seo(
        'Finnair Group Booking',
        'Explore Finnair group booking for European and long-haul group trips. Learn about the Finnair group travel desk, minimum passengers, tickets for 10+, and fare policy.',
        'Finnair Group Booking — Plan Your Group Trip'
    ),
    'alaska-airlines-group-travel': seo(
        'Alaska Airlines Group Travel',
        'Organize Alaska Airlines group travel for West Coast and domestic USA trips. Request a group flight quote and review reservation policy plus group discount options.',
        'Alaska Airlines Group Travel for Your Party'
    ),
    'jetblue-group-travel-flight-booking': seo(
        'JetBlue Group Travel',
        'Plan JetBlue group travel for friends, teams, and events. Get help with the JetBlue group booking number, reservation policy, flight quotes, and travel discounts.',
        'JetBlue Group Travel Booking Support'
    ),
    'qatar-airways-group-travel': seo(
        'Qatar Airways Group Booking',
        'Arrange Qatar Airways group booking through Doha for tours and corporate groups. Review group fare policy, tickets for 10 or more, and booking discount options.',
        'Qatar Airways Group Booking for Large Parties'
    ),
    'avianca-airlines-group-travel': seo(
        'Avianca Airlines Group Travel',
        'Plan Avianca Airlines group travel for Latin America routes. Request a group flight quote and compare reservation policy, booking numbers, and travel discount options.',
        'Avianca Airlines Group Travel Planning'
    ),
    'emirates-group-travel-flight-booking': seo(
        'Emirates Group Booking',
        'Request Emirates group booking for Dubai connections and long-haul group trips. Compare Emirates group fare policy, tickets for 10+, and booking discount guidance.',
        'Emirates Group Booking for Tours & Teams'
    ),
    'air-france-group-booking': seo(
        'Air France Group Booking',
        'Plan Air France group booking via Paris for universities, tours, and companies. Review the group travel desk, fare policy, and reservation rules for 10 or more travelers.',
        'Air France Group Booking & Travel Desk Help'
    ),
    'american-airlines-group-booking': seo(
        'American Airlines Group Booking',
        'Arrange American Airlines group booking for domestic USA and international group trips. Check minimum passengers, group fare policy, and flight discount options.',
        'American Airlines Group Booking Made Clear'
    ),
    'lufthansa-group-booking': seo(
        'Lufthansa Group Booking',
        'Explore Lufthansa group booking for Europe and beyond. Get help from the group travel desk on reservation policy, tickets for 10 or more, and fare rules.',
        'Lufthansa Group Booking for Group Trips'
    ),
    'swiss-air-group-booking': seo(
        'Swiss Air Group Booking',
        'Plan Swiss Air group booking through Zurich for tours and corporate travel. Review group fare policy, booking for 10+, and reservation guidance before you commit.',
        'Swiss Air Group Booking Support'
    ),
    'spirit-airlines-group-booking': seo(
        'Spirit Airlines Group Booking',
        'Look into Spirit Airlines group booking for budget-friendly USA group trips. Compare the group travel desk options, booking number, fare policy, and travel discounts.',
        'Spirit Airlines Group Booking for Value Trips'
    ),
    'aeromexico-group-booking-and-reservations': seo(
        'Aeromexico Group Booking',
        'Arrange Aeromexico group booking for USA–Mexico group travel. Request a group flight quote and review reservation policy plus fare guidance for your party.',
        'Aeromexico Group Booking & Reservations'
    ),
    'frontier-airlines-group-booking': seo(
        'Frontier Airlines Group Booking',
        'Plan Frontier Airlines group booking with help from the group travel desk. Review reservation policy, request a group flight quote, and compare discount options for USA trips.',
        'Frontier Airlines Group Booking Help'
    ),
    'copa-airlines-group-booking': seo(
        'Copa Airlines Group Booking',
        'Request Copa Airlines group booking via Panama for Latin America trips. Review the group travel desk guidance, reservation policy, tickets for 10+, and fare policy before you book.',
        'Copa Airlines Group Booking for Regional Trips'
    ),
}

/** Business class pages — /business-class/[slug] (sheet + pattern for extras) */
export const businessClassSeo = {
    'american-airlines-business-class-travel-flight-booking': seo(
        'American Airlines Business Class Booking',
        'Book American Airlines business class with Flagship comfort in mind. Compare AA business class deals and affordable Flagship Business tickets for USA and long-haul trips.',
        'American Airlines Business Class Booking'
    ),
    'delta-airlines-business-class-travel': seo(
        'Delta One Business Class Booking',
        'Explore Delta One business class booking for private-suite comfort. Compare Delta business class deals, Delta One fares, and group booking options when your party needs more space.',
        'Delta One Business Class Booking'
    ),
    'alaska-airlines-business-class-travel': seo(
        'Alaska Airlines Business Class Booking',
        'Compare Alaska Airlines business class booking and First Class comfort. See how First Class vs business differs, plus premium class tickets and West Coast deals.',
        'Alaska Airlines Business Class Booking'
    ),
    'lufthansa-airlines-business-class-travel': seo(
        'Lufthansa Business Class Booking',
        'Book Lufthansa business class for Europe and beyond. Find Lufthansa business class deals from the USA, competitive tickets, and group fare options when you need more seats.',
        'Lufthansa Business Class Booking'
    ),
    'klm-business-class-travel-experience': seo(
        'KLM Business Class Booking',
        'Arrange KLM business class booking through Amsterdam. Compare KLM World Business Class tickets, deals, and affordable business class flights for your next trip.',
        'KLM Business Class Booking'
    ),
    'el-al-business-class-travel': seo(
        'EL AL Business Class Booking',
        'Book EL AL business class for New York to Tel Aviv and other key routes. Compare EL AL business class deals from the USA and Dreamliner business class tickets.',
        'EL AL Business Class Booking'
    ),
    'united-airlines-business-class-travel': seo(
        'United Airlines Business Class Booking',
        'Explore United Airlines business class booking with Polaris in mind. Compare United Polaris deals, lounge access tickets, and affordable business class flights from the USA.',
        'United Airlines Business Class Booking'
    ),
    'british-airways-business-class-travel': seo(
        'British Airways Business Class Booking',
        'Book British Airways business class for New York to London and more. Compare BA Club World deals from the USA and Club Suite business class tickets.',
        'British Airways Business Class Booking'
    ),
    'aeromexico-clase-premier-business-class': seo(
        'Aeromexico Business Class Booking',
        'Arrange Aeromexico business class booking with Clase Premier comfort. Compare USA to Mexico City deals and affordable Aeromexico business class flights.',
        'Aeromexico Business Class Booking'
    ),
    'qatar-airways-business-class-travel': seo(
        'Qatar Airways Business Class Booking',
        'Book Qatar Airways business class and explore Qsuite from the USA. Compare New York to Doha options and competitive Qatar business class flights.',
        'Qatar Airways Business Class Booking'
    ),
    'emirates-airlines-business-class-travel': seo(
        'Emirates Business Class Booking',
        'Book Emirates business class for New York to Dubai and long-haul routes. Compare Emirates business class deals from the USA and A380 business class tickets.',
        'Emirates Business Class Booking'
    ),
    'air-france-business-class-travel': seo(
        'Air France Business Class Booking',
        'Arrange Air France business class for USA to Paris trips. Compare deals from New York, lie-flat seats, and comfortable business class tickets for your itinerary.',
        'Air France Business Class Booking'
    ),
    'turkish-airlines-business-class-travel': seo(
        'Turkish Airlines Business Class Booking',
        'Book Turkish Airlines business class for USA to Istanbul routes. Compare deals from New York and competitive Turkish business class tickets for long-haul travel.',
        'Turkish Airlines Business Class Booking'
    ),
    'singapore-airlines-business-class-travel': seo(
        'Singapore Airlines Business Class Booking',
        'Explore Singapore Airlines business class from the USA, including New York to Singapore. Compare Book the Cook options and premium business class seats.',
        'Singapore Airlines Business Class Booking'
    ),
    'swiss-airlines-business-class-travel': seo(
        'Swiss Airlines Business Class Booking',
        'Book Swiss business class for USA to Zurich and European connections. Compare deals from New York and lie-flat Swiss business class tickets.',
        'Swiss Airlines Business Class Booking'
    ),
    'japan-airlines-business-class-travel': seo(
        'Japan Airlines Business Class Booking',
        'Arrange JAL business class for USA to Tokyo routes, including Los Angeles to Tokyo. Compare Sky Suite deals and Japan Airlines business class comfort.',
        'Japan Airlines Business Class Booking'
    ),
    'hawaiian-airlines-business-class-flights-travel': seo(
        'Hawaiian Airlines Business Class Booking',
        'Book Hawaiian Airlines business class for Los Angeles to Honolulu and mainland USA to Hawaii trips. Compare Leihoku suites and island-route premium seats.',
        'Hawaiian Airlines Business Class Booking'
    ),
    'copa-airlines-business-class-flights': seo(
        'Copa Airlines Business Class Booking',
        'Explore Copa Airlines business class for Miami to Panama City and regional routes. Compare Dreams business class options and USA-friendly fares.',
        'Copa Airlines Business Class Booking'
    ),
    'etihad-airways-business-class-flights': seo(
        'Etihad Airways Business Class Booking',
        'Book Etihad Airways business class for New York to Abu Dhabi and long-haul trips. Compare Etihad business class deals from the USA and Business Studio seats.',
        'Etihad Airways Business Class Booking'
    ),
    'eva-air-business-class-flights-and-tickets': seo(
        'EVA Air Business Class Booking',
        'Book EVA Air business class for Los Angeles to Taipei and other USA routes. Compare Royal Laurel deals and EVA Air business class options from the USA.',
        'EVA Air Business Class Booking'
    ),
    'cathay-pacific-business-class-flights': seo(
        'Cathay Pacific Business Class Booking',
        'Arrange Cathay Pacific business class for USA to Hong Kong trips, including Los Angeles routes. Compare Aria Suite tickets and premium cabin deals.',
        'Cathay Pacific Business Class Booking'
    ),
    'finnair-business-class': seo(
        'Finnair Business Class Booking',
        'Book Finnair business class for USA to Helsinki routes, including New York to Helsinki. Compare AirLounge seats and Finnair business class deals.',
        'Finnair Business Class Booking'
    ),
    'air-canada-business-class-flights': seo(
        'Air Canada Business Class Booking',
        'Explore Air Canada business class for USA to Toronto and beyond. Compare Signature Class from the USA and competitive Air Canada business class flights.',
        'Air Canada Business Class Booking'
    ),
    'iberia-airlines-business-class-flights': seo(
        'Iberia Airlines Business Class Booking',
        'Book Iberia business class for USA to Madrid trips. Compare deals from New York and affordable Iberia business class flights for your itinerary.',
        'Iberia Airlines Business Class Booking'
    ),
    'aer-lingus-business-class-flights': seo(
        'Aer Lingus Business Class Booking',
        'Arrange Aer Lingus business class for USA to Dublin routes, including New York to Dublin. Compare cabin comfort and current business class deals.',
        'Aer Lingus Business Class Booking'
    ),
    'all-nippon-airways-business-class-flights': seo(
        'ANA Business Class Booking',
        'Book ANA business class for USA to Tokyo routes, including Los Angeles to Tokyo. Compare THE Room suites and All Nippon Airways business class deals.',
        'ANA Business Class Booking'
    ),
    'fiji-airways-business-class-flights': seo(
        'Fiji Airways Business Class Booking',
        'Explore Fiji Airways business class for Los Angeles to Nadi and USA–South Pacific trips. Compare A350 business class tickets and island-route fares.',
        'Fiji Airways Business Class Booking'
    ),
    'southwest-airlines-business-class-flights': seo(
        'Southwest Airlines Business Select Booking',
        'Compare Southwest Airlines Business Select booking benefits, including A1–A15 boarding. See how Business Select vs Anytime differs before you choose a fare.',
        'Southwest Airlines Business Select Booking'
    ),
    'avianca-airlines-business-class-flights': seo(
        'Avianca Airlines Business Class Booking',
        'Book Avianca Airlines business class for USA to Colombia routes. Compare Insignia deals and affordable Avianca business class flights for your trip.',
        'Avianca Airlines Business Class Booking'
    ),
    'spirit-airlines-business-class-flights': seo(
        'Spirit Airlines Big Front Seat Booking',
        'Look into Spirit Airlines Big Front Seat booking for extra space on USA routes. Compare Big Front Seat deals vs typical first-class style seats and ticket options.',
        'Spirit Airlines Big Front Seat Booking'
    ),
    'thai-airways-business-class-flights': seo(
        'Thai Airways Business Class Booking',
        'Book Thai Airways business class for USA to Bangkok trips. Compare Royal Silk Class deals and competitive Thai Airways business class tickets.',
        'Thai Airways Business Class Booking'
    ),
    'qantas-airways-business-class-flights': seo(
        'Qantas Business Class Booking',
        'Arrange Qantas business class for USA to Sydney routes, including Los Angeles to Sydney. Compare Qantas business class deals for long-haul comfort.',
        'Qantas Business Class Booking'
    ),
    'tap-air-portugal-business-class-flights': seo(
        'TAP Air Portugal Business Class Booking',
        'Book TAP Air Portugal business class for USA to Lisbon routes, including New York to Lisbon. Compare Executive cabin deals and ticket options.',
        'TAP Air Portugal Business Class Booking'
    ),
    'latam-airlines-business-class-flights': seo(
        'LATAM Airlines Business Class Booking',
        'Explore LATAM Airlines business class for Miami to South America routes. Compare premium business class deals and affordable LATAM fares from the USA.',
        'LATAM Airlines Business Class Booking'
    ),
    'tarom-airlines-business-class-flights': seo(
        'TAROM Business Class Booking',
        'Book TAROM business class for USA to Bucharest trips. Compare TAROM business class deals and straightforward ticket options for your itinerary.',
        'TAROM Business Class Booking'
    ),
    'icelandair-business-class-flights': seo(
        'Icelandair Business Class Booking',
        'Compare Icelandair Saga Premium deals for USA routes. See how Saga Premium differs from economy and choose the comfort level that fits your trip.',
        'Icelandair Business Class Booking'
    ),
    'bulgaria-air-business-class-flights': seo(
        'Bulgaria Air Business Class Booking',
        'Book Bulgaria Air business class for USA to Sofia trips. Compare Bulgaria Air business class deals and affordable premium tickets for your group or solo travel.',
        'Bulgaria Air Business Class Booking'
    ),
    'aerolineas-argentinas-business-class': seo(
        'Aerolineas Argentinas Business Class Booking',
        'Arrange Aerolineas Argentinas business class for Miami to Buenos Aires routes. Compare Club Condor deals and competitive business class tickets.',
        'Aerolineas Argentinas Business Class Booking'
    ),
}

/** Fallback builders for any airline slug not listed above */
export function fallbackGroupTravelSeo(name) {
    return seo(
        `${name} Group Booking`,
        `Plan ${name} group booking for families, teams, and events. Share your route, dates, and group size for a clear quote with USA-friendly planning support.`,
        `${name} Group Booking`
    )
}

export function fallbackBusinessClassSeo(name) {
    return seo(
        `${name} Business Class Booking`,
        `Explore ${name} business class booking options. Compare premium cabin comfort, deals, and tickets for USA and international routes before you request a quote.`,
        `${name} Business Class Booking`
    )
}

export { BRAND }
