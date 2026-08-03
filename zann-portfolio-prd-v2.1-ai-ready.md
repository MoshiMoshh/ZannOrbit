# ZANN. — Premium Developer Portfolio
## PRD v2.1 — AI Execution-Ready Edition

> **Perubahan dari v2.0:** dokumen asli berisi daftar kata kunci ("Glass Card", "Magnetic Button", "Cursor Glow") tanpa kontrak teknis. AI agent akan menebak angka, mencampur library secara acak, dan — paling berbahaya — **mengarang data** untuk section yang belum punya konten asli (testimonial, experience). Versi ini menutup semua celah itu dengan token file, TypeScript interface, angka animasi eksak, dan daftar eksplisit "data yang tidak boleh dikarang".

---

## 0. Cara AI Agent Membaca Dokumen Ini

Instruksi wajib, urutan prioritas kalau ada konflik:

1. **Reference Screenshot Contract (Section 3)** adalah sumber kebenaran visual tertinggi — kalau teks PRD dan screenshot berbeda, screenshot menang untuk *proporsi & layout*, teks PRD menang untuk *fitur & polish tambahan*.
2. **Design Tokens (Section 5)** adalah satu-satunya sumber warna/spacing/radius. Dilarang menulis hex code atau angka px baru di luar file token.
3. **Component Spec Table (Section 6)** adalah satu-satunya sumber props/API komponen. Jangan menambah prop yang tidak terdaftar tanpa menandainya sebagai asumsi.
4. Kalau sebuah instruksi ambigu dan tidak terjawab oleh 1–3, **berhenti dan tanyakan**, jangan berimprovisasi. Section 12 berisi daftar pertanyaan yang sudah teridentifikasi.
5. **Section 9 (Guardrails)** mengikat semua section lain — cek ulang sebelum commit setiap section.

Setiap section di bawah punya **Definition of Done** — centang semua sebelum lanjut ke section berikutnya.

---

## 1. Product Vision & Goals

Tujuan: membangun *trust* pada pengunjung dalam <10 detik pertama, dengan jawaban visual atas 4 pertanyaan: siapa, spesialisasi apa, kualitas kerja seperti apa, cara menghubungi.

Target user: Recruiter, Startup Founder, Agency, Client, HR, Developer lain.

**KPI terukur** (bukan cuma "harus premium"):
| Metrik | Target |
|---|---|
| Time-to-understand-value-prop (user testing) | < 10 detik |
| Lighthouse Performance / Accessibility / SEO / Best Practices | 100 / 100 / 100 / 100 |
| LCP | < 2s |
| CLS | < 0.1 |
| TTFB | < 200ms |
| Bounce dari Hero tanpa scroll | dilacak, tidak ada target angka pasti — instrumentasi dulu |

---

## 2. Tech Stack — Versi & Batas Penggunaan Library

```
react: ^19.0.0
vite: ^6.0.0
typescript: ^5.6.0
tailwindcss: ^4.0.0 (menggunakan @theme, bukan tailwind.config.js lama)
gsap: ^3.12.0 (+ ScrollTrigger plugin)
framer-motion (motion): ^11.0.0
lenis: ^1.1.0 (@studio-freight/lenis atau lenis terbaru)
split-type: ^0.3.4
lucide-react: ^0.4xx
react-helmet-async: ^2.0.0
```

**Batas tanggung jawab library — WAJIB diikuti, jangan dicampur:**

| Library | Tanggung jawab | Dilarang untuk |
|---|---|---|
| **Lenis** | Smooth scroll global saja | Jangan dipakai bareng GSAP ScrollSmoother — pilih salah satu, defaultnya Lenis |
| **GSAP + ScrollTrigger** | Scroll-linked reveal, timeline sequencing, parallax, text-split animation, marquee | Jangan dipakai untuk hover state komponen kecil (button, card) |
| **Framer Motion** | State-driven micro-interaction: hover, tap, layout transition, modal, magnetic button, cursor | Jangan dipakai untuk scroll-triggered reveal (itu jatah GSAP) |
| **SplitType** | Split teks jadi char/word sebelum di-animate GSAP | — |

