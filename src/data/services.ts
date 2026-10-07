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
    description: 'Bikin website dari nol pakai stack modern — React, Next.js, Laravel, atau Node.js. Fokus ke performa dan arsitektur yang scalable.',
    icon: Code,
  },
  {
    title: 'UI Design',
    description: 'Desain antarmuka yang bersih, intuitif, dan terasa premium. Bukan template — tiap elemen dirancang sesuai kebutuhan produk.',
    icon: Layout,
  },
  {
    title: 'Dashboard',
    description: 'Dashboard admin dan data visualization yang gampang dipakai. Integrasi real-time data, chart, dan manajemen konten.',
    icon: LayoutDashboard,
  },
  {
    title: 'Landing Page',
    description: 'Landing page yang cepat, engaging, dan dioptimasi buat konversi. Animasi smooth tanpa ngorbanin loading time.',
    icon: MonitorSmartphone,
  },
  {
    title: 'API Development',
    description: 'RESTful API yang solid buat nyambungin frontend, mobile app, atau integrasi third-party kayak payment gateway dan bot Telegram.',
    icon: Server,
  },
  {
    title: 'Website Optimization',
    description: 'Audit performa, perbaikan SEO, dan aksesibilitas buat website yang udah jalan. Target Lighthouse 100 di semua kategori.',
    icon: Zap,
  },
];
