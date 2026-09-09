"use client";

import { useMemo, useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

const ILLUSTRATIVE_APR = 8.9;

export default function Calculator() {
  const [amount, setAmount] = useState(100000);
  const [term, setTerm] = useState(36);

  const { monthly, totalRepayable, totalInterest } = useMemo(() => {
    const monthlyRate = ILLUSTRATIVE_APR / 100 / 12;
    const monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    const total = monthlyPayment * term;

    return {
      monthly: monthlyPayment,
      totalRepayable: total,
      totalInterest: total - amount,
    };
  }, [amount, term]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <SectionHeading
          eyebrow="Repayment Calculator"
          title="Estimate your monthly repayments"
          description="Get an instant, indicative repayment figure before you apply. Your actual rate depends on your business profile and chosen lender."
        />

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary-700">
            <CalculatorIcon className="h-4 w-4" />
            Loan Calculator
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="amount" className="text-sm font-medium text-neutral-700">
                  Funding amount
                </label>
                <span className="text-lg font-bold text-neutral-900">
                  {formatCurrency(amount)}
                </span>
              </div>
              <input
                id="amount"
                type="range"
                min={10000}
                max={2000000}
                step={5000}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                className="mt-3 w-full accent-secondary-500"
              />
              <div className="mt-1 flex justify-between text-xs text-neutral-500">
                <span>£10k</span>
                <span>£2M</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="term" className="text-sm font-medium text-neutral-700">
                  Repayment term
                </label>
                <span className="text-lg font-bold text-neutral-900">
                  {term} months
                </span>
              </div>
              <input
                id="term"
                type="range"
                min={6}
                max={72}
                step={6}
                value={term}
                onChange={(event) => setTerm(Number(event.target.value))}
                className="mt-3 w-full accent-secondary-500"
              />
              <div className="mt-1 flex justify-between text-xs text-neutral-500">
                <span>6 months</span>
                <span>72 months</span>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-secondary-500 p-4 text-white sm:col-span-1">
              <p className="text-xs font-medium uppercase tracking-wide text-white/80">
                Est. monthly
              </p>
              <p className="mt-1 text-2xl font-bold">
                {formatCurrency(monthly)}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Total repayable
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {formatCurrency(totalRepayable)}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Total interest
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {formatCurrency(totalInterest)}
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-neutral-500">
            Illustrative only, based on a representative rate of {ILLUSTRATIVE_APR}% APR.
            Your actual rate, term and repayments will depend on your business
            circumstances and chosen lender.
          </p>
        </div>
      </div>
    </section>
  );
}
