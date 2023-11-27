import Image from "next/image";

export default function TechnologyCard({
  logo,
  name,
  level,
}: {
  logo: string;
  name: string;
  level?: number;
}) {
  return (
    <article className="technology-card">
      <Image src={logo} alt={name + " icon"} width={48} height={48} />
      <h3>{name}</h3>
      <p>
        <span className={"level-" + level}></span>
      </p>
    </article>
  );
}
