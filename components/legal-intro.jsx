export function LegalIntro({ children }) {
  return (
    <div className="legal-intro-block relative mb-10 overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-brand-50/25 to-slate-50/90 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] sm:mb-12 sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-600/[0.06] blur-2xl" />
      <div className="relative text-[0.9375rem] font-medium leading-[1.7] text-slate-800 sm:text-base">{children}</div>
    </div>
  );
}
