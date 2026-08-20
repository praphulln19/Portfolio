"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { accentHex } from "@/lib/accent";
import type { Accent } from "@/data/portfolio";

export default function ShipDot({
  index,
  total,
  accent,
  scrollYProgress,
}: {
  index: number;
  total: number;
  accent: Accent;
  scrollYProgress: MotionValue<number>;
}) {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;
  const mid = (start + end) / 2;

  const scale = useTransform(scrollYProgress, [start, mid, end], [1, 1.6, 1]);
  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.35, 1, 0.35]);

  return (
    <motion.span
      style={{ scale, opacity, backgroundColor: accentHex[accent] }}
      className="h-1.5 w-1.5 rounded-full"
    />
  );
}
