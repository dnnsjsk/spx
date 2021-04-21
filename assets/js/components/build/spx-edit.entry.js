import { r as registerInstance, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';

const tag = 'spx-edit';
const SpxEdit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.display = 'inline';
    this.outline = '2px solid red';
    this.outlineFocus = 'blue';
    this.placeholder = 'Enter some text here.';
    this.placeholderColor = 'inherit';
    this.placeholderOpacity = '0.7';
  }
  watchEditable() {
    if (this.editable) {
      this.el.setAttribute('contenteditable', 'true');
    }
    else {
      this.el.removeAttribute('contenteditable');
    }
  }
  /** Prevent enter key. */
  onClickEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }
  /** Discard changes. */
  onClickDiscard() {
    this.el.parentElement.innerHTML = this.originalText;
    this.editable = false;
  }
  /** Save changes. */
  onClickSave() {
    this.editable = false;
  }
  /** Sets the new body string correctly on key press. */
  onClickKeyup() {
    this.typeText(this.el.innerText);
  }
  componentDidLoad() {
    this.watchEditable();
    /** Set inner text as state. */
    this.originalText = this.el.innerText;
    /** Set original body string. */
    this.typeText(this.originalText);
  }
  typeText(src) {
    /**
     * Update body string with a special identifier.
     * Is used to distinguish between content types in the AJAX call.
     */
    this.el.setAttribute('body-string', '&' +
      this.name +
      '=' +
      src +
      'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqn' +
      (this.subfield ? 'parent' + this.type : this.type));
  }
  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
      position: 'relative',
      '&[contenteditable]': {
        outline: this.outline,
        cursor: 'text',
        ':focus': {
          outlineColor: this.outlineFocus,
        },
        ':empty:before': {
          content: '"' + this.placeholder + ' "',
          color: this.placeholderColor,
          opacity: this.placeholderOpacity,
        },
      },
    });
    return (h(Host, { class: styleHost }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "editable": ["watchEditable"]
  }; }
};

export { SpxEdit as spx_edit };
