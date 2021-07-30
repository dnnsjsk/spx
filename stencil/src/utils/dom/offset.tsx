/**
 * Get offset number or calculate element height.
 *
 * @param {HTMLElement | number} el Get height from HTML element or set height.
 * @returns {number} Return height.
 */
export function offset(el) {
  if (el && !isNaN(el)) {
    return el;
  } else if (el) {
    return document.querySelector(el).getBoundingClientRect().height;
  } else if (!el) {
    return 0;
  }
}
