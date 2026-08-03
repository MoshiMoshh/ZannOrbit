import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

export function Cursor() {
  const { variant, text } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch-based
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'white',
      mixBlendMode: 'difference' as any,
      opacity: isVisible ? 1 : 0,
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      mixBlendMode: 'normal' as any,
      opacity: isVisible ? 1 : 0,
    },
    text: {
      width: 80,
      height: 80,
      backgroundColor: 'white',
      mixBlendMode: 'normal' as any,
      opacity: isVisible ? 1 : 0,
    },
    hidden: {
      width: 16,
      height: 16,
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={variants[variant]}
        transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
      >
        {variant === 'text' && (
          <span className="text-background text-xs font-bold tracking-widest">{text}</span>
        )}
      </motion.div>
    </>
  );
}
