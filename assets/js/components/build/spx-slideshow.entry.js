import { r as registerInstance, e as createEvent, h, g as getElement } from './index-889edf71.js';
import './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';
import { g as getGallery } from './getGallery-720e844a.js';
import { e as emotion } from './emotion-6421086a.js';

const tag = 'spx-slideshow';
const SpxSlideshow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxSlideshowDidLoad = createEvent(this, "spxSlideshowDidLoad", 7);
    this.display = 'block';
    /**
     * Duration of slideshow to complete one cycle.
     * @CSS
     */
    this.duration = '60s';
    /**
     * Gap between inner elements.
     * @CSS
     */
    this.gap = '1em';
    /**
     * Max width of inner elements.
     * @CSS
     */
    this.maxWidth = '350px';
  }
  /** Watch images prop and parse to array. */
  imagesChanged(newValue) {
    if (newValue)
      this.imagesArray = JSON.parse(newValue);
  }
  onResize() {
    if (this.elements) {
      this.offsetWidth = this.elements.offsetWidth;
    }
  }
  componentWillLoad() {
    /** If image prop is set. */
    if (this.images) {
      this.imagesChanged(this.images);
    }
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el.shadowRoot);
    this.elements.querySelectorAll(':scope > *').forEach((item) => {
      const clone = item.cloneNode(true);
      this.clone.appendChild(clone);
    });
    this.offsetWidth = this.elements.offsetWidth;
    this.spxSlideshowDidLoad.emit({ target: 'document' });
  }
  render() {
    const { css, keyframes } = emotion(this.el.shadowRoot);
    /** Animation. */
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
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
      overflow: setVar(tag, 'overflow', this.overflow),
    });
    /** Wrap styles. */
    const styleWrap = css({
      animationName: kf,
      animationDuration: setVar(tag, 'speed', this.duration),
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationFillMode: 'none',
      animationPlayState: 'running',
      display: 'flex',
      img: {
        maxWidth: '100%',
      },
      '& > div + div': {
        marginLeft: setVar(tag, 'gap', this.gap),
      },
    });
    /** Slideshow style. */
    const slideshowStyle = css({
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: setVar(tag, 'max-width', this.maxWidth),
      gridGap: setVar(tag, 'gap', this.gap),
    });
    return (h("div", { class: styleHost }, h("div", { class: styleWrap }, h("div", { class: slideshowStyle, ref: (el) => (this.elements = el) }, getGallery(this.images, this.imagesSrc, this.imagesArray, this.imageSize)), h("div", { class: slideshowStyle, ref: (el) => (this.clone = el) }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "images": ["imagesChanged"]
  }; }
};

export { SpxSlideshow as spx_slideshow };
