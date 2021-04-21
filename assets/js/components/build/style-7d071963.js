import { s as setVar } from './setVar-37af5a94.js';
import { s as setVarOrClamp } from './setVarOrClamp-6b66cabc.js';

/**
  defaults.
 */
const bpMobileWidth = 768;
const fontFamily = 'var(--spx-font-family)';
const fontSize = 'var(--spx-font-size)';
const borderRadius = 'var(--spx-border-radius)';
const transitionDuration = 'var(--spx-transition-duration)';
const transitionDuration2 = 'var(--spx-transition-duration-2)';
const transitionTimingFunction = 'var(--spx-transition-timing-function)';
/**
 * Positioning properties.
 */
const position = (component, array, distanceX, distanceY) => ({
  top: array[0] === 'top' &&
    'var(--spx-' + component + '-distance-y, ' + distanceY + ')',
  right: array[1] === 'right'
    ? 'var(--spx-' + component + '-distance-x, ' + distanceX + ')'
    : null,
  bottom: array[0] === 'bottom' &&
    'var(--spx-' + component + '-distance-y, ' + distanceY + ')',
  left: array[1] === 'center'
    ? '50%'
    : array[1] === 'left'
      ? 'var(--spx-' + component + '-distance-x, ' + distanceX + ')'
      : null,
  transform: array[1] === 'center' && 'translate(-50%, 0)',
});
/**
 * Text constants.
 */
const text = (tag, type, color, size, min, max, weight, letterSpacing, lineHeight, transform, condition) => ({
  color: setVar(tag, '' + type + '-color', color),
  fontSize: setVarOrClamp(tag, '' + type + '-font-size', size, min, max, condition),
  fontWeight: setVar(tag, '' + type + '-font-weight', weight),
  letterSpacing: setVar(tag, '' + type + '-letter-spacing', letterSpacing),
  lineHeight: setVar(tag, '' + type + '-line-height', lineHeight),
  textTransform: setVar(tag, '' + type + '-text-transform', transform),
});

export { transitionTimingFunction as a, fontFamily as b, borderRadius as c, text as d, bpMobileWidth as e, fontSize as f, position as p, transitionDuration as t };
