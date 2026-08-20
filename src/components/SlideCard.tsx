"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import ProjectMedia from "./ProjectMedia";

// Portrait fallback shape for cards without a real screenshot to size against.
const FALLBACK_ASPECT = 0.75;

export default function SlideCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const aspect = project.screenshotAspect ?? FALLBACK_ASPECT;

  return (
    <motion.a
      href="#work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      animate={{ y: hovered ? -10 : 0, scale: hovered ? 1.05 : 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{ aspectRatio: aspect }}
      className="group relative h-40 shrink-0 overflow-hidden rounded-2xl border-2 border-paper/80 shadow-[0_14px_30px_rgba(20,22,26,0.25)] sm:h-48"
    >
      <ProjectMedia project={project} />
      <span className="absolute bottom-2 right-2 rounded-md bg-ink/70 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-cream backdrop-blur-sm">
        {project.name}
      </span>
    </motion.a>
  );
}
