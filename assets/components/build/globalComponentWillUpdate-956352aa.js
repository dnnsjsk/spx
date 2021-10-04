/**
 * Global componentWillLoad function for all components.
 *
 * @param {HTMLElement} obj HTML element to apply function to.
 */
function globalComponentWillUpdate(obj) {
  var _a;
  if ((_a = obj === null || obj === void 0 ? void 0 : obj.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) {
    obj.el.shadowRoot
      .querySelectorAll('style[data-emotion]')
      .forEach((item) => item.remove());
  }
}

export { globalComponentWillUpdate as g };
