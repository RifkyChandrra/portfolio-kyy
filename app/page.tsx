// /app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="snap-container">
      <section id="home" className="snap-section">
        <HeroSection />
      </section>

      <section id="about" className="snap-section">
        <AboutSection />
      </section>

      <section id="projects" className="snap-section">
        <ProjectsSection />
      </section>

      <section id="contact" className="snap-section">
        <ContactSection />
      </section>
    </div>
  );
}
