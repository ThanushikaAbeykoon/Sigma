import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FundingSolutionPageTemplate from "@/components/solutions/FundingSolutionPageTemplate";
import { solutions, getSolutionBySlug } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata(
  props: PageProps<"/funding-options/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return {
    title: solution.name,
    description: solution.heroDescription,
  };
}

export default async function FundingSolutionPage(props: PageProps<"/funding-options/[slug]">) {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <FundingSolutionPageTemplate solution={solution} />;
}
