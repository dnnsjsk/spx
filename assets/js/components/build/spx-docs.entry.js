import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { s as setVarOrClamp, a as setClamp } from './setVarOrClamp-21aa6296.js';
import { d as text, t as transitionDuration, a as transitionTimingFunction } from './style-54a0be1c.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';
import { m as merge } from './lodash-4338c591.js';
import { w as wrap } from './wrap-369eca7a.js';

/**
 *  Insert element before another one.
 */
function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode);
}

const tag = 'spx-docs';
const SpxDocs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxDocsDidLoad = createEvent(this, "spxDocsDidLoad", 7);
    this.bpMobile = 1024;
    this.gap = '3rem';
    this.contentPaddingYMin = 0;
    this.contentPaddingYMax = 0;
    this.navigationGapMin = 0.2;
    this.navigationGapMax = 0.4;
    this.navigationHeadingTag = 'h1';
    this.navigationLinkFontSizeMin = 0.8;
    this.navigationLinkFontSizeMax = 1;
    this.navigationLinkFontWeight = '500';
    this.navigationLinkLetterSpacing = '0';
    this.navigationLinkLineHeight = '1.25';
    this.navigationLinkTextTransform = 'default';
    this.navigationPaddingYMin = 0;
    this.navigationPaddingYMax = 0;
    this.navigationTitleFontSizeMin = 0.8;
    this.navigationTitleFontSizeMax = 0.9;
    this.navigationTitleFontWeight = '500';
    this.navigationTitleLetterSpacing = '0';
    this.navigationTitleLineHeight = '1.25';
    this.navigationTitleTextTransform = 'uppercase';
    this.navigationTitleMarginBottom = 1;
    this.navigationTitleMarginBottomMin = 1;
    this.navigationTitleMarginBottomMax = 2;
    this.navigationTop = '0';
    this.offsetMarginTop = '';
    /**
     * Styling.
     * @choice 'default', 'fluid'
     */
    this.styling = 'fluid';
  }
  /** Listen to window resize. */
  onResize() {
    this.mobile = window.innerWidth < this.bpMobile;
  }
  componentWillLoad() {
    this.onResize();
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.createNavigation();
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        document.querySelector(window.location.hash).scrollIntoView();
      }
    }
    this.spxDocsDidLoad.emit({ target: 'document' });
  }
  /** Generates the navigation. */
  createNavigation() {
    if (this.content.innerHTML !== '') {
      /** Create links from IDs. */
      this.content
        .querySelectorAll(this.navigationHeadingTag + ':not([data-spx-docs-no-navigation])')
        .forEach((item, index) => {
        const link = item.innerHTML
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/^([-=\s]*)([a-zA-Z0-9])/gm, '$2');
        const id = this.uniqueId ? link + '-' + index : link;
        const a = document.createElement('a');
        item.setAttribute('data-spx-docs-index', String(index));
        item.setAttribute('id', id);
        a.setAttribute('data-spx-docs-index', String(index));
        a.setAttribute('href', '#' + id);
        a.innerHTML = item.innerHTML;
        this.navigation.appendChild(a);
        wrap(a, document.createElement('li'));
      });
      /** Create headings and separators. */
      this.content
        .querySelectorAll(this.navigationHeadingTag +
        '[data-spx-docs-heading]:not([data-spx-docs-no-navigation])')
        .forEach((item) => {
        const index = item.getAttribute('data-spx-docs-index');
        const span = document.createElement('span');
        const el = this.navigation.querySelector('[data-spx-docs-index="' + index + '"]').parentElement;
        span.innerHTML = item.getAttribute('data-spx-docs-heading');
        this.navigation.insertBefore(span, el);
        if (this.separator && index !== '0') {
          const span = document.createElement(this.separator);
          span.setAttribute('data-spx-docs-separator', '');
          span.setAttribute('data-spx-docs-content', item.getAttribute('data-spx-docs-heading'));
          span.innerHTML = item.getAttribute('data-spx-docs-heading');
          this.content.appendChild(span);
          insertBefore(span, item);
        }
      });
      this.el.querySelector('spx-scrollspy').reload();
    }
  }
  render() {
    /** Host. */
    const styleHost = css({
      display: this.mobile ? 'block' : 'grid',
      gridTemplateColumns: !this.mobile && 'minmax(0, auto) minmax(0, 1fr)',
      gap: setVar(tag, 'gap', this.gap),
      gridAutoFlow: 'column',
    });
    const styleNavigationWrap = css({
      display: this.mobile ? 'none' : 'block',
      background: setVar(tag, 'navigation-background', this.navigationBackground),
    });
    /** Navigation. */
    const styleNavigation = {
      position: 'sticky',
      top: setVar(tag, 'navigation-top', this.navigationTop),
      gridAutoRows: 'max-content',
      height: 'calc(100vh - ' + this.navigationTop + ')',
      paddingTop: setVarOrClamp(tag, 'navigation-padding-y', this.navigationPaddingY, this.navigationPaddingYMin, this.navigationPaddingYMax, this.styling),
      paddingBottom: setVarOrClamp(tag, 'navigation-padding-y', this.navigationPaddingY, this.navigationPaddingYMin, this.navigationPaddingYMax, this.styling),
      overflowY: 'auto',
      ul: {
        display: 'grid',
        gridGap: setVarOrClamp(tag, 'navigation-gap', this.navigationGap, this.navigationGapMin, this.navigationGapMax, this.styling),
      },
      a: Object.assign(Object.assign({}, text(tag, 'navigation-link', this.navigationLinkColor, this.navigationLinkFontSize, this.navigationLinkFontSizeMin, this.navigationLinkFontSizeMax, this.navigationLinkFontWeight, this.navigationLinkLetterSpacing, this.navigationLinkLineHeight, this.navigationLinkTextTransform, this.styling)), { width: 'max-content', transitionProperty: 'color', transitionDuration: setVar(tag, 'navigation-transition-duration', transitionDuration), itemTransitionTimingFunction: setVar(tag, 'navigation-transition-timing-function', transitionTimingFunction) }),
      li: {
        '&:last-of-type': {
          marginBottom: setVarOrClamp(tag, 'navigation-padding-y', this.navigationPaddingY, this.navigationPaddingYMin, this.navigationPaddingYMax, this.styling),
        },
        '&.spx-scrollspy__nav--active a': {
          color: setVar(tag, 'navigation-link-color-active', this.navigationLinkColorActive),
        },
      },
      span: Object.assign({}, text(tag, 'navigation-title', this.navigationTitleColor, this.navigationTitleFontSize, this.navigationTitleFontSizeMin, this.navigationTitleFontSizeMax, this.navigationTitleFontWeight, this.navigationTitleLetterSpacing, this.navigationTitleLineHeight, this.navigationTitleTextTransform, this.styling)),
      'li + span': {
        display: 'block',
        marginTop: setVarOrClamp(tag, 'navigation-title-margin-bottom', this.navigationTitleMarginBottom, this.navigationTitleMarginBottomMin, this.navigationTitleMarginBottomMax, this.styling),
      },
    };
    /** Merge navigation objects to avoid emotion error. */
    const styleNavigationMerge = css(merge(styleNavigation, {}));
    /** Content. */
    const styleContent = {
      paddingTop: setVar(tag, 'content-padding', setClamp(tag, 'padding-y', this.contentPaddingYMin, this.contentPaddingYMax)),
      paddingBottom: setVar(tag, 'content-padding', setClamp(tag, 'padding-y', this.contentPaddingYMin, this.contentPaddingYMax)),
      '[data-spx-docs-index]:before': {
        display: 'block',
        content: '" "',
        marginTop: 'calc(' +
          setVar(tag, 'offset-margin-top', this.offsetMarginTop) +
          ' * -1)',
        height: setVar(tag, 'offset-margin-top', this.offsetMarginTop),
        visibility: 'hidden',
      },
      '&:last-child': {
        marginBottom: setClamp(tag, 'content-padding-y', this.contentPaddingYMin, this.contentPaddingYMax),
      },
    };
    /** Merge content objects to avoid emotion error. */
    const styleContentMerge = css(merge(styleContent, {}));
    return (h(Host, { class: styleHost }, h("div", { class: styleNavigationWrap }, h("spx-scrollspy", { display: "grid", "url-change": true, scrolling: this.scrolling, class: styleNavigationMerge }, h("ul", { ref: (el) => (this.navigation = el) }))), h("div", { ref: (el) => (this.content = el), class: styleContentMerge }, h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { SpxDocs as spx_docs };