**Eksplisit dilarang ditambahkan** tanpa persetujuan: AOS, react-spring, anime.js, three.js, jQuery, Bootstrap, styled-components.

**Definition of Done:** `package.json` hanya berisi dependency di atas + dev-dependency standar Vite/TS/Tailwind. Tidak ada library animasi ganda untuk fungsi yang sama.

---

## 3. Reference Screenshot Contract

> Catatan penting: screenshot yang kamu lampirkan menunjukkan footer **"© 2024 Zann."** — ini kemungkinan besar adalah **screenshot dari versi yang sudah live (v1)**, bukan mockup baru. Artinya proporsi dan struktur di screenshot ini sudah "battle-tested" dan sebaiknya dijadikan **baseline literal**, sementara section 6–20 di PRD teks adalah *upgrade layer* (glass system lebih detail, motion system, dsb) di atas struktur yang sudah ada ini — bukan redesign dari nol. Konfirmasi asumsi ini ke user sebelum eksekusi besar.

Breakdown per section dari screenshot (dipetakan ke token spacing 8/16/24/32/48/64/96/120 dan container 1320px):

**Navbar**
- Floating pill container, melayang dengan margin dari top (~24–32px), radius penuh (`rounded-full`), background glass gelap + blur.
- Kiri: logo wordmark "ZANN." bold.
- Tengah: nav item (HOME, ABOUT, PROJECTS, SKILLS, EXPERIENCE, CONTACT), item aktif punya indikator titik kecil di bawahnya.
- Kanan: tombol solid putih "HIRE ME ↗".

**Hero** (2 kolom, ~50/50, container 1320px, min-height 100vh)
- Rail sosial vertikal fixed di kiri layar (github, linkedin, instagram, mail) dalam pill glass gelap, terpisah dari grid utama.
- Kolom kiri: eyebrow badge kecil "// HELLO WORLD.", heading 2 baris — baris 1 regular weight ("Hi, I'm"), baris 2 bold ukuran lebih besar warna abu terang ("Zann."), paragraf deskripsi max-width ±420px, dua tombol CTA (primary solid putih "VIEW MY WORK ↗", secondary outline "DOWNLOAD CV ⬇").
- Kolom kanan: mockup jendela code editor (3 dot traffic light, tab "index.html", kode HTML dengan syntax highlight & line number), di bawahnya grid 6 badge tech stack (HTML, CSS, JavaScript, PHP, Laravel, React) dengan icon + label dalam glass card.
- Dekorasi: blob kaca blur organik di pojok kanan-atas & kiri-bawah, badge lingkaran ikon `</>` melayang di tepi kanan.

**About Me + Skills** (2 kolom glass card sejajar)
- Panel kiri "ABOUT ME": foto grayscale (subjek di depan monitor), paragraf bio, 2 chip statistik ("5+ Years Experience", "100+ Projects Completed").
- Panel kanan "// MY SKILLS": daftar skill (icon + nama + progress bar + persentase) — HTML 100%, CSS 90%, JavaScript 85%, PHP 90%, React 80%, Laravel 90%.

**Featured Projects**
- Header kiri "// FEATURED PROJECTS", tombol kanan "VIEW ALL PROJECTS ↗".
- Grid 3 kolom, tiap card: tag "WEB APP" pojok kiri-atas, icon external-link pojok kanan-atas, gambar besar, judul bold, deskripsi 1–2 kalimat, baris tag stack teknologi.
- **Urutan project di screenshot: ZannOutDoor → KedaiArya → ZannDigital.** Ini **berbeda urutan** dengan section 12 di PRD teks asli (ZannDigital → ZannOutDoor → KedaiArya). ⚠️ Perlu konfirmasi urutan mana yang final — lihat Section 12.
- Salah satu tag project bertuliskan "SSS" — kemungkinan typo untuk "CSS"/"SCSS". ⚠️ Perlu konfirmasi — lihat Section 12.

