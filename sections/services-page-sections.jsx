"use client";

import {
  BarChart3,
  Calculator,
  Landmark,
  Receipt,
  TrendingUp,
  Users,
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger";
import { servicesPageFaqs, servicesPageOfferings } from "@/data/services-page";

const offeringIcons = [Calculator, TrendingUp, Receipt, BarChart3, Users, Landmark];

export function ServicesPageHero() {
  return (
    <section 
      className="relative overflow-hidden border-b border-[#e8e0d6] bg-page-hero py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: "linear-gradient(rgba(248, 250, 252, 0.65), rgba(248, 250, 252, 0.75)), url('/notebook-globe-blue-background-flat-lay.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
      }}
    >
      <div className="pointer-events-none absolute -right-16 top-6 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="container-base relative">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Our Services</p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Virtual Bookkeeping, Accounting &amp; CFO Services for Businesses Across the Globe
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-brand-stone">
            Docfyle Advisory provides specialized virtual bookkeeping, accounting, and CFO services for businesses of
            all sizes across the globe. Our expert team delivers accurate books, clean financial reports, and stress-free
            tax compliance every month. We work seamlessly with leading platforms including AppFolio, QuickBooks, Xero,
            Buildium, and CINC — adapting to your preferred tools and workflows with zero disruption to your business.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function ServicesWhatWeDoSection() {
  return (
    <SectionShell tone="light">
      <FadeIn>
        <SectionHeading
          eyebrow="What We Do Best"
          title="Virtual finance support built for global businesses"
          description="Our virtual services are designed to support businesses of all sizes — delivering accurate financial management, detailed reporting, full compliance, and strategic advisory support wherever you operate across the globe."
        />
      </FadeIn>
      <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-7">
        {servicesPageOfferings.map((item, index) => {
          const Icon = offeringIcons[index] ?? Calculator;
          return (
            <StaggerItem key={item.title}>
              <article className="card-surface group h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h2 className="mt-5 text-xl font-bold text-brand-navy">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </SectionShell>
  );
}

const platformTags = ["QuickBooks", "AppFolio", "Xero", "Buildium", "CINC"];

export function ServicesOfferSection() {
  return (
    <SectionShell>
      <FadeIn>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-700/30 bg-brand-gradient-warm px-7 py-10 shadow-glow sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(42,123,140,0.4),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-gold/20 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">What we deliver</p>
              <h2 className="mt-3 text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Bookkeeping &amp; Financial Services We Offer
              </h2>
              <div className="mt-6 hidden h-px w-16 bg-brand-orange/80 lg:block" aria-hidden />
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                At Docfyle Advisory, we specialize in virtual bookkeeping, accounting, and CFO services tailored to
                businesses of all sizes across the globe. Whether you&apos;re a startup finding your feet or an
                established company scaling fast — our expert team handles your books accurately so you can focus on
                growing your business with confidence.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-400">Platforms we work with seamlessly:</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {platformTags.map((name) => (
                  <li
                    className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm"
                    key={name}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function ServicesFaqSection() {
  return (
    <SectionShell tone="muted">
      <FadeIn>
        <SectionHeading centered eyebrow="FAQ" title="Frequently Asked Questions" />
      </FadeIn>
      <div className="mt-14">
        <FAQAccordion items={servicesPageFaqs} />
      </div>
    </SectionShell>
  );
}

export function ServicesCtaSection() {
  return (
    <SectionShell className="pb-24 sm:pb-28" tone="light">
      <CtaBanner />
    </SectionShell>
  );
}
