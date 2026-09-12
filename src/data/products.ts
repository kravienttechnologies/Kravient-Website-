export const hms = {
  name: "Kravient HMS",
  tagline: "Simplicity at Scale.",
  summary: "Hospital management software built for small hospitals in Tier-3 and Tier-4 India.",
  price: "₹7,000/year",
  priceNote: "All-inclusive",
  status: "Live" as const,
  modules: [
    {
      name: "OPD Management",
      short: "OPD",
      body: "Register patients, run token queues and record consultations in a few keystrokes — even with no connectivity at the front desk.",
    },
    {
      name: "IPD & Bed Management",
      short: "IPD & Bed Management",
      body: "See ward and bed status at a glance, admit and transfer patients, and keep charges attached to the right stay.",
    },
    {
      name: "Billing",
      short: "Billing",
      body: "One billing flow across OPD, IPD, pharmacy and lab, with printable receipts and clean day-end totals.",
    },
    {
      name: "Pharmacy",
      short: "Pharmacy",
      body: "Stock, batches, expiry and counter sales handled in the same system that already knows the patient.",
    },
    {
      name: "Laboratory",
      short: "Lab",
      body: "Test orders, sample tracking and report printing, linked back to the patient record automatically.",
    },
    {
      name: "Offline Sync",
      short: "Offline Sync",
      body: "Work locally without interruption. When connectivity returns, data synchronizes in the background with no manual steps.",
    },
  ],
  highlights: [
    { title: "Works Offline", body: "Core operations continue without connectivity." },
    { title: "Automatic Sync", body: "Data reconciles the moment the internet returns." },
    { title: "Learn in a Day", body: "Staff onboard without formal training programmes." },
    { title: "Simple Pricing", body: "One annual price for the whole hospital." },
  ],
  trustBar: ["Offline First", "₹7,000/year", "6 Core Modules", "Learn in a Day"],
  audience: ["Small Hospitals", "Nursing Homes", "Clinics", "Tier-3 Hospitals", "Tier-4 Hospitals"],
  faq: [
    {
      q: "Does Kravient HMS work without internet?",
      a: "Yes. Kravient HMS is offline-first. Registration, OPD, IPD, billing, pharmacy and lab operations continue on the local installation when there is no connectivity.",
    },
    {
      q: "What happens when connectivity returns?",
      a: "The system synchronizes automatically in the background. Staff do not need to export, import or reconcile anything manually.",
    },
    {
      q: "How long does setup take?",
      a: "Setup is designed to be completed quickly with your existing hardware. We confirm the exact timeline for your hospital during the demo.",
    },
    {
      q: "Does staff require training?",
      a: "The interfaces are built so that day-to-day work can be learned in a day. We walk your team through the workflows during deployment.",
    },
    {
      q: "What modules are included?",
      a: "Six core modules: OPD, IPD & Bed Management, Billing, Pharmacy, Laboratory and Offline Sync.",
    },
    {
      q: "What does ₹7,000/year include?",
      a: "The annual price is all-inclusive of the six core modules. There are no per-module unlocks or confusing per-user tiers.",
    },
  ],
};

/**
 * PLACEHOLDER — Replace once Praavi confirms final service categories.
 * These four categories are editable placeholders, not confirmed services.
 */
export const customSolutionPlaceholders = [
  {
    title: "Custom Application Development",
    body: "Placeholder category. Replace once Praavi confirms final service categories.",
  },
  {
    title: "Process Automation",
    body: "Placeholder category. Replace once Praavi confirms final service categories.",
  },
  {
    title: "System Integration",
    body: "Placeholder category. Replace once Praavi confirms final service categories.",
  },
  {
    title: "Cloud & Deployment",
    body: "Placeholder category. Replace once Praavi confirms final service categories.",
  },
];
