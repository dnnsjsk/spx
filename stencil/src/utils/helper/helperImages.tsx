// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';

/**
 * Render elements from images prop.
 *
 * @param {object} obj Settings.
 * @returns {HTMLCollection} Collection of HTML elements.
 */
export function helperImages(obj) {
  return obj.images && (!obj.src || obj.src === 'acf')
    ? /** Iterate through ACF array if prop was set. */
      obj.array.map((el) => (
        <img
          src={!obj.lazy && (obj.size ? el['sizes'][obj.size] : el['url'])}
          data-src={obj.lazy && (obj.size ? el['sizes'][obj.size] : el['url'])}
          alt=""
        />
      ))
    : /** Iterate through MB array if prop was set. */
      obj.images &&
        obj.src === 'mb' &&
        Object.values(obj.array).map((el) => (
          <img
            src={
              !obj.lazy &&
              (obj.size ? el['sizes'][obj.size].url : el['full_url'])
            }
            data-src={
              obj.lazy &&
              (obj.size ? el['sizes'][obj.size].url : el['full_url'])
            }
            alt=""
          />
        ));
}
