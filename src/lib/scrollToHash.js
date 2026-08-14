export function scrollToHash(e, href, after) {
  if (!href?.startsWith("#")) return;

  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();

  if (window.lenis) {
    window.lenis.scrollTo(el);
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }

  window.history.pushState(null, "", href);
  after?.();
}
