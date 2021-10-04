import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { m as mutationObserver, s as setProperty, l as lazyload_min, g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxIframeCss = ":host{display:var(--spx-iframe-display, block)}.inner{height:100%;width:100%;position:relative;min-height:var(--spx-iframe-min-heigt, 400px)}iframe{border:none;transform-origin:left top;position:absolute}.loader{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%) scale(2);padding:var(--spx-iframe-loader-padding, 0.8em);background:var(--spx-iframe-loader-background, var(--spx-color-gray-900));color:var(--spx-iframe-loader-color, #ffffff);border-radius:var(--spx-iframe-loader-border-radius, var(--spx-border-radius))}";

const tag = 'spx-iframe';
const SpxIframe = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxIframeDidLoad = createEvent(this, "spxIframeDidLoad", 7);
    /** @css */
    this.loaderBackground = 'var(--spx-color-gray-900)';
    /** @css */
    this.loaderColor = '#ffffff';
    /** @css */
    this.loaderBorderRadius = 'var(--spx-border-radius)';
    /** @css */
    this.loaderPadding = '0.8em';
    /** @css */
    this.minHeight = '400px';
    /** Screen size of the site shown inside the iframe. */
    this.size = '1440px';
    /** Source for the iframe. */
    this.src = 'https://spx.dev';
    this.setHeight = () => {
      const set = () => {
        if (this.el.shadowRoot.querySelector('iframe').contentWindow.document
          .body === undefined ||
          this.el.shadowRoot.querySelector('iframe').contentWindow.document
            .body === null) {
          setTimeout(set, 100);
        }
        else {
          this.iframe.style.height =
            this.el.shadowRoot.querySelector('iframe').contentWindow.document.body
              .scrollHeight + 'px';
        }
      };
      set();
    };
    this.setUpMutationObserver = () => {
      mutationObserver(this.el.shadowRoot.querySelector('iframe').contentWindow.document.body, {
        attributes: true,
        childList: true,
        subtree: true,
      }, () => {
        this.setHeight();
        setTimeout(() => this.setHeight(), 500);
      });
    };
    this.handleResize = () => {
      if (this.parent && this.iframe) {
        const ratio = this.parent.offsetWidth / this.iframe.offsetWidth;
        this.iframe.style.transform = 'scale(calc((' + ratio + '))';
        this.parentHeight = this.parent.offsetHeight;
        this.iframe.style.height = this.parentHeight / ratio + 'px';
      }
    };
  }
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }
  onResize() {
    this.handleResize();
    if (this.fit) {
      this.setHeight();
    }
  }
  componentDidLoad() {
    if (this.lazy) {
      // @ts-ignore
      // eslint-disable-next-line no-unused-vars
      const lazyLoadInstance = new lazyload_min({
        unobserve_entered: true,
        unobserve_completed: true,
        callback_loaded: () => {
          setTimeout(() => {
            if (this.fit) {
              this.setHeight();
              this.setUpMutationObserver();
            }
            this.handleResize();
          }, 10);
        },
      }, this.el.shadowRoot.querySelectorAll('[data-src]'));
    }
    this.iframe = this.el.shadowRoot.querySelector('iframe');
    this.parent = this.el.shadowRoot.querySelector('.inner');
    this.el.shadowRoot.querySelector('iframe').onload = () => {
      this.loaded = true;
      if (!this.lazy) {
        this.handleResize();
      }
    };
    if (this.fit && !this.lazy) {
      this.setHeight();
      this.setUpMutationObserver();
    }
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'loaderBackground',
        'loaderBorderRadius',
        'loaderColor',
        'loaderPadding',
        'minHeight',
      ],
    });
    this.spxIframeDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  componentDidUpdate() {
    this.handleResize();
  }
  render() {
    return (h("div", { class: "inner" }, h("iframe", { style: { width: this.size }, ref: (el) => (this.iframe = el), tabindex: "-1", src: !this.lazy ? this.src : '', "data-src": this.lazy && this.src }), !this.loaded && (h("div", { class: "loader" }, h("spx-icon", { type: "loader" })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "loaderBackground": ["attributesChanged"],
    "loaderBorderRadius": ["attributesChanged"],
    "loaderColor": ["attributesChanged"],
    "loaderPadding": ["attributesChanged"],
    "minHeight": ["attributesChanged"]
  }; }
};
SpxIframe.style = spxIframeCss;

export { SpxIframe as spx_iframe };
