import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutContent } from '@/lib/site-data';

export function AboutSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="about" delay={0.05}>
      <SectionHeading
        description="A concise professional summary built for recruiters who want to understand skills, intent, and growth trajectory quickly."
        eyebrow="About"
        title="A focused portfolio narrative"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-7 text-foreground">{aboutContent.summary}</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-7 text-foreground">{aboutContent.education}</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-7 text-foreground">{aboutContent.objective}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}