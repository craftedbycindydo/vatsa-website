"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const isDark = theme === 'ocean-dark';
  
  const toggleTheme = () => {
    setTheme(isDark ? 'ocean-light' : 'ocean-dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background hover:scale-105"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      style={{
        background: isDark 
          ? 'linear-gradient(145deg, #3B82F6, #2563EB)' 
          : 'linear-gradient(145deg, #60A5FA, #3B82F6)',
        boxShadow: isDark 
          ? '0 4px 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
          : '0 4px 15px rgba(96, 165, 250, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
      }}
    >
      <span
        className={`pointer-events-none inline-flex h-4 w-4 transform rounded-full bg-white shadow-lg transition-all duration-300 items-center justify-center ${
          isDark ? 'translate-x-5' : 'translate-x-0.5'
        }`}
        style={{
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          {isDark ? (
            <Moon className="h-2.5 w-2.5 text-blue-700" strokeWidth={2.5} />
          ) : (
            <Sun className="h-2.5 w-2.5 text-blue-600" strokeWidth={2.5} />
          )}
        </div>
      </span>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, transparent 70%)',
          opacity: 0.8
        }}
      />
    </button>
  );
}
