/**
 * Global componentWillLoad function for all components.
 *
 * @param {HTMLElement} obj HTML element to apply function to.
 */
export function globalComponentWillUpdate(obj) {
  if (obj?.el?.shadowRoot) {
    obj.el.shadowRoot
      .querySelectorAll('style[data-emotion]')
      .forEach((item) => item.remove());
  }
}
