'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HireBanner() {
  return (
    <section className="wrap" style={{ paddingBlock: 'clamp(2rem, 5vw, 4rem)' }}>
      <Reveal>
        <div className="hire-band relative overflow-hidden bg-ink-900 text-paper">
          <div className="hire-copy relative">
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
            <span className="txt relative z-10">Work with me</span>
            <span className="arw relative z-10" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </Reveal>

      <style jsx>{`
        .hire-band {
          border-radius: 14px;
          padding: clamp(2.6rem, 6vw, 5rem) clamp(1.6rem, 5vw, 4.5rem);
          display: grid;
          grid-template-columns: 1.35fr auto;
          align-items: center;
          gap: clamp(1.8rem, 4vw, 3.5rem);
          isolation: isolate;
        }
        .hire-band::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: -40%;
          background:
            radial-gradient(38% 55% at 22% 30%, color-mix(in oklab, #0070f3 55%, transparent), transparent 70%),
            radial-gradient(34% 50% at 82% 72%, color-mix(in oklab, #0070f3 38%, transparent), transparent 70%);
          filter: blur(38px);
          opacity: 0.7;
          animation: hire-drift 18s cubic-bezier(0.65, 0, 0.35, 1) infinite alternate;
        }
        .hire-band::after {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 0;
          opacity: 0.5;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 46px 46px;
          -webkit-mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, #000, transparent 78%);
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, #000, transparent 78%);
          animation: hire-grid 24s linear infinite;
        }
        @keyframes hire-drift {
          0%   { transform: translate3d(-4%, -3%, 0) scale(1); }
          50%  { transform: translate3d(5%, 4%, 0) scale(1.12); }
          100% { transform: translate3d(-2%, 6%, 0) scale(1.05); }
        }
        @keyframes hire-grid {
          to { background-position: 46px 46px; }
        }

        .hire-btn {
          --pad: clamp(1rem, 2vw, 1.25rem);
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          white-space: nowrap;
          background: #ffffff;
          color: #000;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: clamp(12px, 1.3vw, 14px);
          line-height: 1;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: var(--pad) clamp(1.5rem, 3vw, 2.2rem);
          border-radius: 999px;
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      color 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.6);
        }
        .hire-btn :global(.txt) {
          display: inline-flex;
          align-items: center;
          line-height: 1;
          transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hire-btn :global(.arw) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          font-size: 1.05em;
          transform: translateY(-1px);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hire-btn:hover :global(.arw) {
          transform: translateY(-1px) translateX(5px);
        }
        .hire-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          background: #0070f3;
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hire-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.55) 48%, transparent 62%);
          transform: translateX(-120%);
          animation: hire-shine 4.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @keyframes hire-shine {
          0%, 72% { transform: translateX(-120%); }
          88%, 100% { transform: translateX(120%); }
        }
        .hire-btn:hover {
          transform: translateY(-3px);
          color: #ffffff;
          box-shadow: 0 18px 40px -14px color-mix(in oklab, #0070f3 70%, black);
        }
        .hire-btn:hover::before { transform: translateX(0); }
        .hire-btn:hover :global(.txt),
        .hire-btn:hover :global(.arw) { color: #ffffff; }
        .hire-btn:focus-visible {
          outline: 2px solid #0070f3;
          outline-offset: 3px;
        }

        @media (max-width: 820px) {
          .hire-band {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hire-band::before,
          .hire-band::after,
          .hire-btn::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
