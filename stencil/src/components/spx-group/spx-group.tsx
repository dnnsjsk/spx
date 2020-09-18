// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Method, Prop } from '@stencil/core'
import { startsWith } from 'lodash-es'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-group'

/**
 * Pass attributes to all inner (spx) child elements.
 * All attributes that start with g-* will be passed on to child elements.
 * For example, to change all icons for a group of accordions, the data attribute would look like that:
 * g-icon-indicator='far fa-arrow-down'
 */

@Component({
  tag: 'spx-group'
})

export class SpxGroup {
    @Element() el: HTMLSpxGroupElement;

    @Prop({ reflect: true }) display: string = 'block'

    /** Specifies a target element. */

    @Prop({ reflect: true }) target: string

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      this.forwardAttributes()

      /** Set up mutation observer. */

      const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          this.forwardAttributes()
        })
      })

      observer.observe(this.el, {
        attributes: true
      })
    }

    private forwardAttributes () {
      /** Function to filter elements. */

      const getAllTagMatches = (regEx) => {
        return Array.prototype.slice.call(this.el.querySelectorAll('*')).filter(function (el) {
          return el.tagName.match(regEx)
        })
      }

      /** Get all tag matches. */

      const elements = this.target ? getAllTagMatches(new RegExp(this.target, 'i')) : getAllTagMatches(/^spx/i)

      /** Loop matches. */

      for (var att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++) {
        att = atts[i]
        if (startsWith(att.nodeName, 'g-')) {
          elements.forEach(item => {
            item.setAttribute(att.nodeName.substring(2), att.nodeValue)
          })
        }
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
