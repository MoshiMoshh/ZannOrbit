import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/data/projects';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

export function FeaturedProjects() {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <Container>
        <RevealOnScroll>
          <SectionTitle 
            eyebrow="// FEATURED PROJECTS" 
            action={{ label: 'VIEW ALL PROJECTS', href: '#projects' }} 
          />
        </RevealOnScroll>

        <RevealOnScroll className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
          {featuredProjects.map((project, idx) => (
            <div key={idx} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
