'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    quote: 'Having one place to start our flight search made planning the reunion feel much more manageable.',
    name: 'Morgan L.',
    role: 'Family reunion organizer',
  },
  {
    quote: 'The team helped us compare schedules and keep our group updated as we worked through the options.',
    name: 'Priya S.',
    role: 'School trip coordinator',
  },
  {
    quote: 'Clear communication helped our team understand the quote details and the next steps.',
    name: 'Chris D.',
    role: 'Conference planner',
  },
]

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null)

  return (
    <section className="home-testimonials bg-blue-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 ring-1 ring-inset ring-blue-700/10">
            Stories from travelers
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
        </div>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            onSwiper={setSwiper}
            className="home-testimonial-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <article className="flex h-full min-h-80 flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-md shadow-blue-950/5 sm:p-7">
                  <Quote className="h-10 w-10 text-blue-600" aria-hidden="true" />
                  <div className="mt-4 flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg font-medium leading-relaxed text-slate-700">
                    â€œ{review.quote}â€
                  </blockquote>
                  <div className="mt-7 flex items-center gap-3 border-t border-blue-50 pt-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white" aria-hidden="true">
                      {review.name.split(' ').map((part) => part[0]).join('')}
                    </span>
                    <span>
                      <span className="block text-base font-bold text-slate-900">{review.name}</span>
                      <span className="mt-0.5 block text-xs font-medium text-slate-500">{review.role}</span>
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-2 flex justify-center gap-3">
          <button type="button" onClick={() => swiper?.slidePrev()} className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-800 shadow-sm transition hover:bg-blue-700 hover:text-white" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => swiper?.slideNext()} className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-800 shadow-sm transition hover:bg-blue-700 hover:text-white" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
