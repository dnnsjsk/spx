import { mutationObserver } from '../observer/mutationObserver';
import { lazy } from '../3rd/lazy';

/**
 * Global componentDidLoad function for all components.
 *
 * @param {object} obj Settings
 */
export function globalComponentDidLoad(obj) {
  /** Mark that component has been loaded. */
  obj.el.setAttribute('has-loaded', '');

  /**
   * Setup mutation observer to check if child elements have been added and
   * reload component.
   */
  if (obj.cb) {
    mutationObserver(
      obj.el,
      {
        childList: true,
        subtree: true,
        characterData: true,
      },
      function () {
        obj.cb();
      }
    );
  }

  /** Lazy loading for image components. */
  lazy({
    el: obj.el,
    condition: obj.lazy,
  });
}
