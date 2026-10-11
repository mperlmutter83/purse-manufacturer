/* ────────────────────────────────────────────────────────────────────────────
   Scroll-driven frame sequence for the homepage film.
   - Motion mode (>= 768px wide AND no reduced-motion preference):
       preload + decode every frame behind the loader, then GSAP ScrollTrigger
       pins the stage and scrubs frames while Lenis smooths the scroll.
   - Static mode (< 768px OR prefers-reduced-motion):
       no pin, no frame preload, no Lenis; a single poster frame is shown.
   Everything is scoped to the .pm-motion root and fully torn down by the
   returned cleanup, so client-side navigation away from "/" leaves no trace.
   ──────────────────────────────────────────────────────────────────────────── */

import type { gsap as GsapNS } from 'gsap';
import type { ScrollTrigger as ScrollTriggerNS } from 'gsap/ScrollTrigger';
import type LenisType from 'lenis';

export type FramesManifest = {
  version: string;
  count: number;
  width: number;
  height: number;
  path: string;
  prefix: string;
  digits: number;
  ext: string;
  poster: string;
  posterPortrait?: string;
};

/* Story beats: where the film should be when each section is centred on
   screen. `frame` runs 0 → 1 through the whole sequence (clip 1, 0–0.5: the
   bag comes apart; clip 2, 0.5–1: it rebuilds). The film eases between beats,
   so the exploded view lingers behind About + Services and the bag finishes
   rebuilding as the CTA arrives. */
const BEATS = [
  { el: '#top', frame: 0 }, // assembled bag on the shelf
  { el: '#about', frame: 0.47 }, // fully taken apart
  { el: '#services', frame: 0.68 }, // pieces still suspended, about to rebuild
  { el: '#contact', frame: 1 }, // rebuilt hero shot
];

export const MOTION_QUERY = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';
const PORTRAIT_QUERY = '(max-aspect-ratio: 4/5)';

type Libs = { gsap: typeof GsapNS; ScrollTrigger: typeof ScrollTriggerNS; Lenis: typeof LenisType };

/* Frames survive unmounts, so returning to "/" doesn't download them again. */
const cache = {
  version: '',
  images: [] as (HTMLImageElement | null)[],
  done: 0,
  promise: null as Promise<void> | null,
  listeners: new Set<(p: number) => void>(),
};

function versioned(FR: FramesManifest, url: string) {
  return FR.version ? `${url}?v=${FR.version}` : url;
}

function preload(FR: FramesManifest, onProgress: (p: number) => void): Promise<void> {
  if (cache.version !== FR.version) {
    cache.version = FR.version;
    cache.images = new Array(FR.count).fill(null);
    cache.done = 0;
    cache.promise = null;
  }
  cache.listeners.add(onProgress);
  onProgress(cache.done / FR.count);
  if (!cache.promise) {
    cache.promise = new Promise<void>((resolve) => {
      const total = FR.count;
      let next = 0;
      let inflight = 0;
      const CONCURRENCY = 6;
      const finish = (i: number, img: HTMLImageElement, ok: boolean) => {
        inflight--;
        cache.done++;
        if (ok) cache.images[i] = img;
        cache.listeners.forEach((l) => l(cache.done / total));
        if (cache.done === total) resolve();
        else pump();
      };
      const pump = () => {
        while (inflight < CONCURRENCY && next < total) {
          const i = next++;
          inflight++;
          const img = new Image();
          img.decoding = 'async';
          img.src = versioned(FR, FR.path + FR.prefix + String(i + 1).padStart(FR.digits, '0') + FR.ext);
          // Safari can reject decode() for an image that did load; trust naturalWidth then.
          img.decode().then(
            () => finish(i, img, true),
            () => finish(i, img, img.complete && img.naturalWidth > 0),
          );
        }
      };
      pump();
    });
  }
  return cache.promise.finally(() => cache.listeners.delete(onProgress));
}

let libsPromise: Promise<Libs> | null = null;
function loadLibs(): Promise<Libs> {
  if (!libsPromise) {
    libsPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger'), import('lenis')]).then(
      ([g, st, l]) => {
        g.gsap.registerPlugin(st.ScrollTrigger);
        return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger, Lenis: l.default };
      },
    );
  }
  return libsPromise;
}

