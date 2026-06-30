'use client';

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/MPDeSilva' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/milinda-de-silva/' },
  { name: 'Email', href: 'mailto:milindapds@hotmail.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 mt-auto">
      <div className="wrap flex flex-wrap items-center justify-between gap-4" style={{ paddingBlock: '2.6rem' }}>
        <span
          className="font-mono uppercase text-ink-500"
          style={{ fontSize: 11, letterSpacing: '.05em' }}
        >
          © {new Date().getFullYear()} Milinda Prasan De Silva
        </span>
        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono uppercase text-ink-500 hover:text-accent-500 transition-colors"
              style={{ fontSize: 11, letterSpacing: '.05em' }}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
