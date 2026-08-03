interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className = '' }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-md bg-white/5 text-secondary text-xs tracking-wider uppercase font-semibold ${className}`}>
      {label}
    </span>
  );
}
