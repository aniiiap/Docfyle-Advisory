import { JsonLd } from "@/components/json-ld";
import {
  IndustriesCtaSection,
  IndustriesEmpowerSection,
  IndustriesExpertiseSection,
  IndustriesGridSection,
  IndustriesNicheSection,
  IndustriesPageHero,
} from "@/sections/industries-page-sections";
import { absoluteUrl, pageMetadata } from "@/lib/site";
import { pageServiceSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Industry Specific Bookkeeping Services",
  path: "/industries-we-support",
  description:
    "Industry-specific virtual bookkeeping and accounting for property management, eCommerce, healthcare, CPAs, and high-growth businesses. QuickBooks, AppFolio, Xero, Buildium & Shopify.",
  keywords: [
    "industry specific bookkeeping",
    "property management bookkeeping",
    "ecommerce bookkeeping services",
    "healthcare accounting services",
    "CPA bookkeeping support",
    "virtual bookkeeping global",
    "AppFolio bookkeeping",
    "QuickBooks industry accounting",
    "cash flow management services",
    "bookkeeping USA UK Australia Dubai",
    "docfyle advisory industries",
  ],
});

export default function IndustriesPage() {
  const pageUrl = absoluteUrl("/industries-we-support");

  return (
    <>
      <JsonLd
        data={pageServiceSchema({
          path: "/industries-we-support",
          description:
            "Industry-specific virtual bookkeeping and accounting for property management, eCommerce, healthcare, CPAs, and high-growth businesses.",
          serviceType: "Industry-Specific Bookkeeping and Accounting",
        })}
      />
      <IndustriesPageHero />
      <IndustriesGridSection />
      <IndustriesEmpowerSection />
      <IndustriesExpertiseSection />
      <IndustriesNicheSection />
      <IndustriesCtaSection />
    </>
  );
}
