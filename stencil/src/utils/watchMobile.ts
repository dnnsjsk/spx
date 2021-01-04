import state from '../stores/container';

/**
 * Set mobile class on body.
 */

export const watchMobile = () => {
  if (window.innerWidth < state.bpMobileWidth) {
    state.bpMobile = true;
    document.body.classList.add('spx-mobile');
  } else {
    state.bpMobile = false;
    document.body.classList.remove('spx-mobile');
  }
};
