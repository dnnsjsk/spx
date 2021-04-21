import { h, r as registerInstance, e as createEvent, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { s as setVarOrClamp } from './setVarOrClamp-21aa6296.js';
import { t as transitionDuration, a as transitionTimingFunction, f as fontSize, b as fontFamily } from './style-54a0be1c.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

// eslint-disable-next-line no-unused-vars
/**
 * Tag selector.
 */
const tagSelector = (condition, tag, text, slot, style = null) => {
  return condition ? (tag === 'h1' ? (h("h1", { class: style || false }, text)) : tag === 'h2' ? (h("h2", { class: style || false }, text)) : tag === 'h3' ? (h("h3", { class: style || false }, text)) : tag === 'h4' ? (h("h4", { class: style || false }, text)) : tag === 'h5' ? (h("h5", { class: style || false }, text)) : tag === 'h6' ? (h("h6", { class: style || false }, text)) : tag === 'p' ? (h("p", { class: style || false }, text)) : (h("span", { class: style || false }, text))) : (h("slot", { name: slot }));
};

const tag = 'spx-accordion';
const SpxAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxAccordionDidLoad = createEvent(this, "spxAccordionDidLoad", 7);
    this.contentColor = 'var(--spx-color-gray-900)';
    /** Content text. */
    this.contentText = 'Default Content Text';
    /** Content text tag. */
    this.contentTextTag = 'span';
    this.contentTransitionDuration = transitionDuration;
    this.contentTransitionTimingFunction = transitionTimingFunction;
    this.fontSize = fontSize;
    this.fontSizeMin = 1;
    this.fontSizeMax = 1.2;
    /**
     * Space between header and content.
     * @CSS
     */
    this.gap = '0.4em';
    this.gapMin = 1;
    this.gapMax = 1.2;
    this.headerColor = 'var(--spx-color-gray-900)';
    /**
     * Gap between header text and icon.
     * @CSS
     */
    this.headerGap = '0.4em';
    this.headerGapMin = 0.6;
    this.headerGapMax = 1;
    /** Header text. */
    this.headerText = 'Default Header Text';
    /** Header text tag. */
    this.headerTextTag = 'span';
    /** Indicator icon. */
    this.indicatorIcon = 'arrow-down';
    /** Indicator icon type. */
    this.indicatorIconType = 'ionicons';
    /** Indicator icon transform. */
    this.indicatorIconTransform = 'rotate(180deg)';
    /** State of accordion. */
    this.openState = false;
    /**
     * Styling.
     * @choice 'default', 'fluid', 'headless'
     */
    this.styling = 'default';
    /** Header is clicked. */
    this.clickHeader = () => {
      /** Handle linked instances. */
      if (this.link) {
        document
          .querySelectorAll('spx-accordion[link="' + this.link + '"]')
          .forEach((item) => {
          /** Make sure not to toggle current element. */
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
      /** Set the correct heights.. */
      if (this.openState) {
        if (!this.disableAnimation) {
          this.content.style.maxHeight = null;
        }
        this.openState = false;
      }
      else {
        if (!this.disableAnimation) {
          this.content.style.maxHeight = this.content.scrollHeight + 'px';
        }
        this.openState = true;
      }
    };
  }
  onKeydown(e) {
    if (e.key === 'Enter') {
      this.clickHeader();
    }
  }
  componentWillLoad() {
    /** Turn animation off if linked, since height can't be calculated otherwise. */
    if (this.link) {
      this.disableAnimation = true;
    }
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    if (this.el.querySelector('[slot="header"]')) {
      this.headerCustom = true;
    }
    if (this.el.querySelector('[slot="content"]')) {
      this.contentCustom = true;
    }
    this.spxAccordionDidLoad.emit({ target: 'document' });
  }
  /** Closes the accordion. */
  async close() {
    this.openState = false;
  }
  /** Opens the accordion. */
  async open() {
    this.openState = true;
  }
  async reload() {
    this.componentDidLoad();
  }
  /** Toggles the accordion. */
  async toggle() {
    this.openState = !this.openState;
  }
  render() {
    /** Host styles. */
    const styleHost = (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        fontFamily: fontFamily,
        fontSize: setVarOrClamp(tag, 'font-size', this.fontSize, this.fontSizeMin, this.fontSizeMax, this.styling),
        display: 'flex',
        flexDirection: 'column',
      });
    /** Header styles. */
    const styleHeader = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: this.reverse ? '1fr auto' : 'auto 1fr',
        alignItems: 'center',
        gridColumnGap: setVarOrClamp(tag, 'header-gap', this.headerGap, this.headerGapMin, this.headerGapMax, this.styling),
        cursor: 'pointer',
        'h1, h2, h3, h4, h5, h6, p, span': {
          color: setVar(tag, 'header-color', this.headerColor),
        },
        '*:not([slot])': {
          margin: '0',
        },
      })
      : this.openState
        ? this.classHeader + ' ' + this.classHeaderActive
        : this.classHeader + ' ' + this.classHeaderInactive;
    /** Header custom styles. */
    const styleHeaderIcon = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'center center',
        gridColumn: this.reverse && '2',
        transform: this.openState &&
          setVar(tag, 'indicator-icon-transform', this.indicatorIconTransform),
        color: setVar(tag, 'header-color', this.headerColor),
      })
      : this.openState
        ? this.classHeaderIcon + ' ' + this.classHeaderIconActive
        : this.classHeaderIcon + ' ' + this.classHeaderIconInactive;
    /** Content styles. */
    const styleContent = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        display: this.disableAnimation && this.openState
          ? 'block'
          : this.disableAnimation && !this.openState && 'none',
        marginTop: this.openState
          ? setVarOrClamp(tag, 'gap', this.gap, this.gapMin, this.gapMax, this.styling)
          : 0,
        maxHeight: this.disableAnimation ? 'none' : '0',
        overflow: 'hidden',
        height: this.disableAnimation && 'auto',
        transitionProperty: 'max-height, margin-top',
        willChange: 'max-height, margin-top',
        transitionDuration: setVar(tag, 'transition-duration', this.contentTransitionDuration),
        transitionTimingFunction: setVar(tag, 'transition-timing-function', this.contentTransitionTimingFunction),
        'h1, h2, h3, h4, h5, h6, p, span:not(.token)': {
          color: setVar(tag, 'content-color', this.contentColor),
        },
      })
      : this.openState
        ? this.classContent + ' ' + this.classContentActive
        : this.classContentActive + ' ' + this.classContentInactive;
    return (h(Host, { class: styleHost }, h("div", { tabindex: "0", role: "button", "aria-pressed": this.openState ? 'true' : 'false', onClick: this.clickHeader, class: !this.headerCustom && styleHeader }, !this.headerCustom && (h("div", { class: styleHeaderIcon }, this.indicatorIcon && this.indicatorIconType && (h("spx-icon", { icon: this.indicatorIcon, type: this.indicatorIconType })))), this.headerTextOpen && this.openState
      ? tagSelector(!this.headerCustom, this.headerTextTag, this.headerTextOpen, 'header', this.styling === 'headless' && this.openState
        ? this.classHeaderText + ' ' + this.classHeaderTextActive
        : this.styling === 'headless' &&
          this.classHeaderText + ' ' + this.classHeaderTextInactive)
      : tagSelector(!this.headerCustom, this.headerTextTag, this.headerText, 'header', this.styling === 'headless' && this.openState
        ? this.classHeaderText + ' ' + this.classHeaderTextActive
        : this.styling === 'headless' &&
          this.classHeaderText + ' ' + this.classHeaderTextInactive)), h("div", { class: styleContent, ref: (el) => (this.content = el) }, tagSelector(!this.contentCustom, this.contentTextTag, this.contentText, 'content', this.styling === 'headless' && this.openState
      ? this.classContentText + ' ' + this.classContentTextActive
      : this.styling === 'headless' &&
        this.classContentText + ' ' + this.classContentTextInactive))));
  }
  get el() { return getElement(this); }
};

export { SpxAccordion as spx_accordion };
