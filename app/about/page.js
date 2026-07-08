import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Docfyle Advisory | Expert Bookkeeping & Accounting Team",
  path: "/about",
  description:
    "Docfyle Advisory is a trusted virtual bookkeeping and accounting firm serving US businesses across property management, eCommerce, healthcare, and startups. Learn about our team and mission.",
  keywords: [
    "about Docfyle Advisory",
    "bookkeeping firm USA",
    "virtual accounting company",
    "outsourced bookkeeping team",
    "accounting experts USA",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Docfyle Advisory"
        description="We are a bookkeeping and accounting partner focused on helping businesses operate with clarity and financial confidence."
      />
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card-surface p-7">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-slate-600">
              Deliver reliable bookkeeping, practical reporting, and proactive support that helps
              founders and operators make better decisions.
            </p>
          </article>
          <article className="card-surface p-7">
            <h2 className="text-2xl font-semibold">How We Work</h2>
            <p className="mt-4 text-slate-600">
              We combine standardized controls, dedicated account ownership, and modern cloud tools
              to keep your books accurate and your reporting consistent.
            </p>
          </article>
        </div>
      </SectionShell>
    </>
  );
}
