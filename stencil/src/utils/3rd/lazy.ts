import LazyLoad from 'vanilla-lazyload';

/**
 * Set lazy loading.
 *
 * @param {object} obj Lazy object.
 */
export function lazy(obj) {
  if (obj.condition) {
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    const lazyLoadInstance = new LazyLoad(
      {
        unobserve_entered: true,
        unobserve_completed: true,
      },
      obj.el.shadowRoot.querySelectorAll('[data-src]')
    );
  }
}
