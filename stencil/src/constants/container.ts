import { css } from '@emotion/css';

/**
 * Section defaults.
 */

export const bpMobileWidth = 1024;
export const buttonBackgroundPrimary = 500;
export const buttonBackgroundSecondary = 100;
export const buttonColorPrimary = 50;
export const buttonColorSecondary = 700;
export const colorGray = 'blue-gray';
export const colorPrimary = 'teal';
export const colorSecondary = 'pink';
export const fontFamilyPrimary = 'var(--spx-container-font-family-primary)';
export const fontFamilySecondary = 'var(--spx-container-font-family-secondary)';
export const linearBase = 16;
export const linearMaxW = 1440;
export const linearMinW = 320;
export const maxWidth = '1440px';
export const maxWidthMobile = '500px';
export const paddingX = 'var(--spx-container-padding-x)';
export const paddingXSm = 'var(--spx-container-padding-x-sm)';

/**
 * Container defaults.
 */

const containerStyles = css({
  '--spx-container-padding-x': 'var(--spx-container-token-padding-x, 8vw)',
  '--spx-container-padding-x-sm':
    'var(--spx-container-token-padding-x-sm, 2vw)',
  '--spx-container-font-family-primary':
    'var(--spx-container-token-font-family-primary, helvetica, segoe, arial, sans-serif)',
  '--spx-container-font-family-secondary':
    'var(--spx-container-token-font-family-secondary, helvetica, segoe, arial, sans-serif)',
});

document.body.classList.add(containerStyles);
