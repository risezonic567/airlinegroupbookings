import { Plane } from 'lucide-react'
import ContactFab from '../components/home/ContactFab'
import QuoteForm from '../components/home/QuoteForm'
import { AirlinesSection, BlogsSection, DealsSection, DestinationsSection, WhyChooseSection } from '../components/home/HomeSections'
import Testimonials from '../components/home/Testimonials'
import FaqSection from '../components/content/FaqSection'
import PageStructuredData from '../components/seo/PageStructuredData'
import { homeFaqs } from '../data/pageFaqs'
import { createPageMetadata } from '../lib/seo'
// import Newsletter from '../components/home/Newsletter'

export const metadata = {
    ...createPageMetadata({
        title: 'Airline Group Booking | Airline Group Bookings',
        description: 'Airline group booking for group flight booking for 10 or more passengers. Book group flights online, get a free group flight quote or group airline tickets quote, and compare group travel flight deals USA.',
        path: '/',
    }),
    verification: {
        google: 'w_FmKg1-XlB3fN-JMECpNK8PJ4Ky47t39uURze3OcjU',
    },
}


export default function HomePage() {
    return <main>
        <PageStructuredData name="Airline Group Booking | Airline Group Bookings" description="Airline group booking for group flight booking for 10 or more passengers. Book group flights online, get a free group flight quote or group airline tickets quote, and compare group travel flight deals USA." path="/" />
        <section className="relative isolate min-h-[620px]  pb-12 sm:pb-16 lg:pb-20">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/Airline Group Booking Webside Banner.jpg.jpeg')" }} />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/65 via-blue-950/35 to-blue-950/60" />
                <div className="absolute left-[14%] top-[24%] hidden -rotate-12 text-white drop-shadow-lg md:block"><Plane className="h-16 w-16 fill-white/90" /></div>
            </div>
            <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 sm:pt-9 lg:px-10">
                <div className="max-w-[760px] text-left text-[#f0f2f5] sm:ml-auto sm:text-right"><p className="text-base font-medium sm:text-2xl">FLY TOGETHER, SAVE TOGETHER</p><h1 className="mt-2 text-[34px] font-semibold leading-tight tracking-wide sm:text-5xl lg:text-[56px]">Airline Group Booking <span className="text-blue-500">Made Simple<br className="hidden sm:block" /> for Your Next Trip</span></h1><p className="mt-3 max-w-lg text-md leading-6 text-slate-800 sm:ml-auto ">Need group flight booking for 10 or more passengers? Book group flights online, request a free group flight quote or group airline tickets quote, and explore group travel flight deals USA with clear support.</p></div>
                <div id="booking" className="home-booking relative z-30 mt-8 scroll-mt-8 sm:mt-10 lg:mt-12"><QuoteForm /></div>
            </div>
        </section>

        <AirlinesSection />
        <DealsSection />
        <WhyChooseSection />
        <DestinationsSection />
        <BlogsSection />
        <Testimonials />
        <FaqSection
            heading={homeFaqs.heading}
            intro={homeFaqs.intro}
            items={homeFaqs.items}
            path="/"
            accentWord="Questions"
        />
        {/* <Newsletter /> */}

        <ContactFab />
    </main>
}
