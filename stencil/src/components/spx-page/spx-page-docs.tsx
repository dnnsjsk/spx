// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import * as c from '../../constants/style'
import { merge } from 'lodash-es'
import state from '../../stores/container'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'
import { wrap } from '../../utils/wrap'

const tag = 'spx-page-docs'

/**
 * Renders a documentation page similar to the one you are currently seeing here.
 * Every h1 tag becomes a navigation entry, while navigation headings get created by applying
 * the "data-spx-docs-heading" attribute to the first h1 of a new section.
 */

@Component({
  tag: 'spx-page-docs'
})

export class SpxPageDocs {
    @Element() el: HTMLSpxPageDocsElement
    private navigation: HTMLElement
    private content: HTMLElement

    @State() mobile: boolean

    @Prop({ reflect: true }) bpMobile: number = 1024

    @Prop({ reflect: true }) contentHeadingFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) navigationBackground: string

    @Prop({ reflect: true }) navigationFontFamily: string = state.fontFamilyPrimary

    @Prop({ reflect: true }) navigationFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) navigationLinkFontSizeMultiplier: number = 1

    @Prop({ reflect: true }) navigationGap: string = 'var(--spx-space-2xs)'

    @Prop({ reflect: true }) navigationLinkColor: string = 'var(--spx-color-800)'

    @Prop({ reflect: true }) navigationLinkColorActive: string = 'var(--spx-color-primary-A700)'

    @Prop({ reflect: true }) navigationLinkFontWeight: string = '500'

    @Prop({ reflect: true }) navigationLinkLetterSpacing: string = '0'

    @Prop({ reflect: true }) navigationLinkLineHeight: string = '1.25'

    @Prop({ reflect: true }) navigationLinkTextTransform: string = 'default'

    @Prop({ reflect: true }) navigationTitleColor: string = 'var(--spx-color-gray-600)'

    @Prop({ reflect: true }) navigationTitleFontWeight: string = '500'

    @Prop({ reflect: true }) navigationTitleLetterSpacing: string = '0'

    @Prop({ reflect: true }) navigationTitleLineHeight: string = '1.25'

    @Prop({ reflect: true }) navigationTitleTextTransform: string = 'uppercase'

    @Prop({ reflect: true }) offsetMarginTop: string = 'var(--spx-space-md)'

    @Prop({ reflect: true }) uniqueId: boolean

    /**
     * Distance to the edge of the viewport on the x-axis.
     * @CSS
     */

    @Prop({ reflect: true }) spaceX: string = state.spaceX

    /**
     * Distance to the edge of the viewport on the y-axis.
     * @CSS
     */

    @Prop({ reflect: true }) spaceY: string = 'var(--spx-space-xl)'

    /** Listen to window resize. */

    @Listen('resize', { target: 'window' })
    onResize () {
      this.mobile = window.innerWidth < this.bpMobile
    }

    componentWillLoad () {
      this.onResize()
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)
      this.createNavigation()

      if (window.location.hash) {
        document.querySelector(window.location.hash).scrollIntoView()
      }
    }

    private createNavigation () {
      /** Create links. */

      this.content.querySelectorAll('h1').forEach((item, index) => {
        const link = item.innerHTML.replace(/ /g, '-').toLowerCase()
        const id = this.uniqueId ? link + '-' + index : link
        const a = document.createElement('a')
        item.setAttribute('data-spx-docs-index', String(index))
        item.setAttribute('id', id)
        a.setAttribute('data-spx-docs-index', String(index))
        a.setAttribute('href', '#' + id)
        a.innerHTML = item.innerHTML
        this.navigation.appendChild(a)
        wrap(a, document.createElement('li'))
      })

      /** Create headings. */

      this.content.querySelectorAll('h1[data-spx-docs-heading]').forEach(item => {
        const index = item.getAttribute('data-spx-docs-index')
        const span = document.createElement('span')
        const el = this.navigation.querySelector('[data-spx-docs-index="' + index + '"]').parentElement
        span.innerHTML = item.getAttribute('data-spx-docs-heading')
        this.navigation.insertBefore(span, el)
      })

      this.el.querySelector('spx-scrollspy').reload()
    }

    render () {
      /** Host. */

      const styleHost = css({
        display: this.mobile ? 'block' : 'grid',
        gridTemplateColumns: !this.mobile && 'auto 1fr',
        gridAutoFlow: 'column'
      })

      const styleNavigationWrap = css({
        display: this.mobile ? 'none' : 'block',
        background: setVar(tag, 'navigation-background', this.navigationBackground),
        width: '120%'
      })

      /** Navigation. */

      const styleNavigation = {
        position: 'sticky',
        top: 'var(--spx-offset)',
        gridAutoRows: 'max-content',
        height: 'calc(100vh - var(--spx-offset))',
        padding: '' + setVar(tag, 'space-y', this.spaceY) + ' ' + state.spaceXsm + '',
        overflowY: 'auto',

        ul: {
          display: 'grid',
          gridGap: setVar(tag, 'navigation-gap', this.navigationGap)
        },

        a: {
          ...c.text(tag, 'navigation', this.navigationLinkColor, '16px', '16px', '16px', this.navigationFontSizeMultiplier, this.navigationLinkFontWeight, this.navigationLinkLetterSpacing, this.navigationLinkLineHeight, this.navigationLinkTextTransform),
          fontFamily: setVar(tag, 'navigation-font-family', this.navigationFontFamily),
          width: 'max-content',
          transitionProperty: 'color',
          transitionDuration: setVar(tag, 'navigation-transition-duration', c.transitionDuration),
          itemTransitionTimingFunction: setVar(tag, 'navigation-transition-timing-function', c.transitionTimingFunction)
        },

        li: {
          '&:last-of-type': {
            marginBottom: this.spaceY
          },

          '&.spx-scrollspy__nav--active a': {
            color: setVar(tag, 'navigation-link-color-active', this.navigationLinkColorActive)
          }
        },

        span: {
          ...c.text(tag, 'navigation', this.navigationTitleColor, '14px', '14px', '14px', this.navigationFontSizeMultiplier, this.navigationTitleFontWeight, this.navigationTitleLetterSpacing, this.navigationTitleLineHeight, this.navigationTitleTextTransform),
          fontFamily: setVar(tag, 'navigation-font-family', this.navigationFontFamily)
        },

        'li + span': {
          display: 'block',
          marginTop: 'var(--spx-space-lg)'
        }
      }

      /** Merge navigation objects to avoid emotion error. */

      const styleNavigationMerge = css(merge(styleNavigation, {}))

      /** Content. */

      const styleContent = {
        padding: '' + setVar(tag, 'space-y', this.spaceY) + ' ' + setVar(tag, 'x', this.spaceX) + '',

        h1: {
          '&[id]:before': {
            display: 'block',
            content: '" "',
            marginTop: 'calc((var(--spx-offset) + ' + this.offsetMarginTop + ') * -1)',
            height: 'calc(var(--spx-offset) + ' + this.offsetMarginTop + ')',
            visibility: 'hidden'
          }
        },

        'spx-code': {
          maxWidth: 'calc(100vw - ' + this.spaceX + ')'
        },

        img: {
          maxWidth: '100%'
        }
      }

      /** Merge content objects to avoid emotion error. */

      const styleContentMerge = css(merge(styleContent, {}))

      return <Host class={styleHost}>
        <div class={styleNavigationWrap}>
          <spx-scrollspy display="grid" url-change={true} offset="100"
            class={styleNavigationMerge}>
            <ul ref={(el) => this.navigation = el as HTMLElement}/>
          </spx-scrollspy>
        </div>
        <div
          ref={(el) => this.content = el as HTMLElement}
          class={styleContentMerge}>
          <slot/>
        </div>
      </Host>
    }
}
