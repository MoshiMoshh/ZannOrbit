import { ReactNode, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'; // Added ghost for some uses
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  magnetic?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant,
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  magnetic = false,
  onClick,
  href,
  className = '',
  children,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  // Magnetic Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (!magnetic || !ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      // max offset ±12px
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      x.set(distanceX * 0.2);
      y.set(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    
    const handleMouseEnter = () => {};

    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove as any);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as any);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [magnetic, x, y]);

  // Styles
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-neutral-state",
    secondary: "bg-surface text-primary hover:bg-surface/80 border border-border",
    outline: "border border-border text-primary hover:bg-white/5",
    ghost: "text-secondary hover:text-primary hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const InnerContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  const motionStyle = magnetic ? { x: springX, y: springY } : {};

  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        style={motionStyle}
        className={combinedClassName}
        whileHover={magnetic ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.95 }}
      >
        <InnerContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      onClick={onClick}
      style={motionStyle}
      className={combinedClassName}
      whileHover={magnetic ? { scale: 1.05 } : {}}
      whileTap={{ scale: 0.95 }}
    >
      <InnerContent />
    </motion.button>
  );
}
