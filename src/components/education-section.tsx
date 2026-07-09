import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { education } from '@/lib/site-data';

export function EducationSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="education" delay={0.25}>
      <SectionHeading
        description="Education is presented as a growth narrative, showing both current study and the habits behind it."
        eyebrow="Education"
        title="Learning path and progression"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {education.map((entry) => (
          <Card key={entry.degree}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <CardTitle>{entry.degree}</CardTitle>
                <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">{entry.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{entry.school}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-foreground">{entry.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}