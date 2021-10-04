import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { s as startsWith } from './lodash-e2947591.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './_commonjsHelpers-8fe71198.js';
import './index-ef033006.js';

const spxGroupCss = ":host{display:var(--spx-animate-display, block)}";

const SpxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxGroupDidLoad = createEvent(this, "spxGroupDidLoad", 7);
    this.forwardAttributes = () => {
      const getAllTagMatches = (regEx) => {
        return Array.prototype.slice
          .call(this.el.querySelectorAll('*'))
          .filter(function (el) {
          return el.tagName.match(regEx);
        });
      };
      const elements = this.target
        ? getAllTagMatches(new RegExp(this.target, 'i'))
        : getAllTagMatches(/^spx/i);
      for (let att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++) {
        att = atts[i];
        if (startsWith(att.nodeName, 'g-')) {
          elements.forEach((item) => {
            item.setAttribute(att.nodeName.substring(2), att.nodeValue);
          });
        }
      }
    };
  }
  componentDidLoad() {
    this.forwardAttributes();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.forwardAttributes();
      });
    });
    observer.observe(this.el, {
      attributes: true,
    });
    globalComponentDidLoad({ el: this.el });
    this.spxGroupDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return h("slot", null);
  }
  get el() { return getElement(this); }
};
SpxGroup.style = spxGroupCss;

export { SpxGroup as spx_group };
