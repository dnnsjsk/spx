import {Component, Element, h, Host, Prop} from '@stencil/core';
import GLightbox from 'glightbox'
import {wrap} from '../../functions/wrap.js';
import {css} from "emotion";
import * as constants from "../../constants/style.js";

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
        });

    }

    render() {
        return <Host class={css({
            display: constants.styleDisplay('lightbox', this.display)
        })}>
        </Host>
    }
}
