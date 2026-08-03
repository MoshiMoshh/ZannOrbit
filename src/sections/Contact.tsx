import { ArrowUpRight, Mail, MapPin, Briefcase } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'zannthemida@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Indonesia' },
  { icon: Briefcase, label: 'Availability', value: 'Freelance / Fulltime' },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <RevealOnScroll>
          <GlassCard className="p-8 md:p-10 lg:p-12" blur={20} opacity={0.03}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Left: Heading */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 tracking-tight leading-tight">
                  Let's work<br />together
                </h2>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-secondary text-sm mt-3">
                  <ArrowUpRight className="w-5 h-5" />
                  <span>Punya proyek menarik? Yuk, diskusikan ide kamu bersama saya.</span>
                </div>
              </div>

              {/* Middle: Info Cards */}
              <div className="flex flex-col sm:flex-row gap-3">
                {CONTACT_INFO.map((info) => (
                  <GlassCard key={info.label} className="px-6 py-5 text-center min-w-[140px]" blur={10}>
                    <info.icon className="w-5 h-5 text-secondary mx-auto mb-3" />
                    <div className="text-xs text-secondary mb-1">{info.label}</div>
                    <div className="text-sm font-medium text-primary">{info.value}</div>
                  </GlassCard>
                ))}
              </div>

              {/* Right: CTA */}
              <div className="shrink-0">
                <Button variant="primary" size="lg" icon={ArrowUpRight} magnetic href="mailto:zannthemida@gmail.com">
                  CONTACT ME
                </Button>
              </div>

            </div>
          </GlassCard>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
