import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { SERVICES } from '@/data/services';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-surface/30 border-y border-border/50">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow="SERVICES" className="mb-16" />
        </RevealOnScroll>

        <RevealOnScroll className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {SERVICES.map((service, idx) => (
            <GlassCard key={idx} className="p-8 h-full flex flex-col" hoverLift blur={10}>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-secondary text-sm leading-relaxed flex-1">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
