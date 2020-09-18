// eslint-disable-next-line no-unused-vars
import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
// eslint-disable-next-line no-unused-vars
import { JsonDocs } from '@stencil/core/internal'
import { promises as fs } from 'fs'

/** Generate custom documentation. */

async function generateCustomElementsJSON (docsData: JsonDocs) {
  const dir = './../../../themes/spx-child/documentation/'
  const dirGlobal = './../../../themes/spx-child/documentation/global/'
  const dirComponents = './../../../themes/spx-child/documentation/components/'
  const dirSections = './../../../themes/spx-child/documentation/sections/'
  const dirPages = './../../../themes/spx-child/documentation/pages/'

  /** Delete and create dir. */

  await fs.rmdir(dir, { recursive: true })
  await fs.mkdir(dir)
  await fs.rmdir(dirGlobal, { recursive: true })
  await fs.mkdir(dirGlobal)
  await fs.rmdir(dirComponents, { recursive: true })
  await fs.mkdir(dirComponents)
  await fs.rmdir(dirSections, { recursive: true })
  await fs.mkdir(dirSections)
  await fs.rmdir(dirPages, { recursive: true })
  await fs.mkdir(dirPages)

  /** Create file for each component. */

  await docsData.components.forEach((component) => {
    const data = {
      name: component.tag,
      description: component.docs,
      properties: component.props.map((prop) => ({
        name: prop.name,
        type: prop.type,
        description: prop.docs,
        defaultValue: prop.default,
        tags: prop.docsTags
      })),

      events: component.events.map((event) => ({
        name: event.event,
        description: event.docs
      })),

      methods: component.methods.map((method) => ({
        name: method.name,
        description: method.docs,
        signature: method.signature
      })),

      slots: component.slots.map((slot) => ({
        name: slot.name,
        description: slot.docs
      }))
    }

    /** Write files. */

    if (component.tag.startsWith('spx-section')) {
      fs.writeFile(
        dirSections + component.tag + '.json',
        JSON.stringify(data, null, 2)
      )
    } else if (component.tag.startsWith('spx-page')) {
      fs.writeFile(
        dirPages + component.tag + '.json',
        JSON.stringify(data, null, 2)
      )
    } else if (component.tag.startsWith('spx-container')) {
      fs.writeFile(
        dirGlobal + component.tag + '.json',
        JSON.stringify(data, null, 2)
      )
    } else {
      fs.writeFile(
        dirComponents + component.tag + '.json',
        JSON.stringify(data, null, 2)
      )
    }
  })
}

export const config: Config = {
  namespace: 'spx',
  globalScript: 'src/global/globalScript.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      dir: '../assets/js/components',
      empty: true
    },
    {
      type: 'docs-custom',
      generator: generateCustomElementsJSON
    }
  ],
  plugins: [
    sass()
  ]
}
