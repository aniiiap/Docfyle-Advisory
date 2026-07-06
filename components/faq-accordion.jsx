"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function FaqNumber({ index, active }) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition duration-300",
        active
          ? "bg-brand-gradient text-white shadow-glow"
          : "bg-brand-sand text-brand-stone group-hover:bg-brand-100 group-hover:text-brand-700"
      )}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export function FAQAccordion({ items }) {
  const [active, setActive] = useState(0);

  if (!items?.length) {
    return null;
  }

  const safeIndex = active >= 0 && active < items.length ? active : 0;
  const current = items[safeIndex];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Desktop: split panel */}
      <div className="hidden overflow-hidden rounded-[1.35rem] border border-[#e8e0d6] bg-brand-cream shadow-card lg:grid lg:grid-cols-12">
        <div className="border-r border-[#e8e0d6] bg-brand-sand/50 lg:col-span-5">
          <div className="border-b border-[#e8e0d6] px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">Questions</p>
            <p className="mt-1 text-sm text-brand-stone">Select a topic to view the answer</p>
          </div>
          <ul className="divide-y divide-[#e8e0d6]">
            {items.map((item, index) => {
              const isActive = index === safeIndex;
              return (
                <li key={item.question}>
                  <button
                    aria-expanded={isActive}
                    className={cn(
                      "group flex w-full items-start gap-4 px-5 py-4 text-left transition duration-300",
                      isActive
                        ? "border-l-[3px] border-brand-600 bg-brand-cream shadow-[inset_0_0_0_1px_rgba(42,123,140,0.08)]"
                        : "border-l-[3px] border-transparent hover:bg-brand-cream/80"
                    )}
                    onClick={() => setActive(index)}
                    type="button"
                  >
                    <FaqNumber active={isActive} index={index} />
                    <span
                      className={cn(
                        "pt-1.5 text-sm font-semibold leading-snug transition",
                        isActive ? "text-brand-navy" : "text-brand-stone group-hover:text-brand-800"
                      )}
                    >
                      {item.question}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative flex min-h-[320px] flex-col bg-brand-cream lg:col-span-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,rgba(193,127,58,0.08),transparent_55%)]"
          />
          <div className="relative flex flex-1 flex-col p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">Answer</p>
                <p className="text-sm text-brand-stone">Clear guidance from our team</p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                initial={{ opacity: 0, y: 8 }}
                key={safeIndex}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold leading-snug text-brand-navy sm:text-xl">{current.question}</h3>
                <p className="mt-5 text-base leading-relaxed text-brand-stone">{current.answer}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative border-t border-[#e8e0d6] bg-brand-sand/40 px-8 py-4 lg:px-10">
            <p className="flex items-center gap-2 text-xs text-brand-stone">
              <HelpCircle className="shrink-0 text-brand-gold" size={14} />
              Still have questions?{" "}
              <a className="font-semibold text-brand-600 hover:text-brand-700 hover:underline" href="/contact">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: enhanced accordion */}
      <div className="space-y-3 lg:hidden">
        {items.map((item, index) => {
          const isOpen = index === active;
          return (
            <motion.div
              className={cn(
                "overflow-hidden rounded-2xl border transition duration-300",
                isOpen
                  ? "border-brand-200/80 bg-brand-cream shadow-soft"
                  : "border-[#e8e0d6] bg-brand-cream shadow-sm"
              )}
              initial={{ opacity: 0, y: 14 }}
              key={item.question}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true, amount: 0.15 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <button
                aria-expanded={isOpen}
                className="flex w-full items-start gap-4 p-5 text-left"
                onClick={() => setActive(isOpen ? -1 : index)}
                type="button"
              >
                <FaqNumber active={isOpen} index={index} />
                <span className="flex flex-1 items-start justify-between gap-3 pt-1">
                  <span
                    className={cn(
                      "font-semibold leading-snug",
                      isOpen ? "text-brand-navy" : "text-brand-ink"
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300",
                      isOpen
                        ? "rotate-180 border-brand-200 bg-brand-50 text-brand-600"
                        : "border-[#e8e0d6] bg-brand-sand text-brand-stone"
                    )}
                  >
                    <ChevronDown size={16} />
                  </span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="border-t border-[#e8e0d6] bg-gradient-to-b from-brand-sand/50 to-brand-cream px-5 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-brand-stone sm:text-base">{item.answer}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
