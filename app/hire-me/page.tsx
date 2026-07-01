import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import PriceEstimator from '@/components/hireme/PriceEstimator';
import HeroCollage from '@/components/hireme/HeroCollage';
import FaqList from '@/components/hireme/FaqList';

export const metadata = {
  title: 'Work with Milinda - Services & Estimate',
  description:
    'Hire Milinda De Silva for full-stack web development, AI tools, SEO and more. Get an instant ballpark estimate.',
};

const WHY = [
  { ic: '◐', title: 'Design and code', body: 'A rare hybrid - I translate Figma to pixel-perfect, accessible front-end myself, so nothing gets lost in translation.' },
  { ic: '◇', title: 'One point of contact', body: 'You work directly with me from first call to launch. Faster decisions, fewer misunderstandings, real accountability.' },
  { ic: '↗', title: 'Built to perform', body: 'Core Web Vitals, accessibility and SEO/AIO are baked in - not bolted on. Lighthouse 90+ is the starting line.' },
  { ic: '◆', title: 'Clear & reliable', body: 'Agile delivery with regular previews, honest timelines and documentation you can actually use after I\'ve gone.' },
];

const SERVICES = [
  { n: '01', title: 'Web & app development', body: 'Full-stack Next.js, React & TypeScript - fast, accessible, responsive.' },
  { n: '02', title: 'AI tools & integration', body: 'Custom assistants, agents and automations wired into your stack.' },
  { n: '03', title: 'SEO, AIO & GEO', body: 'Rank on Google and surface in AI answers - search & generative-engine optimisation.' },
  { n: '04', title: 'Knowledge bases & docs', body: 'Documentation hubs and knowledge bases that scale with your team.' },
  { n: '05', title: 'CMS & digital presence', body: 'WordPress, HubSpot & Sitecore - your digital footprint, set up right.' },
  { n: '06', title: 'Consulting & delivery', body: 'Agile scoping, coordination and delivery - concept to completion.' },
];

const STEPS = [
  { n: '01', title: 'Discover', body: 'A relaxed call about your goals, scope and budget - no jargon, no pressure.' },
  { n: '02', title: 'Plan', body: 'A clear proposal, timeline and fixed quote you sign off before any code.' },
  { n: '03', title: 'Build', body: 'Iterative development with regular previews you can click and feed back on.' },
  { n: '04', title: 'Launch', body: 'Deploy, document and hand over - with support on hand if you want it.' },
];

function SecHead({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body?: string }) {
  return (
    <div className="max-w-[60ch]" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <Reveal as="span" className="font-mono uppercase text-accent-500 block mb-3" style={{ fontSize: 11, letterSpacing: '.14em' }}>
        {eyebrow}
      </Reveal>
      <Reveal as="h2" className="font-heading text-ink-900" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-.02em' }}>
        {title}
      </Reveal>
      {body && (
        <Reveal as="p" className="text-ink-500 mt-4" style={{ fontSize: 17, lineHeight: 1.6 }}>
          {body}
        </Reveal>
      )}
    </div>
  );
}

