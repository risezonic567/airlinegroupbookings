const BRAND = 'Airline Group Bookings'

/** Build SEO + on-page copy with EVERY primary + secondary phrase included. */
function seo(primary, secondaries = [], h1) {
    const list = (secondaries || []).map((s) => String(s).trim()).filter(Boolean)
    const heading = h1 || primary.replace(/\b\w/g, (c) => c.toUpperCase())
    const metaDescription = list.length
        ? `Need ${primary}? Get help with ${list.join(', ')}. ${BRAND} makes the next steps clear for your trip.`
        : `Need ${primary}? ${BRAND} makes the next steps clear for your trip.`
    const onPageCopy = list.length
        ? `Looking for ${primary}? ${BRAND} can help you with ${list.join(', ')}. Share your route, dates, and traveler count — we'll compare workable options and explain fare details in plain language before you request a quote.`
        : `Looking for ${primary}? ${BRAND} can help you compare options and request a clear quote.`
    const highlights = list.length
        ? list.map((s) => `Ask us about ${s} when you share your trip details.`)
        : [`Request a clear quote for ${primary} with ${BRAND}.`]

    return {
        metaTitle: `${heading} | ${BRAND}`,
        metaDescription,
        h1: heading,
        tagline: heading,
        onPageCopy,
        highlights,
        primary,
        secondaries: list,
    }
}

/** Group travel airline pages — /flights/[slug] */
export const groupTravelSeo = {
    'delta-airlines-group-booking': seo(
        'delta airlines group booking',
        ['delta group travel desk', 'delta group booking minimum passengers', 'delta group fare policy', 'delta group flight discount'],
        'Delta Airlines Group Booking'
    ),
    'el-al-group-booking': seo(
        'el al group booking',
        ['el al group travel discount', 'el al group flight tickets', 'book el al flights for group', 'el al group fare policy'],
        'EL AL Group Booking'
    ),
    'klm-group-booking': seo(
        'klm group booking',
        ['klm group travel policy', 'klm group reservation', 'klm group flight deals', 'klm group ticket for 10 or more'],
        'KLM Group Booking'
    ),
    'southwest-airlines-group-travel-booking': seo(
        'southwest airlines group travel',
        ['southwest group booking number', 'southwest group reservation policy', 'southwest group flight quote', 'southwest group travel discount'],
        'Southwest Airlines Group Travel'
    ),
    'british-airways-group-travel-booking': seo(
        'british airways group booking',
        ['british airways group travel desk', 'british airways group fare', 'ba group flight booking for 10 or more', 'british airways group discount'],
        'British Airways Group Booking'
    ),
    'finnair-group-travel-flight-booking': seo(
        'finnair group booking',
        ['finnair group travel desk', 'finnair group booking minimum passengers', 'finnair group flight tickets for 10 or more', 'finnair group fare policy'],
        'Finnair Group Booking'
    ),
    'alaska-airlines-group-travel': seo(
        'alaska airlines group travel',
        ['alaska airlines group booking number', 'alaska airlines group reservation policy', 'alaska airlines group flight quote', 'alaska airlines group discount'],
        'Alaska Airlines Group Travel'
    ),
    'jetblue-group-travel-flight-booking': seo(
        'jetblue group travel',
        ['jetblue group booking number', 'jetblue group reservation policy', 'jetblue group flight quote', 'jetblue group travel discount'],
        'Jetblue Group Travel'
    ),
    'qatar-airways-group-travel': seo(
        'qatar airways group booking',
        ['qatar airways group travel desk', 'qatar airways group fare policy', 'qatar airways group flight tickets for 10 or more', 'qatar airways group booking discount'],
        'Qatar Airways Group Booking'
    ),
    'avianca-airlines-group-travel': seo(
        'avianca airlines group travel',
        ['avianca group booking number', 'avianca group reservation policy', 'avianca group flight quote', 'avianca group travel discount'],
        'Avianca Airlines Group Travel'
    ),
    'emirates-group-travel-flight-booking': seo(
        'emirates group booking',
        ['emirates group travel desk', 'emirates group fare policy', 'emirates group flight tickets for 10 or more', 'emirates group booking discount'],
        'Emirates Group Booking'
    ),
    'air-france-group-booking': seo(
        'air france group booking',
        ['air france group travel desk', 'air france group fare policy', 'air france group flight booking for 10 or more', 'air france group reservation policy'],
        'Air France Group Booking'
    ),
    'american-airlines-group-booking': seo(
        'american airlines group booking',
        ['american airlines group travel desk', 'american airlines group booking minimum passengers', 'american airlines group fare policy', 'american airlines group flight discount'],
        'American Airlines Group Booking'
    ),
    'lufthansa-group-booking': seo(
        'lufthansa group booking',
        ['lufthansa group travel desk', 'lufthansa group reservation policy', 'lufthansa group flight tickets for 10 or more', 'lufthansa group fare policy'],
        'Lufthansa Group Booking'
    ),
    'swiss-air-group-booking': seo(
        'swiss air group booking',
        ['swiss airlines group travel desk', 'swiss air group fare policy', 'swiss air group flight booking for 10 or more', 'swiss air group reservation policy'],
        'Swiss Air Group Booking'
    ),
    'spirit-airlines-group-booking': seo(
        'spirit airlines group booking',
        ['spirit airlines group travel desk', 'spirit airlines group booking number', 'spirit airlines group fare policy', 'spirit airlines group travel discount'],
        'Spirit Airlines Group Booking'
    ),
    'aeromexico-group-booking-and-reservations': seo(
        'aeromexico group booking',
        ['aeromexico group travel desk', 'aeromexico group reservation policy', 'aeromexico group flight quote', 'aeromexico group fare policy'],
        'Aeromexico Group Booking'
    ),
    'frontier-airlines-group-booking': seo(
        'frontier airlines group booking',
        ['frontier airlines group travel desk', 'frontier airlines group reservation policy', 'frontier airlines group flight quote', 'frontier airlines group discount'],
        'Frontier Airlines Group Booking'
    ),
    'copa-airlines-group-booking': seo(
        'copa airlines group booking',
        ['copa airlines group travel desk', 'copa airlines group reservation policy', 'copa airlines group flight tickets for 10 or more', 'copa airlines group fare policy'],
        'Copa Airlines Group Booking'
    ),
}

