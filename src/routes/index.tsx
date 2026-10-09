import { useEffect, useState } from "react";
import { Link } from "@/components/kravient/AppLink";
import {
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  IndianRupee,
  MapPin,
  MousePointerClick,
  ShieldCheck,
  WifiOff,
} from "lucide-react";

import aboutHero from "@/assets/about-hero.jpg";
import heroBanner from "@/assets/banner img .png";
import statementPoster from "@/assets/statement-3.jpg";
import { BrowserMockup } from "@/components/kravient/BrowserMockup";
import { FinalCTA } from "@/components/kravient/FinalCTA";
import { FlowDiagram } from "@/components/kravient/FlowDiagram";
import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { ArrowLink, ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { caseStudies } from "@/data/caseStudies";
import { statements } from "@/data/content";
import { industries } from "@/data/industries";
import { platformTiles } from "@/data/platform";
import { hms } from "@/data/products";

const whyBenefits = [
  {
    title: "Works Without Internet",
    description: "Full functionality even when connectivity is unavailable.",
    icon: WifiOff,
  },
  {
    title: "Learn It in a Day",
    description: "Interfaces designed for practical everyday users.",
    icon: MousePointerClick,
  },
  {
    title: "One Simple Price",
    description: "No hidden modules or confusing per-user pricing.",
    icon: IndianRupee,
  },
  {
    title: "Built in India, for India",
    description: "Designed around Indian business realities and operating conditions.",
    icon: MapPin,
  },
];

function PrimaryButton({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-2.5 bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-navy-deep transition-colors duration-300 hover:bg-accent-soft ${className}`}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

function GhostButton({
  to,
  children,
  dark = true,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-2.5 border px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
        dark
          ? "border-white/40 text-white hover:border-white hover:bg-white/5"
          : "border-navy/30 text-navy hover:border-navy hover:bg-navy/5"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

function IndustriesCarousel() {
  const visibleIndustries = industries.slice(0, 6);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelection = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);

    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 3200);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="mt-8">
      <CarouselContent className="-ml-4">
        {visibleIndustries.map((industry) => (
          <CarouselItem key={industry.slug} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
            <article className="group h-full overflow-hidden rounded-[8px] border border-line bg-white shadow-sm">
              <div className="aspect-[16/9] overflow-hidden lg:aspect-[2/1]">
                <img
                  src={industry.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-navy-deep">{industry.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted2">
                  {industry.short}
                </p>
                <div className="mt-3">
                  <ArrowLink to="/solutions">Explore</ArrowLink>
                </div>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-5 flex justify-center gap-2" aria-label="Industries carousel controls">
        {Array.from({ length: snapCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to industry slide ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-7 bg-accent"
                : "w-2.5 bg-navy-deep/20 hover:bg-accent/60"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white pt-20">
          <div className="container-site grid min-h-[525px] items-center gap-10 py-16 lg:grid-cols-[0.48fr_0.52fr] lg:py-0">
            <div className="relative z-10 max-w-2xl">
              <h1 className="font-display text-[42px] font-medium leading-[1.12] text-navy-deep sm:text-5xl lg:text-[54px]">
                Kravient builds
                <br />
                <strong className="font-extrabold">offline-first software</strong> for Bharat
                <br />
                with <strong className="font-extrabold">simple workflows</strong>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted2 sm:text-lg">
                Dependable products for hospitals, shops, schools, farms and everyday businesses
                where work cannot pause for internet.
              </p>
              <Link
                to="/products/kravient-hms"
                className="mt-9 inline-flex min-h-[50px] items-center justify-center rounded-full bg-accent px-8 text-base font-bold text-white transition-colors duration-200 hover:bg-accent-soft"
              >
                Learn More
              </Link>
            </div>

            <div className="relative -mx-5 min-h-[360px] sm:-mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:min-h-0 lg:w-[52vw]">
              <div className="absolute inset-y-0 right-0 w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 w-2/5 bg-gradient-to-r from-white via-white/80 to-white/0" />
                <img
                  src={heroBanner}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-right opacity-95"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_70%,rgba(244,122,56,0.26),transparent_32%)]" />
                <div className="absolute inset-0 mix-blend-screen bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(244,122,56,0.16)_45%,rgba(8,27,45,0.08)_100%)]" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy-deep text-white">
          <div className="container-site py-6 sm:py-7">
            <p className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Kravient HMS is live:
            </p>
            <p className="mt-1 font-display text-2xl font-medium leading-tight text-white/90 sm:text-3xl">
              Offline-first hospital management for small hospitals
            </p>
          </div>
        </section>

        <section className="bg-cream py-14 sm:py-16 lg:py-20">
          <div className="container-site grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <ScrollReveal>
                <SectionEyebrow>We are Kravient</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-deep sm:text-5xl">
                  Technology should adapt to your business.
                  <br />
                  <span className="text-muted2">Not the other way around.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="flex flex-col justify-end md:col-span-5 md:col-start-8">
              <ScrollReveal delay={150}>
                <p className="text-base leading-relaxed text-muted2 sm:text-lg">
                  Kravient is building the software layer for businesses India's technology industry
                  has often overlooked: small hospitals, local shops, schools, farms, clinics and
                  service businesses.
                </p>
                <div className="mt-8">
                  <ArrowLink to="/why-kravient">Discover why Kravient</ArrowLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy-deep py-12 text-white sm:py-16 lg:py-14">
          <img
            src={statementPoster}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={statementPoster}
            aria-hidden="true"
          >
            <source src="/statement-animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy-deep/55" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(244,122,56,0.42),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(76,154,255,0.38),transparent_32%),linear-gradient(180deg,rgba(8,27,45,0.25),rgba(8,27,45,0.82))]"
            aria-hidden="true"
          />

          <div className="container-site relative">
            <ScrollReveal className="mx-auto max-w-5xl text-center">
              <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
                We simplify work.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-white sm:text-2xl">
                Business software designed around real teams, clear workflows and everyday operations.
              </p>
            </ScrollReveal>

            <div className="mx-auto mt-9 grid max-w-5xl gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4">
              {statements.map((chapter, index) => (
                <ScrollReveal key={chapter.number} delay={index * 80}>
                  <article className="h-full min-h-[260px] rounded-[6px] bg-white p-6 text-ink shadow-[0_24px_60px_-32px_rgba(0,0,0,0.55)] sm:p-7 lg:min-h-[250px]">
                    <span className="text-sm font-medium text-navy-deep/75">{chapter.number}</span>
                    <h3 className="mt-4 font-display text-xl font-extrabold leading-snug text-navy-deep">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-muted2">
                      {chapter.body}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-fog py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(242,245,244,0.86)_42%,rgba(244,122,56,0.11)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(8,27,45,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(8,27,45,0.045)_1px,transparent_1px)] [background-size:56px_56px]"
          />

          <div className="container-site relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-offline/20 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase text-offline shadow-sm sm:text-xs">
                  <span
                    className="soft-pulse h-1.5 w-1.5 rounded-full bg-offline"
                    aria-hidden="true"
                  />
                  Live Product
                </span>
                <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold tracking-tight text-navy-deep sm:text-6xl">
                  {hms.name}
                </h2>
                <p className="mt-3 font-display text-xl font-extrabold text-accent sm:text-2xl">
                  {hms.tagline}
                </p>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted2 sm:text-lg">
                  {hms.summary}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
                  {[
                    { label: "Offline ready", icon: WifiOff },
                    { label: "Hospital-first", icon: HeartPulse },
                    { label: "Simple rollout", icon: BadgeCheck },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-[6px] border border-line bg-white/85 px-3 py-2.5 text-xs font-bold text-navy shadow-sm"
                      >
                        <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {hms.modules.map((module) => (
                    <li
                      key={module.name}
                      className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm"
                    >
                      {module.name}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="mt-8 inline-flex items-center gap-4 rounded-[8px] border border-accent/20 bg-white p-4 shadow-[0_18px_50px_-28px_rgba(8,27,45,0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                    <IndianRupee className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="font-display text-3xl font-extrabold text-navy-deep">
                      {hms.price}
                    </span>
                    <span className="ml-3 text-sm font-medium text-muted2">{hms.priceNote}</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <PrimaryButton to="/products/kravient-hms" className="w-full sm:w-auto">
                    Explore Kravient HMS
                  </PrimaryButton>
                  <GhostButton to="/contact" dark={false} className="w-full sm:w-auto">
                    Book a Demo
                  </GhostButton>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={150}>
                <div className="relative rounded-[8px] border border-white/80 bg-white/55 p-3 shadow-[0_34px_90px_-48px_rgba(8,27,45,0.55)] backdrop-blur-sm sm:p-4">
                  <div
                    aria-hidden="true"
                    className="absolute -left-4 -top-4 hidden h-full w-full rounded-[8px] border border-navy/10 sm:block"
                  />
                  <div className="absolute -right-5 top-8 z-10 hidden rounded-full border border-offline/20 bg-white px-4 py-2 text-xs font-bold text-offline shadow-lg lg:flex lg:items-center lg:gap-2">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    Offline-ready
                  </div>
                  <BrowserMockup className="relative overflow-hidden rounded-[6px]" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="bg-navy pb-20 pt-12 sm:pb-24 sm:pt-16">
          <div className="container-site">
            <ScrollReveal className="mx-auto max-w-4xl text-center">
              <div className="flex justify-center">
                <SectionEyebrow tone="dark">Offline-first technology</SectionEyebrow>
              </div>
              <h2 className="mx-auto mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl">
                Work offline.
                <br />
                <span className="text-white/50">Sync automatically.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-white/65 sm:text-lg">
                Kravient keeps core operations running without internet and updates your cloud data
                when the connection returns.
              </p>
            </ScrollReveal>
            <div className="mt-12 sm:mt-14">
              <FlowDiagram />
            </div>
          </div>
        </section>

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <ScrollReveal>
                <SectionEyebrow>Why Kravient</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-5xl">
                  Built differently, on purpose.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <ArrowLink to="/why-kravient">More about why Kravient</ArrowLink>
              </ScrollReveal>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <ScrollReveal key={benefit.title} delay={index * 80}>
                    <div className="group h-full border border-line bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_40px_-24px_rgba(8,27,45,0.25)]">
                      <span className="flex h-11 w-11 items-center justify-center border border-line bg-cream transition-colors duration-300 group-hover:border-accent">
                        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted2">
                        {benefit.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-16 sm:py-20">
          <div className="container-site grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <ScrollReveal>
              <SectionEyebrow>Platform vision</SectionEyebrow>
              <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-deep sm:text-5xl">
                One platform for everyday Bharat businesses.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted2 sm:text-lg">
                Kravient HMS is live today. More business tools are planned on the same simple,
                offline-first foundation.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
              {platformTiles.map((tile, index) => (
                <ScrollReveal key={tile.name} delay={Math.min(index * 50, 300)}>
                  <Link
                    to="/why-kravient"
                    className="group flex min-h-[68px] items-center rounded-[8px] border border-line bg-fog px-3 py-3 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white hover:shadow-[0_16px_36px_-28px_rgba(8,27,45,0.35)] sm:min-h-[72px] sm:px-5 sm:py-4"
                  >
                    <span className="h-6 w-0.5 shrink-0 rounded-full bg-accent/0 transition-colors duration-200 group-hover:bg-accent sm:h-7" />
                    <span className="ml-2 font-display text-[13px] font-semibold leading-tight text-navy-deep transition-colors duration-200 group-hover:text-accent sm:ml-3 sm:text-[17px]">
                      {tile.name}
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-fog py-12 sm:py-16">
          <div className="container-site">
            <ScrollReveal>
              <SectionEyebrow>Industries</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-5xl">
                Built around real industries.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <IndustriesCarousel />
            </ScrollReveal>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[560px]">
              <img
                src={aboutHero}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-deep/36" aria-hidden="true" />
            </div>
            <div className="flex items-center px-5 py-20 sm:px-12 sm:py-28 lg:px-16 xl:px-24">
              <ScrollReveal>
                <SectionEyebrow>Built by Praavi Group</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-deep sm:text-5xl">
                  Four years of engineering experience.
                  <br />
                  <span className="text-muted2">Now built into products.</span>
                </h2>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-muted2 sm:text-lg">
                  Praavi Group began as Praavi Consultants, building software for businesses that
                  needed reliable technology. Kravient brings the same discipline into scalable
                  products businesses can start using immediately.
                </p>
                <div className="mt-9">
                  <ArrowLink to="/about">About Praavi Group</ArrowLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="bg-cream py-24 sm:py-32">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <ScrollReveal>
                <SectionEyebrow>Case studies</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-5xl">
                  Real problems.
                  <br />
                  Real solutions.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <ArrowLink to="/case-studies">View case studies</ArrowLink>
              </ScrollReveal>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {caseStudies.map((study, index) => (
                <article key={study.slug} className="border border-line bg-white p-7">
                  <span className="font-display text-sm font-bold tracking-[0.3em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-12 font-display text-2xl font-bold text-navy-deep">
                    {study.projectName}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted2">
                    {study.shortDescription}
                  </p>
                </article>
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


