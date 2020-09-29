import { css } from 'emotion'

/**
 * Set CSS property for components.
 */

export const setVar = (tag, property, value, global = false) => {
  if (global === true) {
    document.body.classList.add(css`
      --${tag}-${property}: var(--${tag}-token-${property},${value})
    `)
  }
  return 'var(--' + tag + '-' + property + ', ' + value + ')'
}
