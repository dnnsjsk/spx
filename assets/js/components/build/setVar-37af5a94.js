import { c as css } from './emotion-css.esm-6bacb7ba.js';

/**
 * Set CSS variable.
 */
const setVar = (tag, property, value, global = false) => {
  if (global) {
    document.body.classList.add(css `
      --${tag}-${property}: var(--${tag}-token-${property},${value});
    `);
  }
  return 'var(--' + tag + '-' + property + ', ' + value + ')';
};

export { setVar as s };
