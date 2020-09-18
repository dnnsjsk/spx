import { startsWith } from 'lodash-es'

/**
 * Pass attributes to nested components.
 */

export const passAttributes = (selector, element, component) => {
  const elements = selector.querySelectorAll(component)

  for (let att, i = 0, atts = element.attributes, n = atts.length; i < n; i++) {
    att = atts[i]
    if (startsWith(att.nodeName, component)) {
      elements.forEach(item => {
        item.setAttribute(att.nodeName.replace(component + '-', ''), att.nodeValue)
      })
    }
  }
}
