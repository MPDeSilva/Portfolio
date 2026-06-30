'use client';

const CHIPS = [
  { label: 'Next.js', blue: false },
  { label: 'React', blue: true },
  { label: 'TypeScript', blue: false },
  { label: 'AI', blue: true },
  { label: 'Node.js', blue: false },
  { label: 'SEO / AIO', blue: false },
];

export default function SkillRing() {
  const step = 360 / CHIPS.length;
  const radius = 170;

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: 340, perspective: '1100px' }}
    >
      <div
        className="relative motion-reduce:[animation:none]"
        style={{
          width: 200,
          height: 200,
          transformStyle: 'preserve-3d',
          animation: 'ring-spin 26s linear infinite',
        }}
      >
        {CHIPS.map((chip, i) => (
          <div
            key={chip.label}
            className={`absolute top-1/2 left-1/2 flex items-center justify-center font-mono rounded-full shadow-sm ${
              chip.blue
                ? 'bg-accent-500 text-white border border-accent-500'
                : 'bg-white/90 text-ink-700 border border-ink-200'
            }`}
            style={{
              width: 112,
              height: 44,
              marginTop: -22,
              marginLeft: -56,
              fontSize: 12,
              letterSpacing: '.04em',
              backfaceVisibility: 'hidden',
              transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
            }}
          >
            {chip.label}
          </div>
        ))}
        <div
          className="absolute top-1/2 left-1/2 rounded-full grid place-items-center font-heading text-white shadow-2xl"
          style={{
            width: 96,
            height: 96,
            marginTop: -48,
            marginLeft: -48,
            fontSize: '2.4rem',
            background: 'radial-gradient(circle at 35% 30%, #1d1d1f, #000)',
          }}
        >
          M<span className="text-accent-500">.</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes ring-spin {
          from { transform: rotateX(-12deg) rotateY(0); }
          to { transform: rotateX(-12deg) rotateY(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .relative { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
