// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import state from '../../stores/container'
import { tabs } from '../../utils/tabs'
import { merge } from 'lodash-es'
import { setSectionVar } from '../../utils/setSectionVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-section-text-media'

/**
 * Two-column text-media block component that can be used for a variety of layout options.
 * The current homepage consists of this block only.
 */

@Component({
  tag: 'spx-section-text-media'
})

export class SpxSectionTextMedia {
    @Element() el: HTMLSpxSectionTextMediaElement

    @State() tabs: boolean;

    @Prop({ reflect: true }) background: string

    /**
     * Column size.
     * @CSS
     */

    @Prop({ reflect: true }) columnSize: string = '1fr 1fr'

    /** If set, component will transform the header offset to the top-padding value. */

    @Prop({ reflect: true }) first: boolean

    /**
     * Gap between columns.
     * @CSS
     */

    @Prop({ reflect: true }) gap: string = 'var(--spx-space-2xl)'

    /** Hides the media column. */

    @Prop({ reflect: true }) hideMedia: boolean

    /**
     * Gap between images.
     * @CSS
     */

    @Prop({ reflect: true }) imagesGap: string = 'var(--spx-space-md)'

    /**
     * Layout of the section.
     * @choice 'horizontal', 'vertical'
     */

    @Prop({ reflect: true }) layout: string = 'horizontal'

    /**
     * Background color for the media column.
     * @CSS
     */

    @Prop({ reflect: true }) mediaBackground: string

    /** Overlaps the background with the media column. */

    @Prop({ reflect: true }) mediaBackgroundOverlap: boolean

    /** Removes the outer spacing for the media column. */

    @Prop({ reflect: true }) mediaFull: boolean

    /** Adds padding to the media column on mobile. */

    @Prop({ reflect: true }) mediaFullMobileFix: boolean

    /** Reverses the column order. */

    @Prop({ reflect: true }) reverse: boolean

    /** Alignment for the inner text wrapper. */

    @Prop({ reflect: true }) textAlignInner: 'left' | 'center' | 'right' = 'left'

    /** Alignment for the outer text wrapper. */

    @Prop({ reflect: true }) textAlignOuter: 'left' | 'center' | 'right' = 'left'

    /**
     * Background color for the text column.
     * @CSS
     */

    @Prop({ reflect: true }) textBackground: string

    /** Overlaps the background with the text column. */

    @Prop({ reflect: true }) textBackgroundOverlap: boolean

    componentDidLoad () {
      globalComponentDidLoad(this.el)
      setSectionVar(this.el)

      if (this.el.querySelector('[data-spx-tabs-header]')) {
        this.tabs = true
        tabs(this.el)
      }
    }

    render () {
      const pq = (valueCenter, valueSide) => {
        return this.layout === 'vertical' ? valueCenter : this.layout === 'horizontal' && valueSide
      }

      const isVertical = this.layout === 'vertical'
      const isHorizontal = this.layout === 'horizontal'

      const backgroundOverlap = {
        content: "' '",
        position: 'absolute',
        top: '0',
        width: '300%',
        height: '100%',
        zIndex: -1
      }

      const textAlignInner =
            (this.textAlignInner === 'left' ? 'flex-start'
              : this.textAlignInner === 'center' ? 'center'
                : this.textAlignInner === 'right' && 'flex-end')

      const textAlignOuter =
            (this.textAlignOuter === 'left' ? 'flex-start'
              : this.textAlignOuter === 'center' ? 'center'
                : this.textAlignOuter === 'right' && 'flex-end')

      /** Host styles. */

      const styleHost = css({
        position: 'relative',
        marginTop: this.first && '0 !important',
        display: pq('block', 'grid'),
        gridTemplateColumns: state.bpMobile ? '1fr' : setVar(tag, 'column-size', this.columnSize),
        gridGap: isHorizontal && setVar(tag, 'gap', this.gap),
        background: setVar(tag, 'background', this.background),
        backgroundSize: 'cover',
        overflowX: 'hidden',

        'h1, h2, p': {
          textAlign: this.textAlignInner
        },

        'img + img': {
          marginTop: setVar(tag, 'images-gap', this.imagesGap)
        }
      })

      /** Text styles. */

      const styleText = css({
        position: 'relative',
        gridColumn: (this.reverse && !state.bpMobile) ? 2 : state.bpMobile && 1,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: this.mediaFull && state.spaceX,
        paddingRight: this.mediaFull && state.spaceX,
        justifyContent: this.layout === 'horizontal' ? 'center' : textAlignInner,
        alignItems: state.bpMobile ? 'left'
          : this.layout === 'horizontal' && this.reverse ? 'center'
            : textAlignOuter,

        '&:before': merge({
          background: this.textBackground,
          display: !this.textBackgroundOverlap && 'none',
          left: !this.reverse && '-230%',
          right: this.reverse && '-230%'
        }, backgroundOverlap)
      })

      /** Text wrap styles. */

      const styleTextWrap = css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: textAlignInner
      })

      /** Button styles. */

      const styleButtons = css({
        display: 'flex',
        flexWrap: 'wrap',
        width: this.layout === 'vertical' && '100%',
        justifyContent: textAlignInner
      })

      /** Media styles. */

      const styleMedia = css({
        position: 'relative',
        gridColumn: (this.reverse || state.bpMobile) && 1,
        gridRow: (this.reverse || state.bpMobile) && 1,
        marginTop: isVertical && setVar(tag, 'gap', this.gap),
        padding: this.mediaBackground && !this.mediaFull && !this.tabs && 'var(--spx-space-xl)',
        background: !this.mediaBackgroundOverlap && this.mediaBackground,

        '&>*': {
          marginLeft: 'auto',
          marginRight: 'auto'
        },

        '&:before': merge({
          background: this.mediaBackground,
          display: !this.mediaBackgroundOverlap && 'none',
          left: this.reverse && '-230%',
          right: !this.reverse && '-230%'
        }, backgroundOverlap)
      })

      return <Host
        class={styleHost}>

        <div class={styleText}>

          {/** Text wrap. */}

          <div class={styleTextWrap}>

            <slot name="pre-title"/>

            <slot name="text"/>

            {/** Buttons. */}

            <div class={styleButtons}>

              <slot name="buttons"/>

            </div>
          </div>
        </div>

        {/** Media. */}

        {!this.hideMedia &&

        <div class={styleMedia}>
          <slot name="media"/>
        </div>}

      </Host>
    }
}
