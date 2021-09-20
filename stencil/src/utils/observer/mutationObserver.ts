/**
 * Set up a mutation observer.
 *
 * @param {HTMLElement} el HTML element to watch.
 * @param {object} options Settings.
 * @param {Function} functionToRun Callback to run once element is in view.
 * @param {boolean} runOnce Disconnect observer after changes.
 */
export function mutationObserver(el, options, functionToRun, runOnce = false) {
  const callback = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      functionToRun(mutation);

      if (runOnce) {
        observer.disconnect();
      }
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(el, options);
}
