export function PageHero({ title, description }) {
  return (
    <section className="section-space relative overflow-hidden border-b border-[#e8e0d6] bg-page-hero">
      <div className="pointer-events-none absolute -right-16 top-6 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="container-base relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Docfyle Advisory</p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-stone">{description}</p>
      </div>
    </section>
  );
}
