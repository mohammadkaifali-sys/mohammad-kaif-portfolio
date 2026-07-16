import Link from 'next/link';
import Image from "next/image";
import { ArrowUpRight, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { projects as projectsData } from '@/lib/site-data';
import { cn } from '@/lib/utils';

type Project = (typeof projectsData)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
<Card className="group overflow-hidden rounded-3xl border border-slate-700/50 bg-card/80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
      <div
  className={cn(
    "relative h-60 overflow-hidden rounded-t-3xl bg-gradient-to-br",
    project.accent
  )}
>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_28%)] opacity-80 transition-transform duration-500 group-hover:scale-105" />
    <Image
  src={`/projects/${project.slug}.png`}
  alt={project.name}
  fill
  className="object-cover transition-all duration-700 group-hover:scale-110"
/>
     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="relative flex h-full flex-col justify-between p-6 text-foreground">
          <div className="flex items-start justify-between gap-3">
            <Badge
  className="bg-yellow-400 text-black font-semibold shadow-lg"
  variant="outline"
>
  ⭐ Featured
</Badge>
            <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
              0{project.slug === 'ev-smartbuddy' ? '1' : project.slug === 'grocery-management-system' ? '2' : '3'}
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/70">Case study</p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-border/60 bg-background/75 px-3 py-2 text-xs backdrop-blur">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus</span>
                <span className="mt-1 block font-medium">Insights</span>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/75 px-3 py-2 text-xs backdrop-blur">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Format</span>
                <span className="mt-1 block font-medium">Dashboard</span>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/75 px-3 py-2 text-xs backdrop-blur">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Value</span>
                <span className="mt-1 block font-medium">Clarity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="leading-7 text-muted-foreground">
  {project.description}
</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="text-sm font-medium text-foreground">Features</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Technology Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge
  key={item}
  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105"
>
  {item}
</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-3 sm:flex-row">
        <Button
  asChild
  className="w-full sm:flex-1 border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition-all duration-300"
  variant="outline"
>
          <Link href={project.githubHref}>
            <Github className="h-4 w-4" /> 💻 GitHub
          </Link>
        </Button>
      <Button
  asChild
  className="w-full sm:flex-1 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300"
>
          <Link href={project.liveHref}>
            🚀 Live Demo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}