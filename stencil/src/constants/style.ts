import { setVar } from '../utils/cssVariables/setVar';
import { setStyle } from '../utils/cssVariables/setStyle';

/** Defaults. */
export const borderRadius = 'var(--spx-border-radius)';
export const bpMobileWidth = 768;
export const display = 'var(--spx-display)';
export const focus = {
  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    outline: 'none',
    boxShadow: 'var(--spx-focus)',
  },
};
export const fontFamily = 'var(--spx-font-family)';
export const fontSize = 'var(--spx-font-size)';
export const transitionDuration = 'var(--spx-transition-duration)';
export const transitionDuration2 = 'var(--spx-transition-duration-2)';
export const transitionTimingFunction = 'var(--spx-transition-timing-function)';

/**
 * Positioning properties.
 *
 * @param {string} tag Name of the component.
 * @param {Array} array Positioning.
 * @param {string} distanceX Value of the X distance.
 * @param {string} distanceY Value of the X distance.
 * @returns {object} CSS object.
 */
export const position = (tag, array, distanceX, distanceY) => ({
  top:
    array[0] === 'top' &&
    'var(--spx-' + tag + '-distance-y, ' + distanceY + ')',
  right:
    array[1] === 'right'
      ? 'var(--spx-' + tag + '-distance-x, ' + distanceX + ')'
      : null,
  bottom:
    array[0] === 'bottom' &&
    'var(--spx-' + tag + '-distance-y, ' + distanceY + ')',
  left:
    array[1] === 'center'
      ? '50%'
      : array[1] === 'left'
      ? 'var(--spx-' + tag + '-distance-x, ' + distanceX + ')'
      : null,
  transform: array[1] === 'center' && 'translate(-50%, 0)',
});

/**
 * Text constants.
 *
 * @param {string} tag Tag name.
 * @param {string} type Variable name.
 * @param {string} color Color.
 * @param {string} size Size.
 * @param {string} min Minimum font-size.
 * @param {string} max Maximum font-size.
 * @param {string} weight Font weight.
 * @param {string} letterSpacing Letter spacing.
 * @param {string} lineHeight Line height.
 * @param {string} transform Transform.
 * @param {string} condition Condition.
 * @returns {object} CSS object.
 */
export const text = (
  tag,
  type,
  color,
  size,
  min,
  max,
  weight,
  letterSpacing,
  lineHeight,
  transform,
  condition
) => ({
  color: setVar(tag, '' + type + '-color', color),
  fontSize: setStyle(tag, '' + type + '-font-size', size, min, max, condition),
  fontWeight: setVar(tag, '' + type + '-font-weight', weight),
  letterSpacing: setVar(tag, '' + type + '-letter-spacing', letterSpacing),
  lineHeight: setVar(tag, '' + type + '-line-height', lineHeight),
  textTransform: setVar(tag, '' + type + '-text-transform', transform),
});
