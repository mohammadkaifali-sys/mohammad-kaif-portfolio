"use client";

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-glow"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      size="icon"
      type="button"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}