/**
 * Offset something to header.
 *
 * @param {HTMLElement} el Current HTML element.
 * @param {HTMLElement} target Target HTML element to do calculations from.
 */
export function offsetHeader(el, target) {
  /** Get height of target element. */
  const value =
    document.querySelector(target).getBoundingClientRect().height + 'px';

  /** Set root. */
  document.body.style.setProperty('--spx-offset', value);

  /** Apply values as top property and variable. */
  if (el.parentElement.classList.contains('oxy-offset')) {
    el.parentElement.style.marginTop = value;
  } else {
    el.style.marginTop = value;
  }
}