**Contact CTA band**
- Card gelap full-width: kiri heading "Let's work together" + subteks + ikon panah diagonal; tengah 3 chip info (Email, Location, Availability); kanan tombol solid putih "CONTACT ME ↗".

**Footer**
- Logo kiri, copyright tengah, "Built with ♥ and passion `</>`" kanan.

**Definition of Done:** setiap section di atas punya component instance yang props/kontennya cocok 1:1 dengan breakdown ini, bukan interpretasi bebas.

---

## 4. Folder Structure (exact)

```
src/
  assets/
    images/
    icons/
  components/
    ui/            # Button.tsx, Badge.tsx, Tag.tsx, Tooltip.tsx, GlassCard.tsx, Container.tsx
    layout/         # Navbar.tsx, Footer.tsx
    cursor/         # Cursor.tsx
    animation/      # RevealOnScroll.tsx, SplitText.tsx, Marquee.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    FeaturedProjects.tsx
    Experience.tsx
    Services.tsx
    Testimonials.tsx
    TechStackMarquee.tsx
    Contact.tsx
  hooks/
    useLenis.ts
    useMagnetic.ts
    useCursor.ts
  data/             # <-- SUMBER DATA, lihat Section 9 soal larangan mengarang isi
    projects.ts
    experience.ts
    testimonials.ts
    skills.ts
    services.ts
    techStack.ts
  constants/
    tokens.ts       # re-export design tokens untuk dipakai di JS (bukan cuma CSS)
  types/
    index.ts
  styles/
    globals.css     # berisi @theme (Tailwind v4)
  context/
    CursorContext.tsx
  App.tsx
  main.tsx
public/
  robots.txt
  sitemap.xml
  cv/zann-cv.pdf
```

---

## 5. Design Tokens — Single Source of Truth

`src/styles/globals.css` (Tailwind v4 `@theme`):

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-background: #101010;
  --color-surface: #171717;
  --color-glass: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.08);
  --color-primary: #ffffff;
  --color-secondary: #a1a1aa;
  --color-accent: #d4d4d8;
  --color-neutral-state: #e5e5e5; /* lihat catatan di bawah */

  /* Radius */
  --radius-default: 24px;

  /* Container */
  --container-max: 1320px;

  /* Spacing scale (pakai ini, jangan angka bebas) */
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-5: 48px;
  --spacing-6: 64px;
  --spacing-7: 96px;
  --spacing-8: 120px;

  /* Breakpoints */
  --breakpoint-sm: 390px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
  --breakpoint-3xl: 1920px;
}
```

**⚠️ Gap yang ditemukan di PRD asli — perlu keputusan, jangan dikarang AI:**
1. **Tidak ada font family yang didefinisikan.** Desain terinspirasi Vercel/Linear/Raycast biasanya pakai *Geist Sans* + *Geist Mono*, atau *Inter*. **Rekomendasi (bukan keputusan final): Geist Sans untuk UI, Geist Mono untuk kode di Hero mockup.** Perlu konfirmasi user sebelum di-lock.
2. **Tidak ada type scale** (ukuran h1–h6, body, caption). Perlu didefinisikan eksplisit, contoh proposal (rem, base 16px): `text-xs 12/16, sm 14/20, base 16/24, lg 18/28, xl 20/28, 2xl 24/32, 3xl 30/38, 4xl 36/44, 5xl 48/56, 6xl 60/68`. Tandai sebagai **proposal**, bukan final.
3. **"Success: #E5E5E5"** — ini abu-abu, bukan warna sukses konvensional (hijau). Kemungkinan disengaja untuk menjaga desain monokrom. Tapi **tidak ada warna error/danger** untuk validasi form contact. Perlu diputuskan: apakah semua state (success/error) tetap monokrom (dibedakan lewat ikon + teks saja), atau perlu 1 warna aksen non-monokrom untuk error. **Jangan biarkan AI menambahkan merah/hijau sendiri tanpa keputusan ini.**

**Definition of Done:** tidak ada satupun hex code, angka px spacing, atau angka radius di file komponen yang tidak berasal dari token di atas.

---

## 6. Component Specification Table

Setiap komponen berikut **wajib** diimplementasikan sesuai interface ini — bukan sekadar nama.

```ts
// Button
interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  magnetic?: boolean;       // pakai Framer Motion, bukan GSAP
  onClick?: () => void;
  href?: string;            // kalau ada, render sebagai <a>
  children: React.ReactNode;
}

