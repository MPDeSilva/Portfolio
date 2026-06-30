'use client';

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
          <a
            href="mailto:milindapds@hotmail.com"
            className="font-mono inline-block border-b-2 border-white/50 hover:text-accent-500 hover:border-accent-500 transition-colors pb-[5px]"
            style={{ fontSize: 'clamp(.85rem, 2vw, 1.25rem)', letterSpacing: '.06em' }}
          >
            milindapds@hotmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}
