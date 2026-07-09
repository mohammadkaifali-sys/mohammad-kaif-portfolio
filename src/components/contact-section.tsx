import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contactChannels, siteConfig } from '@/lib/site-data';

export function ContactSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="contact" delay={0.35}>
      <SectionHeading
        description="A simple, accessible contact area with validation and multiple ways to connect."
        eyebrow="Contact"
        title="Start a conversation"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-border/70 shadow-soft">
          <CardContent className="space-y-6 p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Reach out directly</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                For interviews, freelance analytics work, or collaboration opportunities, I’m available via the channels below.
              </p>
            </div>
            <div className="space-y-4">
              {contactChannels.map((channel) => {
                const icon = channel.label === 'Email' ? <Mail className="h-4 w-4" /> : channel.label === 'Phone' ? <Phone className="h-4 w-4" /> : channel.label === 'LinkedIn' ? <Linkedin className="h-4 w-4" /> : <Github className="h-4 w-4" />;

                return (
                  <Button key={channel.label} asChild className="h-auto w-full justify-start py-4" variant="outline">
                    <a href={channel.href} rel="noreferrer" target={channel.href.startsWith('http') ? '_blank' : undefined}>
                      {icon}
                      <span className="flex-1 text-left">
                        <span className="block text-sm font-medium text-foreground">{channel.label}</span>
                        <span className="block text-xs text-muted-foreground">{channel.value}</span>
                      </span>
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-foreground" />
              {siteConfig.location}
            </div>
          </CardContent>
        </Card>
        <ContactForm />
      </div>
    </AnimatedSection>
  );
}