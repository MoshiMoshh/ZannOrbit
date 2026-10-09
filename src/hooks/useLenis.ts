import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useLenis() {
  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    // Global click handler for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      const href = target?.getAttribute('href');
      
      if (href?.startsWith('#') && href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -100 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);
}
