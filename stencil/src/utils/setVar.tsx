import { css } from '@emotion/css';

/**
 * Set CSS variable.
 */

export const setVar = (tag, property, value, global = false) => {
  if (global) {
    document.body.classList.add(css`
      --${tag}-${property}: var(--${tag}-token-${property},${value});
    `);
  }
  return 'var(--' + tag + '-' + property + ', ' + value + ')';
};
