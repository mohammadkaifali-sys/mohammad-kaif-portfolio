"use client";

import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const frame = window.requestAnimationFrame(() => setIsVisible(true));

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="min-h-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 220ms ease, transform 220ms ease',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}