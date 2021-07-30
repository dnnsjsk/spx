import { css } from '@emotion/css';

/**
 * Set CSS variable.
 *
 * @param {string} tag HTML Element tag (without spx).
 * @param {string} type Property type.
 * @param {string} value CSS value.
 * @param {boolean} global If value should be applied globally (to body).
 * @returns {string} CSS variable.
 */
export function setVar(tag, type, value, global = false) {
  if (global) {
    document.body.classList.add(css`
      --${tag}-${type}: var(--${tag}-token-${type},${value});
    `);
  }
  return `var(--${tag}-${type}${value ? ', ' + value : ''})`;
}