// GlassCard
interface GlassCardProps {
  blur?: number;             // default 25 (px), sesuai section 8 PRD asli
  opacity?: number;          // default 0.05
  border?: boolean;          // default true, pakai --color-border
  hoverLift?: boolean;       // translateY(-4px) on hover, Framer Motion
  className?: string;
  children: React.ReactNode;
}

// ProjectCard
interface ProjectCardProps {
  title: string;
  category: string;         // ex: "WEB APP"
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;        // optional — lihat Section 9, jangan dikarang kalau kosong
  liveUrl?: string;
  featured?: boolean;
}

// SkillCard (dipakai di list, bukan grid card visual — sesuai screenshot: row-based)
interface SkillItemProps {
  icon: LucideIcon | string;
  name: string;
  percentage: number;        // 0-100
  animateOnView?: boolean;   // percentage counter, trigger GSAP ScrollTrigger
}

// SectionTitle
interface SectionTitleProps {
  eyebrow: string;           // ex: "// FEATURED PROJECTS"
  action?: { label: string; href: string }; // ex: "VIEW ALL PROJECTS ↗"
}

// ExperienceCard
interface ExperienceItemProps {
  company: string;
  role: string;
  startDate: string;         // ISO format, format tampilan di layer presentasi
  endDate: string | "present";
  description: string;
  technologies: string[];
}

// Badge / Tag
interface BadgeProps { label: string; icon?: LucideIcon; }
interface TagProps { label: string; }

// Tooltip
interface TooltipProps { content: string; children: React.ReactNode; position?: "top"|"bottom"|"left"|"right"; }

// Cursor (custom cursor)
interface CursorState {
  variant: "default" | "hover" | "text" | "hidden";
  // default: dot kecil, blend-mode difference
  // hover (di atas link/button): scale ke 2.5x, opacity 0.15 (efek spotlight glow)
  // text (di atas heading besar): morph jadi label kecil "View" / custom text
}

// Container
interface ContainerProps { maxWidth?: number; /* default --container-max: 1320px */ children: React.ReactNode; }

