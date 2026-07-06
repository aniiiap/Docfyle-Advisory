"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const highlights = [
  { icon: Calendar, text: "Free consultation" },
  { icon: ShieldCheck, text: "Secure, NDA-backed workflows" },
  { icon: Sparkles, text: "Works with your existing software" },
];

export function CtaBanner({
  eyebrow = "Get started",
  title = "Ready to Clean Up Your Books?",
  description = "Let's get your finances accurate, organized, and stress-free — so you can focus on growing your portfolio.",
  primaryLabel = "Book Your Consultation",
  primaryHref = siteConfig.calendlyUrl,
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.85rem] bg-brand-gradient-warm px-6 py-14 shadow-glow sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(42,123,140,0.35)_0%,transparent_45%,rgba(193,127,58,0.18)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-500/35 blur-3xl"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], x: [0, 24, 0] }}
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-gold/25 blur-3xl"
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          className="text-xs font-bold uppercase tracking-[0.22em] text-amber-200/95"
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem]"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {description}
        </motion.p>

        <motion.ul
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial="hidden"
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {highlights.map((item) => (
            <motion.li
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-slate-100 backdrop-blur-sm sm:text-sm"
              key={item.text}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <item.icon className="shrink-0 text-brand-gold" size={15} />
              {item.text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button href={primaryHref} variant="inverse">
              {primaryLabel} <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button href={secondaryHref} variant="inverseOutline">
              {secondaryLabel}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
