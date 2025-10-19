"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/publications" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 p-4">
      <nav className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border border-border shadow-lg' 
          : 'bg-background/80 backdrop-blur-sm'
      } rounded-[2rem]`}>
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer flex items-center">
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
                className="cursor-pointer text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-muted/30"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4 flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-pointer p-2 hover:bg-muted/50 transition-all duration-200"
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
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-background/95 backdrop-blur-md border-l border-border shadow-2xl z-50 animate-in slide-in-from-right duration-300 rounded-l-[2rem]">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-lg font-semibold text-foreground">Menu</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer hover:bg-muted/50 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="cursor-pointer block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-all duration-200"
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
