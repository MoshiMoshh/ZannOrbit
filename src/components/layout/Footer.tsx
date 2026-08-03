import { Container } from '@/components/ui/Container';
import { TOKENS } from '@/constants/tokens';
import { Magnetic } from '@/components/animation/Magnetic';

export function Footer() {
  return (
    <footer className="border-t py-6" style={{ borderColor: TOKENS.colors.border }}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Magnetic>
            <a href="#home" className="text-xl font-bold tracking-tight text-primary cursor-pointer hover:opacity-80 transition-opacity">
              ZANN.
            </a>
          </Magnetic>
          
          <div className="text-xs text-secondary/60">
            © 2026 Zann. All rights reserved.
          </div>
          
          <div className="text-xs text-secondary/60 flex items-center gap-1">
            Built with <span className="text-red-400">𝒵𝒶𝓃𝓃𝒜𝓇𝓉𝒽𝑒𝓂𝒾𝓈</span> and <code className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded ml-1">&lt;/&gt;</code>
          </div>
        </div>
      </Container>
    </footer>
  );
}
