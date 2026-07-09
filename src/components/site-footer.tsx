import { Github, Linkedin, Mail } from 'lucide-react';

import { siteConfig } from '@/lib/site-data';
import { Button } from '@/components/ui/button';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {siteConfig.title} based in {siteConfig.location}. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.
          </p>
          <p className="text-sm text-muted-foreground">
            <a className="transition hover:text-foreground" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{' '}
            ·{' '}
            <a className="transition hover:text-foreground" href={`tel:${siteConfig.phone}`}>
              {siteConfig.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="sm" variant="ghost">
            <a aria-label="Email Mohammad Kaif Ali" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" /> Email
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <a aria-label="Open LinkedIn profile" href={siteConfig.linkedin} rel="noreferrer" target="_blank">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <a aria-label="Open GitHub profile" href={siteConfig.github} rel="noreferrer" target="_blank">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}