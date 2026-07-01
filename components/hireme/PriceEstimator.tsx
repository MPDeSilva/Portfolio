'use client';

import { useMemo, useState } from 'react';

interface ServiceOpt { value: string; price: number; }
interface MultOpt { value: string; mult: number; subtitle: string; }

const SERVICES: ServiceOpt[] = [
  { value: 'Marketing / landing site', price: 170 },
  { value: 'Web app / full-stack', price: 1140 },
  { value: 'AI tool / integration', price: 150 },
  { value: 'Knowledge base / docs', price: 80 },
  { value: 'CMS / digital presence', price: 100 },
  { value: 'SEO, AIO & GEO', price: 60 },
];

const SIZES: MultOpt[] = [
  { value: 'Small', mult: 0.7, subtitle: '1-3 pages / one feature' },
  { value: 'Medium', mult: 1, subtitle: 'Multi-page / several features' },
  { value: 'Large', mult: 1.8, subtitle: 'Full product / platform' },
];

const TIMELINES: MultOpt[] = [
  { value: 'Standard', mult: 1, subtitle: 'Normal scheduling' },
  { value: 'Priority', mult: 1.35, subtitle: 'Rushed · +35%' },
];

const ADDONS: ServiceOpt[] = [
  { value: 'Copywriting', price: 100 },
  { value: 'Analytics & tracking', price: 80 },
  { value: 'Accessibility audit', price: 60 },
  { value: '3 months support', price: 90 },
];

function gbp(n: number) {
  return `£${Math.round(n).toLocaleString('en-GB')}`;
}

export default function PriceEstimator() {
  const [services, setServices] = useState<string[]>([]);
  const [size, setSize] = useState('Medium');
  const [timeline, setTimeline] = useState('Standard');
  const [addons, setAddons] = useState<string[]>([]);

  const result = useMemo(() => {
    const serviceTotal = SERVICES.filter((s) => services.includes(s.value)).reduce((a, s) => a + s.price, 0);
    const sizeMult = SIZES.find((s) => s.value === size)?.mult ?? 1;
    const timeMult = TIMELINES.find((t) => t.value === timeline)?.mult ?? 1;
    const addonTotal = ADDONS.filter((a) => addons.includes(a.value)).reduce((a, x) => a + x.price, 0);
    const low = serviceTotal * sizeMult * timeMult + addonTotal;
    const high = low * 1.25;
    return { serviceTotal, sizeMult, timeMult, addonTotal, low, high };
  }, [services, size, timeline, addons]);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const hasSelection = services.length > 0;

  const mailtoBody = useMemo(() => {
    const lines = [
      'Hi Milinda,',
      '',
      'Here\'s the brief from your site estimator:',
      '',
      `Services: ${services.join(', ') || '(none)'}`,
      `Size: ${size}`,
      `Timeline: ${timeline}`,
      `Add-ons: ${addons.join(', ') || '(none)'}`,
      '',
      `Estimated range: ${hasSelection ? `${gbp(result.low)} - ${gbp(result.high)}` : '(pending - no service selected)'}`,
      '',
      'Happy to chat - when would suit you?',
    ];
    return encodeURIComponent(lines.join('\n'));
  }, [services, size, timeline, addons, result, hasSelection]);

  return (
    <div className="grid grid-cols-1 lg:[grid-template-columns:1.35fr_.85fr] gap-8 items-start">
      {/* Form */}
      <form className="flex flex-col gap-9" onSubmit={(e) => e.preventDefault()}>
        {/* Q1 */}
        <Block num="01" title="What do you need?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <Opt
                key={s.value}
                checked={services.includes(s.value)}
                onChange={() => toggle(services, setServices, s.value)}
                label={s.value}
                sub={`from ${gbp(s.price)}`}
              />
            ))}
          </div>
        </Block>

        {/* Q2 */}
        <Block num="02" title="How big is the project?">
          <div className="flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <Opt
                key={s.value}
                pill
                checked={size === s.value}
                onChange={() => setSize(s.value)}
                label={s.value}
                sub={s.subtitle}
                className="flex-1 min-w-[130px]"
              />
            ))}
          </div>
        </Block>

        {/* Q3 */}
        <Block num="03" title="Timeline">
          <div className="flex flex-wrap gap-2">
            {TIMELINES.map((t) => (
              <Opt
                key={t.value}
                pill
                checked={timeline === t.value}
                onChange={() => setTimeline(t.value)}
                label={t.value}
                sub={t.subtitle}
                className="flex-1 min-w-[130px]"
              />
            ))}
          </div>
        </Block>

        {/* Q4 */}
        <Block num="04" title="Optional add-ons">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ADDONS.map((a) => (
              <Opt
                key={a.value}
                checked={addons.includes(a.value)}
                onChange={() => toggle(addons, setAddons, a.value)}
                label={a.value}
                sub={`+${gbp(a.price)}`}
              />
            ))}
          </div>
        </Block>
      </form>

      {/* Result panel */}
      <aside className="bg-ink-900 text-paper rounded-md p-7 lg:p-9 shadow-2xl lg:sticky lg:top-24">
        <span
          className="font-mono uppercase text-ink-400 block mb-4"
          style={{ fontSize: 11, letterSpacing: '.12em' }}
        >
          Estimated investment
        </span>
        <div>
          <span
            className="font-heading block leading-none"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', letterSpacing: '-.01em' }}
          >
            {hasSelection ? `${gbp(result.low)} - ${gbp(result.high)}` : '£0'}
          </span>
          <span
            className="font-mono uppercase text-ink-400 mt-3 block"
            style={{ fontSize: 11, letterSpacing: '.08em' }}
          >
            {hasSelection ? 'Ballpark range · ex. VAT' : 'Select a service to begin'}
          </span>
        </div>

        <div className="mt-6 border-t border-ink-700">
          {services.length === 0 && addons.length === 0 ? (
            <div className="py-2.5 italic text-ink-400 text-sm">Nothing selected yet.</div>
          ) : (
            <>
              {services.map((v) => {
                const s = SERVICES.find((x) => x.value === v)!;
                return (
                  <Line key={v} label={s.value} value={`from ${gbp(s.price)}`} />
                );
              })}
              {hasSelection && (
                <>
                  <Line label={`Size - ${size}`} value={`× ${result.sizeMult}`} />
                  <Line label={`Timeline - ${timeline}`} value={`× ${result.timeMult}`} />
                </>
              )}
              {addons.map((v) => {
                const a = ADDONS.find((x) => x.value === v)!;
                return <Line key={v} label={a.value} value={`+${gbp(a.price)}`} />;
              })}
            </>
          )}
        </div>

        <a
          href={`mailto:milindapds@hotmail.com?subject=${encodeURIComponent('New project brief')}&body=${mailtoBody}`}
          className="block text-center bg-white text-ink-900 px-5 py-3.5 rounded-sm font-mono uppercase mt-3 hover:-translate-y-0.5 transition-transform"
          style={{ fontSize: 12, letterSpacing: '.08em' }}
        >
          Send me this brief
        </a>
        <p className="text-xs text-ink-400 mt-4 leading-relaxed">
          Ballpark only - final quotes depend on scope and detail. No commitment; this just gives us a shared starting point.
        </p>
      </aside>
    </div>
  );
}

