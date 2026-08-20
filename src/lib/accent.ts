import type { Accent } from "@/data/portfolio";

export const accentClasses: Record<
  Accent,
  { bg: string; text: string; border: string; fill: string }
> = {
  flare: { bg: "bg-flare", text: "text-flare", border: "border-flare", fill: "fill-flare" },
  volt: { bg: "bg-volt", text: "text-volt", border: "border-volt", fill: "fill-volt" },
  signal: { bg: "bg-signal", text: "text-signal", border: "border-signal", fill: "fill-signal" },
  pulse: { bg: "bg-pulse", text: "text-pulse", border: "border-pulse", fill: "fill-pulse" },
};

export const accentHex: Record<Accent, string> = {
  flare: "#FF6B4A",
  volt: "#2F6FED",
  signal: "#FFC53D",
  pulse: "#FF3D7A",
};
