"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

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
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const { theme, setTheme, themes } = useTheme();

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
          <div className="relative ml-1 sm:ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="rounded-full p-1 sm:p-2 hover:bg-muted shrink-0"
            >
              <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            
            {themeDropdownOpen && (
              <>
                <div className="fixed inset-0 z-[55]" onClick={() => setThemeDropdownOpen(false)} />
                <div className="absolute top-full right-0 mt-6 w-64 sm:w-80 bg-card/98 backdrop-blur-md rounded-xl shadow-2xl border border-border/50 z-[60] animate-in slide-in-from-top-2 duration-200 ring-1 ring-black/5">
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Choose Theme</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                      {themes.map((themeOption) => (
                        <button
                          key={themeOption.name}
                          onClick={() => {
                            setTheme(themeOption.name);
                            setThemeDropdownOpen(false);
                          }}
                          className={cn(
                            "p-2 sm:p-3 rounded-lg border-2 transition-all duration-200 text-left",
                            theme === themeOption.name
                              ? "border-primary ring-2 ring-primary/20"
                              : "border-border hover:border-primary/50"
                          )}
                          style={{
                            background: `linear-gradient(135deg, ${themeOption.primary} 0%, ${themeOption.accent} 100%)`,
                          }}
                        >
                          <div className="text-xs font-medium" style={{
                            color: themeOption.isDark ? '#FFFFFF' : '#000000'
                          }}>
                            {themeOption.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}