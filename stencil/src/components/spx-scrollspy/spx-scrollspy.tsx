import {Component, Element, h, Host, Prop, Listen} from '@stencil/core';
import Gumshoe from '../../../../stencil/node_modules/gumshoejs/dist/gumshoe.js';

@Component({
    tag: 'spx-scrollspy',
})

export class SpxScrollspy {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) target: string = 'a';
    @Prop({reflectToAttr: true}) header: string = 'header';
    @Prop({reflectToAttr: true}) navClass: string = 'is-active';
    @Prop({reflectToAttr: true}) contentClass: string = 'is-active';
    @Prop({reflectToAttr: true}) urlChange: boolean = false;

    @Listen('gumshoeActivate', {target: 'document'})
    linkChanger(event) {
        history.replaceState(null, null, event.detail.link.getAttribute('href'));
    }

    componentDidLoad() {
        new Gumshoe(':scope ' + this.target + '', {
            reflow: true,
            navClass: this.navClass,
            contentClass: this.contentClass,
            events: this.urlChange,
            offset: () => {
                return document.querySelector(this.header).getBoundingClientRect().height;
            }
        });
    }

    render() {
        return <Host>
        </Host>
    }
}
