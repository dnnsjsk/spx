import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';
import { s as state } from './editor-b5c7d395.js';
import './index-ef033006.js';

const spxEditorContentCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block}.inner{background:var(--spx-color-gray-50);display:flex;justify-content:center;align-items:center;max-width:100%;width:100%}.wrap{display:flex;flex-direction:column;height:100%;width:100%;overflow-y:auto;overflow-x:hidden}#content{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;width:100%;padding:2rem 1rem 1rem 1rem}@media (min-width: 1024px){#content{padding:2rem}}spx-code{width:100%;height:100%;overflow:auto}spx-iframe,spx-image-comparison,spx-masonry{width:100%}spx-iframe,spx-masonry{height:100%}";

const SpxEditorContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { style: {
        height: `calc(${state.height} - var(--spx-editor-header-height))`,
      }, class: "inner" }, state.modeCode ? (h("spx-code", { "font-size": "14px", "border-radius": "0", filter: "saturate(2)" }, state.activeCode)) : (h("div", { class: "wrap" }, h("div", { style: {
        height: state.activeComponent === 'spx-iframe' ? '100%' : 'auto',
      }, id: "content", innerHTML: state.activeCode })))));
  }
  get el() { return getElement(this); }
};
SpxEditorContent.style = spxEditorContentCss;

export { SpxEditorContent as spx_editor_content };
