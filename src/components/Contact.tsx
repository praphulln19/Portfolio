import { ArrowUpRight, Mail } from "lucide-react";
import SectionTag from "./SectionTag";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-flare px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTag accent="volt">Contact</SectionTag>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-ink/75">
          Open to internships, freelance builds, and anything that mixes machine learning with a
          real product. {profile.location}.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-sm uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
        >
          {profile.email}
          <ArrowUpRight size={16} />
        </a>

        <div className="mt-12 flex items-center justify-center gap-4">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
