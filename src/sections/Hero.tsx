import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ArrowUpRight, Download, Globe, Briefcase, Camera, Mail, TerminalSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { useCursor } from '@/context/CursorContext';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  { icon: Globe, href: 'https://github.com/MoshiMoshh', label: 'GitHub' },
  { icon: Briefcase, href: 'https://linkedin.com/in/bendzanukamagifi', label: 'LinkedIn' },
  { icon: Camera, href: 'https://instagram.com/moshimoshh.zann', label: 'Instagram' },
  { icon: Mail, href: 'mailto:contact@zannvoid.my.id', label: 'Email' },
];

const TECH_ICONS = [
  { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', isRed: true },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
];

export function Hero() {
  const { setVariant } = useCursor();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Fullstack dev — bikin web cepat, automasi payment gateway, dan integrasi AI.";

  useEffect(() => {
    let currentText = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    if (!headingRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const split = new SplitType(headingRef.current, { types: 'chars,words' });
      
      gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.02,
        ease: 'power2.out',
        delay: 0.2
      });

      return () => {
        split.revert();
      };
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />

      {/* Social Rail - Apple visionOS Style Glass */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
        <GlassCard 
          border={false}
          className="p-3 flex flex-col gap-3 !rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.15)] bg-white/[0.04] backdrop-saturate-150" 
          opacity={0} 
          blur={48}
        >
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              aria-label={link.label}
              className="w-11 h-11 relative z-10 flex items-center justify-center rounded-full text-secondary hover:text-primary transition-all duration-300 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] group"
              onMouseEnter={() => setVariant('hover')}
              onMouseLeave={() => setVariant('default')}
            >
              <link.icon className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </a>
          ))}
        </GlassCard>
      </div>

      <Container className="max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:pl-12 xl:pl-16">
            <RevealOnScroll>
              <Badge label="// HELLO WORLD." />
            </RevealOnScroll>
            
            <h1 
              ref={headingRef}
              className="text-6xl md:text-7xl lg:text-[90px] font-bold leading-[1.05] tracking-tight"
            >
              <span className="block text-primary">Hi, I'm</span>
              <span className="block text-secondary">Zann.</span>
            </h1>

            <RevealOnScroll delay={0.4}>
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Fullstack Developer · ZannVoid Digital
              </h2>
              <p className="text-secondary text-base max-w-[420px] mt-4 leading-relaxed min-h-[72px]">
                {typedText}
                <span className="inline-block w-[2px] h-5 ml-0.5 bg-primary animate-pulse align-middle" />
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.5} className="flex flex-wrap items-center gap-4 mt-2">
              <Button variant="primary" icon={ArrowUpRight} magnetic>
                View My Work
              </Button>
              <Button variant="outline" icon={Download} href="/cv/CV_Bendzanu_Kamagifi.pdf" magnetic>
                Download CV
              </Button>
            </RevealOnScroll>
          </div>

          {/* Right Column - Complex Layout from Image */}
          <div className="relative lg:col-span-7 h-auto lg:h-[500px] flex flex-col lg:block mt-12 lg:mt-0 w-full overflow-hidden lg:overflow-visible">
            <RevealOnScroll y={40} duration={1} className="w-full h-full flex flex-col lg:block relative">
              
              <GlassCard className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[85%] h-auto lg:h-[90%] rounded-2xl overflow-visible z-10 flex flex-col justify-center p-6 lg:p-10" opacity={0.03} blur={12}>
                
                {/* Text Block */}
                <div className="w-full lg:max-w-[280px]">
                  <h3 className="text-xl md:text-2xl text-secondary leading-relaxed mb-6">
                    Building digital<br/>
                    experiences with<br/>
                    <span className="font-bold text-primary">clean code</span> and<br/>
                    <span className="font-bold text-primary">great design.</span>
                  </h3>
                  
                  <div className="w-full h-[1px] bg-border mb-6"></div>
                  
                  <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-4">
                    Technology Stack
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-x-3 gap-y-4">
                    {TECH_ICONS.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center gap-1.5 group">
                        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-white/5 group-hover:scale-110">
                          <img 
                            src={tech.url} 
                            alt={tech.name} 
                            className={`w-6 h-6 object-contain ${tech.invert ? 'brightness-0 invert opacity-70' : ''} ${tech.isRed ? 'brightness-0 invert sepia saturate-[5000%] hue-rotate-[-20deg]' : ''}`} 
                          />
                        </div>
                        <span className="text-[9px] text-secondary/70 font-medium group-hover:text-primary transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Laptop/Code Editor on the right */}
                <motion.div 
                  className="relative lg:absolute lg:-right-[20%] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[85%] lg:min-w-[320px] z-20 mt-8 lg:mt-0"
                  animate={{ y: ["0%", "-2%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GlassCard className="rounded-xl overflow-hidden shadow-2xl border-white/10" opacity={0.05} blur={20}>
                    {/* Window Chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-black/40">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                    </div>
                    {/* Code Content */}
                    <div className="p-5 font-mono text-[11px] leading-[1.8] bg-[#0A0A0A]/80 text-secondary/80 overflow-x-auto">
                      <div className="flex min-w-max">
                        <div className="text-secondary/40 text-right pr-4 select-none flex flex-col gap-0.5">
                          {[...Array(14)].map((_, i) => <span key={i}>{i+1}</span>)}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                          <div><span className="text-purple-400">import</span> {'{'} <span className="text-blue-400">motion</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'framer-motion'</span>;</div>
                          <br/>
                          <div><span className="text-purple-400">const</span> <span className="text-blue-400">Home</span> = () {`=>`} {'{'}</div>
                          <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                          <div className="pl-8"><span className="text-secondary">{'<'}</span><span className="text-blue-400">section</span> className<span className="text-secondary">=</span><span className="text-green-400">"home"</span><span className="text-secondary">{'>'}</span></div>
                          <div className="pl-12"><span className="text-secondary">{'<'}</span><span className="text-blue-400">motion.div</span> initial<span className="text-secondary">={`{{ opacity: 0, y: 20 }}`}</span></div>
                          <div className="pl-16">animate<span className="text-secondary">={`{{ opacity: 1, y: 0 }}`}</span></div>
                          <div className="pl-16">transition<span className="text-secondary">={`{{ duration: 0.6 }}`}</span></div>
                          <div className="pl-12"><span className="text-secondary">{'>'}</span></div>
                          <div className="pl-16 text-primary">Hi, I'm Zann.</div>
                          <div className="pl-12"><span className="text-secondary">{'</'}</span><span className="text-blue-400">motion.div</span><span className="text-secondary">{'>'}</span></div>
                          <div className="pl-8"><span className="text-secondary">{'</'}</span><span className="text-blue-400">section</span><span className="text-secondary">{'>'}</span></div>
                          <div className="pl-4">{')'}</div>
                          <div>{'}'}</div>
                          <div><span className="text-purple-400">export default</span> <span className="text-blue-400">Home</span>;</div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Floating "Available" badge */}
                <motion.div
                  className="relative lg:absolute lg:-right-4 lg:bottom-8 z-30 mt-8 lg:mt-0 self-start lg:self-auto"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <GlassCard className="p-4 rounded-xl flex flex-col gap-3 min-w-[160px]" opacity={0.1} blur={16}>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <TerminalSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary mb-2 leading-tight">Available for<br/>new projects</div>
                      <div className="flex items-center gap-2">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span className="text-xs text-secondary/80">Open to work</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>

              </GlassCard>

            </RevealOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">SCROLL DOWN</span>
          <div className="w-7 h-7 rounded-full border border-secondary flex items-center justify-center mt-1">
            <motion.div 
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
