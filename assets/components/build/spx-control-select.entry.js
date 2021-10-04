import { r as registerInstance, h, j as Host, g as getElement } from './index-a2b24666.js';

const spxControlSelectCss = ":host{display:block}select{font-family:inter, sans-serif;border:1px solid var(--spx-color-gray-200);padding:0.375rem 0.5rem;color:var(--spx-color-gray-900);font-size:16px;width:100%;border-radius:0.375rem;height:34px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\");background-position:right 0.25rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;appearance:none;-webkit-appearance:none}@media (min-width: 1024px){select{font-size:0.875rem}}";

const SpxControlSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.delimiter = ',';
    this.onInput = (e) => {
      this.handleInput && this.handleInput(e);
      this.value = e.target.value;
    };
  }
  render() {
    return (h(Host, null, this.label && h("spx-control-label", { label: this.label, mb: true }), h("select", { "data-set": this.data, onInput: this.onInput }, this.options &&
      this.options.split(this.delimiter).map((item) => {
        return h("option", { selected: this.value === item }, item);
      }))));
  }
  get el() { return getElement(this); }
};
SpxControlSelect.style = spxControlSelectCss;

export { SpxControlSelect as spx_control_select };
