import { AnimatedSection } from '@/components/animated-section';
import { SectionHeading } from '@/components/section-heading';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { aboutContent } from '@/lib/site-data';

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      delay={0.05}
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Badge */}
      <div className="mb-5 flex justify-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          👨‍💻 About Me
        </span>
      </div>

      <SectionHeading
        eyebrow="About"
        title="Who I Am"
        description="A passionate aspiring Data Analyst focused on solving business problems through data, dashboards, and automation."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {/* Summary */}
        <Card className="border border-slate-700/50 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl">
          <CardHeader>
            <CardTitle>💡 Professional Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-7 text-muted-foreground">
              {aboutContent.summary}
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="border border-slate-700/50 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl">
          <CardHeader>
            <CardTitle>🎓 Education</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-7 text-muted-foreground">
              {aboutContent.education}
            </p>
          </CardContent>
        </Card>

        {/* Objective */}
        <Card className="border border-slate-700/50 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl">
          <CardHeader>
            <CardTitle>🚀 Career Objective</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-7 text-muted-foreground">
              {aboutContent.objective}
            </p>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}