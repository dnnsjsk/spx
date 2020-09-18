// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Method, Prop, State } from '@stencil/core'
import { css } from 'emotion'
import * as c from '../../constants/style'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-accordion'

/**
 * Accordions are the classic method to show and hide elements on your website.
 * @slot header - Header.
 * @slot content - Content.
 */

@Component({
  tag: 'spx-accordion'
})

export class SpxAccordion {
    @Element() el: HTMLSpxAccordionElement

    @State() contentCustom: boolean
    @State() headerCustom: boolean
    @State() open: boolean = false

    @Prop({ reflect: true }) contentColor: string = 'var(--spx-color-gray-900)'

    /** Content text. */

    @Prop({ reflect: true }) contentText: string = 'Default Content Text'

    /** Content text tag. */

    @Prop({ reflect: true }) contentTextTag: string = 'span'

    @Prop({ reflect: true }) fontSize: string = c.fontSize

    /**
     * Space between header and content.
     * @CSS
     */

    @Prop({ reflect: true }) gap: string = '0.4em'

    @Prop({ reflect: true }) headerColor: string = 'var(--spx-color-gray-900)'

    /**
     * Gap between header text and icon.
     * @CSS
     */

    @Prop({ reflect: true }) headerGap: string = '0.4em'

    /** Header text. */

    @Prop({ reflect: true }) headerText: string = 'Default Header Text'

    /** Header text tag. */

    @Prop({ reflect: true }) headerTextTag: string = 'span'

    /** Icon class. Accepts any Font Awesome icon class. */

    @Prop({ reflect: true }) indicatorIcon: string

    /** Indicator icon transform. */

    @Prop({ reflect: true }) indicatorIconTransform: string = 'rotate(90deg)'

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      if (this.el.querySelector('[slot="header"]')) {
        this.headerCustom = true
      }
      if (this.el.querySelector('[slot="content"]')) {
        this.contentCustom = true
      }
    }

    /** Toggle content. */

    private clickHeader = () => {
      this.open = !this.open
    }

    @Method()
    async reload () {
      this.componentDidLoad()
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        fontFamily: c.fontFamily,
        fontSize: setVar(tag, 'font-size', this.fontSize),
        display: 'grid',
        gridAutoFlow: 'row',
        gridRowGap: setVar(tag, 'gap', this.gap)
      })

      /** Header styles. */

      const styleHeader = css({
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'max-content',
        gridColumnGap: setVar(tag, 'header-gap', this.headerGap),
        cursor: 'pointer',

        '*:not([slot])': {
          margin: '0'
        }
      })

      /** Header custom styles. */

      const styleHeaderCustom = css({
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'center',
        transform: this.open && setVar(tag, 'indicator-icon-transform', this.indicatorIconTransform),
        color: setVar(tag, 'header-color', this.headerColor)
      })

      /** Create custom variables for Header/Content. */

      const styleText = (tag, part) => css({
        color: 'var(--spx-accordion-' + tag + '-color, ' + part + ')'
      })

      /** Renders inner element for header/content. */

      const textReturn = (condition, tag, text, slot, part) => {
        return condition
          ? (tag === 'h1' ? <h1 class={styleText(tag, part)}>{text}</h1>
            : tag === 'h2' ? <h2 class={styleText(tag, part)}>{text}</h2>
              : tag === 'h3' ? <h3 class={styleText(tag, part)}>{text}</h3>
                : tag === 'h4' ? <h4 class={styleText(tag, part)}>{text}</h4>
                  : tag === 'h5' ? <h5 class={styleText(tag, part)}>{text}</h5>
                    : tag === 'h6' ? <h6 class={styleText(tag, part)}>{text}</h6>
                      : tag === 'p' ? <p class={styleText(tag, part)}>{text}</p>
                        : <span class={styleText(tag, part)}>{text}</span>) : <slot name={slot}/>
      }

      return <Host
        class={styleHost}>

        {/** Header. */}

        <div
          onClick={this.clickHeader}
          class={styleHeader}>

          {/** Header custom. */}

          {!this.headerCustom &&
                <div class={styleHeaderCustom}>

                  {this.indicatorIcon
                    ? <i class={this.indicatorIcon}/>
                    : <spx-icon type="caret"/>}

                </div>}
          {textReturn(!this.headerCustom, this.headerTextTag, this.headerText, 'header', this.headerColor)}
        </div>

        {/** Content. */}

        <div class={css({
          display: this.open ? 'block' : 'none'
        })}>
          {textReturn(!this.contentCustom, this.contentTextTag, this.contentText, 'content', this.contentColor)}
        </div>
      </Host>
    }
}
