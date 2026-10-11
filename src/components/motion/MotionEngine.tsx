'use client';

import { useEffect } from 'react';
import frames from './frames.json';

/* Attaches the scroll film to the server-rendered .pm-motion markup.
   Renders nothing; the engine is loaded only in the browser. */
export default function MotionEngine() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.pm-motion');
    if (!root) return;
    let stop: (() => void) | null = null;
    let cancelled = false;
    import('./engine').then(({ startMotion }) => {
      if (!cancelled) stop = startMotion(root, frames);
    });
    return () => {
      cancelled = true;
      stop?.();
    };
  }, []);
  return null;
}
