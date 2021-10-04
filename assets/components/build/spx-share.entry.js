import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { s as setProperty, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { B as Button } from './Button-059c3d4b.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxShareCss = ":host{display:var(--spx-share-display, block)}.inner{line-height:0;display:grid;font-size:var(--spx-share-font-size, var(--spx-font-size));grid-auto-flow:column}:host([styling=default]) .inner{grid-gap:var(--spx-share-item-gap, 0.5em)}:host([styling=fluid]) .inner{--spx-share-item-gap-fluid-min:var(--spx-share-item-gap-min, 0.4);--spx-share-item-gap-fluid-max:var(--spx-share-item-gap-max, 1.2);--spx-share-item-gap-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-share-item-gap-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-share-item-gap-fluid-slope:calc(\n    (\n        var(--spx-share-item-gap-fluid-max) -\n          var(--spx-share-item-gap-fluid-min)\n      ) /\n      (\n        var(--spx-share-item-gap-fluid-max-w-px) -\n          var(--spx-share-item-gap-fluid-min-w-px)\n      )\n  );--spx-share-item-gap-fluid-y-axis:calc(\n    (\n        (var(--spx-share-item-gap-fluid-min-w-px) * -1) *\n          var(--spx-share-item-gap-fluid-slope)\n      ) + var(--spx-share-item-gap-fluid-min)\n  );grid-gap:clamp(calc(var(--spx-share-item-gap-fluid-min) * 1rem), calc( (var(--spx-share-item-gap-fluid-y-axis) * 1rem) + (var(--spx-share-item-gap-fluid-slope) * 100vw) ), calc(var(--spx-share-item-gap-fluid-max) * 1rem))}:host([vertical]:not([vertical=false])) .inner{grid-auto-flow:row;grid-auto-rows:max-content}:host([vertical]:not([vertical=false])) .inner{grid-auto-columns:max-content}a{--facebook:#1877f2;--twitter:#1da1f2;--whatsapp:#25d366;--email:#c6c6c6;display:flex;align-items:center;justify-content:center;box-sizing:content-box;cursor:pointer;border-radius:var(--spx-share-item-border-radius, var(--spx-border-radius));color:var(--spx-share-item-color, #ffffff);background:var(--spx-share-item-background, var(--color));transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function);transition-property:filter, box-shadow}a:focus{outline:none}a:focus-visible{outline:none;box-shadow:var(--spx-focus)}:host([styling=default]) a{width:var(--spx-share-item-size, 1em)}:host([styling=fluid]) a{--spx-share-item-size-fluid-min:var(--spx-share-item-size-min, 0.7);--spx-share-item-size-fluid-max:var(--spx-share-item-size-max, 0.8);--spx-share-item-size-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-share-item-size-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-share-item-size-fluid-slope:calc(\n    (\n        var(--spx-share-item-size-fluid-max) -\n          var(--spx-share-item-size-fluid-min)\n      ) /\n      (\n        var(--spx-share-item-size-fluid-max-w-px) -\n          var(--spx-share-item-size-fluid-min-w-px)\n      )\n  );--spx-share-item-size-fluid-y-axis:calc(\n    (\n        (var(--spx-share-item-size-fluid-min-w-px) * -1) *\n          var(--spx-share-item-size-fluid-slope)\n      ) + var(--spx-share-item-size-fluid-min)\n  );width:clamp(calc(var(--spx-share-item-size-fluid-min) * 1rem), calc( (var(--spx-share-item-size-fluid-y-axis) * 1rem) + (var(--spx-share-item-size-fluid-slope) * 100vw) ), calc(var(--spx-share-item-size-fluid-max) * 1rem))}:host([styling=default]) a{height:var(--spx-share-item-size, 1em)}:host([styling=fluid]) a{--spx-share-item-size-fluid-min:var(--spx-share-item-size-min, 0.7);--spx-share-item-size-fluid-max:var(--spx-share-item-size-max, 0.8);--spx-share-item-size-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-share-item-size-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-share-item-size-fluid-slope:calc(\n    (\n        var(--spx-share-item-size-fluid-max) -\n          var(--spx-share-item-size-fluid-min)\n      ) /\n      (\n        var(--spx-share-item-size-fluid-max-w-px) -\n          var(--spx-share-item-size-fluid-min-w-px)\n      )\n  );--spx-share-item-size-fluid-y-axis:calc(\n    (\n        (var(--spx-share-item-size-fluid-min-w-px) * -1) *\n          var(--spx-share-item-size-fluid-slope)\n      ) + var(--spx-share-item-size-fluid-min)\n  );height:clamp(calc(var(--spx-share-item-size-fluid-min) * 1rem), calc( (var(--spx-share-item-size-fluid-y-axis) * 1rem) + (var(--spx-share-item-size-fluid-slope) * 100vw) ), calc(var(--spx-share-item-size-fluid-max) * 1rem))}:host([styling=default]) a{padding:var(--spx-share-item-padding, 0.5em)}:host([styling=fluid]) a{--spx-share-item-padding-fluid-min:var(--spx-share-item-padding-min, 0.5);--spx-share-item-padding-fluid-max:var(--spx-share-item-padding-max, 1.2);--spx-share-item-padding-fluid-min-w-px:calc(\n    var(--spx-fluid-min-w) / var(--spx-fluid-base)\n  );--spx-share-item-padding-fluid-max-w-px:calc(\n    var(--spx-fluid-max-w) / var(--spx-fluid-base)\n  );--spx-share-item-padding-fluid-slope:calc(\n    (\n        var(--spx-share-item-padding-fluid-max) -\n          var(--spx-share-item-padding-fluid-min)\n      ) /\n      (\n        var(--spx-share-item-padding-fluid-max-w-px) -\n          var(--spx-share-item-padding-fluid-min-w-px)\n      )\n  );--spx-share-item-padding-fluid-y-axis:calc(\n    (\n        (var(--spx-share-item-padding-fluid-min-w-px) * -1) *\n          var(--spx-share-item-padding-fluid-slope)\n      ) + var(--spx-share-item-padding-fluid-min)\n  );padding:clamp(calc(var(--spx-share-item-padding-fluid-min) * 1rem), calc( (var(--spx-share-item-padding-fluid-y-axis) * 1rem) + (var(--spx-share-item-padding-fluid-slope) * 100vw) ), calc(var(--spx-share-item-padding-fluid-max) * 1rem))}a.facebook{--color:var(--facebook)}a.twitter{--color:var(--twitter)}a.whatsapp{--color:var(--whatsapp)}a.email{--color:var(--email)}:host([theme=outline]) a,:host([theme=minimal]) a{color:var(--spx-share-item-color, var(--color));background:transparent}:host([theme=outline]) a{border:1px solid var(--color)}a:hover{filter:var(--spx-share-item-filter-hover, brightness(110%) saturate(120%))}a svg{height:100%}";

const tag = 'spx-share';
const SpxShare = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxShareDidLoad = createEvent(this, "spxShareDidLoad", 7);
    /** @css */
    this.fontSize = 'var(--spx-font-size)';
    /** @css */
    this.fontSizeMax = 1.4;
    /** @css */
    this.fontSizeMin = 1;
    /** @css */
    this.itemBorderRadius = 'var(--spx-border-radius)';
    /**
     * Filter hover.
     *
     * @css
     */
    this.itemFilterHover = 'brightness(110%) saturate(120%)';
    /**
     * Gap between buttons.
     *
     * @css
     */
    this.itemGap = '0.5em';
    /** @css */
    this.itemGapMin = 0.4;
    /** @css */
    this.itemGapMax = 1;
    /** @css */
    this.itemPadding = '0.5em';
    /** @css */
    this.itemPaddingMin = 0.5;
    /** @css */
    this.itemPaddingMax = 1.2;
    /** @css */
    this.itemSize = '1em';
    /** @css */
    this.itemSizeMin = 0.7;
    /** @css */
    this.itemSizeMax = 1;
    /**
     * Styling.
     *
     * @choice default, fluid
     */
    this.styling = 'default';
    /** Link href target. */
    this.target = '_blank';
    /**
     * Button theme.
     *
     * @choice default, outline, minimal
     */
    this.theme = 'default';
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
        'fontSize',
        'fontSizeMax',
        'fontSizeMin',
        'itemBackground',
        'itemBorderRadius',
        'itemColor',
        'itemFilterHover',
        'itemGap',
        'itemGapMax',
        'itemGapMin',
        'itemPaddingMax',
        'itemPaddingMin',
        'itemSize',
        'itemSizeMax',
        'itemSizeMin',
      ],
    });
    this.spxShareDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return (h("div", { class: "inner" }, [
      {
        className: 'facebook',
        href: 'https://www.facebook.com/sharer/sharer.php?u=',
        icon: 'logo-facebook',
      },
      {
        className: 'twitter',
        href: 'https://www.twitter.com/share?url=',
        icon: 'logo-twitter',
      },
      {
        className: 'whatsapp',
        href: 'https://web.whatsapp.com/send?text=',
        icon: 'logo-whatsapp',
      },
      {
        className: 'email',
        href: 'mailto:?body=',
        icon: 'mail',
      },
    ].map((item) => {
      return (h(Button, { class: item.className, href: item.href + window.location.href, target: this.target }, h("spx-icon", { icon: item.icon })));
    })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "fontSize": ["attributesChanged"],
    "fontSizeMax": ["attributesChanged"],
    "fontSizeMin": ["attributesChanged"],
    "itemBackground": ["attributesChanged"],
    "itemBorderRadius": ["attributesChanged"],
    "itemColor": ["attributesChanged"],
    "itemFilterHover": ["attributesChanged"],
    "itemGap": ["attributesChanged"],
    "itemGapMax": ["attributesChanged"],
    "itemGapMin": ["attributesChanged"],
    "itemPaddingMax": ["attributesChanged"],
    "itemPaddingMin": ["attributesChanged"],
    "itemSize": ["attributesChanged"],
    "itemSizeMax": ["attributesChanged"],
    "itemSizeMin": ["attributesChanged"]
  }; }
};
SpxShare.style = spxShareCss;

export { SpxShare as spx_share };
