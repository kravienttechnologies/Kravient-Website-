import type { Plugin } from "vite";

const siteUrl = "https://www.kravient.com";

const pages = {
  "/": {
    title: "Kravient | Offline-First Business Software",
    description:
      "Kravient builds business software for Indian teams, including an offline-first hospital management system for clinics and small hospitals.",
  },
  "/products": {
    title: "Business Software Products | Kravient",
    description:
      "Explore Kravient’s business software products, including Kravient HMS for patient registration, hospital billing, pharmacy and lab operations.",
  },
  "/products/kravient-hms": {
    title: "Offline Hospital Management Software | Kravient HMS",
    description:
      "Manage OPD, IPD, billing, pharmacy and lab workflows with Kravient HMS, an offline-first hospital management system for small hospitals and clinics.",
  },
  "/solutions": {
    title: "Industry Software Solutions | Kravient",
    description:
      "Explore how Kravient approaches everyday software needs across healthcare, retail, education, manufacturing, hospitality and agriculture.",
  },
  "/case-studies": {
    title: "Software Development Case Studies | Kravient",
    description:
      "See how Kravient designs and builds software around everyday operations, starting with Digital Aadate’s market-management platform.",
  },
  "/case-studies/digital-aadate": {
    title: "Digital Aadate Case Study | Kravient",
    description:
      "See how Kravient built a responsive market-management platform for Digital Aadate to handle member registration, KYC, notices and daily market prices.",
  },
  "/why-kravient": {
    title: "Why Kravient | Software Built for Indian Teams",
    description:
      "Learn how Kravient designs software for Indian businesses around unreliable internet, straightforward workflows and simple pricing.",
  },
  "/about": {
    title: "About Kravient | Business Software Built in India",
    description:
      "Meet Kravient and learn how the team builds dependable software around the daily operations of healthcare and other businesses in India.",
  },
  "/contact": {
    title: "Contact Kravient | Request a Software Demo",
    description:
      "Contact Kravient to request a Kravient HMS demo or tell the team about your business software requirements.",
  },
};

const metadataBlock = /<!-- page metadata -->[\s\S]*?<!-- end page metadata -->/;

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
}

export function pageMetadata(): Plugin {
  return {
    name: "kravient-page-metadata",
    apply: "build",
    enforce: "post",
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        const index = bundle["index.html"];
        if (index?.type !== "asset" || typeof index.source !== "string") {
          this.error("The Vite build did not produce index.html.");
        }

        const template = index.source;
        if (!metadataBlock.test(template)) {
          this.error("index.html is missing the page metadata block.");
        }

        for (const [path, page] of Object.entries(pages)) {
          const title = escapeHtml(page.title);
          const description = escapeHtml(page.description);
          const url = siteUrl + path;
          const tags = [
            `<title>${title}</title>`,
            `<meta name="description" content="${description}" />`,
            `<link rel="canonical" href="${url}" />`,
            `<meta property="og:title" content="${title}" />`,
            `<meta property="og:description" content="${description}" />`,
            `<meta property="og:url" content="${url}" />`,
          ];
          const html = template.replace(metadataBlock, () => tags.join("\n    "));
          if (path === "/") {
            index.source = html;
          } else {
            this.emitFile({ type: "asset", fileName: `${path.slice(1)}.html`, source: html });
          }
        }

        this.emitFile({
          type: "asset",
          fileName: "404.html",
          source: template.replace(
            metadataBlock,
            '<title>Page Not Found | Kravient</title>\n    <meta name="robots" content="noindex" />',
          ),
        });
      },
    },
  };
}
