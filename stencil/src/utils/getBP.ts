import { startsWith } from 'lodash-es'

/**
 * Get breakpoint.
 */

export const getBP = (el) => {
  for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
    att = atts[i]
    if (startsWith(att.nodeName, 'bp-')) {
      console.log(el.nodeName)
    }
  }
}
