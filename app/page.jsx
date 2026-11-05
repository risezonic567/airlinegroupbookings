import ContactFab from '../components/home/ContactFab'
import QuoteForm from '../components/home/QuoteForm'
import { AirlinesSection, BlogsSection, DealsSection, DestinationsSection, WhyChooseSection } from '../components/home/HomeSections'
import Testimonials from '../components/home/Testimonials'
import PageStructuredData from '../components/seo/PageStructuredData'
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
        <section className="home-hero relative isolate overflow-visible">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 -z-20 bg-cover bg-[position:62%_center]" style={{ backgroundImage: "url('/images/Airline Group Booking Webside Banner.jpg.jpeg')" }} />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a1f5c]/95 via-[#0a1f5c]/70 to-[#0a1f5c]/10" />
            </div>
            <div className="mx-auto flex max-w-[1440px] items-center px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10 lg:pb-12">
                <div className="min-w-0 max-w-[540px] text-left text-white">
                    <p className="inline-flex rounded-full border border-blue-200/30 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-100">Reserve your group trip here</p>
                    <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">FLY TOGETHER, <span className="text-blue-200">SAVE<br className="hidden sm:block" /> TOGETHER</span></h1>
                    <p className="mt-3 max-w-[540px] text-base leading-7 text-white/90 lg:mt-4 lg:text-lg">Bring everyone together with one simple flight quote.</p>
                </div>
            </div>
        </section>
        <div id="booking" className="home-booking relative z-40 mx-auto -mt-2 mb-0 w-full max-w-6xl scroll-mt-[100px] px-4 sm:-mt-8 sm:px-6 lg:-mt-10 lg:scroll-mt-[160px] lg:px-8"><QuoteForm /></div>
        <AirlinesSection />
        <DealsSection />
        <WhyChooseSection />
        <DestinationsSection />
        <BlogsSection />
        <Testimonials />
        {/* <Newsletter /> */}

        <ContactFab />
    </main>
}
