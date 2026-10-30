import { Plane } from 'lucide-react'
import ContactFab from '../components/home/ContactFab'
import QuoteForm from '../components/home/QuoteForm'
import { AirlinesSection, BlogsSection, DealsSection, DestinationsSection, WhyChooseSection } from '../components/home/HomeSections'
import Testimonials from '../components/home/Testimonials'
import PageStructuredData from '../components/seo/PageStructuredData'
import { createPageMetadata } from '../lib/seo'
// import Newsletter from '../components/home/Newsletter'

export const metadata = createPageMetadata({
    title: 'AirlinesGroup Travel | Group Flight Bookings',
    description: 'Find and book group flights with dedicated travel support from AirlinesGroup Travel.',
    path: '/',
})


export default function HomePage() {
    return <main>
        <PageStructuredData name="AirlinesGroup Travel | Group Flight Bookings" description="Find and book group flights with dedicated travel support from AirlinesGroup Travel." path="/" />
        <section className="relative isolate min-h-[620px] bg-blue-100 pb-12 sm:pb-16 lg:pb-20">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85')" }} />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/40 to-white/10" />
                <div className="absolute left-[14%] top-[24%] hidden -rotate-12 text-white drop-shadow-lg md:block"><Plane className="h-16 w-16 fill-white/90" /></div>
            </div>
            <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 sm:pt-9 lg:px-10">
                <div className="max-w-[760px] text-left text-[#25364a] sm:ml-auto sm:text-right"><p className="text-base font-medium sm:text-2xl">Reserve your group trip here</p><h1 className="mt-2 text-[34px] font-semibold leading-tight tracking-wide sm:text-5xl lg:text-[56px]">FLY TOGETHER, <span className="text-blue-600">SAVE<br className="hidden sm:block" /> TOGETHER</span></h1><p className="mt-3 max-w-lg text-md leading-6 text-slate-600 sm:ml-auto sm:text-base">Bring everyone together with one simple flight quote.</p></div>
                <div id="booking" className="relative z-30 mt-8 scroll-mt-8 sm:mt-10 lg:mt-12"><QuoteForm /></div>
            </div>
        </section>
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
