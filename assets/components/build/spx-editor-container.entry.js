import { r as registerInstance, h, j as Host, g as getElement } from './index-a2b24666.js';
import { s as state } from './editor-b5c7d395.js';
import './index-ef033006.js';

const spxEditorContainerCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block;height:100%}.inner{display:grid;background:#ffffff;grid-template-columns:minmax(0, 1fr)}@media (min-width: 1024px){.inner{grid-template-columns:250px minmax(0, 1fr) 270px}}.header-content{height:100%;grid-row-start:1}@media (min-width: 1024px){spx-editor-components,spx-editor-content,spx-editor-controls{display:block !important}.header-content{grid-row-start:unset}}";

const SpxEditorContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() { }
  render() {
    return (h(Host, { style: { maxHeight: state.height } }, h("div", { style: {
        position: state.modeFullscreen ? 'fixed' : 'static',
        top: state.modeFullscreen && '0',
        left: state.modeFullscreen && '0',
        width: state.modeFullscreen ? '100vw' : '100%',
        height: state.modeFullscreen ? 'var(--vh)' : '100%',
        zIndex: state.modeFullscreen ? '999999999999' : '0',
      }, class: "inner" }, h("spx-editor-components", { style: { display: state.showComponents ? 'block' : 'none' } }, h("slot", null)), h("div", { class: "header-content" }, h("spx-editor-header", null), h("spx-editor-content", { style: { display: state.showContent ? 'block' : 'none' } })), h("spx-editor-controls", { style: { display: state.showControls ? 'block' : 'none' } }))));
  }
  get el() { return getElement(this); }
};
SpxEditorContainer.style = spxEditorContainerCss;

export { SpxEditorContainer as spx_editor_container };
