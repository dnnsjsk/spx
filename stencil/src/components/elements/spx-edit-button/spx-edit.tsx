import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Listen,
  Watch,
} from '@stencil/core';
import { setProperty } from '../../../utils/dom/setProperty';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';

const tag = 'spx-edit';

@Component({
  tag: 'spx-edit',
  styleUrl: 'spx-edit.scss',
  shadow: true,
})
export class SpxEdit {
  private container: HTMLElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditElement;

  @State() originalText: string;
  @State() subfieldArray;

  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) editable: boolean;

  @Prop({ reflect: true }) name: string;

  /** @css */
  @Prop({ reflect: true }) outline: string = '2px solid red';

  /** @css */
  @Prop({ reflect: true }) outlineFocus: string = 'blue';

  @Prop({ reflect: true }) placeholder: string = 'Enter some text here.';

  /** @css */
  @Prop({ reflect: true }) placeholderColor: string = 'inherit';

  /** @css */
  @Prop({ reflect: true }) placeholderOpacity: string = '0.7';

  @Prop({ reflect: true }) subfield: boolean;

  @Prop() text: string;

  @Prop({ reflect: true }) type: string = 'acf';

  @Watch('outline')
  @Watch('outlineFocus')
  @Watch('placeholderColor')
  @Watch('placeholderOpacity')
  // @ts-ignore
  watchAttributes(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  @Listen('keydown')
  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  @Listen('spxEditButtonDiscard', { target: 'document' })
  onClickDiscard() {
    this.el.parentElement.innerHTML = this.originalText;
    this.el.remove();
  }

  @Listen('spxEditButtonSave', { target: 'document' })
  onClickSave() {
    this.el.parentElement.innerHTML = this.text;
    this.el.remove();
  }

  @Listen('keyup')
  onClickKeyup() {
    this.text = this.container.innerText;
    this.typeText(this.container.innerText);
  }

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      attributes: [
        'outline',
        'outlineFocus',
        'placeholderColor',
        'placeholderOpacity',
      ],
    });
    this.originalText = this.text;
    this.typeText(this.text);
  }

  private typeText = (src) => {
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
    return (
      <div
        class="inner"
        ref={(el) => (this.container = el as HTMLElement)}
        contenteditable={this.editable}
        data-placeholder={this.placeholder}
        innerHTML={this.text}
      />
    );
  }
}
