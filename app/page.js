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
  title: "Virtual Bookkeeping, Accounting & CFO Services",
  path: "/",
  keywords: [
    "virtual bookkeeping services",
    "accounting and cfo services",
    "bookkeeping services usa",
    "tax compliance bookkeeping",
    "docfyle advisory",
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
