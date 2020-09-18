// eslint-disable-next-line no-unused-vars
import { Component, Host, h, Prop, Element, State, Method } from '@stencil/core'
import { css } from 'emotion'
import { gsap } from 'gsap'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-animate'

/**
 * Wrapper around GSAP that allows for staggered and scroll-based animation.
 */

@Component({
  tag: 'spx-animate'
})

export class SpxAnimate {
    @Element() el: HTMLSpxAnimateElement;

    @State() elements
    @State() tl

    /** Delay before animation starts. */

    @Prop() delay: number = 0

    /** Animation duration. */

    @Prop() duration: number = 1

    /** Ease being used. Accepts all common GSAP options. */

    @Prop() ease: string = 'power1.out'

    /** Determines if animation should only play once. (if viewport is true) */

    @Prop() once: boolean

    /** Opacity level the animation starts from. */

    @Prop() opacity: number = 1

    /** Amount of time elements should be staggered by. */

    @Prop() stagger: number = 0.15

    /** The target element that should be animated inside the component. */

    @Prop() target: string = '*'

    /** Starts animation when target is in the viewport. */

    @Prop() viewport: boolean

    /** Adjust the root margin of the animation start. */

    @Prop() viewportMarginBottom: string

    /** Adjust the root margin of the animation start. */

    @Prop() viewportMarginLeft: string

    /** Adjust the root margin of the animation start. */

    @Prop() viewportMarginRight: string

    /** Adjust the root margin of the animation start. */

    @Prop() viewportMarginTop: string

    /** X position the animation starts from. */

    @Prop() x: number = 0

    /** Y position the animation starts from. */

    @Prop() y: number = 0

    @Prop({ reflect: true }) display: string = 'block'

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      this.elements = this.el.querySelectorAll(this.target)

      this.tl = gsap.timeline({
        defaults: {
          ease: this.ease
        },
        paused: true
      })

      this.tl.from([].slice.call(this.elements), {
        duration: this.duration,
        opacity: this.opacity,
        x: this.x,
        y: this.y,
        delay: this.delay,
        stagger: this.stagger
      })

      /** Play immediately when not in viewport. */

      if (!this.viewport) {
        this.tl.play()
      }

      /** Check viewport before playing. */

      if (this.viewport) {
        const options = {
          rootMargin: '' +
                            '' + (this.viewportMarginTop || '0px') + ' ' +
                            '' + (this.viewportMarginRight || '0px') + ' ' +
                            '' + (this.viewportMarginBottom || '0px') + ' ' +
                            '' + (this.viewportMarginLeft || '0px') + ''
        }

        const intersectionObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.tl.play()
            } else {
              if (!this.once) {
                this.tl.reverse()
              }
            }
          })
        }, options)
        intersectionObserver.observe(this.el)
      }
    }

    @Method()
    async reload () {
      this.componentDidLoad()
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: setVar(tag, 'display', this.display)
      })

      return <Host
        class={styleHost}>
        <slot/>
      </Host>
    }
}
