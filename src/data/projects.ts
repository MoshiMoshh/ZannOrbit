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
    title: 'ZannOutDoor',
    category: 'WEB APP',
    description: 'E-commerce untuk perlengkapan outdoor dengan pembayaran terintegrasi.',
    image: '',
    techStack: ['PHP', 'JS', 'CSS', 'HTML'],
    featured: true,
  },
  {
    title: 'KedaiArya',
    category: 'WEB APP',
    description: 'Website toko sembako modern dengan manajemen produk dan kategori.',
    image: '',
    techStack: ['PHP', 'JS', 'CSS', 'HTML'],
    featured: true,
  },
  {
    title: 'ZannDigital',
    category: 'WEB APP',
    description: 'Platform jual beli produk digital otomatis dengan sistem pembayaran QRIS.',
    image: '',
    techStack: ['PHP', 'JS', 'CSS', 'HTML'],
    featured: true,
  },
];
