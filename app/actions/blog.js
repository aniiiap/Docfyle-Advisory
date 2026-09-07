"use server";

import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";

export async function loadMorePostsAction(featuredId, start, end) {
  try {
    const posts = await client.fetch(latestPostsQuery, {
      featuredId: featuredId || "none",
      start,
      end,
    });
    return { success: true, posts };
  } catch (error) {
    console.error("Error loading posts server-side:", error);
    return { success: false, error: "Failed to load posts" };
  }
}
