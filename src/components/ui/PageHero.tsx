import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: StaticImageData;
  visual?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, image, visual, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-14 sm:py-16 lg:py-20">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/70" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/70 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-20 right-0 h-72 w-72 animate-float-blob rounded-full bg-secondary-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 animate-float-blob-slow rounded-full bg-primary-500/20 blur-3xl"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute -top-20 right-0 h-72 w-72 animate-float-blob rounded-full bg-secondary-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 animate-float-blob-slow rounded-full bg-primary-500/20 blur-3xl"
            aria-hidden
          />
        </>
      )}
      <div
        className={`container-page relative ${
          visual ? "grid items-center gap-10 lg:min-h-[22rem] lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {eyebrow}
          </span>
          <h1 className="line-clamp-none max-w-2xl text-4xl font-bold tracking-tight text-white sm:line-clamp-2 sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="line-clamp-none max-w-xl text-lg leading-relaxed text-primary-200 sm:line-clamp-2">
              {description}
            </p>
          ) : null}
          {visual ? (
            <div className="relative flex w-full justify-center py-2 sm:hidden">{visual}</div>
          ) : null}
          {children}
        </div>
        {visual ? (
          <div className="relative hidden justify-center sm:order-first sm:flex lg:order-last">
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  );
}
