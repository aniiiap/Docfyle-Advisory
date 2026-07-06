import { JsonLd } from "@/components/json-ld";
import {
  ServicesCtaSection,
  ServicesOfferSection,
  ServicesPageHero,
  ServicesWhatWeDoSection,
} from "@/sections/services-page-sections";
import { absoluteUrl, pageMetadata } from "@/lib/site";
import { pageServiceSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Virtual Bookkeeping, Accounting & CFO Services",
  path: "/services",
  description:
    "Docfyle Advisory offers virtual bookkeeping, accounting, tax preparation, payroll, virtual CFO services, and financial reporting for businesses worldwide. QuickBooks, Xero, AppFolio, Buildium & CINC.",
  keywords: [
    "virtual bookkeeping services",
    "outsourced accounting services",
    "virtual CFO services",
    "remote bookkeeping global",
    "QuickBooks bookkeeping services",
    "AppFolio bookkeeping",
    "Xero accounting services",
    "tax preparation accounting",
    "payroll compliance services",
    "financial reporting and analysis",
    "accounts payable receivable services",
    "bookkeeping services USA UK Australia",
    "docfyle advisory services",
  ],
});

export default function ServicesPage() {
  const pageUrl = absoluteUrl("/services");

  return (
    <>
      <JsonLd
        data={pageServiceSchema({
          path: "/services",
          description:
            "Virtual bookkeeping, accounting, tax, payroll, virtual CFO, and financial reporting for businesses worldwide.",
        })}
      />
      <ServicesPageHero />
      <ServicesWhatWeDoSection />
      <ServicesOfferSection />
      <ServicesCtaSection />
    </>
  );
}
