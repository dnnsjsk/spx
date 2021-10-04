import { r as registerInstance, e as createEvent, h, j as Host, g as getElement } from './index-a2b24666.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import './_commonjsHelpers-8fe71198.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const spxClassToggleCss = ":host{display:var(--class-toggle-display, block)}";

const SpxClassToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxClassToggleDidLoad = createEvent(this, "spxClassToggleDidLoad", 7);
    /** If target element should be searched within component or in document. */
    this.inner = true;
    /** [prop:target] */
    this.target = '*';
    /** List of classes that should be toggled. */
    this.toggle = 'spx-class-toggle--active';
    this.createToggleArray = () => {
      this.classesArray = this.toggle.replace(/ /g, ',').split(',');
    };
    this.toggleClasses = () => {
      this.classesArray.forEach((item) => {
        (this.inner ? this.el : document)
          .querySelectorAll(this.target)
          .forEach((itemInner) => {
          if (itemInner.classList.contains(item)) {
            itemInner.classList.remove(item);
            if (this.local) {
              localStorage.removeItem(this.local);
            }
          }
          else {
            itemInner.classList.add(item);
            if (this.local) {
              localStorage.setItem(this.local, String(true));
            }
          }
        });
      });
    };
    this.addClasses = () => {
      this.classesArray.forEach((item) => {
        (this.inner ? this.el : document)
          .querySelectorAll(this.target)
          .forEach((itemInner) => {
          if (itemInner.classList.contains(item)) {
            itemInner.classList.remove(item);
          }
          else {
            itemInner.classList.add(item);
          }
        });
      });
    };
  }
  toggleUpdate() {
    this.createToggleArray();
  }
  componentWillLoad() {
    this.createToggleArray();
    if (this.local) {
      if (localStorage.getItem(this.local)) {
        this.addClasses();
      }
    }
  }
  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });
    this.spxClassToggleDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return (h(Host, { onClick: this.toggleClasses }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "toggle": ["toggleUpdate"]
  }; }
};
SpxClassToggle.style = spxClassToggleCss;

export { SpxClassToggle as spx_class_toggle };
