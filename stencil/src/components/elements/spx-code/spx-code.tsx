import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-twig.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import Clipboard from 'clipboard';
import { intersectionObserver } from '../../../utils/observer/intersectionObserver';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { sanitize } from '../../../utils/3rd/sanitize';
import { Button } from '../../../elements/Button';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-code';

/**
 * Highlight a block of code similar to a code editor.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-code',
  styleUrl: 'spx-code.scss',
  shadow: true,
})
export class SpxCode {
  private clipboardButton: HTMLElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxCodeElement;

  @State() contentInner;
  @State() text;

  /** @css */
  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  /** @css */
  @Prop({ reflect: true }) borderRadius: string = 'var(--spx-border-radius)';

  /** Enable clipboard button. */
  @Prop({ reflect: true }) clipboard: boolean = true;

  /** @css */
  @Prop({ reflect: true }) clipboardButtonBackground: string =
    'var(--spx-color-gray-800)';

  /** @css */
  @Prop({ reflect: true }) clipboardButtonColor: string =
    'var(--spx-color-gray-400)';

  /** @css */
  @Prop({ reflect: true }) clipboardButtonFontSize: string = '12px';

  /** @css */
  @Prop({ reflect: true }) clipboardButtonFontWeight: any = '600';

  /** @css */
  @Prop({ reflect: true }) clipboardButtonPadding: string = '6px 12px';

  @Prop({ reflect: true }) clipboardButtonText: string = 'Copy';

  @Prop({ reflect: true }) clipboardButtonTextCopied: string = 'Copied!';

  /** @css */
  @Prop({ reflect: true }) clipboardButtonTextTransform: string = 'uppercase';

  /** Can be used instead of the inner slot. */
  @Prop({ reflect: true }) content: string;

  /** @css */
  @Prop({ reflect: true }) filter: string;

  /** @css */
  @Prop({ reflect: true }) fontSize: string = 'clamp(12px, 1.6vw, 16px)';

  /** Show scrollbar. */
  @Prop({ reflect: true }) hideScrollbar: boolean = false;

  /** Load component when it enters the viewport. */
  @Prop({ reflect: true }) lazy: boolean;

  /** Highlight lines. */
  @Prop({ reflect: true }) lineHighlight: string;

  /** Enable line numbers. */
  @Prop({ reflect: true }) lineNumbers: boolean = true;

  /** @css */
  @Prop({ reflect: true }) lineNumbersBackground: string =
    'var(--spx-color-gray-800)';

  /** @css */
  @Prop({ reflect: true }) lineNumbersColor: string =
    'var(--spx-color-gray-400)';

  /** Start of line number. */
  @Prop({ reflect: true }) lineNumbersStart: number = 1;

  /** @css */
  @Prop({ reflect: true }) maxWidth: string = '100%';

  /** @css */
  @Prop({ reflect: true }) padding: string = 'clamp(20px, 2.4vw, 40px)';

  /**
   * Colour theme.
   *
   * @choice default, dracula
   */
  @Prop({ reflect: true }) theme: string = 'default';

  /**
   * Determines the programming language.
   *
   * @choice markup, css, js, php, twig, json
   */
  @Prop({ reflect: true }) type: string = 'markup';

  /** Removes all whitespace from the top of the code block. */
  @Prop({ reflect: true }) whitespaceLeftTrim: boolean = true;

  /** If the whole code block is indented too much it removes the extra indent. */
  @Prop({ reflect: true }) whitespaceRemoveIndent: boolean = true;

  /** Removes trailing whitespace on all lines. */
  @Prop({ reflect: true }) whitespaceRemoveTrailing: boolean = true;

  /** Removes all whitespace from the bottom of the code block. */
  @Prop({ reflect: true }) whitespaceRightTrim: boolean = true;

  @Watch('content')
  toggleUpdate() {
    this.highlightCode();
  }

  @Watch('background')
  @Watch('borderRadius')
  @Watch('clipboardButtonColor')
  @Watch('clipboardButtonFontSize')
  @Watch('clipboardButtonFontWeight')
  @Watch('clipboardButtonPadding')
  @Watch('clipboardButtonTextTransform')
  @Watch('filter')
  @Watch('fontSize')
  @Watch('lineNumbersBackground')
  @Watch('lineNumbersColor')
  @Watch('lineNumbersStart')
  @Watch('maxWidth')
  @Watch('padding')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxCodeDidLoad' })
  spxCodeDidLoad: EventEmitter;

  componentWillLoad() {
    if (this.lazy) {
      intersectionObserver(this.el, this.highlightCode);
    } else {
      this.highlightCode();
    }
  }

  componentDidLoad() {
    if (this.clipboard) {
      // eslint-disable-next-line no-new
      new Clipboard(this.clipboardButton);
    }

    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'background',
        'borderRadius',
        'clipboardButtonColor',
        'clipboardButtonFontSize',
        'clipboardButtonFontWeight',
        'clipboardButtonPadding',
        'clipboardButtonTextTransform',
        'filter',
        'fontSize',
        'lineNumbersBackground',
        'lineNumbersColor',
        'lineNumbersStart',
        'maxWidth',
        'overflow',
        'padding',
      ],
      cb: this.highlightCode,
      mutations: {
        characterData: true,
        subtree: true,
      },
    });
    this.spxCodeDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private onClickClipboard = () => {
    this.clipboardButton.setAttribute('data-clipboard-text', this.text);
    this.clipboardButton.innerText = this.clipboardButtonTextCopied;

    setTimeout(() => {
      this.clipboardButton.innerText = this.clipboardButtonText;
    }, 5000);
  };

  private highlightCode = () => {
    const nw = Prism.plugins.NormalizeWhitespace;
    let content = this.content ?? this.el.textContent;

    content = nw.normalize(content, {
      'remove-trailing': this.whitespaceRemoveTrailing,
      'remove-indent': this.whitespaceRemoveIndent,
      'left-trim': this.whitespaceLeftTrim,
      'right-trim': this.whitespaceRightTrim,
    });

    this.text = content;
    this.contentInner = Prism.highlight(
      content,
      Prism.languages[this.type],
      this.type
    );

    const length = (this.contentInner.match(/\n/g) || '').length + 1;

    this.contentInner +=
      `<span aria-hidden="true" class="line-numbers-rows">${Array.from(
        { length: length },
        () => '<span></span>'
      )}`.replace(/,/g, '');
  };

  render() {
    return (
      <div class="inner">
        <pre
          data-line={this.lineHighlight}
          tabindex="-1"
          class={this.lineNumbers && 'line-numbers'}
        >
          <code
            tabindex="-1"
            class={'language-' + this.type}
            innerHTML={sanitize(this.contentInner)}
          />
        </pre>

        {this.clipboard && (
          <Button
            as="button"
            class="clipboard"
            ref={(el) => (this.clipboardButton = el as HTMLElement)}
            onClick={this.onClickClipboard}
            onEnter={this.onClickClipboard}
          >
            {this.clipboardButtonText}
          </Button>
        )}
      </div>
    );
  }
}
