import {
  CTASection,
  HeroSection,
  IndustriesSection,
  MissionVisionSection,
  ServicesSection,
  SoftwareSection,
  StatsSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/sections/home-sections";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Virtual Bookkeeping & Accounting Services for USA Businesses",
  path: "/",
  description:
    "Docfyle Advisory provides expert virtual bookkeeping, accounting, tax preparation, and CFO services for US businesses. Trusted by startups, property managers, and eCommerce brands. Get started today.",
  keywords: [
    "virtual bookkeeping services USA",
    "outsourced accounting services",
    "online bookkeeping services for small business",
    "virtual CFO services",
    "bookkeeping and accounting firm",
    "remote bookkeeping services",
    "QuickBooks bookkeeping services",
    "Xero accounting services",
    "tax preparation services USA",
    "Docfyle Advisory",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <StatsSection />
      <SoftwareSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
