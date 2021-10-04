import { h } from './index-a2b24666.js';

// eslint-disable-next-line no-unused-vars
/**
 * Button element.
 *
 * @param {object} obj HTML element props.
 * @param {HTMLCollection} children HTML element children.
 * @returns {HTMLElement} Return an HTML element.
 */
function Button(obj, children) {
  const props = {
    onKeyDown: function (e) {
      if (obj.onEnter && (e.key === 'Enter' || e.key === 'enter')) {
        obj.onEnter();
      }
      if (obj.onArrowLeft && e.key === 'ArrowLeft') {
        obj.onArrowLeft();
      }
      if (obj.onArrowRight && e.key === 'ArrowRight') {
        obj.onArrowRight();
      }
    },
  };
  const mergedProps = Object.assign(Object.assign({}, props), obj);
  return obj.href ? (h("a", Object.assign({ style: { textAlign: 'left' } }, mergedProps), children)) : obj.as === 'div' ? (h("div", Object.assign({ style: { textAlign: 'left' }, role: "button", tabindex: "0" }, mergedProps), children)) : (h("button", Object.assign({ style: { textAlign: 'left' } }, mergedProps), children));
}

export { Button as B };
