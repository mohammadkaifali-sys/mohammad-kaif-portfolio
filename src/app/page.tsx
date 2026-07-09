import { AboutSection } from '@/components/about-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ContactSection } from '@/components/contact-section';
import { EducationSection } from '@/components/education-section';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeSection } from '@/components/resume-section';
import { SkillsSection } from '@/components/skills-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}