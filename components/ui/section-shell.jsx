import { cn } from "@/lib/utils";

const toneClasses = {
  default: "",
  light: "section-tone-light",
  muted: "section-tone-muted",
  brand: "section-tone-brand",
};

export function SectionShell({ id, className, tone = "default", children }) {
  return (
    <section id={id} className={cn("section-space relative", toneClasses[tone], className)}>
      <div className="container-base">{children}</div>
    </section>
  );
}
