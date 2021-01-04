import { createStore } from '@stencil/store';
import { removeClasses } from '../utils/removeClasses';
import * as c from '../constants/container';
import { setColor } from '../utils/setColor';
import { css } from '@emotion/css';
import { watchMobile } from '../utils/watchMobile';

/**
 * State.
 */

const { state, onChange } = createStore({
  bpMaxWidth: c.maxWidth,
  bpMaxWidthMobile: c.maxWidthMobile,
  bpMobile: null,
  bpMobileWidth: c.bpMobileWidth,
  buttonBackgroundPrimary: c.buttonBackgroundPrimary,
  buttonBackgroundSecondary: c.buttonBackgroundSecondary,
  buttonColorPrimary: c.buttonColorPrimary,
  buttonColorSecondary: c.buttonColorSecondary,
  colorGray: c.colorGray,
  colorPrimary: c.colorPrimary,
  colorSecondary: c.colorSecondary,
  fontFamilyPrimary: c.fontFamilyPrimary,
  fontFamilySecondary: c.fontFamilySecondary,
  linearBase: c.linearBase,
  linearMaxW: c.linearMaxW,
  linearMinW: c.linearMinW,
  paddingX: c.paddingX,
  paddingXsm: c.paddingXSm,
});

/**
 * Color.
 */

onChange('colorGray', (value) => {
  removeClasses(document.body, 'color');
  setColor(value, 'gray');
  setColor(state.colorPrimary, 'primary');
  setColor(state.colorSecondary, 'secondary');
});

onChange('colorPrimary', (value) => {
  removeClasses(document.body, 'color');
  setColor(value, 'primary');
  setColor(state.colorSecondary, 'secondary');
  setColor(state.colorGray, 'gray');
});

onChange('colorSecondary', (value) => {
  removeClasses(document.body, 'color');
  setColor(value, 'secondary');
  setColor(state.colorPrimary, 'primary');
  setColor(state.colorGray, 'gray');
});

/**
 * Font.
 */

const setFont = (primary, secondary) => {
  const styles = css({
    '--spx-container-font-family-primary': primary,
    '--spx-container-font-family-secondary': secondary,
    label: 'font',
  });
  document.body.classList.add(styles);
};

onChange('fontFamilyPrimary', (value) => {
  removeClasses(document.body, 'font');
  setFont(value, state.fontFamilySecondary);
});

onChange('fontFamilySecondary', (value) => {
  removeClasses(document.body, 'font');
  setFont(state.fontFamilyPrimary, value);
});

/**
 * BP Mobile.
 */

onChange('bpMobileWidth', (value) => {
  state.bpMobileWidth = value;

  watchMobile();
});

/**
 * Export.
 */

export default state;
