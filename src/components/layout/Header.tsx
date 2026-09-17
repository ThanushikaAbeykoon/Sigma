"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Info, Menu, Users, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import NavDropdown from "@/components/layout/NavDropdown";
import AboutDropdownVisual from "@/components/layout/AboutDropdownVisual";
import SearchBar from "@/components/layout/SearchBar";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";
import { solutions } from "@/data/solutions";
import { otherSolutions } from "@/data/otherSolutions";
import { industries } from "@/data/industries";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Contact" },
];

const fundingItems = solutions.map((solution) => ({
  key: solution.slug,
  href: `/funding-options#${solution.slug}`,
  icon: solution.icon,
  title: solution.name,
  description: solution.tagline,
}));

const otherSolutionItems = otherSolutions.map((solution) => ({
  key: solution.slug,
  href: `/other-solutions/${solution.slug}`,
  icon: solution.icon,
  title: solution.name,
  description: solution.tagline,
}));

const industryItems = industries.map((industry) => ({
  key: industry.slug,
  href: `/industries/${industry.slug}`,
  icon: industry.icon,
  title: industry.name,
  description: industry.description,
}));

const aboutItems = [
  {
    key: "about",
    href: "/about",
    icon: Info,
    title: "About Us",
    description: "Learn more about Sigma Business Finance and what makes us a leading finance partner.",
  },
  {
    key: "careers",
    href: "/careers",
    icon: Users,
    title: "Join Our Team",
    description: "Unlock your career potential with Sigma Business Finance.",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileOtherSolutionsOpen, setMobileOtherSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setMobileSolutionsOpen(false);
    setMobileOtherSolutionsOpen(false);
    setMobileIndustriesOpen(false);
    setMobileAboutOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-50/90 backdrop-blur">
      <div className="container-page relative flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          <NavDropdown label="Funding Options" items={fundingItems} />
          <NavDropdown label="Other Solutions" items={otherSolutionItems} />
          <NavDropdown
            label="Industries"
            items={industryItems}
            panelWidthClassName="w-[72rem]"
            columnsClassName="sm:grid-cols-2 lg:grid-cols-4"
          />
          <NavDropdown
            label="About Us"
            items={aboutItems}
            panelWidthClassName="w-[42rem]"
            columnsClassName="sm:grid-cols-2"
            sidePanel={<AboutDropdownVisual />}
          />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <SearchBar className="hidden xl:block" />
          <CheckEligibilityButton />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-neutral-200 bg-neutral-50 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            <SearchBar className="mb-3" fullWidth />
            <div>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                aria-expanded={mobileSolutionsOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-800"
              >
                Funding Options
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSolutionsOpen ? (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-neutral-200 pl-4 pb-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/funding-options#${solution.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-800"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileOtherSolutionsOpen((v) => !v)}
                aria-expanded={mobileOtherSolutionsOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-800"
              >
                Other Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileOtherSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOtherSolutionsOpen ? (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-neutral-200 pl-4 pb-2">
                  {otherSolutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/other-solutions/${solution.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-800"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen((v) => !v)}
                aria-expanded={mobileIndustriesOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-800"
              >
                Industries
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileIndustriesOpen ? (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-neutral-200 pl-4 pb-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-800"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileAboutOpen((v) => !v)}
                aria-expanded={mobileAboutOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-800"
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAboutOpen ? (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-neutral-200 pl-4 pb-2">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-800"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-neutral-200 pt-4">
              <CheckEligibilityButton className="w-full" onOpen={() => setOpen(false)} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
