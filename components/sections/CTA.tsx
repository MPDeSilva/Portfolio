'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function CTA() {
  return (
    <section id="contact" className="cta-grid-bg relative bg-ink-900 text-paper section-pad overflow-hidden">
      <div className="wrap relative text-center">
        <Reveal
          as="span"
          className="font-mono uppercase text-accent-500 block"
          style={{ fontSize: 12, letterSpacing: '.14em' }}
        >
          Available for new projects
        </Reveal>
        <Reveal as="h2"
          className="font-heading text-paper"
          style={{
            fontSize: 'clamp(2.8rem, 11vw, 9rem)',
            letterSpacing: '-.03em',
            margin: '1.2rem 0 1.8rem',
            lineHeight: 1,
          }}
        >
          LET&rsquo;S <em className="italic text-accent-500">talk.</em>
        </Reveal>
        <Reveal>
          <Link
            href="/contact"
            className="font-mono uppercase inline-flex items-center gap-2 bg-paper text-ink-900 hover:bg-accent-500 hover:text-paper hover:-translate-y-0.5 transition-all rounded-full"
            style={{ fontSize: 12, letterSpacing: '.08em', padding: '1.05rem 2.2rem' }}
          >
            Start the conversation <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
