import {Component, Host, h, Prop, Element, State} from '@stencil/core';
import {css} from 'emotion';
import {gsap} from "gsap";
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-animate',
})

export class SpxAnimate {
    @Element() el: HTMLElement;

    @Prop() target: string = '*';

    @Prop() duration: number = 1;
    @Prop() opacity: number = 0;
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

    timeline() {
        this.tl.from(this.elements, {
            duration: this.duration,
            opacity: this.opacity,
            x: this.x,
            y: this.y,
            delay: this.delay,
            stagger: this.stagger,
        });
    }

    componentDidLoad() {

        /** Oxygen: Set up apply button. */

        if (document.body.classList.contains('oxygen-builder-body')) {

            const someListener = (event) => {
                var element = event.target;
                if (element.tagName == 'A' && element.classList.contains("oxygen-apply-button")) {
                    const getElements = () => {
                        this.elements = this.el.querySelectorAll(this.target);
                        if (this.elements === undefined || this.el.querySelectorAll(this.target).length === 0) {
                            getElements
                        } else {
                            return;
                        }
                    };
                    getElements();
                }
            }

            parent.document.addEventListener("click", someListener);
        }

        /** Get elements. */

        const getElements = new Promise(() => {
            this.elements = this.el.querySelectorAll(this.target);
        });

        /** Setup timeline. */

        const setupTimeline = new Promise(() => {

            this.tl = gsap.timeline({
                defaults: {
                    ease: this.ease,
                },
                paused: true,
            });

        });

        /** Get timeline. */

        const timeline = new Promise(() => {
            this.timeline();
        });

        /** Play timeline. */

        const playTl = new Promise(() => {
            if (!this.viewport) {
                this.tl.play();
            }

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
        })

        function init() {
            getElements.then(function () {
                return setupTimeline;
            }).then(function () {
                return timeline;
            }).then(function () {
                return playTl;
            }).catch(function () {
                return init();
            })
        }

        init();
    }

    render() {
        return <Host
            class={css({
                display: constants.styleDisplay,
            })}>
            <slot/>
        </Host>;
    }
}