import type { LucideIcon } from "lucide-react";
import {
  Wheat,
  Sparkles,
  HardHat,
  Zap,
  Car,
  Dumbbell,
  HeartPulse,
  Hotel,
  Cog,
  Forklift,
  Printer,
  Briefcase,
  Recycle,
  ShoppingBag,
  Monitor,
  Truck,
  Warehouse,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: Wheat,
    description: "Enhance farming machinery and tools or upgrade property.",
  },
  {
    slug: "beauty-wellbeing",
    name: "Beauty & Wellbeing",
    icon: Sparkles,
    description: "Loans and equipment finance to boost your beauty business.",
  },
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    description: "Attain the machinery and vehicles you need for key projects.",
  },
  {
    slug: "energy",
    name: "Energy",
    icon: Zap,
    description: "Increase investment in energy resources and innovation.",
  },
  {
    slug: "garage-car-sales",
    name: "Garage & Car Sales",
    icon: Car,
    description: "Business loans and leasing solutions to stay competitive.",
  },
  {
    slug: "gyms",
    name: "Gyms",
    icon: Dumbbell,
    description: "Kit your gyms out with modern equipment and top instructors.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Equipment finance and loans to improve patient care.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Ease seasonal cash flow issues and fund expansion plans.",
  },
  {
    slug: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    icon: Cog,
    description: "Obtain the right equipment and develop your supply chain.",
  },
  {
    slug: "plant-vehicle-hire",
    name: "Plant & Vehicle Hire",
    icon: Forklift,
    description: "Ensure you can offer the best equipment and experience.",
  },
  {
    slug: "printing",
    name: "Printing",
    icon: Printer,
    description: "Increase efficiency by investing in innovative solutions.",
  },
  {
    slug: "service-sectors",
    name: "Service Sectors",
    icon: Briefcase,
    description: "Financing options to fund office, asset and staffing needs.",
  },
  {
    slug: "waste-management",
    name: "Waste Management",
    icon: Recycle,
    description: "Upgrade plant facilities and invest in greener solutions.",
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    description: "Asset finance and cash advances for in-store and online needs.",
  },
  {
    slug: "technology-media",
    name: "Technology & Media",
    icon: Monitor,
    description: "Hardware and software upgrades to power hybrid working.",
  },
  {
    slug: "transport-logistics",
    name: "Transport & Logistics",
    icon: Truck,
    description: "Overcome supply chain issues and meet vehicle requirements.",
  },
  {
    slug: "wholesale",
    name: "Wholesale",
    icon: Warehouse,
    description: "Bolster your warehouses and maintain a healthy inventory.",
  },
];
