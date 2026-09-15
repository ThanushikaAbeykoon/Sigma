"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

const STAGGER_MS = 55;
const ANIMATION_MS = 750;

type TileSize = "sm" | "wide" | "lg";

// Repeats every 6 cards so the gallery reads as a mosaic of photos
// rather than a flat grid: one large feature, one wide banner, four small tiles.
function getTileSize(index: number): TileSize {
  const position = index % 6;
  if (position === 0) return "lg";
  if (position === 3) return "wide";
  return "sm";
}

const SPAN_CLASSES: Record<TileSize, string> = {
  sm: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  lg: "col-span-2 row-span-2",
};

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const maxDelay = (industries.length - 1) * STAGGER_MS;
    const timeout = setTimeout(() => setSettled(true), ANIMATION_MS + maxDelay);
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-50 py-20 sm:py-28"
      id="industries"
    >
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Industries"
          title="Specialist funding, whatever sector you're in"
          description="We've placed finance for businesses across almost every industry — our lender panel understands the nuances of your sector."
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-2 auto-rows-[110px] gap-3 [grid-auto-flow:dense] [perspective:1200px] sm:grid-cols-4 sm:auto-rows-[140px] sm:gap-4 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const size = getTileSize(index);
            const isFeatured = size !== "sm";

            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                style={
                  inView && !settled
                    ? ({
                        animationDelay: `${index * STAGGER_MS}ms`,
                      } as React.CSSProperties)
                    : undefined
                }
                className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-neutral-200 [transform-style:preserve-3d] ${SPAN_CLASSES[size]} ${
                  !inView
                    ? "opacity-0"
                    : !settled
                      ? "animate-card-3d-in"
                      : "opacity-100 transition-all duration-300 ease-out hover:[transform:rotateX(6deg)_rotateY(-6deg)_scale(1.02)] hover:shadow-xl hover:shadow-primary-900/20 hover:ring-primary-300"
                }`}
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/25 to-transparent"
                  aria-hidden
                />

                <div className="relative flex flex-col gap-1.5 p-3 sm:p-4">
                  <span
                    className={`flex items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm ${
                      isFeatured ? "h-10 w-10" : "h-8 w-8"
                    }`}
                  >
                    <industry.icon
                      className={isFeatured ? "h-5 w-5" : "h-4 w-4"}
                    />
                  </span>
                  <p
                    className={`font-semibold text-white ${
                      isFeatured ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                    }`}
                  >
                    {industry.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
