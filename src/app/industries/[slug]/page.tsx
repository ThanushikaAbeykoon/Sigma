import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorPageTemplate from "@/components/industries/SectorPageTemplate";
import { industries, getIndustryBySlug } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata(
  props: PageProps<"/industries/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.name} Finance`,
    description: industry.heroDescription,
  };
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <SectorPageTemplate industry={industry} />;
}
