import { h } from './index-a2b24666.js';
import { s as sanitize } from './sanitize-d9ff4e3f.js';

// eslint-disable-next-line no-unused-vars
/**
 * Render elements from images prop.
 *
 * @param {object} obj Settings.
 * @returns {HTMLCollection} Collection of HTML elements.
 */
function helperImages(obj) {
  return obj.images && (!obj.src || obj.src === 'acf')
    ? /** Iterate through ACF array if prop was set. */
      obj.array.map((el) => (h("img", { src: !obj.lazy && (obj.size ? el['sizes'][obj.size] : el['url']), "data-src": obj.lazy && (obj.size ? el['sizes'][obj.size] : el['url']), alt: "" })))
    : /** Iterate through MB array if prop was set. */
      obj.images &&
        obj.src === 'mb' &&
        Object.values(obj.array).map((el) => (h("img", { src: !obj.lazy &&
            (obj.size ? el['sizes'][obj.size].url : el['full_url']), "data-src": obj.lazy &&
            (obj.size ? el['sizes'][obj.size].url : el['full_url']), alt: "" })));
}

// eslint-disable-next-line no-unused-vars
/**
 * Either renders image helper or inner content.
 *
 * @param {object} obj Settings.
 * @returns {HTMLElement} HTML element with innerHTML or generated content.
 */
function helperImagesOrInner(obj) {
  return (h("div", { ref: obj.ref, class: obj.class, innerHTML: !obj.condition ? sanitize(obj.content) : '' }, obj.condition && helperImages(obj.helper)));
}

/**
 * Wrap element in another element.
 *
 * @param {HTMLElement} el HTML element to wrap.
 * @param {HTMLElement} wrapper HTML element to use as a wrapper.
 */
function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

/**
 * Check if component has children and create images.
 *
 * @param {object} obj Object with necessary parameters.
 * @returns {Function} Callback.
 */
function helperImagesCreate(obj) {
  const wrapper = (el) => {
    Array.from(el.children).forEach((item) => {
      const wrapper = document.createElement('div');
      if (obj.el.tagName === 'SPX-SLIDER') {
        wrapper.classList.add('swiper-slide');
      }
      wrap(item, wrapper);
    });
  };
  if (!obj.images) {
    const div = document.createElement('div');
    const elements = obj.el.querySelectorAll('img');
    if (document.body.classList.contains('oxygen-builder-body') &&
      (elements === undefined || elements.length === 0)) {
      setTimeout(() => helperImagesCreate(obj), 100);
    }
    else {
      obj.el.querySelectorAll('img').forEach((item) => {
        const img = document.createElement('img');
        if (item.srcset) {
          img.srcset = item.srcset;
        }
        else {
          img.src = item.src;
        }
        if (obj.el.tagName === 'SPX-SLIDER' && obj.lazy) {
          img.classList.add('swiper-lazy');
        }
        div.append(img);
      });
      wrapper(div);
      obj.container.innerHTML = div.innerHTML;
      return obj.cb();
    }
  }
  else {
    wrapper(obj.container);
    return obj.cb();
  }
}

export { helperImagesOrInner as a, helperImagesCreate as h };
