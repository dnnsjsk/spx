import { create, apply, cssomSheet } from 'twind';
import { css } from 'twind/css';
import * as colors from 'twind/colors';
import getUuidByString from 'uuid-by-string';
import {
  virtualSheet,
  getStyleTagProperties,
  StyleTagSheet,
} from 'twind/sheets';
import { isChrome } from '../is/isChrome';

/**
 * Create Twind instance.
 *
 * @param {HTMLElement} el HTML element.
 * @param {boolean} condition If Twind should be executed.
 * @returns {object} Twind object.
 */
export function twind(el, condition = true) {
  // @ts-ignore
  const tailwindConfig = window.spxTailwindConfig;
  const focus =
    'transition ease-in duration-100 focus:outline-none focus-visible:outline-none';

  const isAdopted = isChrome();

  const sheet = isAdopted
    ? cssomSheet({ target: new CSSStyleSheet() })
    : virtualSheet();
  const { tw } = create({
    sheet,
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        gray: colors.gray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      ...tailwindConfig?.theme,
    },
    plugins: {
      focus: apply`${focus} focus-visible:shadow-[var(--spx-focus)]`,
      'focus-border': apply`${focus} focus-visible:border-blue-500 focus-visible:shadow-[var(--spx-focus-px)]`,
      'focus-out': apply`${focus} focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:shadow-none`,
      ...tailwindConfig?.plugins,
    },
    variants: {
      ...tailwindConfig?.variatns,
    },
    mode: 'silent',
  });

  if (condition) {
    if (isAdopted) {
      el.adoptedStyleSheets = [...el.adoptedStyleSheets, sheet.target];
    } else {
      const createStyle = () => {
        const string = getStyleTagProperties(
          sheet as StyleTagSheet
        ).textContent;
        const stringId = getUuidByString(string);

        if (!el.querySelector(`style[data-spx="${stringId}"]`)) {
          const style = document.createElement('style');
          style.setAttribute('data-spx', stringId);
          style.innerHTML = string;
          if (!el.querySelector('style')) {
            el.prepend(style);
          } else {
            el.append(style);
          }
        }
      };
      setTimeout(() => {
        createStyle();
      }, 1);
    }
  }

  return { tw, css, apply };
}
