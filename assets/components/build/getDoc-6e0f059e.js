import { i as isInShadow } from './isInShadow-8729ae2d.js';

/**
 * @param {HTMLElement} el Get the current DOM context.
 * @returns {HTMLElement} Current context as Shadow DOM parent or Document.
 */
function getDoc(el) {
  return isInShadow(el)
    ? // @ts-ignore
      el.getRootNode().host.shadowRoot
    : document;
}

export { getDoc as g };
