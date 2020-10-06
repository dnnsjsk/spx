// eslint-disable-next-line no-unused-vars
import { Component, h, Host, Prop, Element, State, Method, Watch } from '@stencil/core'
import { css, keyframes } from 'emotion'
import * as c from '../../constants/style'
import { position } from '../../constants/style'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-snackbar'

/**
 * Notification bars with a variety of options.
 * Great for success or failure messages.
 * In default mode, the snackbar will fade out and remove itself from the DOM.
 */

@Component({
  tag: 'spx-snackbar'
})

export class SpxSnackbar {
    @Element() el: HTMLSpxSnackbarElement

    @State() positionArray

    @Prop({ reflect: true }) animationDelay: string = '200ms'
    @Prop({ reflect: true }) animationDuration: string = '2000ms'
    @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)'
    @Prop({ reflect: true }) border: string
    @Prop({ reflect: true }) borderRadius: string = c.borderRadius

    /** Adds option to close snackbar after its creation. */

    @Prop({ reflect: true }) closeable: boolean

    @Prop({ reflect: true }) color: string = '#ffffff'

    /**
     * Distance to the edge of the viewport on the x-axis.
     * @CSS
     */

    @Prop({ reflect: true }) distanceX: string = '1em'

    /**
     * Distance to the edge of the viewport on the y-axis.
     * @CSS
     */

    @Prop({ reflect: true }) distanceY: string = '1em'

    /** Makes snackbar not removable. */

    @Prop({ reflect: true }) fixed: boolean
    @Prop({ reflect: true }) fontSize: string = '18px'

    /** Unique identifier for snackbar instance. */

    @Prop({ reflect: true }) identifier: string = 'primary'

    @Prop({ reflect: true }) padding: string = '1em'

    /**
     * Component position in page.
     * @choice 'bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-right'
     */

    @Prop({ reflect: true }) position: string = 'bottom-right'

    /** CSS property position of button. */

    @Prop({ reflect: true }) positionCss: 'fixed' | 'absolute' | 'relative' | 'static' = 'fixed'

    /** Reverses the close button if "closable" prop is true. */

    @Prop({ reflect: true }) reverse: boolean

    /** Space between snackbars. */

    @Prop({ reflect: true }) spaceBetween: string = 'var(--spx-space-xs)'

    /** Element where snackbars should be created in. */

    @Prop({ reflect: true }) target: string = 'body'

    /** Text inside snackbar. */

    @Prop({ reflect: true }) text: string = "Hello, I'm a snackbar."

    @Prop({ reflect: true }) zIndex: number = 103

    @State() containerClass;

    @Watch('zIndex')
    @Watch('spaceBetween')
    @Watch('position')
    positionChanged () {
      this.createPositionArray()
      document.querySelector('[data-spx-id="' + this.identifier + '"]').className = ''
      document.querySelector('[data-spx-id="' + this.identifier + '"]').classList.add(
        css({
          ...position('snackbar', this.positionArray, this.distanceX, this.distanceY),
          position: this.positionCss,
          display: 'flex',
          flexDirection: 'column',
          zIndex: this.zIndex,

          'spx-snackbar + spx-snackbar': {
            marginTop: setVar(tag, 'space-Y', this.spaceBetween)
          }
        }))
    }

    componentWillLoad () {
      this.createPositionArray()

      /** Load into container. */

      if (!document.querySelector('[data-spx-id="' + this.identifier + '"]')) {
        const div = document.createElement('div')
        this.containerClass = {

        }
        div.classList.add(css({
          ...position('snackbar', this.positionArray, this.distanceX, this.distanceY),
          position: this.positionCss,
          display: 'flex',
          flexDirection: 'column',
          zIndex: this.zIndex,

          'spx-snackbar + spx-snackbar': {
            marginTop: setVar(tag, 'space-Y', this.spaceBetween)
          }
        }))
        div.setAttribute('data-spx-id', this.identifier)
        div.appendChild(this.el)
        const target = document.querySelector(this.target)
        target.appendChild(div)
      } else {
        document.querySelector('[data-spx-id="' + this.identifier + '"]').appendChild(this.el)
      }
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)
    }

    componentDidRender () {
      const removeItem = () => {
        const el = this.el
        el.remove()
      }

      /** Remove snackbar from dom after 5 seconds. */

      if (!this.fixed) {
        setTimeout(removeItem, parseInt(this.animationDuration.replace('ms', '')))
      }
    }

    private createPositionArray () {
      this.positionArray = this.position.split('-')
    }

    private removeItem = () => {
      const container = document.querySelector('#spx-snackbar-container')
      if (container) {
        container.remove()
      } else {
        const el = this.el
        el.remove()
      }
    }

    @Method()
    async reload () {
      this.componentDidLoad()
    }

    render () {
      /** Animation in and out. */

      const kfOut = keyframes({
        '0%, 100%': {
          opacity: 0
        },
        '30%, 80%': {
          opacity: 1
        }
      })

      /** Animation in. */

      const kfIn = keyframes({
        '0%': {
          opacity: 0
        },
        '30%, 100%': {
          opacity: 1
        }
      })

      /** Host styles. */

      const styleHost = css({
        display: 'flex',
        flexDirection: !this.reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: setVar(tag, 'padding', this.padding),
        paddingRight: (this.reverse || !this.closeable) && setVar(tag, 'padding', this.padding),
        paddingBottom: setVar(tag, 'padding', this.padding),
        paddingLeft: this.closeable && this.reverse ? 0 : setVar(tag, 'padding', this.padding),
        opacity: 0,
        color: setVar(tag, 'color', this.color),
        background: setVar(tag, 'background', this.background),
        border: setVar(tag, 'border', this.border),
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
        animation: !this.fixed ? kfOut : kfIn,
        animationDelay: setVar(tag, 'animation-delay', this.animationDelay),
        animationDuration: setVar(tag, 'animation-duration', this.animationDuration),
        animationFillMode: 'forwards'
      })

      /** Button styles. */

      const styleButton = css({
        padding: '0 ' + setVar(tag, 'padding', this.padding) + '',
        width: '0.7em',
        opacity: '0.3',
        boxSizing: 'content-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        svg: {
          height: '1em'
        }
      })

      /** Text styles. */

      const styleText = css({
        whiteSpace: 'nowrap',
        fontFamily: c.fontFamily,
        fontSize: setVar(tag, 'font-size', this.fontSize)
      })

      return <Host class={styleHost}>

        {/** Close button. */}

        {this.closeable &&

            <div
              role="button"
              onClick={this.removeItem}
              class={styleButton}>
              <svg
                aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/>
              </svg>
            </div>}

        {/** Text. */}

        <span class={styleText}>{this.text ? this.text : <slot/>}</span>

      </Host>
    }
}
