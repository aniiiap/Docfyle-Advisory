import Image from "next/image";
import { cn } from "@/lib/utils";
import { getBlogCover } from "@/lib/blog";

export function BlogCoverImage({ slug, className, imageClassName, priority = false, sizes }) {
  const cover = getBlogCover(slug);

  return (
    <div className={cn("relative overflow-hidden bg-brand-900/10", className)}>
      <Image
        alt={cover.alt}
        className={cn("object-cover transition duration-700 ease-out group-hover:scale-[1.04]", imageClassName)}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"}
        src={cover.src}
        unoptimized
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/20 to-transparent"
      />
    </div>
  );
}
