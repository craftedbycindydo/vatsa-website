"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
