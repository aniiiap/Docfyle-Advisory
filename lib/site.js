export const siteConfig = {
  name: "Docfyle Advisory",
  legalName: "Docfyle Advisory",
  description:
    "Virtual bookkeeping, accounting, tax, and CFO services for scaling businesses across the USA and globally.",
  /** Longer blurb for footer */
  footerTagline:
    "Beyond Numbers, Across Borders. Providing specialized virtual bookkeeping, accounting, and CFO services for businesses of all sizes across the globe.",
  domain: "https://docfyleadvisory.com",
  calendlyUrl: "https://calendly.com/docfyleadvisory-info/30min",
  email: "info@docfyleadvisory.com",
  phone: "+1 (408) 638-2237",
  phoneLabel: "Phone (US)",
  phones: [
    { label: "Phone (US)", number: "+1 (408) 638-2237" },
    { label: "Phone (IND)", number: "+91 9351060628" },
  ],
  /** Short line for compact UI */
  address: "United States & India",
  offices: [
    {
      label: "United States",
      lines: ["6203 San Ignacio Avenue Suite 110", "San Jose, CA 95119"],
    },
    {
      label: "India",
      lines: [
        "Plot No. 61,62, Navkar Trade Centre",
        "Opposite Mirchi Mandi, Near Gokul Dham",
        "Bhilwara, Rajasthan, 311001"
      ],
    },
  ],
  socials: {
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/company/docfyle-advisory",
    x: "https://x.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries We Support", href: "/industries-we-support" },
    { label: "Blog", href: "/blog" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function absoluteUrl(path = "") {
  return `${siteConfig.domain}${path}`;
}

export function pageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-default.svg",
}) {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Bookkeeping & Accounting Services`;
  const metaDescription = description || siteConfig.description;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}