export default function HireMePage() {
  return (
    <>
      {/* HERO */}
      <section className="wrap" style={{ paddingBlock: 'clamp(3rem, 7vw, 6rem) clamp(2.5rem, 6vw, 5rem)' }}>
        <div className="grid grid-cols-1 lg:[grid-template-columns:1.15fr_.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal as="span" className="inline-flex items-center gap-2 font-mono text-ink-500 mb-5" style={{ fontSize: 14 }}>
              <span className="inline-block" style={{ animation: 'wave 2.4s ease-in-out infinite', transformOrigin: '70% 70%' }}>
                👋
              </span>
              Hi, I&rsquo;m Milinda - nice to meet you.
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="font-heading text-ink-900"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-.01em', maxWidth: '14ch', lineHeight: 1.05 }}
            >
              Your idea deserves a developer who <em className="italic text-accent-500">actually cares.</em>
            </Reveal>
            <Reveal as="p" delay={160} className="text-ink-600 mt-6 max-w-[44ch]" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', lineHeight: 1.55 }}>
              I&rsquo;m a full-stack developer who designs <em className="italic">and</em> builds - so you get one dependable person who sweats the details, communicates clearly, and ships things people love to use.
            </Reveal>
            <Reveal delay={240} className="mt-8 flex gap-5 items-center flex-wrap">
              <Link
                href="#estimate"
                className="bg-ink-900 text-paper px-7 py-3.5 rounded-sm font-mono uppercase hover:bg-ink-700 transition-colors"
                style={{ fontSize: 12, letterSpacing: '.08em' }}
              >
                Get a price estimate
              </Link>
              <Link
                href="#why"
                className="font-mono uppercase text-ink-500 border-b border-ink-300 hover:text-ink-900 hover:border-ink-900 transition-colors pb-0.5"
                style={{ fontSize: 12, letterSpacing: '.08em' }}
              >
                Why work with me →
              </Link>
            </Reveal>
            <Reveal delay={300} className="mt-9 flex gap-8 flex-wrap">
              {[
                { n: '30+', l: 'Projects shipped' },
                { n: '5yr', l: 'Experience' },
                { n: '1:1', l: 'Direct with me' },
              ].map((t) => (
                <div key={t.l}>
                  <b className="font-heading block" style={{ fontSize: '1.7rem', fontWeight: 400 }}>
                    {t.n}
                  </b>
                  <span className="font-mono uppercase text-ink-400" style={{ fontSize: 10, letterSpacing: '.1em' }}>
                    {t.l}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={200}>
            <HeroCollage />
          </Reveal>
        </div>
        <style>{`@keyframes wave { 0%,60%,100%{transform:rotate(0)} 10%{transform:rotate(16deg)} 20%{transform:rotate(-8deg)} 30%{transform:rotate(16deg)} 40%{transform:rotate(-4deg)} 50%{transform:rotate(10deg)} }`}</style>
      </section>

      {/* WHY ME */}
      <section id="why" className="border-t border-ink-200 section-pad">
        <div className="wrap">
          <SecHead
            eyebrow="Why work with me"
            title="Big-agency quality, without the agency."
            body="You talk to the person doing the work. No account managers, no hand-offs, no surprises - just clear communication and code that holds up."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
            {WHY.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 60}
                className="bg-white border border-ink-200 rounded-md hover:shadow-md hover:border-ink-300 transition-all"
                style={{ padding: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                <div
                  className="w-10 h-10 rounded-sm bg-accent-100 text-accent-500 grid place-items-center font-heading mb-4"
                  style={{ fontSize: '1.3rem' }}
                >
                  {w.ic}
                </div>
                <h3 className="font-heading text-ink-900 mb-2" style={{ fontSize: '1.35rem' }}>
                  {w.title}
                </h3>
                <p className="text-ink-500" style={{ fontSize: 16, lineHeight: 1.55 }}>
                  {w.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-ink-200 bg-ink-100 section-pad">
        <div className="wrap">
          <SecHead eyebrow="What I can build for you" title="Everything from idea to launch." />
        </div>
        <div className="wrap">
          <div className="hairline-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.n}
                delay={(i % 3) * 60}
                className="bg-paper hover:bg-white transition-colors"
                style={{ padding: 'clamp(1.4rem, 3vw, 2rem)' }}
              >
                <span
                  className="font-mono uppercase text-accent-500"
                  style={{ fontSize: 11, letterSpacing: '.12em' }}
                >
                  {s.n}
                </span>
                <h3 className="font-heading text-ink-900 mt-3 mb-2" style={{ fontSize: '1.35rem' }}>
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

      {/* ESTIMATOR */}
      <section id="estimate" className="border-t border-ink-200 section-pad">
        <div className="wrap">
          <SecHead
            eyebrow="Instant ballpark"
            title="Build your estimate."
            body="Pick what you need and get an honest ballpark in seconds - no email wall. We'll firm it up together on a call."
          />
          <PriceEstimator />
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-ink-200 section-pad">
        <div className="wrap">
          <SecHead eyebrow="How it works" title="A simple, transparent process." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80} className="pt-4 border-t-2 border-ink-900">
                <span className="font-mono text-ink-400" style={{ fontSize: 12 }}>
                  {s.n}
                </span>
                <h3 className="font-heading text-ink-900 mt-2 mb-2" style={{ fontSize: '1.25rem' }}>
                  {s.title}
                </h3>
                <p className="text-ink-500" style={{ fontSize: 14, lineHeight: 1.5 }}>
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL NOTE */}
      <section className="border-t border-ink-200 section-pad">
        <div className="wrap grid grid-cols-1 lg:[grid-template-columns:.8fr_1.2fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-md bg-ink-100 shadow-md" style={{ aspectRatio: '4 / 5' }}>
              <Image
                src="/images/profile/milinda.jpg"
                alt="Milinda De Silva"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="font-heading text-ink-900" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.4, fontWeight: 300 }}>
              &ldquo;I started building for the web because I love the moment something{' '}
              <em className="italic text-accent-500">clicks</em> for the person using it. That&rsquo;s still why I do this - and why I&rsquo;ll treat your project like it&rsquo;s my own.&rdquo;
            </blockquote>
            <div className="mt-5 font-mono text-ink-500" style={{ fontSize: 13 }}>
              - Milinda De Silva, London
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink-200 section-pad">
        <div className="wrap">
          <SecHead eyebrow="Good to know" title="Questions, answered." />
          <FaqList />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-ink-200 section-pad">
        <div className="wrap">
          <div
            className="bg-accent-500 text-white rounded-2xl text-center"
            style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            <Reveal as="span" className="font-mono uppercase block mb-4 text-white/80" style={{ fontSize: 12, letterSpacing: '.14em' }}>
              Available for new projects
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="font-heading text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', letterSpacing: '-.02em', lineHeight: 1.1 }}
            >
              Let&rsquo;s talk about<br />your project.
            </Reveal>
            <Reveal as="p" delay={160} className="text-white/90 max-w-[44ch] mx-auto mt-5 mb-9" style={{ fontSize: 17, lineHeight: 1.55 }}>
              Tell me what you&rsquo;re building and I&rsquo;ll come back with a clear plan and a fair price. I read and reply to every message personally.
            </Reveal>
            <Reveal delay={220}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-accent-600 px-9 py-4 rounded-full font-mono uppercase hover:-translate-y-0.5 hover:shadow-lg transition-all"
                style={{ fontSize: 12, letterSpacing: '.08em' }}
              >
                Start the conversation <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
