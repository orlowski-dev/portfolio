import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Link from "next/link";
import "@/components/App.scss";
import { FaArrowRight } from "react-icons/fa6";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function App() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection
        max={3}
        title="Ostatnie osobiste projekty"
        extra={
          <div className="show-m-container">
            <Link href="/projects">
              <FaArrowRight /> Wszystkie projekty
            </Link>
          </div>
        }
      />
      <TechnologiesSection />
    </main>
  );
}
