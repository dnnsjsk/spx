export const setClamp = (
  minWidthPx,
  maxWidthPx,
  minFontSize,
  maxFontSize,
  multiplier = 1,
  base = 16
) => {
  const pixelsPerRem = base;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw  * ${multiplier}, ${maxFontSize}rem )`;
};
