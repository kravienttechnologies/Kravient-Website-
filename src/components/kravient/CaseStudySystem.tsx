import { ArrowRight, ExternalLink, Layers, Monitor, Smartphone, Tablet, TerminalSquare } from "lucide-react";

import { Link } from "@/components/kravient/AppLink";
import { ActionLink, ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/data/caseStudies";

const accentClasses = {
  orange: "bg-accent",
  green: "bg-success",
  blue: "bg-sky-500",
};

function normalizedImageLoading(label: string) {
  return label.toLowerCase().includes("hero") || label.toLowerCase().includes("card")
    ? "eager"
    : "lazy";
}

function getProjectImage(study: CaseStudy, label: string, variant: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("card") || normalizedLabel.includes("hero")) {
    return study.heroImage;
  }

  if (normalizedLabel.includes("kyc") || normalizedLabel.includes("customer")) {
    return study.galleryImages.find((image) => image.label.toLowerCase().includes("customer"))?.src;
  }

  if (normalizedLabel.includes("complaint")) {
    return study.galleryImages.find((image) => image.label.toLowerCase().includes("complaint"))?.src;
  }

  if (normalizedLabel.includes("market") || normalizedLabel.includes("price")) {
    return study.galleryImages.find((image) => image.label.toLowerCase().includes("market"))?.src;
  }

  if (variant === "tablet") {
    return study.tabletImage ?? study.desktopImage ?? study.heroImage;
  }

  if (variant === "mobile") {
    return study.mobileImage ?? study.tabletImage ?? study.desktopImage ?? study.heroImage;
  }

  if (variant === "desktop") {
    return study.desktopImage ?? study.heroImage;
  }

  return study.galleryImages.find((image) => image.alt === label)?.src ?? study.desktopImage ?? study.heroImage;
}

function MockupBars({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <span className="h-16 bg-navy-deep/90" />
        <span className="h-16 bg-accent/90" />
        <span className="h-16 bg-fog" />
      </div>
      <div className="space-y-2">
        <span className="block h-3 w-3/4 bg-navy-deep/18" />
        <span className="block h-3 w-5/6 bg-navy-deep/12" />
        <span className="block h-3 w-2/3 bg-navy-deep/12" />
      </div>
      {!compact && (
        <div className="grid grid-cols-2 gap-3 pt-2">
          <span className="h-20 border border-line bg-white" />
          <span className="h-20 border border-line bg-white" />
        </div>
      )}
    </div>
  );
}

