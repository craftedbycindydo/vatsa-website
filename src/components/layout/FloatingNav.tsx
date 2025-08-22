"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
          if (window.scrollY < 100) {
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
          "hidden md:block",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border border-border shadow-lg"
            : "bg-background/60 backdrop-blur-sm"
        )}
        style={{
          borderRadius: "2rem",
          padding: "0.5rem",
        }}
      >
        <div className="flex items-center space-x-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={activeSection === item.href.substring(1) ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "relative transition-all duration-200 rounded-full px-4 py-2",
                activeSection === item.href.substring(1)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Button>
          ))}
          
          {/* Theme Toggle */}
          <div className="relative ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="rounded-full p-2 hover:bg-muted"
            >
              <Palette className="h-4 w-4" />
            </Button>
            
            {themeDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setThemeDropdownOpen(false)} />
                <div className="absolute top-full right-0 mt-2 w-80 bg-card rounded-xl shadow-2xl border z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="p-4">
                    <h3 className="text-sm font-medium mb-3">Choose Theme</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {themes.map((themeOption) => (
                        <button
                          key={themeOption.name}
                          onClick={() => {
                            setTheme(themeOption.name);
                            setThemeDropdownOpen(false);
                          }}
                          className={cn(
                            "p-3 rounded-lg border-2 transition-all duration-200 text-left",
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

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full transition-all duration-300",
                isScrolled
                  ? "bg-background/80 backdrop-blur-md border border-border shadow-lg"
                  : "bg-background/60 backdrop-blur-sm"
              )}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={activeSection === item.href.substring(1) ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-left"
                >
                  {item.name}
                </Button>
              ))}
              
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Theme</div>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.name}
                      onClick={() => {
                        setTheme(themeOption.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "p-2 rounded-lg border-2 transition-all duration-200 text-left",
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
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}