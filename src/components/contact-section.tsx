import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactChannels, siteConfig } from "@/lib/site-data";

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      delay={0.35}
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
          📬 Contact
        </span>
      </div>

      <SectionHeading
        eyebrow="Let's Connect"
        title="Get In Touch"
        description="I'm always open to internships, collaborations, freelance opportunities, and networking with fellow developers and data enthusiasts."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border border-slate-700/50 bg-card/70 shadow-xl backdrop-blur-xl">
          <CardContent className="space-y-6 p-8">
            <div>
              <h3 className="text-2xl font-bold">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Feel free to contact me regarding internships, projects,
                freelance work, or collaboration.
              </p>
            </div>

            <div className="space-y-4">
              {contactChannels.map((channel) => {
                const icon =
                  channel.label === "Email" ? (
                    <Mail className="h-5 w-5" />
                  ) : channel.label === "Phone" ? (
                    <Phone className="h-5 w-5" />
                  ) : channel.label === "LinkedIn" ? (
                    <Linkedin className="h-5 w-5" />
                  ) : (
                    <Github className="h-5 w-5" />
                  );

                return (
                  <Button
                    key={channel.label}
                    asChild
                    variant="outline"
                    className="h-auto w-full justify-start border-slate-700 py-4 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                  >
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel="noreferrer"
                    >
                      {icon}

                      <span className="ml-4 flex flex-col text-left">
                        <span className="font-semibold">
                          {channel.label}
                        </span>

                        <span className="text-xs opacity-80">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <MapPin className="h-5 w-5 text-cyan-400" />

              <span>{siteConfig.location}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-700/50 bg-card/70 shadow-xl backdrop-blur-xl">
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}