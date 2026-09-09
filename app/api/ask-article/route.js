import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ answer: "API Key is missing in Vercel. Please add it and redeploy." });
    }
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const { question, articleText } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
      You are a helpful AI assistant for Docfyle Advisory.
      A user is asking a question about a specific blog article.
      
      Article Text:
      "${articleText}"
      
      User Question: "${question}"
      
      Instructions:
      1. Answer the user's question accurately using ONLY the information provided in the Article Text.
      2. If the answer is not in the text, politely say "I couldn't find the exact answer in this article, but you can schedule a call with the Docfyle Advisory team for more help!"
      3. Keep the answer concise, friendly, and under 3 sentences.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ answer: responseText });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
