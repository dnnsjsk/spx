/**
 * Set up a mutation observer.
 *
 * @param {HTMLElement} el HTML element to watch.
 * @param {object} options Settings.
 * @param {Function} functionToRun Callback to run once element is in view.
 */
export function mutationObserver(el, options, functionToRun) {
  const callback = (mutationsList) => {
    mutationsList.forEach(() => {
      functionToRun();
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(el, options);
}
