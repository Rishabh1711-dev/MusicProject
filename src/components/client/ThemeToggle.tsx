"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

// Theme Provider Mock/Wrapper
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // This component is a necessary wrapper for layout.tsx but only relies on the 
    // `ThemeToggle` component to manage the 'dark' class on the html element.
    return <>{children}</>;
}


// Theme Toggle Component
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read the stored theme or determine based on system preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    // Apply initial theme classes
    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) {
    // Accessibility: Return a button with aria-label while mounting
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="w-10 h-10 flex items-center justify-center p-2 rounded-full text-foreground/50 hover:text-primary transition-colors"
        disabled
      >
        <Moon className="h-5 w-5 animate-spin" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        "w-10 h-10 flex items-center justify-center p-2 rounded-full border border-transparent transition-all duration-300",
        "bg-card/50 hover:bg-card text-muted-foreground hover:text-primary"
      )}
    >
      <Sun className={cn(
        "h-5 w-5 transition-all duration-500",
        theme === 'dark' ? "rotate-0 scale-100" : "-rotate-90 scale-0"
      )} />
      <Moon className={cn(
        "absolute h-5 w-5 transition-all duration-500",
        theme === 'dark' ? "rotate-90 scale-0" : "rotate-0 scale-100"
      )} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}