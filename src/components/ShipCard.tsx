"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { accentClasses, accentHex } from "@/lib/accent";
import ProjectMedia from "./ProjectMedia";

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
  const href = project.liveUrl ?? project.githubUrl;

  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.span
        style={{ opacity: letterOpacity, color: accentHex[project.accent] }}
        aria-hidden="true"
        className="font-display absolute select-none text-[38vh] font-bold leading-none sm:text-[48vh]"
      >
        {project.letter}
      </motion.span>

      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ y }}
        className="pointer-events-auto relative flex w-[min(92vw,860px)] flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-soft shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
      >
        <div className={`relative h-[38vh] max-h-[420px] min-h-[200px] w-full ${accent.bg}`}>
          <ProjectMedia project={project} />
        </div>

        <div className="flex items-center justify-between border-t border-cream/10 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className={`h-2 w-2 rounded-full ${accent.bg}`} />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-cream sm:text-sm">
              {project.name}
            </span>
          </div>
          <span className={`font-mono text-xs uppercase tracking-[0.15em] ${accent.text}`}>
            {project.status === "Live" ? "Live" : "Open Source"}
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
