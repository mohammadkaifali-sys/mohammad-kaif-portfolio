import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import '@/app/globals.css';

import { BackToTop } from '@/components/back-to-top';
import { PageTransition } from '@/components/page-transition';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/site-data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Mohammad Kaif Ali',
    'Aspiring Data Analyst',
    'Data Analyst Portfolio',
    'Power BI',
    'SQL',
    'Python',
    'Excel',
    'Dehradun'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/icon',
    apple: '/icon'
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: 'website',
    url: '/',
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${siteConfig.title}`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    creator: siteConfig.name,
    images: ['/opengraph-image']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider>
          <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background" href="#home">
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
            <SiteFooter />
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}