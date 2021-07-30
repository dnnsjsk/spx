/**
 * Global componentWillLoad function for all components.
 *
 * @param {HTMLElement} el HTML element to apply function to.
 */
export function globalComponentWillUpdate(el) {
  if (el.shadowRoot) {
    el.shadowRoot
      .querySelectorAll('style[data-emotion]')
      .forEach((item) => item.remove());
  }
}
