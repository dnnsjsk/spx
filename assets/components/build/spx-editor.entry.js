import { r as registerInstance, h, j as Host, g as getElement } from './index-a2b24666.js';
import { s as state } from './editor-b5c7d395.js';
import './index-ef033006.js';

const spxEditorCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block;width:100%}.loader{width:100%;height:100%;display:flex;justify-content:center;align-items:center}";

const SpxEditor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    if (this.height) {
      state.height = this.height;
    }
  }
  componentDidLoad() {
    this.loaded = true;
  }
  render() {
    return (h(Host, { style: { maxHeight: state.height } }, !this.loaded && (h("div", { class: "loader" }, h("spx-icon", { type: "loader", size: "2rem" }))), h("spx-editor-container", { style: { visibility: this.loaded ? '' : 'hidden' } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
SpxEditor.style = spxEditorCss;

export { SpxEditor as spx_editor };
