import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28" id="industries">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Industries"
          title="Specialist funding, whatever sector you're in"
          description="We've placed finance for businesses across almost every industry — our lender panel understands the nuances of your sector."
          align="center"
          className="mx-auto"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center ring-1 ring-neutral-200 transition-colors hover:ring-primary-300"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <industry.icon className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-neutral-800">
                {industry.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
