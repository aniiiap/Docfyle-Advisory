"use client";

import { useState } from "react";
import { Sparkles, Send, Loader2 } from "lucide-react";

export function BlogChatbot({ articleText }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, articleText }),
      });

      const data = await res.json();
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer("Sorry, I had trouble answering that right now.");
      }
    } catch (error) {
      setAnswer("Sorry, an error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="mb-12 mt-6 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2 text-brand-700">
        <Sparkles size={20} />
        <h3 className="font-bold text-lg">Don&apos;t want to read? Ask a question</h3>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Our AI can quickly summarize or answer specific questions based on this article.
      </p>

      <form onSubmit={askQuestion} className="mt-5 flex items-center gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What is the main takeaway from this blog?"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="flex shrink-0 items-center justify-center rounded-xl bg-brand-navy px-5 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:opacity-70"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        </button>
      </form>

      {answer && (
        <div className="mt-6 rounded-xl bg-white p-5 border border-brand-100 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
              <Sparkles size={14} />
            </div>
            <p className="text-sm leading-relaxed text-slate-700">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
