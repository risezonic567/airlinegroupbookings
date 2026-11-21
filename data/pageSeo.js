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
        `When several travelers need the same itinerary, the search usually starts with ${p}.`,
        `Families, schools, sports teams, and corporate planners often begin with ${p} when they want one clear plan.`,
        `If your party is flying together, a focused ${p} request saves time compared with booking seats one by one.`,
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
<li>Ask about ${s0} if you want airline-side coordination clarified early.</li>
<li>Review the outline with your organizer, then request a formal quote when ready.</li>
</ol>
<p>Prefer talking it through? Call or send the form on this site — either path reaches the same group desk workflow at ${BRAND}. If your committee still needs a week to vote on dates, say that up front so we prioritize flexible planning instead of rushing a deposit.</p>

<h2>What to know before you request a quote</h2>
<p>Most group itineraries work best when everyone is on the same flights. Before you lock dates, it helps to understand ${s1} in everyday terms: what counts as a group request, when names are due, and how changes are handled after a hold is placed.</p>
<p>We also walk through ${s2} so your organizer knows what information we need for a clear next step — not a pile of vague screenshots. If budget is the priority, we will look at timing and routing ideas that often improve a ${s3} conversation without promising numbers we cannot stand behind.</p>
<ul>
<li>Hold windows and deposits vary by airline and season — we explain what applies to your dates.</li>
<li>Name changes and splits are easier when the lead traveler stays consistent.</li>
<li>Weekend peaks and holiday banks fill faster; weekday flexibility can open better inventory.</li>
<li>Cabin mix (all economy vs a few premium seats) should be decided before the final ticket deadline.</li>
<li>International trips need extra buffer for passports, visas, and connection timing for less-experienced travelers.</li>
</ul>

<h2>${name} group travel notes in plain language</h2>
<p>Every carrier phrases rules differently, so we translate the parts that usually matter to organizers: who can request space, what a tentative hold means, and when money becomes non-refundable. You should leave the conversation knowing the practical meaning of ${s1} for your route — not a wall of PDF jargon.</p>
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
<li>Reconfirm any seating or assistance requests that were noted during ${s2}.</li>
</ul>

<h2>Practical checklist before you submit details</h2>
<p>A few minutes of prep makes ${s2} faster and more accurate:</p>
<ul>
<li>List every city pair in order (including connections you already prefer).</li>
<li>Note passport timing for international trips and any traveler who needs extra assistance.</li>
<li>Decide who the contract lead will be for emails and payment questions.</li>
<li>Flag baggage expectations, sports equipment, or instruments early.</li>
<li>Ask us to clarify ${s0} if you want airline desk involvement explained up front.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>How many travelers do we usually need for ${p}?</h3>
<p>Airlines often treat roughly ten or more passengers on the same itinerary as a group request, but exact rules depend on the carrier and route. Tell us your count and we will confirm whether ${s1} style planning applies or if another approach is smarter.</p>
<h3>Can you help if we only have rough dates?</h3>
<p>Yes. Share a date range and flexibility notes. We can outline options first, then tighten dates once the group agrees — useful when people are still voting on the trip.</p>
<h3>Will everyone sit together?</h3>
<p>We always note seating priorities. Together seats depend on aircraft and how early the request is made, so earlier planning helps more than last-minute scrambling.</p>
<h3>How do discounts work?</h3>
<p>Group savings are not a single published coupon. Pricing depends on route, season, and inventory. When people ask about a ${s3}, we compare realistic options and explain the tradeoffs before you commit.</p>
<h3>What happens after we request a quote?</h3>
<p>We confirm the details, check availability patterns, and send a clear outline. You review it with your organizers, ask questions, and only move forward when the plan fits.</p>
<h3>Can part of the group fly a different cabin?</h3>
<p>Often yes. Mixed cabins are common for organizers who need rest while students or teammates stay in economy. Tell us the split early so ticketing stays clean.</p>
<h3>Do you copy other websites onto this page?</h3>
<p>No. ${BRAND} writes original planning guidance and uses your search phrases — like ${p} and ${s0} — so the page stays useful and unique.</p>

<h2>Ready for the next step?</h2>
<p>If ${p} is what you need — including help with ${list.map(esc).join(', ') || 'group flight planning'} — send your route and dates to ${BRAND}. We will keep the process human, clear, and focused on getting your party on the same flights with fewer surprises.</p>
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
        `Looking for a calmer cabin for a long trip often starts with ${p}.`,
        `When comfort matters as much as schedule, travelers begin with ${p} instead of settling for a rushed coach seat.`,
        `Whether you are upgrading one organizer or seating a whole party forward, ${p} is the search that gets the plan moving.`,
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
<li>Ask about ${s0} if a specific product or cabin name matters to your group.</li>
<li>Review the outline, then request a quote when the itinerary feels right.</li>
</ol>
<p>You can start from the quote form on this site or call our team — both routes reach specialists who handle premium and mixed-cabin group requests. If finance needs two options for approval, say so early and we will structure the outline that way.</p>

<h2>What to compare before you book</h2>
<p>Premium cabins differ by aircraft and route. Before you choose, we help you weigh schedule quality, connection risk, and value — including searches people make for ${s1} and ${s2}.</p>
<ul>
<li>Lie-flat versus recliner depends on aircraft; we note what usually operates your city pair.</li>
<li>Lounge access and baggage rules can change the “real” value of an upgrade.</li>
<li>Mixed cabins (some business, some economy) need clear name lists so seats stay assigned correctly.</li>
<li>Refund and change rules are often stricter in sale inventory — we flag that early.</li>
<li>Red-eyes can look cheaper but may not help if your group needs to work or perform the next morning.</li>
</ul>
<p>If your brief includes a branded experience such as ${s0}, say so up front so we do not waste time on cabins that will not match expectations.</p>

<h2>${name} premium cabin notes</h2>
<p>Product names change by aircraft and market, so we focus on what you will actually get on your dates: seat type, bag rules, and whether a connection risks a cabin downgrade. When travelers ask about ${s1}, we explain seasonality and inventory instead of promising a forever-low fare.</p>
<p>For city-pair searches that look like ${s2}, send the airports you prefer and any “must arrive before” time. That detail often matters more than chasing the absolute lowest screenshot online.</p>

