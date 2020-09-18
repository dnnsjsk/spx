// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core'
import { css } from 'emotion'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

@Component({
  tag: 'spx-icon'
})

export class SpxIcon {
    @Element() el: HTMLSpxIconElement;

    @Prop({ reflect: true }) icon: string

    @Prop({ reflect: true }) type: string = 'fa'

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

      /** Icon styles. */

      const styleIcon = css({
        fontSize: '0.7em'
      })

      return <Host class={styleHost}>

        {this.icon

          ? <i class={this.icon}/>

          : this.type === 'caret'

            ? <i class={styleIcon}>▼</i>

            : null}
      </Host>
    }
}
