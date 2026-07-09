import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <Badge className="mb-4 border-border/70 bg-background/70 text-foreground" variant="outline">
        {eyebrow}
      </Badge>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}