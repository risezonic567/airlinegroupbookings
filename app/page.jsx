import ContactFab from '../components/home/ContactFab'
import QuoteForm from '../components/home/QuoteForm'
import { AirlinesSection, BlogsSection, DealsSection, DestinationsSection, WhyChooseSection } from '../components/home/HomeSections'
import Testimonials from '../components/home/Testimonials'
import FaqSection from '../components/content/FaqSection'
import PageStructuredData from '../components/seo/PageStructuredData'
import { homeFaqs } from '../data/pageFaqs'
import { mainPageSeo } from '../data/mainPageSeo'
import { createPageMetadata } from '../lib/seo'
// import Newsletter from '../components/home/Newsletter'

const seo = mainPageSeo.home

export const metadata = {
    ...createPageMetadata({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path: '/',
    }),
    verification: {
        google: 'w_FmKg1-XlB3fN-JMECpNK8PJ4Ky47t39uURze3OcjU',
    },
}


export default function HomePage() {
    return <main>
        <PageStructuredData name={seo.metaTitle} description={seo.metaDescription} path="/" />
        <section className="home-hero relative isolate overflow-visible">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 -z-20 bg-cover bg-[position:62%_center]" style={{ backgroundImage: "url('/images/Airline Group Booking Webside Banner.jpg.jpeg.png')" }} />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/70 to-[#101a3d]/10" />
            </div>
            <div className="mx-auto flex max-w-[1440px] items-center px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10 lg:pb-12">
                <div className="min-w-0 max-w-[540px] text-left text-white">
                    <p className="inline-flex items-center rounded-full border border-red-200/40 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-100"><span aria-hidden="true" className="mr-2 h-2 w-2 rounded-full bg-red-400" />Reserve your group trip here</p>
                    <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">Airline Group Booking <span className="text-blue-200">for 10+ Passengers</span></h1>
                    <p className="mt-3 max-w-[540px] text-base leading-7 text-white/90 lg:mt-4 lg:text-lg">Need group flight booking for 10 or more passengers? Book group flights online, get a group airline tickets quote, and compare group travel flight deals USA with clear support from Airline Group Bookings.</p>
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
