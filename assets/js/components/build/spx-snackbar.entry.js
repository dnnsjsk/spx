import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css, k as keyframes } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { s as setVarOrClamp } from './setVarOrClamp-21aa6296.js';
import { c as borderRadius, p as position, b as fontFamily } from './style-54a0be1c.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

const tag = 'spx-snackbar';
const SpxSnackbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxSnackbarDidLoad = createEvent(this, "spxSnackbarDidLoad", 7);
    this.animationDelay = '200ms';
    this.animationDuration = '2000ms';
    this.background = 'var(--spx-color-gray-900)';
    this.borderRadius = borderRadius;
    this.color = '#ffffff';
    /**
     * Distance to the edge of the viewport on the x-axis.
     * @CSS
     */
    this.distanceX = '1em';
    /**
     * Distance to the edge of the viewport on the y-axis.
     * @CSS
     */
    this.distanceY = '1em';
    this.fontSize = '18px';
    this.fontSizeMin = 1;
    this.fontSizeMax = 1.6;
    /**
     * Unique identifier for snackbar instance.
     * @editor '#components'
     */
    this.identifier = 'primary';
    this.padding = '1em';
    this.paddingMin = 1;
    this.paddingMax = 1.4;
    /**
     * Component position in page.
     * @choice 'bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-right'
     */
    this.position = 'bottom-right';
    /**
     * CSS property position of button.
     * @editor 'absolute'
     */
    this.positionCss = 'fixed';
    /** Space between snackbars. */
    this.spaceBetween = '12px';
    /**
     * Styling.
     * @choice 'default', 'fluid', 'headless'
     */
    this.styling = 'default';
    /**
     * Element where snackbars should be created in.
     * @editor '#components'
     */
    this.target = 'body';
    /** Text inside snackbar. */
    this.text = "Hello, I'm a snackbar.";
    this.zIndex = 103;
    this.removeItem = () => {
      const container = document.querySelector('#spx-snackbar-container');
      if (container) {
        container.remove();
      }
      else {
        const el = this.el;
        el.remove();
      }
    };
  }
  positionChanged() {
    this.createPositionArray();
    document.querySelector('[data-spx-id="' + this.identifier + '"]').className = '';
    document
      .querySelector('[data-spx-id="' + this.identifier + '"]')
      .classList.add(css(Object.assign(Object.assign({}, position('snackbar', this.positionArray, this.distanceX, this.distanceY)), { position: this.positionCss, display: 'flex', flexDirection: 'column', zIndex: this.zIndex, 'spx-snackbar + spx-snackbar': {
        marginTop: setVar(tag, 'space-Y', this.spaceBetween),
      } })));
  }
  componentWillLoad() {
    this.createPositionArray();
    /** Load into container if more than one snackbar are on screen. */
    if (!document.querySelector('[data-spx-id="' + this.identifier + '"]')) {
      const div = document.createElement('div');
      this.containerClass = {};
      div.classList.add(css(Object.assign(Object.assign({}, position('snackbar', this.positionArray, this.distanceX, this.distanceY)), { position: this.positionCss, display: 'flex', flexDirection: 'column', zIndex: this.zIndex, 'spx-snackbar + spx-snackbar': {
          marginTop: setVar(tag, 'space-Y', this.spaceBetween),
        } })));
      div.setAttribute('data-spx-id', this.identifier);
      div.appendChild(this.el);
      const target = document.querySelector(this.target);
      target.appendChild(div);
    }
    else {
      document
        .querySelector('[data-spx-id="' + this.identifier + '"]')
        .appendChild(this.el);
    }
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.spxSnackbarDidLoad.emit({ target: 'document' });
  }
  componentDidRender() {
    const removeItem = () => {
      const el = this.el;
      el.remove();
    };
    /** Remove snackbar from dom after 5 seconds. */
    if (!this.fixed) {
      setTimeout(removeItem, parseInt(this.animationDuration.replace('ms', '')));
    }
  }
  createPositionArray() {
    this.positionArray = this.position.split('-');
  }
  async reload() {
    this.componentDidLoad();
  }
  render() {
    /** Animation in and out. */
    const kfOut = keyframes({
      '0%, 100%': {
        opacity: 0,
      },
      '30%, 80%': {
        opacity: 1,
      },
    });
    /** Animation in. */
    const kfIn = keyframes({
      '0%': {
        opacity: 0,
      },
      '30%, 100%': {
        opacity: 1,
      },
    });
    /** Host styles. */
    const styleHost = (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        display: 'flex',
        flexDirection: !this.reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: setVarOrClamp(tag, 'padding', this.padding, this.paddingMin, this.paddingMax, this.styling),
        paddingRight: (this.reverse || !this.closeable) &&
          setVarOrClamp(tag, 'padding', this.padding, this.paddingMin, this.paddingMax, this.styling),
        paddingBottom: setVarOrClamp(tag, 'padding', this.padding, this.paddingMin, this.paddingMax, this.styling),
        paddingLeft: this.closeable && this.reverse
          ? 0
          : setVarOrClamp(tag, 'padding', this.padding, this.paddingMin, this.paddingMax, this.styling),
        opacity: 0,
        color: setVar(tag, 'color', this.color),
        background: setVar(tag, 'background', this.background),
        border: setVar(tag, 'border', this.border),
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
        animation: !this.fixed ? kfOut : kfIn,
        animationDelay: setVar(tag, 'animation-delay', this.animationDelay),
        animationDuration: setVar(tag, 'animation-duration', this.animationDuration),
        animationFillMode: 'forwards',
      });
    /** Button styles. */
    const styleButton = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        padding: '0 ' + setVar(tag, 'padding', this.padding) + '',
        width: '0.7em',
        opacity: '0.3',
        boxSizing: 'content-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })
      : this.classButton;
    /** Text styles. */
    const styleText = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        whiteSpace: 'nowrap',
        fontFamily: fontFamily,
        fontSize: setVarOrClamp(tag, 'font-size', this.fontSize, this.fontSizeMin, this.fontSizeMax, this.styling),
      })
      : this.classText;
    return (h(Host, { class: styleHost }, this.closeable && (h("div", { role: "button", onClick: this.removeItem, class: styleButton }, h("spx-icon", { icon: "close" }))), h("span", { class: styleText }, this.text ? this.text : h("slot", null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "zIndex": ["positionChanged"],
    "spaceBetween": ["positionChanged"],
    "position": ["positionChanged"]
  }; }
};

export { SpxSnackbar as spx_snackbar };
