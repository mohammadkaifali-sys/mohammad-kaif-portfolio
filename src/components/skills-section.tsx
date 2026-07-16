import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/site-data';

export function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      delay={0.1}
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Top Badge */}
      <div className="mb-5 flex justify-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          💻 Tech Stack
        </span>
      </div>

      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="Technologies and tools I use to build data-driven applications, analyze datasets, and create interactive dashboards."
      />

      <Card className="mt-12 border border-slate-700/50 bg-card/70 shadow-xl backdrop-blur-xl">
        <CardContent className="flex flex-wrap justify-center gap-4 p-8">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}