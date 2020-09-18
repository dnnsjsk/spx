import { createStore } from '@stencil/store'
import { removeClasses } from '../utils/removeClasses'
import * as s from '../constants/container'
import { setColor } from '../utils/setColor'
import { css } from 'emotion'

/**
 * State.
 */

const { state, onChange } = createStore({
  bpMaxWidth: s.maxWidth,
  bpMobile: null,
  bpMobileWidth: s.bpMobileWidth,
  buttonReverseColor: s.buttonReverseColor,
  colorPrimary: s.colorPrimary,
  colorSecondary: s.colorSecondary,
  fontFamilyPrimary: s.fontFamilyPrimary,
  fontFamilySecondary: s.fontFamilySecondary,
  spaceX: s.spaceX,
  spaceXsm: s.spaceXSm
})

/**
 * Color.
 */

onChange('colorPrimary', value => {
  removeClasses(document.body, 'color-palette')
  setColor(value, 'primary')
  setColor(state.colorSecondary, 'secondary')
})

onChange('colorSecondary', value => {
  removeClasses(document.body, 'color')
  setColor(value, 'secondary')
  setColor(state.colorPrimary, 'primary')
})

/**
 * Font.
 */

const setFont = (primary, secondary) => {
  const styles = css({
    '--spx-container-font-family-primary': primary,
    '--spx-container-font-family-secondary': secondary,
    label: 'font'
  })
  document.body.classList.add(styles)
}

onChange('fontFamilyPrimary', value => {
  removeClasses(document.body, 'font')
  setFont(value, state.fontFamilySecondary)
})

onChange('fontFamilySecondary', value => {
  removeClasses(document.body, 'font')
  setFont(state.fontFamilyPrimary, value)
})

/**
 * Buttons.
 */

onChange('buttonReverseColor', value => {
  document.querySelectorAll('spx-section-button:not([reverse-color])').forEach(item => {
    item.removeAttribute('reverse-color')
  })

  if (value === 'all') {
    document.querySelectorAll('spx-section-button').forEach(item => {
      item.setAttribute('reverse-color', '')
    })
  } else {
    document.querySelectorAll('spx-section-button[type="' + value + '"]').forEach(item => {
      item.setAttribute('reverse-color', '')
    })
  }
})

/**
 * BP Mobile.
 */

const setMobile = () => {
  if (window.innerWidth < state.bpMobileWidth) {
    state.bpMobile = true
    document.body.classList.add('spx-mobile')
  } else {
    state.bpMobile = false
    document.body.classList.remove('spx-mobile')
  }
}

setMobile()

onChange('bpMobileWidth', value => {
  state.bpMobileWidth = value

  setMobile()
})

window.addEventListener('resize', function () {
  setMobile()
})

/**
 * Export.
 */

export default state