export function startMotion(root: HTMLElement, FR: FramesManifest): () => void {
  const canvas = root.querySelector<HTMLCanvasElement>('.stage-canvas');
  const poster = root.querySelector<HTMLImageElement>('.stage-poster');
  const stage = root.querySelector<HTMLElement>('.stage');
  const story = root.querySelector<HTMLElement>('#story');
  const loaderBar = root.querySelector<HTMLElement>('.loader-bar span');
  const loaderPct = root.querySelector<HTMLElement>('.loader-pct');
  const progressBar = root.querySelector<HTMLElement>('.stage-progress span');
  const ctx2d = canvas?.getContext('2d', { alpha: false });
  if (!canvas || !poster || !stage || !story || !ctx2d) return () => {};

  const w = window as Window & { __pmEngine?: boolean };
  w.__pmEngine = true;

  const mq = window.matchMedia(MOTION_QUERY);
  const portraitMq = window.matchMedia(PORTRAIT_QUERY);
  const off: Array<() => void> = [];
  const listen = (target: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions) => {
    target.addEventListener(type, fn, opts);
    off.push(() => target.removeEventListener(type, fn, opts));
  };

  let disposed = false;
  let mode: 'motion' | 'static' | null = null;
  let libs: Libs | null = null;
  let gctx: gsap.Context | null = null;
  let lenis: LenisType | null = null;
  let tick: ((time: number) => void) | null = null;
  let currentFrame = -1;
  let beatMap: Array<[number, number]> = [];

  /* ── Loader ─────────────────────────────────────────────────────────── */
  const setProgress = (p: number) => {
    if (loaderBar) loaderBar.style.transform = `scaleX(${p})`;
    if (loaderPct) loaderPct.textContent = `${Math.round(p * 100)}%`;
    if (cache.images[0] && currentFrame < 0) drawFrame(0, true); // first frame paints behind the loader
  };

  /* ── Canvas drawing (cover-fit, DPR-aware) ──────────────────────────── */
  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = Math.round(window.innerWidth * dpr);
    const ch = Math.round(window.innerHeight * dpr);
    if (canvas!.width !== cw || canvas!.height !== ch) {
      canvas!.width = cw;
      canvas!.height = ch;
      const keep = currentFrame;
      currentFrame = -1;
      drawFrame(Math.max(keep, 0), true);
    }
  }

  function nearestLoaded(i: number) {
    const imgs = cache.images;
    if (imgs[i]) return imgs[i];
    for (let d = 1; d < imgs.length; d++) {
      if (imgs[i - d]) return imgs[i - d];
      if (imgs[i + d]) return imgs[i + d];
    }
    return null;
  }

  function drawFrame(i: number, force = false) {
    if (!force && i === currentFrame) return;
    const img = nearestLoaded(i);
    if (!img) return;
    currentFrame = i;
    const cw = canvas!.width;
    const ch = canvas!.height;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx2d!.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }

  /* ── Beats → film position ──────────────────────────────────────────── */
  function computeBeats(self: ScrollTriggerNS) {
    const range = self.end - self.start || 1;
    let last = 0;
    beatMap = BEATS.map((b, i) => {
      const el = root.querySelector(b.el);
      let y = self.start;
      if (el && i > 0) {
        const r = el.getBoundingClientRect();
        y = r.top + window.scrollY + r.height / 2 - window.innerHeight / 2; // section centred
      }
      last = Math.max(last, Math.min(1, Math.max(0, (y - self.start) / range)));
      return [last, b.frame] as [number, number];
    });
  }

  const easeInOut = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

  function filmAt(p: number) {
    if (beatMap.length < 2) return p;
    if (p <= beatMap[0][0]) return beatMap[0][1];
    for (let i = 1; i < beatMap.length; i++) {
      const [a0, a1] = beatMap[i - 1];
      const [b0, b1] = beatMap[i];
      if (p <= b0) {
        const span = b0 - a0;
        const t = span > 0 ? (p - a0) / span : 1;
        return a1 + (b1 - a1) * easeInOut(t);
      }
    }
    return beatMap[beatMap.length - 1][1];
  }

  /* ── Motion mode ────────────────────────────────────────────────────── */
  function startAnimation(L: Libs) {
    const { gsap, ScrollTrigger, Lenis } = L;

    lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    gctx = gsap.context(() => {
      // 1. Pin the stage for the whole story; content scrolls over it.
      ScrollTrigger.create({ trigger: story, start: 'top top', end: 'bottom bottom', pin: stage, pinSpacing: false });

      // 2. Scrub the frame sequence across the same range, paced by BEATS.
      const playhead = { p: 0 };
      gsap.to(playhead, {
        p: 1,
        ease: 'none',
        scrollTrigger: { trigger: story, start: 'top top', end: 'bottom bottom', scrub: 0.5, onRefresh: computeBeats },
        onUpdate: () => {
          const f = filmAt(playhead.p);
          if (progressBar) progressBar.style.transform = `scaleX(${f})`;
          drawFrame(Math.round(f * (FR.count - 1)));
        },
      });

      // 3. Hero copy drifts up and fades as the film starts.
      gsap.to('.hero-inner', {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 35%', scrub: true },
      });
      gsap.to('.hero-caption, .scroll-cue', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '25% top', scrub: true },
      });

      // 4. Glass cards rise in over the film.
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 90, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 92%', end: 'top 55%', scrub: true } },
        );
      });
      gsap.utils.toArray<HTMLElement>('.service').forEach((item) => {
        gsap.fromTo(
          item,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', scrollTrigger: { trigger: item, start: 'top 95%', end: 'top 75%', scrub: true } },
        );
      });
    }, root);

    drawFrame(0, true);
    ScrollTrigger.refresh();
    document.fonts?.ready.then(() => {
      if (!disposed && mode === 'motion') ScrollTrigger.refresh();
    });
  }

  function stopAnimation() {
    if (gctx) {
      gctx.revert();
      gctx = null;
    }
    if (lenis && libs) {
      if (tick) libs.gsap.ticker.remove(tick);
      libs.gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
    }
    lenis = null;
    tick = null;
    if (progressBar) progressBar.style.transform = 'scaleX(0)';
  }

  function enterMotion() {
    if (mode === 'motion') return;
    mode = 'motion';
    root.classList.add('mode-motion', 'is-loading');
    root.classList.remove('mode-static');
    sizeCanvas();
    Promise.all([preload(FR, setProgress), loadLibs()]).then(
      ([, L]) => {
        if (disposed || mode !== 'motion') return; // switched to static or left the page while loading
        libs = L;
        root.classList.remove('is-loading');
        startAnimation(L);
      },
      () => enterStatic(), // libraries failed to load
    );
  }

  /* ── Static mode (small screens / reduced motion) ───────────────────── */
  function setPoster() {
    if (mode !== 'static') return;
    const src = versioned(FR, portraitMq.matches && FR.posterPortrait ? FR.posterPortrait : FR.poster);
    if (poster!.getAttribute('src') !== src) poster!.src = src;
  }

  function enterStatic() {
    if (mode === 'static') return;
    mode = 'static';
    stopAnimation();
    root.classList.add('mode-static');
    root.classList.remove('mode-motion', 'is-loading');
    setPoster();
  }

  /* ── In-page anchors: go through Lenis when it is running ───────────── */
  listen(root, 'click', (e) => {
    const a = (e.target as Element).closest?.('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href')!;
    const target = id === '#top' ? null : root.querySelector<HTMLElement>(id);
    if (id !== '#top' && !target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target ?? 0, { offset: 0, duration: 1.6 });
    else if (target) target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    else window.scrollTo({ top: 0 });
  });

  /* ── Resize / media changes ─────────────────────────────────────────── */
  let resizeRaf = 0;
  listen(window, 'resize', () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      if (mode === 'motion') sizeCanvas();
    });
  });
  const choose = () => (mq.matches ? enterMotion() : enterStatic());
  listen(mq, 'change', choose);
  listen(portraitMq, 'change', setPoster);

  choose();

  return () => {
    disposed = true;
    stopAnimation();
    mode = null;
    cancelAnimationFrame(resizeRaf);
    off.forEach((fn) => fn());
    cache.listeners.delete(setProgress);
    root.classList.remove('mode-motion', 'mode-static', 'is-loading');
    w.__pmEngine = false;
  };
}
