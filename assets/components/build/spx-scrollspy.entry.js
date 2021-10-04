import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { g as getDoc } from './getDoc-6e0f059e.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';
import './isInShadow-8729ae2d.js';

const spxScrollspyCss = ":host{display:var(--spx-scrollspy-display, block)}";

const SpxScrollspy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxScrollspyDidLoad = createEvent(this, "spxScrollspyDidLoad", 7);
    this.links = [];
    /** Applied class to active navigation element. */
    this.navClass = 'spx-scrollspy__nav--active';
    /** [prop:target] */
    this.target = 'a';
    /** Intersection observer threshold. */
    this.threshold = 0.5;
    /** Intersection observer root margin. */
    this.rootMargin = '0px';
    /** Appends the currently active link to the end of the URL. */
    this.urlChange = false;
  }
  componentDidLoad() {
    this.init();
    globalComponentDidLoad({ el: this.el });
    this.spxScrollspyDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  init() {
    var _a;
    this.links = [];
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.el.querySelectorAll(this.target).forEach((item) => {
      this.links.push(item.getAttribute('href'));
    });
    const observerOptions = {
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          this.el
            .querySelectorAll(`${this.target}:not([href="#${id}"])`)
            .forEach((item) => {
            item.classList.remove(this.navClass);
          });
          this.el.querySelector(`[href="#${id}"]`).classList.add(this.navClass);
          if (this.urlChange) {
            history.replaceState(null, null, `#${id}`);
          }
        }
      });
    };
    this.observer = new IntersectionObserver(observerCallback, observerOptions);
    getDoc(this.el)
      .querySelectorAll(this.links.toString())
      .forEach((i) => {
      if (i) {
        this.observer.observe(i);
      }
    });
  }
  render() {
    return h("slot", null);
  }
  get el() { return getElement(this); }
};
SpxScrollspy.style = spxScrollspyCss;

export { SpxScrollspy as spx_scrollspy };
