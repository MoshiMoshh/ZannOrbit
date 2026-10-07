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
    company: "TechBro ID",
    role: "Fullstack Ninja",
    startDate: "Jan 2023",
    endDate: "present",
    description: "Nge-carry tim dari awal sampe production. Setup tech stack dari nol, ngurusin bug yang bikin pusing sampe bener-bener smooth, pokoknya full grind demi user experience yang no debat.",
    technologies: ["React", "Next.js", "Node.js", "TailwindCSS"]
  },
  {
    company: "Digital Agency Santuy",
    role: "Frontend Developer",
    startDate: "Mar 2021",
    endDate: "Des 2022",
    description: "Bikin UI/UX yang gak cuma cakep tapi juga fast af. Ngerjain project klien dari yang chill sampe yang deadline-nya bikin overthinking. Tektokan lancar sama UI/UX designer.",
    technologies: ["Vue", "Tailwind", "JavaScript", "GSAP"]
  }
];
