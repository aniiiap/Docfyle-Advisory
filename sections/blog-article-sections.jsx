"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Sparkles,
  Tag,
  User,
} from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { BlogReadingProgress } from "@/components/blog-reading-progress";
import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/lib/site";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

function getHeadings(body) {
  if (!body) return [];
  return body
    .filter((block) => block.style === "h2")
    .map((block) => block.children?.[0]?.text)
    .filter(Boolean);
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10 overflow-hidden rounded-xl bg-slate-50">
          <Image
            src={urlForImage(value)}
            alt={value.alt || " "}
            width={800}
            height={500}
            className="w-full object-cover"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children, value }) => {
      const id = slugifyHeading(children[0]);
      return (
        <h2 id={id} className="mt-12 scroll-m-24 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-6 leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a href={value.href} rel={rel} className="font-semibold text-brand-600 underline decoration-brand-600/30 decoration-2 underline-offset-2 transition hover:text-brand-800 hover:decoration-brand-800">
          {children}
        </a>
      );
    },
  },
};

export function BlogArticleView({ post, relatedPosts }) {
  const headings = getHeadings(post.body);
  const imageUrl = post.mainImage ? urlForImage(post.mainImage) : "";
  const categoryTitle = post.categories?.[0]?.title || "Insights";
  const authorName = post.author?.name || "Docfyle Team";

  return (
    <>
      <BlogReadingProgress />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e8e0d6] bg-brand-navy">
        <div className="absolute inset-0">
          {imageUrl ? (
            <>
              <Image
                alt={post.mainImage?.alt || post.title}
                src={imageUrl}
                fill
                priority
                className="object-cover opacity-20"
                sizes="100vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[12px]" />
            </>
          ) : (
            <div className="h-full w-full bg-brand-navy" />
          )}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl"
        />

        <div className="container-base relative z-10 pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15"
              href="/blog"
            >
              <ArrowLeft size={16} /> Back to insights
            </Link>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 w-full lg:mt-10"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-gold/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
              <Sparkles size={12} />
              {categoryTitle}
            </p>
            <h1 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <User size={15} className="text-brand-gold" />
                {authorName}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={15} className="text-brand-gold" />
                {post.publishedAt ? (
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                ) : null}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={15} className="text-brand-gold" />
                {post.readingTime ? `${post.readingTime} min read` : "5 min read"}
              </span>
            </div>
          </motion.div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-brand-cream to-transparent"
        />
      </section>

      {/* Article body */}
      <SectionShell className="!pt-10 sm:!pt-12" tone="light">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14 xl:gap-16">
          <article className="min-w-0">
            <FadeIn>
              <div className="blog-excerpt-card relative overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-white via-brand-50/40 to-brand-sand/30 p-6 shadow-soft sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-gold/15 blur-2xl"
                />
                <BookOpen className="relative text-brand-600" size={28} strokeWidth={1.75} />
                <p className="relative mt-4 text-lg font-medium leading-relaxed text-brand-ink sm:text-xl sm:leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </FadeIn>

            <div className="blog-article-divider my-10 sm:my-12" aria-hidden />

            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-600">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>

            {post.tags?.length ? (
              <FadeIn className="mt-14">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-7">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
                    <Tag size={16} />
                    Topics covered
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        className="rounded-full border border-brand-100 bg-brand-50/80 px-3.5 py-1.5 text-xs font-medium text-brand-700 transition hover:border-brand-200 hover:bg-brand-50"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ) : null}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">On this page</p>
                  <nav aria-label="Article sections" className="mt-4">
                    <ul className="space-y-1">
                      {headings.slice(0, 8).map((heading) => {
                        const id = slugifyHeading(heading);
                        return (
                          <li key={id}>
                            <a
                              className="group flex items-start gap-2 rounded-lg py-2 pl-1 text-sm text-brand-stone transition hover:bg-brand-50/80 hover:text-brand-700"
                              href={`#${id}`}
                            >
                              <ChevronRight
                                className="mt-0.5 shrink-0 text-brand-gold opacity-70 transition group-hover:translate-x-0.5"
                                size={14}
                              />
                              <span className="leading-snug">{heading}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                <div className="overflow-hidden rounded-2xl border border-brand-700/20 bg-gradient-to-br from-brand-navy via-brand-700 to-brand-600 p-6 text-white shadow-glow">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">Docfyle Advisory</p>
                  <p className="mt-3 text-base font-semibold leading-snug">
                    Put these insights into practice with expert bookkeeping support.
                  </p>
                  <Link
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-cream"
                    href={siteConfig.calendlyUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Schedule a call
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </SectionShell>

      {relatedPosts?.length > 0 ? (
        <SectionShell className="pt-0" tone="muted">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Keep reading</p>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">More from Docfyle Insights</h2>
          </FadeIn>
          <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {relatedPosts.map((item, i) => (
              <FadeIn delay={i * 0.08} key={item.slug}>
                <BlogCard post={item} />
              </FadeIn>
            ))}
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className="pb-24 sm:pb-28" tone="light">
        <CtaBanner
          description="Talk with our team about bookkeeping, reporting, and tax-ready processes for your business."
          primaryLabel="Get Free Consultation"
          title="Ready to strengthen your books?"
        />
      </SectionShell>
    </>
  );
}
