/**
 * Pass attributes to nested components.
 */

export const removeClasses = (el, string) => {
  // @ts-ignore
  el.classList.remove.apply(el.classList, Array.from(el.classList).filter(v => v.endsWith(string)))
}
