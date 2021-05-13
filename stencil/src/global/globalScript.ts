import { setMode } from '@stencil/core';

export default async () => {
  /**
   * Theme switcher.
   * Only used for code component currently.
   */
  setMode((elm) => {
    return (elm as any).theme || elm.getAttribute('theme') || 'default';
  });
};
