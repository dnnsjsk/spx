import state from '../../store/store';

/**
 * Set clamp.
 *
 * @param {string} tag HTML Element tag (without spx).
 * @param {string} type Property type.
 * @param {string} minValue Minimum value.
 * @param {string} maxValue Maximum value.
 * @param {string} unitless If returned variable should be unitless
 * @param {number} base Base size.
 * @param {number} minWidthPx Minimum width of screen size to scale down to.
 * @param {number} maxWidthPx Maximum width of screen size to scale up to.
 * @returns {string} CSS value.
 */
export function setClamp(
  tag,
  type,
  minValue,
  maxValue,
  unitless = false,
  base = state.base,
  minWidthPx = state.minWidthPx,
  maxWidthPx = state.maxWidthPx
) {
  const pixelsPerRem = base;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxValue - minValue) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minValue;

  return `clamp(var(--${tag}-${type}-min, ${minValue}${
    !unitless ? 'rem' : ''
  }), ${yAxisIntersection}${!unitless ? 'rem' : ''} + ${
    slope * 100
  }vw, var(--${tag}-${type}-max, ${maxValue}${!unitless ? 'rem' : ''}))`;
}
