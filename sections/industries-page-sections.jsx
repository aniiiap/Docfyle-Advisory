"use client";

import {
  ArrowRight,
  Building2,
  HeartPulse,
  LineChart,
  Rocket,
  ShoppingCart,
  Users,
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger";
import { pageHeroCompact } from "@/components/page-hero-compact";
import { industriesPageFaqs, industriesWeSupport } from "@/data/industries-page";
import { siteConfig } from "@/lib/site";

const industryIcons = [Building2, LineChart, Users, Rocket, ShoppingCart, HeartPulse];

export function IndustriesPageHero() {
  return (
    <section 
      className="relative overflow-hidden border-b border-[#e8e0d6] bg-page-hero"
      style={{
        backgroundImage: "linear-gradient(rgba(248, 250, 252, 0.4), rgba(248, 250, 252, 0.55)), url('/businessman-standing-roof-with-digital-map_670147-38177.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute -right-16 top-6 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className={`container-base relative ${pageHeroCompact.section}`}>
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Industries We Support</p>
          <h1 className={`mt-3 max-w-4xl text-balance text-brand-navy ${pageHeroCompact.title}`}>
            Industry Specific Bookkeeping Services Across the Globe
          </h1>
          <p className={`${pageHeroCompact.description} max-w-4xl text-brand-stone`}>
            At Docfyle Advisory, we provide specialized virtual bookkeeping, accounting, and CFO services tailored to
            the unique financial needs of every industry. Our expert team works directly inside QuickBooks, AppFolio,
            Buildium, Xero, and more — delivering accurate books, full compliance, and stress-free financial management
            for businesses across the USA, UK, Australia, Dubai, and many more.
          </p>
          <div className={pageHeroCompact.cta}>
            <Button className="px-6 py-2.5 text-sm" href={siteConfig.calendlyUrl}>
              Get Free Consultation <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function IndustriesGridSection() {
  return (
    <SectionShell tone="light">
      <FadeIn>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Industries We Support
          </p>
          <h2 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
            Customized bookkeeping solutions that streamline operations and drive smarter financial decisions
          </h2>
        </div>
      </FadeIn>
      <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-7">
        {industriesWeSupport.map((item, index) => {
          const Icon = industryIcons[index] ?? Building2;
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

export function IndustriesEmpowerSection() {
  return (
    <SectionShell>
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-8 py-14 shadow-2xl sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" aria-hidden />
          
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Empowering businesses with smarter bookkeeping
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                From startups finding their footing to established enterprises scaling globally — our flexible workflows and industry-specific processes ensure compliance, clarity, and sustainable growth.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Seamless Integrations</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    We work flawlessly within QuickBooks, AppFolio, Xero, Buildium, and Shopify to deliver accurate reporting.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                  <Rocket size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Dedicated Support</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    With expert support and competitive pricing, we help you stay on top of your finances while you focus on scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function IndustriesExpertiseSection() {
  return (
    <SectionShell tone="light">
      <FadeIn>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Discover Our Expertise Across Diverse Industries
              </h2>
              <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-gold" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-slate-600">
                At Docfyle Advisory, we provide services to businesses across a wide range of industries globally. Our team
                is proficient in industry-specific software and workflows — ensuring seamless integration with your existing
                systems. We pride ourselves on adapting to the unique financial needs of every client, delivering exceptional
                accuracy, compliance, and value at every step.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function IndustriesNicheSection() {
  return (
    <SectionShell tone="muted">
      <FadeIn>
        <div className="card-surface mx-auto max-w-3xl border-brand-100/80 bg-gradient-to-br from-white to-brand-50/40 p-8 text-center sm:p-10">
          <h2 className="text-xl font-extrabold text-brand-navy sm:text-2xl">Need Something More Niche?</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            We work with a wide range of businesses beyond these verticals. If your industry isn&apos;t listed here,
            there&apos;s a good chance we&apos;ve still got you covered.
          </p>
          <div className="mt-7">
            <Button href={siteConfig.calendlyUrl}>
              Get Free Consultation <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function IndustriesFaqSection() {
  return (
    <SectionShell tone="light">
      <FadeIn>
        <SectionHeading
          centered
          eyebrow="Got Questions? We've Got Answers"
          title="Everything you need to know about our services, pricing, process, and more"
        />
      </FadeIn>
      <div className="mt-14">
        <FAQAccordion items={industriesPageFaqs} />
      </div>
    </SectionShell>
  );
}

export function IndustriesCtaSection() {
  return (
    <SectionShell className="pb-24 sm:pb-28" tone="light">
      <CtaBanner
        description="Schedule a free consultation and get industry-specific bookkeeping support tailored to how your business operates."
        primaryLabel="Get Free Consultation"
      />
    </SectionShell>
  );
}