<h2>Benefits of planning ${name} premium travel here</h2>
<ul>
<li><strong>Human comparison:</strong> side-by-side notes on timing and cabin type, not a wall of unsorted fares.</li>
<li><strong>Group-aware seating:</strong> useful when only part of the party upgrades.</li>
<li><strong>Budget honesty:</strong> we discuss when ${s1} style pricing is realistic versus when peak dates simply cost more.</li>
<li><strong>Ticket clarity:</strong> help understanding what ${s2} searches usually include on your route.</li>
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
<li>Ask us to prioritize ${s0} product details when that cabin name is part of your brief.</li>
<li>Keep one lead contact for approvals so quotes do not stall in email chains.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Can we mix business and economy on one group trip?</h3>
<p>Yes. Many organizers upgrade a few travelers and keep the rest in economy. Tell us the split early so ticketing and seating stay organized.</p>
<h3>Are cheaper premium seats always available?</h3>
<p>Not always. Inventory for ${s1} style pricing moves with season and demand. Flexible dates and earlier requests improve the odds.</p>
<h3>Do you book single travelers or only groups?</h3>
<p>We can help with individual premium requests and with larger parties. Share the traveler count and we will recommend the cleanest path.</p>
<h3>What should we send to get started on ${p}?</h3>
<p>Route, dates, cabin count, and contact details for the lead traveler are enough. If you care about ${s2} on a specific city pair, include that preference too.</p>
<h3>What happens after the quote?</h3>
<p>You review the outline with your decision-makers, ask questions, and confirm only when the plan fits schedule and budget.</p>
<h3>Will you guarantee a specific suite product?</h3>
<p>We chase the product you ask for, including ${s0} when it operates your route, and we tell you honestly when a different aircraft is scheduled.</p>

<h2>Ready to compare options?</h2>
<p>If you need ${p} — including help with ${list.map(esc).join(', ') || 'premium cabin planning'} — reach out to ${BRAND}. We will keep the advice practical and the next steps clear.</p>
`.trim()
}

/**
 * Build SEO + on-page copy with EVERY primary + secondary phrase included.
 * kind: 'group' | 'business'
 * metaTitle / metaDescription: exact sheet values (title already includes brand)
 */
function seo(primary, secondaries = [], h1, kind = 'group', metaTitle, metaDescription) {
    const list = (secondaries || []).map((s) => String(s).trim()).filter(Boolean)
    const heading = h1 || primary.replace(/\b\w/g, (c) => c.toUpperCase())
    const finalMetaTitle = metaTitle || heading
    const finalMetaDescription = metaDescription || (list.length
        ? `Need ${primary}? Get help with ${list.join(', ')}. ${BRAND} makes the next steps clear for your trip.`
        : `Need ${primary}? ${BRAND} makes the next steps clear for your trip.`)
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
        metaTitle: finalMetaTitle,
        metaDescription: finalMetaDescription,
        h1: heading,
        tagline: heading,
        onPageCopy,
        highlights,
        contentHtml,
        primary,
        secondaries: list,
    }
}

function gtSeo(primary, secondaries, h1, metaTitle, metaDescription) {
    return seo(primary, secondaries, h1, 'group', metaTitle, metaDescription)
}

function bcSeo(primary, secondaries, h1, metaTitle, metaDescription) {
    return seo(primary, secondaries, h1, 'business', metaTitle, metaDescription)
}

/** Group travel airline pages — /group-travel/[slug] */
export const groupTravelSeo = {
    "delta-airlines": gtSeo(
        "delta airlines group booking",
        [
        "delta group travel desk",
        "delta group booking minimum passengers",
        "delta group fare policy",
        "delta group flight discount"
        ],
        "Delta Airlines Group Booking for 10+ Passengers",
        "Delta Airlines Group Booking: Policy, Fares & Free Quote",
        "Need Delta Airlines group booking? Compare Delta group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "el-al-airlines": {
        ...gtSeo(
            "el al group booking",
            [
                "el al group travel discount",
                "el al group flight tickets",
                "book el al flights for group",
                "el al group fare policy",
            ],
            "EL AL Group Booking for 10+ Passengers",
            "EL AL Group Booking for 10+ Travelers | Free Quote",
            "Need EL AL group booking? Compare EL AL group fare policy, check group minimums and request a free group flight quote from our travel specialists. Call 24/7."
        ),
        highlights: [],
        onPageCopy:
            "Planning a travel package together with family members, friends, colleagues or even an organization? EL AL group travel bookings offer an effective solution in arranging flights for many travelers at once. Whether it is for business travel, study tours, religious trips, family reunion or leisure vacations, EL AL group travel booking packages are available for qualified travelers.",
        contentHtml: `
<p>Through Airline Group Travel, you will be introduced to group flight packages with EL AL, learn about various travel options, and make a request for group air fare quotations depending on your travel plans.</p>

<h2>Why travel with EL AL?</h2>
<p>Indeed, EL AL Israel Airlines takes its passengers to a variety of destinations through its vast international network. The group travel bookings of this airline are for group travel, quoting method in booking, and subject to discretion of the airline.</p>
<p>Some of the reasons that make EL AL a good choice for the next group trip include:</p>
<ul>
<li><strong>Group reservations:</strong> Investigate the specific reservations made by the group.</li>
<li><strong>Interline flights:</strong> Look into the flight routes and schedule to your desired destination.</li>
<li><strong>Group quotation of fare:</strong> Request a fare quote based on your itinerary, number of passengers and dates.</li>
<li><strong>Group coordination of reservations:</strong> Arrange for travel details using a group booking contact person.</li>
<li><strong>Cabin choices:</strong> Look into the availability of group travel in various cabin classes, including <a href="/business-class-booking/el-al/">business class</a>, if available.</li>
<li><strong>Group assistance with booking:</strong> Help with group quotations, payments and bookings.</li>
</ul>

<h2>EL AL Group Booking For 10 Or More Passengers</h2>
<p>The group agreement as published by EL AL defines a group as 10 or more passengers traveling in the same cabin of service. However, the specific requirements can differ according to the booking, market and itinerary, so it is important to review them when requesting a quotation.</p>
<p>EL AL group travel could suit:</p>
<ul>
<li>Educational institutions organizing trips for education purposes.</li>
<li>Sports teams organizing international matches.</li>
<li>Religious organizations organizing international travels.</li>
<li>Travel operators organizing travels for multiple people.</li>
</ul>
<p>If you are planning a journey for 10 people and above, inform us about your itinerary and group so we can advise which reservations would be suitable for you.</p>

