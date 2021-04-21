import { s as setMode } from './index-889edf71.js';

const appGlobalScript = async () => {
  /**
   * Theme switcher.
   * Only used for code component currently.
   */
  setMode((elm) => {
    return elm.theme || elm.getAttribute('theme') || 'default';
  });
};

const globalScripts = appGlobalScript;

export { globalScripts as g };