function Block({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-mono text-accent-500" style={{ fontSize: 11, letterSpacing: '.12em' }}>
          {num}
        </span>
        <h3 className="font-heading text-ink-900" style={{ fontSize: '1.35rem' }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Opt({
  checked,
  onChange,
  label,
  sub,
  pill = false,
  className = '',
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  sub: string;
  pill?: boolean;
  className?: string;
}) {
  return (
    <label
      className={`relative flex items-center justify-between gap-2 cursor-pointer select-none px-4 py-3 border rounded-sm transition-all ${
        checked
          ? 'border-accent-500 bg-accent-100'
          : 'border-ink-200 bg-white hover:border-ink-400'
      } active:scale-[.99] ${className}`}
    >
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span className="text-ink-700">
        <span className="block text-[15px] leading-snug">{label}</span>
        <span className="block font-mono uppercase text-ink-400 mt-0.5" style={{ fontSize: 10, letterSpacing: '.06em' }}>
          {sub}
        </span>
      </span>
      <span
        className={`shrink-0 w-5 h-5 ${pill ? 'rounded-full' : 'rounded-[5px]'} grid place-items-center border transition-colors ${
          checked ? 'bg-accent-500 border-accent-500' : 'border-ink-300'
        }`}
      >
        {checked && <span className="text-white text-xs leading-none">✓</span>}
      </span>
    </label>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2.5 border-b border-ink-700 text-ink-300" style={{ fontSize: 14 }}>
      <span>{label}</span>
      <span className="font-mono text-white whitespace-nowrap">{value}</span>
    </div>
  );
}
