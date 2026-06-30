'use client';

import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { portfolioDataDesc } from '@/lib/portfolioData';

export default function WorkIndex() {
  return (
    <>
      {/* Page header */}
      <section
        className="wrap"
        style={{ paddingBlock: 'clamp(3rem, 7vw, 5.5rem)' }}
      >
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <Reveal
            as="span"
            className="font-mono uppercase text-ink-400"
            style={{ fontSize: 11, letterSpacing: '.12em' }}
          >
            Portfolio · 2021 - 2025
          </Reveal>
          <Reveal
            as="span"
            className="font-mono uppercase text-ink-400"
            style={{ fontSize: 11, letterSpacing: '.12em' }}
          >
            {portfolioDataDesc.length} projects
          </Reveal>
        </div>
        <Reveal
          as="h1"
          className="font-heading text-ink-900"
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            letterSpacing: '-.035em',
            lineHeight: 0.98,
          }}
        >
          All <em className="italic text-accent-500">work</em>.
        </Reveal>
        <Reveal delay={120} className="mt-6 max-w-[56ch]">
          <p className="text-ink-600" style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', lineHeight: 1.6 }}>
            A complete archive of shipped work - client projects, independent products and experiments. From marketing
            sites to AI tooling and full-stack platforms.
          </p>
        </Reveal>
      </section>

      {/* Projects grid */}
      <section className="wrap border-t border-ink-200" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioDataDesc.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
