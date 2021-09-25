import { wrap } from '../dom/wrap';

/**
 * Check if component has children and create images.
 *
 * @param {object} obj Object with necessary parameters.
 * @returns {Function} Callback.
 */
export function helperImagesCreate(obj) {
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

    if (
      document.body.classList.contains('oxygen-builder-body') &&
      (elements === undefined || elements.length === 0)
    ) {
      setTimeout(() => helperImagesCreate(obj), 100);
    } else {
      obj.el.querySelectorAll('img').forEach((item) => {
        const img = document.createElement('img');
        if (item.srcset) {
          img.srcset = item.srcset;
        } else {
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
  } else {
    wrapper(obj.container);
    return obj.cb();
  }
}
