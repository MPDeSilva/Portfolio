'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { portfolioDataDesc, PortfolioProject } from '@/lib/portfolioData';

function WorkCard({ project, feature = false }: { project: PortfolioProject; feature?: boolean }) {
  const tags = project.technologies?.slice(0, 4).join(' · ') || project.description;
  return (
    <article
      className={`group ${feature ? 'col-span-12' : 'col-span-12 md:col-span-6'}`}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div
          className="relative overflow-hidden bg-ink-100"
          style={{
            borderRadius: 2,
            aspectRatio: feature ? '21 / 9' : '4 / 3',
          }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            sizes={feature ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
            className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
            style={{ transitionTimingFunction: 'cubic-bezier(0.43, 0.13, 0.23, 0.96)' }}
            priority={feature}
          />
          {/* gradient + view pill overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <span
            className="absolute right-4 bottom-4 font-mono uppercase text-white bg-black/45 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ fontSize: 10, letterSpacing: '.1em', padding: '.5rem .8rem' }}
          >
            View case →
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <h3
            className="font-heading text-ink-900 group-hover:text-accent-500 transition-colors"
            style={{ fontSize: feature ? 'clamp(1.8rem, 3.5vw, 2.6rem)' : 'clamp(1.6rem, 3.2vw, 2.4rem)' }}
          >
            {project.title}
          </h3>
          {project.category && (
            <span
              className="font-mono uppercase text-ink-400 text-right whitespace-nowrap shrink-0 mt-2"
              style={{ fontSize: 10, letterSpacing: '.12em' }}
            >
              {project.category}
            </span>
          )}
        </div>
        <p className="italic text-ink-500 mt-1" style={{ fontSize: 15 }}>
          {tags}
        </p>
      </Link>
    </article>
  );
}

export default function SelectedWork() {
  const featured = portfolioDataDesc.find((p) => p.slug === 'amplifly') ?? portfolioDataDesc[0];
  const rest = portfolioDataDesc.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <section id="work" className="wrap section-pad">
      <div className="flex items-end justify-between flex-wrap gap-3" style={{ marginBottom: 'clamp(2rem, 4vw, 3.4rem)' }}>
        <Reveal as="h2" className="font-heading text-ink-900" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', letterSpacing: '-.02em' }}>
          Selected <em className="italic text-accent-500 not-italic" style={{ fontStyle: 'italic' }}>work</em>.
        </Reveal>
        <Reveal as="span" className="font-mono uppercase text-ink-400" style={{ fontSize: 11, letterSpacing: '.12em' }}>
          2021 — 2025 · 30+ shipped
        </Reveal>
      </div>

      <div
        className="grid grid-cols-12"
        style={{ gap: 'clamp(1.4rem, 3vw, 2.6rem)' }}
      >
        <Reveal className="col-span-12"><WorkCard project={featured} feature /></Reveal>
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80} className="col-span-12 md:col-span-6">
            <WorkCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex justify-center">
        <Link
          href="/work"
          className="font-mono uppercase border-b border-ink-900 hover:border-accent-500 hover:text-accent-500 transition-colors pb-1"
          style={{ fontSize: 12, letterSpacing: '.08em' }}
        >
          View all work →
        </Link>
      </Reveal>
    </section>
  );
}
