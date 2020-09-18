import { palette } from '../constants/palettes'
import { css } from 'emotion'
import state from '../stores/container'
import { fromPairs } from 'lodash-es'

/**
 * Set color.
 */

export const setColor = (color, type) => {
  const styles = []

  /** Iterate through styles and push into array. */

  const createCSSVars = (color) => {
    Object.entries(color).forEach(([key, value]) => {
      const array = ['--spx-color-' + type + '-' + (key.length === 2 ? ('0' + key) : key) + '', value['color']]
      styles.push(array)
    })
  }

  if (palette[color]) {
    createCSSVars(palette[color])
  } else {
    createCSSVars(palette['teal'])
  }

  /** Convert array to object and create CSS styles. */

  const cssStyleObject = fromPairs(styles)
  const cssStyles = css({
    ...cssStyleObject,
    label: 'color'
  })
  document.body.classList.add(cssStyles)

  /** Set store. */

  if (!palette[color]) {
    if (type === 'primary') {
      state.colorPrimary = 'teal'
    } else {
      state.colorSecondary = 'pink'
    }
  }
}
