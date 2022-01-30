/**
 * @param {object} obj Lightbox settings.
 */
export function lightbox(obj) {
  const urls = [];
  let modal;

  const onClick = (e) => {
    const padding = 'clamp(30px, 4vw, 40px)';

    const background = obj.lightbox
      ? obj.host.hasAttribute('spx-lightbox') &&
        JSON.parse(obj.host.getAttribute('spx-lightbox'))['overlay-background']
        ? JSON.parse(obj.host.getAttribute('spx-lightbox'))[
            'overlay-background'
          ]
        : 'rgba(0,0,0,0.8)'
      : obj.el.getAttribute('overlay-background');

    const backdropFilter = obj.lightbox
      ? obj.host.hasAttribute('spx-lightbox') &&
        JSON.parse(obj.host.getAttribute('spx-lightbox'))[
          'overlay-backdrop-filter'
        ]
        ? JSON.parse(obj.host.getAttribute('spx-lightbox'))[
            'overlay-backdrop-filter'
          ]
        : 'var(--spx-backdrop-filter)'
      : obj.el.getAttribute('overlay-backdrop-filter');

    const closeButtonColor = obj.lightbox
      ? obj.host.hasAttribute('spx-lightbox') &&
        JSON.parse(obj.host.getAttribute('spx-lightbox'))['close-button-color']
        ? JSON.parse(obj.host.getAttribute('spx-lightbox'))[
            'close-button-color'
          ]
        : '#ffffff'
      : obj.el.getAttribute('close-button-color');

    const spxSlider = obj.lightbox
      ? obj.host?.hasAttribute('spx-lightbox-slider')
        ? obj.host?.getAttribute('spx-lightbox-slider')
        : ''
      : obj.el.getAttribute('spx-slider');

    modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.height = '100vh';
    modal.style.width = '100vw';
    modal.style.padding = padding;
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.background = `var(--spx-lightbox-overlay-background, ${background})`;
    modal.style.backdropFilter = `var(--spx-lightbox-overlay-backdrop-filter, ${backdropFilter})`;
    modal.style.zIndex = '99999999999999999999999999999999999999';

    const modalInner = document.createElement('div');
    modalInner.style.position = 'fixed';
    modalInner.style.top = '0';
    modalInner.style.left = '0';
    modalInner.style.height = '100vh';
    modalInner.style.width = '100vw';
    modalInner.style.cursor = 'pointer';

    const modalClose = document.createElement('button');
    modalClose.style.position = 'fixed';
    modalClose.style.right = '0';
    modalClose.style.top = '0';
    modalClose.style.display = 'flex';
    modalClose.style.justifyContent = 'center';
    modalClose.style.alignItems = 'center';
    modalClose.style.borderRadius = '0';
    modalClose.style.width = padding;
    modalClose.style.height = padding;
    modalClose.style.background = 'none';
    modalClose.style.border = 'none';

    const modalCloseIcon = document.createElement('spx-icon');
    modalCloseIcon.setAttribute('icon', 'close-outline');
    modalCloseIcon.setAttribute('size', '150%');
    modalCloseIcon.setAttribute(
      'color',
      `var(--spx-lightbox-close-button-color, ${closeButtonColor})`
    );

    const slider = document.createElement('spx-slider');
    slider.style.width = '100%';
    slider.setAttribute('navigation', '');
    urls.forEach((item) => {
      const el = document.createElement('img');
      el.setAttribute('src', item);
      slider.appendChild(el);
    });

    slider.setAttribute('start', e.target.getAttribute('data-index'));

    if (
      obj.el.hasAttribute('spx-slider') ||
      obj.host?.hasAttribute('spx-lightbox-slider')
    ) {
      Object.entries(JSON.parse(spxSlider) as unknown).forEach(
        ([key, value]) => {
          slider.setAttribute(key, value);
        }
      );
    }

    modalClose.appendChild(modalCloseIcon);
    modal.appendChild(modalInner);
    if (
      obj.el.hasAttribute('close-button') &&
      obj.el.getAttribute('close-button') !== 'false'
    ) {
      modal.appendChild(modalClose);
    }
    modal.appendChild(slider);
    modalInner.addEventListener('click', function () {
      onRemove();
    });
    modalCloseIcon.addEventListener('click', function () {
      onRemove();
    });
    if (
      obj.el.hasAttribute('body-overflow') &&
      obj.el.getAttribute('body-overflow') !== 'false'
    ) {
      document.body.style.overflow = 'hidden';
    }
    document.body.appendChild(modal);
  };

  const onRemove = () => {
    if (
      obj.el.hasAttribute('body-overflow') &&
      obj.el.getAttribute('body-overflow') !== 'false'
    ) {
      document.body.style.overflow = 'auto';
    }
    modal.remove();
  };

  obj.query.forEach((item, index) => {
    urls.push(item.getAttribute('src'));
    item.setAttribute('data-index', index);
    item.addEventListener('click', onClick);
  });
}
