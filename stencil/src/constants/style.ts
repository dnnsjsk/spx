import { setVar } from '../utils/setVar';
import { css } from '@emotion/css';
import { setClamp } from '../utils/setClamp';

/**
 * Global defaults.
 */

export const bpMobileWidth = 768;
export const fontFamily = 'var(--spx-font-family)';
export const fontSize = 'var(--spx-font-size)';
export const borderRadius = 'var(--spx-border-radius)';
export const transitionDuration = 'var(--spx-transition-duration)';
export const transitionDuration2 = 'var(--spx-transition-duration-2)';
export const transitionTimingFunction = 'var(--spx-transition-timing-function)';

/**
 * Global styles.
 */

const globalStyles = css({
  '--spx-font-family':
    'var(--spx-token-font-family, helvetica, segoe, arial, sans-serif)',
  '--spx-font-size': 'var(--spx-token-font-size, 16px)',
  '--spx-border-radius': 'var(--spx-token-border-radius, 0.375rem)',
  '--spx-transition-duration': 'var(--spx-token-transition-duration, 150ms)',
  '--spx-transition-duration-2':
    'var(--spx-token-transition-duration-2, 500ms)',
  '--spx-transition-timing-function':
    'var(--spx-token-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1))',
});

document.body.classList.add(globalStyles);

/**
 * Positioning properties.
 */

export const position = (component, array, distanceX, distanceY) => ({
  top:
    array[0] === 'top' &&
    'var(--spx-' + component + '-distance-y, ' + distanceY + ')',
  right:
    array[1] === 'right'
      ? 'var(--spx-' + component + '-distance-x, ' + distanceX + ')'
      : null,
  bottom:
    array[0] === 'bottom' &&
    'var(--spx-' + component + '-distance-y, ' + distanceY + ')',
  left:
    array[1] === 'center'
      ? '50%'
      : array[1] === 'left'
      ? 'var(--spx-' + component + '-distance-x, ' + distanceX + ')'
      : null,
  transform: array[1] === 'center' && 'translate(-50%, 0)',
});

/**
 * Text constants.
 */

export const text = (
  tag,
  type,
  color,
  min,
  max,
  weight,
  letterSpacing,
  lineHeight,
  transform,
  global = false
) => ({
  color: setVar(tag, '' + type + '-color', color, global),
  fontSize: setClamp(tag, type + '-font-size', min, max),
  fontWeight: setVar(tag, '' + type + '-font-weight', weight, global),
  letterSpacing: setVar(
    tag,
    '' + type + '-letter-spacing',
    letterSpacing,
    global
  ),
  lineHeight: setVar(tag, '' + type + '-line-height', lineHeight, global),
  textTransform: setVar(tag, '' + type + '-text-transform', transform, global),
});
