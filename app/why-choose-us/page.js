import { JsonLd } from "@/components/json-ld";
import {
  ChallengesSupportSection,
  FeaturesComparisonSection,
  WhatSetsUsApartSection,
  WhyChooseUsCtaSection,
  WhyChooseUsPageHero,
} from "@/sections/why-choose-us-page-sections";
import { absoluteUrl, pageMetadata } from "@/lib/site";
import { combineSchemas, pageServiceSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Why Choose Us | Virtual Bookkeeping & Accounting",
  path: "/why-choose-us",
  description:
    "Why businesses worldwide choose Docfyle Advisory: industry expertise, end-to-end bookkeeping and CFO services, bank-level security, dedicated teams, and tool-friendly integration.",
  keywords: [
    "why choose docfyle advisory",
    "virtual bookkeeping partner",
    "outsourced accounting benefits",
    "dedicated account manager bookkeeping",
    "secure cloud bookkeeping",
    "QuickBooks AppFolio bookkeeping team",
    "bookkeeping services USA",
  ],
});

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd
        data={combineSchemas(
          pageServiceSchema({
            path: "/why-choose-us",
            description:
              "Docfyle Advisory delivers specialized virtual bookkeeping, accounting, and CFO services with industry expertise, secure workflows, and dedicated team support.",
          })
        )}
      />
      <WhyChooseUsPageHero />
      <WhatSetsUsApartSection />
      <FeaturesComparisonSection />
      <ChallengesSupportSection />
      <WhyChooseUsCtaSection />
    </>
  );
}
