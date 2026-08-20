import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { accentClasses } from "@/lib/accent";
import ProjectVisual from "./ProjectVisual";

export default function ProjectMedia({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];

  if (project.screenshot) {
    return (
      <div className={`relative h-full w-full ${accent.bg}`}>
        <Image
          src={project.screenshot}
          alt={`${project.name} interface preview`}
          fill
          className="object-contain p-4"
          sizes="(min-width: 640px) 30vw, 90vw"
        />
      </div>
    );
  }

  return (
    <div className={`flex h-full w-full items-center justify-center p-4 text-ink/80 ${accent.bg}`}>
      <ProjectVisual visual={project.visual} />
    </div>
  );
}
