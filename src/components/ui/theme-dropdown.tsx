"use client";

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Check, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeDropdown() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const lightThemes = themes.filter(t => !t.isDark);
  const darkThemes = themes.filter(t => t.isDark);
  const currentTheme = themes.find(t => t.name === theme);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50 hover:text-foreground transition-all duration-200"
      >
        <Palette className="h-4 w-4" style={{ color: currentTheme?.primary }} />
        <span className="hidden sm:inline text-sm font-medium">Theme</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-80 bg-card rounded-xl shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Palette className="h-4 w-4" style={{ color: currentTheme?.primary }} />
                Choose Your Theme
              </h3>
              
              {/* Light Themes */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Light Themes</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {lightThemes.map((themeOption) => (
                    <ThemeButton
                      key={themeOption.name}
                      themeOption={themeOption}
                      isSelected={theme === themeOption.name}
                      onClick={() => {
                        setTheme(themeOption.name);
                        setIsOpen(false);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Dark Themes */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Dark Themes</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {darkThemes.map((themeOption) => (
                    <ThemeButton
                      key={themeOption.name}
                      themeOption={themeOption}
                      isSelected={theme === themeOption.name}
                      onClick={() => {
                        setTheme(themeOption.name);
                        setIsOpen(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface ThemeOption {
  name: string;
  label: string;
  primary: string;
  accent: string;
  background: string;
  isDark: boolean;
}

function ThemeButton({ themeOption, isSelected, onClick }: {
  themeOption: ThemeOption;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative p-3 rounded-lg border transition-all duration-200 text-left group overflow-hidden ${
        isSelected 
          ? 'border-primary/50 ring-2 ring-primary/20' 
          : 'border-border/30 hover:border-primary/30'
      }`}
      style={{
        backgroundColor: isSelected ? `${themeOption.primary}08` : undefined
      }}
    >
      {/* Background gradient preview */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-200"
        style={{
          background: `linear-gradient(135deg, ${themeOption.primary}20 0%, ${themeOption.accent}20 100%)`
        }}
      />
      
      {/* Color dots */}
      <div className="relative z-10">
        <div className="flex items-center gap-1.5 mb-2">
          <div 
            className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
            style={{ backgroundColor: themeOption.primary }}
          />
          <div 
            className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
            style={{ backgroundColor: themeOption.accent }}
          />
          <div 
            className="w-2 h-2 rounded-full border border-white/20 shadow-sm"
            style={{ backgroundColor: themeOption.background }}
          />
        </div>
        <span className="text-xs font-medium block truncate" style={{
          color: themeOption.isDark ? '#FFFFFF' : '#000000',
          textShadow: themeOption.isDark ? 'none' : '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          {themeOption.label}
        </span>
        {isSelected && (
          <Check 
            className="absolute top-2 right-2 h-3.5 w-3.5 drop-shadow-sm" 
            style={{ color: themeOption.primary }} 
          />
        )}
      </div>
    </button>
  );
}