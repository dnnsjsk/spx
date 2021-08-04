import { create, cssomSheet } from 'twind';
import 'construct-style-sheets-polyfill';

/**
 * Create CSSOM sheet.
 *
 * @param {HTMLElement} el HTML element.
 * @returns {object} Twind object.
 */
export function cssTw(el) {
  const sheet = cssomSheet({ target: new CSSStyleSheet() });
  const { tw } = create({ sheet });
  el.adoptedStyleSheets = [sheet.target];

  return tw;
}
