import { r as registerInstance, h, j as Host, g as getElement } from './index-a2b24666.js';
import { s as state, a as selectTemplate } from './editor-b5c7d395.js';
import { a as find } from './lodash-e2947591.js';
import { B as Button } from './Button-059c3d4b.js';
import './index-ef033006.js';

/**
 * Get color from CSS variable or just use string instead.
 *
 * @param {string} string String to check.
 * @returns {string} Color string.
 */
function getValue(string = '') {
  if (string.startsWith('var(--')) {
    return getComputedStyle(document.body)
      .getPropertyValue(string.slice(4, -1))
      .trim();
  }
  else {
    return string.trim();
  }
}

const spxEditorControlsCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block}:host:focus,*:focus{outline:none}.top{border-left:1px solid var(--spx-color-gray-200);border-bottom:1px solid var(--spx-color-gray-200);height:var(--spx-editor-header-height)}.top button{display:flex;text-align:center;font-weight:500;align-items:center;justify-content:center;position:relative;height:100%;width:100%;font-size:0.875rem;transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}.top button:hover{color:var(--spx-color-gray-700);background:var(--spx-color-gray-100)}.top button:focus{outline:none}.top button:focus-visible{outline:none;box-shadow:var(--spx-focus)}.controls{border-left:1px solid var(--spx-color-gray-200);overflow-x:hidden;overflow-y:auto;padding:1.5rem}";

const SpxEditorControls = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onInput = (e) => {
      const id = e.target.getRootNode().host.id
        ? e.target.getRootNode().host.id
        : e.target.getRootNode().host.getRootNode().host.id;
      state.activeControlObject = Object.assign(Object.assign({}, state.activeControlObject), {
        [id]: Object.assign(Object.assign({}, state.activeControlObject[id]), {
          default: e.target.checked ? 'true' : e.target.value,
        }),
      });
      const content = document
        .querySelector('spx-editor')
        .shadowRoot.querySelector('spx-editor-container')
        .shadowRoot.querySelector('spx-editor-content')
        .shadowRoot.querySelector('#content');
      const value = e.target.value === 'on' ? e.target.checked : e.target.value;
      let el;
      if (content.querySelector(':scope > spx-tailwind')) {
        el = content
          .querySelector('spx-tailwind')
          .shadowRoot.querySelector(state.activeComponent);
      }
      else {
        el = content.querySelector(state.activeComponent);
      }
      const data = JSON.parse(e.target.getAttribute('data-set'));
      if ((data.type === 'number' && value) || data.type !== 'number') {
        el.setAttribute(data.attribute, String(value));
      }
    };
    this.getControls = (component) => {
      return Object.values(component).map((item) => {
        const id = item.attribute;
        const select = find(item.tags, function (o) {
          return o.name === 'choice';
        });
        const label = item.attribute.replaceAll('-', ' ').toUpperCase();
        const inputData = `{"attribute": "${item.attribute}", "type": "${item.type}"}`;
        return (((state.activeControls.length >= 1 &&
          state.activeControls.includes(item.attribute) &&
          state.modeSelected) ||
          (state.activeControls.length === 0 && state.modeSelected) ||
          !state.modeSelected) && (h("div", null, item.type === 'string' && select ? (h("spx-control-select", { data: inputData, id: id, handleInput: this.onInput, label: label, options: select === null || select === void 0 ? void 0 : select.text.replaceAll("', '", ','), value: getValue(item.default) })) : item.type === 'string' &&
          !item.attribute.includes('color') &&
          !item.attribute.includes('background') ? (h("spx-control-input", { data: inputData, id: id, handleInput: this.onInput, label: label, value: getValue(item.default) })) : item.type === 'number' || item.type === 'any' ? (h("spx-control-number", { data: inputData, id: id, handleInput: this.onInput, label: label,
          // @ts-ignore
          value: item.default, start: item.default && item.default !== 'natural' ? item.default : 0,
          // @ts-ignore
          min: 0,
          // @ts-ignore
          max: 100, step: 0.1 })) : item.type === 'boolean' ? (h("spx-control-switch", { data: inputData, id: id, handleInput: this.onInput, label: label, checked: item.default === 'true' })) : ((item.attribute.includes('color') ||
          item.attribute.includes('background')) && (h("spx-control-color", { data: inputData, id: id, value: getValue(item.default), label: label, handleInput: this.onInput }))))));
      });
    };
  }
  componentDidLoad() {
    selectTemplate();
  }
  render() {
    return (h(Host, null, h("div", { class: "top" }, h(Button, { style: {
        color: state.activeControls.length === 0
          ? 'var(--spx-color-gray-400)'
          : 'var(--spx-color-gray-500)',
        pointerEvents: state.activeControls.length === 0 ? 'none' : 'auto',
      }, onClick: SpxEditorControls.switchSelected }, state.activeControls.length === 0
      ? 'All Attributes Shown'
      : !state.modeSelected
        ? 'Show Selected Attributes'
        : 'Show All Attributes')), h("div", { tabindex: "-1", style: {
        height: `calc(${state.height} - var(--spx-editor-header-height) ${state.showControls ? ' - var(--spx-editor-header-height)' : ''}
          `,
      }, class: "controls" }, h("spx-control-group", { tabindex: "-1", style: { outline: 'none' } }, this.getControls(state.activeControlObject)))));
  }
  get el() { return getElement(this); }
};
SpxEditorControls.switchSelected = () => {
  state.modeSelected = !state.modeSelected;
};
SpxEditorControls.style = spxEditorControlsCss;

export { SpxEditorControls as spx_editor_controls };
