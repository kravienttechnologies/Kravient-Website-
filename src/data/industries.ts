import healthcare from "@/assets/industry-healthcare.jpg";
import retail from "@/assets/industry-retail.jpg";
import education from "@/assets/industry-education.jpg";
import agriculture from "@/assets/industry-agriculture.jpg";
import hospitality from "@/assets/industry-hospitality.jpg";
import manufacturing from "@/assets/industry-manufacturing.jpg";

export type Industry = {
  slug: string;
  title: string;
  image: string;
  short: string;
  description: string;
  problems: string[];
  products: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    image: healthcare,
    short: "Hospitals, clinics, pharmacies and labs running on unreliable connectivity.",
    description:
      "Small hospitals and clinics carry metro-level responsibility on a fraction of the infrastructure. Kravient HMS is live today for OPD, IPD, billing, pharmacy and lab operations, and it keeps working when the line drops.",
    problems: [
      "Registration and billing stop the moment the internet does",
      "Records split across registers, spreadsheets and separate tools",
      "Software priced and shaped for large corporate hospitals",
      "Staff turnover makes training-heavy systems unusable",
    ],
    products: [
      "Kravient HMS — Live",
      "Kravient Clinic",
      "Kravient Pharma",
      "Kravient Lab",
      "Kravient Dental",
    ],
  },
  {
    slug: "retail",
    title: "Retail & Trade",
    image: retail,
    short: "Counter billing and stock that cannot wait for a network to come back.",
    description:
      "Shops bill continuously through the day. Kravient's retail products are planned around counter speed, local stock accuracy and owners who need clean numbers at closing time — without a dependency on connectivity.",
    problems: [
      "Billing queues stall during network outages",
      "Stock and expiry tracked from memory",
      "Per-user pricing that punishes seasonal staff",
      "Reports that owners cannot read at a glance",
    ],
    products: [
      "Kravient Kirana",
      "Kravient Dukaan",
      "Kravient Textile",
      "Kravient Jewel",
      "Kravient Auto",
    ],
  },
  {
    slug: "education",
    title: "Education",
    image: education,
    short: "Schools and coaching centres with small teams and large admin loads.",
    description:
      "Admissions, attendance, fees and records absorb the hours teachers do not have. Kravient's education products are planned for offline-capable administration that a two-person office can operate confidently.",
    problems: [
      "Fee collection and receipts handled on paper",
      "Attendance data that never becomes useful information",
      "Multiple disconnected registers for one student",
      "Systems that need a technical coordinator to run",
    ],
    products: ["Kravient School", "Kravient Coach", "Kravient Play", "Kravient Library"],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    image: agriculture,
    short: "Farms, dairies, mandis and cold storage in the weakest coverage areas.",
    description:
      "Agricultural operations run exactly where connectivity is thinnest. Kravient's agriculture products are planned to capture procurement, weight, rate and payment locally, syncing whenever a signal appears.",
    problems: [
      "Field data recorded far from any usable network",
      "Procurement and payment records reconciled days later",
      "Weight and rate disputes with no shared record",
      "Cold-chain tracking held in separate notebooks",
    ],
    products: [
      "Kravient Agri",
      "Kravient Farm",
      "Kravient Dairy",
      "Kravient Mandi",
      "Kravient Cold",
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    image: hospitality,
    short: "Stays, PGs and banquet operations with round-the-clock front desks.",
    description:
      "A front desk cannot pause. Kravient's hospitality products are planned around continuous check-in, room status and settlement that behave the same whether the connection is strong, weak or absent.",
    problems: [
      "Check-in and settlement blocked by outages",
      "Room status tracked on a whiteboard",
      "Advance bookings and payments recorded separately",
      "Staff rotating through complicated software",
    ],
    products: ["Kravient Stays", "Kravient PG", "Kravient Hall"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: manufacturing,
    short: "Small units tracking jobs, materials and dispatch on the shop floor.",
    description:
      "Shop floors are noisy, dusty and rarely well connected. Kravient's manufacturing products are planned for job tracking, material issue and dispatch records that survive real factory conditions.",
    problems: [
      "Job cards and material issue recorded on paper",
      "No reliable link between order, production and dispatch",
      "Low-end shop-floor devices",
      "Costing worked out only after the month ends",
    ],
    products: ["Kravient Factory", "Kravient Print", "Kravient Food"],
  },
];

export const extendedIndustries: Industry[] = [
  ...industries,
  {
    slug: "professional-services",
    title: "Professional Services",
    image: education,
    short: "Legal, accounting, consulting and event practices managing client work.",
    description:
      "Practices run on deadlines, documents and follow-ups. Kravient's professional services products are planned for matter and engagement tracking that does not collapse when a team is working from a client site.",
    problems: [
      "Client work tracked across inboxes and spreadsheets",
      "Billable effort recorded from memory",
      "Documents scattered across devices",
      "No dependable follow-up discipline",
    ],
    products: ["Kravient Legal", "Kravient CA", "Kravient Consult", "Kravient Event"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    image: manufacturing,
    short: "Fleets, fuel stations and garages capturing data on the move.",
    description:
      "Logistics data is created away from the office, often with no signal. Kravient's logistics products are planned to record trips, fuel and service history locally and reconcile them centrally later.",
    problems: [
      "Trip and fuel records captured on paper slips",
      "Vehicle service history spread across garages",
      "Driver settlements delayed by missing data",
      "No single view of running cost per vehicle",
    ],
    products: ["Kravient Fleet", "Kravient Petrol", "Kravient Garage"],
  },
];
