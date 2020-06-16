import {Component, Element, h, Host, Prop} from '@stencil/core';
import GLightbox from 'glightbox'
import {wrap} from '../../functions/wrap.js';
import {css} from "emotion";
import * as constants from "../../constants/style.js";
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

@Component({
    tag: 'spx-lightbox',
    styleUrl: 'spx-lightbox.css'
})

export class SpxLightbox {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) effect: string;

    @Prop({reflectToAttr: true}) display: string = 'block';

    componentDidLoad() {

        /** Generate random string. */

        let random = '_' + Math.random().toString(36).substr(2, 9);

        /** Wrap elements in <a> element. */

        let elements = this.el.querySelectorAll('img, video, iframe');

        elements.forEach(item => {
            let src = item.getAttribute('src');
            wrap(item, document.createElement('a'));
            item.parentElement.setAttribute('href', src);
            item.parentElement.style.display = 'block';
            item.parentElement.style.maxWidth = '100%';
            item.parentElement.classList.add('spx-lightbox__item');
            item.parentElement.setAttribute('data-gallery', random);
        });

        /** Create lightbox. */

        new GLightbox({
            selector: '.spx-lightbox__item',
            touchNavigation: true,
            openEffect: this.effect === 'fade' ? 'fadeIn' : 'none',
            closeEffect: this.effect === 'fade' ? 'fadeOut' : 'none',
            svg: {
                close: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>',
                next: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>',
                prev: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>',
            },
            onOpen: () => {
                let lightbox = document.querySelector('#glightbox-body');
                disableBodyScroll(lightbox);
            },
            onClose: () => {
                clearAllBodyScrollLocks();
            },
        });

    }

    render() {
        return <Host class={css({
            display: constants.styleDisplay('lightbox', this.display)
        })}>
        </Host>
    }
}
