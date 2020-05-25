import {Component, Host, h, Prop, State, Listen, Element} from '@stencil/core';
import {css} from "emotion";

@Component({
    tag: 'spx-iframe',
})
export class SpxIframe {
    @Element() el: HTMLElement;

    @Prop() src: string;
    @Prop() height: string;
    @Prop() width: string;
    @State() iframe;
    @State() parent;
    @State() parentHeight;

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
        let thisNested = this;
        this.iframe = this.el.querySelector('iframe');
        this.parent = this.el;
        this.handleResize();
        this.el.querySelector('iframe').onload = function () {
            thisNested.el.classList.add('loaded');
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
                width: '1440px',
                height: '100vh',
                transformOrigin: 'left top',
                position: 'absolute',
            },

            '.spx-iframe__loader-wrap': {
                padding: '12px',
                borderRadius: '0.25em',
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
