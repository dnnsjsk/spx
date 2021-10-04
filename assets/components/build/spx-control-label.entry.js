import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';

const spxControlLabelCss = ":host{display:block}.inner{display:flex}span{font-family:inter, sans-serif;color:var(--spx-color-gray-700);text-transform:uppercase;font-size:0.75rem;font-weight:500;display:inline-block}:host([mb]) span{margin-bottom:0.375rem}";

const SpxControlGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "inner" }, h("span", null, this.label)));
  }
  get el() { return getElement(this); }
};
SpxControlGroup.style = spxControlLabelCss;

export { SpxControlGroup as spx_control_label };
