import ProjectCard from "./ProjectCard";
import "./ProjectsSection.scss";

import { projectsData } from "@/lib/projectsData";

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Ostatnie osobiste projekty</h2>
      <div className="content">
        {projectsData.map((project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
