import state from '../stores/container'
import * as c from '../constants/container'
import { setMode } from '@stencil/core'

export default async () => {
  /** Theme switcher. */

  setMode(elm => {
    return (elm as any).theme || elm.getAttribute('theme') || 'default'
  })

  /** Set global store. */

  const container = document.querySelector('spx-container')

  if (container) {
    state.bpMaxWidth = container.getAttribute('max-width') ? container.getAttribute('max-width') : c.maxWidth
    state.bpMobileWidth = parseInt(container.getAttribute('bp-mobile')) ? parseInt(container.getAttribute('bp-mobile')) : c.bpMobileWidth
    state.buttonReverseColor = container.getAttribute('button-reverse-color') ? container.getAttribute('button-reverse-color') : c.buttonReverseColor
    state.colorPrimary = container.getAttribute('color-primary')
    state.colorSecondary = container.getAttribute('color-secondary')
    state.fontFamilyPrimary = container.getAttribute('font-family-primary') ? container.getAttribute('font-family-primary') : c.fontFamilyPrimary
    state.fontFamilySecondary = container.getAttribute('font-family-secondary') ? container.getAttribute('font-family-secondary') : c.fontFamilySecondary
    state.spaceX = container.getAttribute('space-x') ? container.getAttribute('space-x') : c.spaceX
    state.spaceXsm = container.getAttribute('space-x-sm') ? container.getAttribute('space-x-sm') : c.spaceXSm
  }
}
