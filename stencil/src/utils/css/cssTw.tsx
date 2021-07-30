import { create, cssomSheet } from 'twind';

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
