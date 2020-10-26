import { setVar } from '../utils/setVar';
import { setFontSize } from '../utils/setSize';
import { css } from 'emotion';

/** Global defaults. */

export const mobileBpWidth = 768;
export const fontFamily = 'var(--spx-font-family)';
export const fontSize = 'var(--spx-font-size)';
export const borderRadius = 'var(--spx-border-radius)';
export const transitionDuration = 'var(--spx-transition-duration)';
export const transitionDuration2 = 'var(--spx-transition-duration-2)';
export const transitionTimingFunction = 'var(--spx-transition-timing-function)';

/** Positioning properties. */

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

/** Text settings. */

export const text = (
  tag,
  type,
  color,
  min,
  val,
  max,
  multiplier,
  weight,
  letterSpacing,
  lineHeight,
  transform,
  global = false
) => ({
  color: setVar(tag, '' + type + '-color', color, global),
  fontSize: setFontSize(tag, type, min, val, max, multiplier, global),
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

/** Global styles. */

const globalStyles = css({
  '--spx-font-family':
    'var(--spx-token-font-family, helvetica, segoe, arial, sans-serif)',
  '--spx-font-size': 'var(--spx-token-font-size, 16px)',
  '--spx-border-radius': 'var(--spx-token-border-radius, 0.5em)',
  '--spx-transition-duration': 'var(--spx-token-transition-duration, 150ms)',
  '--spx-transition-duration-2':
    'var(--spx-token-transition-duration-2, 500ms)',
  '--spx-transition-timing-function':
    'var(--spx-token-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1))',
});

document.body.classList.add(globalStyles);
