import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  BedDouble,
  Boxes,
  Briefcase,
  Building2,
  Camera,
  Car,
  ChefHat,
  Cog,
  Container,
  CreditCard,
  Droplet,
  Dumbbell,
  Factory,
  Fence,
  FileText,
  Forklift,
  Fuel,
  Gauge,
  Handshake,
  HardHat,
  HeartPulse,
  Hotel,
  KeyRound,
  Laptop,
  Layers,
  Monitor,
  Package,
  PackageSearch,
  Palette,
  Plane,
  Printer,
  Recycle,
  Route,
  Scissors,
  Server,
  Settings2,
  Ship,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Stethoscope,
  Syringe,
  Tag,
  Thermometer,
  Trash2,
  Truck,
  Users,
  Users2,
  Warehouse,
  Wheat,
  Wifi,
  Wind,
  Wine,
  Wrench,
  Zap,
} from "lucide-react";

export type IndustryAsset = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type Industry = {
  // --- used on the nav dropdown & homepage industry cards ---
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;

  // --- sector page: hero section ---
  heroTitle: string;
  heroDescription: string;

  // --- sector page: "Tailored Financing" intro section ---
  introTitle: string;
  introDescription: string;

  // --- sector page: "Equipment & Assets" section ---
  assetsSectionTitle: string;
  assetsSectionDescription: string;
  assets: IndustryAsset[];

  // --- sector page: "Finance Products" section ---
  solutionSlugs: string[]; // must match slugs in data/solutions.ts
  useCaseBullets: string[];

  // --- sector page: FAQ accordion ---
  faqs: IndustryFaq[];
};

