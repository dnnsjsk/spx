import { mutationObserver } from '../observer/mutationObserver';
import { lazy } from '../3rd/lazy';
import { setProperty } from '../dom/setProperty';
import { kebabize } from '../strings/kebabize';
import { startsWith } from 'lodash-es';
import state from '../../store/components';

/**
 * Global componentDidLoad function for all components.
 *
 * @param {object} obj Settings
 */
export function globalComponentDidLoad(obj) {
  /** Responsive attributes. */
  const bp = {};
  for (let att, i = 0, atts = obj.el.attributes, n = atts.length; i < n; i++) {
    att = atts[i];
    if (startsWith(att.nodeName, 'bp-')) {
      const responsive = JSON.parse(obj.el.getAttribute(att.nodeName));
      const defaults = {};

      Object.keys(responsive).forEach((item) => {
        // @ts-ignore
        defaults[item] = obj.el.getAttribute(item);
      });

      bp[att.nodeName.replace('bp-', '')] = [responsive, defaults];
    }
  }

  const map = new Map();
  map.set(obj.el, bp);

  if (Object.values(bp).length >= 1) {
    state.bp = [...state.bp, ...map];
  }

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
