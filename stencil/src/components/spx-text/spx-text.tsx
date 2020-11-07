// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { css } from 'emotion';
import { setVar } from '../../utils/setVar';
import { setFontSize } from '../../utils/setSize';
import * as s from '../../constants/style';
import { merge } from 'lodash-es';
import state from '../../stores/container';
import { wrap } from '../../utils/wrap';
import marked from 'marked/lib/marked.esm';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-text';

/**
 * This component styles text coming from a markdown file or a rich-text editor appropriately.
 * It will eventually be 100% compatible with the Gutenberg editor as well.
 */

@Component({
  tag: 'spx-text',
})
export class SpxText {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTextElement;

  /** Only works if text-type is set to 'multiply'. */

  @Prop({ reflect: true }) contentFontSizeMultiplier: number = 1;

  @Prop({ reflect: true }) headingColor: string = 'var(--spx-color-black)';

  @Prop({ reflect: true }) headingFontFamily: string = state.fontFamilyPrimary;

  @Prop({ reflect: true }) headingFontWeight: string = '500';

  @Prop({ reflect: true }) headingLetterSpacing: string = '0';

  @Prop({ reflect: true }) headingLineHeight: string = '1.5';

  @Prop({ reflect: true }) headingTextTransform: string = 'default';

  @Prop({ reflect: true }) linkDecorationColor: string =
    'var(--spx-color-primary-A700)';

  /** Parse markdown. */

  @Prop({ reflect: true }) markdown: boolean = false;

  @Prop({ reflect: true }) maxWidth: string = 'clamp(700px, 40vw, 1200px)';

  @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-700)';

  @Prop({ reflect: true }) textFontFamily: string = state.fontFamilySecondary;

  @Prop({ reflect: true }) textFontWeight: string = '400';

  @Prop({ reflect: true }) textLetterSpacing: string = '0';

  @Prop({ reflect: true }) textLineHeight: string = '1.5';

  /** Minimum viewport width when text-type is set to linear. */

  @Prop({ reflect: true }) textMinW: number = 320;

  /** Maximum viewport width when text-type is set to linear. */

  @Prop({ reflect: true }) textMaxW: number = 2560;

  @Prop({ reflect: true }) textTextTransform: string = 'default';

  @Prop({ reflect: true }) textType: string = 'linear';

  componentDidLoad() {
    if (this.markdown === true) {
      marked.setOptions({
        gfm: true,
      });
      this.el.innerHTML = marked(this.el.innerHTML);
    }

    if (this.el.querySelector('img')) {
      const img = this.el.querySelectorAll('img, video');
      img.forEach((item) => {
        wrap(item, document.createElement('figure'));
      });
    }
  }

  render() {
    /** Heading. */

    const headingMultiply = {
      h1: {
        fontSize: setFontSize(
          tag,
          'heading',
          '30px',
          '5vw',
          '48px',
          this.contentFontSizeMultiplier
        ),
      },

      h2: {
        fontSize: setFontSize(
          tag,
          'heading',
          '24px',
          '2.4vw',
          '36px',
          this.contentFontSizeMultiplier
        ),
      },

      h3: {
        fontSize: setFontSize(
          tag,
          'heading',
          '20px',
          '1.6vw',
          '28px',
          this.contentFontSizeMultiplier
        ),
      },

      h4: {
        fontSize: setFontSize(
          tag,
          'heading',
          '18px',
          '1.2vw',
          '24px',
          this.contentFontSizeMultiplier
        ),
      },
    };

    const headingLinear = {
      h1: {
        fontSize: setClamp(this.textMinW, this.textMaxW, 2, 4),
      },

      h2: {
        fontSize: setClamp(this.textMinW, this.textMaxW, 1.6, 2.8),
      },

      h3: {
        fontSize: setClamp(this.textMinW, this.textMaxW, 1.2, 1.8),
      },

      h4: {
        fontSize: setClamp(this.textMinW, this.textMaxW, 1, 1.6),
      },
    };

    const heading =
      this.textType === 'linear' ? headingLinear : headingMultiply;

    /** Text. */

    const textMultiply = {
      ...s.text(
        tag,
        'text',
        this.textColor,
        '16px',
        '1.4vw',
        '24px',
        this.contentFontSizeMultiplier,
        this.textFontWeight,
        this.textLetterSpacing,
        this.textLineHeight,
        this.textTextTransform
      ),
      fontFamily: setVar(tag, 'text-font-family', this.textFontFamily),
    };

    const textLinear = {
      fontSize: setClamp(this.textMinW, this.textMaxW, 0.9, 1.6),
      color: setVar(tag, 'text-color', this.textColor),
      fontFamily: setVar(tag, 'text-font-family', this.textFontFamily),
      fontWeight: setVar(tag, 'text-font-weight', this.textFontWeight),
      letterSpacing: setVar(tag, 'text-letter-spacing', this.textLetterSpacing),
      lineHeight: setVar(tag, 'text-letter-spacing', this.textLineHeight),
      textTransform: setVar(tag, 'text-text-transform', this.textTextTransform),
    };

    const text = this.textType === 'linear' ? textLinear : textMultiply;

    const styleHost = css(
      merge(
        {
          display: 'block',
          maxWidth: setVar(tag, 'max-width', this.maxWidth, true),
          margin: '0 auto',

          '& > * + *': {
            marginTop: 'var(--spx-space-md)',
          },

          'h1, h2, h3, h4, h5, h6': {
            color: setVar(tag, 'heading-color', this.headingColor),
            fontFamily: setVar(
              tag,
              'heading-font-family',
              this.headingFontFamily
            ),
            fontWeight: setVar(
              tag,
              'heading-font-weight',
              this.headingFontWeight
            ),
            letterSpacing: setVar(
              tag,
              'heading-letter-spacing',
              this.headingLetterSpacing
            ),
            lineHeight: setVar(
              tag,
              'heading-letter-spacing',
              this.headingLineHeight
            ),
            textTransform: setVar(
              tag,
              'heading-text-transform',
              this.headingTextTransform
            ),
          },

          'p, ul, ol': {
            ...text,
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textDecorationColor: setVar(
                tag,
                'link-decoration-color',
                this.linkDecorationColor
              ),
            },
          },

          'ul, ol': {
            marginLeft: '1em',
          },

          ul: {
            listStyleType: 'disc',
            listStylePosition: 'outside',
          },

          ol: {
            listStyleType: 'lower-roman',
            listStylePosition: 'inside',
          },

          figure: {
            borderRadius: s.borderRadius,
            background: 'var(--spx-color-gray-100)',
            padding: 'var(--spx-space-lg)',

            img: {
              marginLeft: 'auto',
              marginRight: 'auto',
              maxHeight: '400px',
              objectFit: 'contain',
            },
          },

          'img, video': {
            maxWidth: '100%',
          },

          'spx-code, spx-code + p': {
            marginTop: 'var(--spx-space-lg)',
          },
        },
        heading
      )
    );

    return (
      <Host class={styleHost}>
        <slot />
      </Host>
    );
  }
}
