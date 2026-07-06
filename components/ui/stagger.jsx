"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function StaggerGrid({ children, className, stagger = 0.08 }) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      transition={{ staggerChildren: stagger }}
      viewport={{ once: true, amount: 0.12 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
}
