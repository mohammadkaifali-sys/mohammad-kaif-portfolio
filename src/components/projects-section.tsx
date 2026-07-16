import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/lib/site-data';

export function ProjectsSection() {
  return (
    <AnimatedSection
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      id="projects"
      delay={0.15}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Badge */}
      <div className="mb-5 flex justify-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          🚀 Portfolio Highlights
        </span>
      </div>

      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        description="A collection of my best projects demonstrating expertise in Data Analytics, Python, SQL, Power BI and Dashboard Development."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}