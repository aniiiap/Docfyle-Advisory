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
  title: "Why Choose Docfyle Advisory for Bookkeeping & Accounting?",
  path: "/why-choose-us",
  description:
    "Discover why 100+ US businesses trust Docfyle Advisory for bookkeeping and accounting. Dedicated experts, bank-level data security, full-service accounting, and seamless QuickBooks & Xero integration.",
  keywords: [
    "best virtual bookkeeping service USA",
    "outsourced bookkeeping benefits",
    "dedicated bookkeeper for small business",
    "secure online bookkeeping service",
    "reliable accounting firm USA",
    "QuickBooks certified bookkeeper",
    "Xero certified accountant",
    "why outsource bookkeeping",
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
