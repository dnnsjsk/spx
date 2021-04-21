import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

/**
 * Offset something to header.
 */
const offsetHeader = (el, target) => {
  /** Get height of target element. */
  const value = document.querySelector(target).getBoundingClientRect().height + 'px';
  /** Set root. */
  document.body.style.setProperty('--spx-offset', value);
  /** Apply values as top property and variable. */
  if (el.parentElement.classList.contains('oxy-offset')) {
    el.parentElement.style.marginTop = value;
  }
  else {
    el.style.marginTop = value;
  }
};

const tag = 'spx-offset';
const SpxOffset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxOffsetDidLoad = createEvent(this, "spxOffsetDidLoad", 7);
    this.display = 'block';
    /**
     * Target element.
     * @editor '.header1'
     */
    this.target = 'header';
  }
  /** Listen to window resize. */
  onResize() {
    offsetHeader(this.el, this.target);
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.onResize();
    this.spxOffsetDidLoad.emit({ target: 'document' });
  }
  componentDidUpdate() {
    this.onResize();
  }
  /** Recalculate distance. */
  async recalc() {
    this.onResize();
  }
  async reload() {
    this.componentDidLoad();
  }
  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });
    return (h(Host, { class: styleHost }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { SpxOffset as spx_offset };
