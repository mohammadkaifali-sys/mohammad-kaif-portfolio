import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { certifications } from '@/lib/site-data';

export function CertificationsSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="certifications" delay={0.2}>
      <SectionHeading
        description="Professional learning milestones that show continuous skill development and commitment to the discipline."
        eyebrow="Certifications"
        title="Validated learning"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {certifications.map((certification) => (
          <Card key={certification.title}>
            <CardHeader>
              <CardTitle>{certification.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{certification.issuer}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{certification.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}