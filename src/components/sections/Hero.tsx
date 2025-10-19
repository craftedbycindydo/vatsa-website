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
  const buttonsRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 400 });
  const skillsRef = useScrollAnimation<HTMLDivElement>('fade-up-soft', { delay: 500 });


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
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-3 sm:space-y-4">
            <Badge ref={badgeRef} variant="outline" className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm mb-6 sm:mb-8">
              {portfolioData.personal.title} at {portfolioData.personal.institution}
            </Badge>
            <h1 ref={nameRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>
            <div className="space-y-2 sm:space-y-3">
              <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Researcher & Developer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto">
                Passionate about advancing technology through research and development, with expertise in AI, machine learning, and software engineering.
              </p>
            </div>
          </div>
        </div>

        <div ref={buttonsRef}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="cursor-pointer px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => {
              window.open(`mailto:${portfolioData.personal.email}`, '_blank');
            }}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="cursor-pointer px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto border-gray-300 dark:border-gray-700 hover:bg-primary hover:text-primary-foreground hover:border-primary" onClick={() => {
              window.open(portfolioData.personal.cv, '_blank');
            }}>
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
          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="cursor-pointer h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="cursor-pointer h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              onClick={() => window.open(portfolioData.personal.linkedin, "_blank")}
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="cursor-pointer h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              onClick={() => {
                window.open(`mailto:${portfolioData.personal.email}`, '_blank');
              }}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Research interests tags */}
        <div 
          ref={skillsRef}
        >
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto px-2">
            {portfolioData.research.interests.slice(0, 6).map((interest) => (
              <Badge 
                key={interest} 
                variant="outline" 
                className="cursor-pointer px-2 py-1 sm:px-3 sm:py-1 text-xs text-muted-foreground border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
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
        className="cursor-pointer absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </Button>
    </section>
  );
}