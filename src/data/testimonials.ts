export interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

// TODO: isi dengan data asli — jangan diisi placeholder fiktif
// Lihat PRD v2.1 Section 9: "Jangan pernah membuat nama perusahaan,
// tanggal kerja, kutipan testimoni, atau nama/posisi orang yang fiktif."
export const TESTIMONIALS: Testimonial[] = [];
