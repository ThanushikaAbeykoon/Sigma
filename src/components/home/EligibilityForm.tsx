"use client";

import { useState, type FormEvent } from "react";
import { Loader2, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const revenueOptions = [
  "Under £10k / month",
  "£10k – £50k / month",
  "£50k – £150k / month",
  "£150k+ / month",
];

const amountOptions = [
  "£10k – £50k",
  "£50k – £250k",
  "£250k – £1M",
  "£1M+",
];

export default function EligibilityForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div
        id={id}
        className="flex flex-col items-center gap-3 rounded-3xl border border-primary-100 bg-white p-10 text-center shadow-xl shadow-primary-900/5"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <ShieldCheck className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-neutral-900">
          You&apos;re pre-qualified to apply
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Thanks — based on your answers, our panel has options that could
          work for you. A funding specialist will call you within one working
          day to talk through the next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-primary-100 bg-white p-6 shadow-xl shadow-primary-900/5 sm:p-8"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-secondary-600">
        <Sparkles className="h-4 w-4" />
        Takes about 60 seconds · No credit check
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Registered company name
          <input
            required
            type="text"
            placeholder="e.g. Acme Trading Ltd"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Contact email
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Average monthly revenue
          <select
            required
            defaultValue=""
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          >
            <option value="" disabled>
              Select a range
            </option>
            {revenueOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Funding amount needed
          <select
            required
            defaultValue=""
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          >
            <option value="" disabled>
              Select a range
            </option>
            {amountOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Checking your options...
          </>
        ) : (
          "Check My Eligibility"
        )}
      </Button>

      <p className="text-center text-xs text-neutral-500">
        Completely anonymous until you apply. No credit check required.
      </p>
    </form>
  );
}
