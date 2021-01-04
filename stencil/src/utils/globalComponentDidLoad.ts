import { resizeObserver } from './resizeObserver';
import { mutationObserver } from './mutationObserver';

/**
 * Global componentDidLoad function for all components.
 */

export const globalComponentDidLoad = (el) => {
  resizeObserver(el);

  /** Mark that component has been loaded. */

  el.setAttribute('has-loaded', '');

  /** Setup mutation observer to check if child elements have been added and reload component. */

  if (
    el.tagName !== 'SPX-TYPEWRITER' &&
    el.tagName !== 'SPX-ANIMATE' &&
    el.tagName !== 'SPX-LIGHTBOX' &&
    el.tagName !== 'SPX-PAGE-DOCS'
  ) {
    mutationObserver(
      el,
      {
        childList: true,
      },
      function () {
        el.reload();
      }
    );
  }
};
