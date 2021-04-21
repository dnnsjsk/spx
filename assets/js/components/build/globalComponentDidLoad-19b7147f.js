/**
 * Set up a mutation observer.
 */
const mutationObserver = (element, options, functionToRun) => {
  const callback = (mutationsList) => {
    mutationsList.forEach(() => {
      functionToRun();
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(element, options);
};

/**
 * Global componentDidLoad function for all components.
 */
const globalComponentDidLoad = (el) => {
  /** Mark that component has been loaded. */
  el.setAttribute('has-loaded', '');
  /** Setup mutation observer to check if child elements have been added and reload component. */
  if (el.tagName !== 'SPX-TYPEWRITER' &&
    el.tagName !== 'SPX-ANIMATE' &&
    el.tagName !== 'SPX-LIGHTBOX' &&
    el.tagName !== 'SPX-DOCS' &&
    el.tagName !== 'SPX-CODE') {
    mutationObserver(el, {
      childList: true,
    }, function () {
      el.reload();
    });
  }
};

export { globalComponentDidLoad as g, mutationObserver as m };
