// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host } from '@stencil/core'
import { passAttributes } from '../../utils/passAttributes'

@Component({
  tag: 'spx-snackbar-toggle'
})

export class SpxSnackbarToggle {
    @Element() el: HTMLSpxSnackbarToggleElement

    private createSnackbar = () => {
      /** Create snackbar. */

      const snackbar = document.createElement('spx-snackbar')

      /** Append snackbar to the inside. */

      document.body.appendChild(snackbar)

      /** Pass all element attributes to snackbar. */

      passAttributes(document, this.el, 'spx-snackbar')
    }

    render () {
      return <Host onClick={this.createSnackbar}>
        <slot/>
      </Host>
    }
}
