import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';

const spxControlInputCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block}input{font-family:inter, sans-serif;border:1px solid var(--spx-color-gray-200);padding:0.375rem 0.5rem;border-radius:0.375rem;font-size:16px;width:100%;color:var(--spx-color-gray-900);height:34px;transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}input:focus{outline:none}input:focus-visible{outline:none;box-shadow:var(--spx-focus-ring)}@media (min-width: 1024px){input{font-size:0.875rem}}";

const SpxControlInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleInput = function () { };
    this.type = 'text';
    this.onInput = (e) => {
      this.handleInput && this.handleInput(e);
      this.value = e.target.value;
    };
  }
  render() {
    return (h("div", null, this.label && h("spx-control-label", { label: this.label, mb: true }), h("input", { "data-set": this.data, type: this.type, placeholder: this.placeholder, onInput: this.onInput, min: this.type === 'number' && this.min, max: this.type === 'number' && this.max, step: this.type === 'number' && this.step, value: this.value })));
  }
  get el() { return getElement(this); }
};
SpxControlInput.style = spxControlInputCss;

export { SpxControlInput as spx_control_input };
