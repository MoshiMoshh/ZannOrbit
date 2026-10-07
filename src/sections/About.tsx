import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SKILLS } from '@/data/skills';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    countersRef.current.forEach((counter, idx) => {
      if (!counter) return;
      const targetValue = SKILLS[idx].percentage;
      
      gsap.fromTo(counter, 
        { innerHTML: 0 }, 
        {
          innerHTML: targetValue,
          duration: 1.2,
          ease: 'power1.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = Math.round(this.targets()[0].innerHTML) + '%';
          },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="about" className="py-20">
      <Container>
        <div className="flex flex-col gap-24">
          
          {/* About Panel */}
          <RevealOnScroll>
            <GlassCard className="p-6 md:p-10 lg:p-12">
              <SectionTitle eyebrow="// ABOUT ME" className="mb-8" />
              
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                {/* Photo */}
                <div className="w-full max-w-[280px] shrink-0 aspect-[3/4] rounded-2xl bg-surface/80 border border-border overflow-hidden relative shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 pointer-events-none" />
                  <img 
                    src="/images/ZannEver.png" 
                    alt="Bendzanu Kamagifi" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="flex flex-col justify-center flex-1">
                  <p className="text-secondary text-base lg:text-lg leading-relaxed mb-10 max-w-2xl">
                    Bendzanu Kamagifi — di GitHub kenal sebagai MoshiMoshh. Fokus ke web development yang cepat, clean, dan bisa diandalkan. Lewat ZannVoid Digital, gue nge-build ekosistem web modern pakai Supabase & Vercel, nyambungin multi-payment gateway lokal (Midtrans, Duitku, Paylabs), dan ngulik integrasi AI (Gemini API & OpenAI) plus bot Telegram. Soal kualitas kode, gue pakai CodeRabbit buat automated review dan GitHub Copilot buat development.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4">
                    <GlassCard className="px-6 py-4 min-w-[160px] text-center" blur={8}>
                      <div className="text-3xl font-bold text-primary mb-1">5+</div>
                      <div className="text-xs text-secondary uppercase tracking-wider">Years Experience</div>
                    </GlassCard>
                    <GlassCard className="px-6 py-4 min-w-[160px] text-center" blur={8}>
                      <div className="text-3xl font-bold text-primary mb-1">100+</div>
                      <div className="text-xs text-secondary uppercase tracking-wider">Projects Completed</div>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Skills Panel */}
          <RevealOnScroll delay={0.2}>
            <section id="skills" className="scroll-mt-32">
              <GlassCard className="p-6 md:p-10 lg:p-12">
                <SectionTitle eyebrow="// MY SKILLS" className="mb-10" />
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {SKILLS.map((skill, idx) => (
                    <div key={skill.name} className="flex items-center gap-5 group">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-surface/50 border border-white/5 flex items-center justify-center shrink-0 shadow-lg">
                        <skill.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                      </div>
                      
                      {/* Progress Container */}
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-primary text-sm">{skill.name}</span>
                          <span 
                            ref={(el) => { countersRef.current[idx] = el; }}
                            className="text-sm font-bold text-secondary"
                          >
                            {skill.percentage}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full relative" 
                            style={{ width: `${skill.percentage}%` }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </section>
          </RevealOnScroll>
          
        </div>
      </Container>
    </section>
  );
}
