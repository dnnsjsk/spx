/**
 * Style constants for components.
 */

import {css} from "emotion";

export const styleDisplay = 'block';
export const styleMobileBP = 768;

export const styleFontSize = '16px';
export const styleFontBase = (component, base) => 'var(--spx-' + component + '-font-size, var(--spx-font-size, ' + base + '))';
export const styleFontFamily = 'var(--spx-font-family, helvetica, segoe, arial, sans-serif)';

export const stylePrimary000 = 'var(--spx-color-primary-000, #FAFAFA)';
export const stylePrimary100 = 'var(--spx-color-primary-100, #F5F5F5)';
export const stylePrimary200 = 'var(--spx-color-primary-200, #EEEEEE)';
export const stylePrimary300 = 'var(--spx-color-primary-300, #E0E0E0)';
export const stylePrimary400 = 'var(--spx-color-primary-400, #BDBDBD)';
export const stylePrimary500 = 'var(--spx-color-primary-500, #9E9E9E)';
export const stylePrimary600 = 'var(--spx-color-primary-600, #757575)';
export const stylePrimary700 = 'var(--spx-color-primary-700, #616161)';
export const stylePrimary800 = 'var(--spx-color-primary-800, #424242)';
export const stylePrimary900 = 'var(--spx-color-primary-900, #212121)';

export const styleBorderRadius = 'var(--spx-border-radius, 0.25em)';

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