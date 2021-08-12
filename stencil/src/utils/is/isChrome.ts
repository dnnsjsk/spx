/**
 * Check if Chrome.
 *
 * @returns {boolean} True if user is using Chrome.
 */
export function isChrome() {
  return /chrome/.test(navigator.userAgent.toLowerCase());
}
