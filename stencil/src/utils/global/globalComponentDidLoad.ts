import { mutationObserver } from '../observer/mutationObserver';
import { lazy } from '../3rd/lazy';
import { setProperty } from '../dom/setProperty';
import { kebabize } from '../strings/kebabize';

/**
 * Global componentDidLoad function for all components.
 *
 * @param {object} obj Settings
 */
export function globalComponentDidLoad(obj) {
  /** Setup mutation observer to check if child elements have been added and reload component. */
  if (obj.cb) {
    mutationObserver(
      obj.el,
      {
        ...{
          childList: true,
        },
        ...obj.mutations,
      },
      (mutation) => {
        obj.cb(mutation);
      }
    );
  }

  /** Initially set inline CSS vars for these attributes. */
  if (obj.props) {
    obj.props.forEach((item) => {
      setProperty(obj.el, obj.tag, item, obj.el.getAttribute(kebabize(item)));
    });
  }

  /** Lazy loading for image components. */
  lazy({
    el: obj.el,
    condition: obj.lazy,
  });
}
