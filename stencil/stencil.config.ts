// eslint-disable-next-line no-unused-vars
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// eslint-disable-next-line no-unused-vars
import { JsonDocs } from '@stencil/core/internal';
import { promises as fs } from 'fs';

/**
 * @param {JsonDocs} docsData JSON Docs.
 */
async function generateCustomElementsJSON(docsData: JsonDocs) {
  /**
   * @param {object} dir Directory.
   * @param {object} dirComponents Directory.
   */
  async function generate(dir, dirComponents) {
    /** Delete and create dir. */
    await fs.rmdir(dir, { recursive: true });
    await fs.mkdir(dir);
    await fs.rmdir(dirComponents, { recursive: true });
    await fs.mkdir(dirComponents);

    /** Create file for each component. */
    await Promise.all(
      // eslint-disable-next-line array-callback-return
      docsData.components.map((component) => {
        const data = {
          name: component.tag,
          description: component.docs,
          properties: component.props.map((prop, index) => ({
            attribute: prop.attr,
            default: prop.default,
            description: prop.docs,
            id: component.tag + '-' + index,
            index: index,
            name: prop.name,
            tags: prop.docsTags,
            type: prop.type,
            ...(prop.docsTags[0]?.name === 'css' && {
              variable: `--${component.tag}-${prop.attr}`,
            }),
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

        /**
         * Write files and replace JSDoc variables.
         */
        if (
          !component.tag.includes('editor') &&
          !component.tag.includes('control') &&
          component.tag !== 'spx-edit'
        ) {
          return fs.writeFile(
            dirComponents + component.tag + '.json',
            JSON.stringify(data, null, 2)
              .replace(/"'/gm, '"')
              .replace(/'"/gm, '"')
              .replace(
                /\[prop:target\]/gm,
                'Target element. Can take any querySelector value. (id, class, tag etc.)'
              )
              .replace(
                /\[prop:lightbox\]/gm,
                "Will open images in a lightbox on click. Use 'spx-lightbox' and 'spx-lightbox-slider' properties and adjust its settings."
              )
              .replace(
                /\[component:spx-slider\]/gm,
                'Pass attributes to the inner &lt;spx-slider> component using a JSON string: { \\"slides-per-view\\": \\"2.5\\" }'
              )
              .replace(
                /\[component:spx-lightbox\]/gm,
                'Pass attributes to the inner &lt;spx-lightbox> component using a JSON string: { \\"overlay-background\\": \\"red\\" }'
              )
              .replace(
                /\[event:loaded\]/gm,
                'Fires after component has loaded.'
              )
              .replace(/\[slot:inner\]/gm, 'inner - Slot (between HTML tag).')
          );
        }
      })
    );
  }

  await generate('./../data/', './../data/components/');

  await generate(
    './../../../themes/spx-child/documentation/',
    './../../../themes/spx-child/documentation/components/'
  );
}

export const config: Config = {
  namespace: 'spx',
  taskQueue: 'async',
  globalStyle: 'src/scss/global.scss',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      dir: '../assets/components',
      empty: true,
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: '../assets/bundle',
      empty: true,
    },
    {
      type: 'docs-custom',
      generator: generateCustomElementsJSON,
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/scss/mixins.scss'],
    }),
  ],
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload',
  },
  testing: {
    setupFilesAfterEnv: ['./jest.config.ts'],
    transform: {
      '^.+\\.(ts|tsx|js|jsx|css)$':
        '<rootDir>/node_modules/@stencil/core/testing/jest-preprocessor.js',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!lodash-es|resize-observer|ionicons)',
    ],
  },
};
