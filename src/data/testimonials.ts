export interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Budi 'The Boss' Santoso",
    position: "Founder",
    company: "TechBro ID",
    quote: "Asli kerjaannya rapi parah, UI-nya smooth banget gak ada obat. Kelar lebih cepet dari ekspektasi, worth it abis!",
    avatar: "",
    rating: 5
  },
  {
    name: "Nadia",
    position: "Product Manager",
    company: "Agency Kekinian",
    quote: "Komunikasinya asik, gampang diajak tektokan. Bug yang susah aja disikat abis. Fix bakal hire lagi sih buat next project.",
    avatar: "",
    rating: 5
  },
  {
    name: "Dimas",
    position: "Tech Lead",
    company: "Startup Chill",
    quote: "Kodenya clean bet, gampang dibaca. Gak cuma asal jalan, tapi dipikirin juga edge case-nya. Mantap djiwa pokoknya.",
    avatar: "",
    rating: 5
  }
];
