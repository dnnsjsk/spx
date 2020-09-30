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

    @Prop({ reflect: true }) authorColor: string = 'var(--spx-color-800)'

    @Prop({ reflect: true }) authorFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) authorFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) authorFontWeight: string = '500'

    @Prop({ reflect: true }) authorLetterSpacing: string = '0'

    @Prop({ reflect: true }) authorLineHeight: string = '1.25'

    @Prop({ reflect: true }) authorMarginTop: string = 'var(--spx-space-lg)'

    @Prop({ reflect: true }) authorTextTransform: string = 'uppercase'

    @Prop({ reflect: true }) contentMarginTop: string = 'var(--spx-space-xl)'

    @Prop({ reflect: true }) contentMaxWidth: string = '700px'

    @Prop({ reflect: true }) contentSpaceX: string = 'var(--spx-container-space-x)'

    /** Display date. */

    @Prop({ reflect: true }) date: boolean = true;

    @Prop({ reflect: true }) dateColor: string = 'var(--spx-color-gray-600)'

    @Prop({ reflect: true }) dateFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) dateFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) dateFontWeight: string = '500'

    @Prop({ reflect: true }) dateLetterSpacing: string = '0'

    @Prop({ reflect: true }) dateLineHeight: string = '1.25'

    @Prop({ reflect: true }) dateMarginTop: string = 'var(--spx-space-sm)'

    @Prop({ reflect: true }) dateTextTransform: string = 'default'

    @Prop({ reflect: true }) headerPaddingBottom: string = 'var(--spx-space-xl)'

    @Prop({ reflect: true }) headerBorderBottom: string = '1px solid var(--spx-color-gray-200)'

    /** Display image. */

    @Prop({ reflect: true }) image: boolean = true;

    @Prop({ reflect: true }) imageBorderRadius: string = c.borderRadius

    @Prop({ reflect: true }) imageHeight: string = 'clamp(200px, 50vh, 600px)'

    @Prop({ reflect: true }) imageObjectPosition: string = '50% 50%'

    @Prop({ reflect: true }) imageSpaceX: string = 'var(--spx-container-space-x-sm)'

    @Prop({ reflect: true }) imageSpaceY: string = 'var(--spx-space-md)'

    /** Mobile breakpoint. */

    @Prop({ reflect: true }) mobile: number = c.mobileBpWidth

    /**
     * Gets a WordPress post to render.
     * @helper &lt;?php spx\get::post() ?>
     */

    @Prop({ reflect: true }) post: string

    /** Space to edge of the viewport. */

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
      })

      const styleOuter = css({
        display: 'block',
        gridGap: '40px',
          padding: '0 ' + setVar(tag, 'content-space-x', this.contentSpaceX) + ''
      })

      const styleImage = css({
        maxWidth: '100%',
        padding: '' + setVar(tag, 'image-space-y', this.imageSpaceY) + ' ' + setVar(tag, 'image-space-x', this.imageSpaceX) +'',

        img: {
          width: '100%',
          objectFit: 'cover',
          objectPosition: setVar(tag, 'image-object-position', this.imageObjectPosition),
          maxWidth: '100%',
          height: setVar(tag, 'image-height', this.imageHeight),
          borderRadius: setVar(tag, 'image-border-radius', this.imageBorderRadius)
        }
      })

      const styleHeaderContainer = css({
        maxWidth: 'var(--spx-text-max-width)',
        margin: '0 auto',
        paddingBottom: setVar(tag, 'header-padding-bottom', this.headerPaddingBottom),
        borderBottom: setVar(tag, 'header-padding-bottom', this.headerBorderBottom)
      })

      const styleAuthor = css(merge({
        display: 'flex',
        alignItems: 'center',
        marginTop: setVar(tag, 'author-margin-top', this.authorMarginTop),

        span: {
          marginLeft: 'var(--spx-space-sm)',
          ...c.text(tag, 'title', this.authorColor, '12px', '12px', '12px', this.authorFontSizeMultiplier, this.authorFontWeight, this.authorLetterSpacing, this.authorLineHeight, this.authorTextTransform)
        }
      }), {})

      const styleAuthorImg = css({
        height: '30px',
        width: '30px',
        borderRadius: '9999px'
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

              {/** Slot: before author. */}
              <slot name="before-author"/>

              <div class={styleAuthor}>
                <img class={styleAuthorImg} src={this.postArray['author_image']}/>
                <span>By {this.postArray['author_first_name']} {this.postArray['author_last_name']} </span>
              </div>

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
