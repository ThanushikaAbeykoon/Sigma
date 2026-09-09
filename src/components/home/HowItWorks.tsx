import { ClipboardCheck, FileSearch, HandCoins, Wallet2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Enquiry",
    description:
      "Tell us about your business and check your eligibility in 60 seconds — with no impact on your credit score.",
  },
  {
    icon: FileSearch,
    title: "Application",
    description:
      "Your dedicated account manager searches our panel of 60+ lenders and handles the paperwork for you.",
  },
  {
    icon: HandCoins,
    title: "Approval",
    description:
      "Receive a clear offer with rates and terms explained in plain English — no jargon, no surprises.",
  },
  {
    icon: Wallet2,
    title: "Payout",
    description:
      "Sign your agreement and receive funds — often the very next day after approval.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-primary-950 py-20 sm:py-28" id="how-it-works">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="How It Works"
          title="From enquiry to funded, in four simple steps"
          description="We do the legwork of comparing the market so you can get back to running your business."
          align="center"
          tone="dark"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-primary-500 text-white">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-bold text-primary-300">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-primary-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
