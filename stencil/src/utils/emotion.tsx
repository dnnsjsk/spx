import createEmotion from '@emotion/css/create-instance';

/**
 * Create custom Emotion instance.
 */
export const emotion = (el) =>
  createEmotion({
    key: 'spx',
    container: el,
  });
