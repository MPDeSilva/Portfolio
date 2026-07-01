'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How much will my project actually cost?',
    a: "The estimator above gives an honest ballpark. The final figure depends on scope and detail, which we'll nail down together on a call - and I'll always give you a fixed quote before we start, so there are no surprises.",
  },
  {
    q: 'How long do projects take?',
    a: "A landing site is often 2-3 weeks; a full application can run a couple of months. I'll give you a realistic timeline up front and keep you updated with regular previews throughout.",
  },
  {
    q: 'Do you work with people outside London?',
    a: 'Absolutely. I work remotely with clients anywhere and meet in person around London when it helps. Time zones have never been a problem.',
  },
  {
    q: 'What happens after launch?',
    a: "You get clear documentation and a tidy handover. If you'd like ongoing help - maintenance, new features, SEO - I offer support packages, but you're never locked in.",
  },
];

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-ink-200">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink-200">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full text-left bg-transparent border-0 cursor-pointer py-5 flex justify-between items-center gap-4 font-heading text-ink-900"
              style={{ fontSize: '1.25rem' }}
            >
              <span>{item.q}</span>
              <span
                className="font-mono text-accent-500 shrink-0 transition-transform duration-300"
                style={{ fontSize: '1.3rem', transform: isOpen ? 'rotate(45deg)' : 'none' }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-[400ms]"
              style={{ maxHeight: isOpen ? 400 : 0, transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
            >
              <p className="text-ink-500 pb-5 max-w-[64ch]" style={{ fontSize: 16, lineHeight: 1.6 }}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
