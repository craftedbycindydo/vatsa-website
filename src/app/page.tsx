"use client";

import { useEffect } from "react";
import { FloatingNav } from "@/components/layout/FloatingNav";
import Hero from "@/components/sections/Hero";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation from other pages
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready and animations are set up
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    } else {
      // If no hash, scroll to top to ensure we start fresh
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <FloatingNav />
      
      <div className="relative">
        <Hero />
        <ExperienceSection />
        <PublicationsSection />
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
