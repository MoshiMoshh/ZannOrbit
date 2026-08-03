import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function Badge({ label, icon: Icon, className = '' }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-md text-sm font-medium text-primary ${className}`}>
      {Icon && <Icon className="w-4 h-4 text-secondary" />}
      <span>{label}</span>
    </div>
  );
}
