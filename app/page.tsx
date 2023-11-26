import AboutSection from "@/components/AboutSection";
import AppHeader from "@/components/AppHeader";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
}
