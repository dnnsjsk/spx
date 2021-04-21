import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

const tag = 'spx-class-toggle';
const SpxClassToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxClassToggleDidLoad = createEvent(this, "spxClassToggleDidLoad", 7);
    this.display = 'block';
    /** List of classes that should be toggled. */
    this.toggle = 'spx-class-toggle--active';
    /** Create an array of classes from the component attribute. */
    this.createToggleArray = () => {
      this.classesArray = this.toggle.replace(/ /g, ',').split(',');
    };
    /** Toggle classes. */
    this.toggleClasses = () => {
      this.classesArray.forEach((item) => {
        (this.target
          ? document.querySelectorAll(this.target)
          : this.el.querySelectorAll('*')).forEach((itemInner) => {
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
  }
  toggleChanged() {
    this.createToggleArray();
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.createToggleArray();
    /** Check if local storage is set. */
    if (this.local) {
      if (localStorage.getItem(this.local)) {
        this.addClasses();
      }
    }
    this.spxClassToggleDidLoad.emit({ target: 'document' });
  }
  /** Add classes. */
  addClasses() {
    this.classesArray.forEach((item) => {
      (this.target
        ? document.querySelectorAll(this.target)
        : this.el.querySelectorAll('*')).forEach((itemInner) => {
        if (itemInner.classList.contains(item)) {
          itemInner.classList.remove(item);
        }
        else {
          itemInner.classList.add(item);
        }
      });
    });
  }
  async reload() {
    this.componentDidLoad();
  }
  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });
    return (h(Host, { onClick: this.toggleClasses, class: styleHost }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "toggle": ["toggleChanged"]
  }; }
};

export { SpxClassToggle as spx_class_toggle };
