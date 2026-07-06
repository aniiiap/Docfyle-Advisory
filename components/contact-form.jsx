"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex min-h-[400px] flex-col items-center justify-center space-y-4 bg-white p-7 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800">Thank You!</h3>
        <p className="text-slate-600">
          We have received your message and will get back to you shortly.
        </p>
        <Button onClick={() => setStatus(null)} variant="outline" className="mt-4">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className="card-surface h-full space-y-4 bg-white p-7" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
          Full Name
        </label>
        <input
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
          id="name"
          name="name"
          required
          type="text"
          disabled={isLoading}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
          id="email"
          name="email"
          required
          type="email"
          disabled={isLoading}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
          Message
        </label>
        <textarea
          className="min-h-32 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
          id="message"
          name="message"
          required
          disabled={isLoading}
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
