const BRAND = 'Airline Group Bookings'

function esc(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

function seedPick(seed, items) {
    let h = 2166136261
    const s = String(seed || '')
    for (let i = 0; i < s.length; i += 1) {
        h ^= s.charCodeAt(i)
        h = Math.imul(h, 16777619)
    }
    return items[Math.abs(h) % items.length]
}

function airlineLabel(h1, primary) {
    return (h1 || primary || 'this airline')
        .replace(/\s+Group Booking$/i, '')
        .replace(/\s+Group Travel$/i, '')
        .replace(/\s+Business Class Booking$/i, '')
        .replace(/\s+Business Select Booking$/i, '')
        .replace(/\s+Big Front Seat Booking$/i, '')
        .trim()
}

/** Long-form group-travel HTML — original copy, every secondary phrase included. */
function buildGroupContentHtml(primary, secondaries, h1) {
    const p = esc(primary)
    const list = (secondaries || []).map((s) => String(s).trim()).filter(Boolean)
    const s0 = esc(list[0] || `${primary} support`)
    const s1 = esc(list[1] || `${primary} fare details`)
    const s2 = esc(list[2] || `${primary} quote help`)
    const s3 = esc(list[3] || list[0] || `${primary} options`)
    const name = esc(airlineLabel(h1, primary))
    const opener = seedPick(primary, [
        `When several travelers need the same itinerary, the search usually starts with <strong>${p}</strong>.`,
        `Families, schools, sports teams, and corporate planners often begin with <strong>${p}</strong> when they want one clear plan.`,
        `If your party is flying together, a focused <strong>${p}</strong> request saves time compared with booking seats one by one.`,
    ])
    const why = seedPick(primary + 'why', [
        `${BRAND} helps you compare workable ${name} options, explain fare rules in plain language, and move to a quote when the details look right.`,
        `Our team at ${BRAND} reviews route, dates, and traveler count first — then we outline ${name} group options you can actually use.`,
        `With ${BRAND}, you get calm guidance on ${name} group travel instead of scattered screenshots and guesswork.`,
    ])

    return `
<p>${opener} ${why}</p>
<p>Share cities, preferred dates, cabin preference, and how many people are traveling. We will check availability patterns, note deposit timing where it applies, and flag anything that could affect seating or name changes later. The goal is simple: one workable itinerary your organizers can approve without chasing ten different confirmation emails.</p>
<p>Many groups come to us after trying to stitch tickets together online. That can work for two or three friends, but it gets messy when schools, teams, or multi-family trips need the same flights, similar rules, and one person who can answer what happens if someone drops out. A dedicated ${p} plan keeps those answers in one place.</p>

<h2>How to start your ${p}</h2>
<p>You do not need a finished passenger list on day one. A solid outline is enough for us to begin:</p>
<ol>
<li>Tell us origin, destination, and whether the trip is one-way or round-trip.</li>
<li>Share approximate travel dates and how flexible the group can be.</li>
<li>Confirm traveler count and any must-sit-together needs.</li>
<li>Ask about <strong>${s0}</strong> if you want airline-side coordination clarified early.</li>
<li>Review the outline with your organizer, then request a formal quote when ready.</li>
</ol>
<p>Prefer talking it through? Call or send the form on this site — either path reaches the same group desk workflow at ${BRAND}. If your committee still needs a week to vote on dates, say that up front so we prioritize flexible planning instead of rushing a deposit.</p>

<h2>What to know before you request a quote</h2>
<p>Most group itineraries work best when everyone is on the same flights. Before you lock dates, it helps to understand <strong>${s1}</strong> in everyday terms: what counts as a group request, when names are due, and how changes are handled after a hold is placed.</p>
<p>We also walk through <strong>${s2}</strong> so your organizer knows what information we need for a clear next step — not a pile of vague screenshots. If budget is the priority, we will look at timing and routing ideas that often improve a <strong>${s3}</strong> conversation without promising numbers we cannot stand behind.</p>
<ul>
<li>Hold windows and deposits vary by airline and season — we explain what applies to your dates.</li>
<li>Name changes and splits are easier when the lead traveler stays consistent.</li>
<li>Weekend peaks and holiday banks fill faster; weekday flexibility can open better inventory.</li>
<li>Cabin mix (all economy vs a few premium seats) should be decided before the final ticket deadline.</li>
<li>International trips need extra buffer for passports, visas, and connection timing for less-experienced travelers.</li>
</ul>

<h2>${name} group travel notes in plain language</h2>
<p>Every carrier phrases rules differently, so we translate the parts that usually matter to organizers: who can request space, what a tentative hold means, and when money becomes non-refundable. You should leave the conversation knowing the practical meaning of <strong>${s1}</strong> for your route — not a wall of PDF jargon.</p>
<p>If your travelers are spread across a few nearby airports, tell us. Sometimes a slightly longer drive to a hub creates a cleaner ${name} itinerary and fewer missed connections for first-time flyers. That tradeoff is exactly what we review before anyone pays a deposit.</p>

<h2>Benefits of planning ${name} group travel with ${BRAND}</h2>
<p>Booking separately often scatters seats and creates different fare rules inside one party. A coordinated ${p} approach keeps the group on one story:</p>
<ul>
<li><strong>One conversation:</strong> route, dates, and count in a single thread with specialists who do this daily.</li>
<li><strong>Clearer timing:</strong> you know when deposits, names, and final payment typically come due.</li>
<li><strong>Seating goals:</strong> we note together-travel priorities while inventory still allows it.</li>
<li><strong>Plain-language fare notes:</strong> including topics people search as ${s1} and ${s3}.</li>
<li><strong>USA-friendly support:</strong> organizers planning from the United States get practical next steps, not jargon.</li>
<li><strong>Calm changes:</strong> when someone joins late or drops out, you have a named process instead of panic screenshots.</li>
</ul>

<h2>Who this ${p} page helps</h2>
<p>${name} group trips show up in many shapes. This page is written for:</p>
<ul>
<li>Family reunions and multi-household vacations</li>
<li>School, university, and youth programs</li>
<li>Sports teams and performance groups</li>
<li>Corporate offsites, conferences, and incentive travel</li>
<li>Faith-based and community organizations</li>
<li>Wedding parties and celebration travel</li>
</ul>
<p>If your party is smaller than a formal group minimum, say so — we will still advise whether individual tickets or a group request fits better. Honesty about count beats forcing a structure that will not stick.</p>

<h2>Things to check before travel week</h2>
<p>Once dates look good, run this quick organizer checklist so day-of travel stays calm:</p>
<ul>
<li>Confirm legal names match travel documents before ticketing.</li>
<li>Align baggage expectations — especially sports gear, instruments, or medical devices.</li>
<li>Share airport arrival windows so latecomers do not break the group flow.</li>
<li>Decide who carries payment proof and emergency contacts.</li>
<li>Reconfirm any seating or assistance requests that were noted during <strong>${s2}</strong>.</li>
</ul>

<h2>Practical checklist before you submit details</h2>
<p>A few minutes of prep makes <strong>${s2}</strong> faster and more accurate:</p>
<ul>
<li>List every city pair in order (including connections you already prefer).</li>
<li>Note passport timing for international trips and any traveler who needs extra assistance.</li>
<li>Decide who the contract lead will be for emails and payment questions.</li>
<li>Flag baggage expectations, sports equipment, or instruments early.</li>
<li>Ask us to clarify <strong>${s0}</strong> if you want airline desk involvement explained up front.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>How many travelers do we usually need for ${p}?</h3>
<p>Airlines often treat roughly ten or more passengers on the same itinerary as a group request, but exact rules depend on the carrier and route. Tell us your count and we will confirm whether <strong>${s1}</strong> style planning applies or if another approach is smarter.</p>
<h3>Can you help if we only have rough dates?</h3>
<p>Yes. Share a date range and flexibility notes. We can outline options first, then tighten dates once the group agrees — useful when people are still voting on the trip.</p>
<h3>Will everyone sit together?</h3>
<p>We always note seating priorities. Together seats depend on aircraft and how early the request is made, so earlier planning helps more than last-minute scrambling.</p>
<h3>How do discounts work?</h3>
<p>Group savings are not a single published coupon. Pricing depends on route, season, and inventory. When people ask about a <strong>${s3}</strong>, we compare realistic options and explain the tradeoffs before you commit.</p>
<h3>What happens after we request a quote?</h3>
<p>We confirm the details, check availability patterns, and send a clear outline. You review it with your organizers, ask questions, and only move forward when the plan fits.</p>
<h3>Can part of the group fly a different cabin?</h3>
<p>Often yes. Mixed cabins are common for organizers who need rest while students or teammates stay in economy. Tell us the split early so ticketing stays clean.</p>
<h3>Do you copy other websites onto this page?</h3>
<p>No. ${BRAND} writes original planning guidance and uses your search phrases — like ${p} and ${s0} — so the page stays useful and unique.</p>

<h2>Ready for the next step?</h2>
<p>If <strong>${p}</strong> is what you need — including help with ${list.map(esc).join(', ') || 'group flight planning'} — send your route and dates to ${BRAND}. We will keep the process human, clear, and focused on getting your party on the same flights with fewer surprises.</p>
`.trim()
}

/** Long-form business-class HTML — original copy, every secondary phrase included. */
function buildBusinessContentHtml(primary, secondaries, h1) {
    const p = esc(primary)
    const list = (secondaries || []).map((s) => String(s).trim()).filter(Boolean)
    const s0 = esc(list[0] || `${primary} options`)
    const s1 = esc(list[1] || `${primary} deals`)
    const s2 = esc(list[2] || `${primary} tickets`)
    const name = esc(airlineLabel(h1, primary))
    const opener = seedPick(primary, [
        `Looking for a calmer cabin for a long trip often starts with <strong>${p}</strong>.`,
        `When comfort matters as much as schedule, travelers begin with <strong>${p}</strong> instead of settling for a rushed coach seat.`,
        `Whether you are upgrading one organizer or seating a whole party forward, <strong>${p}</strong> is the search that gets the plan moving.`,
    ])
    const why = seedPick(primary + 'bc', [
        `${BRAND} helps you compare ${name} premium options, clarify what is included, and request a quote without the usual runaround.`,
        `Our specialists at ${BRAND} review your route and dates first, then outline ${name} business-cabin choices in plain language.`,
        `With ${BRAND}, ${name} premium travel planning stays practical — real schedules, clear next steps, and no copied filler.`,
    ])

    return `
<p>${opener} ${why}</p>
<p>Tell us where you are flying, when you need to travel, how many seats you need up front, and whether the rest of the group stays in economy. That mix is common for corporate leads, families celebrating a milestone, or teams that want one quiet row to work on the way.</p>
<p>Premium travel planning should feel calmer than a last-minute upgrade scramble at the airport. With a clear ${p} brief, we can compare schedules, cabin products, and budget ranges before anyone commits — and we write the guidance in our own words for ${BRAND}, not copied from another site.</p>

<h2>How ${p} works with ${BRAND}</h2>
<ol>
<li>Share origin, destination, and preferred travel dates (plus flexibility if you have it).</li>
<li>Confirm how many business-cabin seats you need versus total travelers.</li>
<li>Mention layover limits, alliance preferences, or must-arrive times.</li>
<li>Ask about <strong>${s0}</strong> if a specific product or cabin name matters to your group.</li>
<li>Review the outline, then request a quote when the itinerary feels right.</li>
</ol>
<p>You can start from the quote form on this site or call our team — both routes reach specialists who handle premium and mixed-cabin group requests. If finance needs two options for approval, say so early and we will structure the outline that way.</p>

<h2>What to compare before you book</h2>
<p>Premium cabins differ by aircraft and route. Before you choose, we help you weigh schedule quality, connection risk, and value — including searches people make for <strong>${s1}</strong> and <strong>${s2}</strong>.</p>
<ul>
<li>Lie-flat versus recliner depends on aircraft; we note what usually operates your city pair.</li>
<li>Lounge access and baggage rules can change the “real” value of an upgrade.</li>
<li>Mixed cabins (some business, some economy) need clear name lists so seats stay assigned correctly.</li>
<li>Refund and change rules are often stricter in sale inventory — we flag that early.</li>
<li>Red-eyes can look cheaper but may not help if your group needs to work or perform the next morning.</li>
</ul>
<p>If your brief includes a branded experience such as <strong>${s0}</strong>, say so up front so we do not waste time on cabins that will not match expectations.</p>

<h2>${name} premium cabin notes</h2>
<p>Product names change by aircraft and market, so we focus on what you will actually get on your dates: seat type, bag rules, and whether a connection risks a cabin downgrade. When travelers ask about <strong>${s1}</strong>, we explain seasonality and inventory instead of promising a forever-low fare.</p>
<p>For city-pair searches that look like <strong>${s2}</strong>, send the airports you prefer and any “must arrive before” time. That detail often matters more than chasing the absolute lowest screenshot online.</p>

<h2>Benefits of planning ${name} premium travel here</h2>
<ul>
<li><strong>Human comparison:</strong> side-by-side notes on timing and cabin type, not a wall of unsorted fares.</li>
<li><strong>Group-aware seating:</strong> useful when only part of the party upgrades.</li>
<li><strong>Budget honesty:</strong> we discuss when <strong>${s1}</strong> style pricing is realistic versus when peak dates simply cost more.</li>
<li><strong>Ticket clarity:</strong> help understanding what <strong>${s2}</strong> searches usually include on your route.</li>
<li><strong>One thread for updates:</strong> schedule changes and questions stay with the same planning conversation.</li>
<li><strong>Original guidance:</strong> content written for ${BRAND} organizers, not scraped from competitors.</li>
</ul>

<h2>Who requests ${p}</h2>
<ul>
<li>Corporate travelers and executive teams</li>
<li>Wedding and celebration parties wanting a smoother long-haul</li>
<li>Sports and performance groups with early call times</li>
<li>Families splitting cabins so elders or organizers rest better</li>
<li>Incentive trips and client entertainment travel</li>
</ul>
<p>Solo premium travelers are welcome too — share your dates and we will still keep the process straightforward.</p>

<h2>Before you fly</h2>
<ul>
<li>Reconfirm the cabin and aircraft notes on your tickets a few days out.</li>
<li>Download airline apps only if your travelers want status or seat maps handy.</li>
<li>Align meal requests and assistance needs while changes are still easy.</li>
<li>Keep the lead traveler reachable for irregular operations.</li>
</ul>

<h2>Planning checklist</h2>
<ul>
<li>Decide exact upgrade count before final payment deadlines.</li>
<li>Confirm passport validity and any visa timing for international arrivals.</li>
<li>Note if anyone needs accessibility assistance or special meals.</li>
<li>Ask us to prioritize <strong>${s0}</strong> product details when that cabin name is part of your brief.</li>
<li>Keep one lead contact for approvals so quotes do not stall in email chains.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Can we mix business and economy on one group trip?</h3>
<p>Yes. Many organizers upgrade a few travelers and keep the rest in economy. Tell us the split early so ticketing and seating stay organized.</p>
<h3>Are cheaper premium seats always available?</h3>
<p>Not always. Inventory for <strong>${s1}</strong> style pricing moves with season and demand. Flexible dates and earlier requests improve the odds.</p>
<h3>Do you book single travelers or only groups?</h3>
<p>We can help with individual premium requests and with larger parties. Share the traveler count and we will recommend the cleanest path.</p>
<h3>What should we send to get started on ${p}?</h3>
<p>Route, dates, cabin count, and contact details for the lead traveler are enough. If you care about <strong>${s2}</strong> on a specific city pair, include that preference too.</p>
<h3>What happens after the quote?</h3>
<p>You review the outline with your decision-makers, ask questions, and confirm only when the plan fits schedule and budget.</p>
<h3>Will you guarantee a specific suite product?</h3>
<p>We chase the product you ask for, including <strong>${s0}</strong> when it operates your route, and we tell you honestly when a different aircraft is scheduled.</p>

<h2>Ready to compare options?</h2>
<p>If you need <strong>${p}</strong> — including help with ${list.map(esc).join(', ') || 'premium cabin planning'} — reach out to ${BRAND}. We will keep the advice practical and the next steps clear.</p>
`.trim()
}

/**
 * Build SEO + on-page copy with EVERY primary + secondary phrase included.
 * kind: 'group' | 'business'
 */
function seo(primary, secondaries = [], h1, kind = 'group') {
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
    const contentHtml = kind === 'business'
        ? buildBusinessContentHtml(primary, list, heading)
        : buildGroupContentHtml(primary, list, heading)

    return {
        metaTitle: `${heading} | ${BRAND}`,
        metaDescription,
        h1: heading,
        tagline: heading,
        onPageCopy,
        highlights,
        contentHtml,
        primary,
        secondaries: list,
    }
}

function gtSeo(primary, secondaries, h1) {
    return seo(primary, secondaries, h1, 'group')
}

function bcSeo(primary, secondaries, h1) {
    return seo(primary, secondaries, h1, 'business')
}

/** Group travel airline pages — /flights/[slug] */
export const groupTravelSeo = {
    'delta-airlines-group-booking': gtSeo(
        'delta airlines group booking',
        ['delta group travel desk', 'delta group booking minimum passengers', 'delta group fare policy', 'delta group flight discount'],
        'Delta Airlines Group Booking'
    ),
    'el-al-group-booking': gtSeo(
        'el al group booking',
        ['el al group travel discount', 'el al group flight tickets', 'book el al flights for group', 'el al group fare policy'],
        'EL AL Group Booking'
    ),
    'klm-group-booking': gtSeo(
        'klm group booking',
        ['klm group travel policy', 'klm group reservation', 'klm group flight deals', 'klm group ticket for 10 or more'],
        'KLM Group Booking'
    ),
    'southwest-airlines-group-travel-booking': gtSeo(
        'southwest airlines group travel',
        ['southwest group booking number', 'southwest group reservation policy', 'southwest group flight quote', 'southwest group travel discount'],
        'Southwest Airlines Group Travel'
    ),
    'british-airways-group-travel-booking': gtSeo(
        'british airways group booking',
        ['british airways group travel desk', 'british airways group fare', 'ba group flight booking for 10 or more', 'british airways group discount'],
        'British Airways Group Booking'
    ),
    'finnair-group-travel-flight-booking': gtSeo(
        'finnair group booking',
        ['finnair group travel desk', 'finnair group booking minimum passengers', 'finnair group flight tickets for 10 or more', 'finnair group fare policy'],
        'Finnair Group Booking'
    ),
    'alaska-airlines-group-travel': gtSeo(
        'alaska airlines group travel',
        ['alaska airlines group booking number', 'alaska airlines group reservation policy', 'alaska airlines group flight quote', 'alaska airlines group discount'],
        'Alaska Airlines Group Travel'
    ),
    'jetblue-group-travel-flight-booking': gtSeo(
        'jetblue group travel',
        ['jetblue group booking number', 'jetblue group reservation policy', 'jetblue group flight quote', 'jetblue group travel discount'],
        'Jetblue Group Travel'
    ),
    'qatar-airways-group-travel': gtSeo(
        'qatar airways group booking',
        ['qatar airways group travel desk', 'qatar airways group fare policy', 'qatar airways group flight tickets for 10 or more', 'qatar airways group booking discount'],
        'Qatar Airways Group Booking'
    ),
    'avianca-airlines-group-travel': gtSeo(
        'avianca airlines group travel',
        ['avianca group booking number', 'avianca group reservation policy', 'avianca group flight quote', 'avianca group travel discount'],
        'Avianca Airlines Group Travel'
    ),
    'emirates-group-travel-flight-booking': gtSeo(
        'emirates group booking',
        ['emirates group travel desk', 'emirates group fare policy', 'emirates group flight tickets for 10 or more', 'emirates group booking discount'],
        'Emirates Group Booking'
    ),
    'air-france-group-booking': gtSeo(
        'air france group booking',
        ['air france group travel desk', 'air france group fare policy', 'air france group flight booking for 10 or more', 'air france group reservation policy'],
        'Air France Group Booking'
    ),
    'american-airlines-group-booking': gtSeo(
        'american airlines group booking',
        ['american airlines group travel desk', 'american airlines group booking minimum passengers', 'american airlines group fare policy', 'american airlines group flight discount'],
        'American Airlines Group Booking'
    ),
    'lufthansa-group-booking': gtSeo(
        'lufthansa group booking',
        ['lufthansa group travel desk', 'lufthansa group reservation policy', 'lufthansa group flight tickets for 10 or more', 'lufthansa group fare policy'],
        'Lufthansa Group Booking'
    ),
    'swiss-air-group-booking': gtSeo(
        'swiss air group booking',
        ['swiss airlines group travel desk', 'swiss air group fare policy', 'swiss air group flight booking for 10 or more', 'swiss air group reservation policy'],
        'Swiss Air Group Booking'
    ),
    'spirit-airlines-group-booking': gtSeo(
        'spirit airlines group booking',
        ['spirit airlines group travel desk', 'spirit airlines group booking number', 'spirit airlines group fare policy', 'spirit airlines group travel discount'],
        'Spirit Airlines Group Booking'
    ),
    'aeromexico-group-booking-and-reservations': gtSeo(
        'aeromexico group booking',
        ['aeromexico group travel desk', 'aeromexico group reservation policy', 'aeromexico group flight quote', 'aeromexico group fare policy'],
        'Aeromexico Group Booking'
    ),
    'frontier-airlines-group-booking': gtSeo(
        'frontier airlines group booking',
        ['frontier airlines group travel desk', 'frontier airlines group reservation policy', 'frontier airlines group flight quote', 'frontier airlines group discount'],
        'Frontier Airlines Group Booking'
    ),
    'copa-airlines-group-booking': gtSeo(
        'copa airlines group booking',
        ['copa airlines group travel desk', 'copa airlines group reservation policy', 'copa airlines group flight tickets for 10 or more', 'copa airlines group fare policy'],
        'Copa Airlines Group Booking'
    ),
}

/** Business class pages — /business-class/[slug] */
export const businessClassSeo = {
    'american-airlines-business-class-travel-flight-booking': bcSeo(
        'american airlines business class booking',
        ['american airlines flagship business class', 'aa business class deals', 'cheap american airlines business class tickets'],
        'American Airlines Business Class Booking'
    ),
    'delta-airlines-business-class-travel': bcSeo(
        'delta one business class booking',
        ['delta business class deals', 'delta one cheap tickets', 'delta business class group booking'],
        'Delta One Business Class Booking'
    ),
    'alaska-airlines-business-class-travel': bcSeo(
        'alaska airlines business class booking',
        ['alaska airlines first class vs business', 'alaska business class deals', 'alaska airlines premium class tickets'],
        'Alaska Airlines Business Class Booking'
    ),
    'lufthansa-airlines-business-class-travel': bcSeo(
        'lufthansa business class booking',
        ['lufthansa business class deals USA', 'cheap lufthansa business class tickets', 'lufthansa business class group fare'],
        'Lufthansa Business Class Booking'
    ),
    'klm-business-class-travel-experience': bcSeo(
        'klm business class booking',
        ['klm business class deals', 'klm world business class tickets', 'cheap klm business class flights'],
        'KLM Business Class Booking'
    ),
    'el-al-business-class-travel': bcSeo(
        'el al business class booking',
        ['el al business class new york to tel aviv', 'el al business class deals from usa', 'el al dreamliner business class tickets'],
        'EL AL Business Class Booking'
    ),
    'united-airlines-business-class-travel': bcSeo(
        'united airlines business class booking',
        ['united polaris business class deals', 'united polaris lounge business class tickets', 'cheap united business class flights usa'],
        'United Airlines Business Class Booking'
    ),
    'british-airways-business-class-travel': bcSeo(
        'british airways business class booking',
        ['british airways business class new york to london', 'ba club world deals from usa', 'ba club suite business class tickets'],
        'British Airways Business Class Booking'
    ),
    'aeromexico-clase-premier-business-class': bcSeo(
        'aeromexico business class booking',
        ['aeromexico clase premier deals', 'aeromexico business class usa to mexico city', 'cheap aeromexico business class flights'],
        'Aeromexico Business Class Booking'
    ),
    'qatar-airways-business-class-travel': bcSeo(
        'qatar airways business class booking',
        ['qatar airways qsuite from usa', 'qatar business class new york to doha', 'cheap qatar airways business class flights'],
        'Qatar Airways Business Class Booking'
    ),
    'emirates-airlines-business-class-travel': bcSeo(
        'emirates business class booking',
        ['emirates business class new york to dubai', 'emirates business class deals from usa', 'emirates a380 business class tickets'],
        'Emirates Business Class Booking'
    ),
    'air-france-business-class-travel': bcSeo(
        'air france business class booking',
        ['air france business class usa to paris', 'air france business class deals from new york', 'air france lie flat business class tickets'],
        'Air France Business Class Booking'
    ),
    'turkish-airlines-business-class-travel': bcSeo(
        'turkish airlines business class booking',
        ['turkish airlines business class usa to istanbul', 'turkish business class deals from new york', 'cheap turkish airlines business class flights'],
        'Turkish Airlines Business Class Booking'
    ),
    'singapore-airlines-business-class-travel': bcSeo(
        'singapore airlines business class booking',
        ['singapore airlines business class from usa', 'singapore airlines new york to singapore business class', 'singapore airlines book the cook business class'],
        'Singapore Airlines Business Class Booking'
    ),
    'swiss-airlines-business-class-travel': bcSeo(
        'swiss airlines business class booking',
        ['swiss business class usa to zurich', 'swiss business class deals from new york', 'swiss lie flat business class tickets'],
        'Swiss Airlines Business Class Booking'
    ),
    'japan-airlines-business-class-travel': bcSeo(
        'japan airlines business class booking',
        ['jal business class usa to tokyo', 'jal business class los angeles to tokyo', 'jal sky suite business class deals'],
        'Japan Airlines Business Class Booking'
    ),
    'hawaiian-airlines-business-class-flights-travel': bcSeo(
        'hawaiian airlines business class booking',
        ['hawaiian business class los angeles to honolulu', 'hawaiian airlines business class from usa mainland', 'hawaiian leihoku suites tickets'],
        'Hawaiian Airlines Business Class Booking'
    ),
    'copa-airlines-business-class-flights': bcSeo(
        'copa airlines business class booking',
        ['copa airlines business class miami to panama city', 'copa airlines dreams business class', 'cheap copa business class flights usa'],
        'Copa Airlines Business Class Booking'
    ),
    'etihad-airways-business-class-flights': bcSeo(
        'etihad airways business class booking',
        ['etihad business class new york to abu dhabi', 'etihad business class deals from usa', 'etihad business studio tickets'],
        'Etihad Airways Business Class Booking'
    ),
    'eva-air-business-class-flights-and-tickets': bcSeo(
        'eva air business class booking',
        ['eva air business class los angeles to taipei', 'eva air business class from usa', 'eva air royal laurel business class deals'],
        'Eva Air Business Class Booking'
    ),
    'cathay-pacific-business-class-flights': bcSeo(
        'cathay pacific business class booking',
        ['cathay pacific business class usa to hong kong', 'cathay business class los angeles to hong kong', 'cathay pacific aria suite tickets'],
        'Cathay Pacific Business Class Booking'
    ),
    'finnair-business-class': bcSeo(
        'finnair business class booking',
        ['finnair business class usa to helsinki', 'finnair business class new york to helsinki', 'finnair airlounge business class deals'],
        'Finnair Business Class Booking'
    ),
    'air-canada-business-class-flights': bcSeo(
        'air canada business class booking',
        ['air canada business class usa to toronto', 'air canada signature class from usa', 'cheap air canada business class flights'],
        'Air Canada Business Class Booking'
    ),
    'iberia-airlines-business-class-flights': bcSeo(
        'iberia airlines business class booking',
        ['iberia business class usa to madrid', 'iberia business class deals from new york', 'cheap iberia business class flights'],
        'Iberia Airlines Business Class Booking'
    ),
    'aer-lingus-business-class-flights': bcSeo(
        'aer lingus business class booking',
        ['aer lingus business class usa to dublin', 'aer lingus business class new york to dublin', 'aer lingus business class deals'],
        'Aer Lingus Business Class Booking'
    ),
    'all-nippon-airways-business-class-flights': bcSeo(
        'ana business class booking',
        ['ana business class usa to tokyo', 'ana business class los angeles to tokyo', 'ana the room business class deals'],
        'ANA Business Class Booking'
    ),
    'fiji-airways-business-class-flights': bcSeo(
        'fiji airways business class booking',
        ['fiji airways business class los angeles to nadi', 'fiji airways business class from usa', 'fiji airways a350 business class tickets'],
        'Fiji Airways Business Class Booking'
    ),
    'southwest-airlines-business-class-flights': bcSeo(
        'southwest airlines business select booking',
        ['southwest business select fare benefits', 'southwest business select vs anytime', 'southwest business select a1 a15 boarding'],
        'Southwest Airlines Business Select Booking'
    ),
    'avianca-airlines-business-class-flights': bcSeo(
        'avianca airlines business class booking',
        ['avianca insignia business class deals', 'avianca business class usa to colombia', 'cheap avianca business class flights'],
        'Avianca Airlines Business Class Booking'
    ),
    'spirit-airlines-business-class-flights': bcSeo(
        'spirit airlines big front seat booking',
        ['spirit big front seat deals', 'spirit big front seat vs first class', 'cheap spirit airlines big front seat tickets'],
        'Spirit Airlines Big Front Seat Booking'
    ),
    'thai-airways-business-class-flights': bcSeo(
        'thai airways business class booking',
        ['thai airways business class usa to bangkok', 'thai airways royal silk class deals', 'cheap thai airways business class flights'],
        'Thai Airways Business Class Booking'
    ),
    'qantas-airways-business-class-flights': bcSeo(
        'qantas business class booking',
        ['qantas business class usa to sydney', 'qantas business class los angeles to sydney', 'qantas business class deals'],
        'Qantas Business Class Booking'
    ),
    'tap-air-portugal-business-class-flights': bcSeo(
        'tap air portugal business class booking',
        ['tap business class usa to lisbon', 'tap business class new york to lisbon', 'tap executive business class deals'],
        'Tap Air Portugal Business Class Booking'
    ),
    'latam-airlines-business-class-flights': bcSeo(
        'latam airlines business class booking',
        ['latam business class miami to south america', 'latam premium business class deals', 'cheap latam business class flights usa'],
        'Latam Airlines Business Class Booking'
    ),
    'tarom-airlines-business-class-flights': bcSeo(
        'tarom business class booking',
        ['tarom business class usa to bucharest', 'tarom business class deals', 'cheap tarom business class flights'],
        'Tarom Business Class Booking'
    ),
    'icelandair-business-class-flights': bcSeo(
        'icelandair business class booking',
        ['icelandair saga premium deals', 'icelandair saga premium vs economy', 'icelandair business class usa'],
        'Icelandair Business Class Booking'
    ),
    'bulgaria-air-business-class-flights': bcSeo(
        'bulgaria air business class booking',
        ['bulgaria air business class usa to sofia', 'bulgaria air business class deals', 'cheap bulgaria air business class flights'],
        'Bulgaria Air Business Class Booking'
    ),
    'aerolineas-argentinas-business-class': bcSeo(
        'aerolineas argentinas business class booking',
        ['aerolineas argentinas business class miami to buenos aires', 'aerolineas argentinas club condor deals', 'cheap aerolineas argentinas business class flights'],
        'Aerolineas Argentinas Business Class Booking'
    ),
}

export function fallbackGroupTravelSeo(name) {
    return gtSeo(
        `${name} group booking`,
        [`${name.toLowerCase()} group travel desk`, `${name.toLowerCase()} group fare policy`, `${name.toLowerCase()} group flight quote`],
        `${name} Group Booking`
    )
}

export function fallbackBusinessClassSeo(name) {
    return bcSeo(
        `${name} business class booking`,
        [`${name.toLowerCase()} business class deals`, `cheap ${name.toLowerCase()} business class tickets`],
        `${name} Business Class Booking`
    )
}

export { BRAND }
