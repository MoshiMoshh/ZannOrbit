import { Code, Layout, LayoutDashboard, MonitorSmartphone, Server, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern frameworks to deliver fast, secure, and scalable solutions.',
    icon: Code,
  },
  {
    title: 'UI Design',
    description: 'Beautiful, intuitive user interfaces crafted with a focus on user experience and premium aesthetics.',
    icon: Layout,
  },
  {
    title: 'Dashboard',
    description: 'Complex data visualization and management dashboards designed for ease of use and performance.',
    icon: LayoutDashboard,
  },
  {
    title: 'Landing Page',
    description: 'High-converting landing pages with engaging animations and optimized load times to maximize impact.',
    icon: MonitorSmartphone,
  },
  {
    title: 'API Development',
    description: 'Robust and secure RESTful APIs to power your web and mobile applications seamlessly.',
    icon: Server,
  },
  {
    title: 'Website Optimization',
    description: 'Performance tuning, SEO enhancement, and accessibility improvements for existing websites.',
    icon: Zap,
  },
];
