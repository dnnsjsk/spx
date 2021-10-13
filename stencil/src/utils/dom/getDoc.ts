import { isInShadow } from '../is/isInShadow';

/**
 * Check if element is in Shadowroot.
 *
 * @param {HTMLElement} el Get the current DOM context.
 * @returns {HTMLElement} Current context as Shadow DOM parent or Document.
 */
export function getDoc(el) {
  return isInShadow(el)
    ? // @ts-ignore
      el.getRootNode().host.shadowRoot
    : document;
}
