"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-bold text-neutral-900">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Thanks for reaching out — a member of the Sigma team will get back to
          you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Full name
          <input
            required
            type="text"
            placeholder="Jane Smith"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Company name
          <input
            type="text"
            placeholder="Acme Trading Ltd"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Email address
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          Phone number
          <input
            type="tel"
            placeholder="07123 456789"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
        How can we help?
        <textarea
          required
          rows={4}
          placeholder="Tell us a little about your business and what you're looking to fund..."
          className="resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
        />
      </label>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
