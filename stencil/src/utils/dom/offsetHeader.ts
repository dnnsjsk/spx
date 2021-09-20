import { getDoc } from './getDoc';

/**
 * Offset something to header.
 *
 * @param {HTMLElement} el Current HTML element.
 * @param {HTMLElement} target Target HTML element to do calculations from.
 * @param {boolean} variable Adds offset as CSS variable to body if true.
 */
export function offsetHeader(el, target, variable = true) {
  /** Get height of target element. */
  const value =
    getDoc(el).querySelector(target).getBoundingClientRect().height + 'px';

  /** Set root. */
  if (variable) {
    document.body.style.setProperty('--spx-offset', value);
  }

  /** Apply values as top property and variable. */
  if (el.parentElement.classList.contains('oxy-offset')) {
    el.parentElement.style.marginTop = value;
  } else {
    el.style.marginTop = value;
  }
}
