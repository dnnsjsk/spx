/**
 * Wrap elements in another element.
 */

export const wrap = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el)
  wrapper.appendChild(el)
}
