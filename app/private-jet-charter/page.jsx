import Link from "next/link";
import {
  Send,
  Search,
  MessagesSquare,
  Phone,
  Clock,
  Headphones,
  ArrowRight,
} from "lucide-react";

import Accordion from "@/components/private-jet/Accordion";
import {
  BRAND,
  PHONE,
  steps,
  reasons,
  deals,
  benefitPoints,
  benefitItems,
  articles,
} from "@/data/privateJetCharter";
import QuoteForm from "@/components/home/QuoteForm";
import { AirlinesSection, DealsSection, WhyChooseSection } from "@/components/home/HomeSections";
import JsonLd from "@/components/seo/JsonLd";
import { pageSchemas } from "@/data/pageSchemas";

export const metadata = {
  title: "Private Jet Charter | Private Jet Rentals & Charter Flights",
  description:
    "Rent a private jet for your group or business trip. Share your route and get a private jet charter quote within 60 minutes.",
  alternates: { canonical: "/private-jet-charter" },
  openGraph: {
    title: "Private Jet Rentals & Charter Flights",
    description:
      "Get a private jet charter quote for your group or business trip within 60 minutes.",
    type: "website",
  },
};

const stepIcons = [Send, Search, MessagesSquare];
const phoneHref = `tel:${PHONE.replace(/[^+\d]/g, "")}`;

const photo = (url, overlay) => ({
  backgroundImage: `${overlay}, url(${url})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export default function PrivateJetCharterPage() {
  return (
    <main className="bg-white text-neutral-900">
      <JsonLd data={pageSchemas.privateJet} />
      {/* 1. HERO */}
      <section
        className="relative bg-neutral-950 text-white"
        style={photo(
          "/images/private-jet/hero.jpg",
          "linear-gradient(135deg, rgba(8,20,50,0.92), rgba(30,64,175,0.75))"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 pb-44 pt-20 sm:px-6 lg:px-8 lg:pb-52 lg:pt-28">
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Private Jet Rentals &amp; Charter Flights
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg">
            Trusted by <span className="font-semibold text-white">{BRAND}</span>
            . Tell us your route and get a private charter quote within 60
            minutes.
          </p>
        </div>
      </section>

      {/* QUOTE FORM (overlaps hero) */}
      <section id="quote" className="relative z-10 -mt-32 px-4 sm:px-6 lg:-mt-40 lg:px-8">
        <div className="mx-auto max-w-5xl min-w-0">
          <QuoteForm
            variant="card"
            title="Request a Private Jet Charter Quote"
            subtitle="Share your trip details and our team will get back to you within 60 minutes."
            className="w-full border-neutral-200/90 shadow-2xl"
          />
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm font-medium text-neutral-700 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3">
              <Headphones className="h-4 w-4 text-primary" />
              24/7 support
            </li>
            <li className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3">
              <Clock className="h-4 w-4 text-primary" />
              Quote in 60 minutes
            </li>
            <li>
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:border-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {PHONE}
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      {/* <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            How <span className="text-primary">it Works</span>
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <li key={step.title} className="min-w-0 text-center">
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-neutral-600">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section> */}

       <AirlinesSection />

      <WhyChooseSection />

      {/* 3. WHY PRIVATE JET */}
      <section className="bg-blue-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Here&apos;s why a{" "}
            <span className="text-primary">Private Jet Charter</span> can be
            better than a Group Booking
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <li
                key={item.title}
                className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

        {/* 4. DEALS */}
        <DealsSection />
    
      {/* 5. BENEFITS */}
      <section
        className="relative bg-neutral-950 py-16 text-white sm:py-20 lg:py-24"
        style={photo(
          "/images/private-jet/benefits.jpg",
          "linear-gradient(90deg, rgba(5,10,25,0.95), rgba(10,25,60,0.8))"
        )}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="min-w-0">
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
              What benefits can you enjoy when you book a charter with {BRAND}?
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-neutral-200 sm:text-base">
              {benefitPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <Accordion items={benefitItems} />
          </div>
        </div>
      </section>

      {/* 6. ARTICLES */}
      {/* <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={photo(
                      a.image,
                      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.05) 65%)"
                    )}
                  />
                  <span className="absolute bottom-4 left-4 right-4 text-base font-bold leading-snug text-white">
                    {a.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* 7. FINAL CTA */}
      {/* <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Planning a private jet trip? Get your quote in 60 minutes.
            </h2>
            <p className="mt-2 text-sm text-blue-100 sm:text-base">
              Or call us anytime at{" "}
              <a href={phoneHref} className="font-semibold underline">
                {PHONE}
              </a>
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section> */}
    </main>
  );
}