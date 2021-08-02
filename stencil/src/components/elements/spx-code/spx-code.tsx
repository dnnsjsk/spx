import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
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
import * as s from '../../../constants/style';
import { css as cssHost } from '@emotion/css';
import { merge } from 'lodash-es';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import Clipboard from 'clipboard';
import { intersectionObserver } from '../../../utils/observer/intersectionObserver';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { sanitize } from '../../../utils/3rd/sanitize';
import { Button } from '../../../elements/button';

const tag = 'spx-code';

/**
 * Highlight a block of code similar to a code editor.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-code',
  shadow: true,
})
export class SpxCode {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxCodeElement;
  private clipboardButton: HTMLElement;

  @State() contentInner;
  @State() text;

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  @Prop({ reflect: true }) borderRadius: string = s.borderRadius;

  /** Enable clipboard button. */
  @Prop({ reflect: true }) clipboard: boolean = true;

  @Prop({ reflect: true }) clipboardButtonBackground: string =
    'var(--spx-color-gray-800)';

  @Prop({ reflect: true }) clipboardButtonColor: string =
    'var(--spx-color-gray-400)';

  @Prop({ reflect: true }) clipboardButtonFontSize: string = '12px';

  @Prop({ reflect: true }) clipboardButtonFontWeight: any = '600';

  @Prop({ reflect: true }) clipboardButtonPadding: string = '6px 12px';

  @Prop({ reflect: true }) clipboardButtonText: string = 'Copy';

  @Prop({ reflect: true }) clipboardButtonTextCopied: string = 'Copied!';

  @Prop({ reflect: true }) clipboardButtonTextTransform: string = 'uppercase';

  /** Can be used instead of the inner slot. */
  @Prop({ reflect: true }) content: string;

  @Prop({ reflect: true }) display: string = s.display;

  @Prop({ reflect: true }) filter: string;

  @Prop({ reflect: true }) fontSize: string = 'clamp(12px, 1.6vw, 16px)';

  @Prop({ reflect: true }) height: string = 'auto';

  /** Load component when it enters the viewport. */
  @Prop({ reflect: true }) lazy: boolean;

  /** Enable line numbers. */
  @Prop({ reflect: true }) lineNumbers: boolean = true;

  @Prop({ reflect: true }) lineNumbersBackground: string =
    'var(--spx-color-gray-800)';

  @Prop({ reflect: true }) lineNumbersColor: string =
    'var(--spx-color-gray-400)';

  /** Start of line number. */
  @Prop({ reflect: true }) lineNumbersStart: number;

  @Prop({ reflect: true }) maxWidth: string = '100%';

  @Prop({ reflect: true }) overflow: string = 'auto';

  @Prop({ reflect: true }) padding: string = 'clamp(20px, 2.4vw, 40px)';

  /** Hide scrollbar. */
  @Prop({ reflect: true }) scrollbar: boolean = true;

  /**
   * Colour theme.
   *
   * @choice 'default', 'dracula'
   */
  @Prop({ reflect: true }) theme: string = 'default';

  /**
   * Determines the programming language.
   *
   * @choice 'markup', 'css', 'js', 'php', 'twig', 'json'
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

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxCodeDidLoad' })
  spxCodeDidLoad: EventEmitter;

  @Watch('content')
  toggleUpdate() {
    this.highlightCode();
  }

  componentWillLoad() {
    /** Highlight code. */
    if (this.lazy) {
      intersectionObserver(this.el, this.highlightCode);
    } else {
      this.highlightCode();
    }
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el, cb: this.highlightCode });

    /** Setup clipboard button. */
    if (this.clipboard) {
      // eslint-disable-next-line no-new
      new Clipboard(this.clipboardButton);
    }

    this.spxCodeDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private onClickClipboard = () => {
    /** Copy the code to the data-attribute and change button text. */
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
      )}`.replaceAll(',', '');
  };

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost = {
      position: 'relative',
      borderRadius: setVar(tag, 'border-radius', this.borderRadius),
      maxWidth: setVar(tag, 'max-width', this.maxWidth),

      'pre, code': {
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
        padding: '0',
        margin: '0',
        display: 'block',
        position: 'relative',
        fontFamily: "Consolas, Monaco, 'Andale Mono', monospace !important",
      },

      pre: {
        overflow: setVar(tag, 'overflow', this.overflow),
        background: setVar(tag, 'background', this.background) + '!important',
        padding: setVar(tag, 'padding', this.padding),
        msOverflowStyle: !this.scrollbar ? 'none' : 'auto',
        scrollbarWidth: !this.scrollbar ? 'none' : 'auto',
        '::-webkit-scrollbar': {
          display: !this.scrollbar && 'none',
        },
        color: '#a9b7c6',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        lineHeight: '1.5',
        tabSize: '4',
        hyphens: 'none',
        display: 'flex',

        '&:before': {
          minWidth: setVar(tag, 'padding', this.padding),
          height: '100%',
        },
      },

      code: {
        filter: setVar(tag, 'filter', this.filter),

        '*': {
          fontSize: setVar(tag, 'font-size', this.fontSize),
        },
      },

      '.line-numbers': {
        paddingLeft: '5.2em',
        counterReset: this.lineNumbersStart
          ? `linenumber ${this.lineNumbersStart - 1}`
          : 'linenumber',
      },

      '.line-numbers-rows': {
        top: 'calc(' + setVar(tag, 'padding', this.padding) + ' * -1)',
        paddingTop: setVar(tag, 'padding', this.padding),
        height: 'calc(' + setVar(tag, 'padding', this.padding) + ' + 100%)',
        background: setVar(
          tag,
          'line-numbers-background',
          this.lineNumbersBackground
        ),
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: '100%',
        left: '-5.2em',
        zIndex: 0,
        width: '3.5em',
        letterSpacing: '-1px',
        userSelect: 'none',

        '& > span': {
          display: 'block',
          counterIncrement: 'linenumber',
          zIndex: 0,

          '&:before': {
            content: 'counter(linenumber)',
            display: 'block',
            paddingRight: '1.2em',
            textAlign: 'right',
            color: setVar(tag, 'line-numbers-color', this.lineNumbersColor),
          },
        },
      },
    };

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
      ) as any,
      borderBottomLeftRadius: setVar(tag, 'border-radius', this.borderRadius),
      borderTopRightRadius: setVar(tag, 'border-radius', this.borderRadius),
      transitionProperty: 'box-shadow',
      transitionDuration: s.transitionDuration,
      transitionTimingFunction: s.transitionTimingFunction,

      ...s.focus,
    });

    /** Theme: Default. */
    const styleThemeDefault = {
      '.token.comment, token.prolog, .token.cdata': { color: '#808080' },
      '.token.delimiter, .token.boolean, .token.keyword, .token.selector, .token.important, .token.atrule':
        {
          color: '#cc7832',
        },
      '.token.operator, .token.punctuation, .token.attr-name': {
        color: '#a9b7c6',
      },
      '.token.tag, .token.tag .punctuation, .token.doctype, .token.builtin': {
        color: '#e8bf6a',
      },
      '.token.entity, .token.number, .token.symbol': { color: '#6897bb' },
      '.token.property, .token.constant, .token.variable': {
        color: '#9876aa',
      },
      '.token.string, .token.char': { color: '#6a8759' },
      '.token.attr-value, .token.attr-value .punctuation': {
        color: '#a5c261',
      },
      '.token.attr-value .punctuation:first-child': { color: '#a9b7c6' },
      '.token.url': { color: '#287bde', textDecoration: 'underline' },
      '.token.function': { color: '#ffc66d' },
      '.token.regex': { background: '#364135' },
      '.token.bold': { fontWeight: 'bold' },
      '.token.italic': { fontStyle: 'italic' },
      '.token.inserted': { background: '#294436' },
      '.token.deleted': { background: '#484a4a' },
      'code.language-css .token.property, code.language-css .token.property + .token.punctuation':
        {
          color: '#a9b7c6',
        },
      'code.language-css .token.id': { color: '#ffc66d' },
      'code.language-css .token.selector > .token.class, code.language-css .token.selector > .token.attribute, code.language-css .token.selector > .token.pseudo-class, code.language-css .token.selector > .token.pseudo-element':
        {
          color: '#ffc66d',
        },
    };

    /** Theme: Dracula. */
    const styleThemeDracula = {
      '.language-css': { color: '#bd93f9' },
      '.token': { color: '#ff79c6' },
      '.language-css .token': { color: '#ff79c6' },
      '.token.script': { color: '#f8f8f2' },
      '.token.bold': { fontWeight: 'bold' },
      '.token.italic': { fontStyle: 'italic' },
      '.token.atrule, .token.attr-name, .token.attr-value': {
        color: '#50fa7b',
      },
      '.language-css .token.atrule': { color: '#bd93f9' },
      '.language-html .token.attr-value, .language-markup .token.attr-value': {
        color: '#f1fa8c',
      },
      '.token.boolean': { color: '#bd93f9' },
      '.token.builtin, .token.class-name': { color: '#8be9fd' },
      '.token.comment': { color: '#6272a4' },
      '.token.constant': { color: '#bd93f9' },
      '.language-javascript .token.constant': {
        color: '#ffb86c',
        fontStyle: 'italic',
      },
      '.token.entity': { color: '#ff79c6' },
      '.language-css .token.entity': { color: '#50fa7b' },
      '.language-html .token.entity.named-entity': { color: '#bd93f9' },
      '.language-html .token.entity:not(.named-entity)': { color: '#ff79c6' },
      '.language-markup .token.entity.named-entity': { color: '#bd93f9' },
      '.language-markup .token.entity:not(.named-entity)': { color: '#ff79c6' },
      '.token.function': { color: '#50fa7b' },
      '.language-css .token.function': { color: '#8be9fd' },
      '.token.important, .token.keyword': { color: '#ff79c6' },
      '.token.prolog': { color: '#f8f8f2' },
      '.token.property': { color: '#ffb86c' },
      '.language-css .token.property': { color: '#8be9fd' },
      '.token.punctuation': { color: '#ff79c6' },
      '.language-css .token.punctuation': { color: '#ffb86c' },
      '.language-html .token.punctuation, .language-markup .token.punctuation':
        {
          color: '#f8f8f2',
        },
      '.token.selector': { color: '#ff79c6' },
      '.language-css .token.selector': { color: '#50fa7b' },
      '.token.regex': { color: '#ff5555' },
      '.language-css .token.rule:not(.atrule)': { color: '#f8f8f2' },
      '.token.string': { color: '#f1fa8c' },
      '.token.tag': { color: '#ff79c6' },
      '.token.url': { color: '#8be9fd' },
      '.language-css .token.url': { color: '#ffb86c' },
      '.token.variable': { color: '#6272a4' },
      '.token.number': { color: 'rgba(189, 147, 249, 1)' },
      '.token.operator': { color: 'rgba(139, 233, 253, 1)' },
      '.token.char': { color: 'rgba(255, 135, 157, 1)' },
      '.token.symbol': { color: 'rgba(255, 184, 108, 1)' },
      '.token.deleted': { color: '#e2777a' },
      '.token.namespace': { color: '#e2777a' },
    };

    /** Merged object. */
    const styleMergedObject = css(
      merge(
        styleShadowHost,
        this.theme === 'dracula' ? styleThemeDracula : styleThemeDefault
      )
    );

    return (
      <Host class={styleHost}>
        <div class={styleMergedObject}>
          {/** Code. */}
          <pre tabindex="-1" class={this.lineNumbers && 'line-numbers'}>
            <code
              tabindex="-1"
              class={'language-' + this.type}
              innerHTML={sanitize(this.contentInner)}
            />
          </pre>

          {/** Clipboard. */}
          {this.clipboard && (
            <Button
              tag="button"
              ref={(el) => (this.clipboardButton = el as HTMLElement)}
              class={styleClipboard}
              onClick={this.onClickClipboard}
              onEnter={this.onClickClipboard}
            >
              {this.clipboardButtonText}
            </Button>
          )}
        </div>
      </Host>
    );
  }
}
