// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import { setFontSize } from '../../utils/setSize'
import * as c from '../../constants/style'
import { merge } from 'lodash-es'
import state from '../../stores/container'

const tag = 'spx-text'

/**
 * This component styles text coming from a markdown file or a rich-text editor appropriately.
 * It will eventually be 100% compatible with the Gutenberg editor as well.
 */

@Component({
  tag: 'spx-text'
})

export class SpxText {
    @Element() el: HTMLSpxTextElement;

    @Prop({ reflect: true }) contentFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) headingColor: string = 'var(--spx-color-black)'

    @Prop({ reflect: true }) headingFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) headingFontWeight: string = '500'

    @Prop({ reflect: true }) headingLetterSpacing: string = '0'

    @Prop({ reflect: true }) headingLineHeight: string = '1.5'

    @Prop({ reflect: true }) headingTextTransform: string = 'default'

    @Prop({ reflect: true }) maxWidth: string = 'clamp(700px, 40vw, 1200px)'

    @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-700)'

    @Prop({ reflect: true }) textFontFamily: string = state.fontFamilySecondary

    @Prop({ reflect: true }) textFontWeight: string = '400'

    @Prop({ reflect: true }) textLetterSpacing: string = '0'

    @Prop({ reflect: true }) textLineHeight: string = '1.5'

    @Prop({ reflect: true }) textTextTransform: string = 'default'

    render () {
      const styleHost = css(merge({
        display: 'block',
        maxWidth: setVar(tag, 'max-width', this.maxWidth, true),
        margin: '0 auto',

        '& > * + *': {
          marginTop: 'var(--spx-space-md)'
        },

        'h1, h2, h3, h4, h5, h6': {
          color: setVar(tag, 'heading-color', this.headingColor),
          fontFamily: setVar(tag, 'heading-font-family', this.headingFontFamily),
          fontWeight: setVar(tag, 'heading-font-weight', this.headingFontWeight),
          letterSpacing: setVar(tag, 'heading-letter-spacing', this.headingLetterSpacing),
          lineHeight: setVar(tag, 'heading-letter-spacing', this.headingLineHeight),
          textTransform: setVar(tag, 'heading-text-transform', this.headingTextTransform)
        },

        h1: {
          fontSize: setFontSize(tag, 'heading', '26px', '5vw', '48px', this.contentFontSizeMultiplier),
          textDecoration: 'underline',
          textDecorationColor: 'var(--spx-color-primary-A700)'
        },

        h2: {
          fontSize: setFontSize(tag, 'heading', '22px', '1.6vw', '32px', this.contentFontSizeMultiplier)
        },

        h3: {
          fontSize: setFontSize(tag, 'heading', '20px', '1.2vw', '28px', this.contentFontSizeMultiplier)
        },

        'p, ul, ol': {
          ...c.text(tag, 'text', this.textColor, '16px', '1.4vw', '24px', this.contentFontSizeMultiplier, this.textFontWeight, this.textLetterSpacing, this.textLineHeight, this.textTextTransform),
          fontFamily: setVar(tag, 'text-font-family', this.textFontFamily),

          a: {
            color: 'var(--spx-color-gray-900)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--spx-color-primary-A700)'
          }
        },

        'ul, ol': {
          marginLeft: '1em'
        },

        ul: {
          listStyleType: 'disc',
          listStylePosition: 'outside'
        },

        ol: {
          listStyleType: 'lower-roman',
          listStylePosition: 'inside'
        }
      }, {}))

      return <Host class={styleHost}>
      </Host>
    }
}
