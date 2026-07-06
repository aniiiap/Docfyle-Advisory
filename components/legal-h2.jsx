export function LegalH2({ id, children }) {
  return (
    <h2
      id={id}
      className="legal-h2 group relative scroll-mt-32 border-b border-slate-100/95 pb-4 text-xl font-bold tracking-tight text-brand-navy sm:text-[1.35rem] sm:leading-snug"
    >
      <span
        aria-hidden
        className="absolute left-0 top-2 h-[calc(100%-1.5rem)] w-1 rounded-full bg-gradient-to-b from-brand-500 via-brand-600 to-brand-navy shadow-sm"
      />
      <span className="block pl-5 sm:pl-6">{children}</span>
    </h2>
  );
}
