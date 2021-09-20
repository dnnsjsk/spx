import DOMPurify from 'dompurify';

/**
 * Sanitize content.
 *
 * @param {string} content Content to be sanitized.
 * @returns {string} Sanitized content.
 */
export function sanitize(content) {
  return DOMPurify.sanitize(content);
}
