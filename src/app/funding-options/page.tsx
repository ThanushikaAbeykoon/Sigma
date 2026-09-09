import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/home/CTABanner";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Funding Options",
  description:
    "Explore Sigma Business Finance's full range of UK business funding solutions — business loans, invoice finance, asset finance, commercial property finance and more.",
};

export default function FundingOptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Funding Options"
        title="A finance solution for every stage of business"
        description="We work across a panel of 60+ specialist lenders to match you with the right product — not just the first one available."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.slug}
              id={solution.slug}
              className="grid scroll-mt-24 gap-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm shadow-primary-900/5 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:p-10"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-700 to-secondary-500 text-white">
                <solution.icon className="h-8 w-8" />
              </span>

              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-secondary-600">
                    Solution {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-neutral-900">
                    {solution.name}
                  </h2>
                  <p className="mt-1 text-neutral-600">{solution.tagline}</p>
                </div>

                <p className="text-sm leading-relaxed text-neutral-600">
                  {solution.summary}
                </p>

                <ul className="flex flex-col gap-2">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[220px] lg:border-l lg:border-neutral-200 lg:pl-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Facility size
                  </p>
                  <p className="text-lg font-bold text-neutral-900">{solution.range}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Term
                  </p>
                  <p className="font-semibold text-neutral-800">{solution.term}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Decision
                  </p>
                  <p className="font-semibold text-neutral-800">{solution.decision}</p>
                </div>
                <Button href="/contact#eligibility" variant="secondary">
                  Check Eligibility
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
