/**
 * Get offset number or calculate element height.
 */
export const offset = (element) => {
  if (element && !isNaN(element)) {
    return element;
  } else if (element) {
    return document.querySelector(element).getBoundingClientRect().height;
  } else if (!element) {
    return 0;
  }
};
