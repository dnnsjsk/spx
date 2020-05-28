import {Component, Element, h, Host} from '@stencil/core';
import {startsWith} from 'lodash-es';

@Component({
    tag: 'spx-group',
})

export class SpxGroup {
    @Element() el: HTMLElement;

    componentDidLoad() {

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
        return <Host>
            <slot/>
        </Host>
    }
}
