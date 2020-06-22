import {Component, Element, h, Host, Prop} from '@stencil/core';
import {startsWith} from 'lodash-es';
import {css} from "emotion";
import * as constants from "../../constants/style.js";

@Component({
    tag: 'spx-group',
})

export class SpxGroup {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) display: string = 'block';

    componentDidLoad() {

        this.forwardAttributes();

        /** Set up mutation observer. */

        let observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                this.forwardAttributes();
            })
        });

        observer.observe(this.el, {
            attributes: true
        });
    }

    forwardAttributes() {

        /** Function to filter elements. */

        const getAllTagMatches = (regEx) => {
            return Array.prototype.slice.call(this.el.querySelectorAll(':scope > *')).filter(function (el) {
                return el.tagName.match(regEx);
            });
        }

        /** Get all tag matches. */

        let elements = getAllTagMatches(/^sp/i);

        /** Loop matches. */

        for (var att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++) {
            att = atts[i];
            if (startsWith(att.nodeName, 'g-')) {
                elements.forEach(item => {
                    item.setAttribute(att.nodeName.substring(2), att.nodeValue);
                });
            }
        }
    }

    render() {
        return <Host class={css({
            display: constants.styleDisplay('group', this.display)
        })}>
            <slot/>
        </Host>
    }
}
