import Link from "next/link";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.scss";

import { projectsData } from "@/lib/projectsData";
import React from "react";

export default function ProjectsSection({
  title,
  max,
  extra,
}: {
  title: string;
  max?: number;
  extra?: React.ReactElement;
}) {
  return (
    <section className="projects-section">
      <h2>{title}</h2>
      <div className="content">
        {projectsData.map((project, index: number) => {
          if (max && index >= max) return;
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
      {extra || undefined}
    </section>
  );
}
