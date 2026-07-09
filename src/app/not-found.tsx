import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-base leading-7 text-muted-foreground">The page you are looking for does not exist.</p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}