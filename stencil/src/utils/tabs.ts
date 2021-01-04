import { css, keyframes } from '@emotion/css';
import { setVar } from './setVar';
import { gsap } from 'gsap';

/**
 * Tabs logic.
 */

export const tabs = (
  el,
  tag,
  transitionDuration = '1000ms',
  animate = false,
  animationDuration = 0,
  animationColor = ''
) => {
  const headerElements = el.querySelectorAll('[data-spx-tabs-header]');
  const headerElementsFirst = el.querySelector(
    '[data-spx-tabs-header]:first-of-type'
  );
  const contentElements = el.querySelectorAll('[data-spx-tabs-content]');
  const contentElementsFirst = el.querySelector(
    '[data-spx-tabs-content]:first-of-type'
  );

  /** Header elements. */

  headerElements.forEach((item, index) => {
    item.classList.add(
      css({
        cursor: 'pointer',
        textAlign: 'left',

        '&[open]': {
          '--spx-tabs-animation-width': '0%',
          pointerEvents: 'none',

          span: {
            background:
              animate &&
              'linear-gradient(90deg,' +
                setVar(tag, 'tabs-animation-color', animationColor) +
                ' var(--spx-tabs-animation-width), currentColor 0) !important',
            backgroundClip: animate && 'text !important',
            textFillColor: animate && 'transparent !important',
          },
        },
      })
    );
    item.setAttribute('data-spx-tabs-index', index);
  });

  /** Animation in. */

  const kfIn = keyframes({
    '0%': {
      opacity: 0,
    },
    '30%, 100%': {
      opacity: 1,
    },
  });

  contentElements.forEach((item, index) => {
    item.classList.add(
      css({
        display: 'none',
        opacity: '0',

        '&[open]': {
          display: 'block',
          animation: kfIn,
          animationDuration: transitionDuration,
          animationFillMode: 'forwards',
          animationTimingFunction: 'var(--spx-transition-timing-function)',
        },
      })
    );
    item.setAttribute('data-spx-tabs-index', index);
  });

  /** Set up click events. */

  headerElements.forEach((item) => {
    item.addEventListener('click', () => {
      /** Remove header attributes. */

      headerElements.forEach((item) => {
        item.removeAttribute('open');
      });

      /** Remove content attributes */

      contentElements.forEach((item) => {
        item.removeAttribute('open');
      });

      /** Set clicked item attribute. */

      item.setAttribute('open', '');

      /** Start animation. */

      if (animate) {
        gsap.globalTimeline.getChildren().forEach((t) => t.kill());
        gsap.set(item, {
          '--spx-tabs-animation-width': '0%',
        });
        gsap.to(el.querySelector('[open]'), {
          '--spx-tabs-animation-width': '100%',
          ease: 'linear',
          duration: animationDuration,
          onComplete: () => {
            if (
              el.querySelectorAll('button').length ===
              parseInt(
                el.querySelector('[open]').getAttribute('data-spx-tabs-index'),
                10
              ) +
                1
            ) {
              headerElementsFirst.click();
            } else {
              el.querySelector('[open] + button').click();
            }
          },
        });
      }

      /** Set click content attribute. */

      el.querySelector(
        '[data-spx-tabs-content="' +
          item.getAttribute('data-spx-tabs-header') +
          '"]'
      ).setAttribute('open', '');
    });
  });

  /** Set up initial data and fire off animation if set. */

  headerElementsFirst.setAttribute('open', '');
  if (animate) {
    headerElementsFirst.click();
  }
  contentElementsFirst.setAttribute('open', '');
};
