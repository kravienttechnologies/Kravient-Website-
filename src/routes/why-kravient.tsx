import agriculture from "@/assets/industry-agriculture.jpg";
import { CloudOff, IndianRupee, Layers3, WifiOff } from "lucide-react";
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
        <section className="relative overflow-hidden border-b border-line bg-white">
          <div className="container-site grid min-h-[100svh] items-center gap-8 pb-14 pt-24 sm:pt-28 lg:grid-cols-12 lg:pb-16">
            <div className="lg:col-span-6">
              <SectionEyebrow>Why Kravient</SectionEyebrow>
              <h1 className="mt-4 max-w-3xl font-display text-[34px] font-extrabold leading-[1.04] tracking-tight text-navy-deep sm:text-5xl lg:text-[56px]">
                One platform for Bharat businesses, built to keep working.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted2 sm:text-base">
                Kravient is designed for the conditions real teams face every day: unreliable
                connectivity, shared devices, busy counters and users who need software to feel
                obvious from the first shift.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  [WifiOff, "Offline-first", "Core work continues without internet."],
                  [IndianRupee, "Simple pricing", "One annual price with support included."],
                  [Layers3, "Platform ready", "Built to support every Bharat business."],
                ].map(([Icon, title, body]) => (
                  <div key={title} className="border border-line bg-cream p-3">
                    <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <p className="mt-3 font-display text-xs font-bold text-navy-deep">{title}</p>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted2">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  ["Offline-first", "#offline"],
                  ["Simplicity", "#simplicity"],
                  ["Pricing", "#pricing"],
                  ["Platform vision", "#platform"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex min-h-[36px] items-center border border-line px-3 text-xs font-semibold text-navy-deep transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delay={200}>
                <div className="relative ml-auto max-w-xl">
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 hidden h-full w-full border border-navy-deep/12 sm:block"
                  />
                  <div className="relative overflow-hidden border border-line bg-cream shadow-[0_30px_90px_-45px_rgba(0,0,0,0.75)]">
                    <img
                      src={whyHero}
                      alt="A team member using Kravient in a busy hospital setting"
                      loading="eager"
                      className="aspect-[16/11] h-full w-full object-cover sm:aspect-[16/11]"
                    />
                    <div className="bg-navy-deep p-3 sm:absolute sm:inset-x-0 sm:bottom-0 sm:bg-[linear-gradient(180deg,rgba(8,28,44,0)_0%,rgba(8,28,44,0.94)_100%)] sm:p-5 sm:pt-20">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="border border-white/18 bg-navy-deep/88 p-3 backdrop-blur">
                          <CloudOff className="h-4 w-4 text-accent" aria-hidden="true" />
                          <p className="mt-2 font-display text-xs font-bold text-white">
                            Local-first workflow
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-white/64">
                            Daily operations continue while sync waits for the network.
                          </p>
                        </div>
                        <div className="border border-white/18 bg-navy-deep/88 p-3 backdrop-blur">
                          <p className="font-display text-2xl font-extrabold leading-none text-white">
                            Rs. 7k
                          </p>
                          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                            per year
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-white/64">
                            Every module, updates and support included.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="offline" className="scroll-mt-24 bg-navy py-16 sm:py-20">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow tone="dark">Offline-first is the foundation</SectionEyebrow>
              <h2 className="mt-6 max-w-5xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:whitespace-nowrap">
                Connectivity should enhance software. {" "}
                <span className="text-white/50">Not control it.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
                Most software treats the internet as a given. Kravient treats it as a bonus. Work
                happens locally, instantly, and the cloud catches up when the network does.
              </p>
            </ScrollReveal>
            <div className="mt-10">
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

        <section id="platform" className="scroll-mt-24 bg-navy-deep py-16 sm:py-20">
          <div className="container-site">
            <ScrollReveal>
              <div>
                <SectionEyebrow tone="dark">The Kravient platform</SectionEyebrow>
                <h2 className="mt-5 max-w-5xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:whitespace-nowrap">
                  One platform. Every Bharat business.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Accordion type="multiple" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {platformCatalog.map((category, index) => (
                  <AccordionItem
                    key={category.category}
                    value={`cat-${index}`}
                    className="overflow-hidden border border-white/10 bg-white/[0.035] transition-colors duration-200 hover:border-white/20 data-[state=open]:border-accent/55 data-[state=open]:bg-white/[0.055]"
                  >
                    <AccordionTrigger className="group relative min-h-[128px] p-5 text-left hover:no-underline [&>svg]:absolute [&>svg]:bottom-5 [&>svg]:right-5 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white/15 [&>svg]:p-1.5 [&>svg]:text-white/55 [&>svg]:transition-all data-[state=open]:[&>svg]:border-accent/50 data-[state=open]:[&>svg]:text-accent">
                      <span className="flex flex-1 flex-col items-start gap-7 pr-10">
                        <span className="flex w-full items-start justify-between gap-4">
                          <span className="font-display text-xl font-bold leading-tight text-white">
                            {category.category}
                          </span>
                          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/48">
                            {category.products.length} products
                          </span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent/90 transition-colors duration-200 group-hover:text-accent">
                          View products
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-0">
                      <ul className="space-y-2 border-t border-white/10 pt-4">
                        {category.products.map((product) => (
                          <li
                            key={product.name}
                            className="flex min-h-[38px] items-center justify-between gap-3 border border-white/10 bg-navy-deep/55 px-3 py-2"
                          >
                            <span className="text-xs font-semibold leading-tight text-white/82">
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
