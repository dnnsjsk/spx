import { kebabize } from '../strings/kebabize';

/**
 * @param {HTMLElement} el Element to apply variables to.
 * @param {string} tag Component name.
 * @param {string} attribute Attribute name.
 * @param {string} value New value.
 */
export function setProperty(el, tag, attribute, value) {
  el.style.setProperty(`--${tag}-${kebabize(attribute)}`, value);
}
