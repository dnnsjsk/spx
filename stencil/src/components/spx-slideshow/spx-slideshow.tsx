// eslint-disable-next-line no-unused-vars
import { Component, h, Host, Prop, State, Listen, Element } from '@stencil/core'
import { css, keyframes } from 'emotion'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-slideshow'

/**
 * Continuously playing slideshow.
 */

@Component({
  tag: 'spx-slideshow'
})

export class SpxSlideshow {
    @Element() el: HTMLSpxSlideshowElement
    private clone: HTMLElement
    private elements: HTMLElement

    @State() offsetWidth

    /**
     * Gap between inner elements.
     * @CSS
     */

    @Prop({ reflect: true }) gap: string = 'var(--spx-space-lg)'

    /**
     * Max width of inner elements.
     * @CSS
     */

    @Prop({ reflect: true }) maxWidth: string = '350px'

    /**
     * Duration of slideshow to complete one cycle.
     * @CSS
     */

    @Prop({ reflect: true }) duration: string = '60s'

    @Listen('resize', { target: 'window' })
    onResize () {
      this.offsetWidth = this.elements.offsetWidth
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      this.elements.querySelectorAll(':scope > *').forEach(item => {
        const clone = item.cloneNode(true)
        this.clone.appendChild(clone)
      })
      this.offsetWidth = this.elements.offsetWidth
    }

    render () {
    /** Animation. */

      const kf = keyframes({
        '0%': {
          transform: 'translate3d(0px, 0px, 0px)'
        },
        to: {
          transform: 'translate3d(calc(-' + (this.offsetWidth) + 'px - ' + this.gap + '), 0px, 0px)'
        }
      })

      const style = css({
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: setVar(tag, 'max-width', this.maxWidth),
        gridGap: setVar(tag, 'gap', this.gap)
      })

      const styleWrap = css({
        animationName: kf,
        animationDuration: setVar(tag, 'speed', this.duration),
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationFillMode: 'none',
        animationPlayState: 'running',
        display: 'flex',

        '& > div + div': {
          marginLeft: setVar(tag, 'gap', this.gap)
        }
      })

      return <Host>
        <div class={styleWrap}>
          <div class={style} ref={(el) => this.elements = el as HTMLElement}><slot/></div>
          <div class={style} ref={(el) => this.clone = el as HTMLElement}/>
        </div>
      </Host>
    }
}