export const industries: Industry[] = [
  // ===== Agriculture =====
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: Wheat,
    description: "Enhance farming machinery and tools or upgrade property.",
    heroTitle: "Funding built for the realities of farming",
    heroDescription:
      "From machinery upgrades to smoothing out seasonal cash flow, we match farmers and agribusinesses with lenders who understand how agricultural income actually works.",
    introTitle: "Tailored financing for modern farming",
    introDescription:
      "Seasonal income, rising input costs and expensive machinery make agriculture unlike most other sectors — so we work with lenders who design finance around your farm's cycle, not a generic repayment calendar.",
    assetsSectionTitle: "Machinery and equipment we help finance",
    assetsSectionDescription:
      "If it keeps your farm or agribusiness running, there's a good chance we can help you fund it.",
    assets: [
      { icon: Truck, title: "Tractors & harvesters", description: "New and used machinery, including private sales, without tying up cash reserves." },
      { icon: Droplet, title: "Irrigation & water systems", description: "Fund efficient irrigation and water management infrastructure for your land." },
      { icon: Users, title: "Livestock & dairy equipment", description: "Milking parlours, handling systems and dairy processing equipment." },
      { icon: Thermometer, title: "Feeding & watering systems", description: "Automated feeding, watering and welfare equipment for livestock enterprises." },
      { icon: Warehouse, title: "Material handling equipment", description: "Telehandlers, loaders and storage or processing expansion projects." },
      { icon: Wrench, title: "Sprayers, balers & crop equipment", description: "Sprayers, crop balers and other specialist arable machinery." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "refinance", "merchant-cash-advance", "commercial-property-finance", "invoice-finance"],
    useCaseBullets: [
      "Seasonal cash flow support between planting and harvest",
      "Investment in sustainable technology and infrastructure upgrades",
      "Storage and processing facility expansion",
      "Working capital that scales with revenue, not a fixed schedule",
    ],
    faqs: [
      { question: "Can I get finance for seasonal cash flow gaps?", answer: "Yes. Many farming businesses use a business loan or revenue-based facility to bridge the gap between input costs and harvest or sale income, with repayments structured around your income cycle rather than a fixed monthly schedule." },
      { question: "Can I finance used or privately sold farm machinery?", answer: "Yes. Our asset and equipment finance panel covers new and used machinery, including tractors, harvesters and equipment bought through a private sale, not just dealer purchases." },
      { question: "I already own my machinery outright — can I still raise finance against it?", answer: "Yes. Refinancing equipment you already own releases the capital tied up in it, which you can reinvest in the business, cover working capital needs, or fund an expansion." },
      { question: "How quickly can agricultural equipment finance be arranged?", answer: "Straightforward applications are often decided within 24–48 hours, with funds released shortly after acceptance — useful when equipment is needed ahead of a planting or harvest window." },
    ],
  },
  // ===== Beauty & Wellbeing =====
  {
    slug: "beauty-wellbeing",
    name: "Beauty & Wellbeing",
    icon: Sparkles,
    description: "Loans and equipment finance to boost your beauty business.",
    heroTitle: "Funding that helps your business look its best",
    heroDescription:
      "Finance for salons, spas and wellbeing businesses looking to invest in new treatment technology, expand their space, or manage the cost of building a loyal client base.",
    introTitle: "Investment finance for salons, spas and clinics",
    introDescription:
      "High-spec treatment equipment doesn't come cheap, and client demand can shift with trends and seasons. We work with lenders who understand both the capital costs and the cash flow patterns of the beauty and wellbeing sector.",
    assetsSectionTitle: "Equipment and projects we help finance",
    assetsSectionDescription:
      "From a single treatment room to a multi-site studio group, here's what we typically help fund.",
    assets: [
      { icon: Scissors, title: "Salon chairs & styling stations", description: "Fit out or refresh your salon floor with new styling and treatment stations." },
      { icon: Sparkles, title: "Laser & aesthetic devices", description: "Finance high-value aesthetic and laser treatment equipment without a large upfront cost." },
      { icon: Armchair, title: "Treatment rooms & spa furniture", description: "Couches, furniture and fit-out for treatment and therapy rooms." },
      { icon: Thermometer, title: "Sauna, steam & wellness equipment", description: "Sauna, steam room and recovery equipment for spa and wellness facilities." },
      { icon: Wind, title: "Ventilation & climate systems", description: "Air handling and climate control suited to treatment and salon environments." },
      { icon: Building2, title: "Studio fit-out & refurbishment", description: "Refurbish, expand or open a new studio location." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "merchant-cash-advance", "business-cash-advance", "refinance"],
    useCaseBullets: [
      "New treatment technology to stay ahead of client demand",
      "Smoothing cash flow through quieter trading periods",
      "Opening or refurbishing a second location",
      "Repayments linked to card takings rather than a fixed monthly amount",
    ],
    faqs: [
      { question: "Can I finance high-value equipment like laser or aesthetic devices?", answer: "Yes. Asset finance can spread the cost of laser, aesthetic and other high-value treatment equipment over a term that matches how quickly it helps you generate revenue." },
      { question: "My income varies a lot month to month — is that a problem?", answer: "Not necessarily. A merchant cash advance or business cash advance repays as a percentage of your takings, so repayments naturally flex with quieter and busier periods." },
      { question: "Can I raise finance against equipment I already own?", answer: "Yes. Refinancing owned salon or spa equipment releases capital you can reinvest in new treatments, marketing or a second site." },
      { question: "Do I need to have been trading for years to qualify?", answer: "Most lenders look for a minimum trading history, though this varies by product. Check your eligibility and we'll match you to lenders suited to newer businesses where relevant." },
    ],
  },
  // ===== Construction =====
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    description: "Attain the machinery and vehicles you need for key projects.",
    heroTitle: "Funding that keeps your projects on schedule",
    heroDescription:
      "Plant, machinery and working capital finance for contractors and construction businesses managing staged payments, retentions and rising material costs.",
    introTitle: "Finance built around contract cycles",
    introDescription:
      "Construction cash flow rarely matches project timelines — retentions, staged payments and upfront material costs can all create gaps. We work with lenders who structure finance around how construction businesses actually get paid.",
    assetsSectionTitle: "Plant, machinery and projects we help finance",
    assetsSectionDescription:
      "From a single excavator to a full site fit-out, here's what we typically help fund.",
    assets: [
      { icon: HardHat, title: "Diggers, excavators & earthmoving plant", description: "New and used heavy plant financed without draining working capital." },
      { icon: Forklift, title: "Telehandlers & lifting equipment", description: "Telehandlers, cranes and lifting equipment for site operations." },
      { icon: Truck, title: "Tipper trucks & site vehicles", description: "Fleet finance for tippers, vans and other site vehicles." },
      { icon: Container, title: "Site cabins & portable buildings", description: "Welfare units, offices and portable buildings for active sites." },
      { icon: Fence, title: "Scaffolding, hoarding & site fencing", description: "Fund scaffolding, hoarding and site security equipment." },
      { icon: Wrench, title: "Power tools & small plant", description: "Smaller plant and tools that keep crews productive on site." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "invoice-finance", "commercial-property-finance", "refinance", "growth-guarantee-scheme"],
    useCaseBullets: [
      "Bridging cash flow gaps caused by retentions and staged payments",
      "Funding plant and machinery ahead of a new contract win",
      "Releasing cash tied up in unpaid contractor invoices",
      "Refinancing owned plant to fund the next project",
    ],
    faqs: [
      { question: "Can finance help with retention payments and staged contracts?", answer: "Yes. Invoice finance and flexible business loans can bridge the gap between completing work and receiving staged or retention payments, keeping cash flowing between contracts." },
      { question: "Can I finance used plant and machinery?", answer: "Yes. Our asset finance panel covers new and used plant, including private sales, so you're not restricted to dealer purchases." },
      { question: "Can I raise finance against plant I already own?", answer: "Yes. Refinancing owned plant and machinery releases capital that can fund a new contract, cover VAT on a purchase, or manage a quiet period between jobs." },
      { question: "How quickly can plant finance be arranged before a project starts?", answer: "Straightforward applications are often decided within 24–48 hours, which can be enough time to secure equipment ahead of a contract start date." },
    ],
  },
  // ===== Energy =====
  {
    slug: "energy",
    name: "Energy",
    icon: Zap,
    description: "Increase investment in energy resources and innovation.",
    heroTitle: "Funding the shift to smarter, cleaner energy",
    heroDescription:
      "Asset finance and working capital for energy businesses investing in renewables, infrastructure upgrades and long-payback projects.",
    introTitle: "Finance for long-term energy investment",
    introDescription:
      "Energy projects often carry high upfront costs and returns that build over years, not months. We work with lenders comfortable structuring finance around that kind of investment horizon.",
    assetsSectionTitle: "Infrastructure and equipment we help finance",
    assetsSectionDescription:
      "From a single installation to a full infrastructure upgrade, here's what we typically help fund.",
    assets: [
      { icon: Sparkles, title: "Solar panel installations", description: "Fund commercial solar installations without a large upfront capital outlay." },
      { icon: Wind, title: "Wind turbine equipment", description: "Finance for turbine equipment and associated infrastructure." },
      { icon: Gauge, title: "Battery storage & EV charging", description: "Battery storage systems and EV charging infrastructure for commercial sites." },
      { icon: Zap, title: "Electrical infrastructure upgrades", description: "Grid connections, switchgear and electrical infrastructure projects." },
      { icon: Route, title: "Smart metering & monitoring", description: "Monitoring and metering systems to manage energy usage and output." },
      { icon: Factory, title: "Facility fit-out & construction", description: "Fund the construction or fit-out of energy generation and storage facilities." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "commercial-property-finance", "growth-guarantee-scheme", "refinance"],
    useCaseBullets: [
      "Funding renewable installations ahead of long-term revenue",
      "Infrastructure upgrades to support growing capacity",
      "Working capital while projects move through planning and connection",
      "Refinancing existing assets to fund the next installation",
    ],
    faqs: [
      { question: "Can finance cover projects with a long payback period?", answer: "Yes. We work with lenders who structure terms around the realistic payback period of energy assets, rather than forcing a short-term repayment schedule onto a long-term investment." },
      { question: "Can I finance equipment before a project has planning or grid approval?", answer: "It depends on the lender and product, but working capital facilities can often support costs incurred during the planning and approval stages, ahead of installation finance." },
      { question: "Can I refinance energy infrastructure I already own?", answer: "Yes. Refinancing existing installations or equipment can release capital to fund the next phase of a project or cover working capital needs." },
      { question: "How quickly can larger energy infrastructure finance be arranged?", answer: "Larger facilities typically take 48–72 hours for an initial decision, with terms depending on project size, asset type and expected returns." },
    ],
  },
  // ===== Garage & Car Sales =====
  {
    slug: "garage-car-sales",
    name: "Garage & Car Sales",
    icon: Car,
    description: "Business loans and leasing solutions to stay competitive.",
    heroTitle: "Funding built for forecourts and workshops",
    heroDescription:
      "Stocking finance, workshop equipment and working capital for garages, dealerships and car sales businesses managing fluctuating stock and seasonal demand.",
    introTitle: "Finance for stock, workshops and showrooms",
    introDescription:
      "Whether it's funding forecourt stock, upgrading workshop equipment, or covering costs through a quiet month, we work with lenders who understand how motor trade cash flow moves.",
    assetsSectionTitle: "Equipment and stock we help finance",
    assetsSectionDescription:
      "From forecourt stock to workshop equipment, here's what we typically help fund.",
    assets: [
      { icon: KeyRound, title: "Forecourt & showroom stock", description: "Working capital to fund vehicle stock ahead of sale." },
      { icon: Wrench, title: "Workshop & diagnostic equipment", description: "Diagnostic tools and workshop equipment financed without upfront cash." },
      { icon: Gauge, title: "Ramps, lifts & vehicle hoists", description: "Vehicle lifts, ramps and hoists for workshop operations." },
      { icon: Fuel, title: "Fuel & fluid handling systems", description: "Fuel storage and fluid handling equipment for garage sites." },
      { icon: Settings2, title: "MOT & testing equipment", description: "Fund MOT bay equipment and testing machinery." },
      { icon: Building2, title: "Showroom refurbishment", description: "Refresh or expand your showroom and forecourt space." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "revolving-credit-facility", "refinance", "merchant-cash-advance"],
    useCaseBullets: [
      "Working capital to fund forecourt stock ahead of sale",
      "Workshop equipment upgrades to expand service capacity",
      "Managing cash flow through seasonal dips in vehicle sales",
      "Refinancing owned equipment to free up capital",
    ],
    faqs: [
      { question: "Can finance help fund vehicle stock?", answer: "Yes. A revolving credit facility or business loan can provide working capital to purchase forecourt stock ahead of sale, drawn down and repaid as vehicles turn over." },
      { question: "Can I finance workshop equipment like lifts and diagnostic tools?", answer: "Yes. Asset finance covers new and used workshop equipment, including diagnostic machinery, ramps and hoists." },
      { question: "Vehicle sales are seasonal for us — can repayments reflect that?", answer: "Yes. A merchant cash advance repays as a percentage of card takings, which naturally eases off during quieter trading periods." },
      { question: "Can I raise finance against equipment I already own?", answer: "Yes. Refinancing owned workshop or showroom equipment releases capital to reinvest in stock or facilities." },
    ],
  },
  // ===== Gyms =====
  {
    slug: "gyms",
    name: "Gyms",
    icon: Dumbbell,
    description: "Kit your gyms out with modern equipment and top instructors.",
    heroTitle: "Funding built to help members — and your business — grow",
    heroDescription:
      "Equipment finance and working capital for gyms and fitness studios investing in new kit, expanding class space, or managing seasonal membership swings.",
    introTitle: "Investment finance for fitness businesses",
    introDescription:
      "Membership income can be seasonal and equipment doesn't come cheap, particularly for a growing studio. We work with lenders who understand both sides of running a fitness business.",
    assetsSectionTitle: "Equipment and projects we help finance",
    assetsSectionDescription:
      "From a single studio to a multi-site chain, here's what we typically help fund.",
    assets: [
      { icon: Dumbbell, title: "Strength & resistance equipment", description: "New and used strength, free weight and resistance equipment." },
      { icon: Route, title: "Cardio & studio equipment", description: "Treadmills, bikes and studio equipment financed without a large upfront cost." },
      { icon: Thermometer, title: "Sauna, spa & recovery facilities", description: "Recovery and wellness facilities to add to your member offering." },
      { icon: Users, title: "Class & studio fit-out", description: "Fit out dedicated class studios and group training spaces." },
      { icon: Building2, title: "Gym refurbishment & expansion", description: "Refurbish an existing site or open a new location." },
      { icon: Smartphone, title: "Access control & membership systems", description: "Digital entry, booking and membership management systems." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "merchant-cash-advance", "commercial-property-finance", "refinance"],
    useCaseBullets: [
      "New equipment to keep pace with member expectations",
      "Smoothing cash flow through post-peak membership dips",
      "Opening or refurbishing a second studio location",
      "Refinancing owned equipment to fund an expansion",
    ],
    faqs: [
      { question: "Can I finance new gym equipment as we grow?", answer: "Yes. Asset finance spreads the cost of strength, cardio and studio equipment over a term, so you're not paying the full cost upfront as membership grows." },
      { question: "Membership income dips after January — can repayments flex with that?", answer: "Yes. A merchant cash advance repays as a percentage of card takings, so repayments ease off naturally during quieter membership periods." },
      { question: "Can I raise finance against equipment I already own outright?", answer: "Yes. Refinancing owned gym equipment releases capital that can fund a new studio, refurbishment or additional class space." },
      { question: "How quickly can equipment finance be arranged for a new site opening?", answer: "Straightforward applications are often decided within 24–48 hours, which can help keep a fit-out or opening date on track." },
    ],
  },
  // ===== Healthcare =====
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Equipment finance and loans to improve patient care.",
    heroTitle: "Funding built around patient care",
    heroDescription:
      "Equipment and premises finance for clinics, practices and healthcare providers investing in patient care without disrupting cash flow.",
    introTitle: "Finance for clinics and healthcare providers",
    introDescription:
      "Clinical equipment is expensive and standards move fast — we work with lenders who understand the compliance requirements and investment cycles specific to healthcare providers.",
    assetsSectionTitle: "Equipment and premises we help finance",
    assetsSectionDescription:
      "From a single diagnostic device to a full practice fit-out, here's what we typically help fund.",
    assets: [
      { icon: Stethoscope, title: "Diagnostic & examination equipment", description: "New and used diagnostic equipment financed without a large upfront cost." },
      { icon: Syringe, title: "Clinical & treatment equipment", description: "Treatment room equipment for clinics and practices." },
      { icon: BedDouble, title: "Patient beds & ward equipment", description: "Beds, hoists and ward equipment for care and treatment settings." },
      { icon: HeartPulse, title: "Monitoring & imaging systems", description: "Patient monitoring and imaging equipment financed over a manageable term." },
      { icon: Building2, title: "Practice or clinic fit-out", description: "Fund the fit-out, refurbishment or expansion of a practice or clinic." },
      { icon: Thermometer, title: "Sterilisation & hygiene equipment", description: "Sterilisation and hygiene equipment to meet clinical standards." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "commercial-property-finance", "invoice-finance", "refinance"],
    useCaseBullets: [
      "Investing in new diagnostic or treatment equipment",
      "Expanding or relocating a practice or clinic",
      "Managing cash flow around insurer or NHS payment terms",
      "Refinancing owned equipment to fund the next upgrade",
    ],
    faqs: [
      { question: "Can I finance clinical equipment that needs to meet specific standards?", answer: "Yes. Asset finance can cover clinical and diagnostic equipment, including higher-value devices, over a term matched to how the equipment supports your patient list." },
      { question: "We wait on insurer or NHS payments — can finance help with that gap?", answer: "Yes. Invoice finance or a flexible business loan can bridge the gap between delivering care and receiving payment, keeping cash flow steady." },
      { question: "Can I raise finance against equipment I already own?", answer: "Yes. Refinancing owned clinical equipment releases capital to reinvest in new technology or premises." },
      { question: "How quickly can equipment finance be arranged for a growing practice?", answer: "Straightforward applications are often decided within 24–48 hours, helping you move quickly when new equipment or premises become available." },
    ],
  },
  // ===== Hospitality =====
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Ease seasonal cash flow issues and fund expansion plans.",
    heroTitle: "Funding built for the ups and downs of hospitality",
    heroDescription:
      "Equipment, refurbishment and working capital finance for restaurants, hotels and hospitality businesses managing seasonal trade and rising costs.",
    introTitle: "Finance that flexes with the trading calendar",
    introDescription:
      "Hospitality income can swing sharply with the seasons, while kitchens, rooms and bars still need constant investment. We work with lenders who structure finance around that rhythm.",
    assetsSectionTitle: "Equipment and projects we help finance",
    assetsSectionDescription:
      "From a single kitchen refit to a full hotel refurbishment, here's what we typically help fund.",
    assets: [
      { icon: ChefHat, title: "Commercial kitchen equipment", description: "Ovens, refrigeration and kitchen equipment financed without a large upfront cost." },
      { icon: BedDouble, title: "Guest room furniture & fit-out", description: "Furniture and fit-out for hotel and guest accommodation." },
      { icon: Wine, title: "Bar & restaurant equipment", description: "Bar fit-out and restaurant equipment for front-of-house operations." },
      { icon: Users, title: "Catering & dining equipment", description: "Equipment to support catering, banqueting and dining service." },
      { icon: Building2, title: "Refurbishment & expansion", description: "Refurbish an existing venue or open a new location." },
      { icon: Wind, title: "HVAC & climate control", description: "Heating, ventilation and climate systems for guest and dining areas." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "merchant-cash-advance", "commercial-property-finance", "refinance"],
    useCaseBullets: [
      "Smoothing cash flow between peak and off-peak seasons",
      "Kitchen or venue refurbishment ahead of a busy period",
      "Opening a new venue or expanding room capacity",
      "Repayments linked to card takings rather than a fixed amount",
    ],
    faqs: [
      { question: "Our trade is heavily seasonal — can repayments reflect that?", answer: "Yes. A merchant cash advance repays as a percentage of card takings, so repayments rise and fall naturally with your trading calendar." },
      { question: "Can I finance a kitchen refit or refurbishment before the busy season?", answer: "Yes. Asset finance and business loans can fund kitchen equipment or refurbishment projects, with terms that can align to when the investment starts paying back." },
      { question: "Can I raise finance against equipment I already own?", answer: "Yes. Refinancing owned kitchen or venue equipment releases capital to fund a refurbishment or new opening." },
      { question: "How quickly can funding be arranged ahead of a seasonal peak?", answer: "Straightforward applications are often decided within 24–48 hours, which can be enough time to get equipment or refurbishment work done before a peak trading period." },
    ],
  },
  // ===== Manufacturing & Engineering =====
  {
    slug: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    icon: Cog,
    description: "Obtain the right equipment and develop your supply chain.",
    heroTitle: "Funding built for production, at scale",
    heroDescription:
      "Machinery finance and working capital for manufacturers and engineering firms investing in production capacity, automation and supply chain resilience.",
    introTitle: "Finance for production and growth",
    introDescription:
      "Manufacturing investment is often lumpy — a new production line or automation project can transform output, but the upfront cost is significant. We work with lenders who understand that trade-off.",
    assetsSectionTitle: "Machinery and equipment we help finance",
    assetsSectionDescription:
      "From a single machine to a full production line, here's what we typically help fund.",
    assets: [
      { icon: Factory, title: "Production line machinery", description: "New and used production machinery financed without tying up working capital." },
      { icon: Settings2, title: "CNC & precision engineering equipment", description: "Precision machinery for manufacturing and engineering operations." },
      { icon: Boxes, title: "Robotics & automation systems", description: "Automation and robotics investment to improve output and efficiency." },
      { icon: Warehouse, title: "Materials handling & storage", description: "Handling and storage equipment for raw materials and finished goods." },
      { icon: Truck, title: "Fleet & delivery vehicles", description: "Vehicles to support distribution and supply chain operations." },
      { icon: Building2, title: "Factory & facility expansion", description: "Fund the expansion or fit-out of production facilities." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "invoice-finance", "growth-guarantee-scheme", "refinance"],
    useCaseBullets: [
      "Investing in automation to improve production efficiency",
      "Funding a new production line ahead of a contract win",
      "Releasing cash tied up in unpaid customer invoices",
      "Refinancing owned machinery to fund the next upgrade",
    ],
    faqs: [
      { question: "Can I finance a full production line or just individual machines?", answer: "Both. Asset finance can cover a single machine or a full production line, with terms structured around the equipment's useful life and expected output." },
      { question: "We hold large invoices with long payment terms — can finance help?", answer: "Yes. Invoice finance releases cash tied up in unpaid customer invoices, rather than waiting 30, 60 or 90 days to get paid." },
      { question: "Can I raise finance against machinery I already own?", answer: "Yes. Refinancing owned machinery releases capital that can fund automation, expansion or working capital needs." },
      { question: "How quickly can machinery finance be arranged ahead of a new contract?", answer: "Straightforward applications are often decided within 24–48 hours, with larger facilities typically taking 48–72 hours." },
    ],
  },
  // ===== Plant & Vehicle Hire =====
  {
    slug: "plant-vehicle-hire",
    name: "Plant & Vehicle Hire",
    icon: Forklift,
    description: "Ensure you can offer the best equipment and experience.",
    heroTitle: "Funding built to keep your fleet working",
    heroDescription:
      "Asset finance and working capital for plant and vehicle hire businesses investing in fleet, depots and utilisation.",
    introTitle: "Finance built around fleet utilisation",
    introDescription:
      "Hire businesses live and die by fleet utilisation and depreciation — we work with lenders who understand how to structure finance around an asset that needs to earn from day one.",
    assetsSectionTitle: "Fleet and equipment we help finance",
    assetsSectionDescription:
      "From a single machine to a full hire fleet, here's what we typically help fund.",
    assets: [
      { icon: Forklift, title: "Excavators, diggers & lifting plant", description: "New and used hire fleet plant financed without a large upfront cost." },
      { icon: Truck, title: "Hire fleet vehicles", description: "Vans, trucks and specialist vehicles for your hire fleet." },
      { icon: Container, title: "Site cabins & storage containers", description: "Cabins and containers available for hire to site-based customers." },
      { icon: Wrench, title: "Maintenance & servicing equipment", description: "Workshop equipment to keep your fleet serviced and available." },
      { icon: Route, title: "Fuel & telematics systems", description: "Fuel management and telematics systems for fleet tracking." },
      { icon: Building2, title: "Depot & yard expansion", description: "Fund the expansion of depot or yard facilities." },
    ],
    solutionSlugs: ["asset-finance", "business-loans", "invoice-finance", "refinance", "revolving-credit-facility"],
    useCaseBullets: [
      "Growing the hire fleet ahead of demand",
      "Releasing cash tied up in unpaid hire invoices",
      "Managing depot and maintenance costs between contracts",
      "Refinancing owned plant to fund fleet replacement",
    ],
    faqs: [
      { question: "Can I finance new fleet ahead of confirmed demand?", answer: "Yes. Asset finance can fund additional plant or vehicles for your hire fleet, with terms structured around expected utilisation." },
      { question: "Can finance help with slow-paying hire customers?", answer: "Yes. Invoice finance releases cash tied up in unpaid hire invoices, rather than waiting for customers to settle on standard terms." },
      { question: "Can I raise finance against fleet assets I already own outright?", answer: "Yes. Refinancing owned plant or vehicles releases capital to reinvest in fleet replacement or expansion." },
      { question: "How quickly can fleet finance be arranged?", answer: "Straightforward applications are often decided within 24–48 hours, useful when equipment needs to be secured quickly to meet demand." },
    ],
  },
  // ===== Printing =====
  {
    slug: "printing",
    name: "Printing",
    icon: Printer,
    description: "Increase efficiency by investing in innovative solutions.",
    heroTitle: "Funding built for presses, print runs and deadlines",
    heroDescription:
      "Equipment finance and working capital for print businesses investing in new presses, finishing equipment and digital capability.",
    introTitle: "Finance for presses and production capacity",
    introDescription:
      "Print equipment is expensive and technology moves quickly — we work with lenders who understand the investment cycle behind staying competitive in modern print.",
    assetsSectionTitle: "Equipment we help finance",
    assetsSectionDescription:
      "From a single wide-format printer to a full production upgrade, here's what we typically help fund.",
    assets: [
      { icon: Layers, title: "Digital & litho printing presses", description: "New and used printing presses financed without a large upfront cost." },
      { icon: FileText, title: "Finishing & binding equipment", description: "Finishing, binding and cutting equipment for production." },
      { icon: Palette, title: "Large-format & wide-format printers", description: "Wide-format equipment for signage and large-scale print work." },
      { icon: Monitor, title: "Prepress & design equipment", description: "Prepress hardware and design workstations." },
      { icon: Boxes, title: "Packaging & fulfilment machinery", description: "Packaging and fulfilment equipment to support print-related services." },
      { icon: Building2, title: "Print facility expansion", description: "Fund the expansion or fit-out of production facilities." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "invoice-finance", "refinance"],
    useCaseBullets: [
      "Upgrading to new press technology to stay competitive",
      "Funding equipment ahead of a large project or contract",
      "Releasing cash tied up in unpaid client invoices",
      "Refinancing owned equipment to fund the next upgrade",
    ],
    faqs: [
      { question: "Can I finance a new printing press or just upgrade existing equipment?", answer: "Both. Asset finance can fund a new press outright or support upgrades and add-ons to existing equipment." },
      { question: "Our work is project-based with long client payment terms — can finance help?", answer: "Yes. Invoice finance releases cash tied up in unpaid client invoices, helping smooth cash flow between projects." },
      { question: "Can I raise finance against print equipment I already own?", answer: "Yes. Refinancing owned equipment releases capital to reinvest in new technology or working capital." },
      { question: "How quickly can equipment finance be arranged ahead of a big contract?", answer: "Straightforward applications are often decided within 24–48 hours, which can help you secure equipment in time for a new contract." },
    ],
  },
  // ===== Service Sectors =====
  {
    slug: "service-sectors",
    name: "Service Sectors",
    icon: Briefcase,
    description: "Financing options to fund office, asset and staffing needs.",
    heroTitle: "Funding built around how service businesses grow",
    heroDescription:
      "Working capital and growth finance for professional and consumer service businesses managing staffing costs, client payment terms and expansion.",
    introTitle: "Finance for people-driven businesses",
    introDescription:
      "Service businesses often carry costs — staff, office space, software — well ahead of client payments landing. We work with lenders who understand cash flow that's driven by people, not physical stock.",
    assetsSectionTitle: "What we help fund",
    assetsSectionDescription:
      "From office fit-out to recruitment, here's what we typically help fund for service businesses.",
    assets: [
      { icon: Laptop, title: "Office IT & software systems", description: "Hardware and software investment to support a growing team." },
      { icon: Briefcase, title: "Office fit-out & furniture", description: "Fund the fit-out or expansion of office space." },
      { icon: Users2, title: "Recruitment & staffing costs", description: "Working capital to support hiring ahead of new client revenue." },
      { icon: Handshake, title: "Client onboarding & CRM systems", description: "Systems and tools to manage client relationships and delivery." },
      { icon: Building2, title: "Office relocation or expansion", description: "Fund a move to a larger space as your team grows." },
      { icon: Wifi, title: "Communications & networking", description: "Networking and communications infrastructure for office or hybrid teams." },
    ],
    solutionSlugs: ["business-loans", "invoice-finance", "revolving-credit-facility", "merchant-cash-advance", "refinance"],
    useCaseBullets: [
      "Hiring ahead of confirmed client revenue",
      "Bridging the gap between invoicing and being paid",
      "Funding an office move or expansion",
      "Flexible working capital to draw down as needed",
    ],
    faqs: [
      { question: "We invoice clients on 30–60 day terms — can finance help with that gap?", answer: "Yes. Invoice finance releases cash tied up in unpaid client invoices immediately, rather than waiting for standard payment terms." },
      { question: "Can I get finance to hire ahead of new client work starting?", answer: "Yes. A business loan or revolving credit facility can provide working capital to fund recruitment ahead of new revenue landing." },
      { question: "Do I need physical assets to qualify for finance?", answer: "No. Many service businesses qualify for unsecured business loans or revenue-based facilities without needing to secure finance against physical assets." },
      { question: "How quickly can working capital be arranged?", answer: "Most eligibility checks take under 60 seconds, with decisions on many facilities following within 24–48 hours." },
    ],
  },
  // ===== Waste Management =====
  {
    slug: "waste-management",
    name: "Waste Management",
    icon: Recycle,
    description: "Upgrade plant facilities and invest in greener solutions.",
    heroTitle: "Funding the infrastructure behind cleaner operations",
    heroDescription:
      "Vehicle and equipment finance for waste management and recycling businesses investing in fleet, processing capacity and compliance.",
    introTitle: "Finance for fleet and processing infrastructure",
    introDescription:
      "Waste and recycling operations depend on reliable vehicles and processing equipment, often against long-term contracts. We work with lenders who understand that infrastructure investment cycle.",
    assetsSectionTitle: "Equipment and infrastructure we help finance",
    assetsSectionDescription:
      "From a single collection vehicle to a full processing upgrade, here's what we typically help fund.",
    assets: [
      { icon: Truck, title: "Collection & refuse vehicles", description: "New and used collection vehicles financed without a large upfront cost." },
      { icon: Recycle, title: "Recycling & sorting machinery", description: "Sorting and recycling equipment to expand processing capacity." },
      { icon: Trash2, title: "Compactors & waste handling equipment", description: "Compactors and handling equipment for site operations." },
      { icon: Droplet, title: "Water treatment & processing systems", description: "Treatment and processing systems for waste and water management." },
      { icon: Building2, title: "Site & facility upgrades", description: "Fund upgrades or expansion of processing sites." },
      { icon: Gauge, title: "Weighbridge & monitoring systems", description: "Weighbridge and compliance monitoring equipment." },
    ],
    solutionSlugs: ["business-loans", "asset-finance", "commercial-property-finance", "growth-guarantee-scheme", "refinance"],
    useCaseBullets: [
      "Growing the collection fleet to support new contracts",
      "Investing in recycling capacity and compliance equipment",
      "Working capital while contracts move through onboarding",
      "Refinancing owned vehicles or equipment to fund expansion",
    ],
    faqs: [
      { question: "Can I finance collection vehicles ahead of winning a new contract?", answer: "Yes. Asset finance can fund vehicles or equipment in anticipation of a contract award, with terms structured around expected contract income." },
      { question: "Can I finance used vehicles and equipment?", answer: "Yes. Our panel covers new and used vehicles and processing equipment, including private sales." },
      { question: "Can I raise finance against fleet or equipment I already own?", answer: "Yes. Refinancing owned assets releases capital to reinvest in fleet expansion or processing capacity." },
      { question: "How quickly can equipment finance be arranged?", answer: "Straightforward applications are often decided within 24–48 hours, with larger facilities typically taking 48–72 hours." },
    ],
  },
  // ===== Retail =====
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    description: "Asset finance and cash advances for in-store and online needs.",
    heroTitle: "Funding built for footfall, stock and seasonal peaks",
    heroDescription:
      "Working capital and equipment finance for retailers managing stock cycles, seasonal peaks and the shift to online and omnichannel selling.",
    introTitle: "Finance built around retail's trading calendar",
    introDescription:
      "Retail cash flow moves with the seasons and with stock cycles — we work with lenders who structure finance around peak trading periods rather than a flat monthly schedule.",
    assetsSectionTitle: "What we help fund",
    assetsSectionDescription:
      "From stock financing to store fit-out, here's what we typically help fund for retail businesses.",
    assets: [
      { icon: Package, title: "Stock & inventory investment", description: "Working capital to buy stock ahead of peak trading periods." },
      { icon: CreditCard, title: "POS & payment systems", description: "Point-of-sale and payment infrastructure for in-store and online sales." },
      { icon: Tag, title: "Shopfitting & display equipment", description: "Shopfitting and display equipment to refresh your retail space." },
      { icon: PackageSearch, title: "Warehousing & fulfilment equipment", description: "Equipment to support order fulfilment and stock storage." },
      { icon: Building2, title: "Store refurbishment & new openings", description: "Fund a refurbishment or the opening of a new store." },
      { icon: Boxes, title: "E-commerce & logistics infrastructure", description: "Infrastructure to support online sales and delivery." },
    ],
    solutionSlugs: ["business-loans", "merchant-cash-advance", "business-cash-advance", "invoice-finance", "refinance"],
    useCaseBullets: [
      "Buying stock ahead of a seasonal sales peak",
      "Smoothing cash flow through quieter trading months",
      "Opening a new store or refreshing an existing one",
      "Repayments linked to sales rather than a fixed monthly amount",
    ],
    faqs: [
      { question: "Can I get finance to buy stock ahead of a busy season?", answer: "Yes. A business loan or cash advance can fund stock purchases ahead of peak trading, with repayments that can be structured around expected sales." },
      { question: "Our sales are seasonal — can repayments reflect that?", answer: "Yes. A merchant cash advance repays as a percentage of card takings, so repayments naturally rise and fall with your trading calendar." },
      { question: "Can finance help fund a new store opening?", answer: "Yes. Business loans and commercial property finance can support fit-out, deposit and stock costs for a new location." },
      { question: "How quickly can working capital be arranged before a peak period?", answer: "Most eligibility checks take under 60 seconds, with decisions on many facilities following within 24 hours." },
    ],
  },
  // ===== Technology & Media =====
  {
    slug: "technology-media",
    name: "Technology & Media",
    icon: Monitor,
    description: "Hardware and software upgrades to power hybrid working.",
    heroTitle: "Funding built for building and shipping products",
    heroDescription:
      "Working capital and growth finance for technology and media businesses investing in development, infrastructure and scale ahead of revenue.",
    introTitle: "Finance for product and platform growth",
    introDescription:
      "Technology and media businesses often invest heavily in product, infrastructure and talent before revenue catches up. We work with lenders comfortable funding that kind of growth curve.",
    assetsSectionTitle: "What we help fund",
    assetsSectionDescription:
      "From infrastructure to production equipment, here's what we typically help fund.",
    assets: [
      { icon: Server, title: "Servers & IT infrastructure", description: "Fund the infrastructure behind a growing platform or product." },
      { icon: Monitor, title: "Hardware & workstation upgrades", description: "Hardware upgrades to support development and production teams." },
      { icon: Camera, title: "Production & studio equipment", description: "Camera, audio and studio equipment for media production." },
      { icon: Smartphone, title: "Software & platform development", description: "Working capital to fund ongoing product and platform development." },
      { icon: Wifi, title: "Networking & connectivity upgrades", description: "Networking infrastructure to support growing teams and platforms." },
      { icon: Building2, title: "Office & studio fit-out", description: "Fund the fit-out or expansion of office or studio space." },
    ],
    solutionSlugs: ["business-loans", "invoice-finance", "revolving-credit-facility", "asset-finance", "growth-guarantee-scheme"],
    useCaseBullets: [
      "Funding product development ahead of revenue",
      "Scaling infrastructure to support user or client growth",
      "Bridging cash flow between client invoices and payment",
      "Flexible working capital to draw down as projects require",
    ],
    faqs: [
      { question: "Can I get finance before my product is generating significant revenue?", answer: "It depends on the lender and your wider financials, but growth-focused facilities can support businesses investing ahead of revenue, particularly with a clear growth plan." },
      { question: "We invoice clients on long payment terms — can finance help?", answer: "Yes. Invoice finance releases cash tied up in unpaid client invoices, which is common for agencies and project-based technology businesses." },
      { question: "Can finance cover ongoing infrastructure and hosting costs?", answer: "Working capital facilities such as a revolving credit line can be drawn on flexibly to cover ongoing operational costs like infrastructure and hosting." },
      { question: "How quickly can working capital be arranged?", answer: "Most eligibility checks take under 60 seconds, with decisions on many facilities following within 24–48 hours." },
    ],
  },
  // ===== Transport & Logistics =====
  {
    slug: "transport-logistics",
    name: "Transport & Logistics",
    icon: Truck,
    description: "Overcome supply chain issues and meet vehicle requirements.",
    heroTitle: "Funding that keeps your fleet moving",
    heroDescription:
      "Vehicle finance and working capital for transport and logistics businesses managing fleet replacement, fuel costs and long customer payment terms.",
    introTitle: "Finance built around fleet and freight",
    introDescription:
      "Transport and logistics businesses carry high fixed costs — vehicles, fuel, depots — against income that can lag behind. We work with lenders who understand fleet-based operations.",
    assetsSectionTitle: "Fleet and equipment we help finance",
    assetsSectionDescription:
      "From a single vehicle to a full fleet replacement, here's what we typically help fund.",
    assets: [
      { icon: Truck, title: "HGVs, vans & fleet vehicles", description: "New and used fleet vehicles financed without a large upfront cost." },
      { icon: PackageSearch, title: "Warehouse & handling equipment", description: "Handling and storage equipment for depots and warehouses." },
      { icon: Route, title: "Fleet tracking & telematics", description: "Telematics and tracking systems to manage fleet performance." },
      { icon: Ship, title: "Freight & shipping equipment", description: "Equipment supporting freight, shipping and multimodal logistics." },
      { icon: Building2, title: "Depot & warehouse expansion", description: "Fund the expansion of depot or warehouse facilities." },
      { icon: Plane, title: "Specialist freight equipment", description: "Equipment for air, specialist or time-critical freight operations." },
    ],
    solutionSlugs: ["asset-finance", "business-loans", "invoice-finance", "refinance", "revolving-credit-facility"],
    useCaseBullets: [
      "Replacing or expanding the fleet without a large capital outlay",
      "Releasing cash tied up in unpaid freight invoices",
      "Managing fuel and running costs between customer payments",
      "Refinancing owned vehicles to fund fleet growth",
    ],
    faqs: [
      { question: "Can I finance new or used HGVs and vans?", answer: "Yes. Asset finance covers new and used vehicles, including private sales, so you're not restricted to dealer purchases." },
      { question: "We work on long customer payment terms — can finance help?", answer: "Yes. Invoice finance releases cash tied up in unpaid freight or logistics invoices, rather than waiting 30, 60 or 90 days to get paid." },
      { question: "Can I raise finance against vehicles I already own outright?", answer: "Yes. Refinancing owned fleet vehicles releases capital to reinvest in fleet expansion or working capital." },
      { question: "How quickly can fleet finance be arranged?", answer: "Straightforward applications are often decided within 24–48 hours, useful when a vehicle needs to be replaced quickly to keep routes running." },
    ],
  },
  // ===== Wholesale =====
  {
    slug: "wholesale",
    name: "Wholesale",
    icon: Warehouse,
    description: "Bolster your warehouses and maintain a healthy inventory.",
    heroTitle: "Funding built around stock, scale and supply",
    heroDescription:
      "Working capital and stock finance for wholesalers and distributors managing bulk purchasing, warehousing and customer payment terms.",
    introTitle: "Finance for stock and distribution",
    introDescription:
      "Wholesale businesses often need to pay suppliers well before customers pay them, particularly when buying in bulk. We work with lenders who understand that working capital gap.",
    assetsSectionTitle: "What we help fund",
    assetsSectionDescription:
      "From warehouse infrastructure to stock financing, here's what we typically help fund.",
    assets: [
      { icon: Warehouse, title: "Warehouse racking & storage systems", description: "Racking and storage systems to expand warehouse capacity." },
      { icon: Package, title: "Stock & inventory financing", description: "Working capital to fund bulk stock purchases ahead of sale." },
      { icon: PackageSearch, title: "Order fulfilment & picking equipment", description: "Equipment to support order picking and fulfilment operations." },
      { icon: Truck, title: "Distribution & delivery vehicles", description: "Vehicles to support distribution to retail and trade customers." },
      { icon: Building2, title: "Warehouse expansion or relocation", description: "Fund the expansion or relocation of warehouse facilities." },
      { icon: Boxes, title: "Packaging & handling machinery", description: "Packaging and handling equipment for warehouse operations." },
    ],
    solutionSlugs: ["business-loans", "invoice-finance", "revolving-credit-facility", "asset-finance", "refinance"],
    useCaseBullets: [
      "Funding bulk stock purchases ahead of customer sales",
      "Releasing cash tied up in unpaid trade customer invoices",
      "Expanding or relocating warehouse capacity",
      "Flexible working capital that scales with order volume",
    ],
    faqs: [
      { question: "Can finance help fund bulk stock purchases?", answer: "Yes. A revolving credit facility or business loan can provide working capital to fund bulk stock ahead of it being sold on to customers." },
      { question: "We sell on trade credit terms — can finance help with the payment gap?", answer: "Yes. Invoice finance releases cash tied up in unpaid trade customer invoices, rather than waiting on standard 30–90 day terms." },
      { question: "Can finance support a warehouse expansion or move?", answer: "Yes. Commercial property and asset finance can support the cost of expanding, relocating or fitting out warehouse space." },
      { question: "How quickly can working capital be arranged?", answer: "Most eligibility checks take under 60 seconds, with decisions on many facilities following within 24–48 hours." },
    ],
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((industry) => industry.slug === slug);
