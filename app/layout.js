import { Plus_Jakarta_Sans } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, siteConfig } from "@/lib/site";
import { siteGraphSchema } from "@/lib/schema";
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = pageMetadata({
  description:
    "Docfyle Advisory provides expert virtual bookkeeping, accounting, tax preparation, and CFO services for US businesses. Trusted by startups, property managers, and eCommerce brands.",
  keywords: [
    "virtual bookkeeping services USA",
    "outsourced accounting services",
    "online bookkeeping for small business",
    "virtual CFO services",
    "QuickBooks bookkeeping",
    "tax preparation services",
    "property management bookkeeping",
    "remote accounting firm",
    "Docfyle Advisory",
  ],
});

export default function RootLayout({ children }) {
  return (
    <html className={plusJakarta.variable} lang="en">
      <body className={plusJakarta.className}>
        <JsonLd data={siteGraphSchema()} />
        <a className="sr-only focus:not-sr-only" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main className="animate-page-in" id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
