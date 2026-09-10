import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: StaticImageData;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 sm:py-24">
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
        </>
      ) : (
        <div
          className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-secondary-500/20 blur-3xl"
          aria-hidden
        />
      )}
      <div className="container-page relative flex flex-col items-start gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {eyebrow}
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-lg leading-relaxed text-primary-200">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
