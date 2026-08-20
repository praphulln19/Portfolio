import { GraduationCap, Award } from "lucide-react";
import SectionTag from "./SectionTag";
import { profile, education, certifications } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionTag accent="volt" tone="light">
            About
          </SectionTag>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
            {profile.eyebrow}
          </h2>
          <div className="mt-8 space-y-5">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-cream/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6">
            <div className="flex items-center gap-2 text-volt">
              <GraduationCap size={18} />
              <span className="font-mono text-xs uppercase tracking-wide">Education</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-cream">
              {education.institution}
            </h3>
            <p className="mt-1 text-sm text-cream/60">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-cream/40">{education.duration}</p>
          </div>

          <div className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6">
            <div className="flex items-center gap-2 text-signal">
              <Award size={18} />
              <span className="font-mono text-xs uppercase tracking-wide">Certifications</span>
            </div>
            <ul className="mt-4 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="border-t border-cream/10 pt-4 first:border-t-0 first:pt-0">
                  <p className="text-sm font-medium text-cream/85">{cert.title}</p>
                  <p className="mt-1 font-mono text-xs text-cream/40">
                    {cert.issuer} · {cert.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
