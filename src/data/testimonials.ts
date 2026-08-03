export interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number; // usually 5
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    position: 'CEO',
    company: 'Nexus Tech',
    quote: 'Working with Zann was an absolute pleasure. He completely transformed our outdated platform into a modern, lightning-fast web app. His attention to pixel-perfect detail and fluid animations sets him apart from any developer we\'ve worked with.',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Michael Chang',
    position: 'Product Designer',
    company: 'CreativeCo',
    quote: 'As a designer, I am very picky about how my designs are implemented. Zann didn\'t just implement them; he elevated them. The micro-interactions and smooth scrolling he added made the final product feel incredibly premium.',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    position: 'Founder',
    company: 'Aura Boutique',
    quote: 'The e-commerce site Zann built for us is stunning. Our conversion rates increased by 45% within the first month of launch. He is communicative, fast, and a true master of his craft.',
    avatar: '',
    rating: 5,
  }
];
