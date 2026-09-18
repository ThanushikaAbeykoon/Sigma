import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";

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
        <div className="flex w-full flex-row gap-2.5 sm:w-auto sm:gap-3">
          <CheckEligibilityButton
            size="lg"
            className="flex-1 !px-3.5 !py-2.5 !text-sm sm:flex-initial sm:!px-7 sm:!py-3.5 sm:!text-base"
          >
            Check Eligibility
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </CheckEligibilityButton>
          <Button
            href="tel:01518373528"
            variant="white"
            size="lg"
            className="flex-1 !px-3.5 !py-2.5 !text-sm sm:flex-initial sm:!px-7 sm:!py-3.5 sm:!text-base"
          >
            <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            0151 837 3528
          </Button>
        </div>
      </div>
    </section>
  );
}
