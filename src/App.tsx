import { useEffect, useMemo, useState } from "react";

import { AboutPage } from "./routes/about";
import { CaseStudiesPage } from "./routes/case-studies";
import { ContactPage } from "./routes/contact";
import { Index } from "./routes/index";
import { HmsPage } from "./routes/products.kravient-hms";
import { ProductsPage } from "./routes/products";
import { SolutionsPage } from "./routes/solutions";
import { WhyKravientPage } from "./routes/why-kravient";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-ink">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy-deep">404</h1>
        <p className="mt-4 text-base text-muted2">This page does not exist.</p>
        <a
          href="/"
          className="mt-6 inline-flex min-h-[44px] items-center justify-center bg-accent px-6 text-sm font-semibold text-navy-deep"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return useMemo(() => {
    switch (pathname.replace(/\/$/, "") || "/") {
      case "/":
        return <Index />;
      case "/about":
        return <AboutPage />;
      case "/products":
        return <ProductsPage />;
      case "/products/kravient-hms":
        return <HmsPage />;
      case "/solutions":
        return <SolutionsPage />;
      case "/case-studies":
        return <CaseStudiesPage />;
      case "/contact":
        return <ContactPage />;
      case "/why-kravient":
        return <WhyKravientPage />;
      default:
        return <NotFoundPage />;
    }
  }, [pathname]);
}
