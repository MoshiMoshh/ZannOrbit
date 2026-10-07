import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TOKENS } from '@/constants/tokens';
import { Magnetic } from '@/components/animation/Magnetic';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    // Navbar shrink/blur on scroll animation
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -80px',
        end: 99999,
        toggleClass: {
          className: 'nav-scrolled',
          targets: navRef.current,
        },
      });
    }, navRef);

    // Setup intersection observer for active states
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const item = NAV_ITEMS.find((nav) => nav.href === `#${id}`);
            if (item) setActiveItem(item.label);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        setActiveItem('Contact');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1320px] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        style={{
          backgroundColor: `rgba(255, 255, 255, 0.03)`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${TOKENS.colors.border}`,
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <style>{`
          .nav-scrolled {
            max-width: 800px !important;
            background-color: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(25px) !important;
            -webkit-backdrop-filter: blur(25px) !important;
            top: 16px !important;
            border-radius: 9999px !important;
            padding-top: 4px !important;
            padding-bottom: 4px !important;
          }
        `}</style>
        
        <div className="flex items-center justify-between px-6 lg:px-8 py-4 transition-all duration-500" id="nav-inner">
          <a href="#home" className="text-xl font-bold tracking-tight text-primary hover:opacity-80 transition-opacity">
            ZannOrbit
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item.label}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeItem === item.label ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                  onClick={() => setActiveItem(item.label)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeItem === item.label && (
                    <motion.div
                      layoutId="navbar-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="hidden sm:block">
            <Button variant="primary" size="sm" icon={ArrowUpRight} magnetic>
              HIRE ME
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] lg:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background/95 backdrop-blur-xl border-l border-white/10 z-[100] p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-end mb-8">
                <button
                  className="p-2 text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-2xl font-medium transition-colors ${
                      activeItem === item.label ? 'text-primary' : 'text-secondary hover:text-primary'
                    }`}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pb-4">
                 <Button variant="outline" className="w-full justify-center" icon={ArrowUpRight}>
                   Hire Me
                 </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
