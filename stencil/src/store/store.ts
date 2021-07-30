import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  base: 16,
  minWidthPx: 640,
  maxWidthPx: 1536,
});

onChange('base', (value) => {
  state.base = value;
});

onChange('minWidthPx', (value) => {
  state.minWidthPx = value;
});

onChange('maxWidthPx', (value) => {
  state.maxWidthPx = value;
});

export default state;
