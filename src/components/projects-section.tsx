import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/lib/site-data';

export function ProjectsSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="projects" delay={0.15}>
      <SectionHeading
        description="Three featured projects presented like compact case studies so recruiters can scan the value fast."
        eyebrow="Projects"
        title="Selected analytics work"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}