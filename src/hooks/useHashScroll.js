import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sections lazy-load images/chunks, so the page can still be growing above
// the target for a bit after navigation. Re-correct the scroll position a
// few times over ~2.5s to catch late layout shifts, but stop as soon as the
// user takes over (wheel/touch/keyboard) so we never fight a manual scroll.
const RECORRECT_DELAYS_MS = [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500];

export default function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    if (!document.getElementById(id)) return;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      if (window.lenis) {
        window.lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timers = RECORRECT_DELAYS_MS.map((delay) =>
      setTimeout(scrollToTarget, delay)
    );

    const cleanup = () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", cleanup);
      window.removeEventListener("touchstart", cleanup);
      window.removeEventListener("keydown", cleanup);
    };

    window.addEventListener("wheel", cleanup, { passive: true });
    window.addEventListener("touchstart", cleanup, { passive: true });
    window.addEventListener("keydown", cleanup);

    return cleanup;
  }, [hash]);
}
