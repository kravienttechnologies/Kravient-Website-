import { type ReactNode } from "react";

import { SectionEyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  titleLines,
  lede,
  children,
  compact = false,
  backgroundImage,
  backgroundPosition = "center",
}: {
  eyebrow?: string;
  titleLines: string[];
  lede?: string;
  children?: ReactNode;
  compact?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
}) {
  if (backgroundImage) {
    return (
      <section className="relative overflow-hidden bg-white pt-20">
        <div className="container-site grid min-h-[525px] items-center gap-10 py-16 lg:grid-cols-[0.48fr_0.52fr] lg:py-0">
          <div className="relative z-10 max-w-2xl">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            <h1 className="mt-6 max-w-5xl font-display text-[40px] font-bold leading-[1.06] tracking-tight text-navy-deep sm:text-6xl lg:text-7xl">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            {lede && (
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted2 sm:text-lg">
                {lede}
              </p>
            )}
            {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
          </div>

          <div className="relative -mx-5 min-h-[360px] sm:-mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:min-h-0 lg:w-[52vw]">
            <div className="absolute inset-y-0 right-0 w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-white via-white/70 to-white/0" />
              <img
                src={backgroundImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center brightness-110 contrast-105 saturate-110"
                style={{ objectPosition: backgroundPosition }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_70%,rgba(244,122,56,0.18),transparent_32%)]" />
              <div className="absolute inset-0 mix-blend-screen bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(244,122,56,0.12)_45%,rgba(8,27,45,0.08)_100%)]" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
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
      <div
        className={`container-site relative ${
          compact ? "pb-16 pt-36 sm:pb-20 sm:pt-44" : "pb-20 pt-36 sm:pb-28 sm:pt-48"
        }`}
      >
        {eyebrow && <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>}
        <h1 className="mt-6 max-w-5xl font-display text-[40px] font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        {lede && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {lede}
          </p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
