"use client";

import type { PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0
}: PropsWithChildren<{ className?: string; id?: string; delay?: number }>) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(id === 'home');

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={className}
      data-section={id}
      id={id}
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </section>
  );
}