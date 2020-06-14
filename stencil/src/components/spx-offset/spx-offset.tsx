import {Component, Element, h, Host, Listen, Prop} from '@stencil/core';
import {css} from "emotion";
import * as constants from "../../constants/style.js";

@Component({
    tag: 'spx-offset',
})

export class SpxOffset {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) display: string = 'block';

    @Prop({reflectToAttr: true}) target: string = 'header';

    /** Listen to window resize. */

    @Listen('resize', {target: 'window'})
    componentDidLoad() {

        /** Get height of target element. */

        let value = document.querySelector(this.target).getBoundingClientRect().height + 'px';

        /** Apply values as top property and variable. */

        if (this.el.parentElement.classList.contains('oxy-offset')) {
            this.el.parentElement.style.marginTop = value;
        } else {
            this.el.style.marginTop = value;
        }


        document.documentElement.style.setProperty('--spx-offset', value);
    }

    render() {
        return <Host class={css({
            display: constants.styleDisplay('lightbox', this.display)
        })}>
            <slot/>
        </Host>
    }
}
