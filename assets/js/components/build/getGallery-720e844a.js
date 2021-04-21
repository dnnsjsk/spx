import { h } from './index-889edf71.js';

// eslint-disable-next-line no-unused-vars
/**
 *  Render elements from images prop.
 */
const getGallery = (images, imagesSrc, imagesArray, imageSize) => {
  return images && !imagesSrc ? (
  /** Iterate through ACF array if prop was set. */
  imagesArray.map((el) => (h("img", { src: imageSize ? el['sizes'][imageSize] : el['url'] })))) : /** Iterate through MB array if prop was set. */
    images && imagesSrc === 'mb' ? (Object.values(imagesArray).map((el) => (h("img", { src: imageSize ? el['sizes'][imageSize].url : el['full_url'] })))) : (h("slot", null));
};

export { getGallery as g };
