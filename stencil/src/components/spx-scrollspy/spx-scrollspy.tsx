// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, Listen, Event, EventEmitter, Method, State } from '@stencil/core'
import Gumshoe from '../../../../stencil/node_modules/gumshoejs/dist/gumshoe.js'
import { css } from 'emotion'
import { offset } from '../../utils/offset'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-scrollspy'

/**
 * Automatically add CSS classes to navigation items and content elements depending on the scroll position.
 * You can see it in action on the left of this page! (on desktop)
 */

@Component({
  tag: 'spx-scrollspy'
})

export class SpxScrollspy {
    @Element() el: HTMLSpxScrollspyElement

    @State() myGumshoe

    /** Applied class to active content element. */

    @Prop({ reflect: true }) contentClass: string = 'spx-scrollspy__content--active'

    @Prop({ reflect: true }) display: string = 'block'

    /** Applied class to active navigation element. */

    @Prop({ reflect: true }) navClass: string = 'spx-scrollspy__nav--active'

    /** Selects the height of an element (any querySelector value) or number that is used for offsetting how far from the top the next section is activated.. */

    @Prop({ reflect: true }) offset: any = 0

    /** Target element. Can take any querySelector value. (id, class, tag etc.) */

    @Prop({ reflect: true }) target: string = 'a'

    /** Appends the currently active link to the end of the URL. */

    @Prop({ reflect: true }) urlChange: boolean = false

    /** Replace state of URL bar . */

    @Listen('gumshoeActivate', { target: 'document' })
    onLinkChange (event) {
      history.replaceState(null, null, event.detail.link.getAttribute('href'))
    }

    @Event({ eventName: 'spxScrollspyDidLoad' }) spxScrollspyDidLoad: EventEmitter

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      // eslint-disable-next-line no-new
      this.myGumshoe = new Gumshoe(':scope ' + this.target + '', {
        reflow: true,
        navClass: this.navClass,
        contentClass: this.contentClass,

        /** Only activate events when URL should be changed. */

        events: this.urlChange,

        offset: () => {
          /** Check if prop is a number otherwise look for querySelector. */

          return offset(this.offset)
        }
      })

      /** Emit event after render. */

      this.spxScrollspyDidLoad.emit({ target: 'document' })
    }

    @Method()
    async reload () {
      this.myGumshoe.setup()
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: setVar(tag, 'display', this.display)
      })

      return <Host class={styleHost}>
      </Host>
    }
}
