import { css } from 'emotion'

/**
 *  Tabs logic.
 */

export const tabs = (el) => {
  const headerElements = el.querySelectorAll('[data-spx-tabs-header]')
  const headerElementsFirst = el.querySelector('[data-spx-tabs-header]:first-of-type')
  const contentElements = el.querySelectorAll('[data-spx-tabs-content]')
  const contentElementsFirst = el.querySelector('[data-spx-tabs-content]:first-of-type')

  headerElements.forEach(item => {
    item.classList.add(css({
      cursor: 'pointer',
      textAlign: 'left'
    }))
  })

  contentElements.forEach(item => {
    item.classList.add(css({
      display: 'none',

      '&[open]': {
        display: 'block'
      }
    }))
  })

  headerElements.forEach(item => {
    item.addEventListener('click', () => {
      headerElements.forEach(item => {
        item.removeAttribute('open')
      })

      contentElements.forEach(item => {
        item.removeAttribute('open')
      })
      item.setAttribute('open', '')
      el.querySelector('[data-spx-tabs-content="' + item.getAttribute('data-spx-tabs-header') + '"]').setAttribute('open', '')
    })
  })

  contentElementsFirst.setAttribute('open', '')
  headerElementsFirst.setAttribute('open', '')
}
