"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0d6]/90 bg-brand-cream/90 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-xl">
      <div className="container-base flex h-[4.5rem] items-center justify-between sm:h-20">
        <Link className="flex items-center gap-3" href="/">
          <Image
            alt="Docfyle Advisory logo"
            className="h-9 w-auto"
            height={36}
            priority
            src="/Docfyle-Advisory_New (2).png"
            width={180}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:gap-8 md:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={cn(
                  "group relative text-[0.9375rem] font-medium transition sm:text-base",
                  isActive ? "text-brand-navy" : "text-brand-stone hover:text-brand-navy"
                )}
                href={link.href}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button className="text-base" href="/contact">
            Book a Consultation
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-brand-stone md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[#e8e0d6] bg-brand-cream transition-all md:hidden",
          open ? "max-h-[380px]" : "max-h-0"
        )}
      >
        <div className="container-base flex flex-col gap-4 py-4">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={cn(
                  "text-base font-medium transition",
                  isActive ? "text-brand-navy" : "text-brand-stone hover:text-brand-700"
                )}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button className="w-full text-base" href="/contact" onClick={() => setOpen(false)}>
            Book a Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
