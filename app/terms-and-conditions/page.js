import Link from "next/link";
import { LegalDocumentShell } from "@/components/legal-document-shell";
import { LegalH2 } from "@/components/legal-h2";
import { LegalIntro } from "@/components/legal-intro";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  path: "/terms-and-conditions",
  description:
    "Terms and conditions for Docfyle Advisory outsourced accounting, bookkeeping, tax, and related financial services.",
});

const termsToc = [
  { id: "definitions", label: "Definitions", shortLabel: "Definitions" },
  { id: "services", label: "Services", shortLabel: "Services" },
  { id: "payment-terms", label: "Payment Terms", shortLabel: "Payment" },
  { id: "confidentiality", label: "Confidentiality", shortLabel: "Confidentiality" },
  { id: "data-security", label: "Data Security", shortLabel: "Security" },
  { id: "limitation-of-liability", label: "Limitation of Liability", shortLabel: "Liability" },
  { id: "cancellation-and-termination", label: "Cancellation and Termination", shortLabel: "Cancellation" },
  { id: "dispute-resolution", label: "Dispute Resolution", shortLabel: "Disputes" },
  { id: "compliance-with-laws", label: "Compliance with Laws", shortLabel: "Compliance" },
  { id: "amendments", label: "Amendments", shortLabel: "Amendments" },
  { id: "governing-law", label: "Governing Law", shortLabel: "Governing law" },
  { id: "consent-for-messaging", label: "Consent for Messaging", shortLabel: "Messaging consent" },
  { id: "opt-in-opt-out", label: "Opt-In / Opt-Out", shortLabel: "Opt in/out" },
  { id: "message-frequency", label: "Message Frequency", shortLabel: "Frequency" },
  { id: "liability-for-messaging", label: "Liability for Messaging", shortLabel: "SMS liability" },
  { id: "contact", label: "Contact", shortLabel: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalDocumentShell
      eyebrow="Terms"
      subtitle="Docfyle Advisory — Bookkeeping & Accounting Services (USA). Rules for using our website and professional services."
      title="Terms & Conditions"
      toc={termsToc}
    >
      <LegalIntro>
        These Terms and Conditions outline the rules and regulations for the use of our services, including outsourced
        accounting, bookkeeping, tax services, and other financial services. By accessing or using our services, you
        agree to comply with these terms. Please read them carefully.
      </LegalIntro>

      <LegalH2 id="definitions">Definitions</LegalH2>
      <ul>
        <li>
          <strong>Company</strong> refers to Docfyle Advisory, its subsidiaries, affiliates, and partners, as applicable.
        </li>
        <li>
          <strong>Client</strong> refers to the individual or business entity that engages Docfyle Advisory for services.
        </li>
        <li>
          <strong>Services</strong> refers to accounting, bookkeeping, tax return preparation, financial consulting, and
          related services provided by Docfyle Advisory.
        </li>
        <li>
          <strong>Agreement</strong> refers to the contract or engagement terms between the Company and the Client for the
          provision of services.
        </li>
      </ul>

      <LegalH2 id="services">Services</LegalH2>
      <p>Docfyle Advisory provides financial services, including but not limited to:</p>
      <ul>
        <li>Accounting and bookkeeping</li>
        <li>Tax preparation and advisory</li>
        <li>Financial planning and consulting</li>
        <li>Payroll processing</li>
        <li>Software integration and customization</li>
      </ul>
      <p>
        Services are provided in accordance with the specific agreement, statement of work, or engagement letter entered
        into with the Client.
      </p>

      <LegalH2 id="payment-terms">Payment Terms</LegalH2>
      <p>
        <strong>Payment gateway:</strong> Payments may be processed through Razorpay or other processors we designate. By
        using our designated payment gateway, you agree to comply with that provider&apos;s terms and conditions in
        addition to these Terms.
      </p>
      <p>
        <strong>Payment schedule:</strong> Fees are due as set out in your agreement or invoice, including any milestones
        or billing cycles described in your contract.
      </p>
      <p>
        <strong>Late payments:</strong> Late payments may incur fees or interest as stated in your agreement. Continued
        non-payment may result in suspension of services until outstanding balances are resolved.
      </p>
      <p>
        <strong>Refunds:</strong> Refunds are assessed on a case-by-case basis and granted at Docfyle Advisory&apos;s
        discretion, except where required by applicable law. Where a refund applies (for example, for eligible cancellations
        as described in your agreement), we generally aim to process it within approximately 15 business days, subject to
        payment provider timelines.
      </p>

      <LegalH2 id="confidentiality">Confidentiality</LegalH2>
      <p>
        Docfyle Advisory is committed to maintaining the confidentiality of Client information. We will not disclose
        sensitive financial information without your express written consent, except as required by law or as necessary to
        perform the Services (for example, to regulators, banks, or Service Providers bound by confidentiality).
      </p>

      <LegalH2 id="data-security">Data Security</LegalH2>
      <p>
        We implement reasonable technical and organizational measures to protect data you share with us. The Company is not
        liable for unauthorized access caused by third parties outside our reasonable control, except where such access
        results from our gross negligence or willful misconduct as determined under applicable law.
      </p>

      <LegalH2 id="limitation-of-liability">Limitation of Liability</LegalH2>
      <p>
        To the fullest extent permitted by law, Docfyle Advisory is not liable for any indirect, incidental, special,
        consequential, or punitive damages arising from the use of our services. Our aggregate liability arising out of or
        relating to the Services is limited to the fees paid by the Client for the specific services giving rise to the
        claim in the twelve (12) months preceding the event, unless a different cap is set forth in your signed agreement.
      </p>

      <LegalH2 id="cancellation-and-termination">Cancellation and Termination</LegalH2>
      <p>
        <strong>Cancellation by Client:</strong> You may cancel services in accordance with your agreement. Where
        applicable, cancellation within two (2) days of payment may qualify for a refund or fee adjustment as stated in your
        engagement terms; eligible refunds are typically processed within approximately fifteen (15) business days,
        subject to payment processor timing. Any outstanding amounts must be settled before cancellation is finalized where
        required under your agreement.
      </p>
      <p>
        <strong>Termination by Docfyle Advisory:</strong> We may suspend or terminate services with notice where permitted
        by contract, including for material breach of these Terms or non-payment.
      </p>

      <LegalH2 id="dispute-resolution">Dispute Resolution</LegalH2>
      <p>
        Any disputes arising out of or relating to this Agreement shall be resolved through arbitration in accordance with
        the laws of India, unless your written agreement with us specifies a different mechanism or venue. The
        arbitrator&apos;s decision shall be final and binding, subject to applicable law.
      </p>

      <LegalH2 id="compliance-with-laws">Compliance with Laws</LegalH2>
      <p>
        Clients are responsible for compliance with applicable laws relating to their business and the information they
        provide. Docfyle Advisory will comply with laws applicable to the Services we provide but does not assume
        responsibility for the Client&apos;s legal obligations outside the scope of the engagement.
      </p>

      <LegalH2 id="amendments">Amendments</LegalH2>
      <p>
        Docfyle Advisory may modify these Terms and Conditions at any time. We will notify Clients of material changes where
        appropriate. Continued use of our services after updates may constitute acceptance of the revised terms, as
        described in any notice we provide.
      </p>

      <LegalH2 id="governing-law">Governing Law</LegalH2>
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard
        to conflict-of-law principles, except where a signed agreement with you specifies otherwise.
      </p>

      <LegalH2 id="consent-for-messaging">Consent for Messaging</LegalH2>
      <p>
        By providing your phone number, you consent to receive SMS/MMS messages related to your account, notifications,
        promotions, and updates, where permitted by law and consistent with your preferences.
      </p>

      <LegalH2 id="opt-in-opt-out">Opt-In / Opt-Out</LegalH2>
      <p>
        You may opt in to messages by providing your phone number where we request it. You may opt out at any time by
        replying <strong>STOP</strong>. For help, reply <strong>HELP</strong> or contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or{" "}
        <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>{siteConfig.phone}</a>.
      </p>

      <LegalH2 id="message-frequency">Message Frequency</LegalH2>
      <p>Message frequency may vary depending on your interactions with our services and your account settings.</p>

      <LegalH2 id="liability-for-messaging">Liability for Messaging</LegalH2>
      <p>
        We are not responsible for delays, failures, or errors in message delivery caused by mobile carriers, third-party
        providers, or factors outside our reasonable control.
      </p>

      <LegalH2 id="contact">Contact</LegalH2>
      <p>
        Questions about these Terms? Visit <Link href="/contact">our contact page</Link> or email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalDocumentShell>
  );
}