/** Business class pages — /business-class/[slug] */
export const businessClassSeo = {
    'american-airlines-business-class-travel-flight-booking': seo(
        'american airlines business class booking',
        ['american airlines flagship business class', 'aa business class deals', 'cheap american airlines business class tickets'],
        'American Airlines Business Class Booking'
    ),
    'delta-airlines-business-class-travel': seo(
        'delta one business class booking',
        ['delta business class deals', 'delta one cheap tickets', 'delta business class group booking'],
        'Delta One Business Class Booking'
    ),
    'alaska-airlines-business-class-travel': seo(
        'alaska airlines business class booking',
        ['alaska airlines first class vs business', 'alaska business class deals', 'alaska airlines premium class tickets'],
        'Alaska Airlines Business Class Booking'
    ),
    'lufthansa-airlines-business-class-travel': seo(
        'lufthansa business class booking',
        ['lufthansa business class deals USA', 'cheap lufthansa business class tickets', 'lufthansa business class group fare'],
        'Lufthansa Business Class Booking'
    ),
    'klm-business-class-travel-experience': seo(
        'klm business class booking',
        ['klm business class deals', 'klm world business class tickets', 'cheap klm business class flights'],
        'KLM Business Class Booking'
    ),
    'el-al-business-class-travel': seo(
        'el al business class booking',
        ['el al business class new york to tel aviv', 'el al business class deals from usa', 'el al dreamliner business class tickets'],
        'EL AL Business Class Booking'
    ),
    'united-airlines-business-class-travel': seo(
        'united airlines business class booking',
        ['united polaris business class deals', 'united polaris lounge business class tickets', 'cheap united business class flights usa'],
        'United Airlines Business Class Booking'
    ),
    'british-airways-business-class-travel': seo(
        'british airways business class booking',
        ['british airways business class new york to london', 'ba club world deals from usa', 'ba club suite business class tickets'],
        'British Airways Business Class Booking'
    ),
    'aeromexico-clase-premier-business-class': seo(
        'aeromexico business class booking',
        ['aeromexico clase premier deals', 'aeromexico business class usa to mexico city', 'cheap aeromexico business class flights'],
        'Aeromexico Business Class Booking'
    ),
    'qatar-airways-business-class-travel': seo(
        'qatar airways business class booking',
        ['qatar airways qsuite from usa', 'qatar business class new york to doha', 'cheap qatar airways business class flights'],
        'Qatar Airways Business Class Booking'
    ),
    'emirates-airlines-business-class-travel': seo(
        'emirates business class booking',
        ['emirates business class new york to dubai', 'emirates business class deals from usa', 'emirates a380 business class tickets'],
        'Emirates Business Class Booking'
    ),
    'air-france-business-class-travel': seo(
        'air france business class booking',
        ['air france business class usa to paris', 'air france business class deals from new york', 'air france lie flat business class tickets'],
        'Air France Business Class Booking'
    ),
    'turkish-airlines-business-class-travel': seo(
        'turkish airlines business class booking',
        ['turkish airlines business class usa to istanbul', 'turkish business class deals from new york', 'cheap turkish airlines business class flights'],
        'Turkish Airlines Business Class Booking'
    ),
    'singapore-airlines-business-class-travel': seo(
        'singapore airlines business class booking',
        ['singapore airlines business class from usa', 'singapore airlines new york to singapore business class', 'singapore airlines book the cook business class'],
        'Singapore Airlines Business Class Booking'
    ),
    'swiss-airlines-business-class-travel': seo(
        'swiss airlines business class booking',
        ['swiss business class usa to zurich', 'swiss business class deals from new york', 'swiss lie flat business class tickets'],
        'Swiss Airlines Business Class Booking'
    ),
    'japan-airlines-business-class-travel': seo(
        'japan airlines business class booking',
        ['jal business class usa to tokyo', 'jal business class los angeles to tokyo', 'jal sky suite business class deals'],
        'Japan Airlines Business Class Booking'
    ),
    'hawaiian-airlines-business-class-flights-travel': seo(
        'hawaiian airlines business class booking',
        ['hawaiian business class los angeles to honolulu', 'hawaiian airlines business class from usa mainland', 'hawaiian leihoku suites tickets'],
        'Hawaiian Airlines Business Class Booking'
    ),
    'copa-airlines-business-class-flights': seo(
        'copa airlines business class booking',
        ['copa airlines business class miami to panama city', 'copa airlines dreams business class', 'cheap copa business class flights usa'],
        'Copa Airlines Business Class Booking'
    ),
    'etihad-airways-business-class-flights': seo(
        'etihad airways business class booking',
        ['etihad business class new york to abu dhabi', 'etihad business class deals from usa', 'etihad business studio tickets'],
        'Etihad Airways Business Class Booking'
    ),
    'eva-air-business-class-flights-and-tickets': seo(
        'eva air business class booking',
        ['eva air business class los angeles to taipei', 'eva air business class from usa', 'eva air royal laurel business class deals'],
        'Eva Air Business Class Booking'
    ),
    'cathay-pacific-business-class-flights': seo(
        'cathay pacific business class booking',
        ['cathay pacific business class usa to hong kong', 'cathay business class los angeles to hong kong', 'cathay pacific aria suite tickets'],
        'Cathay Pacific Business Class Booking'
    ),
    'finnair-business-class': seo(
        'finnair business class booking',
        ['finnair business class usa to helsinki', 'finnair business class new york to helsinki', 'finnair airlounge business class deals'],
        'Finnair Business Class Booking'
    ),
    'air-canada-business-class-flights': seo(
        'air canada business class booking',
        ['air canada business class usa to toronto', 'air canada signature class from usa', 'cheap air canada business class flights'],
        'Air Canada Business Class Booking'
    ),
    'iberia-airlines-business-class-flights': seo(
        'iberia airlines business class booking',
        ['iberia business class usa to madrid', 'iberia business class deals from new york', 'cheap iberia business class flights'],
        'Iberia Airlines Business Class Booking'
    ),
    'aer-lingus-business-class-flights': seo(
        'aer lingus business class booking',
        ['aer lingus business class usa to dublin', 'aer lingus business class new york to dublin', 'aer lingus business class deals'],
        'Aer Lingus Business Class Booking'
    ),
    'all-nippon-airways-business-class-flights': seo(
        'ana business class booking',
        ['ana business class usa to tokyo', 'ana business class los angeles to tokyo', 'ana the room business class deals'],
        'ANA Business Class Booking'
    ),
    'fiji-airways-business-class-flights': seo(
        'fiji airways business class booking',
        ['fiji airways business class los angeles to nadi', 'fiji airways business class from usa', 'fiji airways a350 business class tickets'],
        'Fiji Airways Business Class Booking'
    ),
    'southwest-airlines-business-class-flights': seo(
        'southwest airlines business select booking',
        ['southwest business select fare benefits', 'southwest business select vs anytime', 'southwest business select a1 a15 boarding'],
        'Southwest Airlines Business Select Booking'
    ),
    'avianca-airlines-business-class-flights': seo(
        'avianca airlines business class booking',
        ['avianca insignia business class deals', 'avianca business class usa to colombia', 'cheap avianca business class flights'],
        'Avianca Airlines Business Class Booking'
    ),
    'spirit-airlines-business-class-flights': seo(
        'spirit airlines big front seat booking',
        ['spirit big front seat deals', 'spirit big front seat vs first class', 'cheap spirit airlines big front seat tickets'],
        'Spirit Airlines Big Front Seat Booking'
    ),
    'thai-airways-business-class-flights': seo(
        'thai airways business class booking',
        ['thai airways business class usa to bangkok', 'thai airways royal silk class deals', 'cheap thai airways business class flights'],
        'Thai Airways Business Class Booking'
    ),
    'qantas-airways-business-class-flights': seo(
        'qantas business class booking',
        ['qantas business class usa to sydney', 'qantas business class los angeles to sydney', 'qantas business class deals'],
        'Qantas Business Class Booking'
    ),
    'tap-air-portugal-business-class-flights': seo(
        'tap air portugal business class booking',
        ['tap business class usa to lisbon', 'tap business class new york to lisbon', 'tap executive business class deals'],
        'Tap Air Portugal Business Class Booking'
    ),
    'latam-airlines-business-class-flights': seo(
        'latam airlines business class booking',
        ['latam business class miami to south america', 'latam premium business class deals', 'cheap latam business class flights usa'],
        'Latam Airlines Business Class Booking'
    ),
    'tarom-airlines-business-class-flights': seo(
        'tarom business class booking',
        ['tarom business class usa to bucharest', 'tarom business class deals', 'cheap tarom business class flights'],
        'Tarom Business Class Booking'
    ),
    'icelandair-business-class-flights': seo(
        'icelandair business class booking',
        ['icelandair saga premium deals', 'icelandair saga premium vs economy', 'icelandair business class usa'],
        'Icelandair Business Class Booking'
    ),
    'bulgaria-air-business-class-flights': seo(
        'bulgaria air business class booking',
        ['bulgaria air business class usa to sofia', 'bulgaria air business class deals', 'cheap bulgaria air business class flights'],
        'Bulgaria Air Business Class Booking'
    ),
    'aerolineas-argentinas-business-class': seo(
        'aerolineas argentinas business class booking',
        ['aerolineas argentinas business class miami to buenos aires', 'aerolineas argentinas club condor deals', 'cheap aerolineas argentinas business class flights'],
        'Aerolineas Argentinas Business Class Booking'
    ),
}

export function fallbackGroupTravelSeo(name) {
    return seo(
        `${name} group booking`,
        [`${name.toLowerCase()} group travel desk`, `${name.toLowerCase()} group fare policy`, `${name.toLowerCase()} group flight quote`],
        `${name} Group Booking`
    )
}

export function fallbackBusinessClassSeo(name) {
    return seo(
        `${name} business class booking`,
        [`${name.toLowerCase()} business class deals`, `cheap ${name.toLowerCase()} business class tickets`],
        `${name} Business Class Booking`
    )
}

export { BRAND }
