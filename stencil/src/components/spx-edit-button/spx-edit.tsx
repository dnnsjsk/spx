import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  State,
  Watch,
  Listen,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/cssVariables/setVar';

const tag = 'spx-edit';

@Component({
  tag: 'spx-edit',
})
export class SpxEdit {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditElement;

  @State() originalText: string;

  @State() subfieldArray;

  @Prop({ reflect: true }) display: string = 'inline';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) outline: string = '2px solid red';

  @Prop({ reflect: true }) outlineFocus: string = 'blue';

  @Prop({ reflect: true }) placeholder: string = 'Enter some text here.';

  @Prop({ reflect: true }) placeholderColor: string = 'inherit';

  @Prop({ reflect: true }) placeholderOpacity: string = '0.7';

  @Prop({ reflect: true }) subfield: boolean;

  @Prop({ reflect: true }) type: string;

  /** Watch editable state. */
  @Prop({ reflect: true }) editable: boolean;

  @Watch('editable')
  watchEditable() {
    if (this.editable) {
      this.el.setAttribute('contenteditable', 'true');
    } else {
      this.el.removeAttribute('contenteditable');
    }
  }

  /**
   * Prevent enter key.
   *
   * @param e
   */
  @Listen('keydown')
  onClickEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  /** Discard changes. */
  @Listen('spxEditButtonDiscard', { target: 'document' })
  onClickDiscard() {
    this.el.parentElement.innerHTML = this.originalText;
    this.editable = false;
  }

  /** Save changes. */
  @Listen('spxEditButtonSave', { target: 'document' })
  onClickSave() {
    this.editable = false;
  }

  /** Sets the new body string correctly on key press. */
  @Listen('keyup')
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

  private typeText = (src) => {
    /**
     * Update body string with a special identifier. Is used to distinguish
     * between content types in the AJAX call.
     */
    this.el.setAttribute(
      'body-string',
      '&' +
        this.name +
        '=' +
        src +
        'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqn' +
        (this.subfield ? 'parent' + this.type : this.type)
    );
  };

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

    return (
      <Host class={styleHost}>
        <slot />
      </Host>
    );
  }
}
