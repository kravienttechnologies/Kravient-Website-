/**
 * No verified case-study details have been supplied.
 * These are CMS-friendly placeholders. Do not populate with invented
 * companies, metrics or outcomes — fill only from confirmed client data.
 */
export type CaseStudy = {
  id: string;
  label: string;
  projectTitle: string;
  industry: string;
  challenge: string;
  solution: string;
  timeline: string;
  technology: string;
  result: string;
  clientQuote: string;
  screenshot: string | null;
};

const emptyFields = {
  projectTitle: "",
  industry: "",
  challenge: "",
  solution: "",
  timeline: "",
  technology: "",
  result: "",
  clientQuote: "",
  screenshot: null,
};

export const caseStudies: CaseStudy[] = [
  { id: "cs-01", label: "Case Study Coming Soon", ...emptyFields },
  { id: "cs-02", label: "Case Study Coming Soon", ...emptyFields },
  { id: "cs-03", label: "Case Study Coming Soon", ...emptyFields },
];

export const caseStudyFieldLabels = ["Industry", "Challenge", "Solution", "Technology", "Outcome"];
