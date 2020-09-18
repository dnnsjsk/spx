import { setVar } from './setVar'

/**
 * Set a clamp property size with multipliers.
 */

export const setSize = (min, val, max, multiplier) => {
  return 'clamp(calc(' + min + ' * ' + multiplier + '), calc(' + val + ' * ' + multiplier + '), calc(' + max + ' * ' + multiplier + '))'
}

export const setFontSize = (tag, type, min, val, max, multiplier) => {
  return setVar(tag, '' + type + '-font-size',
    setSize(min, val, max,
      setVar(tag, '' + type + '-font-size-multiplier',
        setVar(tag, 'font-size-multiplier', multiplier))))
}
