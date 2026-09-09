import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function GET(req) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      // return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      // In production you would block, but for manual testing we allow
    }

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
      You are an expert bookkeeping and tax advisor for Docfyle Advisory. 
      Write a highly specific, AEO/GEO optimized blog post. 
      Target audience: Property managers, startups, eCommerce, or CPAs in the USA.
      
      Requirements:
      1. Write an engaging title.
      2. Write a 2-sentence excerpt.
      3. The body must be in Portable Text format (an array of JSON objects). 
      To make it easy, just return the body as plain text with markdown-like spacing, and we will convert it to a simple portable text block.
      Actually, return the exact JSON payload.
      
      Return ONLY a JSON object with this exact structure:
      {
        "title": "String",
        "slug": "String (lowercase, hyphens)",
        "excerpt": "String",
        "bodyText": "The full blog content in plain text with double-newlines between EVERY paragraph and EVERY list item. Use ## for H2 headers, ### for H3 headers. Start list items with - ",
        "tags": ["Array", "of", "strings"],
        "metaTitle": "String under 60 chars"
      }
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Clean up markdown code block if present
    const cleanedText = responseText.replace(/```json\n?/, "").replace(/```\n?/, "").trim();
    const blogData = JSON.parse(cleanedText);

    const bodyBlocks = blogData.bodyText.split('\n\n').map(paragraph => {
      let style = 'normal';
      let text = paragraph.trim();
      let listItem;
      let level;

      if (text.startsWith('### ')) {
        style = 'h3';
        text = text.replace('### ', '');
      } else if (text.startsWith('## ')) {
        style = 'h2';
        text = text.replace('## ', '');
      } else if (text.startsWith('# ')) {
        style = 'h1';
        text = text.replace('# ', '');
      } else if (text.match(/^[-*]\s/)) {
        style = 'normal';
        listItem = 'bullet';
        level = 1;
        text = text.replace(/^[-*]\s/, '');
      }

      // Basic bold removal (we can't easily map marks without complex parsing, so we just clean the asterisks for clean text if needed, or leave them. For now let's clean them to avoid ** ** showing up)
      text = text.replace(/\*\*/g, '');

      return {
        _type: 'block',
        children: [{ _type: 'span', text: text, marks: [] }],
        markDefs: [],
        style: style,
        ...(listItem ? { listItem, level } : {})
      };
    }).filter(block => block.children[0].text.length > 0);

    const doc = {
      _type: "post",
      title: blogData.title,
      slug: { _type: "slug", current: blogData.slug },
      excerpt: blogData.excerpt,
      body: bodyBlocks,
      status: "published",
      publishedAt: new Date().toISOString(),
      readingTime: Math.ceil(blogData.bodyText.split(' ').length / 200),
      tags: blogData.tags,
      metaTitle: blogData.metaTitle
    };

    const createdDoc = await sanityClient.create(doc);

    return NextResponse.json({ success: true, doc: createdDoc });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
