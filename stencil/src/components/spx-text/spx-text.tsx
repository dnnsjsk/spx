// eslint-disable-next-line no-unused-vars
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
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

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h1-font-size-min' }) h1FontSizeMin: number = 1.6;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h1-font-size-max' }) h1FontSizeMax: number = 3.2;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h2-font-size-min' }) h2FontSizeMin: number = 1.4;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h2-font-size-max' }) h2FontSizeMax: number = 2.2;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h3-font-size-min' }) h3FontSizeMin: number = 1.2;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h3-font-size-max' }) h3FontSizeMax: number = 1.8;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h4-font-size-min' }) h4FontSizeMin: number = 1;

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'h4-font-size-max' }) h4FontSizeMax: number = 1.6;

  @Prop({ reflect: true }) headingColor: string = 'var(--spx-color-black)';

  @Prop({ reflect: true }) headingFontFamily: string = state.fontFamilyPrimary;

  @Prop({ reflect: true }) headingFontWeight: string = '500';

  @Prop({ reflect: true }) headingLetterSpacing: string = '0';

  @Prop({ reflect: true }) headingLineHeight: string = '1.5';

  @Prop({ reflect: true }) headingTextTransform: string = 'default';

  @Prop({ reflect: true }) linkDecorationColor: string =
    'var(--spx-color-primary-600)';

  /** Parse markdown. */

  @Prop({ reflect: true }) markdown: boolean = false;

  @Prop({ reflect: true }) maxWidth: string = '768px';

  @Prop({ reflect: true }) paddingFigureMin: number = 0.9;

  @Prop({ reflect: true }) paddingFigureMax: number = 3;

  @Prop({ reflect: true }) spaceBeforeH1Min: number = 4;

  @Prop({ reflect: true }) spaceBeforeH1Max: number = 8;

  @Prop({ reflect: true }) spaceBetweenMin: number = 0.9;

  @Prop({ reflect: true }) spaceBetweenMax: number = 2;

  @Prop({ reflect: true }) spaceBetweenPMin: number = 0.9;

  @Prop({ reflect: true }) spaceBetweenPMax: number = 1.5;

  @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-700)';

  @Prop({ reflect: true }) textFontFamily: string = state.fontFamilySecondary;

  @Prop({ reflect: true }) textFontSizeMin: number = 1;

  @Prop({ reflect: true }) textFontSizeMax: number = 1.4;

  @Prop({ reflect: true }) textFontWeight: string = '400';

  @Prop({ reflect: true }) textLetterSpacing: string = '0';

  @Prop({ reflect: true }) textLineHeight: string = '1.5';

  @Prop({ reflect: true }) textTextTransform: string = 'default';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTextDidLoad' })
  spxTextDidLoad: EventEmitter;

  componentDidLoad() {
    /** Parse Markdown. */

    if (this.markdown) {
      marked.setOptions({
        gfm: true,
      });
      this.el.innerHTML = marked(this.el.innerHTML);
    }

    /** Wrap images. */

    if (this.el.querySelector('img')) {
      const img = this.el.querySelectorAll('img, video');
      img.forEach((item) => {
        wrap(item, document.createElement('figure'));
      });
    }

    this.spxTextDidLoad.emit({ target: 'document' });
  }

  render() {
    /** Heading styles. */

    const styleHeading = {
      h1: {
        fontSize: setClamp(
          tag,
          'h1-font-size',
          this.h1FontSizeMin,
          this.h1FontSizeMax
        ),
      },
      h2: {
        fontSize: setClamp(
          tag,
          'h2-font-size',
          this.h2FontSizeMin,
          this.h2FontSizeMax
        ),
      },
      h3: {
        fontSize: setClamp(
          tag,
          'h3-font-size',
          this.h3FontSizeMin,
          this.h3FontSizeMax
        ),
      },
      h4: {
        fontSize: setClamp(
          tag,
          'h4-font-size',
          this.h4FontSizeMin,
          this.h4FontSizeMax
        ),
      },
    };

    /** Text styles. */

    const styleText = {
      fontSize: setClamp(
        tag,
        'text-font-size',
        this.textFontSizeMin,
        this.textFontSizeMax
      ),
      color: setVar(tag, 'text-color', this.textColor),
      fontFamily: setVar(tag, 'text-font-family', this.textFontFamily),
      fontWeight: setVar(tag, 'text-font-weight', this.textFontWeight),
      letterSpacing: setVar(tag, 'text-letter-spacing', this.textLetterSpacing),
      lineHeight: setVar(tag, 'text-letter-spacing', this.textLineHeight),
      textTransform: setVar(tag, 'text-text-transform', this.textTextTransform),
    };

    /** Host styles. */

    const styleHost = css(
      merge(
        {
          display: 'block',
          maxWidth: setVar(tag, 'max-width', this.maxWidth, true),
          margin: '0 auto',

          '& > * + *': {
            marginTop: setClamp(
              tag,
              'space-between',
              this.spaceBetweenMin,
              this.spaceBetweenMax
            ),
          },

          '& > p + p, & > ul + p, & > p + ul': {
            marginTop: setClamp(
              tag,
              'space-between-p',
              this.spaceBetweenPMin,
              this.spaceBetweenPMax
            ),
          },

          '& > * + h1': {
            marginTop: setClamp(
              tag,
              'h1-space',
              this.spaceBeforeH1Min,
              this.spaceBeforeH1Max
            ),
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
            ...styleText,
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
            padding: setClamp(
              tag,
              'figure-padding',
              this.paddingFigureMin,
              this.paddingFigureMax
            ),

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
        },
        styleHeading
      )
    );

    return (
      <Host class={styleHost}>
        <slot />
      </Host>
    );
  }
}
