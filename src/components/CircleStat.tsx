"use client";

import { motion } from "framer-motion";
import type { Accent } from "@/data/portfolio";
import { accentHex } from "@/lib/accent";

export default function CircleStat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: Accent;
}) {
  const color = accentHex[accent];

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
        <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full">
          <motion.path
            d="M 70 12 C 104 10 128 34 129 68 C 130 103 106 129 70 129 C 36 130 11 105 11 70 C 10 36 33 14 70 12 Z"
            fill="none"
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </svg>
        <span className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          {value}
        </span>
      </div>
      <p className="max-w-[10rem] text-sm text-ink-muted">{label}</p>
    </div>
  );
}
