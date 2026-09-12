import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { PageHero } from "@/components/kravient/PageHero";
import { ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";

const interests = ["Kravient HMS", "Custom Software", "Partnership", "Other"];
const sources = ["Google Search", "Referral", "Social Media", "Event", "Other"];
const contactBlocks = [
  { label: "Email", value: "To be announced", icon: Mail },
  { label: "Phone", value: "To be announced", icon: Phone },
  { label: "Office", value: "Details coming soon", icon: MapPin },
];
const inputClass =
  "min-h-[48px] w-full border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted2/60 transition-colors duration-200 focus:border-accent focus:outline-none";

export function ContactPage() {
  const [interest, setInterest] = useState("Kravient HMS");

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          titleLines={["Let's build something", "that works."]}
          lede="Have a question about Kravient, want a custom solution built, or just want to talk to someone?"
          compact
        />

        <section className="bg-cream py-20 sm:py-28">
          <div className="container-site grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <SectionEyebrow>Reach us</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-4xl">
                  We would love to hear from you.
                </h2>
                <ul className="mt-10 space-y-6">
                  {contactBlocks.map((block) => {
                    const Icon = block.icon;
                    return (
                      <li key={block.label} className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-white">
                          <Icon className="h-4.5 w-4.5" size={18} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted2">
                            {block.label}
                          </span>
                          <span className="mt-1 block text-base font-semibold text-navy-deep">
                            {block.value}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-10 max-w-sm border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted2">
                  Our direct contact details are being finalised. Until then, the fastest way to
                  reach us is the form: every message lands directly with the team.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <form className="border border-line bg-white p-7 sm:p-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="full_name"
                        className="mb-2 block text-sm font-semibold text-navy"
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="full_name"
                        type="text"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-navy"
                      >
                        Company / Hospital Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        className={inputClass}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <fieldset className="mt-6">
                    <legend className="mb-3 text-sm font-semibold text-navy">
                      Interested In <span className="text-accent">*</span>
                    </legend>
                    <div className="flex flex-wrap gap-2.5">
                      {interests.map((option) => (
                        <label
                          key={option}
                          className={`flex min-h-[44px] cursor-pointer items-center border px-4 text-sm font-semibold transition-colors duration-200 ${
                            interest === option
                              ? "border-accent bg-accent/10 text-navy-deep"
                              : "border-line bg-white text-muted2 hover:border-navy/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="interest"
                            value={option}
                            checked={interest === option}
                            onChange={() => setInterest(option)}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input id="email" type="email" className={inputClass} autoComplete="email" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input id="phone" type="tel" className={inputClass} autoComplete="tel" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`${inputClass} min-h-[120px] resize-y`}
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="source" className="mb-2 block text-sm font-semibold text-navy">
                      How did you hear about us?
                    </label>
                    <select id="source" className={inputClass}>
                      <option value="">Select an option</option>
                      {sources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 bg-accent px-8 text-sm font-semibold tracking-wide text-navy-deep transition-colors duration-300 hover:bg-accent-soft sm:w-auto"
                  >
                    Send Message
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


