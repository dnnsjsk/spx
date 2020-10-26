// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';

/**
 *  Render elements from images prop.
 */

export const getGallery = (images, imagesSrc, imagesArray, imageSize) => {
  return images && !imagesSrc ? (
    /** Iterate through ACF array if prop was set. */

    imagesArray.map((el) => (
      <img src={imageSize ? el['sizes'][imageSize] : el['url']} />
    ))
  ) : /** Iterate through MB array if prop was set. */

  images && imagesSrc === 'mb' ? (
    Object.values(imagesArray).map((el) => (
      <img src={imageSize ? el['sizes'][imageSize].url : el['full_url']} />
    ))
  ) : (
    <slot />
  );
};
