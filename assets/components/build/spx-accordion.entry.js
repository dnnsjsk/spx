import { h, r as registerInstance, e as createEvent, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { t as twind } from './twind-12f9a8c2.js';
import { B as Button } from './Button-059c3d4b.js';
import { g as getDoc } from './getDoc-6e0f059e.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';
import './isInShadow-8729ae2d.js';

// eslint-disable-next-line no-unused-vars
/**
 * Tag selector.
 *
 * @param {boolean} condition Check if create node or use slot instead.
 * @param {string} tag Tag name.
 * @param {string} text Inner text.
 * @param {string} slot Slot name.
 * @param {string} style Class name.
 * @returns {HTMLElement} Returns a HTML element.
 */
function tagSelector(condition, tag, text, slot, style = null) {
  return condition ? (tag === 'h1' ? (h("h1", { class: style }, text)) : tag === 'h2' ? (h("h2", { class: style }, text)) : tag === 'h3' ? (h("h3", { class: style }, text)) : tag === 'h4' ? (h("h4", { class: style }, text)) : tag === 'h5' ? (h("h5", { class: style }, text)) : tag === 'h6' ? (h("h6", { class: style }, text)) : tag === 'p' ? (h("p", { class: style }, text)) : (h("span", { class: style }, text))) : (h("slot", { name: slot }));
}

const spxAccordionCss = ":host{display:var(--spx-accordion-display, block)}.inner{display:flex;flex-direction:column;font-family:var(--spx-font-family)}.header{display:grid;grid-auto-flow:column;align-items:center;justify-items:left;grid-template-columns:auto 1fr;cursor:pointer;transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}:host([styling=default]) .header{grid-column-gap:var(--spx-accordion-header-gap, 0.4em)}:host([styling=fluid]) .header{--spx-accordion-header-gap-fluid-min:var(--spx-accordion-header-gap-min, 0.6);--spx-accordion-header-gap-fluid-max:var(--spx-accordion-header-gap-max, 1);--spx-accordion-header-gap-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-accordion-header-gap-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-accordion-header-gap-fluid-slope:calc(\n    (\n        var(--spx-accordion-header-gap-fluid-max) -\n          var(--spx-accordion-header-gap-fluid-min)\n      ) /\n      (\n        var(--spx-accordion-header-gap-fluid-max-w-px) -\n          var(--spx-accordion-header-gap-fluid-min-w-px)\n      )\n  );--spx-accordion-header-gap-fluid-y-axis:calc(\n    (\n        (var(--spx-accordion-header-gap-fluid-min-w-px) * -1) *\n          var(--spx-accordion-header-gap-fluid-slope)\n      ) + var(--spx-accordion-header-gap-fluid-min)\n  );grid-column-gap:clamp(calc(var(--spx-accordion-header-gap-fluid-min) * 1rem), calc( (var(--spx-accordion-header-gap-fluid-y-axis) * 1rem) + (var(--spx-accordion-header-gap-fluid-slope) * 100vw) ), calc(var(--spx-accordion-header-gap-fluid-max) * 1rem))}.header:focus{outline:none}.header:focus-visible{outline:none;box-shadow:var(--spx-focus)}:host([reverse]:not([reverse=false])) .header{grid-template-columns:1fr auto}:host([styling=default]) .header{font-size:var(--spx-accordion-header-font-size, var(--spx-font-size))}:host([styling=fluid]) .header{--spx-accordion-header-font-size-fluid-min:var(--spx-accordion-header-font-size-min, 1);--spx-accordion-header-font-size-fluid-max:var(--spx-accordion-header-font-size-max, 1.2);--spx-accordion-header-font-size-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-accordion-header-font-size-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-accordion-header-font-size-fluid-slope:calc(\n    (\n        var(--spx-accordion-header-font-size-fluid-max) -\n          var(--spx-accordion-header-font-size-fluid-min)\n      ) /\n      (\n        var(--spx-accordion-header-font-size-fluid-max-w-px) -\n          var(--spx-accordion-header-font-size-fluid-min-w-px)\n      )\n  );--spx-accordion-header-font-size-fluid-y-axis:calc(\n    (\n        (var(--spx-accordion-header-font-size-fluid-min-w-px) * -1) *\n          var(--spx-accordion-header-font-size-fluid-slope)\n      ) + var(--spx-accordion-header-font-size-fluid-min)\n  );font-size:clamp(calc(var(--spx-accordion-header-font-size-fluid-min) * 1rem), calc( (var(--spx-accordion-header-font-size-fluid-y-axis) * 1rem) + (var(--spx-accordion-header-font-size-fluid-slope) * 100vw) ), calc(var(--spx-accordion-header-font-size-fluid-max) * 1rem))}.header h1,.header h2,.header h3,.header h4,.header h5,.header h6,.header p,.header span{color:var(--spx-accordion-header-color, var(--spx-color-gray-900))}.header *:not([slot]){margin:0}.header-icon{display:flex;justify-content:center;align-items:center;transform-origin:center center;color:var(--spx-accordion-header-color, var(--spx-color-gray-900));font-size:1em;line-height:0}:host([reverse]:not([reverse=false])) .header-icon{grid-column:2}:host([open]:not([open=false])) .header-icon{transform:var(--spx-accordion-icon-transform, rotate(180deg))}.content{display:none;margin-top:0}:host([styling=default]) .content{font-size:var(--spx-accordion-content-font-size, var(--spx-font-size))}:host([styling=fluid]) .content{--spx-accordion-content-font-size-fluid-min:var(--spx-accordion-content-font-size-min, 1);--spx-accordion-content-font-size-fluid-max:var(--spx-accordion-content-font-size-max, 1.2);--spx-accordion-content-font-size-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-accordion-content-font-size-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-accordion-content-font-size-fluid-slope:calc(\n    (\n        var(--spx-accordion-content-font-size-fluid-max) -\n          var(--spx-accordion-content-font-size-fluid-min)\n      ) /\n      (\n        var(--spx-accordion-content-font-size-fluid-max-w-px) -\n          var(--spx-accordion-content-font-size-fluid-min-w-px)\n      )\n  );--spx-accordion-content-font-size-fluid-y-axis:calc(\n    (\n        (var(--spx-accordion-content-font-size-fluid-min-w-px) * -1) *\n          var(--spx-accordion-content-font-size-fluid-slope)\n      ) + var(--spx-accordion-content-font-size-fluid-min)\n  );font-size:clamp(calc(var(--spx-accordion-content-font-size-fluid-min) * 1rem), calc( (var(--spx-accordion-content-font-size-fluid-y-axis) * 1rem) + (var(--spx-accordion-content-font-size-fluid-slope) * 100vw) ), calc(var(--spx-accordion-content-font-size-fluid-max) * 1rem))}:host([styling=default][open]) .content{margin-top:var(--spx-accordion-gap, 0.4em)}:host([styling=fluid][open]) .content{--spx-accordion-gap-fluid-min:var(--spx-accordion-gap-min, 1.2);--spx-accordion-gap-fluid-max:var(--spx-accordion-gap-max, 1.2);--spx-accordion-gap-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-accordion-gap-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-accordion-gap-fluid-slope:calc(\n    (\n        var(--spx-accordion-gap-fluid-max) -\n          var(--spx-accordion-gap-fluid-min)\n      ) /\n      (\n        var(--spx-accordion-gap-fluid-max-w-px) -\n          var(--spx-accordion-gap-fluid-min-w-px)\n      )\n  );--spx-accordion-gap-fluid-y-axis:calc(\n    (\n        (var(--spx-accordion-gap-fluid-min-w-px) * -1) *\n          var(--spx-accordion-gap-fluid-slope)\n      ) + var(--spx-accordion-gap-fluid-min)\n  );margin-top:clamp(calc(var(--spx-accordion-gap-fluid-min) * 1rem), calc( (var(--spx-accordion-gap-fluid-y-axis) * 1rem) + (var(--spx-accordion-gap-fluid-slope) * 100vw) ), calc(var(--spx-accordion-gap-fluid-max) * 1rem))}:host([open]:not([open=false])) .content{display:block}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content p,.content span:not(.token){color:var(--spx-accordion-content-color, var(--spx-color-gray-900))}";

const tag = 'spx-accordion';
const SpxAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxAccordionDidLoad = createEvent(this, "spxAccordionDidLoad", 7);
    /** @css */
    this.contentColor = 'var(--spx-color-gray-900)';
    /** Content text. */
    this.contentText = 'Default Content Text';
    /** Content text tag. */
    this.contentTextTag = 'span';
    /** @css */
    this.contentFontSize = 'var(--spx-font-size)';
    /** @css */
    this.contentFontSizeMax = 1.2;
    /** @css */
    this.contentFontSizeMin = 1;
    /**
     * Space between header and content.
     *
     * @css
     */
    this.gap = '0.4em';
    /** @css */
    this.gapMax = 1.2;
    /** @css */
    this.gapMin = 1;
    /** @css */
    this.headerColor = 'var(--spx-color-gray-900)';
    /** @css */
    this.headerFontSize = 'var(--spx-font-size)';
    /** @css */
    this.headerFontSizeMax = 1.2;
    /** @css */
    this.headerFontSizeMin = 1;
    /**
     * Gap between header text and icon.
     *
     * @css
     */
    this.headerGap = '0.4em';
    /** @css */
    this.headerGapMax = 1;
    /** @css */
    this.headerGapMin = 0.6;
    /** Header text. */
    this.headerText = 'Default Header Text';
    /** Header text tag. */
    this.headerTextTag = 'span';
    /** Icon. */
    this.icon = 'arrow-down';
    /** Icon type. */
    this.iconType = 'ionicons';
    /**
     * Icon transform.
     *
     * @css
     */
    this.iconTransform = 'rotate(180deg)';
    /**
     * Sets the type of link.
     *
     * @choice open, close, toggle
     */
    this.linkType = 'open';
    /** State of accordion. */
    // eslint-disable-next-line @stencil/decorators-style
    this.openState = false;
    /**
     * Styling.
     *
     * @choice default, fluid, headless
     */
    this.styling = 'default';
    this.checkForSlots = () => {
      if (this.el.querySelector('[slot="header"]')) {
        this.headerCustom = true;
      }
      if (this.el.querySelector('[slot="content"]')) {
        this.contentCustom = true;
      }
    };
    this.getHeight = () => {
      this.height = this.content.scrollHeight + 'px';
    };
    this.clickHeader = () => {
      if (this.link) {
        getDoc(this.el)
          .querySelectorAll('spx-accordion[link="' + this.link + '"]')
          .forEach((item) => {
          if (item !== this.el) {
            if (this.linkType === 'open') {
              item.setAttribute('open', '');
            }
            if (this.linkType === 'close') {
              item.removeAttribute('open');
            }
            if (this.linkType === 'toggle') {
              if (item.hasAttribute('open')) {
                item.removeAttribute('open');
              }
              else {
                item.setAttribute('open', '');
              }
            }
          }
        });
      }
      this.getHeight();
      this.openState = !this.openState;
    };
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  componentWillLoad() {
    this.checkForSlots();
  }
  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'contentColor',
        'contentFontSize',
        'contentFontSizeMax',
        'contentFontSizeMin',
        'gap',
        'gapMax',
        'gapMin',
        'headerColor',
        'headerFontSize',
        'headerFontSizeMax',
        'headerFontSizeMin',
        'headerGap',
        'headerGapMax',
        'headerGapMin',
        'iconTransform',
      ],
      cb: this.checkForSlots,
      mutations: {
        subtree: true,
        attributes: true,
      },
    });
    this.spxAccordionDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    this.getHeight();
    globalComponentWillUpdate(this.el);
  }
  /** Closes the accordion. */
  async close() {
    this.openState = false;
  }
  /** Opens the accordion. */
  async open() {
    this.openState = true;
  }
  /** Toggles the accordion. */
  async toggle() {
    this.openState = !this.openState;
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    const { tw } = twind(this.el.shadowRoot, this.styling === 'headless');
    const styleHeader = this.styling === 'headless' && this.openState
      ? tw((_a = this.classHeader) !== null && _a !== void 0 ? _a : '') + ' ' + tw((_b = this.classHeaderActive) !== null && _b !== void 0 ? _b : '')
      : this.styling === 'headless' &&
        tw((_c = this.classHeader) !== null && _c !== void 0 ? _c : '') + ' ' + tw((_d = this.classHeaderInactive) !== null && _d !== void 0 ? _d : '');
    const styleHeaderIcon = this.styling === 'headless' && this.openState
      ? tw((_e = this.classHeaderIcon) !== null && _e !== void 0 ? _e : '') +
        ' ' +
        tw((_f = this.classHeaderIconActive) !== null && _f !== void 0 ? _f : '')
      : this.styling === 'headless' &&
        tw((_g = this.classHeaderIcon) !== null && _g !== void 0 ? _g : '') +
          ' ' +
          tw((_h = this.classHeaderIconInactive) !== null && _h !== void 0 ? _h : '');
    const styleContent = this.styling === 'headless' && this.openState
      ? tw((_j = this.classContent) !== null && _j !== void 0 ? _j : '') + ' ' + tw((_k = this.classContentActive) !== null && _k !== void 0 ? _k : '')
      : this.styling === 'headless' &&
        tw((_l = this.classContentActive) !== null && _l !== void 0 ? _l : '') +
          ' ' +
          tw((_m = this.classContentInactive) !== null && _m !== void 0 ? _m : '');
    return (h("div", { class: "inner" }, h(Button, { as: "div", onClick: this.clickHeader, onEnter: this.clickHeader, class: this.styling === 'headless'
        ? styleHeader
        : this.headerCustom
          ? ''
          : 'header', "aria-expanded": this.openState ? 'true' : 'false' }, !this.headerCustom && (h("div", { class: this.styling === 'headless' ? styleHeaderIcon : 'header-icon' }, this.icon && this.iconType && (h("spx-icon", { icon: this.icon, type: this.iconType })))), tagSelector(!this.headerCustom, this.headerTextTag, this.headerTextOpen && this.openState
      ? this.headerTextOpen
      : this.headerText, 'header', this.styling === 'headless' && this.openState
      ? tw((_o = this.classHeaderText) !== null && _o !== void 0 ? _o : '') +
        ' ' +
        tw((_p = this.classHeaderTextActive) !== null && _p !== void 0 ? _p : '')
      : this.styling === 'headless' &&
        tw((_q = this.classHeaderText) !== null && _q !== void 0 ? _q : '') +
          ' ' +
          tw((_r = this.classHeaderTextInactive) !== null && _r !== void 0 ? _r : ''))), h("div", { class: this.styling === 'headless' ? styleContent : 'content', ref: (el) => (this.content = el) }, tagSelector(!this.contentCustom, this.contentTextTag, this.contentText, 'content', this.styling === 'headless' && this.openState
      ? tw((_s = this.classContentText) !== null && _s !== void 0 ? _s : '') +
        ' ' +
        ((_t = this.classContentTextActive) !== null && _t !== void 0 ? _t : '')
      : this.styling === 'headless' &&
        tw((_u = this.classContentText) !== null && _u !== void 0 ? _u : '') +
          ' ' +
          ((_v = this.classContentTextInactive) !== null && _v !== void 0 ? _v : '')))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "contentColor": ["attributesChanged"],
    "contentFontSize": ["attributesChanged"],
    "contentFontSizeMax": ["attributesChanged"],
    "contentFontSizeMin": ["attributesChanged"],
    "gap": ["attributesChanged"],
    "gapMax": ["attributesChanged"],
    "gapMin": ["attributesChanged"],
    "headerColor": ["attributesChanged"],
    "headerFontSize": ["attributesChanged"],
    "headerFontSizeMax": ["attributesChanged"],
    "headerFontSizeMin": ["attributesChanged"],
    "headerGap": ["attributesChanged"],
    "headerGapMax": ["attributesChanged"],
    "headerGapMin": ["attributesChanged"],
    "iconTransform": ["attributesChanged"]
  }; }
};
SpxAccordion.style = spxAccordionCss;

export { SpxAccordion as spx_accordion };
