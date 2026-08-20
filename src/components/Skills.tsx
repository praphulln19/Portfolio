"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Sparkles,
  SquareTerminal,
  Workflow,
} from "lucide-react";
import SectionTag from "./SectionTag";
import RibbonBanner from "./RibbonBanner";
import { skillGroups } from "@/data/portfolio";
import { accentClasses } from "@/lib/accent";

const DECORATIVE_ICONS = [Code2, Brain, Database, Cloud, GitBranch, Braces, Layers, SquareTerminal, Workflow, Sparkles];

type FlatSkill = { name: string; category: string; accent: (typeof skillGroups)[number]["accent"] };

const ALL_SKILLS: FlatSkill[] = skillGroups.flatMap((group) =>
  group.items.map((name) => ({ name, category: group.category, accent: group.accent }))
);

export default function Skills() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section id="skills" className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTag accent="signal">The stack</SectionTag>
        </div>

        <RibbonBanner />

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:mt-8 sm:gap-5">
          {DECORATIVE_ICONS.map((Icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-paper text-ink/70 shadow-sm sm:h-12 sm:w-12"
            >
              <Icon size={18} />
            </motion.span>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="relative inline-block font-display text-4xl font-semibold text-ink sm:text-6xl">
            The toolbox.
            <svg
              viewBox="0 0 200 14"
              className="absolute -bottom-3 left-0 h-3 w-full text-volt"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C 34 2, 66 12, 100 7 C 134 2, 166 12, 198 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-muted">
            Python and deep learning on one side, React and TypeScript on the other. Pick a
            discipline to filter the field.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["All", ...skillGroups.map((g) => g.category)].map((category) => {
            const isActive = active === category;
            const group = skillGroups.find((g) => g.category === category);
            const dotClass = group ? accentClasses[group.accent].bg : "bg-ink";
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 bg-paper text-ink/70 hover:border-ink/40"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-cream" : dotClass}`} />
                {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 flex flex-wrap justify-center gap-3">
          {filtered.map((skill) => (
            <motion.span
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className={`rounded-full border px-4 py-2 text-sm text-ink ${accentClasses[skill.accent].border} bg-paper`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
