export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'present';
  description: string;
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'TechNova Solutions',
    role: 'Senior Full Stack Developer',
    startDate: '2021',
    endDate: 'present',
    description: 'Lead the development of scalable enterprise applications. Engineered a microservices architecture that improved system performance by 40% and reduced server costs. Mentored a team of 5 junior developers.',
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
  },
  {
    company: 'Creative Digital Agency',
    role: 'Web Developer',
    startDate: '2018',
    endDate: '2021',
    description: 'Developed and maintained over 30 client websites ranging from e-commerce platforms to corporate portfolios. Implemented complex GSAP animations resulting in a 25% increase in average session duration.',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'GSAP', 'Tailwind CSS'],
  },
  {
    company: 'StartUp Inc.',
    role: 'Junior Frontend Developer',
    startDate: '2016',
    endDate: '2018',
    description: 'Collaborated with designers to translate Figma mockups into fully functional, responsive React components. Improved initial page load times by optimizing assets and lazy-loading components.',
    technologies: ['HTML', 'CSS', 'React', 'Figma'],
  }
];
