const blogs = [
    {
        slug: 'plan-flights-large-group',
        title: 'How to Plan Flights for a Large Group',
        category: 'Group travel guide',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85',
        excerpt: 'A few early decisions can make coordinating a group journey easier.', publishedAt: 'Travel planning guide',
        sections: [{
            title: 'Start with the essentials',
            paragraphs: ['Set a destination, date range, and a realistic estimate of your traveler count. These basics help you compare suitable schedules and understand the options available to your group.']
        },

        {
            title: 'Choose a group organizer',
            paragraphs: ['One point of contact can gather traveler information, share deadlines, and keep the group aligned as plans develop.']
        },
        {
            title: 'Review the quote carefully',
            paragraphs: ['Compare schedules, connections, baggage, payment milestones, and fare conditions. Make sure everyone understands the deadlines before confirming.']
        }]
    },

    {
        slug: 'group-air-travel-checklist',
        title: 'What to Know Before Booking Group Air Travel',
        category: 'Planning tips',

        image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1400&q=85',

        excerpt: 'Understand the details to compare when reviewing group flight options.', publishedAt: 'Booking checklist',
        sections: [{
            title: 'Know your travel window',
            paragraphs: ['If your dates are flexible, share a range instead of a single departure day. This may help your specialist look across more schedules.']
        },
        {
            title: 'Ask about the fare rules',
            paragraphs: ['Group proposals can have specific deposit, payment, name submission, and ticketing deadlines. Ask for these conditions in writing.']
        },
        {
            title: 'Plan for traveler needs',
            paragraphs: ['Collect accessibility requests and other important preferences early, then ask how they can be accommodated on the proposed itinerary.']
        }]
    },
    {
        slug: 'team-trip-planning',
        title: 'Make the Most of Your Next Team Trip',
        category: 'Travel inspiration',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=85',
        excerpt: 'Plan a team offsite with clear priorities, a balanced schedule, and time for meaningful connection.',
        publishedAt: 'Team travel ideas',
        sections: [
            {
                title: 'Start with what your team needs',
                paragraphs: [
                    'A useful offsite begins with a clear purpose. Decide whether the priority is planning, collaboration, training or simply giving the team time together. That decision will guide the destination, schedule and kind of meeting space you need.',
                    'Share the essentials early: dates, group size, room requirements and any equipment or meal preferences. A short brief makes it easier to compare options and keep the practical details from taking over the agenda.'
                ]
            },
            {
                title: 'Balance structure with breathing room',
                paragraphs: [
                    'Leave space between sessions and avoid filling every part of the day. Breaks help people reset, and informal conversations can be just as valuable as the sessions on the schedule.',
                    'A change of setting can help a team see familiar questions differently. Choose a venue that supports the work, then give everyone enough time to enjoy being away from the office.'
                ]
            }
        ]
    },
]

export default blogs
