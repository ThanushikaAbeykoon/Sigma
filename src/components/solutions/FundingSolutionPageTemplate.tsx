import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/home/CTABanner";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";
import Button from "@/components/ui/Button";
import type { Solution } from "@/data/solutions";

const trustBullets = [
  "No impact on credit score",
  "Whole-of-market panel",
  "Dedicated account manager",
];

type FundingSolutionPageTemplateProps = {
  solution: Solution;
};

export default function FundingSolutionPageTemplate({ solution }: FundingSolutionPageTemplateProps) {
  const facts = [
    { label: "Facility size", value: solution.range },
    { label: "Term", value: solution.term },
    { label: "Decision", value: solution.decision },
  ];

  return (
    <>
      <PageHero eyebrow={solution.name} title={solution.heroTitle} description={solution.heroDescription}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CheckEligibilityButton size="lg">
            Check Eligibility
            <ArrowRight className="h-4 w-4" />
          </CheckEligibilityButton>
          <Button href="tel:01518373528" variant="white" size="lg">
            0151 837 3528
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

        <div className="mt-2 grid grid-cols-3 gap-3 sm:max-w-md">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-md">
              <p className="text-[11px] font-medium uppercase tracking-wide text-primary-300">
                {fact.label}
              </p>
              <p className="text-sm font-bold text-white">{fact.value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="How It Works"
            title={solution.introTitle}
            description={solution.introDescription}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solution.benefits.map((benefit) => (
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
        </div>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Options"
            title={solution.optionsSectionTitle}
            description={solution.optionsSectionDescription}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.options.map((item) => (
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
            eyebrow="Good To Know"
            title={`When to consider ${solution.name.toLowerCase()}`}
            description="A snapshot of the situations our panel most commonly helps clients with."
          />

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {solution.useCaseBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-neutral-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" id="faq">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQs"
            title={`${solution.name}, answered`}
            description="Common questions we hear most often from businesses like yours."
          />
          <Accordion items={solution.faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
