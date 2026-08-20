import type { Accent } from "@/data/portfolio";
import { accentClasses } from "@/lib/accent";

export default function SectionTag({
  children,
  accent = "flare",
  tone = "dark",
}: {
  children: React.ReactNode;
  accent?: Accent;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-ink/60" : "text-cream/60"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${accentClasses[accent].bg}`} />
      {children}
    </span>
  );
}
