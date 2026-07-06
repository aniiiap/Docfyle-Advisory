import { absoluteUrl } from "@/lib/site";

/** Allow search engines and common AI crawlers (GEO / answer-engine visibility). */
const AI_AND_SEARCH_BOTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "Applebot",
  "anthropic-ai",
  "cohere-ai",
];

export default function robots() {
  return {
    rules: AI_AND_SEARCH_BOTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl(""),
  };
}
