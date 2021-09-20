/**
 * Check if element is overflowing.
 *
 * @param {HTMLElement} el HTML Element to check.
 * @returns {boolean} True if element is overflowing.
 */
export function isOverflow(el) {
  const curOverflow = el.style.overflow;

  if (!curOverflow || curOverflow === 'visible') el.style.overflow = 'hidden';

  const isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

  el.style.overflow = curOverflow;

  return isOverflowing;
}
