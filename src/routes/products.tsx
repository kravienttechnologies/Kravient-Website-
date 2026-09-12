import { BrowserMockup } from "@/components/kravient/BrowserMockup";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { PageHero } from "@/components/kravient/PageHero";
import {
  ActionLink,
  ArrowLink,
  ScrollReveal,
  SectionEyebrow,
} from "@/components/kravient/primitives";
import { process } from "@/data/content";
import { customSolutionPlaceholders, hms } from "@/data/products";

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <PageHero
          eyebrow="Products"
          titleLines={["We build software that works", "where the internet doesn't."]}
          lede="Praavi Group builds simple, offline-first software for businesses that many technology companies overlook: small hospitals, local shops, schools, farms and everyday operations across Bharat. Kravient HMS is the first live product."
        />

        <section className="bg-fog py-24 sm:py-32">
          <div className="container-site grid items-center gap-14 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <ScrollReveal>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 hidden h-full w-full border border-navy/15 sm:block"
                  />
                  <BrowserMockup className="relative" />
                </div>
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-offline sm:text-xs">
                  <span
                    className="soft-pulse h-1.5 w-1.5 rounded-full bg-offline"
                    aria-hidden="true"
                  />
                  Live Product
                </span>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy-deep sm:text-5xl">
                  {hms.name}
                </h2>
                <p className="mt-3 font-display text-lg font-semibold text-accent">{hms.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-muted2 sm:text-lg">
                  {hms.summary}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {hms.modules.map((module) => (
                    <li
                      key={module.name}
                      className="border border-line bg-white px-3.5 py-2 text-xs font-semibold text-navy"
                    >
                      {module.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-l-2 border-accent pl-5">
                  <span className="font-display text-3xl font-extrabold text-navy-deep">
                    {hms.price}
                  </span>
                  <span className="ml-3 text-sm text-muted2">{hms.priceNote}</span>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ActionLink
                    to="/products/kravient-hms"
                    className="w-full bg-accent text-navy-deep hover:bg-accent-soft sm:w-auto"
                  >
                    View Product
                  </ActionLink>
                  <ActionLink to="/contact" variant="outline" className="w-full sm:w-auto">
                    Book Demo
                  </ActionLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow>Custom solutions</SectionEyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                Need something built specifically for your business?
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted2 sm:text-lg">
                Alongside the Kravient platform, Praavi Group takes on select custom software
                engagements.
              </p>
            </ScrollReveal>
            <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {customSolutionPlaceholders.map((solution, index) => (
                <ScrollReveal key={solution.title} delay={index * 80} className="bg-white">
                  <div className="flex h-full flex-col p-8">
                    <span className="font-display text-sm font-bold tracking-[0.24em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-navy-deep">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted2">{solution.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={100}>
              <div className="mt-10">
                <ArrowLink to="/contact">Discuss a custom project</ArrowLink>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-navy-deep py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow tone="dark">How we work</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                A process built on understanding.
              </h2>
            </ScrollReveal>
            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {process.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 100}>
                  <div className="border-t border-white/15 pt-6">
                    <span className="font-display text-sm font-bold tracking-[0.3em] text-accent">
                      {step.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{step.body}</p>
                  </div>
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