// RevealOnScroll (wrapper animasi, pakai GSAP ScrollTrigger)
interface RevealOnScrollProps {
  children: React.ReactNode;
  y?: number;        // default 40
  duration?: number; // default 0.8
  stagger?: number;  // default 0.08, hanya berlaku kalau children multiple
  start?: string;    // default "top 85%"
}
```

**Definition of Done:** tiap file komponen punya file `.stories` atau minimal contoh penggunaan di komentar; tidak ada prop yang dipakai di section tapi tidak dideklarasikan di interface.

---

## 7. Motion System — Angka Eksak

| Interaksi | Library | Parameter |
|---|---|---|
| Scroll reveal (opacity+translateY+blur) | GSAP ScrollTrigger | `from: {opacity:0, y:40, filter:"blur(8px)"}`, `duration:0.8`, `ease:"power3.out"`, `stagger:0.08`, trigger `start:"top 85%"` |
| Card hover (rotateX/translateY/scale) | Framer Motion | `whileHover:{ y:-6, scale:1.02, rotateX:2 }`, `transition:{duration:0.3, ease:[0.16,1,0.3,1]}` |
| Magnetic button | Framer Motion | offset cursor max ±12px dari center, `spring: {stiffness:150, damping:15}` |
| Navbar shrink/blur on scroll | GSAP ScrollTrigger | trigger scroll > 80px: padding-y turun dari 24px→12px, backdrop-blur naik dari 12px→25px, duration 0.4 |
| Cursor spotlight/blend | Framer Motion + CSS `mix-blend-mode: difference` | radius default 8px, hover 20px |
| Text split reveal (Hero heading) | SplitType + GSAP | split by `chars`, `stagger:0.02`, `duration:0.6`, `ease:"power2.out"` |
| Percentage counter (Skills) | GSAP `ScrollTrigger` + number tween | duration 1.2s, ease `"power1.out"`, trigger saat section masuk viewport 80% |
| Project image zoom on hover | CSS transform via Framer Motion | `scale:1.08`, `duration:0.5`, `overflow:hidden` di parent |
| Smooth scroll global | Lenis | `lerp:0.1`, `duration:1.2`, `smoothWheel:true` |

`prefers-reduced-motion: reduce` → semua animasi di atas **wajib** fallback ke transisi opacity sederhana durasi 0.2s tanpa transform/parallax (Section 22 Accessibility).

---

## 8. Section-by-Section (ringkas — merujuk ke Section 3 & 6 untuk detail visual/komponen)

Untuk tiap section berikut, gunakan `Container` + `SectionTitle` + `RevealOnScroll` sesuai kontrak di atas. Grid & breakpoint mengikuti 12-column, container 1320px, breakpoint di Section 5.

- **Hero** — lihat Section 3.
- **About** — lihat Section 3.
- **Skills** — lihat Section 3. Data dari `data/skills.ts`.
- **Featured Projects** — lihat Section 3. Data dari `data/projects.ts`, **maks 3 project ditampilkan di homepage** (sesuai screenshot), sisanya di halaman "/projects".
- **Experience** — vertical timeline, tiap item = `ExperienceItemProps`. Data dari `data/experience.ts` — **kosong sampai user isi, lihat Section 9.**
- **Services** — grid card statis: Web Development, UI Design, Dashboard, Landing Page, API Development, Website Optimization. Konten deskripsi generik boleh ditulis AI (bukan data personal/faktual berisiko).
- **Testimonials** — glass card + avatar + 5 stars. Data dari `data/testimonials.ts` — **kosong sampai user isi, lihat Section 9.**
- **Tech Stack Marquee** — infinite marquee GSAP, 2 baris arah berlawanan, isi: React, Next.js, Laravel, PHP, Node, Express, MongoDB, MySQL, Tailwind, Docker, Git, Figma.
- **Contact** — lihat Section 3.
- **Footer** — lihat Section 3.

**Definition of Done per section:** cocok dengan breakdown Section 3 (kalau ada di screenshot) ATAU dengan spec teks di atas (kalau tidak ada di screenshot), tidak ada elemen tambahan yang tidak diminta.

---

## 9. Guardrails — Larangan Eksplisit untuk AI Agent

1. **Jangan mengarang data personal/faktual.** Untuk `experience.ts` dan `testimonials.ts`: jika belum ada data asli dari user, buat array **kosong** dengan komentar `// TODO: isi dengan data asli — jangan diisi placeholder fiktif`, dan render state kosong yang rapi (misalnya section disembunyikan atau tampil "Coming soon"). **Jangan pernah membuat nama perusahaan, tanggal kerja, kutipan testimoni, atau nama/posisi orang yang fiktif.**
2. **Jangan mengarang link.** `githubUrl` / `liveUrl` project yang belum dikonfirmasi dibiarkan `undefined`, tombol terkait disembunyikan — jangan diisi URL tebakan seperti `github.com/zann/zanndigital`.
3. **Jangan menambah warna/font/spacing di luar token** (Section 5) tanpa menandainya sebagai proposal yang perlu approval.
4. **Jangan mencampur library animasi** di luar batas Section 2.
5. **Jangan menambah section baru** (newsletter popup, blog card di homepage, dsb) yang tidak ada di PRD tanpa persetujuan eksplisit — termasuk item "Future Features" (Section 25 asli) tidak boleh dieksekusi kecuali diminta secara terpisah.
6. **Jangan menebak urutan/typo yang sudah diflag** di Section 3 (urutan project, tag "SSS") — tunggu jawaban Section 12.
7. Setiap asumsi desain yang diambil AI (font, type scale, warna error) **wajib ditulis sebagai komentar `// ASUMSI:`** di kode terkait, supaya mudah di-review, bukan disamarkan sebagai keputusan final.

