import { r as registerInstance, h, g as getElement } from './index-a2b24666.js';
import { s as state } from './editor-b5c7d395.js';
import { t as titleCase } from './titleCase-a1380a62.js';
import { B as Button } from './Button-059c3d4b.js';
import './index-ef033006.js';

const spxEditorHeaderCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block}.inner{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--spx-color-gray-200);padding-left:1rem;width:100%;height:var(--spx-editor-header-height)}.buttons{display:flex;height:100%}button{display:flex;justify-content:center;align-items:center;position:relative;width:3rem;height:100%;color:var(--spx-color-gray-500);transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}button:focus{outline:none}button:focus-visible{outline:none;box-shadow:var(--spx-focus)}button:hover{color:var(--spx-color-gray-700);background:var(--spx-color-gray-100)}@media (min-width: 1024px){button.is-desktop{display:none}}span{position:absolute;height:2px;width:100%;background:var(--spx-color-gray-700);bottom:-1px}h1{font-weight:600;font-size:1rem}";

const SpxEditorHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a;
    return (h("div", { class: "inner" }, h("h1", null, (_a = titleCase(state.activeComponent.replace('spx-', '').replaceAll('-', ' '))) !== null && _a !== void 0 ? _a : 'No component active'), h("div", { class: "buttons" }, [
      {
        icon: 'code-slash-outline',
        function: () => (state.modeCode = !state.modeCode),
        active: state.modeCode,
      },
      {
        icon: 'expand-outline',
        function: () => {
          state.modeFullscreen = !state.modeFullscreen;
          window.dispatchEvent(new Event('resize'));
        },
        active: state.modeFullscreen,
      },
      {
        icon: 'list-outline',
        function: () => (state.showComponents = !state.showComponents),
        active: state.showComponents,
      },
      {
        icon: 'layers-outline',
        function: () => (state.showControls = !state.showControls),
        active: state.showControls,
      },
    ].map((item) => {
      return (h(Button, { class: item.icon === 'list-outline' || item.icon === 'layers-outline'
          ? 'is-desktop'
          : '', onClick: item.function }, item.active && h("span", null), h("spx-icon", { icon: item.icon })));
    }))));
  }
  get el() { return getElement(this); }
};
SpxEditorHeader.style = spxEditorHeaderCss;

export { SpxEditorHeader as spx_editor_header };
