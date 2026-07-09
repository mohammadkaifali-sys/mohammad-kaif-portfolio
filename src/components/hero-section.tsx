import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';

import { siteConfig } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';

const quickStats = [
  { value: '10+', label: 'Tools and techniques' },
  { value: '3', label: 'Featured projects' },
  { value: '100%', label: 'Responsive layout' }
];

export function HeroSection() {
  return (
    <AnimatedSection className="relative overflow-hidden pt-10 sm:pt-16" id="home">
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-16">
        <div className="flex flex-col justify-center">
          <Badge className="mb-6 w-fit gap-2 border-border/60 bg-card/70 px-4 py-2 text-sm text-foreground shadow-soft" variant="outline">
            <Sparkles className="h-4 w-4" /> Portfolio
          </Badge>
          <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Mohammad Kaif Ali
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-primary sm:text-xl">Aspiring Data Analyst</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I turn raw data into recruiter-friendly insights, clean dashboards, and clear narratives. This portfolio shows the skills, projects, and presentation quality I bring to modern data work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="rounded-full border border-border/60 bg-card/70 px-3 py-2">{siteConfig.location}</span>
            <span className="rounded-full border border-border/60 bg-card/70 px-3 py-2">{siteConfig.email}</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={siteConfig.resumePath}>
                <Download className="h-4 w-4" /> Download Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Button asChild size="sm" variant="ghost">
              <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href={siteConfig.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="overflow-hidden border-border/70 bg-card/75 shadow-soft backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_34%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">Data portfolio</p>
                    <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight">Structured, clear, and built to impress recruiters.</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {quickStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur">
                        <p className="text-2xl font-semibold">{stat.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/70 shadow-soft backdrop-blur-xl">
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Core strengths</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>• Insight-led analysis</li>
                  <li>• Clean dashboard storytelling</li>
                  <li>• Data handling and presentation</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Focus areas</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>• Python, SQL, Excel</li>
                  <li>• Power BI visual reporting</li>
                  <li>• Reliable, polished delivery</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}