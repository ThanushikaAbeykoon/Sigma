import type { Metadata } from "next";
import { Compass, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsBar from "@/components/home/StatsBar";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sigma Business Finance is a UK commercial finance broker built to make business funding fast, transparent and genuinely on your side.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Transparent, always",
    description:
      "Clear rates, clear terms, no hidden fees. If a product isn't right for you, we'll say so.",
  },
  {
    icon: Target,
    title: "Matched, not mass-marketed",
    description:
      "Every recommendation is based on your numbers and goals — not whichever lender pays the most commission.",
  },
  {
    icon: HeartHandshake,
    title: "On your side",
    description:
      "We work for you, not the lender. Our job is to get you the best outcome, not just any outcome.",
  },
  {
    icon: Compass,
    title: "Straightforward, start to finish",
    description:
      "One dedicated account manager, plain-English guidance, and a process built to move quickly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sigma"
        title="Business finance shouldn't be this hard"
        description="We started Sigma Business Finance because too many good businesses were being turned away by their bank, or drowning in paperwork just to get a straight answer. We built the alternative."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeading eyebrow="Our Story" title="A broker built around the borrower" />
            <p className="text-base leading-relaxed text-neutral-600">
              Sigma Business Finance was founded to close the gap between
              ambitious UK businesses and the funding they need to grow. Too
              often, business owners were stuck choosing between a single
              bank&apos;s narrow criteria or navigating dozens of lenders alone.
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              Today, we work with a panel of 60+ specialist lenders across
              every major finance product — from short-term working capital to
              multi-million pound commercial property deals — so business
              owners get one straightforward point of contact and a genuinely
              whole-of-market comparison.
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              We&apos;re not a lender. We don&apos;t profit from pushing one
              product over another. Our only job is to find the facility that
              actually fits your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-neutral-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Regulated, responsible, and on your side"
            description="Sigma Business Finance operates as a credit broker, not a lender. We're paid by our lending partners, so our service to you is completely free — and we're always upfront about how we're remunerated."
            align="center"
            className="mx-auto"
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
