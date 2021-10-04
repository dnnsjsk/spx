import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { t as twind } from './twind-12f9a8c2.js';
import { B as Button } from './Button-059c3d4b.js';
import { g as getDoc } from './getDoc-6e0f059e.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';
import './isInShadow-8729ae2d.js';

const spxEditButtonCss = ":host{display:var(--spx-edit-button-display, block)}.inner{display:grid;grid-gap:var(--spx-edit-button-gap, 0.4em);position:var(--spx-edit-button-position, absolute);z-index:var(--spx-edit-button-z-index, 99);top:var(--spx-edit-button-top, none);right:var(--spx-edit-button-right, 1em);bottom:var(--spx-edit-button-right, 1em);left:var(--spx-edit-button-left, none)}:host([styling=default]) .inner{font-size:var(--spx-edit-button-font-size, var(--spx-font-size))}:host([styling=fluid]) .inner{--spx-edit-button-font-size-fluid-min:var(--spx-edit-button-font-size-min, 1);--spx-edit-button-font-size-fluid-max:var(--spx-edit-button-font-size-max, 1.2);--spx-edit-button-font-size-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-edit-button-font-size-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-edit-button-font-size-fluid-slope:calc(\n    (\n        var(--spx-edit-button-font-size-fluid-max) -\n          var(--spx-edit-button-font-size-fluid-min)\n      ) /\n      (\n        var(--spx-edit-button-font-size-fluid-max-w-px) -\n          var(--spx-edit-button-font-size-fluid-min-w-px)\n      )\n  );--spx-edit-button-font-size-fluid-y-axis:calc(\n    (\n        (var(--spx-edit-button-font-size-fluid-min-w-px) * -1) *\n          var(--spx-edit-button-font-size-fluid-slope)\n      ) + var(--spx-edit-button-font-size-fluid-min)\n  );font-size:clamp(calc(var(--spx-edit-button-font-size-fluid-min) * 1rem), calc( (var(--spx-edit-button-font-size-fluid-y-axis) * 1rem) + (var(--spx-edit-button-font-size-fluid-slope) * 100vw) ), calc(var(--spx-edit-button-font-size-fluid-max) * 1rem))}.button{--spx-icon-color:var(--spx-edit-button-loader-color, #ffffff);font-family:var(--spx-font-family);display:flex;justify-content:center;align-items:center;text-align:center;cursor:pointer;font-size:1em;color:var(--spx-edit-button-color, #ffffff);background:var(--spx-edit-button-background, var(--spx-color-gray-900));border:var(--spx-edit-button-border, none);border-radius:var(--spx-edit-button-border-radius, var(--spx-border-radius));transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function);transition-property:background, box-shadow}:host([styling=default]) .button{padding-left:var(--spx-edit-button-padding-x, 1em 1.2em)}:host([styling=fluid]) .button{--spx-edit-button-padding-x-fluid-min:var(--spx-edit-button-padding-x-min, 1);--spx-edit-button-padding-x-fluid-max:var(--spx-edit-button-padding-x-max, 1.4);--spx-edit-button-padding-x-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-x-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-x-fluid-slope:calc(\n    (\n        var(--spx-edit-button-padding-x-fluid-max) -\n          var(--spx-edit-button-padding-x-fluid-min)\n      ) /\n      (\n        var(--spx-edit-button-padding-x-fluid-max-w-px) -\n          var(--spx-edit-button-padding-x-fluid-min-w-px)\n      )\n  );--spx-edit-button-padding-x-fluid-y-axis:calc(\n    (\n        (var(--spx-edit-button-padding-x-fluid-min-w-px) * -1) *\n          var(--spx-edit-button-padding-x-fluid-slope)\n      ) + var(--spx-edit-button-padding-x-fluid-min)\n  );padding-left:clamp(calc(var(--spx-edit-button-padding-x-fluid-min) * 1rem), calc( (var(--spx-edit-button-padding-x-fluid-y-axis) * 1rem) + (var(--spx-edit-button-padding-x-fluid-slope) * 100vw) ), calc(var(--spx-edit-button-padding-x-fluid-max) * 1rem))}:host([styling=default]) .button{padding-right:var(--spx-edit-button-padding-x, 1em 1.2em)}:host([styling=fluid]) .button{--spx-edit-button-padding-x-fluid-min:var(--spx-edit-button-padding-x-min, 1);--spx-edit-button-padding-x-fluid-max:var(--spx-edit-button-padding-x-max, 1.4);--spx-edit-button-padding-x-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-x-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-x-fluid-slope:calc(\n    (\n        var(--spx-edit-button-padding-x-fluid-max) -\n          var(--spx-edit-button-padding-x-fluid-min)\n      ) /\n      (\n        var(--spx-edit-button-padding-x-fluid-max-w-px) -\n          var(--spx-edit-button-padding-x-fluid-min-w-px)\n      )\n  );--spx-edit-button-padding-x-fluid-y-axis:calc(\n    (\n        (var(--spx-edit-button-padding-x-fluid-min-w-px) * -1) *\n          var(--spx-edit-button-padding-x-fluid-slope)\n      ) + var(--spx-edit-button-padding-x-fluid-min)\n  );padding-right:clamp(calc(var(--spx-edit-button-padding-x-fluid-min) * 1rem), calc( (var(--spx-edit-button-padding-x-fluid-y-axis) * 1rem) + (var(--spx-edit-button-padding-x-fluid-slope) * 100vw) ), calc(var(--spx-edit-button-padding-x-fluid-max) * 1rem))}:host([styling=default]) .button{padding-top:var(--spx-edit-button-padding-y, 1em 1.2em)}:host([styling=fluid]) .button{--spx-edit-button-padding-y-fluid-min:var(--spx-edit-button-padding-y-min, 0.7);--spx-edit-button-padding-y-fluid-max:var(--spx-edit-button-padding-y-max, 1.2);--spx-edit-button-padding-y-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-y-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-y-fluid-slope:calc(\n    (\n        var(--spx-edit-button-padding-y-fluid-max) -\n          var(--spx-edit-button-padding-y-fluid-min)\n      ) /\n      (\n        var(--spx-edit-button-padding-y-fluid-max-w-px) -\n          var(--spx-edit-button-padding-y-fluid-min-w-px)\n      )\n  );--spx-edit-button-padding-y-fluid-y-axis:calc(\n    (\n        (var(--spx-edit-button-padding-y-fluid-min-w-px) * -1) *\n          var(--spx-edit-button-padding-y-fluid-slope)\n      ) + var(--spx-edit-button-padding-y-fluid-min)\n  );padding-top:clamp(calc(var(--spx-edit-button-padding-y-fluid-min) * 1rem), calc( (var(--spx-edit-button-padding-y-fluid-y-axis) * 1rem) + (var(--spx-edit-button-padding-y-fluid-slope) * 100vw) ), calc(var(--spx-edit-button-padding-y-fluid-max) * 1rem))}:host([styling=default]) .button{padding-bottom:var(--spx-edit-button-padding-y, 1em 1.2em)}:host([styling=fluid]) .button{--spx-edit-button-padding-y-fluid-min:var(--spx-edit-button-padding-y-min, 0.7);--spx-edit-button-padding-y-fluid-max:var(--spx-edit-button-padding-y-max, 1.2);--spx-edit-button-padding-y-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-y-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-edit-button-padding-y-fluid-slope:calc(\n    (\n        var(--spx-edit-button-padding-y-fluid-max) -\n          var(--spx-edit-button-padding-y-fluid-min)\n      ) /\n      (\n        var(--spx-edit-button-padding-y-fluid-max-w-px) -\n          var(--spx-edit-button-padding-y-fluid-min-w-px)\n      )\n  );--spx-edit-button-padding-y-fluid-y-axis:calc(\n    (\n        (var(--spx-edit-button-padding-y-fluid-min-w-px) * -1) *\n          var(--spx-edit-button-padding-y-fluid-slope)\n      ) + var(--spx-edit-button-padding-y-fluid-min)\n  );padding-bottom:clamp(calc(var(--spx-edit-button-padding-y-fluid-min) * 1rem), calc( (var(--spx-edit-button-padding-y-fluid-y-axis) * 1rem) + (var(--spx-edit-button-padding-y-fluid-slope) * 100vw) ), calc(var(--spx-edit-button-padding-y-fluid-max) * 1rem))}.button:focus{outline:none}.button:focus-visible{outline:none;box-shadow:var(--spx-focus)}:host([styling=default]) .button{padding:var(--spx-edit-button-padding, 1em 1.2em)}.button--discard{color:var(--spx-edit-button-color-discard, #ffffff);background:var(--spx-edit-button-background-discard, var(--spx-color-gray-600))}.loader{display:block;margin-right:var(--spx-edit-button-loader-gap, 0.5em)}";

