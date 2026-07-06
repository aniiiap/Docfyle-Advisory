export function SectionHeading({ eyebrow, title, description, centered = false, inverted = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
            inverted ? "text-brand-200" : "text-brand-gold"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
          inverted ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            inverted ? "text-slate-300" : "text-brand-stone"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
