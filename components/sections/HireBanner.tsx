'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HireBanner() {
  return (
    <section className="wrap" style={{ paddingBlock: 'clamp(2rem, 5vw, 4rem)' }}>
      <Reveal>
        <div className="hire-band">
          <div className="relative">
            <span
              className="font-mono uppercase text-accent-500 inline-flex items-center gap-2"
              style={{ fontSize: 12, letterSpacing: '.12em' }}
            >
              <span
                className="inline-block w-[7px] h-[7px] rounded-full bg-[#16a34a] animate-pulse-dot"
                aria-hidden
              />
              Available for freelance - 2026
            </span>
            <h2
              className="font-heading mt-4 mb-3 text-paper"
              style={{
                fontSize: 'clamp(2.1rem, 5.4vw, 4.2rem)',
                letterSpacing: '-.025em',
                lineHeight: 1.05,
                textWrap: 'balance',
              }}
            >
              Got a project in mind?<br />
              Let&rsquo;s <em className="italic text-accent-500">build it together.</em>
            </h2>
            <p
              className="max-w-[46ch]"
              style={{
                color: 'color-mix(in oklab, #ffffff 72%, transparent)',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.55,
              }}
            >
              From a first-line-of-code MVP to a full product rebuild - see how we can work together and start the
              conversation.
            </p>
          </div>

          <Link href="/hire-me" className="hire-btn" aria-label="Work with me">
            <span className="txt">Work with me</span>
            <span className="arw" aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
