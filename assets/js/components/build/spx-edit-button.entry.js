import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { s as setVarOrClamp, a as setClamp } from './setVarOrClamp-21aa6296.js';
import { c as borderRadius, b as fontFamily, f as fontSize, p as position } from './style-54a0be1c.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

const tag = 'spx-edit-button';
const SpxEditButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxEditButtonDidLoad = createEvent(this, "spxEditButtonDidLoad", 7);
    this.spxEditButtonDiscard = createEvent(this, "spxEditButtonDiscard", 7);
    this.spxEditButtonSave = createEvent(this, "spxEditButtonSave", 7);
    this.loading = false;
    this.open = false;
    this.test = false;
    this.background = 'var(--spx-color-gray-900)';
    /**
     * Discard button background.
     * @CSS
     */
    this.backgroundDiscard = 'var(--spx-color-gray-600)';
    this.border = 'none';
    this.borderRadius = borderRadius;
    this.color = '#ffffff';
    /**
     * Discard button color.
     * @CSS
     */
    this.colorDiscard = '#ffffff';
    /**
     * Distance to the edge of the viewport on the x-axis.
     * @CSS
     */
    this.distanceX = '1em';
    /**
     * Distance to the edge of the viewport on the y-axis.
     * @CSS
     */
    this.distanceY = '1em';
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
    this.fontSizeMin = 1;
    this.fontSizeMax = 1.2;
    /**
     * Gap between the buttons.
     * @CSS
     */
    this.gap = '0.4em';
    this.padding = '0.8em 1.2em';
    this.paddingXMin = 1;
    this.paddingXMax = 1.4;
    this.paddingYMin = 0.7;
    this.paddingYMax = 1.2;
    /**
     * Component position in page.
     * @choice 'bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-right'
     */
    this.position = 'bottom-right';
    /**
     * CSS property position of button.
     * @editor 'absolute'
     */
    this.positionCss = 'fixed';
    /**
     * Styling.
     * @choice 'default', 'fluid', 'headless'
     */
    this.styling = 'default';
    /** Discard button text. */
    this.textDiscard = 'Discard';
    /** Edit button text. */
    this.textEdit = 'Edit site';
    /** Save button text. */
    this.textSave = 'Save';
    /** Success message. */
    this.textSuccess = 'Save was successful';
    this.zIndex = 99;
    this.clickEdit = () => {
      this.open = true;
      /** Generate edit components around text. */
      const elements = this.editId
        ? document.querySelectorAll('[data-spx-edit][data-spx-edit-id=' + this.editId + ']')
        : document.querySelectorAll('[data-spx-edit]');
      elements.forEach((item) => {
        const edit = document.createElement('spx-edit');
        const field = item.getAttribute('data-spx-edit');
        const type = item.getAttribute('data-spx-edit-type');
        const subfield = item.hasAttribute('data-spx-edit-subfield');
        const text = item.innerHTML;
        if (field) {
          edit.setAttribute('name', field);
        }
        if (type) {
          edit.setAttribute('type', type);
        }
        if (subfield) {
          edit.setAttribute('subfield', '');
        }
        edit.innerHTML = text;
        edit.setAttribute('editable', '');
        item.innerHTML = '';
        item.appendChild(edit);
      });
    };
    this.clickDiscard = () => {
      /** Close buttons again. */
      this.open = false;
      /** Emit closing event to document. */
      this.spxEditButtonDiscard.emit({ target: 'document' });
    };
    this.clickSave = () => {
      this.loading = true;
      /** Emit save event to document. */
      const getBodyString = () => {
        /** Create the body string to be sent off to the AJAX call. */
        const string = Math.random().toString(36).substr(2, 9);
        const bodyStringArray = [];
        const elements = document.querySelectorAll('spx-edit');
        elements.forEach((item) => {
          const withoutAmpersand = item
            .getAttribute('body-string')
            .replace('&', '')
            .replace('=', string);
          const encoded = encodeURIComponent(withoutAmpersand);
          const final = '&' + encoded;
          bodyStringArray.push(final.replace(string, '='));
        });
        return bodyStringArray.toString().replace(/,&/g, '&');
      };
      const afterSuccess = () => {
        /** Insert snackbar. */
        const snackbar = document.createElement('spx-snackbar');
        snackbar.setAttribute('text', this.textSuccess);
        document.body.appendChild(snackbar);
        /** Remove edit components. */
        const elements = document.querySelectorAll('spx-edit');
        elements.forEach((item) => {
          item.parentElement.innerHTML = item.innerHTML;
        });
        /** Save changes event. */
        this.spxEditButtonSave.emit({ target: 'document' });
        /** Remove loader and close on success. */
        this.open = false;
        this.loading = false;
      };
      if (!this.test) {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        fetch(spx.ajax, {
          method: 'POST',
          credentials: 'same-origin',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: 'action=spxEditButtonAjaxHandler' +
            getBodyString() +
            '' +
            '&post_id=' +
            // @ts-ignore
            // eslint-disable-next-line no-undef
            spx.postId +
            '',
        }).then((response) => {
          if (response.status === 200) {
            afterSuccess();
          }
          else if (response.status === 500) {
            /** Remove loader on fail. */
            this.loading = false;
          }
        });
      }
      else {
        afterSuccess();
      }
    };
  }
  positionChanged() {
    this.createPositionArray();
  }
  componentWillLoad() {
    this.createPositionArray();
  }
  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.spxEditButtonDidLoad.emit({ target: 'document' });
  }
  createPositionArray() {
    this.positionArray = this.position.split('-');
  }
  /** Discard changes. */
  async discard() {
    this.clickDiscard();
  }
  /** Enable editing. */
  async edit() {
    this.clickEdit();
  }
  async reload() {
    this.componentWillLoad();
  }
  /** Save changes. */
  async save() {
    this.clickSave();
  }
  render() {
    /** Host styles. */
    const styleHost = (this.styling === 'default' || this.styling === 'fluid') &&
      css(Object.assign(Object.assign({}, position('edit-button', this.positionArray, this.distanceX, this.distanceY)), { fontFamily: fontFamily, fontSize: setVarOrClamp(tag, 'font-size', this.fontSize, this.fontSizeMin, this.fontSizeMax, this.styling), display: 'grid', gridGap: setVar(tag, 'gap', this.gap), position: this.positionCss, zIndex: this.zIndex }));
    /** Button styles. */
    const styleButton = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        fontFamily: setVar(tag, 'font-family', this.fontFamily),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1em',
        padding: this.styling === 'default' &&
          setVar(tag, 'padding', this.padding),
        paddingLeft: this.styling === 'fluid' &&
          setClamp(tag, 'padding-x', this.paddingXMin, this.paddingXMax),
        paddingRight: this.styling === 'fluid' &&
          setClamp(tag, 'padding-x', this.paddingXMin, this.paddingXMax),
        paddingTop: this.styling === 'fluid' &&
          setClamp(tag, 'padding-x', this.paddingYMin, this.paddingYMax),
        paddingBottom: this.styling === 'fluid' &&
          setClamp(tag, 'padding-x', this.paddingYMin, this.paddingYMax),
        color: setVar(tag, 'color', this.color),
        background: setVar(tag, 'background', this.background),
        border: setVar(tag, 'border', this.border),
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
      })
      : this.classButton;
    /** Discard button styles. */
    const styleButtonDiscard = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        color: setVar(tag, 'color-discard', this.colorDiscard),
        background: setVar(tag, 'background-discard', this.backgroundDiscard),
      })
      : this.classButtonDiscard;
    /** Loader styles. */
    const styleLoader = this.styling === 'default' || this.styling === 'fluid'
      ? css({
        paddingRight: '0.25em',
      })
      : this.classLoader;
    return (h(Host, { class: styleHost }, !this.open ? (
    /** Edit button. */
    h("button", { onClick: this.clickEdit, class: styleButton }, this.textEdit || h("slot", { name: "edit" }))) : (
    /** Discard button. */
    [
      h("button", { onClick: this.clickDiscard, class: css([styleButton, styleButtonDiscard]) }, this.textDiscard || h("slot", { name: "discard" })),
      /** Save button. */
      h("button", { onClick: this.clickSave, class: styleButton }, this.loading && h("spx-loader", { class: styleLoader }), this.textSave || h("slot", { name: "save" })),
    ])));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "position": ["positionChanged"]
  }; }
};

export { SpxEditButton as spx_edit_button };
