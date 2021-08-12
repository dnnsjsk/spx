/**
 * Check if Safari.
 *
 * @returns {boolean} True if user is using Safari.
 */
export function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
