export type ProductStatus = "Live" | "Planned" | "Future Platform";

export type PlatformCategory = {
  category: string;
  products: { name: string; status: ProductStatus }[];
};

/**
 * Only Kravient HMS is LIVE. Everything else is Planned or Future Platform
 * until the client confirms otherwise.
 */
export const platformCatalog: PlatformCategory[] = [
  {
    category: "Healthcare",
    products: [
      { name: "Kravient HMS", status: "Live" },
      { name: "Kravient Clinic", status: "Planned" },
      { name: "Kravient Pharma", status: "Planned" },
      { name: "Kravient Lab", status: "Planned" },
      { name: "Kravient Dental", status: "Planned" },
    ],
  },
  {
    category: "Food & Beverage",
    products: [
      { name: "Kravient Dine", status: "Future Platform" },
      { name: "Kravient Cafe", status: "Future Platform" },
      { name: "Kravient Cloud", status: "Future Platform" },
      { name: "Kravient Bakery", status: "Future Platform" },
    ],
  },
  {
    category: "Hospitality",
    products: [
      { name: "Kravient Stays", status: "Future Platform" },
      { name: "Kravient PG", status: "Future Platform" },
      { name: "Kravient Hall", status: "Future Platform" },
    ],
  },
  {
    category: "Education",
    products: [
      { name: "Kravient School", status: "Future Platform" },
      { name: "Kravient Coach", status: "Future Platform" },
      { name: "Kravient Play", status: "Future Platform" },
      { name: "Kravient Library", status: "Future Platform" },
    ],
  },
  {
    category: "Retail & Trade",
    products: [
      { name: "Kravient Kirana", status: "Future Platform" },
      { name: "Kravient Dukaan", status: "Future Platform" },
      { name: "Kravient Textile", status: "Future Platform" },
      { name: "Kravient Jewel", status: "Future Platform" },
      { name: "Kravient Auto", status: "Future Platform" },
      { name: "Kravient Mobile", status: "Future Platform" },
    ],
  },
  {
    category: "Agriculture",
    products: [
      { name: "Kravient Agri", status: "Future Platform" },
      { name: "Kravient Farm", status: "Future Platform" },
      { name: "Kravient Dairy", status: "Future Platform" },
      { name: "Kravient Mandi", status: "Future Platform" },
      { name: "Kravient Cold", status: "Future Platform" },
    ],
  },
  {
    category: "Construction & Real Estate",
    products: [
      { name: "Kravient Build", status: "Future Platform" },
      { name: "Kravient Realty", status: "Future Platform" },
      { name: "Kravient Colony", status: "Future Platform" },
    ],
  },
  {
    category: "Professional Services",
    products: [
      { name: "Kravient Legal", status: "Future Platform" },
      { name: "Kravient CA", status: "Future Platform" },
      { name: "Kravient Consult", status: "Future Platform" },
      { name: "Kravient Event", status: "Future Platform" },
    ],
  },
  {
    category: "Personal Services",
    products: [
      { name: "Kravient Salon", status: "Future Platform" },
      { name: "Kravient Spa", status: "Future Platform" },
      { name: "Kravient Fit", status: "Future Platform" },
      { name: "Kravient Tailor", status: "Future Platform" },
    ],
  },
  {
    category: "Logistics",
    products: [
      { name: "Kravient Fleet", status: "Future Platform" },
      { name: "Kravient Petrol", status: "Future Platform" },
      { name: "Kravient Garage", status: "Future Platform" },
    ],
  },
  {
    category: "Manufacturing",
    products: [
      { name: "Kravient Factory", status: "Future Platform" },
      { name: "Kravient Print", status: "Future Platform" },
      { name: "Kravient Food", status: "Future Platform" },
    ],
  },
  {
    category: "Cross-Industry",
    products: [
      { name: "Kravient Pay", status: "Future Platform" },
      { name: "Kravient Books", status: "Future Platform" },
      { name: "Kravient HR", status: "Future Platform" },
      { name: "Kravient CRM", status: "Future Platform" },
    ],
  },
  {
    category: "Community",
    products: [
      { name: "Kravient Trust", status: "Future Platform" },
      { name: "Kravient Society", status: "Future Platform" },
    ],
  },
];

/** Homepage tiles — a controlled subset, not the full future catalogue. */
export const platformTiles = [
  { name: "Healthcare", note: "Live today" },
  { name: "Food & Beverage", note: "Planned" },
  { name: "Hospitality", note: "Planned" },
  { name: "Education", note: "Planned" },
  { name: "Retail & Trade", note: "Planned" },
  { name: "Agriculture", note: "Planned" },
  { name: "Construction", note: "Future" },
  { name: "Professional Services", note: "Future" },
  { name: "Personal Services", note: "Future" },
  { name: "Logistics", note: "Future" },
  { name: "Manufacturing", note: "Future" },
  { name: "Business Operations", note: "Future" },
];
