import { ArrowRight, PlayCircle, Star, Target, Telescope } from "lucide-react";
import Image from "next/image";
import { AnimatedCounter } from "@/components/animated-counter";
import { FAQAccordion } from "@/components/faq-accordion";
import { PlatformCarousel } from "@/components/platform-carousel";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger";
import { faqs, industries, services, stats, testimonials } from "@/data/content";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 lg:py-20">
      <Image
        alt="Business team collaborating over financial documents and reports"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fill
        priority
        quality={88}
        sizes="100vw"
        src="/closeup-hands-business-meeting.jpg"
      />
      <div className="absolute inset-0 bg-hero-overlay bg-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/80" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand-500/35 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
      
      <div className="container-base relative z-10 w-full mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="lg:col-span-7">
            <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
              Beyond Numbers, Across Borders
            </p>
            <h1 className="text-balance text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] xl:leading-[1.2]">
              Virtual Bookkeeping, Accounting & CFO Services for Growing Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Docfyle Advisory provides specialized virtual bookkeeping, accounting, tax, and CFO
              services for growing businesses across the globe. Our expert team delivers
              accurate financial reporting, tax compliance, and stress-free bookkeeping so you can focus
              on growth with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.calendlyUrl}>
                Schedule Your Call <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button href="/contact" variant="accent">
                <PlayCircle className="mr-2" size={16} />
                Contact Us
              </Button>
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] max-h-[min(460px,65vh)] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl ring-1 ring-white/10 sm:aspect-[3/4] lg:max-h-[500px]">
                <Image
                  alt="Professional advisor focused on your business finances"
                  className="object-cover object-[center_20%]"
                  fill
                  priority
                  quality={88}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  src="/young-beautiful-businesswoman-sitting-workplace-office.webp"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  return (
    <SectionShell id="mission-vision" tone="brand">
      <FadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Mission & Vision</p>
          <h2 className="mt-4 text-balance text-2xl font-extrabold leading-snug tracking-tight text-brand-navy sm:text-3xl lg:text-[2rem]">
            Empower your Financial Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            To deliver transparent &amp; compliant financial records which empower our clients&apos; sustainable growth.
          </p>
        </div>
      </FadeIn>
      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <FadeIn delay={0.05}>
          <article className="card-surface relative h-full overflow-hidden p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-50" />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <Target size={22} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Mission Statement</h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  At Docfyle Advisory, our mission is to make business finances transparent, accurate, and stress-free.
                  Through smart tools, proven processes, and dedicated expert support, we help businesses of every size stay
                  organized, eliminate costly errors, and remain fully tax-compliant — so they can make confident financial
                  decisions and scale without financial stress.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article className="card-surface relative h-full overflow-hidden p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sand" />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-white text-brand-600 shadow-soft">
                <Telescope size={22} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Vision Statement</h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  To be the most trusted virtual bookkeeping and financial services partner for businesses across the globe
                  — empowering every client with financial clarity, confidence, and the freedom to grow without limits.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </SectionShell>
  );
}

export function ServicesSection() {
  return (
    <SectionShell id="services" tone="light">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
          Core Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Modular accounting support that scales with your business stage and complexity.
        </p>
      </div>
      <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-2 md:gap-7">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <article className="card-surface group h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <service.icon className="text-brand-600 transition group-hover:scale-110" size={20} />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </SectionShell>
  );
}

export function WhyChooseUsSection() {
  return (
    <SectionShell id="why-choose-us" tone="brand">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A strategic finance partner, not just a bookkeeping vendor"
          description="We combine rigorous processes, clear communication, and decision-ready reporting — with industry expertise, secure workflows, and dedicated team support."
        />
        <div className="space-y-5">
          {[
            "Dedicated account leadership and clear monthly deadlines",
            "Transparent workflows with documented controls",
            "Data security standards and NDA-backed confidentiality",
            "Scalable support as portfolio or transaction volume grows",
          ].map((point) => (
            <div className="card-surface flex items-center gap-3 p-4 transition hover:-translate-y-0.5" key={point}>
              <Star className="text-brand-600" size={18} />
              <p className="text-slate-700">{point}</p>
            </div>
          ))}
          <Button className="mt-2" href="/why-choose-us" variant="secondary">
            Explore why clients choose us <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}

export function IndustriesSection() {
  return (
    <SectionShell id="industries" tone="muted">
      <SectionHeading
        centered
        eyebrow="Industries We Support"
        title="Focused expertise across high-accountability sectors"
        description="We tailor chart of accounts, controls, and reporting to your operating model."
      />
      <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {industries.map((industry) => (
          <StaggerItem key={industry.title}>
            <div className="card-surface flex min-h-32 flex-col items-center justify-center gap-3 p-4 text-center transition duration-300 hover:-translate-y-1">
              <industry.icon className="text-brand-600" size={20} />
              <p className="font-semibold text-slate-800">{industry.title}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </SectionShell>
  );
}

export function StatsSection() {
  return (
    <SectionShell tone="light">
      <div className="overflow-hidden rounded-[1.75rem] bg-brand-navy px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <SectionHeading centered eyebrow="By the Numbers" inverted title="Reliable delivery at scale" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} {...stat} />
        ))}
      </div>
      </div>
    </SectionShell>
  );
}

export function SoftwareSection() {
  return (
    <SectionShell>
      <SectionHeading
        centered
        eyebrow="Platforms"
        title="Seamless support across your accounting stack"
        description="We integrate with the tools you already use—browse with the arrows or let the row advance automatically."
      />
      <PlatformCarousel className="mt-14" />
    </SectionShell>
  );
}

export function TestimonialsSection() {
  return (
    <SectionShell tone="light">
      <SectionHeading
        centered
        eyebrow="Testimonials"
        title="What clients say about working with Docfyle"
      />
      <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
        {testimonials.map((item) => (
          <StaggerItem key={item.name}>
            <article className="card-surface p-6 transition hover:-translate-y-1">
              <p className="text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </SectionShell>
  );
}

export function FAQSection() {
  return (
    <SectionShell tone="muted">
      <SectionHeading
        centered
        eyebrow="FAQ"
        title="Everything you need to know before onboarding"
      />
      <div className="mt-14">
        <FAQAccordion items={faqs} />
      </div>
    </SectionShell>
  );
}

export function CTASection() {
  return (
    <SectionShell className="pb-24 sm:pb-28 lg:pb-32" tone="light">
      <CtaBanner />
    </SectionShell>
  );
}
