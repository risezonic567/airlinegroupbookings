import { MessageCircle, Phone, Plane } from 'lucide-react'
import contactDetails from '../data/contact'
import QuoteForm from '../components/home/QuoteForm'
import { AirlinesSection, BlogsSection, DealsSection, DestinationsSection, WhyChooseSection } from '../components/home/HomeSections'
import Testimonials from '../components/home/Testimonials'
// import Newsletter from '../components/home/Newsletter'

export const metadata = {
    title: 'AirlinesGroup Travel | Group Flight Bookings',
    description: 'Find and book group flights with dedicated travel support from AirlinesGroup Travel.',
}

export default function HomePage() {
    return <main>
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

        <div className="group fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6" aria-label="Contact us">
            <div className="invisible flex translate-x-3 flex-col items-end gap-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-x-0 group-focus-within:opacity-100">
                <a href={contactDetails.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-md font-semibold text-white shadow-lg transition hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-green-200">WhatsApp <MessageCircle className="h-5 w-5" aria-hidden="true" /></a>
                <a href={contactDetails.phoneHref} aria-label={`Call ${contactDetails.phoneDisplay}`} className="inline-flex items-center gap-3 rounded-full bg-blue-700 px-4 py-3 text-md font-semibold text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">Call us <Phone className="h-5 w-5" aria-hidden="true" /></a>
            </div>
            <button type="button" aria-label="Show WhatsApp and phone contact options" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-green-200"><MessageCircle className="h-7 w-7" aria-hidden="true" /></button>
        </div>
    </main>
}
