// eslint-disable-next-line no-unused-vars
import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'spx-control-group',
  styleUrl: 'spx-control-group.scss',
  shadow: true,
})
export class SpxControlGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlGroupElement;

  render() {
    return (
      <div class="inner">
        <slot />
      </div>
    );
  }
}
