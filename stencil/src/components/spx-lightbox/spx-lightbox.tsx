// eslint-disable-next-line no-unused-vars
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
} from '@stencil/core';
import GLightbox from 'glightbox';
import { wrap } from '../../utils/wrap';
import { css } from '@emotion/css';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-lightbox';

/**
 * Overlay a gallery of images on top of the current page.
 */

@Component({
  tag: 'spx-lightbox',
  styleUrl: '../../../node_modules/glightbox/dist/css/glightbox.css',
})
export class SpxLightbox {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxLightboxElement;

  @Prop({ reflect: true }) display: string = 'block';

  @Prop({ reflect: true }) height: string = 'auto';

  @Prop({ reflect: true }) overlayColor: string = 'rgba(0, 0, 0, 0.92)';

  @Prop({ reflect: true }) width: string = '100%';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxLightboxDidLoad' })
  spxLightboxDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /** Generate random string as gallery ID. */

    const random = '_' + Math.random().toString(36).substr(2, 9);

    /** Wrap elements in <a> element. */

    const elements = this.el.querySelectorAll('img, video, iframe');

    elements.forEach((item) => {
      const src = item.getAttribute('src');
      wrap(item, document.createElement('a'));
      item.parentElement.setAttribute('href', src);
      item.parentElement.style.display = 'block';
      item.parentElement.style.maxWidth = '100%';
      item.parentElement.classList.add('spx-lightbox__item');
      item.parentElement.setAttribute('data-gallery', random);
    });

    /** Create lightbox. */

    // eslint-disable-next-line no-new
    new GLightbox({
      selector: '.spx-lightbox__item',
      touchNavigation: true,
      openEffect: 'none',
      closeEffect: 'none',
      height: this.height,
      width: this.width,
      svg: {
        close: '<spx-icon icon="close" color="#ffffff" size="32px"/>',
        prev: '<spx-icon icon="arrow-back" color="#ffffff" size="32px"/>',
        next: '<spx-icon icon="arrow-forward" color="#ffffff" size="32px"/>',
      },
      onOpen: () => {
        const lightbox = document.querySelector('#glightbox-body');
        lightbox.classList.add(
          css({
            'spx-icon': {
              height: '32px',
              width: '32px',
            },

            '.gslide-media': {
              boxShadow: 'none !important',
            },

            '.goverlay': {
              background:
                setVar(tag, 'overlay-color', this.overlayColor) + ' !important',
            },

            '.gbtn': {
              display: 'flex',
              alignItems: 'center !important',
              justifyContent: 'center !important',
              backgroundColor: 'transparent !important',
              padding: '0 !important',
              opacity: '0.7',
              width: 'unset !important',
              height: 'unset !important',

              '&:hover': {
                opacity: 1,
              },

              '&.gnext': {
                right: '20px !important',
              },

              '&.gprev': {
                left: '20px !important',
              },
            },

            '.gprev.disabled, .gnext.disabled, .gclose.disabled': {
              opacity: '0 !important',
            },
          })
        );
        disableBodyScroll(lightbox);
      },
      onClose: () => {
        clearAllBodyScrollLocks();
      },
    });

    this.spxLightboxDidLoad.emit({ target: 'document' });
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: setVar(tag, 'display', this.display),

      img: {
        verticalAlign: 'top',
      },
    });

    return <Host class={styleHost} />;
  }
}
