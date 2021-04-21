import { css } from '@emotion/css';
import { has } from 'lodash-es';
import { removeClasses } from './removeClasses';

/**
 * Overwrite container settings as variables.
 */

export const setSectionVar = (el) => {
  /** Get prop lists. */

  const objParent = {};
  Array.prototype.slice
    .call(el.closest('spx-container').attributes)
    .forEach(function (item) {
      objParent[item.name] = item.value;
    });

  const objEl = {};
  Array.prototype.slice.call(el.attributes).forEach(function (item) {
    objEl[item.name] = item.value;
  });

  /** Add class. */

  const style = {};

  /** Set up mutation observer. */

  const targetNode = el;
  const config = { attributes: true };

  const callback = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      const attribute = mutation.attributeName.replace('c-', '');

      if (
        mutation.attributeName.startsWith('c-') &&
        has(objParent, attribute)
      ) {
        style['--spx-container-' + attribute + ''] = el.getAttribute(
          mutation.attributeName
        );
        const styleCSS = css({ ...style, label: 'container' });
        removeClasses(el, 'container');
        el.classList.add(styleCSS);
      }
    });
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);

  /** Set up styles for start. */

  Object.keys(objEl).forEach((item) => {
    const attribute = item.replace('c-', '');

    if (item.startsWith('c-') && has(objParent, attribute)) {
      style['--spx-container-' + attribute + ''] = el.getAttribute(item);
      const styleCSS = css({ ...style, label: 'container' });
      removeClasses(el, 'container');
      el.classList.add(styleCSS);
    }
  });
};
