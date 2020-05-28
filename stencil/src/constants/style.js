/**
 * Style constants for components.
 *
 * @since 1.0
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
