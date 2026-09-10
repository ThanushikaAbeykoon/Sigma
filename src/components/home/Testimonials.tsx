"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-neutral-50 py-20 sm:py-28" id="testimonials">
      <div className="container-page flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by businesses across the UK"
          align="center"
          className="mx-auto"
        />

        <div className="relative w-full max-w-2xl">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-8 text-center shadow-xl shadow-primary-900/5 ring-1 ring-neutral-200 sm:p-12">
            <Quote className="h-8 w-8 text-secondary-400" />

            <p className="text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
              &ldquo;{active.quote}&rdquo;
            </p>

            <div className="flex gap-0.5 text-secondary-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <div>
              <p className="font-bold text-neutral-900">{active.name}</p>
              <p className="text-sm text-neutral-500">{active.role}</p>
            </div>

            <div className="flex gap-6 border-t border-neutral-200 pt-5 text-sm">
              <span className="font-semibold text-primary-700">
                {active.amount}
              </span>
              <span className="font-semibold text-secondary-600">
                {active.timeframe}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2.5 text-primary-800 shadow-sm hover:bg-primary-50 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2.5 text-primary-800 shadow-sm hover:bg-primary-50 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-secondary-500" : "w-2.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
