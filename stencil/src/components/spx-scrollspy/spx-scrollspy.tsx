import {Component, Element, h, Host, Prop, Listen} from '@stencil/core';
import Gumshoe from '../../../../stencil/node_modules/gumshoejs/dist/gumshoe.js';
import {css} from "emotion";
import * as constants from "../../constants/style";
import {offset} from '../../functions/offset.js';

@Component({
    tag: 'spx-scrollspy',
})

export class SpxScrollspy {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) target: string = 'a';
    @Prop({reflectToAttr: true}) navClass: string = 'spx-scrollspy__nav--active';
    @Prop({reflectToAttr: true}) contentClass: string = 'spx-scrollspy__content--active';
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

                return offset(this.offset);
            }
        });
    }

    render() {
        return <Host class={css({display: constants.styleDisplay})}>
        </Host>
    }
}
