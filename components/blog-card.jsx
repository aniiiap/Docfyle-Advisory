import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";

export function BlogCard({ post, featured = false }) {
  const imageUrl = post?.mainImage ? urlForImage(post.mainImage) : "/business-finance.avif";
  const categoryTitle = post?.categories?.[0]?.title || "Insights";

  return (
    <article
      className={cn(
        "card-surface group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-glow",
        featured && "md:flex-row md:items-stretch",
      )}
    >
      <Link
        className={cn(
          "relative block shrink-0 overflow-hidden bg-brand-900/5",
          featured ? "aspect-[16/10] md:aspect-auto md:w-[46%]" : "aspect-[16/10]",
        )}
        href={`/blog/${post?.slug}`}
        tabIndex={-1}
      >
        <Image
          alt={post?.mainImage?.alt || post?.title || "Blog cover image"}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 560px" : "(max-width: 768px) 100vw, 400px"}
          src={imageUrl}
          unoptimized
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent opacity-80 transition group-hover:opacity-90"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-700 shadow-sm backdrop-blur-sm">
          {categoryTitle}
        </span>
      </Link>

      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "md:justify-center")}>
        <div className="flex items-center justify-between gap-3">
          {!featured ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">{categoryTitle}</p>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
              Featured
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Clock size={12} />
            {post?.readingTime ? `${post.readingTime} min read` : "5 min read"}
          </span>
        </div>
        <h2 className={cn("mt-4 font-bold leading-snug text-brand-navy", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          <Link className="transition group-hover:text-brand-600" href={`/blog/${post?.slug}`}>
            {post?.title}
          </Link>
        </h2>
        <p className={cn("mt-3 flex-1 leading-relaxed text-brand-stone", featured ? "text-base" : "text-sm sm:text-base")}>
          {post?.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <p className="text-xs text-slate-500">
            {post?.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </p>
          <Link
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition group-hover:gap-2"
            href={`/blog/${post.slug}`}
          >
            Read article <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
