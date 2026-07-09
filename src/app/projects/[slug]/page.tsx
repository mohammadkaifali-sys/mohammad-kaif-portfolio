import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/site-data';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: project.name,
    description: project.description
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild className="mb-8" variant="ghost">
        <Link href="/#projects">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </Button>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden">
          <div className={`h-72 bg-gradient-to-br ${project.accent}`}>
            <div className="flex h-full items-center justify-center p-8 text-center">
              <div>
                <Badge className="bg-background/90 text-foreground" variant="outline">Live Demo Preview</Badge>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">{project.name}</h1>
                <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium text-foreground">Features</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Technology stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} className="px-3 py-1" variant="subtle">{item}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground" id="implementation">
              <p>This route acts as a detailed case study view for the portfolio and makes the GitHub action button land on a real, useful source-style page inside the app.</p>
              <p>The layout keeps the same visual language as the main portfolio so the recruiter experience feels coherent and polished across navigation, cards, and project exploration.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1" variant="outline">
                <Link href={project.githubHref}>
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href={project.liveHref}>
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}