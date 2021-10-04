import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxIconCss = "@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.inner{height:100%;display:flex;align-items:center;justify-content:center}:host([styling=default]) .inner{font-size:var(--spx-icon-size, 1em)}:host([styling=fluid]) .inner{--spx-icon-size-fluid-min:var(--spx-icon-size-min, 0.8);--spx-icon-size-fluid-max:var(--spx-icon-size-max, 1);--spx-icon-size-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-icon-size-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-icon-size-fluid-slope:calc(\n    (\n        var(--spx-icon-size-fluid-max) -\n          var(--spx-icon-size-fluid-min)\n      ) /\n      (\n        var(--spx-icon-size-fluid-max-w-px) -\n          var(--spx-icon-size-fluid-min-w-px)\n      )\n  );--spx-icon-size-fluid-y-axis:calc(\n    (\n        (var(--spx-icon-size-fluid-min-w-px) * -1) *\n          var(--spx-icon-size-fluid-slope)\n      ) + var(--spx-icon-size-fluid-min)\n  );font-size:clamp(calc(var(--spx-icon-size-fluid-min) * 1rem), calc( (var(--spx-icon-size-fluid-y-axis) * 1rem) + (var(--spx-icon-size-fluid-slope) * 100vw) ), calc(var(--spx-icon-size-fluid-max) * 1rem))}:host([type=loader]) .inner{transform-origin:center;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:spin}.inner *{color:var(--spx-icon-color, inherit)}.loader{width:1em}";

const tag = 'spx-icon';
const SpxIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxIconDidLoad = createEvent(this, "spxIconDidLoad", 7);
    this.color = 'inherit';
    /**
     * Icon type.
     *
     * @choice ionicons, caret
     */
    this.type = 'ionicons';
    /** Icon size. */
    this.size = '1em';
    this.sizeMin = 0.8;
    this.sizeMax = 1;
    /**
     * Styling.
     *
     * @choice default, fluid
     */
    this.styling = 'default';
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  componentWillLoad() { }
  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['color', 'size', 'sizeMax', 'sizeMin'],
    });
    this.spxIconDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return (h("div", { class: "inner" }, this.type === 'ionicons' ? (h("ion-icon", { name: this.icon, class: "icon" })) : this.type === 'caret' ? (h("i", { class: "icon" }, "\u25BC")) : (this.type === 'loader' && (h("svg", { "aria-hidden": "true", focusable: "false", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "icon loader" }, h("path", { fill: "currentColor", d: "M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" }))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "color": ["attributesChanged"],
    "size": ["attributesChanged"],
    "sizeMax": ["attributesChanged"],
    "sizeMin": ["attributesChanged"]
  }; }
};
SpxIcon.style = spxIconCss;

export { SpxIcon as spx_icon };
