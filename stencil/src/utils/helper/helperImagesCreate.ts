import { wrap } from '../dom/wrap';
import { lightbox } from '../../components/elements/spx-lightbox/lightbox';

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

  const lightboxer = () => {
    if (obj.lightbox) {
      lightbox({
        lightbox: obj.lightbox,
        host: obj.container.getRootNode().host,
        el: obj.container,
        query: obj.container.querySelectorAll('img'),
      });
    }
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

      lightboxer();
      return obj.cb();
    }
  } else {
    wrapper(obj.container);
    lightboxer();
    return obj.cb();
  }
}
