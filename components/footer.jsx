import { Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { certificationBadges } from "@/data/certifications";
import { siteConfig } from "@/lib/site";

function SocialButton({ href, label, children, className }) {
  return (
    <a
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:scale-105 hover:opacity-95 ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-700/30 bg-footer-gradient text-slate-300">
      <div className="container-base grid items-start gap-10 py-14 lg:grid-cols-3 lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <Image
            alt="Docfyle Advisory logo"
            className="h-9 w-auto brightness-0 invert"
            height={36}
            src="/Docfyle-Advisory_New (2).png"
            width={180}
          />
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400 lg:max-w-none">{siteConfig.footerTagline}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <SocialButton className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400" href={siteConfig.socials.instagram} label="Instagram">
              <Instagram className="h-5 w-5" strokeWidth={2} />
            </SocialButton>
            <SocialButton className="bg-[#0A66C2]" href={siteConfig.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" strokeWidth={2} />
            </SocialButton>
            <SocialButton className="bg-white/10 ring-1 ring-white/20" href={siteConfig.socials.x} label="X">
              <X className="h-5 w-5 text-white" strokeWidth={2} />
            </SocialButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
            {certificationBadges.map((badge) => (
              <div className="relative h-11 w-11 shrink-0 rounded-lg bg-white/95 p-1 sm:h-12 sm:w-12" key={badge.src}>
                <Image alt={badge.alt} className="object-contain" fill sizes="48px" src={badge.src} />
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-10 xl:pl-12">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand-gold">Get in Touch</p>
          <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">We&apos;re Here to Help!</h3>

          <div className="mt-6 space-y-5 text-base">
            <div className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold/90" strokeWidth={1.5} />
              <div className="space-y-3">
                {siteConfig.phones.map((p) => (
                  <div key={p.label}>
                    <p className="font-bold text-white">{p.label}</p>
                    <a className="mt-0.5 block text-slate-400 transition hover:text-white" href={`tel:${p.number.replace(/\D/g, "")}`}>
                      {p.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold/90" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-white">Email</p>
                <a className="mt-0.5 block break-all text-slate-400 transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-10 xl:pl-12">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand-gold">Our Offices</p>
          <div className="mt-6 space-y-6 text-base">
            {siteConfig.offices.map((office) => (
              <div className="flex gap-3" key={office.label}>
                <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold/90" strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-white">{office.label}</p>
                  {office.lines.map((line) => (
                    <p className="mt-1 leading-relaxed text-slate-400" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-base flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="order-2 text-center sm:order-1 sm:text-left">
          Copyright {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        </p>
        <nav className="order-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-slate-400 sm:order-2 sm:justify-end">
          <Link className="transition hover:text-brand-gold" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="transition hover:text-brand-gold" href="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>
          <Link className="transition hover:text-brand-gold" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
