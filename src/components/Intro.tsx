import SectionTag from "./SectionTag";
import CircleStat from "./CircleStat";
import { stats } from "@/data/portfolio";

export default function Intro() {
  return (
    <section className="bg-cream px-6 pb-24 pt-16 sm:pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTag accent="volt">The short version</SectionTag>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          I build AI systems and full-stack products that{" "}
          <span className="relative inline-block">
            ship.
            <svg
              viewBox="0 0 120 14"
              className="absolute -bottom-2 left-0 h-3 w-full text-volt"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C 20 2, 40 12, 60 7 C 80 2, 100 12, 118 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg">
          {"No half-finished repos. Every project below is trained, deployed, or both."}
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-10 sm:gap-16">
        {stats.map((stat) => (
          <CircleStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
