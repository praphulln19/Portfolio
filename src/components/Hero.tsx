"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import CoverflowCard from "./CoverflowCard";

const NAME_PARTS = profile.name.toUpperCase().split(" ");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-flare pt-32 pb-16 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rounded-full bg-volt/25 sm:h-56 sm:w-56"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-ink/10 sm:h-48 sm:w-48"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
          {profile.role} · {profile.location}
        </motion.p>

        <h1 className="mt-6 font-display font-semibold leading-[0.92] text-ink">
          {NAME_PARTS.map((part, i) => (
            <motion.span
              key={part}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[3.2rem] sm:text-[5.5rem] lg:text-[7rem]"
            >
              {part}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 max-w-xl text-lg text-ink/80 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
          >
            See the work
            <span className="h-1.5 w-1.5 rounded-full bg-flare" />
          </a>
          <a
            href="#method"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            How I build
            <span className="h-1.5 w-1.5 rounded-full bg-volt" />
          </a>
        </motion.div>
      </div>

      <div className="relative mt-20 flex justify-center overflow-hidden px-6 pb-4 sm:mt-28">
        <div className="flex gap-4 sm:gap-5" style={{ perspective: "1400px" }}>
          {projects.map((project, i) => {
            const center = (projects.length - 1) / 2;
            const offset = i - center;
            return (
              <CoverflowCard
                key={project.id}
                project={project}
                rotateY={offset * -16}
                z={-Math.abs(offset) * 40}
                delay={0.85 + i * 0.06}
              />
            );
          })}
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 sm:flex"
      >
        Scroll
        <ArrowRight size={14} className="rotate-90" />
      </a>
    </section>
  );
}
