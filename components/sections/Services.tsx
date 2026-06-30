'use client';

import Reveal from '@/components/Reveal';

const SERVICES = [
  { n: '01', title: 'Web & app development', body: 'Production-ready sites and applications in Next.js, React & TypeScript — fast, accessible, responsive.' },
  { n: '02', title: 'Knowledge bases & docs', body: 'Knowledge hubs, technical documentation and handover materials your team will actually use.' },
  { n: '03', title: 'CMS & digital presence', body: 'HubSpot, WordPress & Sitecore — get your business online with a digital footprint that lasts.' },
  { n: '04', title: 'AI tools & integration', body: 'Custom AI assistants and micro-tools — multi-model chat, generators and workflow accelerators.' },
  { n: '05', title: 'SEO, AIO & GEO', body: 'Rank on Google and surface in AI answers — search, AI & generative-engine optimisation, with analytics.' },
  { n: '06', title: 'Consulting & delivery', body: 'Technical consulting and Agile project delivery — turning business goals into shippable plans.' },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-ink-200 section-pad">
      <div className="wrap">
        <div className="flex items-end justify-between flex-wrap gap-3" style={{ marginBottom: 'clamp(2rem, 4vw, 3.4rem)' }}>
          <Reveal as="h2" className="font-heading text-ink-900" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', letterSpacing: '-.02em' }}>
            How I can <em className="italic text-accent-500">help</em>.
          </Reveal>
          <Reveal as="span" className="font-mono uppercase text-ink-400" style={{ fontSize: 11, letterSpacing: '.12em' }}>
            Services
          </Reveal>
        </div>

        <div className="hairline-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.n}
              delay={(i % 3) * 80}
              className="svc-cell relative bg-paper hover:bg-ink-100 transition-colors"
              style={{ padding: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              <span className="svc-top-bar" aria-hidden />
              <span
                className="font-mono uppercase text-accent-500 block mb-3"
                style={{ fontSize: 11, letterSpacing: '.12em' }}
              >
                {s.n}
              </span>
              <h3 className="font-heading text-ink-900 mb-3" style={{ fontSize: '1.5rem' }}>
                {s.title}
              </h3>
              <p className="text-ink-500" style={{ fontSize: 16, lineHeight: 1.6 }}>
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
