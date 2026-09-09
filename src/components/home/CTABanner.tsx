import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-600 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Find the funding built for your business
        </h2>
        <p className="max-w-xl text-primary-100">
          Speak to a funding specialist today, or check your eligibility online
          in under a minute — no cost, no obligation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact#eligibility" variant="secondary" size="lg">
            Check Eligibility
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="tel:03300584444" variant="white" size="lg">
            <PhoneCall className="h-4 w-4" />
            0330 058 4444
          </Button>
        </div>
      </div>
    </section>
  );
}
