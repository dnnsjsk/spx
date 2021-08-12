// eslint-disable-next-line no-unused-vars
import { Component, h, Element } from '@stencil/core';
import { cssTw } from '../../../utils/css/cssTw';

@Component({
  tag: 'spx-control-group',
  shadow: true,
})
export class SpxControlGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlGroupElement;

  render() {
    const { tw } = cssTw(this.el.shadowRoot);

    return (
      <div class={tw(`grid gap-6`)}>
        <slot />
      </div>
    );
  }
}
