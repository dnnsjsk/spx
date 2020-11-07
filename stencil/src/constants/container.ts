import { css } from 'emotion';

/** Section defaults. */

export const maxWidth = '500px';
export const bpMobileWidth = 768;
export const buttonReverseColor = '';
export const colorPrimary = '';
export const colorSecondary = '';
export const fontFamilyPrimary = 'var(--spx-container-font-family-primary)';
export const fontFamilySecondary = 'var(--spx-container-font-family-secondary)';
export const spaceX = 'var(--spx-container-space-x)';
export const spaceXSm = 'var(--spx-container-space-x-sm)';

/** Container styles. */

const containerStyles = css({
  '--spx-container-space-x': 'var(--spx-container-token-space-x, 8vw)',
  '--spx-container-space-x-sm': 'var(--spx-container-token-space-x-sm, 2vw)',
  '--spx-container-font-family-primary':
    'var(--spx-container-token-font-family-primary, helvetica, segoe, arial, sans-serif)',
  '--spx-container-font-family-secondary':
    'var(--spx-container-token-font-family-secondary, helvetica, segoe, arial, sans-serif)',
  '--spx-color-gray-50': '#FAFAFA',
  '--spx-color-gray-100': '#F5F5F5',
  '--spx-color-gray-200': '#EEEEEE',
  '--spx-color-gray-300': '#E0E0E0',
  '--spx-color-gray-400': '#BDBDBD',
  '--spx-color-gray-500': '#9E9E9E',
  '--spx-color-gray-600': '#757575',
  '--spx-color-gray-700': '#616161',
  '--spx-color-gray-800': '#424242',
  '--spx-color-gray-900': '#212121',
});

document.body.classList.add(containerStyles);

/** Space scale. */

export const spaceScale = (multiplier) => ({
  '--spx-space-multiplier': multiplier,
  '--spx-space-4xs': 'calc(0.125 * var(--spx-space-multiplier))',
  '--spx-space-3xs': 'calc(0.25 * var(--spx-space-multiplier))',
  '--spx-space-2xs': 'calc(0.375 * var(--spx-space-multiplier))',
  '--spx-space-xs': 'calc(0.5 * var(--spx-space-multiplier))',
  '--spx-space-sm': 'calc(0.75 * var(--spx-space-multiplier))',
  '--spx-space-md': 'calc(1.25 * var(--spx-space-multiplier))',
  '--spx-space-lg': 'calc(2 * var(--spx-space-multiplier))',
  '--spx-space-xl': 'calc(3.25 * var(--spx-space-multiplier))',
  '--spx-space-2xl': 'calc(5.25 * var(--spx-space-multiplier))',
  '--spx-space-3xl': 'calc(8.5 * var(--spx-space-multiplier))',
  '--spx-space-4xl': 'calc(13.75 * var(--spx-space-multiplier))',
});
