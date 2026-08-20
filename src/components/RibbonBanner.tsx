"use client";

import { useReducedMotion } from "framer-motion";

const LINE = "6 PROJECTS SHIPPED  ·  AI/ML + FULL-STACK  ·  KOLKATA, INDIA  ·  2 CERTIFICATIONS  ·  ";

export default function RibbonBanner() {
  const reduceMotion = useReducedMotion();
  const repeated = LINE.repeat(6);

  return (
    <div className="w-full select-none py-6 sm:py-10">
      <svg viewBox="0 0 2200 220" className="h-[110px] w-full sm:h-[160px]" aria-hidden="true">
        <defs>
          <path
            id="ribbon-path"
            d="M -200 130 C 350 10 700 240 1250 120 C 1700 30 2000 220 2450 110"
            fill="none"
          />
        </defs>
        <path
          d="M -200 130 C 350 10 700 240 1250 120 C 1700 30 2000 220 2450 110"
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth={72}
          strokeLinecap="round"
        />
        <text
          fontFamily="var(--font-mono)"
          fontSize="30"
          fontWeight={600}
          letterSpacing="1"
          fill="var(--color-ink)"
        >
          <textPath href="#ribbon-path" startOffset="0%">
            {repeated}
            {!reduceMotion && (
              <animate
                attributeName="startOffset"
                from="0%"
                to="-83.33%"
                dur="26s"
                repeatCount="indefinite"
              />
            )}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
