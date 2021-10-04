/**
 * Check if mobile device.
 *
 * @returns {boolean} True if user is using a mobile device.
 */
export function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
