import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { TESTIMONIALS } from '@/data/testimonials';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow="// CLIENT STORIES" />
        </RevealOnScroll>

        {TESTIMONIALS.length === 0 ? (
          <RevealOnScroll delay={0.2}>
            <GlassCard className="p-12 text-center" blur={15}>
              <div className="text-secondary/50 font-mono mb-4 text-4xl">{`{...}`}</div>
              <h3 className="text-xl font-bold text-primary mb-2">Segera Hadir</h3>
              <p className="text-secondary">Testimoni dari klien yang valid akan ditampilkan di sini.</p>
            </GlassCard>
          </RevealOnScroll>
        ) : (
          <RevealOnScroll className="grid md:grid-cols-2 gap-6" stagger={0.1}>
            {TESTIMONIALS.map((testimonial, idx) => (
              <GlassCard key={idx} className="p-8" hoverLift>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-surface overflow-hidden border border-border">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-xs text-secondary">{testimonial.position} @ {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-secondary leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mt-6 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </GlassCard>
            ))}
          </RevealOnScroll>
        )}
      </Container>
    </section>
  );
}
