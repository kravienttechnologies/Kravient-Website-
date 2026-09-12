import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyPlaceholder } from "@/components/kravient/CaseStudyPlaceholder";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { PageHero } from "@/components/kravient/PageHero";
import { ScrollReveal } from "@/components/kravient/primitives";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <PageHero
          eyebrow="Case studies"
          titleLines={["Real problems.", "Real solutions.", "Four years of proof."]}
          lede="Before Kravient, there was Praavi. Four years of building software for real businesses with real deadlines."
        />

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <p className="inline-flex items-center gap-3 border border-line bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-muted2">
                <span
                  className="soft-pulse h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                More case studies coming soon
              </p>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study, index) => (
                <CaseStudyPlaceholder key={study.id} index={index} detailed />
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
