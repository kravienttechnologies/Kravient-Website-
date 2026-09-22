export type NavLink = {
  label: string;
  to: string;
  description?: string;
};

export type MegaColumn = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  to: string;
  mega?: MegaColumn[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Products",
    to: "/products",
    mega: [
      {
        title: "Live today",
        links: [
          {
            label: "Kravient HMS",
            to: "/products/kravient-hms",
            description: "Offline-first hospital management for small hospitals.",
          },
          {
            label: "All products",
            to: "/products",
            description: "Product overview and custom software capability.",
          },
        ],
      },
      {
        title: "By industry",
        links: [
          {
            label: "Healthcare",
            to: "/solutions",
            description: "Hospitals, clinics, pharmacy, lab.",
          },
          {
            label: "Retail & Trade",
            to: "/solutions",
            description: "Kirana, textile, auto, mobile.",
          },
          { label: "Education", to: "/solutions", description: "Schools, coaching, libraries." },
        ],
      },
      {
        title: "Coming soon",
        links: [
          {
            label: "Agriculture",
            to: "/why-kravient",
            description: "Farm, dairy, mandi, cold chain.",
          },
          { label: "Hospitality", to: "/why-kravient", description: "Stays, PG, banquet halls." },
          {
            label: "Professional Services",
            to: "/why-kravient",
            description: "Legal, CA, consulting, events.",
          },
          {
            label: "Manufacturing",
            to: "/why-kravient",
            description: "Factory, print, food processing.",
          },
        ],
      },
    ],
  },
  {
    label: "Why Kravient",
    to: "/why-kravient",
    mega: [
      {
        title: "The platform thesis",
        links: [
          {
            label: "Offline-First",
            to: "/why-kravient#offline",
            description: "Connectivity enhances software. It should not control it.",
          },
          {
            label: "Simplicity",
            to: "/why-kravient#simplicity",
            description: "If it needs a manual, we have failed.",
          },
          {
            label: "Built for Bharat",
            to: "/why-kravient#bharat",
            description: "Designed for how India actually operates.",
          },
        ],
      },
      {
        title: "Commercials & roadmap",
        links: [
          {
            label: "Pricing Philosophy",
            to: "/why-kravient#pricing",
            description: "One simple price. No hidden modules.",
          },
          {
            label: "Platform Vision",
            to: "/why-kravient#platform",
            description: "One platform, every Bharat business.",
          },
        ],
      },
    ],
  },
  { label: "Solutions", to: "/solutions" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
];

export const footerColumns: MegaColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Kravient HMS", to: "/products/kravient-hms" },
      { label: "Products overview", to: "/products" },
      { label: "Platform", to: "/why-kravient" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Why Kravient", to: "/why-kravient" },
      { label: "Solutions", to: "/solutions" },
    ],
  },
];


