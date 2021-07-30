// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';
import { helperImages } from './helperImages';
import { sanitize } from '../3rd/sanitize';

/**
 * Either renders image helper or inner content.
 *
 * @param {object} obj Settings.
 * @returns {HTMLElement} HTML element with innerHTML or generated content.
 */
export function helperImagesOrInner(obj) {
  return (
    <div
      ref={obj.ref}
      class={obj.class}
      innerHTML={!obj.condition ? sanitize(obj.content) : ''}
    >
      {obj.condition && helperImages(obj.helper)}
    </div>
  );
}
