import { ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { TOKENS } from '@/constants/tokens';

interface GlassCardProps {
  blur?: number;
  opacity?: number;
  border?: boolean;
  hoverLift?: boolean;
  className?: string;
  children: ReactNode;
  glowOpacity?: number;
}

export function GlassCard({
  blur = 25,
  opacity = 0.05,
  border = true,
  hoverLift = false,
  className = '',
  children,
  glowOpacity = 0.15,
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Component = hoverLift ? motion.div : 'div';
  const animationProps = hoverLift
    ? {
        whileHover: { y: -6, scale: 1.02, rotateX: 2 },
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as any },
      }
    : {};

  return (
    <Component
      {...animationProps}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group ${className}`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        border: border ? `1px solid ${TOKENS.colors.border}` : 'none',
        borderRadius: `${TOKENS.radius.default}px`,
      }}
    >
      {/* Mouse tracking glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,${glowOpacity}),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle linear gradient reflection effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