<h2>Understanding the EL AL Group Travel Fares Policy</h2>
<p>In order to make a reservation, you should first learn about the <a href="/">EL AL group fare policy</a>. Group fares are quoted based on the itinerary of the travel and the conditions set by the airline.</p>
<p>Some key group booking conditions to take into consideration include:</p>
<ol>
<li>
<strong>Eligible Group Size</strong>
<p>According to the group agreement that is published, the minimum number of passengers should be 10 people in the same cabin.</p>
</li>
<li>
<strong>Group Fare Quotation</strong>
<p>A fare quoted for a group depends on availability and confirmation by an airline. It is not confirmation of allocation or securing of seats.</p>
</li>
<li>
<strong>Deposit and Payment</strong>
<p>If EL AL requires a deposit to book the group, the amount, method of payment and the deadline are indicated in the proposal or agreement.</p>
</li>
<li>
<strong>Passengers’ Information</strong>
<p>Passengers’ information, including names and other necessary trip details, should be provided within the deadlines informed by the airline. Check that all information corresponds to the travel documents of passengers.</p>
</li>
<li>
<strong>Ticket Issuing</strong>
<p>Tickets should be issued by the deadline provided in the group agreement. The deadline might differ depending on the itinerary and participation of other airlines.</p>
</li>
<li>
<strong>Changes and Cancellations</strong>
<p>The conditions for changes to passenger numbers, names, travel dates and cancellations are indicated in the group agreement.</p>
</li>
</ol>
<p>It is necessary to check the particular agreement before making payments.</p>

<h2>Is There an EL AL Group Travel Discount?</h2>
<p>Group travel could possibly qualify for discounted fares. Yet, an <a href="/deals">EL AL group travel discount</a> is not always available for all bookings and the exact fare will depend on variables like the route, the time of travel, number of seats, cabin, and the fare rules of the carrier.</p>
<p>In order to find possible group fare rates:</p>
<ul>
<li>Start inquiring early, especially when travelling during peak periods.</li>
<li>Give an accurate number of passengers and the travel details.</li>
<li>Give flexible dates of travel, if your group can afford it.</li>
<li>Compare flight timings and prices available.</li>
</ul>

<h2>How to Book EL AL Flights for a Group</h2>
<p>If you are wondering how to <a href="/contact">book EL AL flights for a group</a>, the first step is to get your trip plan ready and collect all the details about the people traveling. A group reservation usually goes through a process of getting a quote, then confirming it.</p>
<p>Follow these steps to start the process:</p>
<ol>
<li>
<strong>Step 1: Share Your Travel Needs</strong>
<p>Tell us where you are leaving from, where you are going, the dates you want to travel and how many people are in your group.</p>
</li>
<li>
<strong>Step 2: Choose Your Flight</strong>
<p>Say if you need a one-way trip, a round-trip or a trip with stops. You can also ask for what type of seat you want, like economy or business class.</p>
</li>
<li>
<strong>Step 3: Ask for a Special Group Discount Price</strong>
<p>Send your request through the Airlines Group Travel website. Then you can look at the options that fit your needs.</p>
</li>
<li>
<strong>Step 4: Look at the Offer</strong>
<p>Check the price that is offered, the flight times, how much you need to pay as a deposit, when you need to pay and what rules the airline has.</p>
</li>
<li>
<strong>Step 5: Finish the Booking</strong>
<p>When you agree with the terms, make the payment and give the details of all the travelers before the deadline.</p>
</li>
</ol>

<h2>Plan Your Next Group Trip with EL AL</h2>
<p>Whether you are organizing a family vacation, a business event, a student visit or a community outing, choosing the flight setup is an important part of planning group travel.</p>
<p>Explore EL AL group booking options with Airlines Group Travel. Request a quote based on your destination, travel dates and passenger needs.</p>
<p>Ready to plan your group travel? Call Airlines Group Travel at <a href="tel:+18339580151">+1-833-958-0151</a>.</p>

