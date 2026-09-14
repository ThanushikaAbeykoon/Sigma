import type { Metadata } from "next";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import ApplyNowModal from "@/components/contact/ApplyNowModal";

const applyBenefits = [
  "Decisions in as little as 24–48 hours",
  "Whole-of-market panel of 60+ lenders",
  "No upfront fees",
];

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sigma Business Finance or check your funding eligibility online in 60 seconds — no credit check, no obligation.",
};

const details = [
  { icon: Phone, label: "Call us", value: "0151 837 3528", href: "tel:01518373528" },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@sigmabusinessfinance.co.uk",
    href: "mailto:hello@sigmabusinessfinance.co.uk",
  },
  { icon: MapPin, label: "Visit us", value: "128 Sigma House, London, EC2A 4BX" },
  { icon: Clock, label: "Opening hours", value: "Mon – Fri, 9:00am – 6:00pm" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's find the right funding for your business"
        description="Apply online in minutes, or send us a message and a funding specialist will be in touch within one working day."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div id="eligibility" className="scroll-mt-24 flex flex-col gap-8">
            <SectionHeading
              eyebrow="Apply Now"
              title="Ready to get funded?"
              description="Start your application in minutes — no obligation, and a funding specialist will be in touch within one working day."
            />
            <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <ul className="flex flex-col gap-3">
                {applyBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <ApplyNowModal />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Send A Message"
              title="Prefer to just ask a question?"
              description="Fill in the form below and our team will get back to you directly."
            />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <detail.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a href={detail.href} className="font-semibold text-neutral-900 hover:text-primary-700">
                    {detail.value}
                  </a>
                ) : (
                  <p className="font-semibold text-neutral-900">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
