import { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Tag } from './Tag';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  techStack,
  liveUrl,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="h-full">
        <GlassCard className="h-full flex flex-col group" hoverLift={false}>
          {/* Top: Category + Title + Description */}
          <div className="p-5 pb-3 flex-1">
            <div className="flex items-start justify-between mb-3">
              <Tag label={category} />
              <a 
                href={liveUrl || '#'} 
                className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
            <p className="text-secondary text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="mx-5 aspect-[16/10] rounded-lg bg-surface/60 border border-border overflow-hidden relative mb-4">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-secondary/20 text-xs bg-gradient-to-br from-white/[0.02] to-transparent">
                [Screenshot]
              </div>
            )}
          </div>

          {/* Tech Tags */}
          <div className="px-5 pb-5 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="text-[11px] font-medium text-secondary/70 bg-white/5 border border-border/50 px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