<h2>Frequently Asked Questions</h2>
<h3>1. What is the minimum number of people needed for EL AL group booking?</h3>
<p>EL AL’s group policy requires at least 10 people traveling in the same class of service. Rules may vary depending on the booking method or region, so be sure to check the details when requesting a group quote.</p>
<h3>2. Can I book EL AL group tickets for international flights?</h3>
<p>Yes. You may ask about eligible international group itineraries in EL AL’s available network. Flight options are based on destination, schedule and seat availability.</p>
<h3>3. What does the EL AL group fare policy include?</h3>
<p>Group fare policy covers: 1. Eligibility 2. Fare quote 3. Deposits 4. Payment deadlines 5. Passenger information 6. Ticket issuance 7. Changes/Cancellations. These are outlined in the group proposal or agreement.</p>
`.trim(),
    },

    "klm-airlines": gtSeo(
        "klm group booking",
        [
        "klm group travel policy",
        "klm group reservation",
        "klm group flight deals",
        "klm group ticket for 10 or more"
        ],
        "KLM Group Booking for 10+ Passengers",
        "KLM Group Booking: Fares, Policy & Free Group Quote",
        "Need KLM group booking? Compare KLM group travel policy, check group minimums and request a free group flight quote from our travel specialists. Call 24/7."
    ),
    "southwest-airlines": gtSeo(
        "southwest airlines group travel",
        [
        "southwest group booking number",
        "southwest group reservation policy",
        "southwest group flight quote",
        "southwest group travel discount"
        ],
        "Southwest Airlines Group Travel for 10+ Passengers",
        "Southwest Airlines Group Travel: Policy, Fares & Free Quote",
        "Book Southwest Airlines group travel for 10+ passengers. Compare Southwest group travel discount and get a free group flight quote from our specialists."
    ),
    "british-airways-airlines": gtSeo(
        "british airways group booking",
        [
        "british airways group travel desk",
        "british airways group fare",
        "ba group flight booking for 10 or more",
        "british airways group discount"
        ],
        "British Airways Group Booking for 10+ Passengers",
        "British Airways Group Booking: Policy, Fares & Free Quote",
        "Book British Airways group booking for 10+ passengers. Compare British Airways group discount and get a free group flight quote from our specialists. Call 24/7."
    ),
    "finnair-airlines": gtSeo(
        "finnair group booking",
        [
        "finnair group travel desk",
        "finnair group booking minimum passengers",
        "finnair group flight tickets for 10 or more",
        "finnair group fare policy"
        ],
        "Finnair Group Booking for 10+ Passengers",
        "Finnair Group Booking: Group Fares, Policy & Quote",
        "Need Finnair group booking? Compare Finnair group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "alaska-airlines": gtSeo(
        "alaska airlines group travel",
        [
        "alaska airlines group booking number",
        "alaska airlines group reservation policy",
        "alaska airlines group flight quote",
        "alaska airlines group discount"
        ],
        "Alaska Airlines Group Travel for 10+ Passengers",
        "Alaska Airlines Group Travel: Policy, Fares & Free Quote",
        "Book Alaska Airlines group travel for 10+ passengers. Compare Alaska Airlines group discount and get a free group flight quote from our specialists. Call 24/7."
    ),
    "jetblue-airlines": gtSeo(
        "jetblue group travel",
        [
        "jetblue group booking number",
        "jetblue group reservation policy",
        "jetblue group flight quote",
        "jetblue group travel discount"
        ],
        "JetBlue Group Travel for 10+ Passengers",
        "JetBlue Group Travel for 10+ Travelers | Free Quote",
        "Need JetBlue group travel? Compare JetBlue group travel discount, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "qatar-airways-airlines": gtSeo(
        "qatar airways group booking",
        [
        "qatar airways group travel desk",
        "qatar airways group fare policy",
        "qatar airways group flight tickets for 10 or more",
        "qatar airways group booking discount"
        ],
        "Qatar Airways Group Booking for 10+ Passengers",
        "Qatar Airways Group Booking: Policy, Fares & Free Quote",
        "Book Qatar Airways group booking for 10+ passengers. Compare Qatar Airways group fare policy and get a free group flight quote from our specialists. Call 24/7."
    ),
    "avianca-airlines": gtSeo(
        "avianca airlines group travel",
        [
        "avianca group booking number",
        "avianca group reservation policy",
        "avianca group flight quote",
        "avianca group travel discount"
        ],
        "Avianca Airlines Group Travel for 10+ Passengers",
        "Avianca Airlines Group Travel: Policy, Fares & Free Quote",
        "Book Avianca Airlines group travel for 10+ passengers. Compare Avianca group travel discount and get a free group flight quote from our specialists. Call 24/7."
    ),
    "emirates-airlines": gtSeo(
        "emirates group booking",
        [
        "emirates group travel desk",
        "emirates group fare policy",
        "emirates group flight tickets for 10 or more",
        "emirates group booking discount"
        ],
        "Emirates Group Booking for 10+ Passengers",
        "Emirates Group Booking: Policy, Fares & Free Quote",
        "Need Emirates group booking? Compare Emirates group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "air-france-airlines": gtSeo(
        "air france group booking",
        [
        "air france group travel desk",
        "air france group fare policy",
        "air france group flight booking for 10 or more",
        "air france group reservation policy"
        ],
        "Air France Group Booking for 10+ Passengers",
        "Air France Group Booking: Policy, Fares & Free Quote",
        "Need Air France group booking? Compare Air France group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "american-airlines": gtSeo(
        "american airlines group booking",
        [
        "american airlines group travel desk",
        "american airlines group booking minimum passengers",
        "american airlines group fare policy",
        "american airlines group flight discount"
        ],
        "American Airlines Group Booking for 10+ Passengers",
        "American Airlines Group Booking: Policy, Fares & Free Quote",
        "Book American Airlines group booking for 10+ passengers. Compare American Airlines group fare policy and get a free group flight quote from our specialists."
    ),
    "lufthansa-airlines": gtSeo(
        "lufthansa group booking",
        [
        "lufthansa group travel desk",
        "lufthansa group reservation policy",
        "lufthansa group flight tickets for 10 or more",
        "lufthansa group fare policy"
        ],
        "Lufthansa Group Booking for 10+ Passengers",
        "Lufthansa Group Booking: Policy, Fares & Free Quote",
        "Need Lufthansa group booking? Compare Lufthansa group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "swiss-air-airlines": gtSeo(
        "swiss air group booking",
        [
        "swiss airlines group travel desk",
        "swiss air group fare policy",
        "swiss air group flight booking for 10 or more",
        "swiss air group reservation policy"
        ],
        "Swiss Air Group Booking for 10+ Passengers",
        "Swiss Air Group Booking: Policy, Fares & Free Quote",
        "Need Swiss Air group booking? Compare Swiss Air group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "aeromexico-airlines": gtSeo(
        "aeromexico group booking",
        [
        "aeromexico group travel desk",
        "aeromexico group reservation policy",
        "aeromexico group flight quote",
        "aeromexico group fare policy"
        ],
        "Aeromexico Group Booking for 10+ Passengers",
        "Aeromexico Group Booking: Policy, Fares & Free Quote",
        "Need Aeromexico group booking? Compare Aeromexico group fare policy, check group minimums and request a free group flight quote from our travel specialists."
    ),
    "frontier-airlines": gtSeo(
        "frontier airlines group booking",
        [
        "frontier airlines group travel desk",
        "frontier airlines group reservation policy",
        "frontier airlines group flight quote",
        "frontier airlines group discount"
        ],
        "Frontier Airlines Group Booking for 10+ Passengers",
        "Frontier Airlines Group Booking: Policy, Fares & Free Quote",
        "Book Frontier Airlines group booking for 10+ passengers. Compare Frontier Airlines group discount and get a free group flight quote from our specialists."
    ),
    "copa-airlines": gtSeo(
        "copa airlines group booking",
        [
        "copa airlines group travel desk",
        "copa airlines group reservation policy",
        "copa airlines group flight tickets for 10 or more",
        "copa airlines group fare policy"
        ],
        "Copa Airlines Group Booking for 10+ Passengers",
        "Copa Airlines Group Booking: Policy, Fares & Free Quote",
        "Book Copa Airlines group booking for 10+ passengers. Compare Copa Airlines group fare policy and get a free group flight quote from our specialists. Call 24/7."
    ),
}


/** Business class pages — /business-class-booking/[slug] */
export const businessClassSeo = {
    "american-airlines": bcSeo(
        "american airlines business class booking",
        [
        "american airlines flagship business class",
        "aa business class deals",
        "cheap american airlines business class tickets"
        ],
        "American Airlines Business Class Booking: Fares, Deals & Support",
        "American Airlines Business Class Booking: Deals & Free Quote",
        "American Airlines business class made easy. Explore American Airlines Flagship business class and AA business class deals, then request a free quote. Call 24/7."
    ),
    "delta-airlines": bcSeo(
        "delta one business class booking",
        [
        "delta business class deals",
        "delta one cheap tickets",
        "delta business class group booking"
        ],
        "Delta One Business Class Booking: Fares, Deals & Support",
        "Delta One Business Class Booking: Deals, Fares & Free Quote",
        "Book Delta Air Lines business class tickets. Compare Delta business class deals and Delta One cheap tickets, then request a free quote from our specialists."
    ),
    "alaska-airlines": {
        ...bcSeo(
            "alaska airlines business class booking",
            [
                "alaska airlines first class vs business",
                "alaska business class deals",
                "alaska airlines premium class tickets",
            ],
            "Alaska Airlines Business Class Booking",
            "Alaska Airlines Business Class Booking | Deals & Free Quote",
            "Airline Group Bookings can help you see business class options with Alaska Airlines. Compare First Class, Premium Class, deals and fare terms, then request a free quote."
        ),
        highlights: [],
        onPageCopy:
            "Airline Group Bookings can help you see what options there are for flying in business class with Alaska Airlines. Whether you’re looking to book business travel, a family break or travelling with more people, our team can help you find the right flights and compare the terms and conditions of the fares.",
        contentHtml: `
