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
              ZannEnemies
            </a>
          </Magnetic>
          
          <div className="text-xs text-secondary/60">
            © 2026 ZannVoid Digital. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
