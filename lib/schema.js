import { absoluteUrl, siteConfig } from "@/lib/site";

const AREAS_SERVED = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "India" },
];

const SERVICE_TYPES = [
  "Virtual Bookkeeping",
  "Accounting",
  "Tax Preparation",
  "Virtual CFO",
  "Payroll",
  "Financial Reporting",
  "Accounts Payable",
  "Accounts Receivable",
];

function organizationId() {
  return `${siteConfig.domain}/#organization`;
}

function websiteId() {
  return `${siteConfig.domain}/#website`;
}

function parseUsAddress(lines) {
  const last = lines[lines.length - 1] ?? "";
  const cityStateZip = last.match(/^(.+),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/);
  return {
    streetAddress: lines.slice(0, -1).join(", ") || lines[0],
    addressLocality: cityStateZip?.[1]?.trim() ?? "San Jose",
    addressRegion: cityStateZip?.[2] ?? "CA",
    postalCode: cityStateZip?.[3] ?? "95119",
    addressCountry: "US",
  };
}

function parseIndiaAddress(lines) {
  const last = lines[lines.length - 1] ?? "";
  const match = last.match(/^(.+),\s*(\d{6})$/);
  return {
    streetAddress: lines.slice(0, -1).join(", ") || lines[0],
    addressLocality: match?.[1]?.split(",")[0]?.trim() ?? "Bhilwara",
    addressRegion: "Rajasthan",
    postalCode: match?.[2] ?? "311001",
    addressCountry: "IN",
  };
}

export function localBusinessNodes() {
  return siteConfig.offices.map((office) => {
    const parsed =
      office.label === "United States" ? parseUsAddress(office.lines) : parseIndiaAddress(office.lines);
    return {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.domain}/#office-${office.label.toLowerCase().replace(/\s+/g, "-")}`,
      name: `${siteConfig.name} — ${office.label}`,
      parentOrganization: { "@id": organizationId() },
      address: { "@type": "PostalAddress", ...parsed },
      email: siteConfig.email,
      telephone: siteConfig.phone,
      url: siteConfig.domain,
    };
  });
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId(),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: absoluteUrl("/Docfyle-Advisory_New (2).png"),
    image: absoluteUrl("/og-default.svg"),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.socials).filter((url) => url && !url.endsWith("instagram.com") && !url.endsWith("x.com")),
    areaServed: AREAS_SERVED,
    knowsAbout: [
      "Virtual bookkeeping",
      "Property management accounting",
      "QuickBooks",
      "Xero",
      "AppFolio",
      "Buildium",
      "Tax compliance",
      "Virtual CFO services",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    publisher: { "@id": organizationId() },
    inLanguage: "en-US",
  };
}

export function professionalServiceSchema(overrides = {}) {
  return {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.domain}/#professional-service`,
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    provider: { "@id": organizationId() },
    areaServed: AREAS_SERVED,
    serviceType: SERVICE_TYPES,
    ...overrides,
  };
}

/** Sitewide @graph for layout (Organization, WebSite, ProfessionalService, offices). */
export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      professionalServiceSchema(),
      ...localBusinessNodes(),
    ],
  };
}

export function faqPageSchema(items, pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function pageServiceSchema({ path, description, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: absoluteUrl(path),
    description: description ?? siteConfig.description,
    areaServed: AREAS_SERVED,
    serviceType: serviceType ?? SERVICE_TYPES,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    provider: { "@id": organizationId() },
  };
}

export function combineSchemas(...schemas) {
  const nodes = schemas.flatMap((schema) => {
    if (schema["@graph"]) return schema["@graph"];
    if (schema["@context"]) {
      const { "@context": _, ...rest } = schema;
      return [rest];
    }
    return [schema];
  });

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
