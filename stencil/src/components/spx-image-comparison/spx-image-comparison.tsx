// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, State, Watch, Listen, Method } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-image-comparison'

/**
 * Compare two images visually using a slider. Handy for showing subtle (or not so subtle) before/after differences.
 */

@Component({
  tag: 'spx-image-comparison'
})

export class SpxImageComparison {
    @Element() el: HTMLSpxImageComparisonElement
    private container: HTMLElement
    private imageAfter: HTMLElement
    private scroller: HTMLElement

    @State() active: boolean
    @State() width: number

    @Prop({ reflect: true }) color: string = '#ffffff'

    @Prop({ reflect: true }) iconColor: string = 'var(--spx-color-gray-500)'

    /** Image URL of the before image. */

    @Prop({ reflect: true }) srcAfter: string = 'https://source.unsplash.com/random/1200x300'

    /** Image URL of the after image. */

    @Prop({ reflect: true }) srcBefore: string = 'https://source.unsplash.com/random/1201x300'

    @Listen('resize', { target: 'window' })
    onResize () {
      if (this.el.offsetWidth !== this.width) {
        this.startChanged(this.start)
      }
    }

    /** Opening state in pixels. */

    @Prop({ reflect: true }) start: number = 150

    @Watch('start')
    startChanged (x) {
      /** Show image in start. */

      const transform = Math.max(0, (Math.min(x, this.container.offsetWidth)))
      this.imageAfter.style.width = transform + 'px'
      this.scroller.style.left = transform - 25 + 'px'
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      /** Set starting width */

      this.width = this.el.offsetWidth

      /** Disable for Oxygen */

      if (document.body.classList.contains('oxygen-builder-body')) {
        this.scroller.style.pointerEvents = 'none'
      }

      /** Use boolean to know when it is being used */

      this.active = false

      /** Watch for clicks on scroller */

      this.scroller.addEventListener('mousedown', () => {
        this.active = true
      })

      /** Add scrolling class to the scroller so it has full opacity while active */

      document.body.addEventListener('mouseup', () => {
        this.active = false
      })

      /** Watch body for changes to the state */

      document.body.addEventListener('mouseleave', () => {
        this.active = false
      })

      /** Figure out where the mouse is */

      document.body.addEventListener('mousemove', (e) => {
        this.mover(e)
      })

      /** Set starting width */
      this.startChanged(this.start)

      /** Repeat for touch events */

      this.scroller.addEventListener('touchstart', () => {
        this.active = true
      })

      document.body.addEventListener('touchend', () => {
        this.active = false
      })

      document.body.addEventListener('touchcancel', () => {
        this.active = false
      })

      document.body.addEventListener('touchmove', (e) => {
        this.mover(e)
      })
    }

    private mover (e) {
      if (!this.active) return
      let x = e.pageX
      x -= this.container.getBoundingClientRect().left
      this.startChanged(x)
    }

    @Method()
    async reload () {
      this.componentDidLoad()
    }

    render () {
      const styleContainer = css({
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        overflow: 'hidden',
        userSelect: 'none'
      })

      const styleImage = css({
        height: '100%'
      })

      const styleImageAfter = css({
        width: '125px'
      })

      const styleScroller = css({
        width: '50px',
        height: '50px',
        position: 'absolute',
        left: '100px',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        backgroundColor: ' transparent',
        opacity: this.active ? 1 : 0.9,
        pointerEvents: !this.active ? 'auto' : 'none',
        cursor: 'pointer',
        background: setVar(tag, 'color', this.color),
        border: '4px solid ' + setVar(tag, 'color', this.color) + '',

        '&:hover': {
          opacity: 1
        },

        '&:after, &:before': {
          content: '" "',
          display: 'block',
          width: '4px',
          height: '9999px',
          position: 'absolute',
          left: '50%',
          marginLeft: '-2px',
          zIndex: 30,
          transition: '0.1s',
          background: setVar(tag, 'color', this.color)
        },

        '&:before': {
          top: '100%'
        },

        '&:after': {
          bottom: '100%'
        }
      })

      const styleThumb = css({
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        svg: {
          height: '60%',
          color: setVar(tag, 'icon-color', this.iconColor)
        }
      })

      return <Host class={css({
        display: 'block',
        position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden'
      })}>

        {this.srcBefore && this.srcAfter &&

        /** Before. */

            [<div
              ref={(el) => this.container = el as HTMLElement}
              class={styleContainer}>
              <img class={styleImage}
                src={this.srcBefore}
                alt="before"/>
            </div>,

            /** After. */

            <div
              ref={(el) => this.imageAfter = el as HTMLElement}
              class={css([styleContainer, styleImageAfter])}>
              <img class={styleImage}
                src={this.srcAfter}
                alt="after"/>
            </div>,

            /** Scroller. */

            <div
              ref={(el) => this.scroller = el as HTMLElement}
              class={styleScroller}>

              <div class={styleThumb}>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M347.404 142.86c-4.753 4.753-4.675 12.484.173 17.14l73.203 70H91.22l73.203-70c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L128 388.766c4.686 4.686 12.284 4.686 16.971 0l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282h329.56l-73.203 70c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l124.485-124.281c4.686-4.686 4.686-12.284 0-16.971L384 123.234c-4.686-4.686-12.284-4.686-16.971 0l-19.625 19.626z"/>
                </svg>
              </div>

            </div>]}
      </Host>
    }
}
