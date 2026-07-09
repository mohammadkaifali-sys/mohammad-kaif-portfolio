"use client";

import Link from 'next/link';
import { Menu, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navigationItems, siteConfig } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navigationItems
      .map((item) => item.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-semibold tracking-tight text-foreground transition hover:opacity-90" href="#home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground text-background shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">
            {siteConfig.name}
            <span className="block text-xs font-normal text-muted-foreground">{siteConfig.title}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/70 px-2 py-1 backdrop-blur xl:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground',
                activeSection === item.href.replace('#', '') && 'bg-foreground text-background hover:text-background'
              )}
              href={item.href}
              aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button aria-label="Open menu" size="icon" variant="outline" type="button">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[92vw] sm:w-[420px]">
              <SheetHeader className="mb-6 text-left">
                <SheetTitle>{siteConfig.name}</SheetTitle>
                <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    className={cn(
                      'rounded-2xl border border-border/60 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent',
                      activeSection === item.href.replace('#', '') && 'border-foreground/20 bg-foreground text-background hover:bg-foreground hover:text-background'
                    )}
                    href={item.href}
                    aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}