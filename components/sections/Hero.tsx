'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section
      className="wrap flex flex-col justify-center"
      style={{
        minHeight: 'clamp(640px, 92vh, 1000px)',
        paddingTop: 'clamp(3.5rem, 8vw, 6rem)',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
        <Reveal className="font-mono uppercase leading-relaxed" style={{ fontSize: 11, letterSpacing: '.1em' }}>
          <div className="text-ink-400">Full-stack &amp; web developer</div>
          <div className="text-ink-700">Based in London, UK</div>
        </Reveal>
        <Reveal
          delay={120}
          className="inline-flex items-center gap-2 border border-ink-200 rounded-full px-3 py-1.5"
        >
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-[#16a34a] animate-pulse-dot"
            aria-hidden
          />
          <span
            className="font-mono uppercase text-ink-700"
            style={{ fontSize: 10, letterSpacing: '.1em' }}
          >
            Available for projects — 2025
          </span>
        </Reveal>
      </div>

      {/* Headline */}
      <h1
        className="font-heading"
        style={{
          fontSize: 'clamp(3.2rem, 14vw, 12.5rem)',
          letterSpacing: '-.035em',
          lineHeight: 0.98,
        }}
      >
        <Reveal as="span" delay={120} className="block text-ink-900">DESIGN.</Reveal>
        <Reveal as="span" delay={240} className="block text-outline">DEVELOP.</Reveal>
        <Reveal
          as="span"
          delay={360}
          className="block italic text-accent-500"
        >
          deliver.
        </Reveal>
      </h1>

      {/* Sub row */}
      <div className="mt-12 flex items-end justify-between flex-wrap gap-6">
        <Reveal delay={480} className="max-w-[42ch]">
          <p className="text-ink-600" style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)', lineHeight: 1.55 }}>
            Full-stack developer turning ambitious ideas into{' '}
            <span className="text-ink-900">fast, beautiful, dependable</span> web products — from marketing sites to AI tooling.
          </p>
          <div className="mt-7 flex items-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="font-mono uppercase bg-ink-900 text-paper hover:bg-accent-500 hover:-translate-y-0.5 transition-all inline-block"
              style={{ fontSize: 12, letterSpacing: '.08em', padding: '.95rem 1.5rem' }}
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="font-mono uppercase border-b border-ink-900 hover:border-accent-500 hover:text-accent-500 transition-colors pb-1"
              style={{ fontSize: 12, letterSpacing: '.08em' }}
            >
              View selected work
            </Link>
          </div>
        </Reveal>
        <Reveal
          delay={600}
          className="hidden sm:flex flex-col items-center font-mono uppercase text-ink-400"
        >
          <span style={{ fontSize: 10, letterSpacing: '.14em' }}>Scroll</span>
          <span className="animate-bob mt-1" aria-hidden>↓</span>
        </Reveal>
      </div>
    </section>
  );
}
