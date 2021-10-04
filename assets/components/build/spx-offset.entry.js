import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { g as getDoc } from './getDoc-6e0f059e.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './isInShadow-8729ae2d.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

/**
 * Offset something to header.
 *
 * @param {HTMLElement} el Current HTML element.
 * @param {HTMLElement} target Target HTML element to do calculations from.
 * @param {boolean} variable Adds offset as CSS variable to body if true.
 */
function offsetHeader(el, target, variable = true) {
  /** Get height of target element. */
  const value = getDoc(el).querySelector(target).getBoundingClientRect().height + 'px';
  /** Set root. */
  if (variable) {
    document.body.style.setProperty('--spx-offset', value);
  }
  /** Apply values as top property and variable. */
  if (el.parentElement.classList.contains('oxy-offset')) {
    el.parentElement.style.marginTop = value;
  }
  else {
    el.style.marginTop = value;
  }
}

const spxOffsetCss = ":host{display:var(--spx-offset-display, block)}";

const SpxOffset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxOffsetDidLoad = createEvent(this, "spxOffsetDidLoad", 7);
    /** [prop:target] */
    this.target = 'header';
    /** Add offset as CSS variable to body. */
    this.variable = true;
  }
  onResize() {
    offsetHeader(this.el, this.target, this.variable);
  }
  componentDidLoad() {
    this.onResize();
    globalComponentDidLoad({ el: this.el });
    this.spxOffsetDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  componentDidUpdate() {
    this.onResize();
  }
  /** Recalculate distance. */
  async recalc() {
    this.onResize();
  }
  render() {
    return h("slot", null);
  }
  get el() { return getElement(this); }
};
SpxOffset.style = spxOffsetCss;

export { SpxOffset as spx_offset };
