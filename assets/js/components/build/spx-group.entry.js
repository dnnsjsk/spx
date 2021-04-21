import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';
import { s as startsWith } from './lodash-4338c591.js';

const tag = 'spx-group';
const SpxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxGroupDidLoad = createEvent(this, "spxGroupDidLoad", 7);
    this.display = 'block';
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.forwardAttributes();
    /** Set up mutation observer. */
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.forwardAttributes();
      });
    });
    observer.observe(this.el, {
      attributes: true,
    });
    this.spxGroupDidLoad.emit({ target: 'document' });
  }
  forwardAttributes() {
    /** Function to filter elements. */
    const getAllTagMatches = (regEx) => {
      return Array.prototype.slice
        .call(this.el.querySelectorAll('*'))
        .filter(function (el) {
        return el.tagName.match(regEx);
      });
    };
    /** Get all tag matches. */
    const elements = this.target
      ? getAllTagMatches(new RegExp(this.target, 'i'))
      : getAllTagMatches(/^spx/i);
    /** Loop matches. */
    for (let att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++) {
      att = atts[i];
      if (startsWith(att.nodeName, 'g-')) {
        elements.forEach((item) => {
          item.setAttribute(att.nodeName.substring(2), att.nodeValue);
        });
      }
    }
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

export { SpxGroup as spx_group };
