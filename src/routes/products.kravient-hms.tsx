import { Activity, Database, Monitor, RefreshCw, Wifi, WifiOff } from "lucide-react";

import heroHospital from "@/assets/hero-hospital.jpg";
import hmsDashboard from "@/assets/hms-dashboard.jpg";
import healthcare from "@/assets/industry-healthcare.jpg";
import statement1 from "@/assets/statement-1.jpg";
import statement2 from "@/assets/statement-2.jpg";
import statement3 from "@/assets/statement-3.jpg";
import { BrowserMockup } from "@/components/kravient/BrowserMockup";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { FlowDiagram } from "@/components/kravient/FlowDiagram";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { ActionLink, ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { hms } from "@/data/products";

const offlineSteps = [
  { label: "Hospital Computer", icon: Monitor },
  { label: "Local Database", icon: Database },
  { label: "No Internet", icon: WifiOff },
  { label: "Hospital Continues Running", icon: Activity },
  { label: "Connectivity Returns", icon: Wifi },
  { label: "Automatic Sync", icon: RefreshCw },
];

const moduleImages = [heroHospital, healthcare, hmsDashboard, statement1, statement2, statement3];

export function HmsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="container-site relative grid items-center gap-14 pb-20 pt-36 sm:pt-44 lg:grid-cols-12 lg:pb-28">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-offline sm:text-xs">
                <span
                  className="soft-pulse h-1.5 w-1.5 rounded-full bg-offline"
                  aria-hidden="true"
                />
                Live Product
              </span>
              <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
                Kravient HMS
              </h1>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug text-white/85 sm:text-3xl">
                Hospital management.
                <br />
                <span className="text-white/50">Without the complexity.</span>
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                Offline-first hospital management software built for small hospitals across Bharat.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <ActionLink
                  to="/contact"
                  className="w-full bg-accent text-navy-deep hover:bg-accent-soft sm:w-auto"
                >
                  Start Free Trial
                </ActionLink>
                <ActionLink to="/contact" variant="onDark" className="w-full sm:w-auto">
                  Book a Demo
                </ActionLink>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ScrollReveal delay={200}>
                <BrowserMockup />
              </ScrollReveal>
            </div>
          </div>

          <div className="relative border-t border-white/10">
            <div className="container-site grid grid-cols-2 gap-y-6 py-8 lg:grid-cols-4">
              {hms.trustBar.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-white/85"
                >
                  <RefreshCw className="h-4.5 w-4.5 text-accent" size={18} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow>Core modules</SectionEyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                Six modules. One calm system.
              </h2>
            </ScrollReveal>
            <div className="mt-16 space-y-20 sm:space-y-28">
              {hms.modules.map((module, index) => {
                const flip = index % 2 === 1;
                return (
                  <div
                    key={module.name}
                    className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                  >
                    <ScrollReveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                      <div className="relative">
                        <div
                          aria-hidden="true"
                          className={`absolute -top-4 hidden h-full w-full border border-navy/15 sm:block ${
                            flip ? "-right-4" : "-left-4"
                          }`}
                        />
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img
                            src={moduleImages[index]}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal
                      delay={100}
                      className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}
                    >
                      <span className="flex h-12 w-12 items-center justify-center border border-line bg-white">
                        <RefreshCw className="h-5 w-5 text-accent" aria-hidden="true" />
                      </span>
                      <span className="mt-6 block font-display text-sm font-bold tracking-[0.3em] text-muted2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold text-navy-deep sm:text-4xl">
                        {module.name}
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-muted2 sm:text-lg">
                        {module.body}
                      </p>
                    </ScrollReveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-navy py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow tone="dark">Offline functionality</SectionEyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                No internet? The hospital keeps running.
              </h2>
            </ScrollReveal>
            <div className="mt-16">
              <FlowDiagram steps={offlineSteps} testId="hms-offline-flow" />
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white py-24 sm:py-28">
          <div className="container-site grid gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <SectionEyebrow>Who it is for</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                Built for the hospitals India actually has.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100} className="lg:col-span-7 lg:self-end">
              <ul className="flex flex-wrap gap-3">
                {hms.audience.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-cream px-5 py-3 font-display text-sm font-bold text-navy-deep sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-fog py-24 sm:py-32">
          <div className="container-site">
            <ScrollReveal>
              <div className="mx-auto max-w-2xl border border-line bg-white p-10 text-center sm:p-14">
                <div className="flex justify-center">
                  <SectionEyebrow>Pricing</SectionEyebrow>
                </div>
                <div className="mt-6 font-display text-5xl font-extrabold tracking-tight text-navy-deep sm:text-6xl">
                  {hms.price.replace("/year", "")}
                  <span className="text-xl font-semibold text-muted2"> / year</span>
                </div>
                <p className="mt-4 text-base text-muted2 sm:text-lg">
                  All inclusive. Every module, offline-first capability, automatic sync and support:
                  one simple annual price.
                </p>
                <div className="mt-9">
                  <ActionLink
                    to="/contact"
                    className="w-full bg-accent text-navy-deep hover:bg-accent-soft sm:w-auto"
                  >
                    Start 30-Day Trial
                  </ActionLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-deep sm:text-5xl">
                Questions, answered.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100} className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {hms.faq.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`faq-${index}`} className="border-line">
                    <AccordionTrigger className="min-h-[56px] text-left font-display text-base font-bold text-navy-deep hover:text-accent sm:text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted2">
                      {faq.a}
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


