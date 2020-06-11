import {Component, Element, h, Host} from '@stencil/core';
import {passAttributes} from '../../functions/passAttributes.js';

@Component({
    tag: 'spx-snackbar-toggle',
})

export class SpxSnackbarToggle {
    @Element() el: HTMLElement;

    createSnackbar() {

        /** Create snackbar. */

        let snackbar = document.createElement('spx-snackbar');

        /** Append snackbar to the inside. */

        document.body.appendChild(snackbar);

        /** Pass all element attributes to snackbar. */

        passAttributes(document, this.el, 'spx-snackbar');
    }

    render() {
        return <Host onClick={this.createSnackbar.bind(this)}>
            <slot/>
        </Host>
    }
}
