import Image from "next/image";
import "./ProjectCard.scss";
import type { IProjectData } from "@/lib/projectsData";
import Link from "next/link";
import { FaC, FaCode, FaG, FaGlobe } from "react-icons/fa6";

export default function ProjectCard({
  title,
  desc,
  imageUrl,
  techs,
  prevLink,
  sourceLink,
}: IProjectData) {
  return (
    <article className="project-card">
      <div>
        <Image
          src={imageUrl}
          width={1280}
          height={720}
          alt={title + " preview image"}
        />
      </div>
      <div className="pc-content">
        <h3>{title}</h3>
        {desc || undefined}
        <p className="techs">
          {techs.map((tech, index: number) => (
            <span key={index}>{tech}</span>
          ))}
        </p>
        <div className="links">
          <Link href={sourceLink} target="_blank">
            <FaCode /> GitHub
          </Link>
          <Link href={prevLink} target="_blank">
            <FaGlobe /> Podgląd
          </Link>
        </div>
      </div>
    </article>
  );
}
