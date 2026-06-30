'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const STATS = [
  { n: '30', suffix: '+', label: 'Projects shipped' },
  { n: '4', suffix: 'yrs', label: 'Professional experience' },
  { n: '90', suffix: '+', label: 'Lighthouse scores' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink-200 section-pad">
      <div
        className="wrap grid items-start grid-cols-1 lg:[grid-template-columns:.85fr_1.15fr]"
        style={{ gap: 'clamp(2rem, 5vw, 5rem)' }}
      >
        <Reveal className="relative">
          <div
            className="relative overflow-hidden group"
            style={{ aspectRatio: '4 / 5', borderRadius: 2 }}
          >
            <Image
              src="/images/profile/milinda.jpg"
              alt="Milinda De Silva"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
            />
          </div>
          <span
            className="absolute left-[-.6rem] bottom-[-.6rem] bg-ink-900 text-paper font-mono uppercase"
            style={{ fontSize: 10, letterSpacing: '.12em', padding: '.45rem .7rem' }}
          >
            London · UK
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="font-heading text-ink-900 mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-.02em' }}
          >
            About
          </h2>
          <p className="dropcap text-ink-600 mb-5" style={{ maxWidth: '56ch', fontSize: 18, lineHeight: 1.6 }}>
            I&rsquo;m Milinda - a London-based developer building digital experiences that blend considered design with robust engineering. My work spans enterprise clients, fintech and ambitious independent products.
          </p>
          <p className="text-ink-600 mb-6" style={{ maxWidth: '56ch', fontSize: 18, lineHeight: 1.6 }}>
            Most recently at TEAM LEWIS I engineered websites and digital campaigns for clients including Northern Data, Colt Data Centres and Ada Infrastructure, and co-built a suite of internal AI tools. Now I&rsquo;m taking on select freelance projects.
          </p>
          <Link
            href="/contact"
            className="font-mono uppercase border-b border-ink-900 hover:border-accent-500 hover:text-accent-500 transition-colors pb-1"
            style={{ fontSize: 12, letterSpacing: '.08em' }}
          >
            Let&rsquo;s work together →
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-ink-200 mt-9 pt-7 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-ink-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
                  <span className="text-accent-500">{s.n}</span>{s.suffix}
                </div>
                <div
                  className="font-mono uppercase text-ink-400 mt-2"
                  style={{ fontSize: 10, letterSpacing: '.1em' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
