import {startsWith} from 'lodash-es';

/**
 * Pass attributes to nested components.
 */

export const passAttributes = (source, component) => {
    let elements = source.querySelectorAll(component)

    for (let att, i = 0, atts = source.attributes, n = atts.length; i < n; i++) {
        att = atts[i];
        if (startsWith(att.nodeName, component)) {
            elements.forEach(item => {
                item.setAttribute(att.nodeName.replace(component + '-', ''), att.nodeValue);
            });
        }
    }
}