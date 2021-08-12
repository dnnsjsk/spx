// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';

/**
 * Text input element.
 *
 * @param {object} obj HTML element props.
 * @returns {HTMLElement} Return an HTML element.
 */
export function TextInput(obj) {
  return <input {...obj} type="text" />;
}
