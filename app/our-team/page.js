import { Linkedin } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { leaders, teamMembers, teamPageContent } from "@/data/our-team-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our Team",
  path: "/our-team",
  description:
    "Meet the Docfyle Advisory leadership team and finance professionals supporting bookkeeping, accounting, and reporting for growing businesses.",
});

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function OurTeamPage() {
  return (
    <>
      <PageHero title={teamPageContent.hero.title} description={teamPageContent.hero.description} />

      <SectionShell className="py-9 sm:py-10 lg:py-11" tone="light">
        <SectionHeading
          description={teamPageContent.leadersSection.description}
          eyebrow={teamPageContent.leadersSection.eyebrow}
          title={teamPageContent.leadersSection.title}
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {leaders.map((leader) => (
            <article
              className="group overflow-hidden rounded-3xl border border-brand-200/90 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
              key={leader.id}
            >
              <div className="p-4 pb-0 sm:p-5 sm:pb-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-50">
                  {leader.image ? (
                    <Image
                      alt={`${leader.name} profile`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      src={leader.image}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-brand-gradient text-4xl font-bold text-white">
                      {initials(leader.name)}
                    </div>
                  )}
                  <a
                    aria-label={`${leader.name} LinkedIn profile`}
                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#0A66C2] shadow-soft transition hover:scale-105"
                    href={leader.linkedin || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" strokeWidth={2} />
                  </a>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                  Leadership
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-brand-navy">{leader.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-600 sm:text-base">{leader.role}</p>
                {leader.bio ? (
                  <p className="mt-3 text-sm leading-relaxed text-brand-stone sm:text-base">{leader.bio}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="overflow-hidden bg-[#F8FAFC] py-12 sm:py-14 lg:py-16">
        <div className="relative">
          <div className="pointer-events-none absolute -top-6 right-0 h-28 w-28 rounded-full border border-slate-200/80" />
          <div className="pointer-events-none absolute -left-8 top-20 h-px w-32 bg-slate-200/90" />
          <div className="pointer-events-none absolute bottom-8 right-10 h-px w-20 bg-slate-200/80" />

          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {teamPageContent.membersSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.6rem]">
                {teamPageContent.membersSection.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
                {teamPageContent.membersSection.description}
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {teamMembers.map((member, index) => (
              <FadeIn delay={index * 0.08} key={member.id}>
                <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-24px_rgba(15,23,42,0.4)]">
                  <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-64">
                    {member.image ? (
                      <Image
                        alt={`${member.name} profile`}
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        src={member.image}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-200 text-3xl font-bold text-slate-500">
                        {initials(member.name)}
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-600">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] line-clamp-3">{member.expertise}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-10 pt-2 sm:pb-12 sm:pt-3 lg:pb-14">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-navy px-8 py-12 shadow-[0_20px_60px_-15px_rgba(14,29,58,0.5)] sm:px-12 sm:py-16">
          {/* Background glowing effects */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-gold/15 blur-[80px]" />
          
          <div className="relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Join Team Docfyle
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                We are always open to exceptional talent.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                As we grow, we continue to expand our team with professionals who care about detail,
                reliability, and client success. Reach out if you want to build meaningful finance
                systems with us.
              </p>
            </div>
            <div className="shrink-0 lg:ml-auto">
              <Button className="h-14 px-8 text-base shadow-glow transition duration-300 hover:scale-105 hover:shadow-glow-lg" href="/contact" variant="inverse">
                Connect With Our Team
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
