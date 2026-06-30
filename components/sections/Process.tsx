'use client';

import Reveal from '@/components/Reveal';

const STEPS = [
  { n: '01', title: 'Discover', body: 'Get aligned on goals, constraints and audience. Define what success looks like.' },
  { n: '02', title: 'Design', body: 'Wireframes through to hi-fi - interface, type, motion and tokens.' },
  { n: '03', title: 'Build', body: 'Ship iteratively in Next.js / React with tests, telemetry and accessibility baked in.' },
  { n: '04', title: 'Launch', body: 'Deploy on Vercel, measure with analytics and Lighthouse, then iterate.' },
];

export default function Process() {
  return (
    <section className="border-t border-ink-200 section-pad">
      <div className="wrap">
        <div className="flex items-end justify-between flex-wrap gap-3" style={{ marginBottom: 'clamp(2rem, 4vw, 3.4rem)' }}>
          <Reveal as="h2" className="font-heading text-ink-900" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', letterSpacing: '-.02em' }}>
            The <em className="italic text-accent-500">process</em>.
          </Reveal>
          <Reveal as="span" className="font-mono uppercase text-ink-400" style={{ fontSize: 11, letterSpacing: '.12em' }}>
            How it works
          </Reveal>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 'clamp(1.2rem, 3vw, 2.4rem)' }}
        >
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 80}
              className="pt-5 border-t-2 border-ink-900"
            >
              <span
                className="font-mono text-ink-400 font-semibold block mb-3"
                style={{ fontSize: 11, letterSpacing: '.12em' }}
              >
                {s.n}
              </span>
              <h3 className="font-heading text-ink-900 mb-3" style={{ fontSize: '1.35rem' }}>
                {s.title}
              </h3>
              <p className="text-ink-500" style={{ fontSize: 16, lineHeight: 1.5 }}>
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
