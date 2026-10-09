"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useState } from "react";

export function AnimatedCounter({ value, suffix = "", label }) {
  const [mounted, setMounted] = useState(false);
  const count = useCountUp(value, 1500);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md">
      <p className="text-4xl font-bold tracking-tight text-white">
        {mounted ? count : value}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-200">{label}</p>
    </div>
  );
}
