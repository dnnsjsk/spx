import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

/**
 * @param {object} obj Lightbox settings.
 */
function lightbox(obj) {
  const urls = [];
  let modal;
  const onClick = (e) => {
    const padding = 'clamp(30px, 4vw, 40px)';
    modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.height = '100vh';
    modal.style.width = '100vw';
    modal.style.padding = padding;
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.background = `var(--spx-lightbox-overlay-background, ${obj.el.getAttribute('overlay-background')})`;
    modal.style.backdropFilter = `var(--spx-lightbox-overlay-backdrop-filter, ${obj.el.getAttribute('overlay-backdrop-filter')})`;
    modal.style.zIndex = '99999999999999999999999999999999999999';
    const modalInner = document.createElement('div');
    modalInner.style.position = 'fixed';
    modalInner.style.top = '0';
    modalInner.style.left = '0';
    modalInner.style.height = '100vh';
    modalInner.style.width = '100vw';
    modalInner.style.cursor = 'pointer';
    const modalClose = document.createElement('button');
    modalClose.style.position = 'fixed';
    modalClose.style.right = '0';
    modalClose.style.top = '0';
    modalClose.style.display = 'flex';
    modalClose.style.justifyContent = 'center';
    modalClose.style.alignItems = 'center';
    modalClose.style.borderRadius = '0';
    modalClose.style.width = padding;
    modalClose.style.height = padding;
    modalClose.style.background = 'none';
    modalClose.style.border = 'none';
    const modalCloseIcon = document.createElement('spx-icon');
    modalCloseIcon.setAttribute('icon', 'close-outline');
    modalCloseIcon.setAttribute('size', '150%');
    modalCloseIcon.setAttribute('color', `var(--spx-lightbox-close-button-color, ${obj.el.getAttribute('close-button-color')})`);
    const slider = document.createElement('spx-slider');
    slider.style.width = '100%';
    slider.setAttribute('navigation', '');
    urls.forEach((item) => {
      const el = document.createElement('img');
      el.setAttribute('src', item);
      slider.appendChild(el);
    });
    slider.setAttribute('start', e.target.getAttribute('data-index'));
    if (obj.el.hasAttribute('spx-slider')) {
      Object.entries(JSON.parse(obj.el.getAttribute('spx-slider'))).forEach(([key, value]) => {
        slider.setAttribute(key, value);
      });
    }
    modalClose.appendChild(modalCloseIcon);
    modal.appendChild(modalInner);
    if (obj.el.hasAttribute('close-button') &&
      obj.el.getAttribute('close-button') !== 'false') {
      modal.appendChild(modalClose);
    }
    modal.appendChild(slider);
    modalInner.addEventListener('click', function () {
      onRemove();
    });
    modalCloseIcon.addEventListener('click', function () {
      onRemove();
    });
    if (obj.el.hasAttribute('body-overflow') &&
      obj.el.getAttribute('body-overflow') !== 'false') {
      document.body.style.overflow = 'hidden';
    }
    document.body.appendChild(modal);
  };
  const onRemove = () => {
    if (obj.el.hasAttribute('body-overflow') &&
      obj.el.getAttribute('body-overflow') !== 'false') {
      document.body.style.overflow = 'auto';
    }
    modal.remove();
  };
  obj.query.forEach((item, index) => {
    urls.push(item.getAttribute('src'));
    item.setAttribute('data-index', index);
    item.addEventListener('click', onClick);
  });
}

const spxLightboxCss = ":host{display:var(--spx-lightbox-display, block)}";

const SpxLightbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxLightboxDidLoad = createEvent(this, "spxLightboxDidLoad", 7);
    /** If 'overflow: hidden' should be applied to the body when a lightbox is open. */
    this.bodyOverflow = true;
    /** Show close button. */
    this.closeButton = true;
    /** @css */
    this.closeButtonColor = '#ffffff';
    /** @css */
    this.overlayBackground = 'rgba(0,0,0,0.8)';
    /** @css */
    this.overlayBackdropFilter = 'var(--spx-backdrop-filter)';
    /** [prop:target] */
    this.target = 'img';
    this.init = () => {
      lightbox({
        el: this.el,
        query: this.el.querySelectorAll(this.target),
      });
    };
  }
  componentDidLoad() {
    this.init();
    globalComponentDidLoad({ el: this.el });
    this.spxLightboxDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return h("slot", null);
  }
  get el() { return getElement(this); }
};
SpxLightbox.style = spxLightboxCss;

export { SpxLightbox as spx_lightbox };
