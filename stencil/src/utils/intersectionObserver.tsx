/**
 * Check if component is in view.
 */

export const intersectionObserver = (el, functionToRun) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        functionToRun();
        observer.unobserve(el);
      }
    });
  });

  observer.observe(el);
};
