import { resizeObserver } from './resizeObserver'

/**
 * Set component did load.
 */

export const globalComponentDidLoad = (el) => {
  resizeObserver(el)

  /** Reload component when new child element has been loaded. */

  if (el.tagName !== 'SPX-TYPEWRITER') {
    const config = { childList: true }
    const callback = function (mutationsList) {
      mutationsList.forEach(() => {
        el.reload()
      })
    }
    const observer = new MutationObserver(callback)
    observer.observe(el, config)
  }
}
