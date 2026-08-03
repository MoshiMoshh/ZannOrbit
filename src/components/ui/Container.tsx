import { ReactNode } from 'react';

interface ContainerProps {
  maxWidth?: number;
  children: ReactNode;
  className?: string;
}

export function Container({ maxWidth = 1320, children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-8 ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
}
