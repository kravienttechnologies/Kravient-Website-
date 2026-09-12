import { Link } from "./AppLink";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { Logo } from "./Logo";

function MegaPanel({ openLabel }: { openLabel: string }) {
  const columns = primaryNav.find((item) => item.label === openLabel)?.mega ?? [];

  return (
    <div className="absolute inset-x-0 top-full border-y border-white/12 bg-[#344656] shadow-[0_26px_70px_-34px_rgba(0,0,0,0.72)]">
      <div className="container-site grid gap-8 py-8 lg:grid-cols-3">
        {columns.map((column) => (
          <div key={`${openLabel}-${column.title}`}>
            <p className="font-display text-xs font-bold uppercase text-white/58">{column.title}</p>
            <div className="mt-4 grid gap-2">
              {column.links.map((link) => (
                <Link
                  key={`${openLabel}-${column.title}-${link.label}`}
                  to={link.to}
                  className="group border border-white/12 bg-[#405261] p-4 transition-colors duration-200 hover:border-accent/70 hover:bg-[#485b6a]"
                >
                  <span className="font-display text-sm font-bold text-white transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="mt-2 block text-xs leading-relaxed text-white/70">
                      {link.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        onMouseLeave={() => setOpen(null)}
        onKeyDown={(event) => event.key === "Escape" && setOpen(null)}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#344656] text-white"
      >
        <div className="container-site">
          <nav aria-label="Primary" className="flex h-20 items-center justify-between gap-8">
            <Logo tone="dark" className="shrink-0" />

            <ul className="hidden min-w-0 flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">
              {primaryNav.map((item) => {
                const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
                return (
                  <li key={item.label} onMouseEnter={() => item.mega && setOpen(item.label)}>
                    <Link
                      to={item.to}
                      onFocus={() => item.mega && setOpen(item.label)}
                      data-active={active}
                      className={cn(
                        "nav-link flex min-h-[44px] items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-white/78 transition-colors duration-200 hover:text-white",
                        active && "text-accent",
                      )}
                    >
                      {item.label}
                      {item.mega && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/contact"
              className="group hidden min-h-[44px] shrink-0 items-center justify-center gap-2.5 border border-white/18 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-navy-deep lg:inline-flex"
            >
              Book a Demo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </nav>
        </div>

        {open && <MegaPanel openLabel={open} />}
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-navy-deep text-white transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container-site flex h-20 items-center justify-between border-b border-white/10">
          <Logo tone="dark" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="flex h-11 w-11 items-center justify-center text-white"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto py-8">
          <ul className="divide-y divide-white/10">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex min-h-[64px] items-center justify-between font-display text-xl font-bold text-white"
                >
                  {item.label}
                  {item.mega && <ChevronDown className="h-4 w-4 text-accent" aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center bg-accent px-7 py-3 text-sm font-semibold text-navy-deep"
          >
            Book a Demo
          </Link>
        </nav>
      </div>
    </>
  );
}

