/** Shared blog cover image paths and alt text */
export const blogCovers = {
  "bookkeeping-metrics-every-property-manager-should-track": {
    src: "/blog/property-management-metrics.svg",
    alt: "Illustration of property management financial metrics and reporting charts",
  },
  "how-clean-books-reduce-tax-season-stress": {
    src: "/blog/clean-books-tax.svg",
    alt: "Illustration of organized tax-ready bookkeeping documents",
  },
  "virtual-bookkeeping-playbook-for-real-estate-investors": {
    src: "/blog/real-estate-playbook.svg",
    alt: "Illustration of real estate portfolio and virtual bookkeeping",
  },
};

export function getBlogCover(slug) {
  return (
    blogCovers[slug] ?? {
      src: "/og-default.svg",
      alt: "Docfyle Advisory blog article",
    }
  );
}
