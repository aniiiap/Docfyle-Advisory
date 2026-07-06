"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { StaggerGrid, StaggerItem } from "@/components/ui/stagger";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";

export function BlogPageHero({ totalCount = 0 }) {
  return (
    <section className="relative overflow-hidden border-b border-[#e8e0d6] bg-page-hero py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-16 top-6 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="container-base relative">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Blog</p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Docfyle Insights
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-stone">
            Expert guidance on virtual bookkeeping, accounting operations, tax readiness, property management
            finance, and scaling your business with clean, compliant books.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
            <BookOpen className="text-brand-600" size={16} />
            {totalCount > 0 ? `${totalCount} articles` : "Insights"} · Updated regularly
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function BlogGridSection({ featuredPost, initialPosts, categories }) {
  const [posts, setPosts] = useState(initialPosts || []);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState((initialPosts?.length || 0) >= 6);

  async function loadMore() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const newPosts = await client.fetch(latestPostsQuery, {
        featuredId: featuredPost?._id || "none",
        start: posts.length,
        end: posts.length + 6,
      });
      if (newPosts.length < 6) {
        setHasMore(false);
      }
      setPosts((prev) => [...prev, ...newPosts]);
    } catch (error) {
      console.error("Failed to load more posts", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SectionShell tone="light">
      {featuredPost && (
        <FadeIn className="mb-10 lg:mb-12">
          <BlogCard featured post={featuredPost} />
        </FadeIn>
      )}
      
      <StaggerGrid className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {posts.map((post) => (
          <StaggerItem key={post._id}>
            <BlogCard post={post} />
          </StaggerItem>
        ))}
      </StaggerGrid>

      {hasMore && (
        <FadeIn className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="rounded-full bg-brand-navy px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-70"
          >
            {isLoading ? "Loading..." : "Load More Articles"}
          </button>
        </FadeIn>
      )}
    </SectionShell>
  );
}

export function BlogCtaSection() {
  return (
    <SectionShell className="pb-24 sm:pb-28" tone="light">
      <CtaBanner
        description="Talk with our team about bookkeeping, reporting, and tax-ready processes for your business."
        primaryLabel="Get Free Consultation"
        title="Ready to put these insights into practice?"
      />
    </SectionShell>
  );
}
