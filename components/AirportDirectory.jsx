import Image from "next/image";
import Link from "next/link";
import { airports, popularCities } from "@/data/airports";
import AirportDirectory from "@/components/AirportDirectory";

const PHONE = "+91 00000 00000"; // <-- apna number daalo
const PHONE_LINK = "tel:+910000000000"; // <-- apna number daalo

export const metadata = {
  title: "Group Booking Airports | Delhi, Mumbai, Dubai & More",
  description:
    "Browse airports for group flight bookings. Get group fares for 10+ passengers from India and international airports with 24/7 support.",
};

const faqs = [
  {
    q: "Which airports can I book group flights from?",
    a: "You can request group fares from all airports listed in this directory, including major Indian metros and international hubs.",
  },
  {
    q: "What is the minimum group size?",
    a: "Most airlines treat around 10 passengers as the starting point for group handling. The exact limit varies by airline and season.",
  },
  {
    q: "How do I get a quote from a specific airport",
    a: "Fill in the quote form with your route, dates and number of passengers, or call our group desk directly.",
  },
  {
    q: "Can I book international groups from these airports?",
    a: "Yes. We handle both domestic and international group movements with flexible name changes and GST billing where applicable.",
  },
  {
    q: "Is support available 24/7?",
    a: "Yes. Our group desk is available round the clock for quotes, name lists, payment milestones and urgent travel help.",
  },
];

export default function AirportsPage() {
  const indiaCount = airports.filter((a) => a.isIndia).length;
  const intlCount = airports.length - indiaCount;
  const popular = popularCities
    .map((c) => airports.find((a) => a.city === c))
    .filter(Boolean);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background image */}
        <Image
          src="images/back.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay so text stays readable (opacity kam/zyada kar sakte ho: /60, /70, /80) */}
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Airports</span>
          </nav>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Group Booking <span className="text-blue-500">Airports</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Browse {airports.length}+ departure airports for group flights of 10 or more
            passengers. Request seat blocks, group fares, flexible names and GST billing.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { n: indiaCount, l: "India airports" },
              { n: intlCount, l: "International airports" },
              { n: "24/7", l: "Group desk" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-blue-400">{s.n}</p>
                <p className="mt-1 text-sm text-slate-200">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Popular airports for group booking
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {popular.map((a) => (
            <span
              key={a.name}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-800"
            >
              {a.city}
              <span className="ml-1.5 font-normal opacity-70">· {a.country}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Directory */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            All airports for group booking
          </h2>
          <AirportDirectory airports={airports} />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Airport group booking FAQs
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-600"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">
                {f.q}
                <span className="ml-4 text-xl text-blue-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-600 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to book a group from any airport?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Share your origin, destination, dates and passenger count (10+) for a free group
            fare quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_LINK}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Call {PHONE}
            </a>
            <Link
              href="/#quote"
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}