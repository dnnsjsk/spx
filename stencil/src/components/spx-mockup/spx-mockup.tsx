// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Listen, Method, Prop, State } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-mockup'

/**
 * Display device mockups around your content.
 */

@Component({
  tag: 'spx-mockup',
  styleUrl: 'spx-mockup.css'
})

export class SpxMockup {
    @Element() el: HTMLSpxMockupElement

    @State() color: string
    @State() height: string
    @State() innerElId
    @State() mockup
    @State() outerElId
    @State() parent
    @State() parentHeight
    @State() width: string

    /**
     * Samsung S8 color.
     * @choice 'black', 'blue'
     */

    @Prop({ reflect: true }) colorGalaxyS8: string

    /**
     * Google Pixel color.
     * @choice 'silver', 'black', 'blue'
     */

    @Prop({ reflect: true }) colorGooglePixel: string

    /**
     * iPad Pro color.
     * @choice 'silver', 'gold', 'rosegold', 'spacegray'
     */

    @Prop({ reflect: true }) colorIpadPro: string

    /**
     * iPhone 8 color.
     * @choice 'silver', 'gold', 'spacegray'
     */

    @Prop({ reflect: true }) colorIphone8: string

    /**
     * MacBook color.
     * @choice 'silver', 'gold', 'rosegold', 'spacegray'
     */

    @Prop({ reflect: true }) colorMacbook: string

    /**
     * MacBook Pro color.
     * @choice 'silver', 'spacegray',
     */

    @Prop({ reflect: true }) colorMacbookPro: string

    @Prop({ reflect: true }) display: string = 'block'

    @Prop({ reflect: true }) imagePosition: string = '50% 50%'

    /** Image src if no inner slot is used. */

    @Prop({ reflect: true }) src: string

    /**
     * Device type.
     * @choice 'iphone-x', 'iphone-8', 'google-pixel-2-xl', 'google-pixel', 'galaxy-s8', 'ipad-pro', 'surface-pro', 'surface-book', 'macbook', 'macbook-pro', 'surface-studio', 'imac-pro', 'apple-watch'
     */

    @Prop({ reflect: true }) type: string = 'iphone-8'

    @Listen('resize', { target: 'window' })
    onResize () {
      if (this.type !== 'browser') {
        this.handleResize()
      }
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      /** Assign states. */

      this.mockup = this.el.querySelector('.spx-mockup')
      this.parent = this.el.querySelector('.spx-mockup-wrap')

      /** Resize and wait for iFrame to load before showing content. */

      this.handleResize()
      this.updateColors()
    }

    componentDidUpdate () {
      this.handleResize()
      this.updateColors()
    }

    /** Resize function to keep src element in proportion. */

    private handleResize () {
      const ratio = this.parent.offsetWidth / this.mockup.offsetWidth
      this.mockup.style.transform = 'scale(calc((' + ratio + '))'
      this.parentHeight = this.mockup.offsetHeight
      this.parent.style.height = this.parentHeight / 1 * ratio + 'px'
    }

    private updateColors () {
      this.color = this.colorIphone8 || this.colorGooglePixel || this.colorGalaxyS8 || this.colorIpadPro || this.colorMacbookPro || this.colorMacbook || this.color
    }

    @Method()
    async reload () {
      this.componentDidLoad()
    }

    render () {
      /** Device style. */

      const styleHost = css({
        display: setVar(tag, 'display', this.display),
        maxWidth: '100%'
      })

      /** Image style. */

      const styleImg = css({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: this.imagePosition
      })

      return <Host
        class={styleHost}>

        <div class="spx-mockup-wrap">
          <div
            class={'spx-mockup spx-mockup-' + this.type + ' ' + (this.color ? 'spx-mockup-' + this.color + '' : '')}>
            <div class="spx-mockup-frame">
              <div class="spx-mockup-content">
                {this.src ? <img class={styleImg} src={this.src}/> : <slot/>}
              </div>
            </div>
            <div class="spx-mockup-stripe"/>
            <div class="spx-mockup-header"/>
            <div class="spx-mockup-sensors"/>
            <div class="spx-mockup-btns"/>
            <div class="spx-mockup-power"/>
            {this.type === 'iphone-x' &&
                        <div class="spx-mockup-home"/>
            }
          </div>
        </div>

      </Host>
    }
}
