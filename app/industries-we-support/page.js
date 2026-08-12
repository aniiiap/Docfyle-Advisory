import { JsonLd } from "@/components/json-ld";
import {
  IndustriesCtaSection,
  IndustriesEmpowerSection,
  IndustriesExpertiseSection,
  IndustriesGridSection,
  IndustriesNicheSection,
  IndustriesPageHero,
  IndustriesFaqSection,
} from "@/sections/industries-page-sections";
import { absoluteUrl, pageMetadata } from "@/lib/site";
import { pageServiceSchema, faqPageSchema } from "@/lib/schema";
import { industriesPageFaqs } from "@/data/industries-page";

export const metadata = pageMetadata({
  title: "Industry-Specific Bookkeeping & Accounting Services | Docfyle Advisory",
  path: "/industries-we-support",
  description:
    "Docfyle Advisory delivers specialized bookkeeping for property management, eCommerce, healthcare, law firms, startups, and CPA firms across the USA. Industry experts on QuickBooks, AppFolio, Xero & Buildium.",
  keywords: [
    "property management bookkeeping services",
    "eCommerce bookkeeping services",
    "healthcare accounting services",
    "law firm bookkeeping",
    "CPA firm bookkeeping support",
    "startup accounting services",
    "AppFolio accounting experts",
    "Buildium bookkeeping services",
    "industry specific accounting USA",
    "virtual bookkeeping for small business",
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
      <JsonLd data={faqPageSchema(industriesPageFaqs)} />
      <IndustriesPageHero />
      <IndustriesGridSection />
      <IndustriesEmpowerSection />
      <IndustriesExpertiseSection />
      <IndustriesNicheSection />
      <IndustriesFaqSection />
      <IndustriesCtaSection />
    </>
  );
}
