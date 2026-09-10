import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";

export type SearchResult = {
  href: string;
  title: string;
  category: string;
  keywords: string;
};

/**
 * Every static section of the site that isn't already driven by a data
 * file, folded into a handful of page-level entries so the whole body
 * copy of the site is searchable — not just titles.
 */
const pageResults: SearchResult[] = [
  {
    href: "/",
    title: "Home",
    category: "Page",
    keywords: [
      "home sigma business finance homepage",
      "you built the business we'll help you fund it",
      "sigma business finance matches you with the right lender from a panel of 60+ specialist funders decisions 24-48 hours no upfront fees",
      "trusted uk business finance broker",
      "no impact on credit score whole-of-market panel dedicated account manager",
      "check your eligibility explore solutions",
      "funding available £10k £10M rates from 6.9% 24-48 hour decisions dedicated account manager competitive market-tested pricing fast turnaround one point of contact",
      "smart eligibility checker see what you qualify for in 60 seconds no paperwork no obligation 60-second check no credit check required whole-of-market search",
      "how it works from enquiry to funded in four simple steps enquiry application approval payout tell us about your business account manager searches our panel clear offer plain english sign your agreement receive funds",
      "why sigma business finance without the finance fuss whole-of-market comparison effortless application fast flexible decisions tailored to your business one dedicated contact no upfront fees",
      "repayment calculator estimate your monthly repayments loan calculator funding amount repayment term est monthly total repayable total interest illustrative representative rate apr",
      "specialist funding whatever sector you're in industries we've placed finance for businesses across almost every industry",
      "client stories trusted by businesses across the uk testimonials reviews",
      "common questions answered faq",
      "find the funding built for your business speak to a funding specialist check eligibility no cost no obligation",
      "£250m+ funding facilitated 6000+ uk businesses helped 60+ specialist lenders 24-48h typical decision time 6.9% rates from",
    ].join(" "),
  },
  {
    href: "/about",
    title: "About Us",
    category: "Page",
    keywords: [
      "about sigma company story",
      "business finance shouldn't be this hard",
      "we started sigma business finance because too many good businesses were being turned away by their bank or drowning in paperwork just to get a straight answer we built the alternative",
      "our story a broker built around the borrower",
      "sigma business finance was founded to close the gap between ambitious uk businesses and the funding they need to grow too often business owners were stuck choosing between a single bank's narrow criteria or navigating dozens of lenders alone",
      "today we work with a panel of 60+ specialist lenders across every major finance product from short-term working capital to multi-million pound commercial property deals so business owners get one straightforward point of contact and a genuinely whole-of-market comparison",
      "we're not a lender we don't profit from pushing one product over another our only job is to find the facility that actually fits your business",
      "transparent always clear rates clear terms no hidden fees",
      "matched not mass-marketed every recommendation is based on your numbers and goals not whichever lender pays the most commission",
      "on your side we work for you not the lender our job is to get you the best outcome",
      "straightforward start to finish one dedicated account manager plain-english guidance",
      "our commitment regulated responsible and on your side sigma business finance operates as a credit broker not a lender we're paid by our lending partners so our service to you is completely free",
    ].join(" "),
  },
  {
    href: "/contact#eligibility",
    title: "Check Eligibility",
    category: "Page",
    keywords: "eligibility eligible check qualify apply application calculator see what you qualify for takes about 60 seconds and won't affect your credit score",
  },
  {
    href: "/contact",
    title: "Contact Us",
    category: "Page",
    keywords: [
      "contact phone email office",
      "let's find the right funding for your business",
      "check your eligibility online or send us a message and a funding specialist will be in touch within one working day",
      "send a message prefer to just ask a question fill in the form below and our team will get back to you directly",
      "call us 0330 058 4444",
      "email us hello@sigmabusinessfinance.co.uk",
      "visit us 128 sigma house london ec2a 4bx",
      "opening hours monday friday 9am 6pm",
    ].join(" "),
  },
  {
    href: "/partner",
    title: "Partner With Us",
    category: "Page",
    keywords: [
      "partner referral broker introducer",
      "grow with sigma join our network of partners and offer your clients industry-leading business finance empower your sales and build long-term revenue",
      "increase sales conversion rates bespoke solutions for every client rewarding referral incentives",
      "become a partner",
      "why partner with us a referral partnership that pays for itself",
      "remove budget barriers help clients say yes to bigger decisions without cash flow getting in the way",
      "secure larger sales give clients the option to spread the cost so budget stops being the objection",
      "accelerate cash flow get paid in full up front while your client repays over time through our lenders",
      "strengthen customer loyalty offering finance adds real value to the relationship not just the transaction",
      "generate additional revenue earn a referral incentive on every client you introduce who goes on to be funded",
      "stay ahead of competitors give clients a reason to choose you over competitors who can't offer finance",
      "fuel consistent growth build a steady recurring revenue stream alongside your core business",
      "how it works from application to earning in four steps apply get onboarded refer your clients earn rewards",
      "partner support co-branded marketing support built for you co-branded brochures and one-pagers tailored digital assets for email and social a dedicated partner manager regular updates on your referrals and payouts",
      "ready to grow with sigma fill in the form and a member of our partnerships team will be in touch",
    ].join(" "),
  },
  {
    href: "/careers",
    title: "Join Our Team",
    category: "Page",
    keywords: [
      "careers jobs work hiring vacancies",
      "unlock your career potential with sigma business finance and help build the future of uk business lending",
      "why sigma build your career somewhere that means it we're growing fast",
      "real progression clear paths from your first day to senior and leadership roles we promote from within",
      "real impact every deal you work on directly helps a uk business grow",
      "a supportive culture collaborative straight-talking teams who back each other not a call-centre script in sight",
      "ongoing training structured onboarding and continuous learning in commercial finance funded by us",
      "current openings don't see the right role listed we're always keen to hear from great people send us your cv careers@sigmabusinessfinance.co.uk",
    ].join(" "),
  },
  {
    href: "/funding-options",
    title: "Funding Options",
    category: "Page",
    keywords: "finance products loans a finance solution for every stage of business we work across a panel of 60+ specialist lenders to match you with the right product",
  },
];

