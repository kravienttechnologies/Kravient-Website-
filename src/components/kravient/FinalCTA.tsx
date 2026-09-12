import { type ReactNode } from "react";

import { ActionLink, ScrollReveal } from "./primitives";

export function FinalCTA({
  titleLines = ["Ready to simplify your business?", "Let Kravient build it right."],
}: {
  titleLines?: string[];
  note?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-deep text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100 brightness-125 saturate-125"
        autoPlay
        muted
        loop
        playsInline
        poster="/cta-background-poster.jpg"
        aria-hidden="true"
      >
        <source src="/cta-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-deep/36" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,23,38,0.9)_0%,rgba(5,23,38,0.66)_45%,rgba(5,23,38,0.34)_100%)]"
        aria-hidden="true"
      />
      <div className="container-site relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <ScrollReveal>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-accent">
                Build with Kravient
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
                Create reliable software for your team, your workflow and the way your business actually runs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[240px] lg:flex-col lg:items-stretch">
              <ActionLink
                to="/contact"
                className="min-h-[44px] w-full rounded-[6px] bg-accent px-5 py-2.5 text-xs text-navy-deep shadow-[0_16px_34px_-20px_rgba(244,122,56,0.9)] hover:bg-accent-soft hover:shadow-[0_18px_38px_-18px_rgba(244,122,56,0.95)] sm:w-auto lg:w-full"
              >
                Book a Demo
              </ActionLink>
              <ActionLink
                to="/products/kravient-hms"
                className="min-h-[44px] w-full rounded-[6px] border border-white/22 bg-white/10 px-5 py-2.5 text-xs text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md hover:border-white/55 hover:bg-white/16 hover:text-white sm:w-auto lg:w-full"
              >
                Explore Kravient
              </ActionLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}