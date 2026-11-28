import Image from 'next/image'
import Link from 'next/link'
import ContactFab from '../components/home/ContactFab'
import QuoteForm from '../components/home/QuoteForm'
import {
    AirlinesSection,
    BlogsSection,
    DealsSection,
    DepartureCitiesSection,
    DestinationsSection,
    HowItWorksSection,
    WhoItsForSection,
    WhyChooseSection,
} from '../components/home/HomeSections'
import Testimonials from '../components/home/Testimonials'
import FaqSection from '../components/content/FaqSection'
import JsonLd from '../components/seo/JsonLd'
import { homeFaqs } from '../data/pageFaqs'
import { pageSchemas } from '../data/pageSchemas'
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
        <JsonLd data={pageSchemas.home} />
        <section className="home-hero relative isolate overflow-visible">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <Image
                    src="/images/Airline Group Booking Webside Banner.jpg.jpeg.png"
                    alt="Passenger airplane flying over a world map with flight routes"
                    fill
                    priority
                    quality={70}
                    sizes="100vw"
                    className="-z-20 object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a3d]/95 via-[#101a3d]/70 to-[#101a3d]/10" aria-hidden="true" />
            </div>
            <div className="mx-auto flex max-w-[1440px] items-center px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10 lg:pb-12">
                <div className="min-w-0 max-w-[540px] text-left text-white">
                    <p className="inline-flex items-center rounded-full border border-red-200/40 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-100"><span aria-hidden="true" className="mr-2 h-2 w-2 rounded-full bg-red-400" />Group flights across the USA</p>
                    <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">Airline Group Booking in the USA for 10+ Passengers</h1>
                    <p className="mt-3 max-w-[540px] text-base leading-7 text-white/90 lg:mt-4 lg:text-lg">
                        Booking one seat is easy. Booking forty is a different job. Tell us where your group is flying from and where it's headed, and we'll send a group airline tickets quote with fares you can compare, plus the deposit and name-list details airlines don't always spell out.
                    </p>
                </div>
            </div>
        </section>
        <div id="booking" className="home-booking relative z-40 mx-auto -mt-2 mb-0 w-full max-w-6xl scroll-mt-[100px] px-4 sm:-mt-8 sm:px-6 lg:-mt-10 lg:scroll-mt-[160px] lg:px-8">
            <QuoteForm />
            <p className="mt-3 text-center text-sm font-medium text-slate-600">Free quote. No pressure to book.</p>
        </div>
        <AirlinesSection />
        <HowItWorksSection />
        <DealsSection />
        <WhoItsForSection />
        <DepartureCitiesSection />
        <DestinationsSection />
        <WhyChooseSection />
        <BlogsSection />
        <Testimonials />
        <FaqSection
            heading={homeFaqs.heading}
            intro={homeFaqs.intro}
            items={homeFaqs.items}
            accentWord="FAQs"
        />
        <div className="bg-slate-50 px-5 pb-14 sm:px-8 sm:pb-16 pt-5">
            <div className="mx-auto flex max-w-7xl justify-center">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                    Get Your Free Group Quote
                </Link>
            </div>
        </div>
        {/* <Newsletter /> */}

        <ContactFab />
    </main>
}
