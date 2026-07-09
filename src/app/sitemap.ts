import type { MetadataRoute } from 'next';

import { projects, siteConfig } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  return [
    { url: baseUrl, lastModified: new Date() },
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified: new Date() }))
  ];
}