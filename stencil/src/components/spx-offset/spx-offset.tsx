// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Listen, Method, Prop } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import { offsetHeader } from '../../utils/offsetHeader'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-offset'

/**
 * The component offsets itself to the height of a specified element.
 * It comes in handy when dealing with a fixed header and is used on this site.
 * Simply wrap your main content container with it and select a target element. The distance will adjust on screen resize.
 */

@Component({
  tag: 'spx-offset'
})

export class SpxOffset {
    @Element() el: HTMLSpxOffsetElement

    @Prop({ reflect: true }) display: string = 'block'

    /** Target element. */

    @Prop({ reflect: true }) target: string = 'header'

    /** Listen to window resize. */

    @Listen('resize', { target: 'window' })
    onResize () {
      offsetHeader(this.el, this.target)
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)
      this.onResize()
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

      return <Host class={styleHost}>
        <slot/>
      </Host>
    }
}
