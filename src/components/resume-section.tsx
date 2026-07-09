import Link from 'next/link';
import { Download, FileText } from 'lucide-react';

import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { resumeHighlights, siteConfig } from '@/lib/site-data';

export function ResumeSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="resume" delay={0.3}>
      <SectionHeading
        description="A fast path to the resume, plus a few concise reasons a recruiter can trust the profile."
        eyebrow="Resume"
        title="Download and review"
      />
      <Card className="mt-10">
        <CardContent className="grid gap-8 p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Resume Preview</h3>
                <p className="text-sm text-muted-foreground">Recruiter-friendly format with a clean, concise structure.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              {resumeHighlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </div>
          <Button asChild size="lg">
            <Link href={siteConfig.resumePath}>
              <Download className="h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}