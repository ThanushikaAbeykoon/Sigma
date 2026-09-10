import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Lock,
  Percent,
  RefreshCw,
  SearchCheck,
  TrendingUp,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/home/CTABanner";
import EligibilityForm from "@/components/home/EligibilityForm";
import { solutions } from "@/data/solutions";
import type { Industry } from "@/data/industries";

const trustBullets = [
  "No impact on credit score",
  "Whole-of-market panel",
  "Dedicated account manager",
];

const eligibilityPoints = [
  {
    icon: Clock,
    title: "60-second check",
    description: "Answer four quick questions to see what you qualify for.",
  },
  {
    icon: Lock,
    title: "No credit check required",
    description: "A soft search only — your credit score is never affected.",
  },
  {
    icon: SearchCheck,
    title: "Whole-of-market search",
    description: "We instantly compare offers from 60+ specialist lenders.",
  },
];

const benefits = [
  {
    icon: Percent,
    title: "Offset rising interest rates",
    description:
      "Manageable, fixed monthly repayment plans that keep borrowing costs predictable even as rates move.",
  },
  {
    icon: CalendarClock,
    title: "Smooth out irregular cash flow",
    description:
      "Repayment structures built around your business's income cycle, not a rigid monthly schedule.",
  },
  {
    icon: RefreshCw,
    title: "Refinance owned equipment",
    description:
      "Release capital tied up in assets you already own to reinvest in the business.",
  },
  {
    icon: TrendingUp,
    title: "Invest in growth",
    description:
      "Stay competitive and productive with the equipment or capacity you need, without a large upfront outlay.",
  },
];

type SectorPageTemplateProps = {
  industry: Industry;
};

export default function SectorPageTemplate({ industry }: SectorPageTemplateProps) {
  const sectorSolutions = solutions.filter((solution) =>
    industry.solutionSlugs.includes(solution.slug)
  );

  return (
    <>
      <PageHero
        eyebrow={`${industry.name} Finance`}
        title={industry.heroTitle}
        description={industry.heroDescription}
        image={industry.image}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#eligibility" variant="secondary" size="lg">
            Check Eligibility
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="tel:03300584444" variant="white" size="lg">
            0330 058 4444
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-primary-100">
          {trustBullets.map((bullet) => (
            <span key={bullet} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              {bullet}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-28" id="eligibility">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Check Your Eligibility"
              title={`See what ${industry.name.toLowerCase()} funding you qualify for in 60 seconds`}
              description="No paperwork, no obligation, and it won't affect your credit score — just a quick, honest read on your options."
            />

            <div className="flex flex-col gap-5">
              {eligibilityPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {point.title}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <EligibilityForm />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Tailored Financing"
            title={industry.introTitle}
            description={industry.introDescription}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-neutral-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl bg-primary-50 px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
            <span className="shrink-0 text-3xl font-bold text-primary-800">32%</span>
            <p className="text-sm text-primary-900">
              of UK SMEs funded through a commercial finance broker had previously been declined funding elsewhere.{" "}
              <span className="text-primary-700">Source: NACFB Industry Report, 2024.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Equipment & Assets"
            title={industry.assetsSectionTitle}
            description={industry.assetsSectionDescription}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.assets.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-neutral-200"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Finance Products"
            title={`Finance solutions built for ${industry.name.toLowerCase()}`}
            description="A snapshot of the products our panel most commonly arranges for clients in this sector — see the full range on our funding options page."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorSolutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/funding-options#${solution.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <solution.icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-neutral-900">{solution.name}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {solution.tagline}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {industry.useCaseBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-neutral-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" id="sector-faq">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQs"
            title={`${industry.name} finance, answered`}
            description="Sector-specific questions we hear most often from businesses like yours."
          />
          <Accordion items={industry.faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
