import { FloatingNav } from "@/components/layout/FloatingNav";
import Hero from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingNav />
      
      <div className="relative">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <PublicationsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Dr. Vatsa S. Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
