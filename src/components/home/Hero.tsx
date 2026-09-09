import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary-200/40 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-700 shadow-sm">
            Trusted UK Business Finance Broker
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            You Built The Business.
            <br />
            <span className="text-gradient">We&apos;ll Help You Fund It.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-neutral-600">
            Sigma Business Finance matches you with the right lender from a
            panel of <strong className="text-neutral-900">60+ specialist funders</strong> —
            with decisions in as little as 24–48 hours, and absolutely no
            upfront fees.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact#eligibility" variant="secondary" size="lg">
              Check Your Eligibility
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/funding-options" variant="outline" size="lg">
              Explore Solutions
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-neutral-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-700" />
              No impact on credit score
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-700" />
              Whole-of-market panel
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-700" />
              Dedicated account manager
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-fade-up [animation-delay:150ms]">
          <div className="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl shadow-primary-900/10 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-500">
                Funding Estimate
              </span>
              <span className="flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700">
                <TrendingUp className="h-3.5 w-3.5" />
                Live match
              </span>
            </div>

            <p className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              £250,000
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Estimated facility for a business turning over £1.2M/year
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: "Rate from", value: "6.9% APR" },
                { label: "Term", value: "Up to 6 years" },
                { label: "Decision in", value: "24–48 hours" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3 text-sm"
                >
                  <span className="text-neutral-500">{row.label}</span>
                  <span className="font-semibold text-neutral-900">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-700 to-secondary-500 px-4 py-3.5 text-white">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">
                Pre-qualified with 4 lenders on our panel
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-xl shadow-primary-900/10 sm:block">
            <p className="text-2xl font-bold text-primary-800">£250M+</p>
            <p className="text-xs text-neutral-500">Funding facilitated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
