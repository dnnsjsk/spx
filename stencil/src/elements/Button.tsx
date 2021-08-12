// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';

/**
 * Button element.
 *
 * @param {object} obj HTML element props.
 * @param {HTMLCollection} children HTML element children.
 * @returns {HTMLElement} Return an HTML element.
 */
export function Button(obj, children) {
  const props = {
    onKeyDown: function (e) {
      if (obj.onEnter && (e.key === 'Enter' || e.key === 'enter')) {
        obj.onEnter();
      }
      if (obj.onArrowLeft && e.key === 'ArrowLeft') {
        obj.onArrowLeft();
      }
      if (obj.onArrowRight && e.key === 'ArrowRight') {
        obj.onArrowRight();
      }
    },
  };

  const mergedProps = { ...props, ...obj };

  return obj.href ? (
    <a style={{ textAlign: 'left' }} {...mergedProps}>
      {children}
    </a>
  ) : obj.as === 'div' ? (
    <div
      style={{ textAlign: 'left' }}
      role="button"
      tabindex="0"
      {...mergedProps}
    >
      {children}
    </div>
  ) : (
    <button style={{ textAlign: 'left' }} {...mergedProps}>
      {children}
    </button>
  );
}
