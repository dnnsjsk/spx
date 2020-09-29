import { setMode } from '@stencil/core'

export default async () => {
  /** Theme switcher. */

  setMode(elm => {
    return (elm as any).theme || elm.getAttribute('theme') || 'default'
  })
}
