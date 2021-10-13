/**
 * Check if element is in Shadow DOM.
 *
 * @param {HTMLElement} node HTML Element to check.
 * @returns {boolean} True if node is inside Shadow DOM.
 */
export function isInShadow(node) {
  let parent = node && node.parentNode;
  while (parent) {
    if (parent.toString() === '[object ShadowRoot]') {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}
