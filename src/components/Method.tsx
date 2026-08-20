"use client";

import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import { methodSteps } from "@/data/portfolio";

export default function Method() {
  return (
    <section id="method" className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTag accent="signal" tone="light">
          How I build
        </SectionTag>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
          I build with AI. Nothing ships that I haven&apos;t tested myself.
        </h2>

        <div className="relative mt-20">
          <svg
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-10 hidden h-16 w-full text-cream/15 md:block"
            aria-hidden="true"
          >
            <path
              d="M0 40 C 120 0, 240 80, 360 40 C 480 0, 600 80, 720 40 C 840 0, 960 80, 1080 40 C 1140 20, 1170 20, 1200 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative grid gap-6 md:grid-cols-5">
            {methodSteps.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-5"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-cream/50">
                  {step.index} · {String(i + 1).padStart(2, "0")}/05
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{step.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
