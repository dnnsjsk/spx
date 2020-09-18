// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core'
import { css } from 'emotion'
import * as c from '../../constants/style'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'
import { merge } from 'lodash-es'
import state from '../../stores/container'

const tag = 'spx-page-single'

/**
 * Render a single post layout.
 */

@Component({
  tag: 'spx-page-single'
})

export class SpxPageSingle {
    @Element() el: HTMLSpxPageSingleElement
    private postContentContainer: HTMLElement

    @State() content: boolean
    @State() mobileBP: boolean
    @State() postArray: Array<string>
    @State() postContent: Document

    @Prop({ reflect: true }) contentMarginTop: string = '2rem'

    @Prop({ reflect: true }) contentMaxWidth: string = '700px'

    /** Display date. */

    @Prop({ reflect: true }) date: boolean = true;

    @Prop({ reflect: true }) dateColor: string = 'var(--spx-color-gray-600)'

    @Prop({ reflect: true }) dateFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) dateFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) dateFontWeight: string = '500'

    @Prop({ reflect: true }) dateLetterSpacing: string = '0'

    @Prop({ reflect: true }) dateLineHeight: string = '1.25'

    @Prop({ reflect: true }) dateMarginTop: string = 'var(--spx-space-md)'

    @Prop({ reflect: true }) dateTextTransform: string = 'default'

    /** Display image. */

    @Prop({ reflect: true }) image: boolean = true;

    @Prop({ reflect: true }) imageBorderRadius: string = c.borderRadius

    @Prop({ reflect: true }) imageHeight: string = 'clamp(200px, 50vh, 600px)'

    @Prop({ reflect: true }) imageObjectPosition: string = '50% 50%'

    @Prop({ reflect: true }) imageSpaceY: string = 'var(--spx-space-md)'

    /** Mobile breakpoint. */

    @Prop({ reflect: true }) mobile: number = c.mobileBpWidth

    /**
     * Gets a WordPress post to render.
     * @helper &lt;?php spx\get::post() ?>
     */

    @Prop({ reflect: true }) post: string

    /** Space to edge of the viewport. */

    @Prop({ reflect: true }) spaceX: string = 'var(--spx-container-space-x-sm)'

    @Prop({ reflect: true }) titleColor: string = 'var(--spx-color-800)'

    @Prop({ reflect: true }) titleFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) titleFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) titleFontWeight: string = '500'

    @Prop({ reflect: true }) titleLetterSpacing: string = '0'

    @Prop({ reflect: true }) titleLineHeight: string = '1.25'

    @Prop({ reflect: true }) titleMarginTop: string = 'var(--spx-space-md)'

    @Prop({ reflect: true }) titleTextTransform: string = 'default'

    /** Watch post prop and parse to iteratable array. */

    @Watch('post')
    parsePostProp (newValue: string) {
      if (newValue) {
        this.postArray = JSON.parse(newValue)
        this.postContent = new DOMParser().parseFromString(this.postArray['content'], 'text/html')
      }
    }

    componentWillLoad () {
      /** If menu prop is set. */

      this.parsePostProp(this.post)

      /** Use slot to render content if it's set. */

      this.content = !this.el.querySelector('[slot="content"]')
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      /** Get content from DOMParser and put into content container. */

      if (this.content) {
        this.postContentContainer.innerHTML = this.postContent.body.innerHTML
      }
    }

    render () {
      /** Style host. */

      const styleHost = css({
        fontSize: c.fontSize,
        display: 'block',
        padding: '0 ' + setVar(tag, 'space-x', this.spaceX) + ''
      })

      const styleOuter = css({
        display: 'block',
        gridGap: '40px'
      })

      const styleImage = css({
        maxWidth: '100%',
        padding: '' + setVar(tag, 'image-space-y', this.imageSpaceY) + '0',

        img: {
          width: '100%',
          objectFit: 'cover',
          objectPosition: setVar(tag, 'image-object-position', this.imageObjectPosition),
          maxWidth: '100%',
          height: setVar(tag, 'height', this.imageHeight),
          borderRadius: setVar(tag, 'image-border-radius', this.imageBorderRadius)
        }
      })

      const styleHeaderContainer = css({
        maxWidth: 'var(--spx-text-max-width)',
        margin: '0 auto'
      })

      const styleTitle = css(merge({
        ...c.text(tag, 'title', this.titleColor, '24px', '4vw', '48px', this.titleFontSizeMultiplier, this.titleFontWeight, this.titleLetterSpacing, this.titleLineHeight, this.titleTextTransform),
        fontFamily: setVar(tag, 'title-font-family', this.titleFontFamily),
        marginTop: setVar(tag, 'title-margin-top', this.titleMarginTop)
      }), {})

      const styleDate = css(merge({
        ...c.text(tag, 'date', this.dateColor, '14px', '3vw', '18px', this.dateFontSizeMultiplier, this.dateFontWeight, this.dateLetterSpacing, this.dateLineHeight, this.dateTextTransform),
        display: 'block',
        fontFamily: setVar(tag, 'date-font-family', this.dateFontFamily),
        marginTop: setVar(tag, 'date-margin-top', this.dateMarginTop)
      }), {})

      const styleContent = css({
        marginTop: setVar(tag, 'content-margin-top', this.contentMarginTop) + ' !important'
      })

      return <Host
        class={styleHost}>

        <article>

          {/** Slot: start */}
          <slot name="start"/>

          {this.image && this.postArray['image'] &&
                /** Image. */
                <div class={styleImage}>
                  <img alt={this.postArray['title']} src={this.postArray['image']}/>
                </div>}

          <div class={styleOuter}>

            <div class={styleHeaderContainer}>

              {/** Slot: before post title. */}
              <slot name="before-title"/>

              {this.postArray['title'] &&
                        /** Post title. */
                        <h1 class={styleTitle}>{this.postArray['title']}</h1>}

              {/** Slot: before date. */}
              <slot name="before-date"/>

              {this.date && this.postArray['date'] &&
                        /** Post title. */
                        <span class={styleDate}>{this.postArray['date']}</span>}

            </div>

            {/** Slot: before content. */}
            <slot name="before-content"/>

            {this.content &&
                        /** Post content. */
                        <spx-text ref={(el) => this.postContentContainer = el as HTMLElement}
                          class={styleContent}/>}

            {!this.content &&
                        /** Slot: content. */
                        <spx-text>
                          <slot name="content"/>
                        </spx-text>}

          </div>

        </article>

      </Host>
    }
}
