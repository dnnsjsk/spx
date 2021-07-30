/**
 * Check if component is in view.
 *
 * @param {HTMLElement} el HTML element to watch.
 * @param {Function} functionToRun Callback to run once element is in view.
 */
export function intersectionObserver(el, functionToRun) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        functionToRun();
        observer.unobserve(el);
      }
    });
  });

  observer.observe(el);
}
