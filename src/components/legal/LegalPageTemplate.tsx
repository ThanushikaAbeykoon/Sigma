import type { ReactNode } from "react";
import PageHero from "@/components/ui/PageHero";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPageTemplate({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageTemplateProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-8 flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl font-bold text-neutral-900">
                    {section.heading}
                  </h2>
                  <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-neutral-600">
                    {section.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
