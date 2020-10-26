/**
 * Pass attributes to nested components.
 */

export const removeClasses = (el, string) => {
  el.classList.remove.apply(
    el.classList,
    // @ts-ignore
    Array.from(el.classList).filter((v) => v.endsWith(string))
  );
};
