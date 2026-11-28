/**
 * Structured content for individual deal pages.
 * Supports the SEO UI layout: Hero, Trust Bar, Intro + Who We Help,
 * How It Works, Callout Box, Tips Before You Book, Trip Form, FAQs, and More Deals.
 */

export const dealsContent = {
  'sports-group-travel-deals': {
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://airlinegroupbookings.com/#organization',
          'name': 'Airline Group Bookings',
          'url': 'https://airlinegroupbookings.com/',
        },
        {
          '@type': 'WebSite',
          '@id': 'https://airlinegroupbookings.com/#website',
          'url': 'https://airlinegroupbookings.com/',
          'name': 'Airline Group Bookings',
          'publisher': {
            '@id': 'https://airlinegroupbookings.com/#organization',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#webpage',
          'url': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/',
          'name': 'Sports Team Group Flight Booking',
          'description':
            'Book group flights for sports teams, schools, colleges, clubs and supporter groups. Get assistance with tournament travel, sports equipment baggage and group flight arrangements.',
          'isPartOf': {
            '@id': 'https://airlinegroupbookings.com/#website',
          },
          'about': {
            '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#service',
          },
          'breadcrumb': {
            '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#breadcrumb',
          },
          'mainEntity': {
            '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#service',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#service',
          'name': 'Sports Team Group Flight Booking',
          'serviceType': 'Group Flight Booking and Sports Team Travel Assistance',
          'description':
            'Group flight booking assistance for youth sports teams, schools, colleges, universities, local sports clubs, leagues and fan groups travelling to tournaments and sporting events.',
          'provider': {
            '@id': 'https://airlinegroupbookings.com/#organization',
          },
          'url': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/',
          'areaServed': {
            '@type': 'Country',
            'name': 'United States',
          },
          'audience': {
            '@type': 'Audience',
            'audienceType': 'Sports teams, schools, colleges, sports clubs and supporter groups',
          },
          'availableChannel': {
            '@type': 'ServiceChannel',
            'servicePhone': {
              '@type': 'ContactPoint',
              'telephone': '+1-833-958-0151',
              'contactType': 'group booking support',
              'availableLanguage': [
                'English',
                'Spanish',
                'French',
                'German',
                'Italian',
                'Portuguese',
                'Hindi',
                'Arabic',
                'Chinese',
              ],
              'hoursAvailable': {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                'opens': '00:00',
                'closes': '23:59',
              },
            },
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://airlinegroupbookings.com/',
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Deals',
              'item': 'https://airlinegroupbookings.com/deals',
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Sports Team Group Flight Booking',
              'item': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://airlinegroupbookings.com/deals/sports-group-travel-deals/#faq',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How many travellers do we need for a group booking?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Many airlines start their group programs at around 10 passengers, but the minimum depends on the airline and the route. Contact us with your group size to check the applicable requirements.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Can we book group flights for a youth sports team?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Yes. We help with youth and school teams, including coaches and chaperones. Airline rules for minors can differ, so we explain the applicable requirements before booking.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Can we book for a high school or college team?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Yes. Schools and athletic departments can request group flight bookings for away fixtures, tournaments and championship trips.',
              },
            },
            {
              '@type': 'Question',
              'name': 'What about sports equipment?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Sports equipment is often allowed, but size restrictions, weight limits and additional fees depend on the airline and the equipment. Tell us what your team plans to bring so we can check the rules before booking.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Can names be changed after the booking is made?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Sometimes, up to a specified deadline. Name change rules depend on the airline and fare type, so we confirm the applicable conditions before payment.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Do you help cricket teams and other club sports?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Yes. We assist cricket, rugby, hockey and other sports clubs with group flight arrangements for series, cup competitions and championships.',
              },
            },
            {
              '@type': 'Question',
              'name': "We're a fan group, not a team. Can we still request a quote?",
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Absolutely. Supporter groups, friends and families travelling together to away games or finals can also request a group flight quote.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Is there someone I can talk to if plans change?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text':
                  'Our group booking support line is available 24/7, and our team speaks 9 languages to assist groups travelling internationally.',
              },
            },
          ],
        },
      ],
    },
    metaTitle: 'Sports Team Group Flight Booking | Airline Group Bookings',
    metaDescription:
      "Getting a whole squad to a tournament shouldn't take more time than the tournament itself. Group flights for sports teams, schools, clubs, and supporter groups.",
    eyebrow: 'SPORTS TRAVEL',
    h1: 'Sports Team Group Flight Booking',
    heroSubtitle:
      "Getting a whole squad to a tournament shouldn't take more time than the tournament itself. Tell us the destination, dates and group size.",
    image: '/images/deals/SPORTS GROUP TRAVEL.jpg.jpeg',
    imageCaption: 'Youth team with kit bags at the airport',
    introHeading: 'You’re the coach, not the travel agent',
    introParagraphs: [
      "The fixtures are out, the venue is three states away, and suddenly you have to figure out how twenty people will get there on time with all their gear. We help teams, clubs, schools and supporter groups plan group flights, and we'll tell you honestly what works for your dates.",
    ],
    whoWeHelpHeading: 'Who we help',
    whoWeHelp: [
      {
        letter: 'Y',
        title: 'Youth & school teams',
        desc: 'Players, coaches, chaperones and parents, all with questions.',
      },
      {
        letter: 'C',
        title: 'College teams',
        desc: 'Athletic departments with schedules that can’t move.',
      },
      {
        letter: 'L',
        title: 'Clubs & leagues',
        desc: 'Cricket, rugby, hockey and more, for a series or a final.',
      },
      {
        letter: 'F',
        title: 'Fan groups',
        desc: 'Friends and families flying together to an away game.',
      },
    ],
    howItWorksHeading: 'How group flight booking works',
    howItWorks: [
      {
        num: '1',
        title: 'Tell us the trip',
        desc: 'Destination, dates, group size, departure cities. Rough numbers are fine.',
      },
      {
        num: '2',
        title: 'We find options',
        desc: 'We check airline group programs for your route and share what fits.',
      },
      {
        num: '3',
        title: 'You read the terms',
        desc: 'Fares, baggage, change rules and deadlines, explained before you commit.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'Once the group agrees, we guide the booking and passenger details.',
      },
    ],
    howItWorksNote:
      'A quick note: group rules differ a lot between airlines. Minimum group size, deposit amounts and the date by which you must submit names are not the same everywhere. We’ll tell you the exact terms for your trip rather than a one-size-fits-all rule.',
    calloutBox: {
      eyebrow: 'A TYPICAL TRIP',
      title: 'Fourteen players, two coaches, a dozen parents',
      text: 'A club under-14 side qualifies for a weekend tournament. Some families live near the main airport, others are ninety minutes away, a few kids carry full kit bags, and one family wants an extra day. Nothing unusual, and still a lot of moving parts. We turn it into a plan.',
    },
    tipsHeading: 'Tips before you book',
    tips: [
      {
        title: 'Ask about equipment first',
        desc: 'Bat bags, hockey sticks, goalkeeper gloves, tripods, cones. Airlines handle sports gear differently, and extra fees can quietly grow larger than the ticket price. Checking sports equipment baggage rules on group flights early saves real money.',
      },
      {
        title: 'Don’t land at the last minute',
        desc: 'A flight that lands three hours before kick-off looks fine on paper until it gets delayed. Arriving the day before costs a little more but protects the whole trip.',
      },
      {
        title: 'Know the name-change rules',
        desc: 'Players get injured. Families change plans. Before you pay any deposit, find out how roster changes work and by what date they need to be made.',
      },
      {
        title: 'Pick one coordinator',
        desc: 'When coaches, parents and managers all message separately, details get lost. One point of contact keeps things simple on your side and ours.',
      },
      {
        title: 'Think about mixed departure cities',
        desc: 'Not everyone has to leave from the same airport. Sometimes the easier answer is getting people to the same destination at around the same time.',
      },
      {
        title: 'Start as soon as dates are confirmed',
        desc: 'The earlier you ask, the more choices a larger group usually has.',
      },
    ],
    formHeading: 'Tell us about your trip',
    formSubtitle: 'No final headcount needed. Share the basics and we’ll start from there.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'How many travellers do we need for a group booking?',
        answer:
          'Many airlines start their group programs at around 10 passengers, but the minimum depends on the airline and the route. Send us your numbers and we’ll check what applies.',
      },
      {
        question: 'Can we book group flights for a youth sports team?',
        answer:
          'Yes. We help with youth and school teams, including coaches and chaperones. Airline rules for minors can differ, so we’ll go through them with you before anything is confirmed.',
      },
      {
        question: 'Can we book for a high school or college team?',
        answer:
          'Yes. Schools and athletic departments book with us for away fixtures, tournaments and championship trips.',
      },
      {
        question: 'What about sports equipment?',
        answer:
          'Equipment is often allowed, but size, weight limits and fees depend on the airline and the item. Tell us what you’re bringing and we’ll check before you book.',
      },
      {
        question: 'Can names be changed after the booking is made?',
        answer:
          'Sometimes, up to a deadline. It depends on the airline and the fare type, so we’ll confirm the rules before you pay.',
      },
      {
        question: 'Do you help cricket teams and other club sports?',
        answer:
          'Yes. Cricket, rugby, hockey and other club sides travel with us for series, cups and championships.',
      },
      {
        question: 'We’re a fan group, not a team. Can we still request a quote?',
        answer:
          'Absolutely. Supporter groups flying to an away game or final request quotes the same way.',
      },
      {
        question: 'Is there someone I can talk to if plans change?',
        answer:
          'Our group booking support line is open 24/7, and our team speaks 9 languages, which helps when your group is travelling internationally.',
      },
    ],
  },

  'black-friday-travel-deals': {
    schema: {
         "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#webpage",
      "url": "https://airlinegroupbookings.com/black-friday-group-flight-booking/",
      "name": "Black Friday Group Flight Booking",
      "description": "Plan group flights around Black Friday and Thanksgiving with Airline Group Bookings. Get assistance with family trips, shopping weekends, reunions and holiday group travel.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#service",
      "name": "Black Friday Group Flight Booking",
      "serviceType": "Black Friday and Thanksgiving Group Flight Booking Assistance",
      "description": "Group flight booking assistance for families, friends, businesses, school groups and organisations travelling during Black Friday and Thanksgiving. Get help comparing group flight options, understanding fare conditions, baggage allowances and payment deadlines.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/black-friday-group-flight-booking/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Families, friends, reunions, businesses, teams and organisations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "group booking support"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Black Friday Group Flight Booking",
          "item": "https://airlinegroupbookings.com/black-friday-group-flight-booking/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/black-friday-group-flight-booking/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are group flights cheaper around Black Friday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Airline sales and group fares work differently, and prices depend on your route, travel dates and seat availability. We check the available options for your trip and explain the applicable fare conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How many people count as a group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many airlines start their group booking programs at around 10 passengers, although the minimum varies by airline and route. Contact us with your group size to confirm the applicable requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How early should we book for Thanksgiving week?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You should request a group flight booking as soon as your travel plans are confirmed. Thanksgiving is a busy travel period, and booking early can provide more flight and seating options for larger groups."
          }
        },
        {
          "@type": "Question",
          "name": "Can our group fly from different cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Groups can request travel arrangements from different departure cities. We can look at available options to help everyone reach the same destination at approximately the same time."
          }
        },
        {
          "@type": "Question",
          "name": "Can passenger names be changed later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, passenger names can be changed up to a specified deadline. The rules depend on the airline and fare conditions. We check the applicable terms before payment."
          }
        },
        {
          "@type": "Question",
          "name": "Is this only for companies and teams, or can families and friends book too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Families and friends can also request group flight bookings. Our service supports family gatherings, shopping weekends, reunions, celebrations, businesses, teams and other group travel arrangements."
          }
        }
      ]
    }
  ]

},
    metaTitle: 'Black Friday Group Flight Booking | Airline Group Bookings',
    metaDescription:
      "Planning a group trip around Black Friday or Thanksgiving? Share your dates and route and we'll check group flight options for your party. Get a quote.",
    eyebrow: 'SEASONAL TRAVEL',
    h1: 'Black Friday Group Flight Booking',
    heroSubtitle:
      "Planning a group trip around Black Friday or Thanksgiving? Share your dates and route and we'll check group flight options for your party.",
    image: '/images/deals/Black Friday.jpg.jpeg',
    imageCaption: 'Thanksgiving & Black Friday group travel',
    introHeading: 'Group Flights Around Thanksgiving and Black Friday',
    introParagraphs: [
      'Every year the same thing happens. Someone in the family says "let\'s all get together for Thanksgiving," a friend suggests a Black Friday shopping weekend in a big city, or an office wants to send a team out right after the holiday. Then everyone looks at the calendar and realises it\'s one of the busiest travel weeks of the year.',
      "If you're trying to get a group on the same flights that week, you're better off asking early and asking someone who deals with group bookings every day.",
      "At Airline Group Bookings, we help families, friends, teams and organisations plan group flights around the Black Friday and Thanksgiving period. Share your route, your dates and how many people are traveling, and we'll check what's available for your group.",
    ],
    calloutBox: {
      eyebrow: 'A QUICK, HONEST NOTE',
      title: 'A quick, honest note about "Black Friday deals"',
      text: "Big retail sales don't always carry over to airline tickets, and group fares are often quoted differently from the fares you see on a normal booking site. So we won't promise a discount that may not exist. What we can do is look at the group options on your route and dates, explain the fare terms clearly, and tell you if a deadline matters. You decide with the full picture in front of you.",
    },
    whoWeHelpHeading: 'Who books group flights around Black Friday',
    whoWeHelp: [
      {
        letter: 'F',
        title: 'Families heading home for Thanksgiving',
        desc: 'Parents, siblings, cousins and grandparents all coming from different cities, ideally landing around the same time.',
      },
      {
        letter: 'S',
        title: 'Friends on a shopping or city weekend',
        desc: "A group of six or ten who've done the same trip every year and want to sit together on the way there.",
      },
      {
        letter: 'R',
        title: 'Reunions and celebrations',
        desc: 'Weddings, anniversaries and family gatherings that happen to fall on the long weekend.',
      },
      {
        letter: 'T',
        title: 'Teams and organisations',
        desc: 'Small businesses, clubs and school groups traveling before or after the holiday.',
      },
    ],
    howItWorksHeading: 'How it works',
    howItWorks: [
      {
        num: '1',
        title: 'Send us the details',
        desc: "Where you're flying from, where you're going, your dates and about how many travellers. A rough number is fine.",
      },
      {
        num: '2',
        title: 'We check group options',
        desc: 'We look at itineraries and group fare programs for your route.',
      },
      {
        num: '3',
        title: 'You review the terms',
        desc: 'Fare conditions, baggage, change rules and payment deadlines are explained before you commit.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'Once everyone is on board, we guide you through the booking and passenger details.',
      },
    ],
    howItWorksNote:
      'Group rules vary by airline. The minimum group size, deposit and the date you must submit passenger names are not the same everywhere, so we’ll give you the actual terms for your trip.',
    tipsHeading: 'Tips for booking group flights around Thanksgiving and Black Friday',
    tips: [
      {
        title: 'Ask as early as you can',
        desc: 'Holiday weeks fill up fast, and larger groups need several seats together. Waiting until the week before usually means fewer options.',
      },
      {
        title: 'Be flexible by a day if possible',
        desc: "Flying on the Tuesday or Wednesday before Thanksgiving, or returning on the Saturday instead of the Sunday, can open up more choices. Ask us what's realistic for your route.",
      },
      {
        title: 'Check the return day carefully',
        desc: 'The Sunday after Thanksgiving is famously busy. If your group has to be back for work or school on Monday, build in a buffer.',
      },
      {
        title: 'Sort out baggage before you pay',
        desc: "If you're coming back from a shopping weekend with extra bags, or traveling with gifts, check the allowance first.",
      },
      {
        title: 'Confirm deadlines in writing',
        desc: 'Deposit dates and name submission deadlines matter more in peak weeks. Make sure everyone in the group knows them.',
      },
      {
        title: 'Decide who coordinates',
        desc: 'One person talking to us saves a lot of back and forth.',
      },
    ],
    formHeading: 'Tell us about your trip',
    formSubtitle: 'Share your route, your dates and roughly how many people are coming, and we’ll start from there.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'Are group flights cheaper around Black Friday?',
        answer:
          "Not necessarily. Airline sales and group fares work differently, and the price depends on your route, dates and what's left on the plane. We'll look at the real options for your trip and walk you through the terms.",
      },
      {
        question: 'How many people count as a group?',
        answer:
          'Many airlines start group programs at around 10 passengers, though it changes from one airline and route to the next. Send us your numbers and we’ll confirm what applies.',
      },
      {
        question: 'How early should we book for Thanksgiving week?',
        answer:
          'As soon as your plans are firm. Peak holiday dates go quickly, and a group needs its seats together.',
      },
      {
        question: 'Can our group fly from different cities?',
        answer:
          'Yes, lots of groups do. We can look at ways to get everyone to the same place at around the same time.',
      },
      {
        question: 'Can passenger names be changed later?',
        answer:
          'Sometimes, up to a deadline. It depends on the airline and the fare. We’ll check the exact rule with you before any money changes hands.',
      },
      {
        question: 'Is this only for companies and teams, or can families and friends book too?',
        answer:
          "Families and friends book with us all the time. You don't need to be a business or a club.",
      },
    ],
  },

  'cyber-monday-travel-deals': {
    schema: {
         "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#webpage",
      "url": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/",
      "name": "Cyber Monday Group Flight Deals",
      "description": "Explore Cyber Monday group flight booking options for families, friends, sports teams, schools, church groups and businesses. Get a group flight quote for your preferred travel dates.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#service",
      "name": "Cyber Monday Group Flight Deals",
      "serviceType": "Cyber Monday Group Flight Booking Assistance",
      "description": "Group flight booking assistance for families, friends, sports teams, church and community groups, schools, students and corporate organisations planning domestic or international travel around Cyber Monday.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Families, friends, sports teams, church groups, schools, students and businesses"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "group booking support"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Monday Group Flight Deals",
          "item": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/cyber-monday-group-flight-deals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are group flights cheaper on Cyber Monday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. The price depends on your route, travel dates, group size and available seats. Before choosing, compare the group quote with the cost of booking the same seats separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Cyber Monday flight deals for 10 or more passengers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can request group flight options for 10 or more passengers, but a special discount is not guaranteed. Many airlines start their group booking programs at around 10 passengers, although requirements vary."
          }
        },
        {
          "@type": "Question",
          "name": "Do we have to travel on Cyber Monday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can request a group flight quote for future travel dates. How far ahead you can book depends on the airline."
          }
        },
        {
          "@type": "Question",
          "name": "Can our group fly from different cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, this can be arranged. Share the departure cities for your group so available flight options and booking terms can be checked."
          }
        },
        {
          "@type": "Question",
          "name": "Can passenger names be changed later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, passenger names can be changed up to a specified deadline. Fees and conditions depend on the airline and fare type, so check the rules before making payment."
          }
        },
        {
          "@type": "Question",
          "name": "What if we miss Cyber Monday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can still request a group flight quote after Cyber Monday. Available fares and prices will depend on your route, travel dates, group size and airline availability when you make the request."
          }
        }
      ]
    }
  ]

},
    metaTitle: 'Cyber Monday Group Flight Deals | Airline Group Bookings',
    metaDescription:
      "Looking for Cyber Monday group flight deals? Share your route, dates, and headcount. We'll check group airfare options for families, teams, and organizations.",
    eyebrow: 'SEASONAL TRAVEL',
    h1: 'Cyber Monday Group Flight Deals',
    heroSubtitle:
      'Cyber Monday, November 30 this year, is a good nudge to stop talking and start planning. Tell us your route, dates and group size.',
    image: '/images/deals/Cyber Monday Travel Deals.jpg.jpeg',
    imageCaption: 'Cyber Monday travel deals & group flights',
    introHeading: 'Stop Talking in the Group Chat and Start Planning',
    introParagraphs: [
      'It usually starts with one message in the group chat: "Flights are on sale, are we doing this trip or not?" Suddenly the cousins want Cancun, the team captain is asking about the spring tournament, and someone at the office remembers the offsite nobody has booked.',
      "Cyber Monday, November 30 this year, is a good nudge to stop talking and start planning. But booking seats for a dozen people isn't the same as grabbing one cheap ticket for yourself.",
      "At Airline Group Bookings, we help families, friends, teams and organisations plan group flights. Tell us your route, your travel dates and how many people are coming, and we'll check what's available for your group.",
    ],
    calloutBox: {
      eyebrow: 'A QUICK, HONEST NOTE',
      title: 'A quick, honest note about "Cyber Monday deals"',
      text: "Do Cyber Monday sale fares apply to group bookings? Don't count on it. Online sale prices may cover only a few seats or certain dates, and group fares are often quoted under separate rules. So we won't promise a discount that may not exist. We'll look at group options for your route, explain the fare terms and tell you which deadlines matter. If separate sale tickets look like the better choice, compare them before you decide.",
    },
    whoWeHelpHeading: 'Who books group flights around Cyber Monday',
    whoWeHelp: [
      {
        letter: 'F',
        title: 'Families planning ahead',
        desc: 'Cyber Monday flights for families traveling together might be for spring break, a summer reunion or a wedding abroad.',
      },
      {
        letter: 'F',
        title: 'Friends who finally agree on a date',
        desc: 'A birthday trip or a long-promised holiday, with everyone hoping to fly out together.',
      },
      {
        letter: 'S',
        title: 'Sports teams',
        desc: 'If you’re looking for Cyber Monday travel deals for sports teams, tell us about kit bags and oversized equipment early.',
      },
      {
        letter: 'C',
        title: 'Church and community groups',
        desc: 'Cyber Monday flights for church groups often involve many travelers and one very busy organiser.',
      },
      {
        letter: 'S',
        title: 'Schools and students',
        desc: 'Cyber Monday deals for student group travel need a careful look at chaperone rules and passenger name deadlines.',
      },
      {
        letter: 'C',
        title: 'Companies',
        desc: 'For Cyber Monday corporate group travel deals, check what happens when an attendee changes, not just the price.',
      },
    ],
    howItWorksHeading: 'How it works',
    howItWorks: [
      {
        num: '1',
        title: 'Send us the details',
        desc: 'Departure city, destination, dates and a rough headcount.',
      },
      {
        num: '2',
        title: 'We check group options',
        desc: 'We look at itineraries and group fares for your route.',
      },
      {
        num: '3',
        title: 'You review the terms',
        desc: 'Go through fare conditions, baggage, changes and payment deadlines before you commit.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'When your group is ready, we guide you through booking and passenger details.',
      },
    ],
    howItWorksNote:
      'Your Cyber Monday group airfare quote is a starting point, not a held seat. Prices and availability can change until the booking is confirmed.',
    tipsHeading: 'Tips before you book',
    tips: [
      {
        title: 'Decide on your travel window first',
        desc: 'Cyber Monday is when you shop. Your trip may be months later, so agree on dates before comparing prices.',
      },
      {
        title: 'Leave some wiggle room',
        desc: 'A day earlier or a nearby airport may open up more options.',
      },
      {
        title: 'Get a realistic headcount',
        desc: 'Separate the people who are definitely coming from the maybes.',
      },
      {
        title: 'Look past the fare',
        desc: 'Check bags, seat selection and change fees. A low price can look different once these are added.',
      },
      {
        title: 'Get deadlines in writing',
        desc: 'Note the deposit, final payment and name submission dates, and share them with everyone.',
      },
      {
        title: 'Pick one organiser',
        desc: 'One contact person saves a lot of back and forth.',
      },
    ],
    formHeading: 'Tell us about your trip',
    formSubtitle:
      'Who’s coming, where are you headed and when? Share what you know, even if the headcount isn’t final, and we’ll start from there.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'Are group flights cheaper on Cyber Monday?',
        answer:
          'Not necessarily. The price depends on your route, dates, group size and available seats. Before you choose, check what those same seats would cost if everyone booked separately.',
      },
      {
        question: 'Can I get Cyber Monday flight deals for 10 or more passengers?',
        answer:
          'You can ask for options, but a special discount isn’t guaranteed. Many airlines start group fares at around 10 passengers, though rules vary.',
      },
      {
        question: 'Do we have to travel on Cyber Monday?',
        answer:
          'No. You can request a quote for later travel dates. How far ahead you can book depends on the airline.',
      },
      {
        question: 'Can our group fly from different cities?',
        answer:
          'Often this can be arranged. Share each departure city so the options and terms can be checked.',
      },
      {
        question: 'Can passenger names be changed later?',
        answer:
          'Sometimes, up to a deadline. Fees and rules depend on the airline and fare, so check before you pay.',
      },
      {
        question: 'What if we miss Cyber Monday?',
        answer:
          'You can still request a group quote. The fare will depend on what’s available when you ask.',
      },
    ],
  },

  'corporate-booking': {
     schema: {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#webpage",
      "url": "https://airlinegroupbookings.com/corporate-group-flight-booking/",
      "name": "Corporate Group Flight Booking",
      "description": "Arrange corporate group flights for company offsites, conferences, sales kickoffs, training sessions and team events. Get group flight booking assistance for employees travelling from multiple cities.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#service",
      "name": "Corporate Group Flight Booking",
      "serviceType": "Corporate Group Flight Booking and Business Travel Assistance",
      "description": "Corporate group flight booking assistance for companies, employees and business organisations travelling for company offsites, conferences, trade shows, sales kickoffs, training sessions, project meetings and team events.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/corporate-group-flight-booking/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Companies, corporate teams, business organisations and employees"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "corporate group booking support"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Corporate Group Flight Booking",
          "item": "https://airlinegroupbookings.com/corporate-group-flight-booking/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/corporate-group-flight-booking/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can we book flights for 10 or more employees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can request a group flight quote for 10 or more employees. Many airlines start their group booking programs at around 10 passengers, although the minimum requirements vary by airline and route."
          }
        },
        {
          "@type": "Question",
          "name": "Can employee names be changed on a group flight booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, employee names can be changed up to a specified deadline. Fees and conditions depend on the airline and fare type, so check the applicable rules before booking."
          }
        },
        {
          "@type": "Question",
          "name": "Does a quote request hold seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A group flight quote request does not automatically reserve or hold seats. Fares and availability can change until the booking is confirmed."
          }
        },
        {
          "@type": "Question",
          "name": "What should we send for a corporate group flight quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Provide the departure cities, destination, travel dates and estimated headcount. Also mention any baggage requirements, preferred arrival times or other scheduling needs for your employees."
          }
        }
      ]
    }
  ]
},
    metaTitle: 'Corporate Group Flight Booking | Airline Group Bookings',
    metaDescription:
      'Corporate group flight booking for company offsites, conferences, and team travel. Share your route, dates, and headcount to compare airline group options.',
    eyebrow: 'BUSINESS TRAVEL',
    h1: 'Corporate Group Flight Booking',
    heroSubtitle:
      'The venue is booked and the agenda is taking shape. Then someone asks, "So how is everyone getting there?" Share your route, dates and headcount, and we’ll check the options for your team.',
    image: '/images/deals/Corporate Booking.jpg.jpeg',
    imageCaption: 'Corporate group flight booking & business team travel',
    introHeading: 'Company Offsites, Conferences & Multi-City Team Flights',
    introParagraphs: [
      'The venue is booked and the agenda is taking shape. Then someone asks, "So how is everyone getting there?" Now you\'re juggling 18 calendars, three departure cities and one colleague who can only leave after lunch.',
      "At Airline Group Bookings, we help with corporate group flight booking for company offsites, conferences and team events. Share your route, dates and headcount, and we'll check the options for your team.",
    ],
    calloutBox: [
      {
        eyebrow: 'HONEST ADVICE',
        title: 'A quick, honest note about corporate fares',
        text: 'A group fare isn’t automatically cheaper than booking seats one by one. Its value may lie in the payment schedule or the time allowed to confirm names, and that depends on the airline. Compare both before you decide.',
      },
      {
        eyebrow: 'MULTI-CITY COORDINATION',
        title: 'Group flights for employees from different cities',
        text: 'List each departure city with its headcount. Then agree on the latest acceptable arrival time. Airlines may treat travelers from other cities differently from the main group, so check the terms for each.',
      },
    ],
    whoWeHelpHeading: 'Who books corporate group flights',
    whoWeHelp: [
      {
        letter: 'O',
        title: 'Offsites and retreats',
        desc: 'If you’re pricing corporate retreat group airfare, settle the arrival window first.',
      },
      {
        letter: 'C',
        title: 'Conferences and trade shows',
        desc: 'Ask for a group airfare quote for your company conference once dates are announced.',
      },
      {
        letter: 'S',
        title: 'Sales kickoffs',
        desc: 'Group flight booking for a sales kickoff often means several cities and one fixed start time.',
      },
      {
        letter: 'T',
        title: 'Training and project teams',
        desc: 'Tell us if some people need to return earlier or later than the rest.',
      },
    ],
    howItWorksHeading: 'How it works',
    howItWorks: [
      {
        num: '1',
        title: 'Send the details',
        desc: 'Cities, destination, dates and estimated headcount.',
      },
      {
        num: '2',
        title: 'We check options',
        desc: 'We look at itineraries and group fares for your route.',
      },
      {
        num: '3',
        title: 'You review the terms',
        desc: 'Check fare rules, baggage, changes and deadlines, then get internal approval.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'We guide you through booking and passenger details.',
      },
    ],
    howItWorksNote:
      'Corporate group contracts vary by airline. Deposit dates and name submission deadlines depend on your route and ticketing rules.',
    tipsHeading: 'Tips for the person organising',
    tips: [
      {
        title: 'Ask how long the quote is valid',
        desc: 'Your internal approval process needs to fit inside the airline’s quote validity window.',
      },
      {
        title: 'Check names as on government ID',
        desc: 'Collect official traveler names early, especially for international travel and security matching.',
      },
      {
        title: 'Expect team roster changes',
        desc: 'Colleagues drop out and new joiners appear. Know the name change deadlines and costs before you pay.',
      },
      {
        title: 'Get terms in writing',
        desc: 'Keep deposit dates, final payment deadlines and cancellation terms clearly documented in one place.',
      },
    ],
    formHeading: 'Tell us about your team trip',
    formSubtitle: 'Even a rough headcount is a good start. Share what you know and we’ll start from there.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'Can we book flights for 10 or more employees?',
        answer:
          'Yes, you can request a group quote. Many airlines start group fares at around 10 passengers, though rules vary.',
      },
      {
        question: 'Can employee names be changed on a group flight booking?',
        answer:
          'Sometimes, up to a deadline. Fees and rules depend on the airline and fare type.',
      },
      {
        question: 'Does a quote request hold seats?',
        answer:
          'Don’t treat it as a reservation. Fares and seats can change until the booking is confirmed.',
      },
      {
        question: 'What should we send for a quote?',
        answer:
          'Departure cities, destination, dates, headcount and any baggage or timing needs.',
      },
    ],
  },

  'family-and-friends': {
     schema: {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#webpage",
      "url": "https://airlinegroupbookings.com/group-flights-family-and-friends/",
      "name": "Group Flights for Family and Friends",
      "description": "Plan group flights for family reunions, destination weddings, friends' trips and multi-generational family holidays. Get group flight booking assistance for travelers departing from different cities.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#service",
      "name": "Group Flights for Family and Friends",
      "serviceType": "Family and Friends Group Flight Booking Assistance",
      "description": "Group flight booking assistance for family reunions, destination weddings, friends' holidays, milestone celebrations and multi-generational family trips. Assistance includes comparing group flight options, coordinating departure cities and understanding airline booking conditions.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/group-flights-family-and-friends/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Families, friends, wedding guests and groups travelling together"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "group booking support"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Group Flights for Family and Friends",
          "item": "https://airlinegroupbookings.com/group-flights-family-and-friends/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/group-flights-family-and-friends/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can we book flights for 10 or more family members?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can request a group flight quote for 10 or more family members. Many airlines start their group booking programs at around 10 passengers, although the minimum requirements vary by airline and route."
          }
        },
        {
          "@type": "Question",
          "name": "What if we are fewer than 10?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smaller groups can often book flights using regular individual fares. Share your passenger numbers and travel details to check which booking options apply."
          }
        },
        {
          "@type": "Question",
          "name": "Can family members pay separately for group flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Separate payments depend on the airline and its group booking terms. Check the payment arrangements before collecting money from family members."
          }
        },
        {
          "@type": "Question",
          "name": "Can we change a passenger's name later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, passenger names can be changed up to a specified deadline. Fees and conditions vary depending on the airline and fare rules, so confirm the applicable terms before booking."
          }
        }
      ]
    }
  ]
},
    metaTitle: 'Group Flights for Family and Friends | Airline Group Bookings',
    metaDescription:
      'Plan group flights for family reunions, destination weddings, and friends’ getaways. Share your route, dates, and headcount to explore group airfare options.',
    eyebrow: 'LEISURE TRAVEL',
    h1: 'Group Flights for Family and Friends',
    heroSubtitle:
      'Grandma is turning 80. Your oldest friend is getting married by the beach. The hard part isn’t wanting to go—it’s getting everyone on the plane. Share your dates and headcount to explore options.',
    image: '/images/deals/Family and Friends.jpg.jpeg',
    imageCaption: 'Group flights for family reunions, weddings & friends’ trips',
    introHeading: 'Family Reunions, Beach Weddings & Multi-Generational Trips',
    introParagraphs: [
      'Grandma is turning 80. Your oldest friend is getting married by the beach. Or the five of you from college have finally said "this year" and meant it. The hard part isn\'t wanting to go. It\'s getting everyone on a plane.',
      "At Airline Group Bookings, we help people plan group flights for family reunions, celebrations and shared holidays. Tell us where, when and how many, and we'll check the options.",
    ],
    calloutBox: [
      {
        eyebrow: 'HONEST ADVICE',
        title: 'A quick, honest note before you ask for a quote',
        text: 'A group fare isn’t always the cheapest way to fly. If only a few of you are going and dates are fixed, separate tickets may cost less. A group booking may help with payment timing or names, depending on the airline. Compare both.',
      },
      {
        eyebrow: 'MULTI-CITY COORDINATION',
        title: 'Family and friends flying from different cities',
        text: 'Write down each departure city and how many people leave from it. Agree on an arrival window, so nobody waits at the airport all day. Terms for travelers outside the main group can differ, so check them.',
      },
    ],
    whoWeHelpHeading: 'Trips we can help you plan',
    whoWeHelp: [
      {
        letter: 'F',
        title: 'Family reunions',
        desc: 'Several households, school holidays and one date that has to work.',
      },
      {
        letter: 'D',
        title: 'Destination weddings',
        desc: 'When checking group airfare for destination wedding guests, note who is arriving early.',
      },
      {
        letter: 'F',
        title: 'Friends’ trips',
        desc: 'Before pricing flights for a friends’ group trip, ask everyone for their top spend. It’s easier than finding out after you’ve picked the beach.',
      },
      {
        letter: 'M',
        title: 'Three generations together',
        desc: 'Booking flights for a multi-generational family trip? Grandpa may need wheelchair help, and the toddler may not cope with a 5 a.m. departure. Tell us early.',
      },
    ],
    howItWorksHeading: 'How it works',
    howItWorks: [
      {
        num: '1',
        title: 'Tell us the plan',
        desc: 'Cities, destination, dates and a rough headcount.',
      },
      {
        num: '2',
        title: 'We check options',
        desc: 'We look at itineraries and group fares for your route.',
      },
      {
        num: '3',
        title: 'You review the terms',
        desc: 'Look at baggage, seating, changes and deadlines.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'We guide you through booking and passenger details.',
      },
    ],
    howItWorksNote:
      'Group terms and deadlines vary by airline. Deposit deadlines and passenger name submission dates depend on your travel route.',
    tipsHeading: 'Tips for the family organiser',
    tips: [
      {
        title: 'Set a reply-by date',
        desc: '"Maybe" can hold up everyone else. Give your group a firm cutoff date to commit.',
      },
      {
        title: 'Agree on money early',
        desc: 'Decide who pays what, and by when, before paying any airline deposits.',
      },
      {
        title: 'Copy names from official IDs',
        desc: 'Nicknames don’t belong on tickets. Always verify full names exactly as shown on passports or driver’s licenses.',
      },
      {
        title: 'Ask about seating',
        desc: 'A group booking doesn’t always mean seats side by side automatically. Request seat blocks early if keeping family together is essential.',
      },
    ],
    formHeading: 'Tell us who’s coming',
    formSubtitle: 'A rough headcount is enough to start the conversation.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'Can we book flights for 10 or more family members?',
        answer:
          'Yes, you can request a group quote. Many airlines start group fares at around 10 passengers, though rules vary.',
      },
      {
        question: 'What if we are fewer than 10?',
        answer:
          'Small parties can often be booked on regular fares. Send us your numbers and ask what applies.',
      },
      {
        question: 'Can family members pay separately for group flights?',
        answer:
          'It depends on the airline and booking terms. Ask before you collect money from anyone.',
      },
      {
        question: 'Can we change a passenger name later?',
        answer:
          'Sometimes, up to a deadline. Fees and rules vary by airline and fare type.',
      },
    ],
  },

  'student-tickets': {
     schema: {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#webpage",
      "url": "https://airlinegroupbookings.com/student-group-flight-booking/",
      "name": "Student Group Flight Booking",
      "description": "Arrange student group flights for school trips, educational tours, college clubs, study abroad programs, bands and choirs. Get assistance with group airfare, chaperones, baggage and booking requirements.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#service",
      "name": "Student Group Flight Booking",
      "serviceType": "Student and Educational Group Flight Booking Assistance",
      "description": "Group flight booking assistance for school trips, educational tours, college clubs, student competitions, study abroad programs, school bands and choirs. Support includes comparing group flight options, understanding airline booking conditions, baggage requirements and passenger name deadlines.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/student-group-flight-booking/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Schools, colleges, universities, students, teachers, chaperones and educational organisations"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "student group booking support"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Student Group Flight Booking",
          "item": "https://airlinegroupbookings.com/student-group-flight-booking/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/student-group-flight-booking/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How early should we book flights for a school trip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start as soon as you have likely travel dates and a rough headcount. Seats for larger groups can be harder to find around school holidays. Requesting an early quote also gives you time to obtain school approval and collect payments from parents."
          }
        },
        {
          "@type": "Question",
          "name": "How many students make a group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many airlines start their group fare programs at around 10 passengers, but the minimum varies by airline and route. When requesting a quote, provide separate numbers for students and adults, and ask about deposit conditions if someone drops out."
          }
        },
        {
          "@type": "Question",
          "name": "Can student passenger names be changed after a group booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many airlines allow certain passenger name changes within a specified period, but the rules depend on the airline and fare. Spelling corrections and replacing one student with another may have different conditions and fees. Confirm the deadline and applicable charges before payment."
          }
        },
        {
          "@type": "Question",
          "name": "Does requesting a quote reserve seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Requesting a group flight quote does not automatically reserve seats. Fares and availability can change until the booking is confirmed. Check the quote validity period and initial payment deadline before completing the booking."
          }
        }
      ]
    }
  ]
},
    metaTitle: 'Student Group Flight Booking | Airline Group Bookings',
    metaDescription:
      'Student group flight booking for school trips, campus clubs, and study abroad programs. Share your route, dates, and headcount to compare airline group options.',
    eyebrow: 'STUDENT TRAVEL',
    h1: 'Student Group Flight Booking',
    heroSubtitle:
      'Thirty permission slips, one tuba, two teachers and a parent asking what time the flight lands. Send us your route, dates and headcount, and we’ll check the options for your school or campus group.',
    image: '/images/deals/Student Tickets.jpg.jpeg',
    imageCaption: 'Student group flight booking for school trips & study abroad',
    introHeading: 'School Tours, Campus Clubs & Study Abroad Flights',
    introParagraphs: [
      'Thirty permission slips, one tuba, two teachers and a parent asking, again, what time the flight lands. If you\'re the person organising a student trip, you already have enough to do.',
      "At Airline Group Bookings, we help with student group flight booking for school trips, study tours and campus clubs. Send us your route, dates and headcount, and we'll check the options.",
    ],
    calloutBox: [
      {
        eyebrow: 'HONEST ADVICE',
        title: 'A quick, honest note about student fares',
        text: 'An individual student discount and a group fare are two different things. Don’t assume either one applies to your trip, or that a group quote will be the cheapest. We’ll go through what’s available for your route so you can compare.',
      },
      {
        eyebrow: 'CHAPERONE & MINOR RULES',
        title: 'Group flights for students with chaperones',
        text: 'If anyone is under 18, ask about adult supervision rules before you book. Airlines set their own requirements, including how chaperones must appear on the reservation. Check passport, visa and parental consent rules for your destination too.',
      },
    ],
    whoWeHelpHeading: 'Who books student group flights',
    whoWeHelp: [
      {
        letter: 'S',
        title: 'School tours',
        desc: 'Museums, history trips and language exchanges, usually planned around term dates.',
      },
      {
        letter: 'B',
        title: 'Bands and choirs',
        desc: 'Asking about school band trip group flights? List every instrument that can’t fit under a seat.',
      },
      {
        letter: 'C',
        title: 'College clubs',
        desc: 'Flights for a college club competition trip need a firm arrival time, ideally with a buffer before the event.',
      },
      {
        letter: 'S',
        title: 'Study abroad groups',
        desc: 'When requesting group airfare for a study abroad program, say whether everyone returns on the same date.',
      },
    ],
    howItWorksHeading: 'How it works',
    howItWorks: [
      {
        num: '1',
        title: 'Share the trip',
        desc: 'Departure city, destination, dates and numbers of students and adults.',
      },
      {
        num: '2',
        title: 'We check options',
        desc: 'We look at itineraries and group fares for your route.',
      },
      {
        num: '3',
        title: 'You review the terms',
        desc: 'Check baggage, changes, deposits and deadlines, then get school approval.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'We guide you through booking and passenger details.',
      },
    ],
    howItWorksNote:
      'Airline student group policies differ. Deposit schedules, chaperone ratios, and passenger name change cutoff dates depend on the operating airline.',
    tipsHeading: 'Tips for teachers and trip leaders',
    tips: [
      {
        title: 'Match the deadlines',
        desc: 'Set your parent payment date a week or more before the airline’s deposit deadline to avoid last-minute stress.',
      },
      {
        title: 'Collect names exactly as on ID',
        desc: 'One nickname on a ticket can cause serious trouble at airport check-in and security.',
      },
      {
        title: 'Weigh and measure the gear',
        desc: 'Musical instruments, robotics kits, and sports equipment may carry oversized or overweight charges.',
      },
      {
        title: 'Plan for dropouts',
        desc: 'Find out early what happens to the deposit and group ticket minimums if a student cannot attend.',
      },
    ],
    formHeading: 'Tell us about your student trip',
    formSubtitle: 'Estimated numbers are fine to begin with.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'How early should we book flights for a school trip?',
        answer:
          'Start as soon as you have likely dates and a rough headcount. Seats for a large group can be harder to find around school holidays. An early request also gives you time to get school approval and collect payments from parents.',
      },
      {
        question: 'How many students make a group?',
        answer:
          'Many airlines start group fares at around 10 passengers, but the rule varies by airline and route. When you send your numbers, list students and adults separately. If you’re close to 10, ask what happens to the booking and deposit if someone drops out.',
      },
      {
        question: 'Can student passenger names be changed after a group booking?',
        answer:
          'Often there is a window for changes, but it depends on the airline and fare. A spelling correction and swapping in a different student may be treated differently. Before paying, ask for the cutoff date and the fee for each.',
      },
      {
        question: 'Does requesting a quote reserve seats?',
        answer:
          'No, a quote request on its own doesn’t reserve seats. Fares and availability can change until the booking is confirmed. Check how long your quote is valid and when the first payment is due, so approval delays don’t catch you out.',
      },
    ],
  },

  'unpublished-deals': {
     schema:{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/",
      "telephone": "+1-833-958-0151"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/unpublished-group-flight-deals/#webpage",
      "url": "https://airlinegroupbookings.com/unpublished-group-flight-deals/",
      "name": "Unpublished Group Flight Deals",
      "description": "Explore unpublished group flight options with Airline Group Bookings. Share your route, travel dates and group size to request a quote and compare fares and booking terms.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/unpublished-group-flight-deals/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/unpublished-group-flight-deals/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/unpublished-group-flight-deals/#service",
      "name": "Unpublished Group Flight Deals",
      "serviceType": "Group Flight Booking Assistance",
      "description": "Request group flight quotes for families, friends, sports teams, schools, churches, companies and international group travelers. Compare quoted fares, inclusions, refund policies and change conditions before booking.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/unpublished-group-flight-deals/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "Group booking inquiries"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/unpublished-group-flight-deals/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Unpublished Group Flight Deals",
          "item": "https://airlinegroupbookings.com/unpublished-group-flight-deals/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/unpublished-group-flight-deals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are unpublished flight deals cheaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be, but there's no promise. A quote that looks low may not include bags or seat selection, while a public fare might suit your dates better. Put both side by side for the same flights and compare the total per traveler, along with the change and refund terms."
          }
        },
        {
          "@type": "Question",
          "name": "Can we get unpublished fares for 10 or more passengers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can ask. Many airlines start group fares at around 10 passengers, but the rule varies, and reaching that number doesn't guarantee an unpublished fare. Send your route, dates and headcount, and mention anyone who may drop out, because a smaller group can change the terms."
          }
        },
        {
          "@type": "Question",
          "name": "Do unpublished fares earn miles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Don't assume so. Some fares earn fewer miles than usual or none at all, and upgrades may not be allowed. It depends on the airline, the fare and the loyalty program. If your travelers care about miles or status, ask for this in writing before anyone pays."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't the price shown on this page?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A group quote is built around your trip: where you're flying, when, how many are going and what seats are available at that moment. A sample price on this page could easily mislead you. Share your details and ask for the full price, including what it covers."
          }
        },
        {
          "@type": "Question",
          "name": "Does a quote hold our seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, not by itself. Price and availability can change until the booking is confirmed. When you get a quote, check how long it's valid, what you need to do to hold the seats and when the first payment is due. Then tell your group the reply-by date."
          }
        }
      ]
    }
  ]
},
    metaTitle: 'Unpublished Group Flight Deals | Airline Group Bookings',
    metaDescription:
      'Looking for unpublished group flight deals? Some airline group airfare options don’t show up in normal searches. Share your route, dates, and group size for a quote.',
    eyebrow: 'GROUP FARE OPTIONS',
    h1: 'Unpublished Group Flight Deals',
    heroSubtitle:
      'You’ve searched the same route on four websites. The prices still make you wince when you multiply them by 15. Send us your route, dates and headcount, and we’ll check what’s available.',
    image: '/images/deals/Unpublished Deals.jpg.jpeg',
    imageCaption: 'Unpublished group flight deals & offline airline group rates',
    introHeading: 'Private Airline Rates Shared Directly for Your Trip',
    introParagraphs: [
      'You\'ve searched the same route on four websites. You\'ve opened a private window, just in case. The prices still make you wince when you multiply them by 15.',
      "Some group flight options don't show up in a normal online search. They're shared in response to a trip request. Send Airline Group Bookings your route, dates and group size, and we'll check what's available.",
    ],
    calloutBox: [
      {
        eyebrow: 'HONEST ADVICE',
        title: 'A quick, honest note about unpublished fares',
        text: '"Unpublished" doesn’t automatically mean cheaper. A private quote can be higher than a public sale fare, or come with tighter rules. There may be nothing suitable for your dates at all. Compare the total price and the terms for the same flights before you choose.',
      },
      {
        eyebrow: 'FARE RESTRICTIONS & RULES',
        title: 'Check the refund and change rules',
        text: 'An unpublished fare’s refund and change rules can differ from what you see online. Ask which payments are nonrefundable, whether names can change, when final payment is due and what happens if your group shrinks. Check baggage and seat selection too.',
      },
    ],
    whoWeHelpHeading: 'Who should ask',
    whoWeHelp: [
      {
        letter: 'F',
        title: 'Large families and friends',
        desc: 'Reunions, weddings and milestone trips.',
      },
      {
        letter: 'T',
        title: 'Teams and organisations',
        desc: 'Sports squads, churches, schools and companies.',
      },
      {
        letter: 'L',
        title: 'Long-haul travelers',
        desc: 'If you want unpublished international airfare for group travel, share passport countries and any stopover plans early.',
      },
    ],
    howItWorksHeading: 'How to get unpublished airfare for groups',
    howItWorks: [
      {
        num: '1',
        title: 'Send your trip details',
        desc: 'Departure city, destination, dates and number of travelers.',
      },
      {
        num: '2',
        title: 'Tell us what’s flexible',
        desc: 'Another day or a nearby airport may widen the choice.',
      },
      {
        num: '3',
        title: 'Ask for it in writing',
        desc: 'Get the price, what’s included and how long the quote lasts.',
      },
      {
        num: '4',
        title: 'Compare before paying',
        desc: 'Check the same flights on public fares too.',
      },
    ],
    howItWorksNote:
      'Unpublished group airfare is quoted based on real-time inventory from airline partner desks. Seats and fares are subject to availability until booked.',
    tipsHeading: 'Tips before you book unpublished fares',
    tips: [
      {
        title: 'Look at the total cost per seat',
        desc: 'A quote that looks low may not include checked baggage, seat selection, or mandatory airport taxes. Compare total costs.',
      },
      {
        title: 'Check flexibility and name changes',
        desc: 'Always confirm whether passenger name substitutions are allowed and whether fees apply before signing any group agreement.',
      },
      {
        title: 'Know the payment and deposit deadlines',
        desc: 'Unpublished rates often come with firm payment cutoff windows. Make sure your group knows the reply-by date.',
      },
      {
        title: 'Compare public vs private fares',
        desc: 'Check what booking directly online would cost side by side before committing to private contract terms.',
      },
    ],
    formHeading: 'Tell us about your trip',
    formSubtitle: 'Share your route, dates and a rough headcount to get started.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'Are unpublished flight deals cheaper?',
        answer:
          'They can be, but there’s no promise. A quote that looks low may not include bags or seat selection, while a public fare might suit your dates better. Put both side by side for the same flights and compare the total per traveler, along with the change and refund terms.',
      },
      {
        question: 'Can we get unpublished fares for 10 or more passengers?',
        answer:
          'You can ask. Many airlines start group fares at around 10 passengers, but the rule varies, and reaching that number doesn’t guarantee an unpublished fare. Send your route, dates and headcount, and mention anyone who may drop out, because a smaller group can change the terms.',
      },
      {
        question: 'Do unpublished fares earn miles?',
        answer:
          'Don’t assume so. Some fares earn fewer miles than usual or none at all, and upgrades may not be allowed. It depends on the airline, the fare and the loyalty program. If your travelers care about miles or status, ask for this in writing before anyone pays.',
      },
      {
        question: 'Why isn’t the price shown on this page?',
        answer:
          'A group quote is built around your trip: where you’re flying, when, how many are going and what seats are available at that moment. A sample price on this page could easily mislead you. Share your details and ask for the full price, including what it covers.',
      },
      {
        question: 'Does a quote hold our seats?',
        answer:
          'No, not by itself. Price and availability can change until the booking is confirmed. When you get a quote, check how long it’s valid, what you need to do to hold the seats and when the first payment is due. Then tell your group the reply-by date.',
      },
    ],
  },

  'memorial-day-deals': {
     schema:{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/",
      "telephone": "+1-833-958-0151"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/#webpage",
      "url": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/",
      "name": "Memorial Day Group Flight Deals",
      "description": "Plan Memorial Day 2027 group travel with Airline Group Bookings. Request a group flight quote for families, friends, sports teams and organisations.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/#service",
      "name": "Memorial Day Group Flight Booking",
      "serviceType": "Group Flight Booking Assistance",
      "description": "Group flight booking assistance for Memorial Day weekend travel, including family reunions, trips with friends, sports tournaments, clubs and organisations. Travelers can request quotes, compare itineraries and review booking terms.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "Group booking inquiries"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Memorial Day Group Flight Deals",
          "item": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/memorial-day-group-flight-deals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How early should we book Memorial Day group flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask as soon as you have likely dates and a rough headcount. For Memorial Day 2027, starting in winter gives you time to compare quotes, collect money and chase the people who haven't replied. Airlines open group bookings only a certain number of days ahead, so check what applies to your route."
          }
        },
        {
          "@type": "Question",
          "name": "Can we get Memorial Day flights for 10 or more people?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can request a group quote. Many airlines start group fares at around 10 passengers, though the rule varies. A holiday flight may not have enough seats for everyone, so tell us whether your group could split across two departures or travel a day earlier."
          }
        },
        {
          "@type": "Question",
          "name": "Can people fly from different cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often this can be arranged, but each city may have its own fare and terms. Send a simple list showing how many people leave from each place. Agree on an arrival window too, so one shared airport pickup doesn't turn into an all-day wait."
          }
        },
        {
          "@type": "Question",
          "name": "What if someone drops out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your contract and when they cancel. Some or all of that traveler's deposit may be lost, and if the group falls below the minimum, the whole booking could be affected. Before paying, ask for the cancellation dates and whether a replacement name is allowed."
          }
        },
        {
          "@type": "Question",
          "name": "Does a quote hold our seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, a quote on its own doesn't reserve seats. Fares and availability can change until the booking is confirmed. Check how long the quote is valid, what you must do to hold the seats and when the first payment is due. Give your group an earlier deadline."
          }
        }
      ]
    }
  ]
},
    metaTitle: 'Memorial Day Group Flight Deals | Airline Group Bookings',
    metaDescription:
      'Planning a holiday weekend trip for family, friends, or a team? Share your route, dates, and headcount to explore Memorial Day group flight options.',
    eyebrow: 'HOLIDAY TRAVEL',
    h1: 'Memorial Day Group Flight Deals',
    heroSubtitle:
      'Three days off. One lake house, beach rental or hometown barbecue everyone swears they’ll make this year. Send us your route, dates and headcount, and we’ll check what’s available.',
    image: '/images/deals/Memorial Day Deals GROUP TRAVEL.jpg.jpeg',
    imageCaption: 'Memorial Day weekend group flight deals & holiday travel',
    introHeading: 'Holiday Weekend Travel for Reunions, Friends & Tournaments',
    introParagraphs: [
      'Three days off. One lake house, beach rental or hometown barbecue everyone swears they\'ll make this year. Then someone checks flights in May and the group chat goes very quiet.',
      "Memorial Day falls on the last Monday of May. If you're bringing a group, it pays to start the conversation early. Send Airline Group Bookings your route, dates and headcount, and we'll check what's available.",
    ],
    calloutBox: [
      {
        eyebrow: 'HONEST ADVICE',
        title: 'A quick, honest note about holiday "deals"',
        text: 'A holiday weekend is a popular time to fly, so we won’t promise a bargain. A group fare may or may not beat individual tickets. What you can do is compare the total price and the terms for the same flights before you commit.',
      },
      {
        eyebrow: 'PEAK WEEKEND PLANNING',
        title: 'Memorial Day weekend flights for large groups',
        text: 'The more seats you need, the harder it can be to get everyone on one flight. Think about flying out on Thursday instead of Friday, or returning on Tuesday instead of Monday. Splitting across two flights is another option, if arrival times still work.',
      },
    ],
    whoWeHelpHeading: 'Who books Memorial Day group trips',
    whoWeHelp: [
      {
        letter: 'F',
        title: 'Families',
        desc: 'For Memorial Day family reunion flights, note who has school and which relatives need extra help.',
      },
      {
        letter: 'F',
        title: 'Friends',
        desc: 'Planning a Memorial Day group trip for friends? Agree on a budget before choosing the destination.',
      },
      {
        letter: 'S',
        title: 'Sports teams',
        desc: 'For Memorial Day tournament travel, share your first match time and any bulky equipment.',
      },
      {
        letter: 'C',
        title: 'Clubs and organisations',
        desc: 'Community events, alumni weekends and volunteer trips.',
      },
    ],
    howItWorksHeading: 'How it works',
    howItWorks: [
      {
        num: '1',
        title: 'Share the plan',
        desc: 'Departure cities, destination, dates and number of travelers.',
      },
      {
        num: '2',
        title: 'We check options',
        desc: 'We look at itineraries and group fares for your route.',
      },
      {
        num: '3',
        title: 'You review the terms',
        desc: 'Check baggage, changes, deposits and deadlines.',
      },
      {
        num: '4',
        title: 'We help you book',
        desc: 'We guide you through booking and passenger details.',
      },
    ],
    howItWorksNote:
      'Holiday weekend group seat inventory fills early. Airline deposit terms and name deadlines must be followed closely to avoid seat releases.',
    tipsHeading: 'Tips for the organiser',
    tips: [
      {
        title: 'Fix a headcount date',
        desc: 'Give everyone a firm deadline to say yes or no before holding group seats or putting deposits down.',
      },
      {
        title: 'Plan the airport pickup',
        desc: 'A holiday arrival with 14 people needs more than one car. Agree on an arrival window so nobody waits all day.',
      },
      {
        title: 'Keep a buffer',
        desc: 'If there’s a wedding, graduation, or tournament match, don’t schedule flights that arrive just hours before.',
      },
    ],
    formHeading: 'Tell us about your Memorial Day plans',
    formSubtitle: 'A rough headcount is enough to begin.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'How early should we book Memorial Day group flights?',
        answer:
          'Ask as soon as you have likely dates and a rough headcount. Starting in winter gives you time to compare quotes, collect money and chase the people who haven’t replied. Airlines open group bookings only a certain number of days ahead, so check what applies to your route.',
      },
      {
        question: 'Can we get Memorial Day flights for 10 or more people?',
        answer:
          'Yes, you can request a group quote. Many airlines start group fares at around 10 passengers, though the rule varies. A holiday flight may not have enough seats for everyone, so tell us whether your group could split across two departures or travel a day earlier.',
      },
      {
        question: 'Can people fly from different cities?',
        answer:
          'Often this can be arranged, but each city may have its own fare and terms. Send a simple list showing how many people leave from each place. Agree on an arrival window too, so one shared airport pickup doesn’t turn into an all-day wait.',
      },
      {
        question: 'What if someone drops out?',
        answer:
          'It depends on your contract and when they cancel. Some or all of that traveler’s deposit may be lost, and if the group falls below the minimum, the whole booking could be affected. Before paying, ask for the cancellation dates and whether a replacement name is allowed.',
      },
      {
        question: 'Does a quote hold our seats?',
        answer:
          'No, a quote on its own doesn’t reserve seats. Fares and availability can change until the booking is confirmed. Check how long the quote is valid, what you must do to hold the seats and when the first payment is due. Give your group an earlier deadline.',
      },
    ],
  },

  'last-minute-travel-deals': {
    schema:{
    "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://airlinegroupbookings.com/#organization",
      "name": "Airline Group Bookings",
      "url": "https://airlinegroupbookings.com/",
      "telephone": "+1-833-958-0151"
    },
    {
      "@type": "WebSite",
      "@id": "https://airlinegroupbookings.com/#website",
      "url": "https://airlinegroupbookings.com/",
      "name": "Airline Group Bookings",
      "publisher": {
        "@id": "https://airlinegroupbookings.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://airlinegroupbookings.com/last-minute-group-flight-booking/#webpage",
      "url": "https://airlinegroupbookings.com/last-minute-group-flight-booking/",
      "name": "Last Minute Group Flight Booking",
      "description": "Need urgent group flights? Airline Group Bookings helps check last-minute flight options for sports teams, companies, families, crews and volunteers.",
      "isPartOf": {
        "@id": "https://airlinegroupbookings.com/#website"
      },
      "about": {
        "@id": "https://airlinegroupbookings.com/last-minute-group-flight-booking/#service"
      },
      "breadcrumb": {
        "@id": "https://airlinegroupbookings.com/last-minute-group-flight-booking/#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://airlinegroupbookings.com/last-minute-group-flight-booking/#service",
      "name": "Last Minute Group Flight Booking",
      "serviceType": "Urgent Group Flight Booking Assistance",
      "description": "Group flight booking assistance for urgent and short-notice travel. Travelers can request availability for sports teams, companies, families, crews and volunteers by sharing their route, travel dates and passenger count.",
      "provider": {
        "@id": "https://airlinegroupbookings.com/#organization"
      },
      "url": "https://airlinegroupbookings.com/last-minute-group-flight-booking/",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-833-958-0151",
          "contactType": "Urgent group booking inquiries"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinegroupbookings.com/last-minute-group-flight-booking/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinegroupbookings.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Last Minute Group Flight Booking",
          "item": "https://airlinegroupbookings.com/last-minute-group-flight-booking/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://airlinegroupbookings.com/last-minute-group-flight-booking/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a group book flights a week before travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be possible if there are enough seats, but some airlines won't offer a group contract this close to departure. You might need individual tickets or two different flights. Send your exact headcount, your preferred date and a backup, so more options can be checked at once."
          }
        },
        {
          "@type": "Question",
          "name": "Can you find urgent flights for 10 or more passengers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can check what's available, though 10 or more seats on one flight isn't guaranteed. Decide now whether your group can split, and who must arrive first. For urgent requests, call us with names, departure city, destination and travel date ready."
          }
        },
        {
          "@type": "Question",
          "name": "Are last minute group flights cheaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Don't count on it. Fares often rise as departure gets closer and seats fill up. Compare the total per traveler, including bags and seat fees. A different time of day or a nearby airport may be worth checking too."
          }
        },
        {
          "@type": "Question",
          "name": "How fast do we need to pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly right away. Close to departure, an airline may ask for full payment at booking or within a very short window. Agree who is paying before you request the quote, check the card limit and get the deadline in writing. A delay could mean losing that fare."
          }
        },
        {
          "@type": "Question",
          "name": "Can we cancel after booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may be able to cancel, but getting money back is a separate question. It depends on the fare, the contract and the rules that apply to your trip. Before paying, ask what is refundable, whether unused value becomes a credit and whether one traveler can cancel without affecting the others."
          }
        }
      ]
    }
  ]
},
    metaTitle: 'Last Minute Group Flight Booking | Get a Quote Today',
    metaDescription:
      'Need group seats at short notice? Share your route, dates and headcount, and we\'ll check available flights and fare options. Call or request a quote today.',
    eyebrow: 'SHORT-NOTICE TRAVEL',
    h1: 'Last Minute Group Flight Booking',
    heroSubtitle:
      'Your team just qualified. A client moved the meeting to next week. Or the whole family needs to travel urgently. Send us your route, dates and headcount, or call our 24/7 desk at +1-833-958-0151.',
    image: '/images/deals/Last Minute.jpg.jpeg',
    imageCaption: 'Last minute group flight booking & short-notice group flights',
    introHeading: 'Urgent Group Flights for Teams, Companies & Families',
    introParagraphs: [
      'Your team just qualified. A client moved the meeting to next week. Or there\'s been news from home and the whole family needs to go. Suddenly you need a lot of seats and very little time.',
      "Send Airline Group Bookings your route, dates and headcount, and we'll check what's available. For urgent trips, calling is usually quicker than filling in a form: +1-833-958-0151.",
    ],
    calloutBox: {
      eyebrow: 'HONEST ADVICE',
      title: 'A quick, honest note about last minute "deals"',
      text: 'Short notice often means fewer seats and higher fares. We can’t promise a discount, or that everyone will fit on one flight. A group fare may not be offered close to departure, so individual tickets may be the practical choice.',
    },
    whoWeHelpHeading: 'Who needs short-notice group travel',
    whoWeHelp: [
      {
        letter: 'S',
        title: 'Sports teams',
        desc: 'Last minute flights for sports team playoffs need kit and equipment details up front.',
      },
      {
        letter: 'C',
        title: 'Companies',
        desc: 'For short notice flights for a company team, say who can approve payment today.',
      },
      {
        letter: 'F',
        title: 'Families',
        desc: 'If you need last minute group flights for a funeral, ask each airline whether it has a bereavement policy.',
      },
      {
        letter: 'V',
        title: 'Crews and volunteers',
        desc: 'Projects and relief work can change dates quickly.',
      },
    ],
    howItWorksHeading: 'How to book group flights at short notice',
    howItWorks: [
      {
        num: '1',
        title: 'Collect the essentials',
        desc: 'Departure city, destination, date and exact number of travelers.',
      },
      {
        num: '2',
        title: 'Get names ready',
        desc: 'Spell them exactly as on each ID or passport.',
      },
      {
        num: '3',
        title: 'Say what can flex',
        desc: 'Nearby airports, another time of day or two separate flights.',
      },
      {
        num: '4',
        title: 'Check documents',
        desc: 'Passports and visas may take longer than your booking.',
      },
      {
        num: '5',
        title: 'Decide quickly, but read first',
        desc: 'Check the total price, payment deadline and refund terms.',
      },
    ],
    howItWorksNote:
      'Close to departure, airline seats change in real time. Full payment and immediate ticketing are often required.',
    tipsHeading: 'Tips for urgent group bookings',
    tips: [
      {
        title: 'Call directly for immediate availability',
        desc: 'When traveling within 7 to 10 days, calling our 24/7 desk at +1-833-958-0151 is faster than waiting on web inquiries.',
      },
      {
        title: 'Be ready with full payment immediately',
        desc: 'Airlines often require full payment upon booking for short-notice itineraries, with very tight payment windows.',
      },
      {
        title: 'Consider split departures or flights',
        desc: 'Splitting your party across two flights departing a few hours apart often opens up far better seat availability.',
      },
      {
        title: 'Double-check traveler IDs and passports',
        desc: 'With same-week departures, name errors or expired IDs cannot be easily resolved before flight time.',
      },
    ],
    formHeading: 'Tell us what you need',
    formSubtitle: 'Call with your route, date and headcount, or send them through the form.',
    faqHeading: 'Common questions',
    faqs: [
      {
        question: 'Can a group book flights a week before travel?',
        answer:
          'It may be possible if there are enough seats, but some airlines won’t offer a group contract this close to departure. You might need individual tickets or two different flights. Send your exact headcount, your preferred date and a backup, so more options can be checked at once.',
      },
      {
        question: 'Can you find urgent flights for 10 or more passengers?',
        answer:
          'We can check what’s available, though 10 or more seats on one flight isn’t guaranteed. Decide now whether your group can split, and who must arrive first. For urgent requests, call us with names, departure city, destination and travel date ready.',
      },
      {
        question: 'Are last minute group flights cheaper?',
        answer:
          'Don’t count on it. Fares often rise as departure gets closer and seats fill up. Compare the total per traveler, including bags and seat fees. A different time of day or a nearby airport may be worth checking too.',
      },
      {
        question: 'How fast do we need to pay?',
        answer:
          'Possibly right away. Close to departure, an airline may ask for full payment at booking or within a very short window. Agree who is paying before you request the quote, check the card limit and get the deadline in writing. A delay could mean losing that fare.',
      },
      {
        question: 'Can we cancel after booking?',
        answer:
          'You may be able to cancel, but getting money back is a separate question. It depends on the fare, the contract and the rules that apply to your trip. Before paying, ask what is refundable, whether unused value becomes a credit and whether one traveler can cancel without affecting the others.',
      },
    ],
  },
}
