import state from '../stores/container'

/**
 * BP Mobile.
 */

export const watchMobile = () => {
  if (window.innerWidth < state.bpMobileWidth) {
    state.bpMobile = true
    document.body.classList.add('spx-mobile')
  } else {
    state.bpMobile = false
    document.body.classList.remove('spx-mobile')
  }
}
