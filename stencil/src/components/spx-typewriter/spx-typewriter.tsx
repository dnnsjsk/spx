import {Component, Element, h, Host, Prop, State, Method} from '@stencil/core';
import Typewriter from 'typewriter-effect/dist/core';
import {css} from "emotion";
import * as constants from "../../constants/style";

@Component({
    tag: 'spx-typewriter',
})

export class SpxTypewriter {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) text: string = "I'm a typewriter";
    @Prop({reflectToAttr: true}) delay: any = 'natural';
    @Prop({reflectToAttr: true}) deleteSpeed: any = 'natural';
    @Prop({reflectToAttr: true}) loop: boolean;
    @Prop({reflectToAttr: true}) autoStart: boolean;
    @Prop({reflectToAttr: true}) inner: boolean;

    @State() typewriter;

    /** External method to start animation. */

    @Method()
    async start() {
        this.typewriter.typeString(this.text);
        this.typewriter.start();
    }

    /** External method to stop animation. */

    @Method()
    async stop() {
        this.typewriter.stop();
    }

    componentDidLoad() {

        const init = () => {

            /** Check if inner element should be used. */

            let el = this.inner ? this.el.querySelector('h1, h2, h3, h4, h5, h6, p, span') : this.el;

            this.typewriter = new Typewriter(el, {
                strings: this.text,
                delay: this.delay,
                deleteSpeed: this.deleteSpeed,
                loop: this.loop,
                autoStart: this.autoStart,
                wrapperClassName: 'spx-typewriter__wrapper',
                cursorClassName: 'spx-typewriter__cursor',
            });

        }

        /** Oxygen: wait for Element. */

        if (document.body.classList.contains('oxygen-builder-body')) {

            const search = () => {
                if (this.el.querySelector('h1, h2, h3, h4, h5, h6, p, span')) {
                    init();
                } else {
                    setTimeout(search, 100);
                }
            }

            search();

        } else {
            init();
        }
    }

    render() {
        return <Host class={css({
            display: constants.styleDisplay,
        })}>
        </Host>
    }
}
