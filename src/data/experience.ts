export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'present';
  description: string;
  technologies: string[];
}

// TODO: isi dengan data asli — jangan diisi placeholder fiktif
// Saat user sudah punya data experience yang valid, isi array ini.
// Lihat PRD v2.1 Section 9: "Jangan mengarang data personal/faktual."
export const EXPERIENCES: ExperienceItem[] = [];
