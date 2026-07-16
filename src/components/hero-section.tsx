import Image from "next/image";
import Link from 'next/link';

import { ArrowRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';

import { siteConfig } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';

const quickStats = [
  { value: '10+', label: 'Tools and techniques' },
  { value: '3', label: 'Featured projects' },
  { value: '100%', label: 'Responsive layout' }
];

export function HeroSection() {
  return (
    <AnimatedSection className="relative overflow-hidden pt-10 sm:pt-16" id="home">
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-16">
        <div className="flex flex-col justify-center">
          <Badge className="mb-6 w-fit gap-2 border-border/60 bg-card/70 px-4 py-2 text-sm text-foreground shadow-soft" variant="outline">
            <Sparkles className="h-4 w-4" /> Portfolio
          </Badge>
          <p className="mb-3 inline-flex w-fit items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
        👋 Hi, Welcome to my Portfolio
         </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Mohammad Kaif Ali
          </h1>
          <div className="mt-5 flex flex-wrap gap-3">
     <span className="rounded-full bg-green-500/15 border border-green-500/30 px-4 py-2 text-sm font-medium text-green-400">
      🟢 Open to Internship
    </span>

     <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-4 py-2 text-sm font-medium text-cyan-400">
      📍 Dehradun, India
   </span>
    </div>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-cyan-400 sm:text-2xl">
          Data Analyst • Python • SQL • Power BI
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
           Passionate about transforming raw data into meaningful insights through
           analytics, visualization, and problem-solving. I enjoy building dashboards,
           exploring datasets, and creating solutions that support smarter decisions.
         </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="rounded-full border border-border/60 bg-card/70 px-3 py-2">{siteConfig.location}</span>
            <span className="rounded-full border border-border/60 bg-card/70 px-3 py-2">{siteConfig.email}</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
       asChild
       size="lg"
      className="bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg hover:scale-105 transition-all duration-300"
>
      <Link href={siteConfig.resumePath}>
    <Download className="h-4 w-4" />
       Resume
       </Link>
    </Button>
            <Button
  asChild
  size="lg"
  variant="outline"
  className="hover:bg-cyan-500 hover:text-white transition-all duration-300"
>
     <Link href="#projects">
       Projects
      <ArrowRight className="h-4 w-4" />
     </Link>
  </Button>
           <Button
  asChild
  size="lg"
  variant="secondary"
  className="hover:scale-105 transition-all duration-300"
>
  <Link href="#contact">
    Contact
  </Link>
</Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Button asChild size="sm" variant="ghost">
              <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href={siteConfig.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="overflow-hidden border-border/70 bg-card/75 shadow-soft backdrop-blur-xl">
  <CardContent className="flex items-center justify-center p-8">
     <div className="relative flex justify-center">

      <div className="absolute -inset-5 rounded-3xl bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute -inset-3 rounded-3xl border border-cyan-400/20"></div>

      <Image
      
  src="/profile.jpg"
  alt="Mohammad Kaif Ali"
  width={420}
  height={520}
  priority
  className="relative rounded-3xl border border-white/10 shadow-2xl object-cover transition-all duration-500 hover:scale-105 hover:rotate-1"
/>

    </div>
  </CardContent>
</Card>

          <Card className="border-border/70 bg-card/70 shadow-soft backdrop-blur-xl">
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Core strengths</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>• Insight-led analysis</li>
                  <li>• Clean dashboard storytelling</li>
                  <li>• Data handling and presentation</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Focus areas</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>• Python, SQL, Excel</li>
                  <li>• Power BI visual reporting</li>
                  <li>• Reliable, polished delivery</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}