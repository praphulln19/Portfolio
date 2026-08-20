"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { accentClasses } from "@/lib/accent";
import ProjectMedia from "./ProjectMedia";

export default function CoverflowCard({
  project,
  rotateY,
  z,
  delay,
}: {
  project: Project;
  rotateY: number;
  z: number;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);
  const accent = accentClasses[project.accent];

  return (
    <motion.a
      href="#work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: hovered ? -14 : 0,
        rotateY: hovered ? 0 : rotateY,
        z: hovered ? 60 : z,
        scale: hovered ? 1.06 : 1,
      }}
      onAnimationComplete={() => setEntered(true)}
      transition={{
        duration: entered ? 0.35 : 0.6,
        delay: entered ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative flex h-44 w-28 shrink-0 flex-col overflow-hidden rounded-2xl border border-ink/10 shadow-[0_20px_44px_rgba(20,22,26,0.28)] sm:h-56 sm:w-32 ${accent.bg}`}
    >
      <div className="relative flex-1 overflow-hidden">
        <ProjectMedia project={project} />
      </div>
      <div className="flex items-center justify-between border-t border-ink/10 bg-paper/90 px-3 py-2">
        <span className="truncate font-mono text-[9px] uppercase tracking-wide text-ink/70">
          {project.name}
        </span>
        <span className="font-display text-xs font-bold text-ink/40">{project.letter}</span>
      </div>
    </motion.a>
  );
}
