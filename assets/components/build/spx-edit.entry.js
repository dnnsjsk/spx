import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxEditCss = ":host{display:var(--spx-edit-display, inline-block)}.inner[contenteditable]{outline:var(--spx-edit-outline, 2px solid red);cursor:text}.inner[contenteditable]:focus{outline-color:var(--spx-edit-outline-focus, blue)}.inner[contenteditable]:empty:before{content:attr(data-placeholder);color:var(--spx-edit-placeholder-color, inherit);opacity:var(--spx-edit-placeholder-opacity, 0.7)}";

const tag = 'spx-edit';
const SpxEdit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** @css */
    this.outline = '2px solid red';
    /** @css */
    this.outlineFocus = 'blue';
    this.placeholder = 'Enter some text here.';
    /** @css */
    this.placeholderColor = 'inherit';
    /** @css */
    this.placeholderOpacity = '0.7';
    this.type = 'acf';
    this.typeText = (src) => {
      this.el.setAttribute('body-string', '&' +
        this.name +
        '=' +
        src +
        // @ts-ignore
        // eslint-disable-next-line no-undef
        spx.nonce +
        (this.subfield ? 'parent' + this.type : this.type));
    };
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }
  onClickDiscard() {
    this.el.parentElement.innerHTML = this.originalText;
    this.el.remove();
  }
  onClickSave() {
    this.text = this.container.innerText;
    this.el.parentElement.innerHTML = this.text;
    this.el.remove();
  }
  onClickKeyup() {
    this.typeText(this.container.innerText);
  }
  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      attributes: [
        'outline',
        'outlineFocus',
        'placeholderColor',
        'placeholderOpacity',
      ],
    });
    this.originalText = this.text;
    this.typeText(this.text);
  }
  render() {
    return (h("div", { class: "inner", ref: (el) => (this.container = el), contenteditable: this.editable, "data-placeholder": this.placeholder, innerHTML: this.text }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "outline": ["attributesChanged"],
    "outlineFocus": ["attributesChanged"],
    "placeholderColor": ["attributesChanged"],
    "placeholderOpacity": ["attributesChanged"]
  }; }
};
SpxEdit.style = spxEditCss;

export { SpxEdit as spx_edit };
