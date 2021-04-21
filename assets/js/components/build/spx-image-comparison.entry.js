import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

const tag = 'spx-image-comparison';
const SpxImageComparison = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxImageComparisonDidLoad = createEvent(this, "spxImageComparisonDidLoad", 7);
    this.color = '#ffffff';
    this.height = '100%';
    this.iconColor = 'var(--spx-color-gray-900)';
    /** Image URL of the before image. */
    this.srcAfter = 'https://source.unsplash.com/random/1200x300';
    /** Image URL of the after image. */
    this.srcBefore = 'https://source.unsplash.com/random/1201x300';
    /** Opening state in pixels. */
    this.start = 150;
  }
  onResize() {
    if (this.el.offsetWidth !== this.width) {
      this.startChanged(this.start);
    }
  }
  startChanged(x) {
    /** Show image in start. */
    const transform = Math.max(0, Math.min(x, this.container.offsetWidth));
    this.imageAfter.style.width = transform + 2 + 'px';
    this.scroller.style.left = transform - 25 + 'px';
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    /** Set starting width */
    this.width = this.el.offsetWidth;
    /** Disable for Oxygen */
    if (document.body.classList.contains('oxygen-builder-body')) {
      this.scroller.style.pointerEvents = 'none';
    }
    /** Use boolean to know when it is being used */
    this.active = false;
    /** Watch for clicks on scroller */
    this.scroller.addEventListener('mousedown', () => {
      this.active = true;
    });
    /** Add scrolling class to the scroller so it has full opacity while active */
    document.body.addEventListener('mouseup', () => {
      this.active = false;
    });
    /** Watch body for changes to the state */
    document.body.addEventListener('mouseleave', () => {
      this.active = false;
    });
    /** Figure out where the mouse is */
    document.body.addEventListener('mousemove', (e) => {
      this.mover(e);
    });
    /** Set starting width */
    this.startChanged(this.start);
    /** Repeat for touch events */
    this.scroller.addEventListener('touchstart', () => {
      this.active = true;
    });
    document.body.addEventListener('touchend', () => {
      this.active = false;
    });
    document.body.addEventListener('touchcancel', () => {
      this.active = false;
    });
    document.body.addEventListener('touchmove', (e) => {
      this.mover(e);
    });
    this.spxImageComparisonDidLoad.emit({ target: 'document' });
  }
  /** Thumb mover function. */
  mover(e) {
    if (!this.active)
      return;
    let x = e.pageX;
    x -= this.container.getBoundingClientRect().left;
    this.startChanged(x);
  }
  async reload() {
    this.componentDidLoad();
  }
  render() {
    /** Host styles. */
    const styleHost = css({
      display: 'block',
      position: 'relative',
      height: setVar(tag, 'height', this.height),
      width: '100%',
      overflow: 'hidden',
    });
    /** Container styles. */
    const styleContainer = css({
      width: '100%',
      height: setVar(tag, 'height', this.height),
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: '0',
      left: '0',
      pointerEvents: 'none',
      overflow: 'hidden',
      userSelect: 'none',
    });
    /** Image styles. */
    const styleImage = css({
      height: '100%',
      maxWidth: 'none !important',
    });
    /** Image after styles. */
    const styleImageAfter = css({
      width: '125px',
    });
    /** Scroller styles. */
    const styleScroller = css({
      width: '50px',
      height: '50px',
      position: 'absolute',
      left: '100px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      backgroundColor: ' transparent',
      opacity: this.active ? 1 : 0.9,
      pointerEvents: !this.active ? 'auto' : 'none',
      cursor: 'pointer',
      background: setVar(tag, 'color', this.color),
      border: '4px solid ' + setVar(tag, 'color', this.color) + '',
      '&:hover': {
        opacity: 1,
      },
      '&:after, &:before': {
        content: '" "',
        display: 'block',
        width: '4px',
        height: '9999px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-2px',
        zIndex: 30,
        transition: '0.1s',
        background: setVar(tag, 'color', this.color),
      },
      '&:before': {
        top: '100%',
      },
      '&:after': {
        bottom: '100%',
      },
    });
    /** Thumb styles. */
    const styleThumb = css({
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      'spx-icon': {
        transform: 'rotate(45deg)',
      },
    });
    return (h(Host, { class: styleHost }, this.srcBefore &&
      this.srcAfter /** Before. */ && [
      h("div", { ref: (el) => (this.container = el), class: styleContainer }, h("img", { loading: this.loading, class: styleImage, src: this.srcBefore, alt: "before" })),
      /** After. */
      h("div", { ref: (el) => (this.imageAfter = el), class: css([styleContainer, styleImageAfter]) }, h("img", { loading: this.loading, class: styleImage, src: this.srcAfter, alt: "after" })),
      /** Scroller. */
      h("div", { ref: (el) => (this.scroller = el), class: styleScroller }, h("div", { class: styleThumb }, h("spx-icon", { icon: "resize", size: "32px", color: this.iconColor }))),
    ]));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "start": ["startChanged"]
  }; }
};

export { SpxImageComparison as spx_image_comparison };
