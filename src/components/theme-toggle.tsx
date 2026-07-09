"use client";

import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      aria-label="Toggle theme"
      className="relative overflow-hidden"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      size="icon"
      variant="outline"
      type="button"
    >
      <SunMedium className="h-4 w-4 transition-all dark:rotate-90 dark:scale-0" />
      <MoonStar className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}