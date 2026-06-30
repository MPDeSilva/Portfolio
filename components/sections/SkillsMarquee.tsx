'use client';

import Reveal from '@/components/Reveal';

const ROW_1 = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  'Python', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Framer Motion',
];
const ROW_2 = [
  'PostgreSQL', 'MongoDB', 'Prisma', 'Supabase', 'Neo4j', 'Redis',
  'Firebase', 'HubSpot', 'Sitecore', 'WordPress', 'Prismic', 'Stripe',
  'Docker', 'Git', 'Vercel', 'Jest',
];

const STACK = [
  {
    kicker: 'Languages',
    items: ['TypeScript / JavaScript', 'Python', 'HTML5 & CSS3 / SASS', 'SQL · HUBL · PHP'],
  },
  {
    kicker: 'Frontend',
    items: ['React · Next.js', 'Tailwind · ShadCN UI', 'Framer Motion', 'Accessibility (WCAG 2.2)'],
  },
  {
    kicker: 'Backend & Data',
    items: ['Node.js · Express', 'PostgreSQL · MongoDB', 'Prisma · Supabase · Neo4j', 'REST APIs & Auth'],
  },
  {
    kicker: 'Platforms & AI',
    items: ['HubSpot · Sitecore · WordPress', 'Vercel · Docker · Git', 'SEO · AIO · GEO & Analytics', 'Multi-model AI tooling'],
  },
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink-200" style={{ paddingBlock: '1.05rem' }}>
      <div
        className={`marquee-row flex gap-[2.6rem] whitespace-nowrap w-max ${
          reverse ? 'animate-marquee-rev' : 'animate-marquee'
        } hover:[animation-play-state:paused]`}
      >
        {doubled.map((term, i) => (
          <span
            key={i}
            className="font-mono uppercase text-ink-500"
            style={{ fontSize: 14, letterSpacing: '.04em' }}
          >
            {term}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section id="skills" className="section-pad">
      <div className="wrap mb-10">
        <div className="flex items-end justify-between flex-wrap gap-3" style={{ marginBottom: 'clamp(2rem, 4vw, 3.4rem)' }}>
          <Reveal as="h2" className="font-heading text-ink-900" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)' }}>
            The toolkit.
          </Reveal>
          <Reveal
            as="span"
            className="font-mono uppercase text-ink-400"
            style={{ fontSize: 11, letterSpacing: '.12em' }}
          >
            Languages · Frameworks · Tools
          </Reveal>
        </div>
      </div>

      <Reveal><MarqueeRow items={ROW_1} /></Reveal>
      <Reveal><MarqueeRow items={ROW_2} reverse /></Reveal>

      <div className="wrap mt-16">
        <div className="hairline-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {STACK.map((col, i) => (
            <Reveal
              key={col.kicker}
              delay={i * 80}
              className="bg-paper hover:bg-ink-100 transition-colors"
              style={{ padding: 'clamp(1.3rem, 2.4vw, 1.8rem)' }}
            >
              <span
                className="font-mono uppercase text-accent-500 block mb-4"
                style={{ fontSize: 10, letterSpacing: '.12em' }}
              >
                {col.kicker}
              </span>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-ink-700" style={{ fontSize: 16, lineHeight: 1.45 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