const tag = 'spx-edit-button';
const SpxEditButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxEditButtonDidLoad = createEvent(this, "spxEditButtonDidLoad", 7);
    this.spxEditButtonDiscard = createEvent(this, "spxEditButtonDiscard", 7);
    this.spxEditButtonSave = createEvent(this, "spxEditButtonSave", 7);
    this.loading = false;
    this.open = false;
    this.test = false;
    this.background = 'var(--spx-color-gray-900)';
    /**
     * Discard button background.
     *
     * @css
     */
    this.backgroundDiscard = 'var(--spx-color-gray-600)';
    this.bottom = '1em';
    this.border = 'none';
    this.borderDiscard = 'none';
    this.borderRadius = 'var(--spx-border-radius)';
    this.color = '#ffffff';
    /**
     * Discard button color.
     *
     * @css
     */
    this.colorDiscard = '#ffffff';
    this.fontSize = 'var(--spx-font-size)';
    this.fontSizeMax = 1.2;
    this.fontSizeMin = 1;
    /**
     * Gap between the buttons.
     *
     * @css
     */
    this.gap = '0.4em';
    this.loaderColor = '#ffffff';
    this.loaderGap = '0.5em';
    this.padding = '1em 1.2em';
    this.paddingXMin = 1;
    this.paddingXMax = 1.4;
    this.paddingYMin = 0.7;
    this.paddingYMax = 1.2;
    /** Position property of component. */
    this.position = 'fixed';
    this.right = '1em';
    /**
     * Styling.
     *
     * @choice default, fluid, headless
     */
    this.styling = 'default';
    /** Discard button text. */
    this.textDiscard = 'Discard';
    /** Edit button text. */
    this.textEdit = 'Edit site';
    /** Save button text. */
    this.textSave = 'Save';
    this.zIndex = 99;
    this.clickEdit = () => {
      this.open = true;
      const elements = this.editId
        ? getDoc(this.el).querySelectorAll('[data-spx-edit][data-spx-edit-id=' + this.editId + ']')
        : getDoc(this.el).querySelectorAll('[data-spx-edit]');
      elements.forEach((item) => {
        const edit = document.createElement('spx-edit');
        const field = item.getAttribute('data-spx-edit');
        const type = item.getAttribute('data-spx-edit-type');
        const subfield = item.hasAttribute('data-spx-edit-subfield');
        const text = item.innerHTML;
        if (field) {
          edit.setAttribute('name', field);
        }
        if (type) {
          edit.setAttribute('type', type);
        }
        if (subfield) {
          edit.setAttribute('subfield', '');
        }
        edit.setAttribute('text', text);
        edit.setAttribute('editable', '');
        item.innerHTML = '';
        item.appendChild(edit);
      });
    };
    this.clickDiscard = () => {
      this.open = false;
      this.spxEditButtonDiscard.emit({ target: 'document' });
    };
    this.clickSave = () => {
      this.loading = true;
      const getBodyString = () => {
        const string = Math.random().toString(36).substr(2, 9);
        const bodyStringArray = [];
        const elements = document.querySelectorAll('spx-edit');
        elements.forEach((item) => {
          const withoutAmpersand = item
            .getAttribute('body-string')
            .replace('&', '')
            .replace('=', string);
          const encoded = encodeURIComponent(withoutAmpersand);
          const final = '&' + encoded;
          bodyStringArray.push(final.replace(string, '='));
        });
        return bodyStringArray.toString().replace(/,&/g, '&');
      };
      const afterSuccess = () => {
        this.spxEditButtonSave.emit({ target: 'document' });
        this.open = false;
        this.loading = false;
      };
      if (!this.test) {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        fetch(spx.ajax, {
          method: 'POST',
          credentials: 'same-origin',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: 'action=spxEditButtonAjaxHandler' +
            getBodyString() +
            '' +
            '&post_id=' +
            // @ts-ignore
            // eslint-disable-next-line no-undef
            spx.postId +
            '' +
            '&nonce=' +
            // @ts-ignore
            // eslint-disable-next-line no-undef
            spx.nonce +
            '',
        }).then((response) => {
          if (response.status === 200) {
            afterSuccess();
          }
          else if (response.status === 500) {
            this.loading = false;
          }
        });
      }
      else {
        afterSuccess();
      }
    };
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'background',
        'backgroundDiscard',
        'border',
        'borderDiscard',
        'borderRadius',
        'bottom',
        'color',
        'colorDiscard',
        'fontSize',
        'fontSizeMin',
        'fontSizeMax',
        'gap',
        'left',
        'loaderColor',
        'loaderGap',
        'padding',
        'paddingXMax',
        'paddingXMin',
        'paddingYMax',
        'paddingYMin',
        'position',
        'right',
        'top',
        'zIndex',
      ],
    });
    this.spxEditButtonDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  /** Discard changes. */
  async discard() {
    this.clickDiscard();
  }
  /** Enable editing. */
  async edit() {
    this.clickEdit();
  }
  /** Save changes. */
  async save() {
    this.clickSave();
  }
  render() {
    var _a, _b, _c, _d;
    const { tw } = twind(this.el.shadowRoot, this.styling === 'headless');
    const styleButton = this.styling === 'headless' && tw((_a = this.classButton) !== null && _a !== void 0 ? _a : '');
    const styleButtonDiscard = this.styling === 'headless' &&
      tw(((_b = this.classButton) !== null && _b !== void 0 ? _b : '') + ' ' + ((_c = this.classButtonDiscard) !== null && _c !== void 0 ? _c : ''));
    const styleLoader = this.styling === 'headless' && tw((_d = this.classLoader) !== null && _d !== void 0 ? _d : '');
    return (h("div", { class: "inner" }, !this.open ? (h(Button, { as: "button", onClick: this.clickEdit, class: this.styling === 'headless' ? styleButton : 'button' }, this.textEdit || h("slot", { name: "edit" }))) : ([
      h(Button, { as: "button", onClick: this.clickDiscard, class: this.styling === 'headless'
          ? styleButtonDiscard
          : 'button button--discard' }, this.textDiscard || h("slot", { name: "discard" })),
      h(Button, { as: "button", onClick: this.clickSave, class: this.styling === 'headless' ? styleButton : 'button' }, this.loading && (h("spx-icon", { class: this.styling === 'headless' ? styleLoader : 'loader', type: "loader" })), this.textSave || h("slot", { name: "save" })),
    ])));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "background": ["attributesChanged"],
    "backgroundDiscard": ["attributesChanged"],
    "border": ["attributesChanged"],
    "borderDiscard": ["attributesChanged"],
    "borderRadius": ["attributesChanged"],
    "bottom": ["attributesChanged"],
    "color": ["attributesChanged"],
    "colorDiscard": ["attributesChanged"],
    "fontSize": ["attributesChanged"],
    "fontSizeMin": ["attributesChanged"],
    "fontSizeMax": ["attributesChanged"],
    "gap": ["attributesChanged"],
    "left": ["attributesChanged"],
    "loaderColor": ["attributesChanged"],
    "loaderGap": ["attributesChanged"],
    "padding": ["attributesChanged"],
    "paddingXMax": ["attributesChanged"],
    "paddingXMin": ["attributesChanged"],
    "paddingYMax": ["attributesChanged"],
    "paddingYMin": ["attributesChanged"],
    "position": ["attributesChanged"],
    "right": ["attributesChanged"],
    "top": ["attributesChanged"],
    "zIndex": ["attributesChanged"]
  }; }
};
SpxEditButton.style = spxEditButtonCss;

export { SpxEditButton as spx_edit_button };
