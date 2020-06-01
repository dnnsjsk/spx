/**
 * Style constants for components.
 */

import {css} from "emotion";

export const styleDisplay = 'block';
export const styleFontFamily = 'var(--spx-font-family, helvetica, segoe, arial, sans-serif)';
export const styleBorderRadius = '0.25em';
export const styleColor = '#ffffff';
export const styleBackground = '#202020';
export const styleBackgroundSecondary = '#555555';

/** Base style. */

export const styleBase = css({
    display: styleDisplay,
    fontFamily: styleFontFamily,
});

/** Positioning properties. */

export const stylePosition = (component, array, distanceX, distanceY) => ({
    top: array[0] === 'top' && 'var(--spx-' + component + '-distance-y, ' + distanceY + ')',
    right: array[1] === 'right' ? 'var(--spx-' + component + '-distance-x, ' + distanceX + ')' : null,
    bottom: array[0] === 'bottom' && 'var(--spx-' + component + '-distance-y, ' + distanceY + ')',
    left: array[1] === 'center' ? '50%' : array[1] === 'left' ? 'var(--spx-' + component + '-distance-x, ' + distanceX + ')' : null,
    transform: array[1] === 'center' && 'translate(-50%, 0)',
});