<p>Booking a <a href="/group-travel/alaska-airlines/">business class flight with Alaska Airlines</a> gives you the flexibility to search for business class seats on the airline. Simply tell us where you’d like to fly from, where you’d like to go, your preferred dates and how many people you need to upgrade seats for. Our experts will help you look at the different seat options and times.</p>

<h2>How to book Alaska Airlines Business Class</h2>
<p>Booking your premium flight is made quick and easy using the following steps:</p>
<ol>
<li>Tell us where you’re travelling. Include your departure and arrival locations and preferred dates.</li>
<li>Tell us how many people you have upgrading to premium seats and those in other cabins.</li>
<li>Tell us any preferences you have such as your preferred flight times, maximum connections and budget.</li>
<li>Look at the seat options available. View the different seat products, times and terms and conditions.</li>
<li>Once you’ve found an option that fits your needs, contact our team for a quote.</li>
</ol>
<p>If you’re unsure what cabin to book, our team can help you understand the difference between <a href="/">Alaska Airlines first class vs business</a>.</p>

<h2>Alaska Airlines First Class vs Business</h2>
<p>Alaska Airlines primarily offers First Class seats within their premium cabin.</p>
<p>Some routes and aircraft have First Class seats whereas others have Premium Class which is an upgrade within the Economy cabin.</p>
<p>Consider the following before booking:</p>
<ul>
<li><strong>Seat Layout</strong> – What seats are available?</li>
<li><strong>Premium Class</strong> – Extra legroom and benefits.</li>
<li><strong>Food &amp; Drink</strong> – What food and drinks are available?</li>
<li><strong>Luggage</strong> – Luggage allowances.</li>
<li><strong>Flight Time</strong> – Is the extra comfort worth it?</li>
<li><strong>Flexibility</strong> – What are the terms for changes, cancellations and refunds?</li>
</ul>
<p>Depending on your route, aircraft, travel time and personal preferences you may want to choose the best option for you.</p>

<h2>Alaska Business Class Deals</h2>
<p>Premium seat prices can vary depending on when you are travelling, how busy the route is, and the availability of seats. Searching for <a href="/group-travel/alaska-airlines/">alaska Business Class deals</a> may be easier by finding the best date and flight times for you.</p>
<p>Our team can help you see what premium cabin options you have available and what is included in the price. Think about the comfort of the seats, luggage, flight times and flexibility of the ticket rather than just looking for the cheapest option.</p>
<p>To get the most relevant results for you, let us know what airports you want to fly from/to, when you want to travel and your budget. If you have flexible dates then you may have more options.</p>

<h2>Alaska Airlines Premium Class Tickets</h2>
<p>Not everyone will need First Class seats. Depending on your route and aircraft, <a href="/group-travel/alaska-airlines/">Alaska Airlines Premium Class tickets</a> may be a good option for you to upgrade your legroom within the Main Cabin.</p>
<p>Alaska Airlines Premium Class tickets usually offer extra legroom and a selection of benefits, however this will depend on the flight and any conditions. This is not First Class so make sure you know what is included.</p>
<p>Our team can help compare what seats you have available.</p>

<h2>Why Book Alaska Airlines Premium with Airline Group Bookings?</h2>
<p>Booking premium seats can involve a lot of details to consider, especially if you are flying with a group. Airline Group Bookings can help you compare options.</p>
<ul>
<li><strong>Personalised Help</strong> – Find the best flights for you.</li>
<li><strong>Travel with a group</strong> – Talk to us about your group travelling with some premium seats.</li>
<li><strong>Transparent Pricing</strong> – Know what the ticket conditions are.</li>
<li><strong>Compare First Class and Premium Class</strong> – If available.</li>
<li><strong>All in one place</strong> – Keep your travel requirements in one place and we can answer any follow up questions.</li>
</ul>
<p>Our team can help you find the best option for you whether it be for yourself or a larger group.</p>

<h2>Who can benefit from Alaska Airlines Premium Seats?</h2>
<p>Alaska Airlines premium seats may be a good option for:</p>
<ul>
<li>Business travellers and executives</li>
<li>Families traveling domestically or internationally</li>
<li>Wedding parties and celebrations</li>
<li>Sports teams and professionals</li>
<li>Those wanting extra comfort on longer flights</li>
<li>Those wanting to mix up their seating.</li>
</ul>
<p>If some people want First Class and others want to stay in the Main Cabin let us know the seat requirements.</p>

<h2>Top Tips for your booking</h2>
<p>A few top tips to make your journey easier:</p>
<ul>
<li><strong>Passengers</strong> – How many people need First Class or Premium Class seats.</li>
<li><strong>Seat Layout</strong> – What aircraft and seats are available.</li>
<li><strong>Luggage</strong> – What luggage allowances are available.</li>
<li><strong>Flight Times</strong> – Compare flight times.</li>
<li><strong>Conditions</strong> – What are the conditions for changes and cancellations.</li>
<li><strong>Passports &amp; Visas</strong> – International travel will require passports and visas.</li>
<li><strong>Dietary Requirements &amp; Accessibility</strong> – Let us know if you have any dietary requirements or accessibility requirements.</li>
</ul>
<p>Always double check what cabin and seats are available for your specific flight. Aircraft and flight times can change.</p>

