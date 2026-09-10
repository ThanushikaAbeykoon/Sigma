import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";

export type SearchResult = {
  href: string;
  title: string;
  category: string;
  keywords: string;
};

const pageResults: SearchResult[] = [
  { href: "/about", title: "About Us", category: "Page", keywords: "about sigma company story" },
  { href: "/contact", title: "Contact Us", category: "Page", keywords: "contact phone email office" },
  { href: "/partner", title: "Partner With Us", category: "Page", keywords: "partner referral broker introducer" },
  { href: "/careers", title: "Join Our Team", category: "Page", keywords: "careers jobs work hiring" },
  { href: "/funding-options", title: "Funding Options", category: "Page", keywords: "finance products loans" },
];

const solutionResults: SearchResult[] = solutions.map((solution) => ({
  href: `/funding-options#${solution.slug}`,
  title: solution.name,
  category: "Funding Option",
  keywords: solution.tagline,
}));

const industryResults: SearchResult[] = industries.map((industry) => ({
  href: `/industries/${industry.slug}`,
  title: industry.name,
  category: "Industry",
  keywords: industry.description,
}));

export const searchIndex: SearchResult[] = [
  ...pageResults,
  ...solutionResults,
  ...industryResults,
];

export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchIndex
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    )
    .slice(0, limit);
}
