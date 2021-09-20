import { createStore } from '@stencil/store';

const { state } = createStore({
  base: 16,
  minWidthPx: 640,
  maxWidthPx: 1536,
});

export default state;
