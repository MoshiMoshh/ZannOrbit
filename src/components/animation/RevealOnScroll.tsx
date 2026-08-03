import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: ReactNode;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({
  children,
  y = 40,
  duration = 0.8,
  stagger = 0.08,
  start = 'top 85%',
  className = '',
  delay = 0,
}: RevealOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = containerRef.current.children;
    
    // Set initial state
    gsap.set(elements, {
      opacity: 0,
      y: prefersReducedMotion ? 0 : y,
      filter: prefersReducedMotion ? 'none' : 'blur(8px)',
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        animation: gsap.to(elements, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: prefersReducedMotion ? 0.2 : duration,
          ease: 'power3.out',
          stagger,
          delay,
        }),
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, [y, duration, stagger, start]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
