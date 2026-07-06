"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { platformLogos } from "@/data/platforms";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 4;
const AUTO_MS = 4000;

export function PlatformCarousel({ className }) {
  const n = platformLogos.length;
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goPrev = useCallback(() => {
    setStartIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setStartIndex((i) => (i + 1) % n);
  }, [n]);

  useEffect(() => {
    if (n <= VISIBLE_COUNT || isHovered) return undefined;
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % n);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [n, isHovered]);

  const visible =
    n <= VISIBLE_COUNT
      ? platformLogos
      : Array.from({ length: VISIBLE_COUNT }, (_, i) => platformLogos[(startIndex + i) % n]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 sm:gap-6">
        <button
          aria-label="Show previous platforms"
          className="-ml-1 flex shrink-0 items-center justify-center rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-brand-navy focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:-ml-2"
          type="button"
          onClick={goPrev}
        >
          <ChevronLeft aria-hidden className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.75} />
        </button>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-4 items-center gap-3 py-3 sm:gap-6 sm:py-5 lg:gap-8">
            {visible.map((item, i) => (
              <div
                className="relative h-[4.5rem] w-full bg-transparent sm:h-28 lg:h-[7.5rem]"
                key={`${startIndex}-${i}-${item.src}`}
              >
                <Image
                  alt={item.alt}
                  className="object-contain object-center mix-blend-multiply"
                  fill
                  sizes="(max-width: 640px) 24vw, 20vw"
                  src={item.src}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Show next platforms"
          className="-mr-1 flex shrink-0 items-center justify-center rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-brand-navy focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:-mr-2"
          type="button"
          onClick={goNext}
        >
          <ChevronRight aria-hidden className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
