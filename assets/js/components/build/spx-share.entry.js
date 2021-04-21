import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { s as setVarOrClamp } from './setVarOrClamp-21aa6296.js';
import { f as fontSize, c as borderRadius, t as transitionDuration, a as transitionTimingFunction } from './style-54a0be1c.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

const tag = 'spx-share';
const SpxShare = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxShareDidLoad = createEvent(this, "spxShareDidLoad", 7);
    this.fontSize = fontSize;
    this.fontSizeMin = 1;
    this.fontSizeMax = 1.4;
    this.itemBorderRadius = borderRadius;
    /**
     * Filter hover.
     * @CSS
     */
    this.itemFilterHover = 'brightness(110%) saturate(120%)';
    /**
     * Gap between buttons.
     * @CSS
     */
    this.itemGap = '0.5em';
    this.itemGapMin = 0.4;
    this.itemGapMax = 1;
    this.itemPadding = '0.5em';
    this.itemPaddingMin = 0.5;
    this.itemPaddingMax = 1.2;
    this.itemSize = '1em';
    this.itemSizeMin = 0.7;
    this.itemSizeMax = 1;
    this.itemTransitionDuration = transitionDuration;
    this.itemTransitionTimingFunction = transitionTimingFunction;
    /**
     * Styling.
     * @choice 'default', 'fluid', 'headless'
     */
    this.styling = 'default';
    /** Button href target. */
    this.target = '_blank';
    /**
     * Button theme.
     * @choice 'default', 'outline', 'minimal'
     */
    this.theme = 'default';
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.location = location.href;
    this.spxShareDidLoad.emit({ target: 'document' });
  }
  async reload() {
    this.componentDidLoad();
  }
  render() {
    /** Host styles. */
    const styleHost = (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        fontSize: setVar(tag, 'font-size', this.fontSize),
        display: 'grid',
        gridAutoFlow: this.vertical ? 'row' : 'column',
        gridAutoColumns: !this.vertical && 'max-content',
        gridAutoRows: this.vertical && 'max-content',
        gridGap: setVarOrClamp(tag, 'item-gap', this.itemGap, this.itemGapMin, this.itemGapMax, this.styling),
      });
    /** Link styles. */
    const styleItem = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'content-box',
        cursor: 'pointer',
        width: setVarOrClamp(tag, 'item-size', this.itemSize, this.itemSizeMin, this.itemSizeMax, this.styling),
        height: setVarOrClamp(tag, 'item-size', this.itemSize, this.itemSizeMin, this.itemSizeMax, this.styling),
        padding: setVarOrClamp(tag, 'item-padding', this.itemPadding, this.itemPaddingMin, this.itemPaddingMax, this.styling),
        borderRadius: setVar(tag, 'item-border-radius', this.itemBorderRadius),
        color: setVar(tag, 'item-color', this.itemColor),
        background: setVar(tag, 'item-background', this.itemBackground),
        transitionProperty: 'filter',
        transitionDuration: setVar(tag, 'item-transition-duration', this.itemTransitionDuration),
        transitionTimingFunction: setVar(tag, 'item-transition-timing-function', this.itemTransitionTimingFunction),
        '&:hover': {
          filter: setVar(tag, 'item-filter-hover', this.itemFilterHover),
        },
        svg: {
          height: '100%',
        },
      })
      : this.classItem;
    /** Facebook styles. */
    const styleFacebook = css({
      background: this.theme === 'default' && !this.itemBackground
        ? '#1877F2'
        : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color: this.theme === 'outline' || this.theme === 'minimal'
        ? '#1877F2'
        : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #1877F2',
    });
    /** Twitter styles. */
    const styleTwitter = css({
      background: this.theme === 'default' && !this.itemBackground
        ? '#1DA1F2'
        : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color: this.theme === 'outline' || this.theme === 'minimal'
        ? '#1DA1F2'
        : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #1DA1F2',
    });
    /** Email styles. */
    const styleEmail = css({
      background: this.theme === 'default' && !this.itemBackground
        ? '#c6c6c6'
        : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color: this.theme === 'outline' || this.theme === 'minimal'
        ? '#c6c6c6'
        : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #c6c6c6',
    });
    /** WhatsApp styles. */
    const styleWhatsapp = css({
      background: this.theme === 'default' && !this.itemBackground
        ? '#25D366'
        : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color: this.theme === 'outline' || this.theme === 'minimal'
        ? '#25D366'
        : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #25D366',
    });
    return (h(Host, { class: styleHost }, h("a", { class: css([styleItem, styleFacebook]), target: this.target, href: 'https://www.facebook.com/sharer/sharer.php?u=' + this.location + '' }, h("spx-icon", { icon: "logo-facebook" })), h("a", { class: css([styleItem, styleTwitter]), target: this.target, href: 'http://www.twitter.com/share?url=' + this.location + '' }, h("spx-icon", { icon: "logo-twitter" })), h("a", { class: css([styleItem, styleWhatsapp]), target: this.target, href: 'https://web.whatsapp.com/send?text=' + this.location + '' }, h("spx-icon", { icon: "logo-whatsapp" })), h("a", { class: css([styleItem, styleEmail]), target: this.target, href: 'mailto:?body=' + this.location + '' }, h("spx-icon", { icon: "mail" }))));
  }
  get el() { return getElement(this); }
};

export { SpxShare as spx_share };
