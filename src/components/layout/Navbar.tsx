"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  return (
    <header className="sticky top-0 w-full glass border-b border-border/30 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-foreground transition-colors duration-200">
                Dr. Vatsa S. Patel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-muted/30"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4 flex items-center relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50"
              >
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline text-sm">Theme</span>
              </Button>
              
              {themeDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setThemeDropdownOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-64 bg-card rounded-lg shadow-lg border border-border z-50">
                    <div className="p-3">
                      <h3 className="text-sm font-semibold mb-3">Choose Theme</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {themes.map((themeOption) => (
                          <button
                            key={themeOption.name}
                            onClick={() => {
                              setTheme(themeOption.name);
                              setThemeDropdownOpen(false);
                            }}
                            className={`p-2 rounded-md text-left text-xs transition-all ${
                              theme === themeOption.name
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'hover:bg-muted/50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div 
                                className="w-3 h-3 rounded-full border border-border"
                                style={{ backgroundColor: themeOption.primary }}
                              />
                              <div 
                                className="w-2 h-2 rounded-full border border-border"
                                style={{ backgroundColor: themeOption.accent }}
                              />
                            </div>
                            <div className="font-medium">{themeOption.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 hover:bg-muted/50"
            >
              <Palette className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 hover:bg-muted/50 transition-all duration-200"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full glass shadow-2xl z-50 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold text-foreground">Menu</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-muted/50 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
