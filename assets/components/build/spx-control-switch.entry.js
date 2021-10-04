import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';

const spxControlSwitchCss = ":host{display:block}label{display:flex;align-items:center;cursor:pointer;position:relative;transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}label:focus{outline:none}label:focus-visible{outline:none;box-shadow:var(--spx-focus-ring)}label .toggle:checked~.dot{transform:translateX(28px)}label .toggle:checked+div{background:#0f172a}.wrap{position:relative;margin-right:0.875rem}.toggle{display:none}.dot{position:absolute;left:0.25rem;top:0.25rem;background:#ffffff;width:0.75rem;height:0.75rem;border-radius:9999px;transition-timing-function:var(--spx-transition-timing-function);transition-duration:var(--spx-transition-duration)}.dot-bg{diplay:block;background:var(--spx-color-gray-300);width:3rem;height:1.25rem;border-radius:9999px;transition-timing-function:var(--spx-transition-timing-function);transition-duration:var(--spx-transition-duration)}";

const SpxControlSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onInput = (e) => {
      this.handleInput && this.handleInput(e);
      this.checked = e.target.checked;
    };
  }
  render() {
    return (h("label", null, h("div", { class: "wrap" }, h("input", { "data-set": this.data, type: "checkbox", class: "toggle", onInput: this.onInput, checked: this.checked }), h("div", { tabindex: "0", class: "dot-bg" }), h("div", { class: "dot" })), h("spx-control-label", { label: this.label })));
  }
  get el() { return getElement(this); }
};
SpxControlSwitch.style = spxControlSwitchCss;

export { SpxControlSwitch as spx_control_switch };
