import { CaseStudyCard } from "@/components/kravient/CaseStudySystem";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-deep pt-28 text-white sm:pt-36">
          <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="container-site relative pb-16 pt-12 sm:pb-20">
            <ScrollReveal className="max-w-4xl">
              <SectionEyebrow tone="dark">Our Work</SectionEyebrow>
              <h1 className="mt-7 max-w-4xl font-display text-[34px] font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Ideas transformed into digital experiences.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Explore how we combine strategy, design and technology to build meaningful digital
                products for businesses.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-24">
          <div className="container-site">
            <div className="grid gap-7 lg:grid-cols-2 lg:gap-8">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.slug} delay={Math.min(index * 80, 240)}>
                  <CaseStudyCard study={study} index={index} />
                </ScrollReveal>
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
