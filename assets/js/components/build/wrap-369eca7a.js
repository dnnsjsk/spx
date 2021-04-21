/**
 * Wrap element in another element.
 */
const wrap = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

export { wrap as w };
