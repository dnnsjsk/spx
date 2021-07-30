import createEmotion from '@emotion/css/create-instance';

/**
 * Create custom Emotion instance.
 *
 * @param {HTMLElement} el HTML element.
 * @returns {object} Emotion object.
 */
export function cssEmotion(el) {
  return createEmotion({
    key: 'spx',
    container: el,
  });
}
