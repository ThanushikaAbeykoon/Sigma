export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  amount: string;
  timeframe: string;
};

/**
 * Sample content — swap for verified customer reviews before launch.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Founder, Bloom Retail Group",
    quote:
      "Sigma found us a facility two other brokers said wasn't possible. The account manager chased everything on our behalf and we had funds within three days.",
    amount: "£180,000 secured",
    timeframe: "3-day approval",
  },
  {
    name: "Daniel Osei",
    role: "Managing Director, Osei Logistics",
    quote:
      "We needed asset finance for four new vans fast. The whole process — application to funds landing — took under a week, and the rate beat our own bank.",
    amount: "£95,000 secured",
    timeframe: "5-day funding",
  },
  {
    name: "Claire Whitfield",
    role: "Owner, The Whitfield Kitchen",
    quote:
      "Honest advice from the first call. They were upfront that a merchant cash advance suited us better than a loan, and it's made a real difference to our cash flow.",
    amount: "£40,000 secured",
    timeframe: "48-hour decision",
  },
];
