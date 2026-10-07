export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "ZannOutDoor & KedaiArya",
    category: "WEB APP",
    description: "Website bisnis dan katalog produk outdoor gear plus kedai. Checkout langsung nyambung ke payment gateway, responsif di semua device.",
    image: "/images/kedai_arya.jpg",
    techStack: ["PHP", "JS", "CSS", "HTML"],
    githubUrl: "https://github.com/MoshiMoshh/kedai-arya-catalog",
    liveUrl: "https://kedaiarya.zannvoid.my.id",
    featured: true
  },
  {
    title: "LaporKuy",
    category: "WEB APP",
    description: "Sistem pelaporan dengan integrasi AI dan notifikasi otomatis via Telegram Bot. Deploy di Vercel, respons laporan real-time.",
    image: "/images/laporkuy.jpg",
    techStack: ["Vercel", "Telegram Bot API", "AI Integration", "Node.js"],
    githubUrl: "https://github.com/MoshiMoshh/LaporKuy",
    liveUrl: "https://laporkuy-app.vercel.app",
    featured: true
  },
  {
    title: "ZannVoid Digital Platform",
    category: "WEB APP",
    description: "Platform layanan digital terintegrasi multi-payment gateway lokal — Midtrans, Paylabs, dan Duitku. Transaksi otomatis end-to-end.",
    image: "/images/zannvoid_platform.jpg",
    techStack: ["Node.js", "Supabase", "JS", "PHP", "CSS"],
    githubUrl: "https://github.com/MoshiMoshh/zannvoid-platform",
    liveUrl: "https://zannvoid.my.id",
    featured: true
  }
];
