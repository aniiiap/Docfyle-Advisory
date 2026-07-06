import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { ContactForm } from "@/components/contact-form";
import { faqs } from "@/data/content";
import { faqPageSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata, siteConfig } from "@/lib/site";
import { FAQSection } from "@/sections/home-sections";

export const metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact Docfyle Advisory to discuss bookkeeping, tax filing, and financial reporting needs.",
});

export default function ContactPage() {
  const pageUrl = absoluteUrl("/contact");

  return (
    <>
      <JsonLd data={faqPageSchema(faqs, pageUrl)} />
      <PageHero
        title="Contact Us"
        description="Tell us about your current bookkeeping setup and business goals. We will share a tailored next-step plan."
      />
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="card-surface bg-gradient-to-br from-brand-navy to-[#162033] p-8 text-slate-100 lg:col-span-1">
            <div>
              <h2 className="text-2xl font-semibold">Reach us directly</h2>
              <div className="mt-8 space-y-6 text-slate-200">
                {siteConfig.phones.map((p) => (
                  <div key={p.label}>
                    <p className="text-sm font-semibold text-white">{p.label}</p>
                    <a className="mt-1 block hover:text-white" href={`tel:${p.number.replace(/\D/g, "")}`}>
                      {p.number}
                    </a>
                  </div>
                ))}
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a className="mt-1 block break-all hover:text-white" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
                {siteConfig.offices.map((office) => (
                  <div key={office.label}>
                    <p className="text-sm font-semibold text-white">{office.label}</p>
                    {office.lines.map((line) => (
                      <p className="mt-1 text-sm leading-relaxed text-slate-300" key={line}>
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </SectionShell>
      <FAQSection />
    </>
  );
}
