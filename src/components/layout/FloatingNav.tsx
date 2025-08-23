"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface NavigationItem {
  name: string;
  href: string;
  mobile: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home", mobile: "Home" },
  { name: "About", href: "#about", mobile: "About" },
  { name: "Experience", href: "#experience", mobile: "Work" },
  { name: "Research", href: "#research", mobile: "Papers" },
  { name: "Projects", href: "#projects", mobile: "Projects" },
  { name: "Contact", href: "#contact", mobile: "Contact" },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      let current = sections[0]; // Default to first section (home)
      
      // Find the section that's most in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some tolerance)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
          // If we're at the top of the page, highlight home
          if (currentScrollY < 100) {
            current = "home";
            break;
          }
          // If section top is close to viewport top, it's active
          if (rect.top <= 150 && rect.bottom > 150) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    // Call immediately to set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Responsive Navigation */}
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out max-w-[95vw] rounded-full p-2 sm:p-3",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border border-border shadow-lg"
            : "bg-background/60 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center space-x-0.5 sm:space-x-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={activeSection === item.href.substring(1) ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "relative transition-all duration-200 rounded-full text-xs sm:text-sm px-1.5 py-1 sm:px-4 sm:py-2 min-w-0 shrink-0",
                activeSection === item.href.substring(1)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="hidden sm:inline whitespace-nowrap">{item.name}</span>
              <span className="sm:hidden text-xs font-medium whitespace-nowrap">{item.mobile}</span>
            </Button>
          ))}
          
          {/* Theme Toggle */}
          <div className="ml-1 sm:ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}