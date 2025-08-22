"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeColors = 
  | 'ocean-light' | 'ocean-dark'
  | 'sunset-light' | 'sunset-dark'
  | 'forest-light' | 'forest-dark'
  | 'lavender-light' | 'lavender-dark'
  | 'coral-light' | 'coral-dark'
  | 'midnight-light' | 'midnight-dark'
  | 'rose-gold-light' | 'rose-gold-dark'
  | 'emerald-light' | 'emerald-dark'
  | 'obsidian' | 'pearl'
  | 'carbon' | 'ivory';

interface ThemeContextType {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
  themes: Array<{
    name: ThemeColors;
    label: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    isDark: boolean;
  }>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themeConfig = [
  // Light themes
  {
    name: 'ocean-light' as ThemeColors,
    label: 'Ocean Light',
    primary: '#0EA5E9',
    secondary: '#0F172A',
    accent: '#38BDF8',
    background: '#F8FAFC',
    foreground: '#0F172A',
    isDark: false
  },
  {
    name: 'sunset-light' as ThemeColors,
    label: 'Sunset Light',
    primary: '#F97316',
    secondary: '#431407',
    accent: '#FB923C',
    background: '#FFFBEB',
    foreground: '#431407',
    isDark: false
  },
  {
    name: 'forest-light' as ThemeColors,
    label: 'Forest Light',
    primary: '#059669',
    secondary: '#064E3B',
    accent: '#10B981',
    background: '#F0FDF4',
    foreground: '#064E3B',
    isDark: false
  },
  {
    name: 'lavender-light' as ThemeColors,
    label: 'Lavender Light',
    primary: '#8B5CF6',
    secondary: '#3C1361',
    accent: '#A78BFA',
    background: '#FAF5FF',
    foreground: '#3C1361',
    isDark: false
  },
  {
    name: 'pearl' as ThemeColors,
    label: 'Pearl White',
    primary: '#6B7280',
    secondary: '#111827',
    accent: '#9CA3AF',
    background: '#FFFFFF',
    foreground: '#111827',
    isDark: false
  },
  {
    name: 'ivory' as ThemeColors,
    label: 'Warm Ivory',
    primary: '#92400E',
    secondary: '#451A03',
    accent: '#D97706',
    background: '#FFFDF7',
    foreground: '#451A03',
    isDark: false
  },
  // Dark themes
  {
    name: 'ocean-dark' as ThemeColors,
    label: 'Ocean Dark',
    primary: '#38BDF8',
    secondary: '#1E293B',
    accent: '#0EA5E9',
    background: '#0F172A',
    foreground: '#F8FAFC',
    isDark: true
  },
  {
    name: 'sunset-dark' as ThemeColors,
    label: 'Sunset Dark',
    primary: '#FB923C',
    secondary: '#44403C',
    accent: '#F97316',
    background: '#1C1917',
    foreground: '#FAFAF9',
    isDark: true
  },
  {
    name: 'forest-dark' as ThemeColors,
    label: 'Forest Dark',
    primary: '#34D399',
    secondary: '#14532D',
    accent: '#10B981',
    background: '#052E16',
    foreground: '#F0FDF4',
    isDark: true
  },
  {
    name: 'lavender-dark' as ThemeColors,
    label: 'Lavender Dark',
    primary: '#A78BFA',
    secondary: '#4C1D95',
    accent: '#8B5CF6',
    background: '#1E1B4B',
    foreground: '#FAF5FF',
    isDark: true
  },
  {
    name: 'obsidian' as ThemeColors,
    label: 'Obsidian Black',
    primary: '#F3F4F6',
    secondary: '#374151',
    accent: '#D1D5DB',
    background: '#111827',
    foreground: '#F9FAFB',
    isDark: true
  },
  {
    name: 'carbon' as ThemeColors,
    label: 'Carbon Dark',
    primary: '#60A5FA',
    secondary: '#1F2937',
    accent: '#93C5FD',
    background: '#030712',
    foreground: '#F8FAFC',
    isDark: true
  }
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeColors>('ocean-light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeColors;
    if (savedTheme && themeConfig.find(t => t.name === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
