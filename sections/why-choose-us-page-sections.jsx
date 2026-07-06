"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Layers,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger";
import {
  challengesSupport,
  featureComparison,
  whatSetsUsApart,
  whyChooseUsCta,
  whyChooseUsHero,
} from "@/data/why-choose-us-page";
import { pageHeroCompact } from "@/components/page-hero-compact";
import { siteConfig } from "@/lib/site";

const apartIcons = [Briefcase, Layers, ShieldCheck, Users, Wrench, BarChart3];

export function WhyChooseUsPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-700/30 bg-brand-gradient">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-brand-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl"
      />
      <div className={`container-base relative ${pageHeroCompact.section}`}>
        <div className={pageHeroCompact.grid}>
          <FadeIn>
            <h1 className={`max-w-3xl text-white ${pageHeroCompact.title}`}>
              {whyChooseUsHero.title}
            </h1>
            <div aria-hidden className="mt-4 flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" key={i} />
              ))}
              <span className="ml-1 h-0.5 w-16 bg-white/70" />
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-[0.9375rem] sm:leading-[1.8]">
              {whyChooseUsHero.description}
            </p>
            <div className={pageHeroCompact.cta}>
              <Button className="rounded-full px-7 py-2.5 text-sm uppercase tracking-wide" href={siteConfig.calendlyUrl}>
                {whyChooseUsHero.ctaLabel}
              </Button>
            </div>
          </FadeIn>

          <FadeIn className="flex justify-center lg:justify-start lg:pl-10 xl:pl-20" delay={0.1}>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full max-w-[280px] sm:max-w-xs lg:mr-0 lg:max-w-md"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            >
              <Image
                alt={whyChooseUsHero.imageAlt}
                className="h-auto w-full object-contain object-center lg:object-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                height={400}
                priority
                sizes="(max-width: 1024px) 72vw, 360px"
                src={whyChooseUsHero.image}
                width={480}
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function WhatSetsUsApartSection() {
  return (
    <SectionShell tone="muted">
      <FadeIn>
        <SectionHeading centered eyebrow={whatSetsUsApart.eyebrow} title={whatSetsUsApart.title} />
      </FadeIn>
      <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {whatSetsUsApart.items.map((item, index) => {
          const Icon = apartIcons[index] ?? Briefcase;
          return (
            <StaggerItem key={item.title}>
              <article className="card-surface group flex h-full flex-col p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-5">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h2 className="mt-3 text-base font-bold text-brand-navy sm:text-[1.05rem]">{item.title}</h2>
                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-brand-stone sm:text-[0.8125rem] sm:leading-[1.65]">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </SectionShell>
  );
}

export function FeaturesComparisonSection() {
  return (
    <SectionShell tone="light">
      <FadeIn>
        <div className="overflow-hidden rounded-[1.75rem] bg-brand-gradient shadow-glow">
          <div className="grid lg:grid-cols-12">
            <div className="relative border-b border-white/10 p-8 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-8 top-0 h-32 w-32 rounded-full bg-brand-gold/20 blur-2xl"
              />
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                The Docfyle difference
              </p>
              <h2 className="relative mt-4 text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                {featureComparison.title}
              </h2>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Everything below is standard with Docfyle — not add-ons or upsells.
              </p>
              <div className="relative mt-8 flex items-end gap-3">
                <span className="text-5xl font-extrabold leading-none text-brand-gold sm:text-6xl">
                  {featureComparison.rows.length}
                </span>
                <p className="pb-1 text-sm font-semibold text-white/90">capabilities included</p>
              </div>
            </div>

            <ul className="grid gap-2 bg-brand-cream/95 p-5 sm:grid-cols-2 sm:gap-3 sm:p-7 lg:col-span-8 lg:p-8">
              {featureComparison.rows.map((feature, index) => (
                <li key={feature}>
                  <article className="group flex h-full items-center gap-3 rounded-xl border border-[#e8e0d6]/80 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:border-brand-200 hover:shadow-card sm:px-5 sm:py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white shadow-sm transition group-hover:scale-105">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="flex-1 text-sm font-semibold leading-snug text-brand-navy">{feature}</h3>
                    <CheckCircle2
                      aria-hidden
                      className="shrink-0 text-emerald-600 opacity-90"
                      size={20}
                      strokeWidth={2.25}
                    />
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

export function ChallengesSupportSection() {
  return (
    <SectionShell tone="muted">
      <FadeIn>
        <SectionHeading
          centered
          description="Every pain point on the left maps to a clear Docfyle solution on the right."
          eyebrow="Your path forward"
          title="From challenge to confident support"
        />
      </FadeIn>

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-rose-100/40 px-4 py-3.5 text-center ring-1 ring-rose-200/60 sm:py-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-rose-800 sm:text-sm">
              {challengesSupport.challengesTitle}
            </h3>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-500/15 to-brand-100/50 px-4 py-3.5 text-center ring-1 ring-brand-200/70 sm:py-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-800 sm:text-sm">
              {challengesSupport.supportTitle}
            </h3>
          </div>
        </div>

        <ul className="relative mt-8 space-y-5 sm:space-y-6">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-rose-200 via-brand-300 to-brand-500 lg:block"
          />

          {challengesSupport.challenges.map((challenge, index) => {
            const support = challengesSupport.support[index];
            const step = index + 1;

            return (
              <FadeIn delay={index * 0.06} key={challenge}>
                <li className="relative">
                  <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
                    <article className="relative rounded-2xl border border-rose-100/80 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:p-6">
                      <span className="mb-3 inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-rose-500 px-2.5 text-xs font-bold text-white">
                        {step}
                      </span>
                      <p className="text-sm leading-relaxed text-brand-stone sm:text-[0.9375rem]">{challenge}</p>
                    </article>

                    <div className="relative z-10 hidden items-center justify-center lg:flex">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-brand-cream bg-brand-gradient text-white shadow-glow">
                        <ChevronRight size={20} strokeWidth={2.5} />
                      </span>
                    </div>

                    <article className="relative rounded-2xl border border-brand-200/80 bg-gradient-to-br from-white via-brand-50/40 to-brand-sand/30 p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:p-6 lg:text-right">
                      <span className="mb-3 inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-brand-gradient px-2.5 text-xs font-bold text-white lg:float-right lg:ml-3">
                        {step}
                      </span>
                      <p className="text-sm leading-relaxed text-brand-ink sm:text-[0.9375rem]">{support}</p>
                    </article>
                  </div>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}

export function WhyChooseUsCtaSection() {
  return (
    <SectionShell className="pb-24 sm:pb-28" tone="light">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-gradient px-6 py-12 shadow-glow sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-brand-gold/25 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
              {whyChooseUsCta.title}
            </h2>
            <div aria-hidden className="mt-4 flex items-center gap-2">
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span className="h-1 w-1 rounded-full bg-white/80" key={i} />
                ))}
              </span>
              <span className="h-px w-12 bg-white/40" />
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
              {whyChooseUsCta.description}{" "}
              <Link
                className="font-semibold text-brand-gold underline decoration-brand-gold/50 underline-offset-2 hover:text-amber-200"
                href="/contact"
              >
                {whyChooseUsCta.contactLinkLabel}
              </Link>{" "}
              {whyChooseUsCta.descriptionAfterLink}
            </p>
          </div>
          <div className="relative mt-8 shrink-0 lg:mt-0">
            <Button
              className="w-full rounded-full px-8 uppercase tracking-wide sm:w-auto"
              href={siteConfig.calendlyUrl}
              variant="inverse"
            >
              {whyChooseUsCta.primaryLabel}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