const solutionResults: SearchResult[] = solutions.map((solution) => ({
  href: `/funding-options#${solution.slug}`,
  title: solution.name,
  category: "Funding Option",
  keywords: [
    solution.tagline,
    solution.summary,
    solution.range,
    solution.term,
    solution.decision,
    ...solution.bullets,
  ].join(" "),
}));

const industryResults: SearchResult[] = industries.map((industry) => ({
  href: `/industries/${industry.slug}`,
  title: industry.name,
  category: "Industry",
  keywords: [
    industry.description,
    industry.heroTitle,
    industry.heroDescription,
    industry.introTitle,
    industry.introDescription,
    industry.assetsSectionTitle,
    industry.assetsSectionDescription,
    ...industry.assets.flatMap((asset) => [asset.title, asset.description]),
    ...industry.useCaseBullets,
    ...industry.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" "),
}));

const faqResults: SearchResult[] = faqs.map((faq) => ({
  href: "/#faq",
  title: faq.question,
  category: "FAQ",
  keywords: faq.answer,
}));

const testimonialResults: SearchResult[] = testimonials.map((testimonial) => ({
  href: "/#testimonials",
  title: `${testimonial.name} — Client Story`,
  category: "Client Story",
  keywords: [testimonial.role, testimonial.quote, testimonial.amount, testimonial.timeframe].join(" "),
}));

export const searchIndex: SearchResult[] = [
  ...pageResults,
  ...solutionResults,
  ...industryResults,
  ...faqResults,
  ...testimonialResults,
];

/** Levenshtein edit distance — small, dependency-free typo tolerance. */
function editDistance(a: string, b: string): number {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const d: number[][] = Array.from({ length: rows }, (_, i) => [i, ...Array(cols - 1).fill(0)]);
  for (let j = 0; j < cols; j++) d[0][j] = j;

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1, // deletion
        d[i][j - 1] + 1, // insertion
        d[i - 1][j - 1] + cost, // substitution
      );
    }
  }
  return d[rows - 1][cols - 1];
}

/** How many typo'd characters we tolerate, scaled to word length. */
function typoBudget(wordLength: number): number {
  if (wordLength <= 3) return 0;
  if (wordLength <= 6) return 1;
  return 2;
}

function tokenize(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

/** True if `word` is a substring of any token, or a close typo of one. */
function fuzzyMatches(tokens: string[], word: string): boolean {
  for (const token of tokens) {
    if (token.includes(word)) return true;
    if (editDistance(token, word) <= typoBudget(word.length)) return true;
  }
  return false;
}

// Pre-tokenize once — the index is static, so there's no need to
// re-split every item's text on every keystroke.
const tokenizedIndex = searchIndex.map((item) => ({
  item,
  titleLower: item.title.toLowerCase(),
  tokens: tokenize(`${item.title} ${item.keywords} ${item.category}`),
}));

export function searchSite(query: string, limit = 8): SearchResult[] {
  // tokenize the query the same way the index is tokenized, so
  // punctuation (e.g. "co-branded") doesn't prevent an otherwise
  // valid match
  const words = tokenize(query);
  if (words.length === 0) return [];

  return tokenizedIndex
    .map(({ item, titleLower, tokens }) => {
      // every typed word must appear (exactly or as a close typo) somewhere in this item
      const matchesAll = words.every((word) => fuzzyMatches(tokens, word));
      if (!matchesAll) return null;

      // rank items whose title itself contains the word(s) above keyword-only matches
      const score = words.reduce(
        (total, word) => total + (titleLower.includes(word) ? 2 : 1),
        0,
      );
      return { item, score };
    })
    .filter((entry): entry is { item: SearchResult; score: number } => entry !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item);
}
