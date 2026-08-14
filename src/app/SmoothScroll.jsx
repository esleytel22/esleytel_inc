import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Sections lazy-load below the fold, so the page keeps growing after
    // mount — keep Lenis's scroll limit in sync or it clamps scrollTo calls
    // to whatever height existed at init. ResizeObserver catches most of
    // this, but back it with a few fixed-delay resizes (same pattern as
    // useHashScroll) in case a resize notification gets coalesced.
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.documentElement);

    const resizeTimers = [200, 500, 1000, 2000, 3000].map((delay) =>
      setTimeout(() => lenis.resize(), delay)
    );

    return () => {
      cancelAnimationFrame(rafId);
      resizeTimers.forEach(clearTimeout);
      resizeObserver.disconnect();
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return null;
}
