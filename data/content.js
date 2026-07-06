import {
  BarChart3,
  Building2,
  Calculator,
  Coffee,
  FileSpreadsheet,
  Home,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Store,
} from "lucide-react";

export const services = [
  {
    title: "Monthly Remote Bookkeeping",
    description:
      "Dedicated monthly bookkeeping with reconciliations, categorization, and clean books ready for decisions.",
    icon: Calculator,
  },
  {
    title: "One-Time Cleanup",
    description:
      "Historical cleanup of messy books, catch-up entries, and reconciliation for audit-ready records.",
    icon: FileSpreadsheet,
  },
  {
    title: "Tax Filing",
    description:
      "Timely preparation support for federal and state filings, 1099 workflows, and year-end readiness.",
    icon: Landmark,
  },
  {
    title: "Financial Reporting & Compliance",
    description:
      "Clear monthly reporting packs, KPI summaries, and compliance workflows tailored to your industry.",
    icon: BarChart3,
  },
];

export const industries = [
  { title: "Real Estate Investors", icon: Home },
  { title: "Rental and Property management", icon: Building2 },
  { title: "HOAs", icon: ShieldCheck },
  { title: "Small Businesses", icon: Store },
  { title: "eCommerce Businesses", icon: Store },
  { title: "Cafes", icon: Coffee },
  { title: "Retail and wholesaler", icon: ShoppingCart },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of combined accounting experience" },
  { value: 300, suffix: "+", label: "Businesses supported globally" },
  { value: 99, suffix: "%", label: "Monthly report delivery consistency" },
  { value: 24, suffix: "/7", label: "Cloud-first access to your financial data" },
];

export const software = [
  "QuickBooks",
  "Xero",
  "Zoho Books",
  "AppFolio",
  "Buildium",
  "Yardi",
  "CINC",
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Managing Partner, Northgate Realty",
    quote:
      "Docfyle Advisory transformed our monthly close process. Their reporting quality and responsiveness are exceptional.",
  },
  {
    name: "Daniel Brooks",
    role: "Founder, Brookline Commerce",
    quote:
      "We moved from reactive bookkeeping to proactive financial planning in under two months.",
  },
  {
    name: "Amanda Lee",
    role: "Operations Lead, Bright HOA Group",
    quote:
      "Their team handles complexity without friction. Every month we get clear books and board-ready reports.",
  },
];

export const faqs = [
  {
    question: "What types of businesses do you provide bookkeeping services for?",
    answer:
      "We provide bookkeeping, accounting, & CFO services for businesses of all sizes and industries across the globe. Whether you're a startup, growing business, or an established company — we tailor our approach to fit your specific financial needs and industry requirements.",
  },
  {
    question: "Do you work with businesses outside the Globe?",
    answer:
      "Yes. We work with clients across the USA, UK, Australia, Dubai, and beyond — delivering remote bookkeeping and accounting services that meet local compliance standards and tax requirements wherever your business operates.",
  },
  {
    question: "Which industries benefit most from your remote bookkeeping services?",
    answer:
      "We serve businesses across a wide range of industries globally. Our team tailors workflows, reporting formats, and compliance processes to match your industry's specific needs — ensuring accuracy, clarity, and peace of mind at every step.",
  },
  {
    question: "What accounting software do you use?",
    answer:
      "Our team is proficient in QuickBooks, AppFolio, Buildium, CINC, Xero, and more. We adapt seamlessly to your preferred tools — so there's no need to switch software or change your existing workflows.",
  },
];

export { blogPosts } from "./blog-posts";
