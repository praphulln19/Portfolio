import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-wide text-cream/40 sm:flex-row">
        <p>
          © {year} {profile.name}
        </p>
        <a href="#top" className="transition-colors hover:text-cream">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
