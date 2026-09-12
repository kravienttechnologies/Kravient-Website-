import agriculture from "@/assets/industry-agriculture.jpg";
import whyHero from "@/assets/why-hero.jpg";
import { BrowserMockup } from "@/components/kravient/BrowserMockup";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { FlowDiagram } from "@/components/kravient/FlowDiagram";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import {
  ArrowLink,
  ScrollReveal,
  SectionEyebrow,
  StatusPill,
} from "@/components/kravient/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { platformCatalog } from "@/data/platform";

export function WhyKravientPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <div className="container-site grid items-center gap-14 pb-20 pt-36 sm:pt-44 lg:grid-cols-12 lg:pb-28">
            <div className="lg:col-span-7">
              <SectionEyebrow tone="dark">Why Kravient</SectionEyebrow>
              <h1 className="mt-6 font-display text-[40px] font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">One Platform.</span>
                <span className="block">Every Bharat Business.</span>
                <span className="block">Built to work without</span>
                <span className="block">the internet.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Kravient exists because most software is designed for perfect conditions: fast
                internet, new devices, patient users. Bharat works differently. So do we.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 hidden h-full w-full border border-white/15 sm:block"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={whyHero}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="offline" className="scroll-mt-24 bg-navy py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow tone="dark">Offline-first is the foundation</SectionEyebrow>
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Connectivity should enhance software.
                <br />
                <span className="text-white/50">Not control it.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
                Most software treats the internet as a given. Kravient treats it as a bonus. Work
                happens locally, instantly, and the cloud catches up when the network does.
              </p>
            </ScrollReveal>
            <div className="mt-16">
              <FlowDiagram testId="why-offline-flow" />
            </div>
          </div>
        </section>

        <section id="simplicity" className="scroll-mt-24 bg-cream py-24 sm:py-32">
          <div className="container-site grid items-center gap-14 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <SectionEyebrow>Built for real people</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                Software should not need a manual.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted2 sm:text-lg">
                The people running hospitals, shops and schools are experts in their work, not in
                software. Every Kravient screen is designed so a new user is productive on day one.
              </p>
              <div className="mt-8">
                <ArrowLink to="/products/kravient-hms">See Kravient HMS</ArrowLink>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="lg:col-span-7">
              <BrowserMockup />
            </ScrollReveal>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 border-y border-line bg-white py-24 sm:py-32">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-6">
              <SectionEyebrow>Pricing without surprises</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                One simple price.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted2 sm:text-lg">
                No per-user fees. No locked modules. No surprise invoices. You know exactly what
                Kravient costs before you start, and it stays that way.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100} className="lg:col-span-6 lg:self-center">
              <div className="border border-line bg-cream p-8 sm:p-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted2">
                  Example: Kravient HMS
                </span>
                <div className="mt-4 font-display text-4xl font-extrabold text-navy-deep sm:text-5xl">
                  ₹7,000<span className="text-lg font-semibold text-muted2"> / year</span>
                </div>
                <p className="mt-3 text-sm text-muted2">
                  All-inclusive. Every module. Every update. Support included.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="bharat" className="scroll-mt-24 bg-cream">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center px-5 py-20 sm:px-12 sm:py-28 lg:px-16 xl:px-24">
              <ScrollReveal>
                <SectionEyebrow>Built in India</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                  Designed for how Bharat actually operates.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted2 sm:text-lg">
                  Unreliable connectivity. Shared computers. Busy counters. Staff who switch between
                  three jobs before lunch. Kravient is designed around these realities, not around a
                  slide deck.
                </p>
              </ScrollReveal>
            </div>
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
              <img
                src={agriculture}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="platform" className="scroll-mt-24 bg-navy-deep py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow tone="dark">The Kravient platform</SectionEyebrow>
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                One platform. Every Bharat business.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                Kravient HMS is live today. Every other product below is part of the planned future
                platform, built on the same offline-first foundation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Accordion type="multiple" className="mt-14 w-full">
                {platformCatalog.map((category, index) => (
                  <AccordionItem
                    key={category.category}
                    value={`cat-${index}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="min-h-[60px] text-left font-display text-lg font-bold text-white hover:text-accent sm:text-xl">
                      <span className="flex flex-wrap items-center gap-3">
                        {category.category}
                        <span className="text-xs font-semibold text-white/40">
                          {category.products.length} products
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid gap-3 pb-4 sm:grid-cols-2 lg:grid-cols-3">
                        {category.products.map((product) => (
                          <li
                            key={product.name}
                            className="flex items-center justify-between border border-white/10 bg-navy-800 px-4 py-3"
                          >
                            <span className="text-sm font-semibold text-white/85">
                              {product.name}
                            </span>
                            <StatusPill status={product.status} />
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

