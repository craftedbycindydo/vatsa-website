"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation refs for scroll-based animations
  const badgeRef = useScrollAnimation<HTMLSpanElement>('fade-up-soft', { delay: 100 });
  const nameRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 200 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 300 });
  const bioRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 400 });
  const buttonsRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 500 });
  const skillsRef = useScrollAnimation<HTMLDivElement>('fade-up-soft', { delay: 600 });


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <Badge ref={badgeRef} variant="outline" className="px-4 py-2 text-sm">
              {portfolioData.personal.title} at {portfolioData.personal.institution}
            </Badge>
            <h1 ref={nameRef} className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>
            <div className="space-y-2">
              <p ref={subtitleRef} className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                AI & Computer Vision Researcher
              </p>
              <p ref={bioRef} className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </div>
          </div>
        </div>

        <div ref={buttonsRef}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-6 py-3" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="px-6 py-3">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full"
              onClick={() => window.open(portfolioData.personal.linkedin, "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Research interests tags */}
        <div 
          ref={skillsRef}
        >
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {portfolioData.research.interests.slice(0, 6).map((interest) => (
              <Badge 
                key={interest} 
                variant="outline" 
                className="px-3 py-1 text-xs text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </Button>
    </section>
  );
}