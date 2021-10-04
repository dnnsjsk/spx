import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { a as lazy, s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { h as helperImagesCreate, a as helperImagesOrInner } from './helperImagesCreate-41d56fef.js';
import { t as twind, k as keyframes } from './twind-12f9a8c2.js';
import { p as parse } from './parse-4abba6d9.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';
import './sanitize-d9ff4e3f.js';

const spxSlideshowCss = ":host{display:var(--spx-slideshow-display, block)}.inner{overflow:var(--spx-slideshow-overflow, )}.wrap{display:flex;animation-timing-function:linear;animation-iteration-count:infinite;animation-fill-mode:none;animation-play-state:running;animation-duration:var(--spx-slideshow-duration, 60s)}.wrap img{max-width:100%;width:100%;height:auto;object-fit:var(--spx-slideshow-object-fit, contain)}:host([height]) .wrap img{height:var(--spx-slideshow-height, )}.wrap>div+div{margin-left:var(--spx-slideshow-gap, 1em)}.slideshow{display:grid;grid-auto-flow:column;grid-auto-columns:var(--spx-slideshow-max-width, 300px);grid-gap:var(--spx-slideshow-gap, 1em)}";

const tag = 'spx-slideshow';
const SpxSlideshow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxSlideshowDidLoad = createEvent(this, "spxSlideshowDidLoad", 7);
    /**
     * Duration of slideshow to complete one cycle.
     *
     * @css
     */
    this.duration = '60s';
    /**
     * Gap between inner elements.
     *
     * @css
     */
    this.gap = '1em';
    /**
     * Max width of inner elements.
     *
     * @css
     */
    this.maxWidth = '300px';
    /** @css */
    this.objectFit = 'contain';
    this.init = () => {
      helperImagesCreate({
        images: this.images,
        el: this.el,
        container: this.container,
        cb: () => {
          this.container.querySelectorAll(':scope > *').forEach((item) => {
            const clone = item.cloneNode(true);
            this.clone.appendChild(clone);
          });
        },
      });
      this.offsetWidth = this.container.offsetWidth;
    };
    this.update = () => {
      this.container.innerHTML = '';
      this.clone.innerHTML = '';
      this.init();
      lazy({
        el: this.el,
        condition: this.lazy,
      });
    };
  }
  imagesChanged(newValue) {
    if (newValue)
      this.imagesArray = parse(newValue);
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  onResize() {
    if (this.container) {
      this.offsetWidth = this.container.offsetWidth;
    }
  }
  componentWillLoad() {
    this.content = this.el.innerHTML;
    if (this.images) {
      this.imagesChanged(this.images);
    }
  }
  componentDidLoad() {
    this.init();
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['duration', 'gap', 'height', 'maxWidth', 'objectFit', 'overflow'],
      lazy: this.lazy,
      cb: this.update,
    });
    this.spxSlideshowDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    const { tw, css: style } = twind(this.el.shadowRoot);
    const css = (obj) => tw(style(obj));
    const kf = keyframes({
      '0%': {
        transform: 'translate3d(0px, 0px, 0px)',
      },
      to: {
        transform: 'translate3d(calc(-' +
          this.offsetWidth +
          'px - ' +
          this.gap +
          '), 0px, 0px)',
      },
    });
    const styleWrap = css({
      animationName: kf,
    });
    return (h("div", { class: "inner" }, h("div", { class: `wrap ${styleWrap}` }, helperImagesOrInner({
      class: 'slideshow',
      condition: this.images,
      content: this.content,
      el: this.el,
      ref: (el) => (this.container = el),
      helper: {
        array: this.imagesArray,
        images: this.images,
        size: this.imageSize,
        src: this.imageSrc,
      },
    }), h("div", { class: "slideshow", ref: (el) => (this.clone = el) }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "images": ["imagesChanged"],
    "duration": ["attributesChanged"],
    "gap": ["attributesChanged"],
    "height": ["attributesChanged"],
    "maxWidth": ["attributesChanged"],
    "objectFit": ["attributesChanged"],
    "overflow": ["attributesChanged"]
  }; }
};
SpxSlideshow.style = spxSlideshowCss;

export { SpxSlideshow as spx_slideshow };
