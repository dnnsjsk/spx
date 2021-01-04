import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
} from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import * as s from '../../constants/style';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import Clipboard from 'clipboard';

const tag = 'spx-code';

/**
 * Highlight a block of code similar to a code editor.
 */

@Component({
  tag: 'spx-code',
  styleUrls: {
    default: 'spx-code-default.scss',
    dracula: 'spx-code-dracula.scss',
  },
})
export class SpxCode {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxCodeElement;
  private clipboardButton: HTMLElement;

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  @Prop({ reflect: true }) borderRadius: string = s.borderRadius;

  /** Enable clipboard button. */

  @Prop({ reflect: true }) clipboard: boolean = true;

  @Prop({ reflect: true }) clipboardButtonBackground: string =
    'var(--spx-color-gray-800)';

  @Prop({ reflect: true }) clipboardButtonColor: string =
    'var(--spx-color-gray-400)';

  @Prop({ reflect: true }) clipboardButtonFontSize: string = '12px';

  @Prop({ reflect: true }) clipboardButtonFontWeight: any = 600;

  @Prop({ reflect: true }) clipboardButtonPadding: string = '6px 12px';

  @Prop({ reflect: true }) clipboardButtonTextTransform: string = 'uppercase';

  @Prop({ reflect: true }) display: string = 'block';

  @Prop({ reflect: true }) fontSize: string = 'clamp(12px, 1.6vw, 16px)';

  @Prop({ reflect: true }) height: string = 'auto';

  /** Hide scrollbar. */

  @Prop({ reflect: true }) hideScrollbar: boolean;

  /** Enable line numbers. */

  @Prop({ reflect: true }) lineNumbers: boolean = true;

  @Prop({ reflect: true }) lineNumbersBackground: string =
    'var(--spx-color-gray-800)';

  @Prop({ reflect: true }) lineNumbersColor: string =
    'var(--spx-color-gray-400)';

  @Prop({ reflect: true }) maxWidth: string = '100%';

  @Prop({ reflect: true }) overflow: string = 'auto';

  @Prop({ reflect: true }) padding: string = 'clamp(20px, 2.4vw, 40px)';

  /**
   * Colour theme.
   * @choice 'default', 'dracula'
   */

  @Prop({ reflect: true }) theme: string = 'default';

  /**
   * Determines the programming language.
   * @choice 'markup', 'css', 'php'
   * @editor 'css'
   */

  @Prop({ reflect: true }) type: string = 'markup';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxCodeDidLoad' })
  spxCodeDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /** Highlight code. */

    Prism.highlightAll();
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
    });

    /** Setup clipboard button. */

    if (this.clipboard) {
      // eslint-disable-next-line no-new
      new Clipboard(this.clipboardButton);
    }

    this.spxCodeDidLoad.emit({ target: 'document' });
  }

  private onClickClipboard = () => {
    /** Copy the code to the data-attribute and change button text.. */

    this.clipboardButton.setAttribute(
      'data-clipboard-text',
      this.el.querySelector('pre').innerText
    );

    this.clipboardButton.innerText = 'Copied!';

    setTimeout(() => {
      this.clipboardButton.innerText = 'Copy';
    }, 5000);
  };

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      position: 'relative',
      display: setVar(tag, 'display', this.display),
      fontSize: setVar(tag, 'font-size', this.fontSize),
      borderRadius: setVar(tag, 'border-radius', this.borderRadius),
      maxWidth: setVar(tag, 'max-width', this.maxWidth),

      '*': {
        fontSize: setVar(tag, 'font-size', this.fontSize),
      },

      'pre, code': {
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
      },

      pre: {
        overflow: setVar(tag, 'overflow', this.overflow),
        background: setVar(tag, 'background', this.background),
        padding: setVar(tag, 'padding', this.padding),
        height: setVar(tag, 'height', this.height),
        msOverflowStyle: this.hideScrollbar ? 'none' : 'auto',
        scrollbarWidth: this.hideScrollbar ? 'none' : 'auto',
        '::-webkit-scrollbar': {
          display: this.hideScrollbar && 'none',
        },

        '.line-numbers-rows': {
          top: 'calc(' + setVar(tag, 'padding', this.padding) + ' * -1 - 2px)',
          paddingTop: setVar(tag, 'padding', this.padding),
          height: 'calc(' + setVar(tag, 'padding', this.padding) + ' + 100%)',
          background: setVar(
            tag,
            'line-numbers-background',
            this.lineNumbersBackground
          ),

          '& > span:before': {
            color: setVar(tag, 'line-numbers-color', this.lineNumbersColor),
          },

          '&:before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            left: 0,
            width: '100%',
            height: 'calc(100% + 4px)',
            zIndex: -1,
            background: setVar(
              tag,
              'line-numbers-background',
              this.lineNumbersBackground
            ),
          },
        },
      },
    });

    /** Clipboard styles. */

    const styleClipboard = css({
      position: 'absolute',
      border: 'none',
      right: 0,
      top: 0,
      cursor: 'pointer',
      textTransform: setVar(
        tag,
        'clipboard-button-text-transform',
        this.clipboardButtonTextTransform
      ) as 'uppercase',
      background: setVar(
        tag,
        'clipboard-button-background',
        this.clipboardButtonBackground
      ),
      color: setVar(tag, 'clipboard-button-color', this.clipboardButtonColor),
      padding: setVar(
        tag,
        'clipboard-button-padding',
        this.clipboardButtonPadding
      ),
      fontSize: setVar(
        tag,
        'clipboard-button-font-size',
        this.clipboardButtonFontSize
      ),
      fontWeight: setVar(
        tag,
        'clipboard-button-font-weight',
        this.clipboardButtonFontWeight
      ) as 'normal',
      borderBottomLeftRadius: setVar(tag, 'border-radius', this.borderRadius),
      borderTopRightRadius: setVar(tag, 'border-radius', this.borderRadius),
    });

    return (
      <Host class={styleHost}>
        {/** Code. */}

        <pre class={this.lineNumbers && 'line-numbers'}>
          <code class={'language-' + this.type}>
            <slot />
          </code>
        </pre>

        {/** Clipboard. */}

        {this.clipboard && (
          <button
            ref={(el) => (this.clipboardButton = el as HTMLElement)}
            class={styleClipboard}
            onClick={this.onClickClipboard}
          >
            Copy
          </button>
        )}
      </Host>
    );
  }
}
