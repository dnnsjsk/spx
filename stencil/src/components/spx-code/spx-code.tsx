// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Method, Prop } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import * as c from '../../constants/style';
import { css } from 'emotion';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

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

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  @Prop({ reflect: true }) borderRadius: string = c.borderRadius;

  @Prop({ reflect: true }) fontSize: string = 'clamp(12px, 1.6vw, 16px)';

  @Prop({ reflect: true }) padding: string = 'var(--spx-space-lg)';

  /**
   * Colour theme.
   * @choice 'default', 'dracula'
   */

  @Prop({ reflect: true }) theme: string = 'default';

  /**
   * Determines the programming language.
   * @editor 'markup', 'css', 'php'
   */

  @Prop({ reflect: true }) type: string = 'markup';

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    Prism.highlightAll();
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
    });
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: 'block',
      fontSize: setVar(tag, 'font-size', this.fontSize),

      '*': {
        fontSize: setVar(tag, 'font-size', this.fontSize),
      },

      'pre, code': {
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
      },

      pre: {
        background: setVar(tag, 'background', this.background),
        padding: setVar(tag, 'padding', this.padding),
      },
    });

    return (
      <Host class={styleHost}>
        <pre>
          <code class={'language-' + this.type}>
            <slot />
          </code>
        </pre>
      </Host>
    );
  }
}
