import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { solutions } from "@/data/solutions";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/funding-options", label: "Funding Options" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/contact", label: "Contact Us" },
  { href: "/#faq", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-primary-950 text-neutral-300">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="dark" />
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            Sigma Business Finance is a UK commercial finance broker, connecting
            ambitious businesses with the right funding from a panel of 60+
            specialist lenders — with no upfront fees.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {[
              { Icon: FacebookIcon, label: "Facebook" },
              { Icon: LinkedinIcon, label: "LinkedIn" },
              { Icon: InstagramIcon, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition-colors hover:bg-secondary-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Finance Solutions
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {solutions.slice(0, 6).map((solution) => (
              <li key={solution.slug}>
                <Link
                  href={`/funding-options#${solution.slug}`}
                  className="hover:text-white"
                >
                  {solution.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Get In Touch
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
              <a href="tel:03300584444" className="hover:text-white">
                0330 058 4444
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
              <a href="mailto:hello@sigmabusinessfinance.co.uk" className="hover:text-white">
                hello@sigmabusinessfinance.co.uk
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
              <span>128 Sigma House, London, EC2A 4BX</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sigma Business Finance Ltd. All rights
            reserved.
          </p>
          <p className="max-w-2xl leading-relaxed">
            Sigma Business Finance is a credit broker, not a lender, and works
            with a panel of lenders. We may receive a commission from our
            lending partners. Registered in England &amp; Wales.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
