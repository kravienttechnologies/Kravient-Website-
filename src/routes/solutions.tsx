import { FinalCTA } from "@/components/kravient/FinalCTA";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { PageHero } from "@/components/kravient/PageHero";
import { ArrowLink, ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import { extendedIndustries } from "@/data/industries";

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <PageHero
          eyebrow="Solutions"
          titleLines={["Software built around how", "your industry actually works."]}
          lede="Every industry has its own rhythm, its own constraints and its own definition of a busy day. Kravient products are shaped around each one."
        />

        {extendedIndustries.map((industry, index) => {
          const flip = index % 2 === 1;
          return (
            <section
              key={industry.slug}
              id={industry.slug}
              className={`scroll-mt-24 ${index % 2 === 0 ? "bg-cream" : "border-y border-line bg-white"}`}
            >
              <div className="grid lg:grid-cols-2">
                <div
                  className={`relative min-h-[300px] overflow-hidden lg:min-h-[520px] ${
                    flip ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={industry.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div
                  className={`flex items-center px-5 py-16 sm:px-12 sm:py-24 lg:px-16 xl:px-24 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  <ScrollReveal>
                    <SectionEyebrow>{industry.title}</SectionEyebrow>
                    <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-4xl">
                      {industry.title} software that keeps up with the counter.
                    </h2>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-muted2 sm:text-lg">
                      {industry.description}
                    </p>
                    <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-navy">
                      Common operational problems
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {industry.problems.map((problem) => (
                        <li
                          key={problem}
                          className="flex items-start gap-3 text-sm text-muted2 sm:text-base"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent"
                            aria-hidden="true"
                          />
                          {problem}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-navy">
                      Relevant platform products
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {industry.products.map((product) => (
                        <li
                          key={product}
                          className="border border-line bg-white px-3.5 py-2 text-xs font-semibold text-navy"
                        >
                          {product}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-9">
                      <ArrowLink to="/contact">
                        Talk to us about {industry.title.toLowerCase()}
                      </ArrowLink>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

