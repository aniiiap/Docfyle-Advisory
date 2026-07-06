"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function BlogReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-600 via-brand-gold to-brand-600"
      style={{ scaleX }}
    />
  );
}
