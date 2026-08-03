import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { EXPERIENCES } from '@/data/experience';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow="// EXPERIENCE" />
        </RevealOnScroll>

        {EXPERIENCES.length === 0 ? (
          <RevealOnScroll delay={0.2}>
            <GlassCard className="p-12 text-center" blur={15}>
              <div className="text-secondary/50 font-mono mb-4 text-4xl">{`{...}`}</div>
              <h3 className="text-xl font-bold text-primary mb-2">Experience Data Loading</h3>
              <p className="text-secondary">This section is currently being updated. Please check back later.</p>
            </GlassCard>
          </RevealOnScroll>
        ) : (
          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            
            {/* Timeline Line for Mobile */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-12">
              {EXPERIENCES.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <RevealOnScroll key={idx} delay={idx * 0.1} className={`relative flex md:justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                    
                    {/* Empty Space for Desktop Alignment */}
                    <div className="hidden md:block w-[45%]" />
                    
                    {/* Card */}
                    <div className="w-full md:w-[45%]">
                      <GlassCard className="p-6 md:p-8" hoverLift>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                          <span className="text-sm font-medium text-secondary bg-white/5 px-3 py-1 rounded-full w-fit">
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        <h4 className="text-lg text-primary mb-4 font-medium">{exp.company}</h4>
                        <p className="text-secondary text-sm leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="text-xs text-secondary bg-white/5 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
