import { Github, Heart, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-700/50 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 lg:flex-row">

        {/* Left */}
        <div>
          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
            {siteConfig.name}
          </h2>

          <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
            {siteConfig.title}
            <br />
            {siteConfig.location}
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            {siteConfig.email}
          </p>

          <p className="text-sm text-muted-foreground">
            +91 {siteConfig.phone}
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-4">

          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-slate-700 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-slate-700 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-slate-700 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="h-5 w-5" />
            </a>
          </Button>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-muted-foreground">

        <p className="flex items-center justify-center gap-2">
          Made with
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          by <span className="font-semibold text-cyan-400">{siteConfig.name}</span>
        </p>

        <p className="mt-2">
          © 2026 All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}