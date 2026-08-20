"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { accentClasses, accentHex } from "@/lib/accent";
import ProjectMedia from "./ProjectMedia";
import { GithubIcon } from "./icons";

function windowFor(index: number, total: number): number[] {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;
  const pad = step * 0.25;
  const p1 = Math.min(start + pad, end - 0.0001);
  const p2 = Math.max(end - pad, p1 + 0.0001);
  return [start, p1, p2, end];
}

export default function ShipCard({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isLast = index === total - 1;
  const range = windowFor(index, total);
  // The last card never fades out: releasing the sticky pin costs one full
  // viewport of trailing scroll no matter what, so instead of fading to
  // blank first, the final card holds and scrolls away naturally with it.
  const opacity = useTransform(scrollYProgress, range, [0, 1, 1, isLast ? 1 : 0]);
  const y = useTransform(scrollYProgress, range, [48, 0, 0, isLast ? 0 : -48]);
  const letterOpacity = useTransform(scrollYProgress, range, [0, 0.16, 0.16, isLast ? 0.16 : 0]);
  const accent = accentClasses[project.accent];

  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.span
        style={{ opacity: letterOpacity, color: accentHex[project.accent] }}
        aria-hidden="true"
        className="font-display absolute select-none text-[38vh] font-bold leading-none sm:text-[48vh]"
      >
        {project.letter}
      </motion.span>

      <motion.div
        style={{ y }}
        className="pointer-events-auto relative flex w-[min(90vw,720px)] flex-col gap-6 rounded-3xl border border-cream/10 bg-ink-soft p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:flex-row sm:p-8"
      >
        <div className="h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-56">
          <ProjectMedia project={project} />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${accent.text}`}>
              {project.status}
            </span>
            <span className="h-1 w-1 rounded-full bg-cream/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold text-cream sm:text-3xl">
            {project.name}
          </h3>
          <p className={`mt-1 font-mono text-xs uppercase tracking-wide ${accent.text}`}>
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-cream/15 px-3 py-1 font-mono text-[11px] text-cream/60"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-cream transition-colors hover:text-white"
            >
              <GithubIcon size={15} />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${accent.text}`}
              >
                Live site
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
