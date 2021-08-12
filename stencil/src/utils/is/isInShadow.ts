/**
 * Check if Safari.
 *
 * @param {HTMLElement} node HTML Element to check.
 * @returns {boolean} True if node is inside Shadow DOM.
 */
export function isInShadow(node) {
  return node.getRootNode() instanceof ShadowRoot;
}
