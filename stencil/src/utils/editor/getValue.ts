/**
 * Get color from CSS variable or just use string instead.
 *
 * @param {string} string String to check.
 * @returns {string} Color string.
 */
export function getValue(string = '') {
  if (string.startsWith('var(--')) {
    return getComputedStyle(document.body)
      .getPropertyValue(string.slice(4, -1))
      .trim();
  } else {
    return string.trim();
  }
}
