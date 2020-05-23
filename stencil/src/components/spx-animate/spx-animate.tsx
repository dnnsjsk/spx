import {Component, Host, h, Prop, Element} from '@stencil/core';
import {css} from 'emotion';
import {gsap} from "gsap";

@Component({
    tag: 'spx-animate',
})

export class SpxAnimate {
    @Element() el: HTMLElement;

    @Prop() target: string;

    @Prop() duration: number;
    @Prop() opacity: number;
    @Prop() x: string;
    @Prop() y: string;

    @Prop() delay: number;
    @Prop() stagger: number;
    @Prop() ease: string;

    @Prop() viewport: boolean;
    @Prop() once: boolean;
    @Prop() viewportMarginTop: string;
    @Prop() viewportMarginRight: string;
    @Prop() viewportMarginBottom: string;
    @Prop() viewportMarginLeft: string;

    connectedCallback() {

        /** Fix opacity bug. */

        if (this.opacity === 0) {
            this.opacity = 0.001;
        }

        /** Set up timeline. */

        let tl = gsap.timeline({
            defaults: {
                ease: this.ease || 'power1.out',
            },
            paused: true,
        });

        /** Define target. */

        let target = this.target ? this.el.querySelectorAll(this.target) : this.el.querySelectorAll('*');

        /** Connect target to timeline. */

        tl.from(target, {
            duration: this.duration || 1,
            opacity: this.opacity || 1,
            x: this.x || 0,
            y: this.y || 0,
            delay: this.delay || 0,
            stagger: this.stagger || 0,
        });

        /** Play timeline and check if animation is based on viewport. */

        if (!this.viewport) {
            tl.play();
        }

        /** Set up intersection observer scroll based animations. */

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
                        tl.play();
                    } else {
                        if (!this.once) {
                            tl.reverse();
                        }
                    }
                });
            }, options);
            intersectionObserver.observe(this.el);
        }
    }

    render() {
        return <Host
            class={css({
                display: 'inline-block',
            })}>
            <slot/>
        </Host>;
    }
}
