import ParticlesBackground from "@/components/ParticlesBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ArticlesSection from "@/components/ArticlesSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <SkillsSection />
        <ArticlesSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Smith. Built with React, Framer Motion & Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
