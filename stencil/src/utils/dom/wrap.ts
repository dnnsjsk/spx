/**
 * Wrap element in another element.
 *
 * @param {HTMLElement} el HTML element to wrap.
 * @param {HTMLElement} wrapper HTML element to use as a wrapper.
 */
export function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
