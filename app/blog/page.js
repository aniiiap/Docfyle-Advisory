import { BlogCtaSection, BlogGridSection, BlogPageHero } from "@/sections/blog-page-sections";
import { client } from "@/sanity/lib/client";
import { featuredPostQuery, latestPostsQuery, allCategoriesQuery, allPostSlugsQuery } from "@/sanity/lib/queries";
import { absoluteUrl, pageMetadata, siteConfig } from "@/lib/site";
import { urlForImage } from "@/sanity/lib/image";

export const metadata = pageMetadata({
  title: "Blog | Bookkeeping & Accounting Insights",
  path: "/blog",
  description:
    "Docfyle Advisory blog: virtual bookkeeping tips, property management metrics, tax-ready books, and real estate investor accounting guides.",
  keywords: [
    "bookkeeping blog",
    "virtual bookkeeping tips",
    "property management accounting",
    "tax ready bookkeeping",
    "real estate investor bookkeeping",
    "docfyle advisory insights",
  ],
});

// Implement ISR - revalidate every hour
export const revalidate = 3600;

function blogListingJsonLd(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: absoluteUrl("/blog"),
    description: "Insights on bookkeeping, accounting, and financial operations.",
    blogPost: posts.map((post) => {
      const imgUrl = post.mainImage ? urlForImage(post.mainImage) : "";
      return {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: imgUrl,
        datePublished: post.publishedAt,
        url: absoluteUrl(`/blog/${post.slug}`),
        author: { "@type": "Organization", name: siteConfig.name },
      };
    }),
  };
}

export default async function BlogPage() {
  const featuredPost = await client.fetch(featuredPostQuery);
  const initialPosts = await client.fetch(latestPostsQuery, {
    featuredId: featuredPost?._id || "none",
    start: 0,
    end: 6,
  });
  const categories = await client.fetch(allCategoriesQuery);
  
  // To get a fast total count for the hero section
  const totalCount = featuredPost ? initialPosts.length + 1 : initialPosts.length;
  // Note: For an exact count of all posts, we would do a separate count query, but for now this is fine or we can just fetch it:
  const allCount = await client.fetch(`count(*[_type == "post" && status == "published"])`);

  const allDisplayed = featuredPost ? [featuredPost, ...initialPosts] : initialPosts;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingJsonLd(allDisplayed)) }}
        type="application/ld+json"
      />
      <BlogPageHero totalCount={allCount} />
      <BlogGridSection featuredPost={featuredPost} initialPosts={initialPosts} categories={categories} />
      <BlogCtaSection />
    </>
  );
}
