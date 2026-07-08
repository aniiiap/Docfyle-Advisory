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
  title: "Bookkeeping, Accounting, Tax & CFO Services | Docfyle Advisory",
  path: "/services",
  description:
    "Explore Docfyle Advisory's full range of services: virtual bookkeeping, accounting, tax preparation, payroll management, financial reporting, and virtual CFO. Serving USA businesses on QuickBooks, Xero, AppFolio & more.",
  keywords: [
    "virtual bookkeeping services",
    "outsourced accounting services USA",
    "virtual CFO services for small business",
    "tax preparation services",
    "payroll management services",
    "financial reporting services",
    "QuickBooks bookkeeping",
    "Xero accounting services",
    "AppFolio bookkeeping",
    "Buildium accounting",
    "remote accounting services",
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
