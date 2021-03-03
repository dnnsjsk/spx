// eslint-disable-next-line no-unused-vars
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// eslint-disable-next-line no-unused-vars
import { JsonDocs } from '@stencil/core/internal';
import { promises as fs } from 'fs';

/*
import linaria from 'linaria/rollup'
import path from 'path'
import css from 'rollup-plugin-css-only'
 */

/** KebabCase helper. */

const toKebabCase = (str) => {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

/** Generate custom documentation. */

async function generateCustomElementsJSON(docsData: JsonDocs) {
  async function generate(dir, dirComponents) {
    /** Delete and create dir. */

    await fs.rmdir(dir, { recursive: true });
    await fs.mkdir(dir);
    await fs.rmdir(dirComponents, { recursive: true });
    await fs.mkdir(dirComponents);

    /** Create file for each component. */

    await docsData.components.forEach((component) => {
      const data = {
        name: component.tag,
        description: component.docs,
        properties: component.props.map((prop) => ({
          id: component.tag.replace('spx-', '') + '-' + prop.name,
          name: prop.name,
          attribute: toKebabCase(prop.name),
          type: prop.type,
          description: prop.docs,
          default: prop.default,
          defaultValue:
            prop.default === 's.bpMobileWidth'
              ? 768
              : prop.default === 's.fontFamily'
              ? "'var(--spx-font-family)'"
              : prop.default === 's.fontSize'
              ? "'var(--spx-font-size)'"
              : prop.default === 's.borderRadius'
              ? "'var(--spx-border-radius)'"
              : prop.default === 's.transitionDuration'
              ? "'var(--spx-transition-duration)'"
              : prop.default === 's.transitionDuration2'
              ? "'var(--spx-transition-duration-2)'"
              : prop.default === 's.transitionTimingFunction'
              ? "'var(--spx-transition-timing-function)'"
              : prop.default,
          tags: prop.docsTags,
        })),

        events: component.events.map((event) => ({
          name: event.event,
          description: event.docs,
        })),

        methods: component.methods.map((method) => ({
          name: method.name,
          description: method.docs,
          signature: method.signature,
        })),

        slots: component.slots.map((slot) => ({
          name: slot.name,
          description: slot.docs,
        })),
      };

      /** Write files. */
      fs.writeFile(
        dirComponents + component.tag + '.json',
        JSON.stringify(data, null, 2)
      );
    });
  }

  await generate('./../data/', './../data/components/');

  await generate(
    './../../../themes/spx-child/documentation/',
    './../../../themes/spx-child/documentation/components/'
  );
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
      empty: true,
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: '../assets/js/bundle',
      empty: true,
    },
    {
      type: 'docs-custom',
      generator: generateCustomElementsJSON,
    },
  ],
  plugins: [sass()],
  /*
      rollupPlugins: {
        after: [
          linaria(),
          css({
            output: '../assets/css/spx.css'
          })
        ]
      },
       */
  devServer: {
    openBrowser: false,
  },
};
