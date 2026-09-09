import { Banknote, Clock3, Percent, UserCheck } from "lucide-react";

const features = [
  {
    icon: Banknote,
    title: "£10k – £10M",
    description: "Funding available across our full lender panel",
  },
  {
    icon: Percent,
    title: "Rates from 6.9%",
    description: "Competitive, market-tested pricing",
  },
  {
    icon: Clock3,
    title: "24–48 hour decisions",
    description: "Fast turnaround from enquiry to offer",
  },
  {
    icon: UserCheck,
    title: "Dedicated account manager",
    description: "One point of contact, start to finish",
  },
];

export default function FeatureBand() {
  return (
    <section className="bg-neutral-50 py-14">
      <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-primary-900/5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-700 to-secondary-500 text-white">
              <feature.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-neutral-900">{feature.title}</p>
              <p className="text-sm text-neutral-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
