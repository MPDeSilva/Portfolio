'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavItem { name: string; href: string; }

const NAV_ITEMS: NavItem[] = [
  { name: 'Work', href: '/#work' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        data-stuck={stuck || undefined}
        className={`sticky top-0 z-[60] bg-white/[.78] backdrop-blur-[14px] transition-[border-color] duration-200 ${
          stuck ? 'border-b border-ink-200' : 'border-b border-transparent'
        }`}
      >
        <div
          className="wrap flex items-center justify-between"
          style={{ paddingBlock: 'clamp(.9rem, 2vw, 1.4rem)' }}
        >
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-none" aria-label="Home">
            <span
              className="font-heading text-ink-900"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' }}
            >
              Milinda De Silva
            </span>
            <span className="font-mono uppercase text-ink-400 mt-1 hidden sm:block" style={{ fontSize: 10, letterSpacing: '.12em' }}>
              Software &amp; Web Developer · London
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-underline font-mono uppercase text-ink-500 hover:text-ink-900 transition-colors"
                style={{ fontSize: 11, letterSpacing: '.08em' }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-mono uppercase border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper hover:-translate-y-px transition-all"
              style={{ fontSize: 11, letterSpacing: '.06em', padding: '.6rem 1.15rem' }}
            >
              Get in touch
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
          >
            <span
              className={`absolute block w-6 h-[1.5px] bg-ink-900 transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`}
            />
            <span
              className={`absolute block w-6 h-[1.5px] bg-ink-900 transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        className={`md:hidden fixed top-0 right-0 h-full z-[58] bg-white shadow-2xl transition-transform duration-[400ms] ease-out-soft`}
        style={{
          width: 'min(80vw, 360px)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-ink-900 py-3 border-b border-ink-200"
                style={{ fontSize: '1.6rem' }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-mono uppercase border border-ink-900 text-ink-900 self-start mt-6"
              style={{ fontSize: 13, letterSpacing: '.06em', padding: '.8rem 1.4rem' }}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
