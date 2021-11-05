import { createStore } from '@stencil/store';
import { selectTemplate } from '../utils/editor/selectTemplate';

const { state, onChange } = createStore({
  activeCode: '',
  activeCode2: undefined,
  activeComponent: 'spx-accordion',
  activeControlObject: {},
  activeControls: [],
  activeElement: null,
  activeTemplate: 'Default',
  changedControls: [],
  components: {},
  height: '100vh',
  modeCode: false,
  modeFullscreen: false,
  modeSelected: true,
  showComponents: false,
  showContent: true,
  showControls: false,
});

onChange('activeComponent', () => {
  selectTemplate();
});

onChange('activeTemplate', () => {
  selectTemplate();
});

onChange('modeCode', (value) => {
  if (value === true) {
    state.showControls = false;
    state.showComponents = false;
    state.showContent = true;
  }
});

onChange('modeFullscreen', (value) => {
  if (value === true) {
    state.height = '100vh';
  } else {
    state.height = 'var(--vh) - var(--spx-offset)';
  }
});

onChange('showComponents', (value) => {
  if (value === true) {
    state.showControls = false;
    state.showContent = false;
    state.modeCode = false;
  } else {
    state.showContent = true;
  }
});

onChange('showControls', (value) => {
  if (value === true) {
    state.showComponents = false;
    state.showContent = false;
    state.modeCode = false;
  } else {
    state.showContent = true;
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1025) {
    state.showComponents = false;
    state.showControls = false;
    state.showContent = true;
  }
});

export default state;
