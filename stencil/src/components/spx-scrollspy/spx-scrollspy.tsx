import {Component, Element, h, Host, Prop, Listen} from '@stencil/core';
import Gumshoe from '../../../../stencil/node_modules/gumshoejs/dist/gumshoe.js';

@Component({
    tag: 'spx-scrollspy',
})

export class SpxScrollspy {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) target: string = 'a';
    @Prop({reflectToAttr: true}) navClass: string = 'is-active';
    @Prop({reflectToAttr: true}) contentClass: string = 'is-active';
    @Prop({reflectToAttr: true}) offset: any;
    @Prop({reflectToAttr: true}) urlChange: boolean = false;

    /** Replace state of URL bar . */

    @Listen('gumshoeActivate', {target: 'document'})
    linkChanger(event) {
        history.replaceState(null, null, event.detail.link.getAttribute('href'));
    }

    componentDidLoad() {
        new Gumshoe(':scope ' + this.target + '', {
            reflow: true,
            navClass: this.navClass,
            contentClass: this.contentClass,

            /** Only activate events when URL should be changed. */

            events: this.urlChange,

            offset: () => {

                /** Check if prop is a number otherwise look for querySelector. */

                return (this.offset && !isNaN(this.offset)) ? this.offset
                    ? this.offset : document.querySelector(this.offset).getBoundingClientRect().height
                    : 0;
            }
        });
    }

    render() {
        return <Host>
        </Host>
    }
}
