import { Link } from "./AppLink";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ---------------- Shell ---------------- */

export function Shell({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("shell", className)}>{children}</div>;
}

/* ---------------- Eyebrow ---------------- */

export function SectionEyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "t-eyebrow flex items-center gap-3",
        tone === "dark" ? "text-on-dark-muted" : "text-muted-foreground",
        className,
      )}
    >
      <span className="h-px w-8 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ---------------- Scroll reveal ---------------- */

export function ScrollReveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Buttons ---------------- */

const actionVariants = cva(
  "inline-flex min-h-[48px] items-center justify-center gap-2.5 px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-accent text-navy-deep hover:bg-accent-soft",
        outline: "border border-navy/30 bg-transparent text-navy hover:border-navy hover:bg-navy/5",
        onDark:
          "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/5",
        ghost: "px-0 text-navy hover:text-accent",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", block: false },
  },
);

type ActionProps = VariantProps<typeof actionVariants> & {
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
};

export function ActionLink({
  to,
  children,
  variant,
  block,
  className,
  withArrow = true,
}: ActionProps & { to: string }) {
  return (
    <Link to={to} className={cn("group", actionVariants({ variant, block }), className)}>
      {children}
      {withArrow && <ArrowRight className="arrow-move size-4 shrink-0" aria-hidden="true" />}
    </Link>
  );
}

export function ActionButton({
  children,
  variant,
  block,
  className,
  withArrow = true,
  type = "button",
  ...rest
}: ActionProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn("group", actionVariants({ variant, block }), className)}
      {...rest}
    >
      {children}
      {withArrow && <ArrowRight className="arrow-move size-4 shrink-0" aria-hidden="true" />}
    </button>
  );
}

export function ArrowLink({
  to,
  children,
  tone = "light",
  className,
}: {
  to: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-accent",
        tone === "dark" ? "text-white" : "text-navy",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight className="arrow-move size-4 text-accent" aria-hidden="true" />
    </Link>
  );
}

/* ---------------- Status pill ---------------- */

export function StatusPill({
  status,
  className,
}: {
  status: "Live" | "Planned" | "Future Platform";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em]",
        status === "Live"
          ? "border-success/35 text-success"
          : status === "Planned"
            ? "border-hairline text-muted-foreground"
            : "border-hairline text-muted-foreground/80",
        className,
      )}
    >
      {status === "Live" && (
        <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
      )}
      {status}
    </span>
  );
}

