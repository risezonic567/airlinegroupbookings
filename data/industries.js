/** Group-travel industry landing pages (manager redesign brief). */
const industries = [
    {
        slug: 'sports-teams',
        name: 'Sports Teams',
        navLabel: 'Sports Teams',
        eyebrow: 'Sports group travel',
        title: 'Group Flight Booking for Sports Teams',
        description:
            'Coordinate flights for teams, coaches, and supporters traveling to tournaments and events. Share your route, dates, and roster size for a clear group quote.',
        highlights: [
            'Same itinerary for the full squad when inventory allows',
            'Help with sports equipment and baggage planning',
            'Flexible name-list timing based on airline rules',
        ],
    },
    {
        slug: 'corporate-groups',
        name: 'Corporate Groups',
        navLabel: 'Corporate Groups',
        eyebrow: 'Corporate group travel',
        title: 'Group Flight Booking for Corporate Teams',
        description:
            'Plan flights for offsites, conferences, and company travel. One organizer, clear options, and practical next steps for your committee.',
        highlights: [
            'Support for multi-city departures when needed',
            'Cabin mix options for leadership and teams',
            'Written quotes for internal approval',
        ],
    },
    {
        slug: 'schools-universities',
        name: 'Schools & Universities',
        navLabel: 'Schools & Universities',
        eyebrow: 'Education group travel',
        title: 'Group Flight Booking for Schools & Universities',
        description:
            'Organize student and faculty group flights for trips, competitions, and campus programs with clear deadlines and passenger coordination.',
        highlights: [
            'Group-friendly booking timelines for schools',
            'Help collecting passenger details before ticketing',
            'Guidance on fare rules and payment milestones',
        ],
    },
    {
        slug: 'medical-groups',
        name: 'Medical Groups',
        navLabel: 'Medical Groups',
        eyebrow: 'Medical group travel',
        title: 'Group Flight Booking for Medical & Conference Travel',
        description:
            'Support medical teams and conference groups who need coordinated flights, clear schedules, and reliable communication for every traveler.',
        highlights: [
            'Aligned arrival windows for conferences and rotations',
            'Notes for special assistance when shared early',
            'Dedicated quote support for organizers',
        ],
    },
    {
        slug: 'church-faith-groups',
        name: 'Church & Faith Groups',
        navLabel: 'Church & Faith Groups',
        eyebrow: 'Faith group travel',
        title: 'Group Flight Booking for Church & Faith Groups',
        description:
            'Plan pilgrimage and congregation travel with shared itineraries, clear quotes, and support for organizers managing larger parties.',
        highlights: [
            'Group seating and schedule coordination',
            'Help for mixed age groups and families',
            'Transparent fare conditions before you commit',
        ],
    },
    {
        slug: 'events-concerts',
        name: 'Events & Concerts',
        navLabel: 'Events & Concerts',
        eyebrow: 'Events group travel',
        title: 'Group Flight Booking for Events & Concerts',
        description:
            'Bring attendees, performers, and crews in on aligned flights around fixed event dates with practical booking milestones.',
        highlights: [
            'Date-driven planning around show schedules',
            'Options for supporters traveling together',
            'Clear ticketing deadlines for organizers',
        ],
    },
    {
        slug: 'family-groups',
        name: 'Family Groups',
        navLabel: 'Family Groups',
        eyebrow: 'Family group travel',
        title: 'Group Flight Booking for Family & Friends',
        description:
            'Coordinate reunions, celebrations, and multi-family trips so everyone can plan around the same flights and dates.',
        highlights: [
            'Shared itinerary planning for larger parties',
            'Flexible date ranges when the group allows',
            'Simple quote process for the family organizer',
        ],
    },
]

export function getIndustryBySlug(slug) {
    return industries.find((item) => item.slug === slug) || null
}

export default industries
