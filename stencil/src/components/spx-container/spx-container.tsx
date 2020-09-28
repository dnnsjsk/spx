// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, Watch, Listen } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import { merge } from 'lodash-es'
import * as c from '../../constants/style'
import * as s from '../../constants/container'
import { setFontSize } from '../../utils/setSize'
import state from '../../stores/container'
import { offsetHeader } from '../../utils/offsetHeader'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-container'

/**
 * The container element is a special component, as it isn't outputting any visible markup.
 * Rather, it's purpose is to provide global styles for section and page components.
 * It does not affect single components and won't ever will.
 */

@Component({
  tag: 'spx-container',
  styleUrl: 'spx-container.scss'
})

export class SpxContainer {
    @Element() el: HTMLSpxContainerElement

    /** Mobile breakpoint width. */

    @Prop({ reflect: true }) bpMobile: number = s.bpMobileWidth

    @Prop({ reflect: true }) buttonBorderRadius: string = c.borderRadius

    @Prop({ reflect: true }) buttonFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) buttonFontWeight: string = 'bold'

    @Prop({ reflect: true }) buttonMarginX: string = 'var(--spx-space-sm)'

    @Prop({ reflect: true }) buttonMarginTop: string = 'var(--spx-space-lg)'

    /**
     * Reverse color of buttons.
     * @choice 'all', 'primary', 'secondary'
     */

    @Prop({ reflect: true }) buttonReverseColor: string = s.buttonReverseColor

    @Prop({ reflect: true }) buttonTextTransform: string = 'uppercase'

    /**
     * Primary color which will be used for sections and pages.
     * @choice 'red', 'pink', 'purple', 'deep purple', 'indigo', 'blue', 'light blue', 'cyan', 'teal', 'green', 'light green', 'lime', 'yellow', 'amber', 'orange', 'deep orange', 'brown'
     */

    @Prop({ reflect: true }) colorPrimary: string = s.colorPrimary

    /**
     * Secondary color which will be used for sections and pages.
     * @choice 'red', 'pink', 'purple', 'deep purple', 'indigo', 'blue', 'light blue', 'cyan', 'teal', 'green', 'light green', 'lime', 'yellow', 'amber', 'orange', 'deep orange', 'brown'
     */

    @Prop({ reflect: true }) colorSecondary: string = s.colorSecondary

    /** Primary font-family. */

    @Prop({ reflect: true }) fontFamilyPrimary: string = s.fontFamilyPrimary

    /** Secondary font-family. */

    @Prop({ reflect: true }) fontFamilySecondary: string = s.fontFamilySecondary

    @Prop({ reflect: true }) imageMaxWidth: string = 'none'

    /** Section max-width on mobile. */

    @Prop({ reflect: true }) maxWidth: string = '500px'

    /** Offsets first section to the height of the header. */

    @Prop({ reflect: true }) offsetHeader: boolean

    @Prop({ reflect: true }) preTitleBackground: string = 'none'

    @Prop({ reflect: true }) preTitleBorderRadius: string = 'none'

    @Prop({ reflect: true }) preTitleColor: string = 'var(--spx-color-black)'

    @Prop({ reflect: true }) preTitleFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) preTitleFontWeight: string = '400'

    @Prop({ reflect: true }) preTitleLetterSpacing: string = '0'

    @Prop({ reflect: true }) preTitleLineHeight: string = '1.6'

    @Prop({ reflect: true }) preTitleMarginBottom: string = 'var(--spx-space-md)'

    @Prop({ reflect: true }) preTitlePadding: string = '0'

    @Prop({ reflect: true }) preTitleTextTransform: string = 'default'

    /**
     * Space between content and outer edge of the viewport.
     * @CSS
     */

    @Prop({ reflect: true }) spaceX: string = s.spaceX

    /**
     * Space between content and outer edge of the viewport.
     * @CSS
     */

    @Prop({ reflect: true }) spaceXSm: string = s.spaceXSm

    /**
     * Space between the sections.
     * @CSS
     */

    @Prop({ reflect: true }) spaceY: string = 'var(--spx-space-3xl)'

    /**
     * Space base for space-scale.
     * @CSS
     */

    @Prop({ reflect: true }) spacing: string = 'clamp(0.8em, 1vw, 1em)'

    /**
     * Margin between tab items.
     * @CSS
     */

    @Prop({ reflect: true }) tabsMarginBetween: string = 'var(--spx-space-sm)'

    /**
     * Top margin for first tab item.
     * @CSS
     */

    @Prop({ reflect: true }) tabsMarginFirst: string = 'var(--spx-space-md)'

    /**
     * Tabs opacity.
     * @CSS
     */

    @Prop({ reflect: true }) tabsOpacity: number = 0.5

    @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-600)'

    @Prop({ reflect: true }) textFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) textFontWeight: string = '400'

    @Prop({ reflect: true }) textLetterSpacing: string = '0'

    @Prop({ reflect: true }) textLineHeight: string = '1.6'

    @Prop({ reflect: true }) textMarginTop: string = 'var(--spx-space-sm)'

    @Prop({ reflect: true }) textMaxWidth: string = '800px'

    @Prop({ reflect: true }) textTransform: string = 'default'

    @Prop({ reflect: true }) titleColor: string = 'var(--spx-color-black)'

    @Prop({ reflect: true }) titleFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) titleFontWeight: number = 500

    @Prop({ reflect: true }) titleLetterSpacing: string = '0'

    @Prop({ reflect: true }) titleLineHeight: string = '1.25'

    @Prop({ reflect: true }) titleMaxWidth: string = 'max-content'

    @Prop({ reflect: true }) titleTextTransform: string = 'default'

    @Watch('bpMobile')
    bpMobileChanged () {
      state.bpMobileWidth = this.bpMobile
    }

    @Watch('buttonReverseColor')
    buttonReverseColorChanged () {
      state.buttonReverseColor = this.buttonReverseColor
    }

    @Watch('colorSecondary')
    @Watch('colorPrimary')
    colorChanged () {
      state.colorPrimary = this.colorPrimary
      state.colorSecondary = this.colorSecondary
    }

    @Watch('fontFamilySecondary')
    @Watch('fontFamilyPrimary')
    fontChanged () {
      state.fontFamilyPrimary = this.fontFamilyPrimary
      state.fontFamilySecondary = this.fontFamilySecondary
    }

    @Watch('maxWidth')
    maxWidthChanged () {
      state.bpMaxWidth = this.maxWidth
    }

    @Watch('spaceXSm')
    @Watch('spaceX')
    spaceChanged () {
      state.spaceX = this.spaceX
      state.spaceXsm = this.spaceXSm
    }

    @Listen('resize', { target: 'window' })
    onResize () {
      if (this.offsetHeader) {
        offsetHeader(this.el.querySelector(':scope spx-section-header + *'), 'spx-section-header')
      }
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      /** Apply margin if more than one button. */

      this.el.querySelectorAll('spx-section-button').forEach(item => {
        if (item.nextElementSibling && item.nextElementSibling.tagName === 'SPX-SECTION-BUTTON') {
          const style = css({
            marginLeft: setVar(tag, 'button-margin-x', this.buttonMarginX),
            marginRight: setVar(tag, 'button-margin-x', this.buttonMarginX)
          })

          item.classList.add(style)
          item.nextElementSibling.classList.add(style)
        }
      })
    }

    componentDidRender () {
      this.onResize()
    }

    render () {
      /** Style base. */

      const styleBase = {
        ...s.spaceScale(setVar('spx', 'space-unit', this.spacing)),
        display: 'flex',
        flexDirection: 'column',
        height: this.el.querySelector('spx-page-docs') && '100vh',

        '& > spx-section-text-media, & > spx-section-footer > div > div': {
          paddingTop: setVar(tag, 'space-y', this.spaceY),
          paddingBottom: setVar(tag, 'space-y', this.spaceY)
        },

        '& > spx-section-text-media:not([full]):not([media-full]) > div, & > spx-section-footer > div > div': {
          width: '100%',
          maxWidth: state.bpMobile && setVar(tag, 'max-width', this.maxWidth),
          marginLeft: state.bpMobile && 'auto',
          marginRight: state.bpMobile && 'auto'
        },

        '& > spx-section-text-media:not([full]):not([media-full]), & > spx-section-footer > div': {
          paddingLeft: setVar(tag, 'space-x', this.spaceX),
          paddingRight: setVar(tag, 'space-x', this.spaceX)
        },

        '& > spx-section-text-media[media-full-mobile-fix] > div': {
          paddingLeft: state.bpMobile && setVar(tag, 'space-x', this.spaceX),
          paddingRight: state.bpMobile && setVar(tag, 'space-x', this.spaceX)
        },

        '& > *[background]:not(spx-section-header)': {
          marginTop: setVar(tag, 'padding-between', this.spaceY),

          '& + [background]': {
            marginTop: 0
          },

          '& + *:not([background])': {
            marginTop: setVar(tag, 'padding-between', this.spaceY)
          }
        },

        'spx-section-button': {
          marginTop: setVar(tag, 'button-margin-top', this.buttonMarginTop)
        },

        'spx-section-button a': {
          borderRadius: setVar(tag, 'button-border-radius', this.buttonBorderRadius),
          padding: setVar(tag, 'button-padding', 'clamp(0.8em, 3.2vw, 0.95em) clamp(1em, 4vw, 1.4em)'),
          fontSize: setFontSize(tag, 'button', '16px', '1.3vw', '24px', this.buttonFontSizeMultiplier),
          fontFamily: setVar(tag, 'button-font-family', state.fontFamilySecondary),
          fontWeight: setVar(tag, 'button-font-weight', this.buttonFontWeight),
          textTransform: setVar(tag, 'button-text-transform', this.buttonTextTransform)
        },

        'spx-section-text-media': {
          '*': {
            fontFamily: setVar(tag, 'font-family', state.fontFamilyPrimary)
          },

          '&:first-of-type': {
            paddingTop: setVar(tag, 'space-y', 'calc(' + this.spaceY + ' / 2)')
          },

          '&:first-of-type[first]': {
            paddingTop: 'calc(' + setVar(tag, 'space-y', this.spaceY) + ' / 2 + var(--spx-offset))'
          },

          img: {
            width: '100%',
            maxWidth: setVar(tag, 'image-max-width', this.imageMaxWidth)
          },

          '& > div > div': {
            '[slot="pre-title"]:not(.spx)': {
              ...c.text(tag, 'pre-title', this.preTitleColor, '16px', '1.8vw', '24px', this.preTitleFontSizeMultiplier, this.preTitleFontWeight, this.preTitleLetterSpacing, this.preTitleLineHeight, this.preTitleTextTransform),
              background: setVar(tag, 'pre-title-background', this.preTitleBackground),
              padding: setVar(tag, 'pre-title-padding', this.preTitlePadding),
              borderRadius: setVar(tag, 'pre-title-border-radius', this.preTitleBorderRadius),
              marginBottom: setVar(tag, 'pre-title-margin-bottom', this.preTitleMarginBottom),
              fontFamily: setVar(tag, 'pre-title-font-family', state.fontFamilySecondary)
            },

            'h1:not(.spx), h1 span:not(.spx), h2:not(.spx), h2 span:not(.spx)': {
              ...c.text(tag, 'title', this.titleColor, '32px', '5vw', '80px', this.titleFontSizeMultiplier, this.titleFontWeight, this.titleLetterSpacing, this.titleLineHeight, this.titleTextTransform),
              display: 'inline-block',
              maxWidth: setVar(tag, 'title-max-width', this.titleMaxWidth),
              fontFamily: setVar(tag, 'title-font-family', state.fontFamilyPrimary)
            },

            'p:not(.spx), [data-spx-tabs-header]:not(.spx)': {
              ...c.text(tag, 'text', this.textColor, '18px', '2vw', '32px', this.textFontSizeMultiplier, this.textFontWeight, this.textLetterSpacing, this.textLineHeight, this.textTransform),
              background: 'none',
              maxWidth: setVar(tag, 'text-max-width', this.textMaxWidth),
              marginTop: setVar(tag, 'text-margin-top', this.textMarginTop),
              fontFamily: setVar(tag, 'text-font-family', state.fontFamilySecondary)
            }
          },

          '&[type="tabs"]': {
            '& > div:first-of-type': {
              ...s.spaceScale(setVar(tag, 'space-unit', 'clamp(0.8em, 1.4vw, 2em)'))
            },

            '[data-spx-tabs-header]': {
              maxWidth: 'max-content',
              opacity: setVar(tag, 'tabs-opacity', this.tabsOpacity),
              padding: 0,
              fontFamily: setVar(tag, 'tabs-font-family', state.fontFamilySecondary),

              '&[open]': {
                opacity: 1
              },

              '&:first-of-type': {
                marginTop: setVar(tag, 'tabs-margin-first', this.tabsMarginFirst)
              },

              '& + [data-spx-tabs-header]': {
                marginTop: setVar(tag, 'tabs-margin-between', this.tabsMarginBetween)
              }
            }
          }
        }
      }

      /** Merge objects to avoid emotion error. */

      const styleMerge = css(merge(styleBase, {}))

      return <Host class={styleMerge}>
      </Host>
    }
}
