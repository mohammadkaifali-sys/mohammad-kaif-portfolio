import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/site-data';

export function SkillsSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="skills" delay={0.1}>
      <SectionHeading
        description="A practical toolkit covering the fundamentals recruiters expect from a data analyst portfolio."
        eyebrow="Skills"
        title="Tools and capabilities"
      />
      <Card className="mt-10">
        <CardContent className="flex flex-wrap gap-3 p-6 sm:p-8">
          {skills.map((skill) => (
            <Badge key={skill} className="px-4 py-2 text-sm" variant="subtle">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}