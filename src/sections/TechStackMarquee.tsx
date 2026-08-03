import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TECH_STACK_MARQUEE } from '@/data/techStack';

export function TechStackMarquee() {
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!marqueeRef1.current || !marqueeRef2.current) return;

    // Create seamless marquee using GSAP
    const animateMarquee = (ref: HTMLDivElement, direction: 1 | -1) => {
      const container = ref;
      const content = container.firstElementChild as HTMLElement;
      if (!content) return;

      const totalWidth = content.offsetWidth;
      
      gsap.to(container, {
        x: direction === 1 ? -totalWidth : totalWidth,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });
    };

    animateMarquee(marqueeRef1.current, 1);
    animateMarquee(marqueeRef2.current, -1);

  }, []);

  // Duplicate items to ensure seamless scroll
  const marqueeItems = [...TECH_STACK_MARQUEE, ...TECH_STACK_MARQUEE, ...TECH_STACK_MARQUEE];

  return (
    <section className="py-24 overflow-hidden border-y border-border/50 bg-background relative flex flex-col gap-8">
      {/* Overlay Gradients for fade effect on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Row 1 */}
      <div className="flex whitespace-nowrap will-change-transform" ref={marqueeRef1}>
        <div className="flex gap-8 px-4">
          {marqueeItems.map((tech, idx) => (
            <span key={`m1-${idx}`} className="text-5xl md:text-7xl font-bold text-surface transition-colors hover:text-secondary cursor-default select-none">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="flex whitespace-nowrap will-change-transform justify-end" ref={marqueeRef2} style={{ marginLeft: '-100%' }}>
        <div className="flex gap-8 px-4">
          {marqueeItems.reverse().map((tech, idx) => (
            <span key={`m2-${idx}`} className="text-5xl md:text-7xl font-bold text-surface transition-colors hover:text-secondary cursor-default select-none">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
