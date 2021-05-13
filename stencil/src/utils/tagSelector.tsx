// eslint-disable-next-line no-unused-vars
import { h } from '@stencil/core';

/**
 * Tag selector.
 */
export const tagSelector = (condition, tag, text, slot, style = null) => {
  return condition ? (
    tag === 'h1' ? (
      <h1 class={style || false}>{text}</h1>
    ) : tag === 'h2' ? (
      <h2 class={style || false}>{text}</h2>
    ) : tag === 'h3' ? (
      <h3 class={style || false}>{text}</h3>
    ) : tag === 'h4' ? (
      <h4 class={style || false}>{text}</h4>
    ) : tag === 'h5' ? (
      <h5 class={style || false}>{text}</h5>
    ) : tag === 'h6' ? (
      <h6 class={style || false}>{text}</h6>
    ) : tag === 'p' ? (
      <p class={style || false}>{text}</p>
    ) : (
      <span class={style || false}>{text}</span>
    )
  ) : (
    <slot name={slot} />
  );
};
