import { client } from "@/sanity/lib/client";
import { allPostSlugsQuery } from "@/sanity/lib/queries";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries-we-support",
    "/blog",
    "/why-choose-us",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/our-services",
    "/bookkeeping-accounting-services-usa",
    "/our-team",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const sanityPosts = await client.fetch(allPostSlugsQuery);
  const blogEntries = sanityPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
