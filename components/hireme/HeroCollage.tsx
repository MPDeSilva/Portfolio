'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Card {
  src: string;
  alt: string;
  /** % from top of container */
  top: string;
  /** % from left of container */
  left: string;
  /** % of container width */
  width: string;
  aspect: string;
  /** degrees, kept inside the float keyframe so the tilt never resets */
  rot: number;
  z: number;
  /** animation-delay in seconds for entrance + float desync */
  delay: number;
  /** which float keyframe to use */
  floatDir: 'up' | 'down';
}

const CARDS: Card[] = [
  { src: '/images/collage/photo-1.webp', alt: 'Milinda', top: '6%',  left: '20%', width: '32%', aspect: '4 / 3', rot: -5, z: 2, delay: 0.05, floatDir: 'up' },
  { src: '/images/collage/photo-2.webp', alt: 'Milinda', top: '0%',  left: '52%', width: '26%', aspect: '1 / 1', rot:  4, z: 3, delay: 0.15, floatDir: 'down' },
  { src: '/images/collage/photo-3.webp', alt: 'Milinda', top: '22%', left: '3%',  width: '30%', aspect: '4 / 5', rot: -7, z: 1, delay: 0.25, floatDir: 'down' },
  { src: '/images/collage/photo-4.webp', alt: 'Milinda', top: '30%', left: '36%', width: '36%', aspect: '4 / 3', rot:  2, z: 5, delay: 0.35, floatDir: 'up' },
  { src: '/images/collage/photo-5.webp', alt: 'Milinda', top: '18%', left: '70%', width: '28%', aspect: '4 / 5', rot:  6, z: 4, delay: 0.45, floatDir: 'down' },
  { src: '/images/collage/photo-6.webp', alt: 'Milinda', top: '60%', left: '16%', width: '30%', aspect: '1 / 1', rot:  3, z: 3, delay: 0.55, floatDir: 'up' },
  { src: '/images/collage/photo-7.webp', alt: 'Milinda', top: '56%', left: '54%', width: '32%', aspect: '4 / 3', rot: -4, z: 4, delay: 0.65, floatDir: 'down' },
];

export default function HeroCollage() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pileRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const pile = pileRef.current;
    if (!stage || !pile) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      targetY = px * 14;
      targetX = -py * 14;
      schedule();
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };
    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      pile.style.transform = `rotateX(${curX.toFixed(2)}deg) rotateY(${curY.toFixed(2)}deg)`;
      if (Math.abs(targetX - curX) > 0.05 || Math.abs(targetY - curY) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);
    return () => {
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative w-full"
      style={{ perspective: 1400, aspectRatio: '7 / 6' }}
    >
      <div
        ref={pileRef}
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform .4s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
        }}
      >
        {CARDS.map((card, i) => (
          <div
            key={card.src}
            className="collage-card group absolute"
            style={
              {
                top: card.top,
                left: card.left,
                width: card.width,
                aspectRatio: card.aspect,
                zIndex: card.z,
                opacity: mounted ? undefined : 0,
                animation: mounted
                  ? `collage-in .8s cubic-bezier(0.22, 1, 0.36, 1) ${card.delay}s both, collage-float-${card.floatDir} 6.5s ease-in-out ${card.delay + 0.9}s infinite`
                  : undefined,
                '--rot': `${card.rot}deg`,
              } as React.CSSProperties
            }
          >
            <div
              className="relative w-full h-full overflow-hidden bg-ink-100"
              style={{
                borderRadius: 6,
                border: '4px solid #fff',
                boxShadow: '0 14px 32px -10px rgba(0,0,0,.28), 0 4px 10px rgba(0,0,0,.12)',
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.07]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                priority={i < 2}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .collage-card {
          transform-style: preserve-3d;
          transform: rotate(var(--rot));
          transition: transform .35s cubic-bezier(0.22, 1, 0.36, 1), z-index 0s linear .35s, box-shadow .35s;
          will-change: transform;
        }
        .collage-card:hover {
          z-index: 50 !important;
          transform: rotate(var(--rot)) translateY(-6px) scale(1.04);
          transition: transform .35s cubic-bezier(0.22, 1, 0.36, 1), z-index 0s;
        }
        .collage-card:hover > div {
          box-shadow: 0 26px 50px -12px rgba(0,0,0,.38), 0 8px 18px rgba(0,0,0,.18) !important;
        }

        @keyframes collage-in {
          from { opacity: 0; transform: rotate(var(--rot)) translateY(28px) scale(.96); }
          to   { opacity: 1; transform: rotate(var(--rot)); }
        }
        @keyframes collage-float-up {
          0%, 100% { transform: rotate(var(--rot)) translateY(0); }
          50%      { transform: rotate(var(--rot)) translateY(-11px); }
        }
        @keyframes collage-float-down {
          0%, 100% { transform: rotate(var(--rot)) translateY(0); }
          50%      { transform: rotate(var(--rot)) translateY(11px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .collage-card {
            animation: none !important;
            opacity: 1 !important;
            transform: rotate(var(--rot)) !important;
          }
        }
      `}</style>
    </div>
  );
}
