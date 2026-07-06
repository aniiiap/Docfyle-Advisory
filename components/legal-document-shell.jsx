const tocLinkClass =
  "block rounded-lg border border-transparent px-3 py-2.5 text-sm leading-snug text-slate-600 transition hover:border-slate-200 hover:bg-slate-50/90 hover:text-brand-800";

export function LegalDocumentShell({ title, subtitle, eyebrow = "Legal", toc, children }) {
  return (
    <>
      <header className="relative overflow-hidden border-b border-[#e8e0d6] bg-page-hero">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_50%_-20%,rgba(42,123,140,0.08),transparent)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200/60 to-transparent" />
        <div className="container-base relative pb-14 pt-12 sm:pb-16 sm:pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
        </div>
      </header>

      <section className="border-t border-slate-100 bg-gradient-to-b from-slate-50/60 via-white to-white pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-base">
          <div className="grid gap-10 xl:grid-cols-12 xl:items-start xl:gap-12">
            <div className="xl:col-span-4">
              <div className="xl:hidden">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Jump to section</p>
                <div className="mt-3 flex max-h-40 flex-col gap-1.5 overflow-y-auto rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      className="rounded-md px-2 py-1.5 text-xs font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-800"
                      href={`#${item.id}`}
                    >
                      {item.shortLabel ?? item.label}
                    </a>
                  ))}
                </div>
              </div>

              <aside className="hidden xl:block">
                <div className="sticky top-28 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft">
                  <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50/90 to-white px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">On this page</p>
                    <p className="mt-1 text-xs text-slate-500">Quick navigation</p>
                  </div>
                  <nav aria-label="Document sections" className="max-h-[min(70vh,36rem)] overflow-y-auto p-3">
                    <ul className="space-y-0.5">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a className={tocLinkClass} href={`#${item.id}`}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>

            <div className="min-w-0 xl:col-span-8">
              <div className="rounded-[1.35rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.1)] sm:p-9 lg:p-11">
                <div className="legal-prose">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