<h2>FAQs</h2>
<h3>How do I book Alaska Airlines Business Class?</h3>
<p>Let us know what city you want to fly from, where you want to go, when you want to travel and how many people. Our team can help you look at premium seat options.</p>
<h3>Does Alaska Airlines have Business Class?</h3>
<p>Alaska Airlines mainly offers First Class, however they do offer Premium Class seats within the Main Cabin.</p>
<h3>What is the difference between First Class and Premium Class on Alaska Airlines?</h3>
<p>First Class is a separate cabin whereas Premium Class is within the Main Cabin. Premium Class usually has extra legroom and some benefits, however this depends on the aircraft and route.</p>
<h3>How do I find Alaska Business Class deals?</h3>
<p>Look at different dates, routes and seats. Prices will depend on how busy the route is and the availability. If you have flexible dates you may have more options.</p>
<h3>Can I book premium seats for multiple people?</h3>
<p>Yes you can! Let us know how many people you have in your group and how many people need upgrading.</p>
<h3>Are Alaska Airlines Premium Class tickets the same as First Class?</h3>
<p>No, Alaska Airlines Premium Class tickets are within the Main Cabin. First Class is a separate cabin.</p>
<h3>Can some people in my group fly in First Class and others in Economy?</h3>
<p>Yes, let us know how you want to split your cabins. This will depend on your route, flight, seat availability and booking conditions.</p>
`.trim(),
    },

    "lufthansa-airlines": bcSeo(
        "lufthansa business class booking",
        [
        "lufthansa business class deals USA",
        "cheap lufthansa business class tickets",
        "lufthansa business class group fare"
        ],
        "Lufthansa Business Class Booking: Fares, Deals & Support",
        "Lufthansa Business Class Booking: Deals, Fares & Free Quote",
        "Lufthansa business class made easy. Explore Lufthansa business class deals USA and cheap Lufthansa business class tickets, then request a free quote. Call 24/7."
    ),
    "klm": bcSeo(
        "klm business class booking",
        [
        "klm business class deals",
        "klm world business class tickets",
        "cheap klm business class flights"
        ],
        "KLM Business Class Booking: Fares, Deals & Support",
        "KLM Business Class Booking: Deals, Fares & Free Quote",
        "Book KLM business class tickets. Compare KLM business class deals and KLM World Business Class tickets, then request a free quote from our specialists."
    ),
    "el-al": bcSeo(
        "el al business class booking",
        [
        "el al business class new york to tel aviv",
        "el al business class deals from usa",
        "el al dreamliner business class tickets"
        ],
        "EL AL Business Class Booking: Fares, Deals & Support",
        "EL AL Business Class Booking: Deals, Fares & Free Quote",
        "EL AL business class made easy. Explore EL AL business class New York to Tel Aviv and EL AL business class deals from USA, then request a free quote. Call 24/7."
    ),
    "united-airlines": bcSeo(
        "united airlines business class booking",
        [
        "united polaris business class deals",
        "united polaris lounge business class tickets",
        "cheap united business class flights usa"
        ],
        "United Airlines Business Class Booking: Fares, Deals & Support",
        "United Airlines Business Class Booking | Deals & Free Quote",
        "United Airlines business class made easy. Explore United Polaris business class deals and cheap United business class flights USA, then request a free quote."
    ),
    "british-airways": bcSeo(
        "british airways business class booking",
        [
        "british airways business class new york to london",
        "ba club world deals from usa",
        "ba club suite business class tickets"
        ],
        "British Airways Business Class Booking: Fares, Deals & Support",
        "British Airways Business Class Booking | Deals & Free Quote",
        "British Airways business class made easy. Explore British Airways business class New York to London and BA Club World deals from USA, then request a free quote."
    ),
    "aeromexico-clase-premier": bcSeo(
        "aeromexico business class booking",
        [
        "aeromexico clase premier deals",
        "aeromexico business class usa to mexico city",
        "cheap aeromexico business class flights"
        ],
        "Aeromexico Business Class Booking: Fares, Deals & Support",
        "Aeromexico Business Class Booking: Deals, Fares & Free Quote",
        "Aeromexico business class made easy. Explore Aeromexico Clase Premier deals and Aeromexico business class USA to Mexico City, then request a free quote."
    ),
    "qatar-airways": bcSeo(
        "qatar airways business class booking",
        [
        "qatar airways qsuite from usa",
        "qatar business class new york to doha",
        "cheap qatar airways business class flights"
        ],
        "Qatar Airways Business Class Booking: Fares, Deals & Support",
        "Qatar Airways Business Class Booking | Deals & Free Quote",
        "Qatar Airways business class made easy. Explore Qatar Airways Qsuite from USA and Qatar business class New York to Doha, then request a free quote. Call 24/7."
    ),
    "emirates-airlines": bcSeo(
        "emirates business class booking",
        [
        "emirates business class new york to dubai",
        "emirates business class deals from usa",
        "emirates a380 business class tickets"
        ],
        "Emirates Business Class Booking: Fares, Deals & Support",
        "Emirates Business Class Booking: Deals, Fares & Free Quote",
        "Emirates business class made easy. Explore Emirates business class New York to Dubai and Emirates business class deals from USA, then request a free quote."
    ),
    "air-france": bcSeo(
        "air france business class booking",
        [
        "air france business class usa to paris",
        "air france business class deals from new york",
        "air france lie flat business class tickets"
        ],
        "Air France Business Class Booking: Fares, Deals & Support",
        "Air France Business Class Booking: Deals, Fares & Free Quote",
        "Air France business class made easy. Explore Air France business class USA to Paris and Air France lie flat business class tickets, then request a free quote."
    ),
    "turkish-airlines": bcSeo(
        "turkish airlines business class booking",
        [
        "turkish airlines business class usa to istanbul",
        "turkish business class deals from new york",
        "cheap turkish airlines business class flights"
        ],
        "Turkish Airlines Business Class Booking: Fares, Deals & Support",
        "Turkish Airlines Business Class Booking | Deals & Free Quote",
        "Book Turkish Airlines business class tickets. Compare Turkish Airlines business class USA to Istanbul, then request a free quote from our specialists."
    ),
    "singapore-airlines": bcSeo(
        "singapore airlines business class booking",
        [
        "singapore airlines business class from usa",
        "singapore airlines new york to singapore business class",
        "singapore airlines book the cook business class"
        ],
        "Singapore Airlines Business Class Booking: Fares, Deals & Support",
        "Singapore Airlines Business Class Booking | Get a Free Quote",
        "Book Singapore Airlines business class tickets. Compare Singapore Airlines business class from USA, then request a free quote from our specialists. Call 24/7."
    ),
    "swiss-airlines": bcSeo(
        "swiss airlines business class booking",
        [
        "swiss business class usa to zurich",
        "swiss business class deals from new york",
        "swiss lie flat business class tickets"
        ],
        "Swiss Airlines Business Class Booking: Fares, Deals & Support",
        "Swiss Airlines Business Class Booking | Deals & Free Quote",
        "Swiss Airlines business class made easy. Explore Swiss business class USA to Zurich and Swiss business class deals from New York, then request a free quote."
    ),
    "japan-airlines": bcSeo(
        "japan airlines business class booking",
        [
        "jal business class usa to tokyo",
        "jal business class los angeles to tokyo",
        "jal sky suite business class deals"
        ],
        "Japan Airlines Business Class Booking: Fares, Deals & Support",
        "Japan Airlines Business Class Booking | Deals & Free Quote",
        "Japan Airlines business class made easy. Explore JAL business class USA to Tokyo and JAL business class Los Angeles to Tokyo, then request a free quote."
    ),
    "hawaiian-airlines": bcSeo(
        "hawaiian airlines business class booking",
        [
        "hawaiian business class los angeles to honolulu",
        "hawaiian airlines business class from usa mainland",
        "hawaiian leihoku suites tickets"
        ],
        "Hawaiian Airlines Business Class Booking: Fares, Deals & Support",
        "Hawaiian Airlines Business Class Booking: Deals & Free Quote",
        "Book Hawaiian Airlines business class tickets. Compare Hawaiian business class Los Angeles to Honolulu, then request a free quote from our specialists."
    ),
    "copa-airlines": bcSeo(
        "copa airlines business class booking",
        [
        "copa airlines business class miami to panama city",
        "copa airlines dreams business class",
        "cheap copa business class flights usa"
        ],
        "Copa Airlines Business Class Booking: Fares, Deals & Support",
        "Copa Airlines Business Class Booking | Deals & Free Quote",
        "Copa Airlines business class made easy. Explore Copa Airlines Dreams business class and cheap Copa business class flights USA, then request a free quote."
    ),
    "etihad-airways": bcSeo(
        "etihad airways business class booking",
        [
        "etihad business class new york to abu dhabi",
        "etihad business class deals from usa",
        "etihad business studio tickets"
        ],
        "Etihad Airways Business Class Booking: Fares, Deals & Support",
        "Etihad Airways Business Class Booking | Deals & Free Quote",
        "Etihad Airways business class made easy. Explore Etihad business class New York to Abu Dhabi and Etihad Business Studio tickets, then request a free quote."
    ),
    "eva-air": bcSeo(
        "eva air business class booking",
        [
        "eva air business class los angeles to taipei",
        "eva air business class from usa",
        "eva air royal laurel business class deals"
        ],
        "EVA Air Business Class Booking: Fares, Deals & Support",
        "EVA Air Business Class Booking: Deals, Fares & Free Quote",
        "EVA Air business class made easy. Explore EVA Air business class Los Angeles to Taipei and EVA Air business class from USA, then request a free quote."
    ),
    "cathay-pacific": bcSeo(
        "cathay pacific business class booking",
        [
        "cathay pacific business class usa to hong kong",
        "cathay business class los angeles to hong kong",
        "cathay pacific aria suite tickets"
        ],
        "Cathay Pacific Business Class Booking: Fares, Deals & Support",
        "Cathay Pacific Business Class Booking | Deals & Free Quote",
        "Book Cathay Pacific business class tickets. Compare Cathay Pacific business class USA to Hong Kong, then request a free quote from our specialists. Call 24/7."
    ),
    "finnair": bcSeo(
        "finnair business class booking",
        [
        "finnair business class usa to helsinki",
        "finnair business class new york to helsinki",
        "finnair airlounge business class deals"
        ],
        "Finnair Business Class Booking: Fares, Deals & Support",
        "Finnair Business Class Booking: Deals, Fares & Free Quote",
        "Finnair business class made easy. Explore Finnair business class USA to Helsinki and Finnair business class New York to Helsinki, then request a free quote."
    ),
    "air-canada": bcSeo(
        "air canada business class booking",
        [
        "air canada business class usa to toronto",
        "air canada signature class from usa",
        "cheap air canada business class flights"
        ],
        "Air Canada Business Class Booking: Fares, Deals & Support",
        "Air Canada Business Class Booking: Deals, Fares & Free Quote",
        "Air Canada business class made easy. Explore Air Canada business class USA to Toronto and Air Canada Signature Class from USA, then request a free quote."
    ),
    "iberia-airlines": bcSeo(
        "iberia airlines business class booking",
        [
        "iberia business class usa to madrid",
        "iberia business class deals from new york",
        "cheap iberia business class flights"
        ],
        "Iberia Airlines Business Class Booking: Fares, Deals & Support",
        "Iberia Airlines Business Class Booking | Deals & Free Quote",
        "Iberia Airlines business class made easy. Explore Iberia business class USA to Madrid and Iberia business class deals from New York, then request a free quote."
    ),
    "aer-lingus": bcSeo(
        "aer lingus business class booking",
        [
        "aer lingus business class usa to dublin",
        "aer lingus business class new york to dublin",
        "aer lingus business class deals"
        ],
        "Aer Lingus Business Class Booking: Fares, Deals & Support",
        "Aer Lingus Business Class Booking: Deals, Fares & Free Quote",
        "Aer Lingus business class made easy. Explore Aer Lingus business class USA to Dublin and Aer Lingus business class deals, then request a free quote. Call 24/7."
    ),
    "all-nippon-airways": bcSeo(
        "ana business class booking",
        [
        "ana business class usa to tokyo",
        "ana business class los angeles to tokyo",
        "ana the room business class deals"
        ],
        "ANA Business Class Booking: Fares, Deals & Support",
        "ANA Business Class Booking: Deals, Fares & Free Quote",
        "Book ANA business class booking with expert help. See ANA business class USA to Tokyo and ANA business class Los Angeles to Tokyo, then get a free quote online."
    ),
    "fiji-airways": bcSeo(
        "fiji airways business class booking",
        [
        "fiji airways business class los angeles to nadi",
        "fiji airways business class from usa",
        "fiji airways a350 business class tickets"
        ],
        "Fiji Airways Business Class Booking: Fares, Deals & Support",
        "Fiji Airways Business Class Booking | Deals & Free Quote",
        "Fiji Airways business class made easy. Explore Fiji Airways business class from USA and Fiji Airways A350 business class tickets, then request a free quote."
    ),
    "southwest-airlines": bcSeo(
        "southwest airlines business select booking",
        [
        "southwest business select fare benefits",
        "southwest business select vs anytime",
        "southwest business select a1 a15 boarding"
        ],
        "Southwest Airlines Business Select Booking: Fares, Deals & Support",
        "Southwest Airlines Business Select Booking | Free Quote",
        "Book Southwest Airlines business class tickets. Compare Southwest Business Select fare benefits, then request a free quote from our specialists. Call 24/7."
    ),
    "avianca-airlines": bcSeo(
        "avianca airlines business class booking",
        [
        "avianca insignia business class deals",
        "avianca business class usa to colombia",
        "cheap avianca business class flights"
        ],
        "Avianca Airlines Business Class Booking: Fares, Deals & Support",
        "Avianca Airlines Business Class Booking | Deals & Free Quote",
        "Avianca Airlines business class made easy. Explore Avianca Insignia business class deals and Avianca business class USA to Colombia, then request a free quote."
    ),
    "thai-airways": bcSeo(
        "thai airways business class booking",
        [
        "thai airways business class usa to bangkok",
        "thai airways royal silk class deals",
        "cheap thai airways business class flights"
        ],
        "Thai Airways Business Class Booking: Fares, Deals & Support",
        "Thai Airways Business Class Booking | Deals & Free Quote",
        "Thai Airways business class made easy. Explore Thai Airways business class USA to Bangkok and Thai Airways Royal Silk Class deals, then request a free quote."
    ),
    "qantas-airways": bcSeo(
        "qantas business class booking",
        [
        "qantas business class usa to sydney",
        "qantas business class los angeles to sydney",
        "qantas business class deals"
        ],
        "Qantas Business Class Booking: Fares, Deals & Support",
        "Qantas Business Class Booking: Deals, Fares & Free Quote",
        "Qantas Airways business class made easy. Explore Qantas business class USA to Sydney and Qantas business class Los Angeles to Sydney, then request a free quote."
    ),
    "tap-air-portugal": bcSeo(
        "tap air portugal business class booking",
        [
        "tap business class usa to lisbon",
        "tap business class new york to lisbon",
        "tap executive business class deals"
        ],
        "TAP Air Portugal Business Class Booking: Fares, Deals & Support",
        "TAP Air Portugal Business Class Booking | Deals & Free Quote",
        "TAP Air Portugal business class made easy. Explore TAP business class USA to Lisbon and TAP business class New York to Lisbon, then request a free quote."
    ),
    "latam-airlines": bcSeo(
        "latam airlines business class booking",
        [
        "latam business class miami to south america",
        "latam premium business class deals",
        "cheap latam business class flights usa"
        ],
        "LATAM Airlines Business Class Booking: Fares, Deals & Support",
        "LATAM Airlines Business Class Booking | Deals & Free Quote",
        "LATAM Airlines business class made easy. Explore LATAM business class Miami to South America and LATAM premium business class deals, then request a free quote."
    ),
    "tarom-airlines": bcSeo(
        "tarom business class booking",
        [
        "tarom business class usa to bucharest",
        "tarom business class deals",
        "cheap tarom business class flights"
        ],
        "TAROM Business Class Booking: Fares, Deals & Support",
        "TAROM Business Class Booking: Deals, Fares & Free Quote",
        "Book TAROM business class booking with expert help. See TAROM business class USA to Bucharest and TAROM business class deals, then get a free quote online."
    ),
    "icelandair": bcSeo(
        "icelandair business class booking",
        [
        "icelandair saga premium deals",
        "icelandair saga premium vs economy",
        "icelandair business class usa"
        ],
        "Icelandair Business Class Booking: Fares, Deals & Support",
        "Icelandair Business Class Booking: Deals, Fares & Free Quote",
        "Book Icelandair business class booking with expert help. See Icelandair Saga Premium deals and Icelandair Saga Premium vs economy, then get a free quote online."
    ),
    "bulgaria-air": bcSeo(
        "bulgaria air business class booking",
        [
        "bulgaria air business class usa to sofia",
        "bulgaria air business class deals",
        "cheap bulgaria air business class flights"
        ],
        "Bulgaria Air Business Class Booking: Fares, Deals & Support",
        "Bulgaria Air Business Class Booking | Deals & Free Quote",
        "Bulgaria Air business class made easy. Explore Bulgaria Air business class USA to Sofia and Bulgaria Air business class deals, then request a free quote."
    ),
    "aerolineas-argentinas": bcSeo(
        "aerolineas argentinas business class booking",
        [
        "aerolineas argentinas business class miami to buenos aires",
        "aerolineas argentinas club condor deals",
        "cheap aerolineas argentinas business class flights"
        ],
        "Aerolineas Argentinas Business Class Booking: Fares, Deals & Support",
        "Aerolineas Argentinas Business Class Booking | Free Quote",
        "Aerolineas Argentinas business class made easy. Explore Aerolineas Argentinas business class Miami to Buenos Aires, then request a free quote. Call 24/7."
    ),
}


export function fallbackGroupTravelSeo(name) {
    return gtSeo(
        `${name} group booking`,
        [`${name.toLowerCase()} group travel desk`, `${name.toLowerCase()} group fare policy`, `${name.toLowerCase()} group flight quote`],
        `${name} Group Booking`,
        `${name} Group Booking`,
        `Need ${name} group booking? Compare group fare policy, check group minimums and request a free group flight quote from ${BRAND}.`
    )
}

export function fallbackBusinessClassSeo(name) {
    return bcSeo(
        `${name} business class booking`,
        [`${name.toLowerCase()} business class deals`, `cheap ${name.toLowerCase()} business class tickets`],
        `${name} Business Class Booking`,
        `${name} Business Class Booking`,
        `Book ${name} business class tickets. Compare deals and fares, then request a free quote from ${BRAND}.`
    )
}

export { BRAND }
