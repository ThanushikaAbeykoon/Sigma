import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import EligibilityForm from "@/components/home/EligibilityForm";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sigma Business Finance or check your funding eligibility online in 60 seconds — no credit check, no obligation.",
};

const details = [
  { icon: Phone, label: "Call us", value: "0330 058 4444", href: "tel:03300584444" },
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
        description="Check your eligibility online, or send us a message and a funding specialist will be in touch within one working day."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Check Eligibility"
              title="See what you qualify for"
              description="Takes about 60 seconds and won't affect your credit score."
            />
            <EligibilityForm id="eligibility" />
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
