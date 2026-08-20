"use client";

import { useEffect, type RefObject } from "react";
import { useMotionValue } from "framer-motion";

/**
 * framer-motion 13's useScroll() hands off to the native CSS ScrollTimeline
 * API when given a target ref, and that path doesn't track programmatic /
 * headless scrolling reliably. This replicates its "start start" / "end end"
 * offset math with a plain scroll listener instead.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      progress.set(Math.min(1, Math.max(0, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, progress]);

  return progress;
}
