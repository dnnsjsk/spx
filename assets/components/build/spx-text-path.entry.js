import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxTextPathCss = ":host{height:100%;width:100%;display:var(--spx-text-path-display, block)}.text-path{text-transform:var(--spx-text-path-text-transform, default);font-weight:var(--spx-text-path-text-font-weight, );font-size:var(--spx-text-path-text-font-size, clamp(20px, 3vw, 24px));fill:var(--spx-text-path-text-color, #000000)}";

const tag = 'spx-text-path';
const SpxTextPath = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxTextPathDidLoad = createEvent(this, "spxTextPathDidLoad", 7);
    /** Space between text and path. */
    this.gap = '-2%';
    /** Starting offset off the text. */
    this.startOffset = '25%';
    /** @css */
    this.textColor = '#000000';
    /**
     * Text size.
     *
     * @css
     */
    this.textFontSize = 'clamp(20px, 3vw, 24px)';
    /**
     * Text transform.
     *
     * @css
     */
    this.textTransform = 'default';
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['textColor', 'textFontWeight', 'textFontSize', 'textTransform'],
    });
    this.spxTextPathDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 500 500", preserveAspectRatio: "none" }, h("defs", null, h("path", { id: "circlePath", d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" }), h("path", { id: "circlePathInner", d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" }), h("pattern", { id: "img", patternUnits: "userSpaceOnUse", width: "100%", height: "100%" }, h("image", { href: this.src, x: "0", y: "0", width: "100%", height: "100%" }))), h("use", { xlinkHref: "#circlePathInner", fill: "url(#img)" }), h("text", { dy: this.gap, class: "text-path" }, h("textPath", { startOffset: this.startOffset, xlinkHref: "#circlePath" }, this.text))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "textColor": ["attributesChanged"],
    "textFontWeight": ["attributesChanged"],
    "textFontSize": ["attributesChanged"],
    "textTransform": ["attributesChanged"]
  }; }
};
SpxTextPath.style = spxTextPathCss;

export { SpxTextPath as spx_text_path };
