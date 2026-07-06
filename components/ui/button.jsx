import Link from "next/link";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-brand-gradient text-white shadow-glow hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-brand-600",
  secondary:
    "border border-[#e8e0d6] bg-brand-cream text-brand-navy hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-sand focus-visible:outline-brand-600",
  ghost: "text-brand-stone hover:bg-brand-sand focus-visible:outline-brand-600",
  accent:
    "bg-brand-orange text-white shadow-warm hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-brand-orange",
  inverse:
    "border-0 bg-brand-cream text-brand-navy shadow-[0_12px_40px_-8px_rgba(255,253,249,0.4)] hover:-translate-y-0.5 hover:bg-white focus-visible:outline-white",
  inverseOutline:
    "border border-white/40 bg-white/5 text-white hover:-translate-y-0.5 hover:border-brand-gold/50 hover:bg-white/12 focus-visible:outline-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    styles[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        className={classes}
        href={href}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
