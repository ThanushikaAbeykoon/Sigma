import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OtherSolutionPageTemplate from "@/components/otherSolutions/OtherSolutionPageTemplate";
import { otherSolutions, getOtherSolutionBySlug } from "@/data/otherSolutions";

export function generateStaticParams() {
  return otherSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata(
  props: PageProps<"/other-solutions/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getOtherSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return {
    title: solution.name,
    description: solution.heroDescription,
  };
}

export default async function OtherSolutionPage(props: PageProps<"/other-solutions/[slug]">) {
  const { slug } = await props.params;
  const solution = getOtherSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <OtherSolutionPageTemplate solution={solution} />;
}
