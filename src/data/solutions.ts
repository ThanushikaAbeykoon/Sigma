import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  FileStack,
  Truck,
  CreditCard,
  Building2,
  ShieldCheck,
  RefreshCw,
  LifeBuoy,
  Landmark,
  PiggyBank,
  Repeat,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  range: string;
  term: string;
  decision: string;
  bullets: string[];
};

export const solutions: Solution[] = [
  {
    slug: "business-loans",
    name: "Business Loans",
    icon: Banknote,
    tagline: "Simple, scalable finance for any business purpose",
    summary:
      "Unsecured and secured business loans to fund stock, hiring, marketing or expansion, matched to your cash flow.",
    range: "£10k – £2M",
    term: "Up to 6 years",
    decision: "24–48 hours",
    bullets: [
      "Fixed or flexible repayment terms",
      "Secured and unsecured options available",
      "Funds released in as little as 48 hours",
    ],
  },
  {
    slug: "invoice-finance",
    name: "Invoice Finance",
    icon: FileStack,
    tagline: "Turn unpaid invoices into working capital today",
    summary:
      "Release up to 90% of the value of your outstanding invoices immediately, instead of waiting 30, 60 or 90 days to get paid.",
    range: "£10k – £5M",
    term: "Rolling facility",
    decision: "24–72 hours",
    bullets: [
      "Improve cash flow without new debt on the balance sheet",
      "Confidential or disclosed facilities",
      "Scales automatically with your sales ledger",
    ],
  },
  {
    slug: "asset-finance",
    name: "Asset & Equipment Finance",
    icon: Truck,
    tagline: "Spread the cost of vehicles, machinery and technology",
    summary:
      "Fund almost any business asset — from vans and manufacturing equipment to IT infrastructure — without draining reserves.",
    range: "£5k – £2M",
    term: "Up to 7 years",
    decision: "24–48 hours",
    bullets: [
      "Hire purchase, leasing and refinance options",
      "Preserve capital for other areas of the business",
      "New and used assets, including private sales",
    ],
  },
  {
    slug: "merchant-cash-advance",
    name: "Merchant Cash Advance",
    icon: CreditCard,
    tagline: "Funding that flexes with your card revenue",
    summary:
      "An advance against future card sales with no fixed monthly repayment — you repay a small percentage of turnover as it comes in.",
    range: "£5k – £300k",
    term: "4 – 12 months",
    decision: "24 hours",
    bullets: [
      "Repayments rise and fall with your takings",
      "No fixed monthly payment or missed-payment fees",
      "Popular with retail, hospitality and leisure businesses",
    ],
  },
  {
    slug: "business-cash-advance",
    name: "Business Cash Advance",
    icon: PiggyBank,
    tagline: "Revenue-based cash advance with flexible repayments",
    summary:
      "A lump sum advance repaid through small, regular payments linked to your overall business revenue — not just card takings.",
    range: "£5k – £250k",
    term: "3 – 12 months",
    decision: "24 hours",
    bullets: [
      "Available to businesses without significant card sales",
      "Repayments scale automatically with turnover",
      "Fast, largely paperwork-free application",
    ],
  },
  {
    slug: "commercial-property-finance",
    name: "Commercial Property Finance",
    icon: Building2,
    tagline: "Purchase or refinance owner-occupied premises",
    summary:
      "Competitive commercial mortgages for businesses buying, refinancing or releasing equity from the premises they trade from.",
    range: "£100k – £10M",
    term: "Up to 30 years",
    decision: "48–72 hours",
    bullets: [
      "Up to 75% loan-to-value as standard",
      "Owner-occupier premises across most sectors",
      "Fixed and variable rate options available",
    ],
  },
  {
    slug: "property-finance",
    name: "Property Finance",
    icon: Landmark,
    tagline: "Development and investment funding for property professionals",
    summary:
      "Bridging, development and portfolio finance for property investors and developers — from single refurbishments to ground-up builds.",
    range: "£100k – £10M",
    term: "Up to 24 months",
    decision: "48–72 hours",
    bullets: [
      "Bridging finance for time-sensitive purchases",
      "Development finance released in stages against build costs",
      "Portfolio and buy-to-let finance for investors",
    ],
  },
  {
    slug: "growth-guarantee-scheme",
    name: "Growth Guarantee Scheme",
    icon: ShieldCheck,
    tagline: "Government-backed lending to fuel expansion",
    summary:
      "Access the UK Growth Guarantee Scheme to borrow for expansion, working capital or asset purchase with a government-backed guarantee.",
    range: "£25k – £2M",
    term: "Up to 6 years",
    decision: "48–72 hours",
    bullets: [
      "Backed by the British Business Bank",
      "Competitive rates versus standard unsecured lending",
      "Available to viable businesses across most sectors",
    ],
  },
  {
    slug: "recovery-loan-scheme",
    name: "Recovery Loan Scheme",
    icon: LifeBuoy,
    tagline: "Government-backed support to stabilise and rebuild",
    summary:
      "Support for businesses navigating a period of disruption, offering government-backed lending to stabilise cash flow and rebuild.",
    range: "£25k – £2M",
    term: "Up to 6 years",
    decision: "48–72 hours",
    bullets: [
      "Government-backed guarantee to the lender",
      "Suitable where standard lending criteria aren't met",
      "Applicable across most viable UK sectors",
    ],
  },
  {
    slug: "revolving-credit-facility",
    name: "Revolving Credit Facility",
    icon: Repeat,
    tagline: "On-demand credit that flexes with your needs",
    summary:
      "An agreed credit limit you can draw down, repay and reuse as needed — like a flexible overdraft built for growing businesses.",
    range: "£10k – £1M",
    term: "Rolling facility",
    decision: "24–48 hours",
    bullets: [
      "Only pay interest on what you draw down",
      "Reuse the facility as you repay it",
      "Ideal for managing ongoing working capital needs",
    ],
  },
  {
    slug: "refinance",
    name: "Refinance & Consolidation",
    icon: RefreshCw,
    tagline: "Release equity and simplify your repayments",
    summary:
      "Refinance existing debt or assets to release equity, lower your rate, or combine multiple repayments into one manageable facility.",
    range: "£10k – £3M",
    term: "Up to 7 years",
    decision: "48–72 hours",
    bullets: [
      "Consolidate multiple facilities into one repayment",
      "Free up equity tied up in owned assets or property",
      "Potential to reduce your overall cost of borrowing",
    ],
  },
];

export const getSolutionBySlug = (slug: string) =>
  solutions.find((solution) => solution.slug === slug);
