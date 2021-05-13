/**
 * Set clamp.
 */
export const setClamp = (
  tag,
  type,
  minValue,
  maxValue,
  base = 16,
  minWidthPx = 640,
  maxWidthPx = 1536
) => {
  const pixelsPerRem = base;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxValue - minValue) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minValue;

  return `clamp(var(--${tag}-${type}-min, ${minValue}rem), ${yAxisIntersection}rem + ${
    slope * 100
  }vw, var(--${tag}-${type}-max, ${maxValue}rem))`;
};
