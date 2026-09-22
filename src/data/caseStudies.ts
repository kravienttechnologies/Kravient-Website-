import digitalAadateDesktop from "@/assets/digital aadate/desktop.png";
import digitalAadateMobile from "@/assets/digital aadate/mobile.png";
import digitalAadatePortalBanner from "@/assets/digital aadate/portal banner.png";
import digitalAadateTab from "@/assets/digital aadate/tab.png";

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyImage = {
  label: string;
  alt: string;
  src?: string;
};

export type CaseStudy = {
  slug: string;
  projectName: string;
  client: string;
  category: string;
  industry: string;
  year: string;
  services: string[];
  platform: string;
  shortDescription: string;
  statement: string;
  overview: string[];
  challenge: string[];
  solution: string[];
  features: CaseStudyFeature[];
  techStack: string[];
  designApproach: string[];
  results: string[];
  heroImage?: string;
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;
  galleryImages: CaseStudyImage[];
  liveUrl?: string;
  accent: "orange" | "green" | "blue";
  isPublished: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "digital-aadate",
    projectName: "Digital Aadate",
    client: "Digital Aadate",
    category: "Web Application / Digital Platform",
    industry: "Market Management",
    year: "2026",
    services: ["Product strategy", "UI/UX design", "Web application development"],
    platform: "Responsive web application",
    shortDescription:
      "A modern digital platform designed to simplify member registration, market updates, KYC and daily market-price management.",
    statement:
      "A market-management platform shaped around daily operations, clear information flow and easier administration.",
    overview: [
      "Digital Aadate is a digital platform for market-facing operations where members, updates, KYC information and daily prices need to be handled in one reliable place.",
      "The project needed a clean web application experience that could make routine administration easier while keeping information easy to access for users on desktop and mobile devices.",
      "Kravient focused on building a practical product structure: simple navigation, clear content areas, responsive screens and a foundation that can scale as the platform grows.",
    ],
    challenge: [
      "Keep member registration and KYC information organized in a digital workflow.",
      "Make daily market-price updates easier to publish and access.",
      "Create a layout that remains clear for both admin users and public visitors.",
      "Support mobile usage without making the interface feel cramped or secondary.",
    ],
    solution: [
      "We shaped the platform around daily workflows like registration, updates, pricing and admin review.",
      "A clean dashboard structure keeps key actions visible across desktop and mobile, with room for future modules.",
    ],
    features: [
      {
        title: "Member Registration",
        description: "A focused flow for capturing member details in a structured digital format.",
      },
      {
        title: "KYC Management",
        description: "Organized areas for identity and verification-related information.",
      },
      {
        title: "Market Updates",
        description: "A publishing structure for regular market notices and operational updates.",
      },
      {
        title: "Daily Price Management",
        description: "Dedicated screens for maintaining and presenting daily market-price information.",
      },
      {
        title: "Responsive Interface",
        description: "Layouts planned for desktop, tablet and mobile use from the beginning.",
      },
      {
        title: "Admin-Friendly Structure",
        description: "Clear content grouping to make day-to-day platform management easier.",
      },
    ],
    techStack: ["React", "Node.js", "MySQL"],
    designApproach: [
      "The visual direction stays functional and confident: strong headings, calm spacing and content blocks that are easy to scan during real work.",
      "Typography and hierarchy separate administrative actions from public information, while the responsive layout keeps important updates readable on smaller screens.",
      "Interaction patterns are intentionally simple so users can understand where they are, what changed and what action to take next.",
    ],
    results: [
      "Created a centralized digital foundation for member, KYC and market-update workflows.",
      "Made daily market-price information easier to manage and present.",
      "Improved mobile access through a responsive web application layout.",
      "Prepared the platform for future modules and content expansion.",
    ],
    heroImage: digitalAadatePortalBanner,
    desktopImage: digitalAadateDesktop,
    tabletImage: digitalAadateTab,
    mobileImage: digitalAadateMobile,
    galleryImages: [
      {
        label: "Trader dashboard",
        alt: "Digital Aadate trader dashboard interface screenshot",
        src: digitalAadateDesktop,
      },
      {
        label: "Customer KYC",
        alt: "Digital Aadate customer KYC verification interface screenshot",
        src: "/case-studies/digital-aadate/kyc.svg",
      },
      {
        label: "Complaint registration",
        alt: "Digital Aadate complaint registration interface screenshot",
        src: "/case-studies/digital-aadate/complaint.svg",
      },
      {
        label: "Daily market prices",
        alt: "Digital Aadate daily market prices interface screenshot",
        src: "/case-studies/digital-aadate/market-prices.svg",
      },
    ],
    accent: "orange",
    isPublished: true,
  },
  {
    slug: "case-study-coming-soon-01",
    projectName: "Case Study Coming Soon",
    client: "Pending approval",
    category: "Digital Product",
    industry: "Client details pending",
    year: "Pending",
    services: ["Strategy", "Design", "Development"],
    platform: "Web / software platform",
    shortDescription:
      "Verified client details, outcomes, screenshots and links will be published once approved.",
    statement: "A verified project story will be added after approval.",
    overview: ["This case study is reserved for an approved Kravient project story."],
    challenge: ["Challenge details pending client approval."],
    solution: ["Solution details pending client approval."],
    features: [],
    techStack: [],
    designApproach: ["Design details pending client approval."],
    results: ["Verified outcomes will be added after approval."],
    galleryImages: [],
    accent: "green",
    isPublished: false,
  },
  {
    slug: "case-study-coming-soon-02",
    projectName: "Case Study Coming Soon",
    client: "Pending approval",
    category: "Business Software",
    industry: "Client details pending",
    year: "Pending",
    services: ["Strategy", "Design", "Development"],
    platform: "Web / software platform",
    shortDescription:
      "A future case study slot for approved project images, problem statements and verified outcomes.",
    statement: "A verified project story will be added after approval.",
    overview: ["This case study is reserved for an approved Kravient project story."],
    challenge: ["Challenge details pending client approval."],
    solution: ["Solution details pending client approval."],
    features: [],
    techStack: [],
    designApproach: ["Design details pending client approval."],
    results: ["Verified outcomes will be added after approval."],
    galleryImages: [],
    accent: "blue",
    isPublished: false,
  },
];

export const publishedCaseStudies = caseStudies.filter((study) => study.isPublished);

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug && study.isPublished);
}

