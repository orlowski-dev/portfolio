import "./TechnologiesSection.scss";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  return (
    <section className="technologies-section">
      <h2>Technologie i narzędzia</h2>
      <div className="content">
        <TechnologyCard name="HTML5" logo="/technologies/html5.svg" level={4} />
        <TechnologyCard name="CSS3" logo="/technologies/css3.svg" level={4} />
        <TechnologyCard
          name="Sass/SCSS"
          logo="/technologies/sass.svg"
          level={3}
        />
        <TechnologyCard
          name="JavaScript"
          logo="/technologies/js.svg"
          level={3}
        />
        <TechnologyCard
          name="NextJS"
          logo="/technologies/next-js.svg"
          level={2}
        />
        <TechnologyCard
          name="ReactJS"
          logo="/technologies/react.svg"
          level={3}
        />
        <TechnologyCard
          name="Tailwindcss"
          logo="/technologies/tailwindcss.svg"
          level={3}
        />
        <TechnologyCard name="Git" logo="/technologies/git.svg" />
        <TechnologyCard name="Figma" logo="/technologies/figma.svg" />
      </div>
    </section>
  );
}
