import { Link } from "./AppLink";

import logoImage from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <Link
      to="/"
      aria-label="Kravient home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-white transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-11 sm:w-11">
        <img src={logoImage} alt="" className="h-8 w-auto max-w-none object-contain sm:h-9" />
      </span>
      <span className="flex translate-y-[1px] flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display text-[16px] font-medium leading-[0.95] tracking-0 transition-colors duration-300 sm:text-[17px]",
            dark ? "text-white" : "text-navy-deep",
          )}
        >
          Kravient
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-medium uppercase leading-none tracking-[0.14em] transition-colors duration-300 sm:text-[9.5px]",
            dark ? "text-white/58" : "text-muted2",
          )}
        >
          Technologies
        </span>
      </span>
    </Link>
  );
}
