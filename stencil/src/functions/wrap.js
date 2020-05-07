/**
 * Wrap elements in another element.
 *
 * @since 1.0
 */

export function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
