import type { Metadata } from "next";
import { Coffee, GraduationCap, Mail, Rocket, TrendingUp } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/home/StatsBar";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Unlock your career potential with Sigma Business Finance. See why our team choose to build their career with us.",
};

const perks = [
  {
    icon: TrendingUp,
    title: "Real progression",
    description: "Clear paths from your first day to senior and leadership roles — we promote from within.",
  },
  {
    icon: Rocket,
    title: "Real impact",
    description: "Every deal you work on directly helps a UK business grow. You'll see the difference you make.",
  },
  {
    icon: Coffee,
    title: "A supportive culture",
    description: "Collaborative, straight-talking teams who back each other — not a call-centre script in sight.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing training",
    description: "Structured onboarding and continuous learning in commercial finance, funded by us.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Team"
        description="Unlock your career potential with Sigma Business Finance — and help build the future of UK business lending."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Sigma"
            title="Build your career somewhere that means it"
            description="We're growing fast, and we're looking for people who want to grow with us — not just fill a seat."
            align="center"
            className="mx-auto"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <perk.icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-neutral-900">{perk.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Current Openings"
            title="Don't see the right role listed?"
            description="We're always keen to hear from great people, even when we're not actively hiring for a specific position. Send us your CV and a note about what you're looking for, and we'll keep you in mind as we grow."
            align="center"
            className="mx-auto"
          />
          <Button href="mailto:careers@sigmabusinessfinance.co.uk" variant="secondary" size="lg">
            <Mail className="h-4 w-4" />
            careers@sigmabusinessfinance.co.uk
          </Button>
        </div>
      </section>
    </>
  );
}
