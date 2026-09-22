import { CaseStudyCTA, CaseStudyHero, FeatureGrid, GallerySection, ResponsiveShowcase, ResultsSection, TextSection } from "@/components/kravient/CaseStudySystem";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { ScrollReveal } from "@/components/kravient/primitives";
import { getCaseStudyBySlug } from "@/data/caseStudies";

function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main className="container-site flex min-h-[70vh] items-center py-32">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase text-accent">Case study unavailable</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
            This project story is not published yet.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted2">
            Verified details, screenshots and outcomes will be added once the case study is approved.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function CaseStudyDetailPage({ slug }: { slug: string }) {
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <CaseStudyNotFound />;
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <CaseStudyHero study={study} />

        <TextSection eyebrow="Project Overview" title="Project Overview">
          {study.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </TextSection>

        <TextSection eyebrow="The Challenge" title="The Challenge" dark>
          <ul className="grid gap-4 text-left sm:grid-cols-2">
            {study.challenge.map((item, index) => (
              <li key={item} className="border border-white/12 bg-white/[0.06] p-5 text-left">
                <span className="font-display text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-left text-base font-semibold leading-relaxed text-white">{item}</p>
              </li>
            ))}
          </ul>
        </TextSection>

        <section className="overflow-hidden bg-white pt-12 pb-8 sm:pt-16 sm:pb-10">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <ScrollReveal>
                <p className="text-xs font-bold uppercase text-accent">Our Solution</p>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-navy-deep sm:text-5xl">
                  Simpler daily market work.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted2">
                  {study.solution.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    ["01", "Structured workflows"],
                    ["02", "Responsive dashboards"],
                    ["03", "Scalable foundation"],
                  ].map(([number, label]) => (
                    <div key={label} className="border border-line bg-cream px-4 py-4">
                      <span className="font-display text-sm font-bold text-accent">{number}</span>
                      <p className="mt-2 text-sm font-bold leading-snug text-navy-deep">{label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <figure className="overflow-hidden bg-white">
                  <div className="aspect-[1525/735] overflow-hidden bg-white">
                    <img
                      src={study.desktopImage}
                      alt="Digital Aadate dashboard screenshot"
                      loading="lazy"
                      className="block h-full w-full object-contain object-top"
                    />
                  </div>
                </figure>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FeatureGrid study={study} />

        <TextSection eyebrow="Design Approach" title="Designed around the user.">
          {study.designApproach.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </TextSection>

        <GallerySection study={study} />
        <ResponsiveShowcase study={study} />
        <ResultsSection study={study} />
        <CaseStudyCTA study={study} />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}




