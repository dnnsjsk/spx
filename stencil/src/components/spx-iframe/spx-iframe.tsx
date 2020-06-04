import {Component, Host, h, Prop, State, Listen, Element} from '@stencil/core';
import {css} from "emotion";
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-iframe',
})
export class SpxIframe {
    @Element() el: HTMLElement;

    @Prop() src: string;
    @Prop() size: string = '1440px';
    @State() height: string;
    @State() width: string;
    @State() iframe;
    @State() parent;
    @State() parentHeight;

    /** Resize function to keep src element in proportion. */

    handleResize() {
        let ratio = this.parent.offsetWidth / this.iframe.offsetWidth;
        this.iframe.style.transform = 'scale(calc((' + ratio + '))';
        this.parentHeight = this.parent.offsetHeight;
        this.iframe.style.height = this.parentHeight / ratio + 'px';
    }

    @Listen('resize', {target: 'window'})
    handleResizer() {
        this.handleResize()
    }

    componentDidUpdate() {
        this.handleResize();
    }

    componentDidLoad() {

        /** Assign states. */

        this.iframe = this.el.querySelector('iframe');
        this.parent = this.el;

        /** Resize and wait for iFrame to load before showing content. */

        this.handleResize();
        this.el.querySelector('iframe').onload = () => {
            this.el.classList.add('loaded');
        }
    }

    render() {
        return <Host class={css({
            height: '100%',
            width: '100%',
            position: 'relative',
            overflowX: 'scroll',
            overflowY: 'hidden',
            display: 'block',

            'iframe': {
                border: 'none',
                width: this.size,
                height: '100vh',
                transformOrigin: 'left top',
                position: 'absolute',
            },

            '.spx-iframe__loader-wrap': {
                padding: '0.8em',
                borderRadius: constants.styleBorderRadius,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(2)',
            },

            '&.loaded .spx-iframe__loader-wrap': {
                display: 'none',
            }
        })}>
            <iframe tabindex="-1" src={this.src}/>
            <div class="spx-iframe__loader-wrap">
                <spx-loader/>
            </div>
        </Host>;
    }
}