export function ProjectMockup({
  study,
  label = "Website preview",
  variant = "desktop",
  className,
}: {
  study: CaseStudy;
  label?: string;
  variant?: "desktop" | "laptop" | "tablet" | "mobile" | "wide";
  className?: string;
}) {
  const isMobile = variant === "mobile";
  const isTablet = variant === "tablet";
  const imageSrc = getProjectImage(study, label, variant);

  if (imageSrc) {
    return (
      <figure
        className={cn(
          "relative overflow-hidden",
          isMobile ? "mx-auto aspect-[243/643] w-full max-w-[152px] border-0 bg-transparent" : "border-0 bg-transparent",
          isTablet && "mx-auto aspect-[384/512] w-full max-w-[260px] border-0 bg-transparent",
          className,
        )}
      >

        <div
          className={cn(
            "overflow-hidden bg-transparent",
            variant === "wide" ? "aspect-[1525/735]" : isMobile ? "aspect-[243/643]" : isTablet ? "aspect-[384/512]" : "aspect-[1525/735]",
          )}
        >
          <img
            src={imageSrc}
            alt={label}
            loading={normalizedImageLoading(label)}
            className={cn("block h-full w-full", isMobile || isTablet ? "object-cover" : "object-contain object-top")}
          />
        </div>
        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-line bg-white shadow-[0_28px_70px_-42px_rgba(8,27,45,0.55)]",
        isMobile ? "mx-auto aspect-[243/643] w-full max-w-[152px] border-0 bg-transparent" : "",
        isTablet && "mx-auto aspect-[384/512] w-full max-w-[260px] border-0 bg-transparent",
        className,
      )}
      aria-label={`${study.projectName} ${label}`}
    >

      <div
        className={cn(
          "relative min-h-[210px] overflow-hidden bg-cream p-4 sm:min-h-[270px] sm:p-5",
          isMobile && "min-h-0 p-4",
          isTablet && "min-h-0 p-5",
          variant === "wide" && "min-h-[300px] sm:min-h-[390px]",
        )}
      >
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(8,27,45,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(8,27,45,0.045)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-6">
          <div>
            <span className={cn("block h-1.5 w-16", accentClasses[study.accent])} />
            <p className="mt-5 text-xs font-bold uppercase text-muted2">{study.category}</p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-navy-deep sm:text-4xl">
              {study.projectName}
            </h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="border border-line bg-white p-4">
              <MockupBars compact={isMobile} />
            </div>
            {!isMobile && (
              <div className="space-y-3">
                {["Members", "KYC", "Prices"].map((item) => (
                  <div key={item} className="flex items-center justify-between border border-line bg-white px-3 py-3">
                    <span className="text-xs font-bold text-navy-deep">{item}</span>
                    <span className={cn("h-2 w-10", accentClasses[study.accent])} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="group h-full overflow-hidden border border-line bg-white transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-accent/55 hover:shadow-[0_26px_70px_-46px_rgba(8,27,45,0.45)]">
      <div className="border-b border-line bg-fog p-2">
        <ProjectMockup
          study={study}
          label="card preview"
          className={cn(
            "mx-auto max-w-[680px] transition-transform duration-700 ease-out group-hover:scale-[1.01]",
            index % 2 === 1 && "lg:mt-4",
          )}
        />
      </div>
      <div className="p-5 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase text-muted2">
          <span>{study.category}</span>
          <span className="text-muted2/50">/</span>
          <span>{study.industry}</span>
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-navy-deep">
          {study.projectName}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted2">
          {study.shortDescription}
        </p>
        {study.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span key={tech} className="border border-line bg-cream px-3 py-1.5 text-xs font-bold text-navy">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="pt-3">
          {study.isPublished ? (
            <Link
              to={`/case-studies/${study.slug}`}
              className="group/link inline-flex min-h-[40px] items-center gap-2 text-sm font-bold text-navy-deep transition-colors duration-300 hover:text-accent"
            >
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          ) : (
            <span className="inline-flex min-h-[40px] items-center text-sm font-bold text-muted2">
              Pending approval
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-24 text-white sm:pt-28">
      <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="container-site relative pb-6 pt-8 sm:pb-8 sm:pt-10">
        <ScrollReveal className="max-w-4xl">
          <SectionEyebrow tone="dark">Case Study</SectionEyebrow>
          <h1 className="mt-5 font-display text-[34px] font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
            {study.projectName}
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase text-white/55 sm:text-sm">
            {study.category} / {study.industry}
          </p>

        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-6">
          <ProjectMockup study={study} variant="wide" label="large hero screenshot" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <dl className="mt-0 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Client", study.client],
              ["Industry", study.industry],
              ["Services", study.services.join(", ")],
              ["Platform", study.platform],
              ["Year", study.year],
            ].map(([label, value]) => (
              <div key={label} className="bg-navy-deep/80 p-3 sm:p-4">
                <dt className="text-xs font-bold uppercase text-white/45">{label}</dt>
                <dd className="mt-1.5 text-sm font-semibold leading-relaxed text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TextSection({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={cn("py-14 sm:py-18", dark ? "bg-navy-deep text-white" : "bg-cream text-ink")}>
      <div className="container-site grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <ScrollReveal>
          {eyebrow && <SectionEyebrow tone={dark ? "dark" : "light"}>{eyebrow}</SectionEyebrow>}
          <h2 className={cn("mt-5 font-display text-3xl font-bold leading-tight sm:text-5xl", dark ? "text-white" : "text-navy-deep")}>{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={100} className={cn("space-y-5 text-justify text-base leading-relaxed sm:text-lg", dark ? "text-white/70" : "text-muted2")}>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}

export function FeatureGrid({ study }: { study: CaseStudy }) {
  if (study.features.length === 0) return null;

  return (
    <section className="bg-white pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="container-site">
        <ScrollReveal className="max-w-3xl">
          <SectionEyebrow>Key features</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-5xl">
            Built around the work users repeat every day.
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {study.features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 60}>
              <article className="h-full border border-line bg-cream p-6 transition-colors duration-300 hover:border-accent/50 hover:bg-white">
                <span className="flex h-11 w-11 items-center justify-center border border-line bg-white text-accent">
                  <Layers className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-deep">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted2">{feature.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-fog pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div className="container-site">
        <div className="grid gap-5 lg:grid-cols-2">
          {study.galleryImages.slice(0, 2).map((image, index) => (
            <ScrollReveal key={image.label} delay={index * 80}>
              {image.src ? (
                <figure className="overflow-hidden bg-transparent">
                  <div className="aspect-[1525/735] overflow-hidden bg-transparent">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="block h-full w-full object-contain object-top"
                    />
                  </div>
                  <figcaption className="sr-only">{image.label}</figcaption>
                </figure>
              ) : (
                <ProjectMockup study={study} label={image.alt} variant="laptop" />
              )}
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={120} className="mt-5">
          <ProjectMockup
            study={study}
            label={study.galleryImages[2]?.alt ?? "Full-width UI preview"}
            variant="wide"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TechStack({ study }: { study: CaseStudy }) {
  if (study.techStack.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-site grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <ScrollReveal>
          <SectionEyebrow>Technology</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-5xl">
            Technology behind the experience.
          </h2>
        </ScrollReveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {study.techStack.map((tech, index) => (
            <ScrollReveal key={tech} delay={index * 50}>
              <div className="flex min-h-[76px] items-center gap-3 border border-line bg-cream px-5 py-4">
                <TerminalSquare className="h-5 w-5 text-accent" />
                <span className="font-display text-lg font-bold text-navy-deep">{tech}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResponsiveShowcase({ study }: { study: CaseStudy }) {
  return (
    <section className="overflow-hidden bg-navy-deep pt-10 pb-16 text-white sm:pt-14 sm:pb-20">
      <div className="container-site">
        <ScrollReveal className="max-w-3xl">
          <SectionEyebrow tone="dark">Responsive showcase</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            One experience across desktop, tablet and mobile.
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[0.52fr_0.25fr_0.23fr]">
          <ScrollReveal>
            <figure className="w-full">
              <figcaption className="mb-3 flex items-center gap-2 text-sm font-bold text-white/65">
                <Monitor className="h-4 w-4" /> Desktop
              </figcaption>
              <div className="aspect-[1525/735] overflow-hidden bg-transparent">
                {study.desktopImage && (
                  <img
                    src={study.desktopImage}
                    alt="Digital Aadate desktop screenshot"
                    loading="lazy"
                    className="block h-full w-full object-contain object-top"
                  />
                )}
              </div>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <figure className="mx-auto w-full max-w-[260px]">
              <figcaption className="mb-3 flex items-center gap-2 text-sm font-bold text-white/65">
                <Tablet className="h-4 w-4" /> Tablet
              </figcaption>
              <div className="aspect-[384/512] overflow-hidden bg-transparent">
                {study.tabletImage && (
                  <img
                    src={study.tabletImage}
                    alt="Digital Aadate tablet screenshot"
                    loading="lazy"
                    className="block h-full w-full object-cover object-top"
                  />
                )}
              </div>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <figure className="mx-auto w-full max-w-[152px]">
              <figcaption className="mb-3 flex items-center gap-2 text-sm font-bold text-white/65">
                <Smartphone className="h-4 w-4" /> Mobile
              </figcaption>
              <div className="aspect-[243/643] overflow-hidden bg-transparent">
                {study.mobileImage && (
                  <img
                    src={study.mobileImage}
                    alt="Digital Aadate mobile screenshot"
                    loading="lazy"
                    className="block h-full w-full object-cover object-top"
                  />
                )}
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function ResultsSection({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-site grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <ScrollReveal>
          <SectionEyebrow>The impact</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-5xl">
            Verified qualitative outcomes.
          </h2>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {study.results.map((result, index) => (
            <ScrollReveal key={result} delay={index * 60}>
              <div className="h-full border border-line bg-white p-6">
                <span className="font-display text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-5 text-left text-base font-semibold leading-relaxed text-navy-deep">{result}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCTA({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-site border border-line bg-navy-deep p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Like what you see?</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Let's build something remarkable for your business.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <ActionLink to="/contact" className="w-full sm:w-auto">
            Start Your Project
          </ActionLink>
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 border border-white/35 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/5"
            >
              Visit Live Website
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}





