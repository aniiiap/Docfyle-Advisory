import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, allPostSlugsQuery, relatedPostsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { absoluteUrl, pageMetadata, siteConfig } from "@/lib/site";
import { BlogArticleView } from "@/sections/blog-article-sections";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await client.fetch(allPostSlugsQuery);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) return {};
  
  const imgUrl = post.mainImage ? urlForImage(post.mainImage) : "";

  return pageMetadata({
    title: post.metaTitle || post.title,
    path: `/blog/${post.slug}`,
    description: post.excerpt,
    keywords: post.tags,
    image: imgUrl,
  });
}

function articleJsonLd(post) {
  const imgUrl = post.mainImage ? urlForImage(post.mainImage) : "";
  const authorName = post.author?.name || siteConfig.name;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imgUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags?.join(", "),
    articleSection: post.categories?.[0]?.title,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) notFound();

  const categoryTitles = post.categories?.map((c) => c.title) || [];
  const relatedPosts = await client.fetch(relatedPostsQuery, { 
    currentPostId: post._id,
    categories: categoryTitles
  });

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
        type="application/ld+json"
      />
      <BlogArticleView post={post} relatedPosts={relatedPosts} />
    </>
  );
}
