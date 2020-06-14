import {Component, Host, h, Prop, Element, State} from '@stencil/core';
import {css} from 'emotion';
import {gsap} from 'gsap';
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-animate',
})

export class SpxAnimate {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) display: string = 'block';

    @Prop() target: string = '*';

    @Prop() duration: number = 1;
    @Prop() opacity: number = 1;
    @Prop() x: number = 0;
    @Prop() y: number = 0;

    @Prop() delay: number = 0;
    @Prop() stagger: number = 0.15;
    @Prop() ease: string = 'power1.out';

    @Prop() viewport: boolean;
    @Prop() once: boolean;
    @Prop() viewportMarginTop: string;
    @Prop() viewportMarginRight: string;
    @Prop() viewportMarginBottom: string;
    @Prop() viewportMarginLeft: string;

    @State() tl;
    @State() elements;

    componentDidLoad() {

        const init = () => {

            /** Get inner elements. */

            this.elements = this.el.querySelectorAll(this.target);

            /** Check if list is empty. */

            if ((this.elements === undefined || this.elements.length === 0) && document.body.classList.contains('oxygen-builder-body')) {

                setTimeout(init, 100);

            } else {

                /** Init else. */

                this.tl = gsap.timeline({
                    defaults: {
                        ease: this.ease,
                    },
                    paused: true,
                });

                this.tl.from([].slice.call(this.elements), {
                    duration: this.duration,
                    opacity: this.opacity,
                    x: this.x,
                    y: this.y,
                    delay: this.delay,
                    stagger: this.stagger,
                });

                /** Play immediately when not in viewport. */

                if (!this.viewport) {
                    this.tl.play();
                }

                /** Check viewport before playing. */

                if (this.viewport) {
                    const options = {
                        rootMargin: '' +
                            '' + (this.viewportMarginTop || '0px') + ' ' +
                            '' + (this.viewportMarginRight || '0px') + ' ' +
                            '' + (this.viewportMarginBottom || '0px') + ' ' +
                            '' + (this.viewportMarginLeft || '0px') + '',
                    };

                    const intersectionObserver = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                this.tl.play();
                            } else {
                                if (!this.once) {
                                    this.tl.reverse();
                                }
                            }
                        });
                    }, options);
                    intersectionObserver.observe(this.el);
                }
            }
        };

        init();
    }

    render() {
        return <Host
            class={css({
                display: constants.styleDisplay('animate', this.display),
            })}>
            <slot/>
        </Host>;
    }
}