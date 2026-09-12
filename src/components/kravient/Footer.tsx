import { Link } from "./AppLink";

import { footerColumns } from "@/data/navigation";

import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/12 bg-navy text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="container-site pb-10 pt-14 sm:pt-16">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-8 max-w-sm font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              Software built for Bharat.
              <br />
              Built to keep working.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/40">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="inline-flex min-h-[36px] items-center text-sm text-white/70 transition-colors duration-200 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kravient · A Praavi Group company</p>
          <p className="uppercase tracking-[0.24em]">Offline-first · Made in India</p>
        </div>
      </div>
    </footer>
  );
}