---

## 10. Performance & Accessibility (checklist, dari Section 21–22 asli)

- [ ] Lighthouse Performance/Accessibility/SEO/Best Practices = 100/100/100/100
- [ ] LCP < 2s, CLS < 0.1, TTFB < 200ms
- [ ] Semua elemen interaktif bisa diakses keyboard (Tab/Enter/Escape untuk modal)
- [ ] Semua image punya `alt` deskriptif (bukan `alt=""` kecuali dekoratif)
- [ ] Contrast ratio AA untuk teks di atas glass background (perlu dicek manual karena background transparan bisa gagal AA — test dengan overlay solid di baliknya)
- [ ] `prefers-reduced-motion` dihormati di semua animasi (Section 7)
- [ ] Focus ring terlihat jelas di semua elemen fokusable (jangan `outline: none` tanpa pengganti)

---

## 11. Execution Roadmap (Milestone untuk AI Agent)

| Milestone | Isi | Checkpoint sebelum lanjut |
|---|---|---|
| M0 | Setup Vite+React19+TS+Tailwind4, folder structure Section 4 | `npm run dev` jalan tanpa error |
| M1 | Design tokens (Section 5) + komponen `ui/` dasar (Button, GlassCard, Container, Badge, Tag) | Storybook/preview tiap komponen sesuai interface Section 6 |
| M2 | Navbar + Footer + Cursor custom | Navigasi & cursor berfungsi di semua breakpoint |
| M3 | Hero + About + Skills | Cocok dengan Section 3 screenshot, animasi belum wajib final |
| M4 | Featured Projects + Experience + Services | Data kosong untuk Experience (Section 9), bukan fiktif |
| M5 | Testimonials + Tech Stack Marquee + Contact | Testimonials kosong sampai data asli ada |
| M6 | Motion system final (Section 7) di semua section | `prefers-reduced-motion` teruji |
| M7 | SEO (meta, schema.org, OG, sitemap, robots.txt) + Accessibility audit | Lighthouse 4x100 |
| M8 | Responsive QA di 6 breakpoint (Section 24 asli) | Tidak ada overflow/layout shift di 390px–1920px |

---

## 12. Pertanyaan Terbuka — Wajib Dijawab User, Jangan Ditebak AI

1. Urutan Featured Projects final: ZannDigital → ZannOutDoor → KedaiArya (teks PRD) atau ZannOutDoor → KedaiArya → ZannDigital (screenshot)?
2. Tag project "SSS" di screenshot — typo untuk apa? (CSS/SCSS/lainnya)
3. Font family final — pakai rekomendasi Geist Sans/Geist Mono, atau ada preferensi lain?
4. Data Experience (perusahaan, role, tahun, deskripsi) — belum ada sama sekali, perlu diisi.
5. Data Testimonials (nama, posisi, perusahaan, kutipan, avatar) — belum ada, perlu diisi atau section dihilangkan dulu.
6. Link GitHub/Live Demo untuk 3 project — belum ada di data manapun.
7. Nomor WhatsApp & handle Instagram/LinkedIn asli untuk section Contact & Footer.
8. Warna untuk state error (form validasi) — tetap monokrom atau butuh 1 warna aksen?
9. File CV asli untuk tombol "Download CV".
10. Domain final untuk canonical URL/sitemap (screenshot menunjukkan `hello@zann.dev`).

---

## Kesimpulan

PRD v2.0 sudah kuat di sisi *vision* dan *keyword design*, tapi lemah di sisi *kontrak eksekusi* — itu yang menyebabkan AI coding agent menebak-nebak atau mengarang konten. v2.1 ini menutup celah dengan: token file tunggal, interface komponen eksak, batas tanggung jawab library, breakdown literal dari screenshot yang sudah live, dan yang terpenting — daftar tegas data apa saja yang **tidak boleh dikarang** dan harus ditunggu dari user.
