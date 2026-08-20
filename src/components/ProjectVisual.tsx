import type { Project } from "@/data/portfolio";

export default function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  switch (visual) {
    case "finance":
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full">
          <g opacity={0.9}>
            {[28, 48, 36, 64, 52, 78].map((h, i) => (
              <rect
                key={i}
                x={16 + i * 28}
                y={100 - h}
                width={16}
                height={h}
                rx={3}
                fill="currentColor"
                opacity={0.35 + i * 0.08}
              />
            ))}
          </g>
          <path
            d="M16 70 L44 50 L72 62 L100 34 L128 44 L156 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "glass":
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full">
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={20}
              y={16 + i * 32}
              width={160 - i * 20}
              height={22}
              rx={11}
              fill="currentColor"
              opacity={0.25 + i * 0.2}
            />
          ))}
          <circle cx={34} cy={27} r={5} fill="currentColor" opacity={0.9} />
          <circle cx={34} cy={59} r={5} fill="none" stroke="currentColor" strokeWidth={2} />
          <circle cx={34} cy={91} r={5} fill="none" stroke="currentColor" strokeWidth={2} />
        </svg>
      );

    case "invoice":
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full">
          <rect x={30} y={10} width={110} height={100} rx={6} fill="currentColor" opacity={0.12} />
          <rect x={44} y={26} width={70} height={8} rx={4} fill="currentColor" opacity={0.5} />
          {[46, 60, 74, 88].map((y, i) => (
            <rect key={i} x={44} y={y} width={82 - (i % 2) * 16} height={5} rx={2.5} fill="currentColor" opacity={0.3} />
          ))}
          <circle cx={158} cy={80} r={22} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.7} />
          <path d="M148 80 L155 87 L169 71" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />
        </svg>
      );

    case "chat":
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full">
          <rect x={20} y={20} width={100} height={30} rx={15} fill="currentColor" opacity={0.25} />
          <rect x={70} y={58} width={110} height={30} rx={15} fill="currentColor" opacity={0.5} />
          <rect x={20} y={96} width={80} height={24} rx={12} fill="currentColor" opacity={0.25} />
          <path
            d="M150 30 v-14 m0 0 l-8 8 m8-8 l8 8"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "scan":
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={16 + col * 21}
                y={10 + row * 20}
                width={16}
                height={16}
                rx={2}
                fill="currentColor"
                opacity={0.12}
              />
            ))
          )}
          <circle cx={100} cy={60} r={26} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.85} />
          <circle cx={100} cy={60} r={3} fill="currentColor" />
        </svg>
      );

    default:
      return null;
  }
}
