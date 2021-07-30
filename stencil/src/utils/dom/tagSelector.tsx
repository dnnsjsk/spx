// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';

/**
 * Tag selector.
 *
 * @param {boolean} condition Check if create node or use slot instead.
 * @param {string} tag Tag name.
 * @param {string} text Inner text.
 * @param {string} slot Slot name.
 * @param {string} style Class name.
 * @returns {HTMLElement} Returns a HTML element.
 */
export function tagSelector(condition, tag, text, slot, style = null) {
  return condition ? (
    tag === 'h1' ? (
      <h1 class={style}>{text}</h1>
    ) : tag === 'h2' ? (
      <h2 class={style}>{text}</h2>
    ) : tag === 'h3' ? (
      <h3 class={style}>{text}</h3>
    ) : tag === 'h4' ? (
      <h4 class={style}>{text}</h4>
    ) : tag === 'h5' ? (
      <h5 class={style}>{text}</h5>
    ) : tag === 'h6' ? (
      <h6 class={style}>{text}</h6>
    ) : tag === 'p' ? (
      <p class={style}>{text}</p>
    ) : (
      <span class={style}>{text}</span>
    )
  ) : (
    <slot name={slot} />
  );
}
