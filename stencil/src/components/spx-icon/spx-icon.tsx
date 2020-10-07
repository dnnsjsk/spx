// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core'
import { css } from 'emotion'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'
import 'ionicons/dist/ionicons.js'
import { setVar } from '../../utils/setVar'

const tag = 'spx-icon'

/**
 * Wrapper component for different kinds of icon sets. Currently comes included with Ionicons.
 */

@Component({
  tag: 'spx-icon'
})

export class SpxIcon {
    @Element() el: HTMLSpxIconElement;

    @Prop({ reflect: true }) color: string = 'inherit'

    /** Icon code. */

    @Prop({ reflect: true }) icon: string

    /**
     * Icon type.
     * @choice 'ionicons', 'caret'
     */

    @Prop({ reflect: true }) type: string = 'ionicons'

    /** Icon size. */

    @Prop({ reflect: true }) size: string = '20px'

    componentDidLoad () {
      globalComponentDidLoad(this.el)
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })

      /** Ionicon styles. */

      const styleIonicon = css({
        color: setVar(tag, 'color', this.color),
        fontSize: setVar(tag, 'size', this.size)
      })

      /** Caret styles. */

      const styleIcon = css({
        fontSize: '0.7em'
      })

      return <Host class={styleHost}>

        {this.type === 'ionicons'

          ? <ion-icon name={this.icon} class={styleIonicon}/>

          : this.type === 'caret'

            ? <i class={styleIcon}>▼</i>

            : null}
      </Host>
    }
}
