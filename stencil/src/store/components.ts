import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  base: 16,
  bp: [],
  minWidthPx: 640,
  maxWidthPx: 1536,
});

let resizeObserver = null;

onChange('bp', () => {
  if (resizeObserver !== null) {
    resizeObserver.disconnect();
  }
  if (state.bp.length >= 1) {
    resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((itemObserver) => {
        state.bp.forEach(function (x) {
          const keys = Object.keys(x[1]);
          keys.forEach((item, index) => {
            const nextIndex = keys.indexOf(item) + 1;
            const nextItem = keys[nextIndex];
            const width = itemObserver.contentRect.width;
            Object.entries(x[1][item][0]).forEach(([key, value]) => {
              const originalValue = x[1][item][1][key];
              if (
                (width >= Number(item) &&
                  nextIndex &&
                  width < Number(nextItem)) ||
                (index + 1 === keys.length && width >= Number(item))
              ) {
                if (
                  typeof value === 'string' &&
                  x[0].getAttribute(key) !== value
                ) {
                  x[0].setAttribute(key, value);
                }
              } else if (
                width < Number(keys[0]) &&
                x[0].getAttribute(key) !== originalValue
              ) {
                x[0].setAttribute(key, originalValue);
              }
            });
          });
        });
      });
    });

    resizeObserver.observe(document.body);
  }
});

export default state;
