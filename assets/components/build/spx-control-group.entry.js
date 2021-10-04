import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';

const spxControlGroupCss = ":host{display:block}.inner{display:grid;grid-gap:2rem}";

const SpxControlGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "inner" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
SpxControlGroup.style = spxControlGroupCss;

export { SpxControlGroup as spx_control_group };
