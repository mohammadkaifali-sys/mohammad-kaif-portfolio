import { ImageResponse } from 'next/og';

import { siteConfig } from '@/lib/site-data';

export const runtime = 'edge';
export const alt = `${siteConfig.name} | ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: 48,
          background:
            'radial-gradient(circle at top left, rgba(56,189,248,0.30), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,0.22), transparent 32%), #020617',
          color: '#F8FAFC',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          fontFamily: 'Inter'
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.72 }}>Portfolio</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, marginTop: 12 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 30, opacity: 0.88, marginTop: 16 }}>{siteConfig.title}</div>
      </div>
    ),
    size
  );
}