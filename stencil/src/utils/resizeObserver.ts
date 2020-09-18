import { startsWith, fromPairs, pickBy, merge } from 'lodash-es'
import ResizeObserver from 'resize-observer-polyfill'

export const resizeObserver = (el) => {
  /** Get the original props. */

  const obj = {}
  Array.prototype.slice.call(el.attributes).forEach(function (item) {
    if (item.name !== 'class:') {
      obj[item.name] = item.value
    }
  })

  /** Create objects. */

  const breakpoints = {}
  const breakpointsArray = []

  /** Iterate through all attributes starting with bp-. */

  for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
    att = atts[i]
    if (!startsWith(att.nodeName, 'bp-mobile') && startsWith(att.nodeName, 'bp-')) {
      const attribute = el.getAttribute(att.nodeName)
      const array = attribute.split(';')

      /** Create object out of values. */

      const pairsArray = []
      array.forEach(item => {
        pairsArray.push(item.replace(/ /g, '').replace(/"/g, '').split(':'))
      })
      const finalArray = fromPairs(pairsArray)
      const breakpoint = att.nodeName.split('-')[1]
      const finalObject = { [breakpoint]: pickBy(finalArray) }
      merge(breakpoints, finalObject)
    }
  }

  /** Push sizes into array. */

  Object.entries(breakpoints).forEach(item => {
    breakpointsArray.push(item[0])
  })

  /** Create resize observer for original entries. */

  if (breakpointsArray) {
    const min = +Math.min(...breakpointsArray.map(Number)) - 1
    const resizeObserverOriginal = new ResizeObserver(entries => {
      entries.forEach(() => {
        if (window.matchMedia('(max-width: ' + min + 'px)').matches) {
          Object.entries(obj).forEach(k => {
            if (k[0] === 'class') {
            } else {
              el.setAttribute(k[0], String(k[1]))
            }
          })
        }
      })
    })

    resizeObserverOriginal.observe(document.body)
  }

  /** Create resize observer for each entry. */

  Object.entries(breakpoints).forEach((item) => {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(() => {
        const matchMedia = window.matchMedia('(min-width: ' + item[0] + 'px)')
        if (matchMedia.matches) {
          Object.entries(breakpoints[item[0]]).forEach((key) => {
            el.setAttribute(key[0], <string>key[1])
          })
        }
      })
    })

    resizeObserver.observe(document.body)
  })
}
