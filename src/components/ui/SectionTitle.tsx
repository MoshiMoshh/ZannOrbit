import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

interface SectionTitleProps {
  eyebrow: string;
  action?: { label: string; href: string };
  className?: string;
}

export function SectionTitle({ eyebrow, action, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 ${className}`}>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary uppercase">
        {eyebrow}
      </h2>
      {action && (
        <Button variant="ghost" href={action.href} icon={ArrowUpRight} iconPosition="right">
          {action.label}
        </Button>
      )}
    </div>
  );
}
