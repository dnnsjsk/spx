import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { B as Button } from './Button-059c3d4b.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxImageComparisonCss = ":host{display:var(--spx-image-comparison-display, block)}.inner{display:block;position:relative;width:100%;overflow:hidden;height:var(--spx-image-comparison-height, 100%)}.container{width:100%;position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;user-select:none;height:var(--spx-image-comparison-height, 100%)}.container--after{width:125px}img{height:100%;max-width:none !important}.scroller{width:50px;height:50px;position:absolute;left:100px;top:50%;transform:translateY(-50%);border-radius:50%;background-color:transparent;cursor:pointer;opacity:0.9;border:4px solid var(--spx-image-comparison-color, #ffffff);background:var(--spx-image-comparison-color, #ffffff);transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function);transition-property:box-shadow, opacity}.scroller:focus{outline:none}.scroller:focus-visible{outline:none;box-shadow:var(--spx-focus)}:host([active]) .scroller{opacity:1;pointer-events:none}.scroller:hover{opacity:1}.scroller:before,.scroller:after{content:\"\";display:block;width:4px;height:9999px;position:absolute;left:50%;margin-left:-2px;z-index:30;transition:0.1s;background:var(--spx-image-comparison-color, #ffffff)}.scroller:before{top:100%}.scroller:after{bottom:100%}.thumb{height:100%;width:100%;display:flex;justify-content:center;align-items:center}.thumb spx-icon{transform:rotate(45deg);color:var(--spx-image-comparison-icon-color, var(--spx-color-gray-900))}";

const tag = 'spx-image-comparison';
const SpxImageComparison = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxImageComparisonDidLoad = createEvent(this, "spxImageComparisonDidLoad", 7);
    /** @css */
    this.color = '#ffffff';
    /** @css */
    this.height = '100%';
    /** @css */
    this.iconColor = 'var(--spx-color-gray-900)';
    /** Image URL of the before image. */
    this.srcAfter = 'https://source.unsplash.com/random/1200x300';
    /** Image URL of the after image. */
    this.srcBefore = 'https://source.unsplash.com/random/1201x300';
    /** Step amount when using component with arrow keys. */
    this.steps = 10;
    /** Opening state in pixels. */
    this.start = 150;
    this.mover = (e) => {
      if (!this.active)
        return;
      let x = e.pageX;
      x -= this.container.getBoundingClientRect().left;
      this.move(x);
    };
    this.moveLeft = () => {
      if (this.x >= 2) {
        this.move(this.x - this.steps);
      }
    };
    this.moveRight = () => {
      if (this.x <= this.width) {
        this.move(this.x + this.steps);
      }
    };
  }
  move(x) {
    const transform = Math.max(0, Math.min(x, this.container.offsetWidth));
    this.imageAfter.style.width = transform + 2 + 'px';
    this.scroller.style.left = transform - 25 + 'px';
    if (x >= 2 && x <= this.width) {
      this.x = x;
    }
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  onResize() {
    if (this.el.offsetWidth !== this.width) {
      this.move(this.start);
      this.width = this.root.offsetWidth;
    }
  }
  componentDidLoad() {
    this.width = this.root.offsetWidth;
    if (document.body.classList.contains('oxygen-builder-body')) {
      this.scroller.style.pointerEvents = 'none';
    }
    this.active = false;
    this.scroller.addEventListener('mousedown', () => {
      this.active = true;
    });
    document.body.addEventListener('mouseup', () => {
      this.active = false;
    });
    document.body.addEventListener('mouseleave', () => {
      this.active = false;
    });
    document.body.addEventListener('mousemove', (e) => {
      this.mover(e);
    });
    this.move(this.start);
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
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['color', 'height', 'iconColor'],
      lazy: this.lazy,
    });
    this.spxImageComparisonDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return (h("div", { ref: (el) => (this.root = el), class: "inner" }, this.srcBefore &&
      this.srcAfter && [
      h("div", { ref: (el) => (this.container = el), class: "container" }, h("img", { src: !this.lazy && this.srcBefore, "data-src": this.lazy && this.srcBefore, alt: "before" })),
      h("div", { ref: (el) => (this.imageAfter = el), class: "container container--after" }, h("img", { src: !this.lazy && this.srcAfter, "data-src": this.lazy && this.srcAfter, alt: "after" })),
      h(Button, { as: "button", ref: (el) => (this.scroller = el), class: "scroller", onArrowLeft: this.moveLeft, onArrowRight: this.moveRight }, h("div", { class: "thumb" }, h("spx-icon", { icon: "resize", size: "32px" }))),
    ]));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "start": ["move"],
    "color": ["attributesChanged"],
    "height": ["attributesChanged"],
    "iconColor": ["attributesChanged"]
  }; }
};
SpxImageComparison.style = spxImageComparisonCss;

export { SpxImageComparison as spx_image_comparison };
