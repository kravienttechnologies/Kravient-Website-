import aboutBanner from "@/assets/about page banner.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryRetail from "@/assets/industry-retail.jpg";
import statementOne from "@/assets/statement-1.jpg";
import statementThree from "@/assets/statement-3.jpg";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { PageHero } from "@/components/kravient/PageHero";
import { ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import { values } from "@/data/content";

const valueTiles = values.map((value, index) => ({
  ...value,
  image: [industryHealthcare, statementOne, industryRetail, statementThree][index],
}));

export function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <PageHero
          eyebrow="About Kravient"
          titleLines={["Built patiently.", "Built independently.", "Built to last."]}
          lede="Praavi Group started as Praavi Consultants four years ago, building software for businesses that needed it done right, not done fast and forgotten. Kravient is the first product built from that experience."
          backgroundImage={aboutBanner}
          backgroundPosition="center"
        />

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="flex h-full flex-col bg-navy-deep p-10 sm:p-14">
                <SectionEyebrow tone="dark">Mission</SectionEyebrow>
                <p className="mt-8 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                  To build software so simple that any business, regardless of location,
                  connectivity or technical skill, can run on it without friction.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="flex h-full flex-col border border-line bg-white p-10 sm:p-14">
                <SectionEyebrow>Vision</SectionEyebrow>
                <p className="mt-8 font-display text-2xl font-bold leading-snug text-navy-deep sm:text-3xl">
                  A future where the smallest hospital in the smallest town has access to software
                  quality comparable to a hospital in a metro, at a price appropriate for where it
                  operates.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-t border-white/10 bg-navy-deep text-white">
          <div className="container-site py-16 sm:py-20">
            <ScrollReveal>
              <SectionEyebrow tone="dark">Values</SectionEyebrow>
              <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                What we refuse to compromise.
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid overflow-hidden border border-white/10 bg-[#10283b] shadow-[0_28px_80px_-42px_rgba(0,0,0,0.65)] md:grid-cols-2">
              {valueTiles.map((value, index) => (
                <ScrollReveal key={value.number} delay={index * 90}>
                  <article className="group relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
                    <img
                      src={value.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/28 transition-colors duration-300 group-hover:bg-black/58" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.72)_100%)]" />
                    <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7 sm:min-h-[320px] sm:p-10">
                      <span className="font-display text-xs font-bold tracking-[0.3em] text-accent">
                        {value.number}
                      </span>
                      <h3 className="mt-4 font-display text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl">
                        {value.title}
                      </h3>
                      <span className="mt-5 h-0.5 w-8 bg-accent" aria-hidden="true" />
                      <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-white/82 opacity-100 transition-opacity duration-300 sm:text-base sm:opacity-0 sm:group-hover:opacity-100">
                        {value.body}
                      </p>
                    </div>
                  </article>
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

