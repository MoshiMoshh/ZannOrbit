import { LucideIcon, Code2, Palette, FileJson, Server, Database, Braces } from 'lucide-react';

export interface SkillItemProps {
  icon: LucideIcon | string;
  name: string;
  percentage: number;
}

export const SKILLS: SkillItemProps[] = [
  { icon: Code2, name: 'HTML', percentage: 100 },
  { icon: Palette, name: 'CSS', percentage: 90 },
  { icon: FileJson, name: 'JavaScript', percentage: 85 },
  { icon: Server, name: 'PHP', percentage: 90 },
  { icon: Braces, name: 'React', percentage: 80 },
  { icon: Database, name: 'Laravel', percentage: 90 },
];
