import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { site } from '../data/site';

type Props = {
  eyebrow: string;
  label: string;
  city: string;
  coords: string;
  tz: string;
};

const MANTA: [number, number] = [site.location.lat, site.location.lng];
const INITIAL_PHI = 2.85;
const INITIAL_THETA = 0.15;

export default function LocationGlobe({
  eyebrow,
  label,
  city,
  coords,
  tz,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const phiRef = useRef(INITIAL_PHI);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.cursor = 'grab';
    canvas.setAttribute('aria-label', `${city} — ${coords}`);
    container.appendChild(canvas);

    let width = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let frameId = 0;
    let disposed = false;
    const startedAt = performance.now();

    const onPointerDown = (event: PointerEvent) => {
      pointerInteracting.current = event.clientX;
      pointerMovement.current = 0;
      canvas.style.cursor = 'grabbing';
    };
    const onPointerUp = () => {
      if (pointerInteracting.current !== null) {
        phiRef.current += pointerMovement.current;
        pointerMovement.current = 0;
        pointerInteracting.current = null;
      }
      canvas.style.cursor = 'grab';
    };
    const onPointerMove = (event: PointerEvent) => {
      if (pointerInteracting.current === null) return;
      pointerMovement.current = (event.clientX - pointerInteracting.current) * 0.01;
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerout', onPointerUp);
    canvas.addEventListener('pointermove', onPointerMove);

    const markerSize = (now: number) => {
      const t = (now - startedAt) / 320;
      return 0.05 + 0.04 * (0.5 + 0.5 * Math.sin(t));
    };

    const tick = (now: number) => {
      if (disposed || !globe) return;

      if (pointerInteracting.current === null) {
        phiRef.current += 0.004;
      }

      globe.update({
        phi: phiRef.current + pointerMovement.current,
        markers: [
          {
            location: MANTA,
            size: markerSize(now),
            color: [0.4, 1, 0.45],
          },
        ],
      });

      frameId = requestAnimationFrame(tick);
    };

    const init = () => {
      if (disposed) return;
      width = container.offsetWidth;
      if (width < 2) {
        frameId = requestAnimationFrame(init);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 2, 2);
      canvas.width = width * dpr;
      canvas.height = width * dpr;

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: INITIAL_PHI,
        theta: INITIAL_THETA,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        mapBaseBrightness: 0.05,
        baseColor: [0.9, 0.9, 0.9],
        markerColor: [0.4, 1, 0.45],
        glowColor: [0.45, 0.45, 0.45],
        markers: [{ location: MANTA, size: 0.07, color: [0.4, 1, 0.45] }],
        markerElevation: 0.04,
        scale: 1.05,
      });

      frameId = requestAnimationFrame(tick);
    };

    const onResize = () => {
      if (!globe || disposed) return;
      width = container.offsetWidth;
      if (width < 2) return;
      const dpr = Math.min(window.devicePixelRatio || 2, 2);
      canvas.width = width * dpr;
      canvas.height = width * dpr;
      globe.update({ width: width * dpr, height: width * dpr });
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);
    frameId = requestAnimationFrame(init);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerout', onPointerUp);
      canvas.removeEventListener('pointermove', onPointerMove);
      globe?.destroy();
      canvas.remove();
    };
  }, [city, coords]);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(61_61_61_/_0.4),transparent_55%)]" />

      <div className="relative z-10 flex items-center gap-2 px-5 pt-5 md:px-6 md:pt-6">
        <span className="marker-pulse size-2.5 rounded-full bg-[#66ff73]" aria-hidden="true" />
        <p className="text-sm text-ink/90">{eyebrow}</p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto aspect-square w-full max-w-[420px] touch-none"
      />

      <div className="relative z-10 m-4 rounded-2xl border border-line bg-bg/85 px-4 py-4 backdrop-blur-sm md:m-5 md:px-5">
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="10" r="2.2" fill="currentColor" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">{label}</p>
            <p className="truncate text-base font-semibold text-ink">{city}</p>
            <p className="text-sm text-muted">{coords}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 text-sm text-muted">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M12 7.5V12l3 1.75"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span>{tz}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
