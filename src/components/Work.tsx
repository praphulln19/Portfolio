"use client";

import { useRef } from "react";
import SectionTag from "./SectionTag";
import ShipCard from "./ShipCard";
import ShipDot from "./ShipDot";
import { projects } from "@/data/portfolio";
import { useScrollProgress } from "@/lib/useScrollProgress";

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress(containerRef);

  const liveCount = projects.filter((p) => p.status === "Live").length;

  return (
    <section id="work" className="bg-ink">
      {/* +1 viewport: a sticky child needs one full viewport of scroll room just to
          release, so the container needs N+1 viewports for N full-viewport segments
          of actual pinned-progress distance. */}
      <div ref={containerRef} style={{ height: `${(projects.length + 1) * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 pt-28 text-center sm:pt-32">
            <SectionTag accent="pulse" tone="light">
              The work
            </SectionTag>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
              {projects.length} builds · {liveCount} live
            </h2>
          </div>

          {projects.map((project, i) => (
            <ShipCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}

          <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex items-center justify-center gap-3">
            {projects.map((project, i) => (
              <ShipDot
                key={project.id}
                index={i}
                total={projects.length}
                accent={project.accent}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
